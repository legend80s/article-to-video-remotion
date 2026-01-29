import type React from "react"
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion"
import { CodeFlowAnimation } from "../components/CodeFlowAnimation"
import { COLORS } from "../data/constants"

const FLOW_NODES = [
  { id: "1", label: "点击元素", icon: "👆", x: 200, y: 300 },
  { id: "2", label: "data属性", icon: "🏷️", x: 500, y: 300 },
  { id: "3", label: "网络请求", icon: "🌐", x: 800, y: 300 },
  { id: "4", label: "服务端处理", icon: "⚙️", x: 1100, y: 300 },
  { id: "5", label: "打开编辑器", icon: "📝", x: 1400, y: 300 },
  { id: "6", label: "定位代码", icon: "📍", x: 1700, y: 300 },
]

const FLOW_CONNECTIONS = [
  { from: "1", to: "2", label: "读取" },
  { from: "2", to: "3", label: "发送" },
  { from: "3", to: "4", label: "请求" },
  { from: "4", to: "5", label: "调用" },
  { from: "5", to: "6", label: "定位" },
]

const CodeSnippet: React.FC<{ code: string; delay: number }> = ({
  code,
  delay,
}) => {
  const frame = useCurrentFrame()
  const progress = Math.min(1, (frame - delay) / 30)
  const opacity = interpolate(progress, [0, 0.2, 1], [0, 1, 1])

  return (
    <div
      style={{
        padding: 20,
        backgroundColor: COLORS.surface,
        borderRadius: 8,
        border: `2px solid ${COLORS.primary}`,
        fontFamily: "monospace",
        fontSize: 18,
        color: COLORS.text.code,
        opacity,
        transform: `translateY(${interpolate(progress, [0, 1], [50, 0])}px)`,
      }}
    >
      {code}
    </div>
  )
}

export const HowItWorksScene: React.FC = () => {
  const frame = useCurrentFrame()

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.background }}>
      <div
        style={{
          position: "absolute",
          top: 60,
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 56,
          color: COLORS.text.primary,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        工作原理
      </div>

      <CodeFlowAnimation nodes={FLOW_NODES} connections={FLOW_CONNECTIONS} />

      <div
        style={{
          position: "absolute",
          bottom: 60,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 30,
          width: "80%",
          justifyContent: "center",
        }}
      >
        <CodeSnippet
          code={`data-tsd-source="/src/components/Header.tsx:23:7"`}
          delay={30}
        />
        <CodeSnippet
          code={`launch-editor(file: string, line: number, col: number)`}
          delay={120}
        />
        <CodeSnippet code={`// 精确定位到行:列`} delay={210} />
      </div>

      <div
        style={{
          position: "absolute",
          top: 150,
          right: 60,
          padding: "20px 30px",
          backgroundColor: `${COLORS.success}20`,
          border: `2px solid ${COLORS.success}`,
          borderRadius: 8,
          fontSize: 24,
          color: COLORS.text.primary,
          opacity: interpolate(Math.min(1, (frame - 300) / 30), [0, 1], [0, 1]),
        }}
      >
        ✅ 实时响应，毫秒级定位
      </div>
    </AbsoluteFill>
  )
}
