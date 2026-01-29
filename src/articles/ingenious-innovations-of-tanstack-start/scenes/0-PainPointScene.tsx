import type React from "react"
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion"
import { SplitScreenComparison } from "../components/SplitScreenComparison"
import { SwordSlashEffect } from "../components/SwordSlashEffect"
import { COLORS } from "../data/constants"

const TraditionalWay: React.FC = () => {
  const frame = useCurrentFrame()

  const steps = [
    { text: "在 DevTools 中寻找类名", delay: 30 },
    { text: "复制粘贴 -> 全局搜索", delay: 90 },
    { text: "找不到，逐段删除尝试", delay: 150 },
  ]

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 30,
      }}
    >
      {steps.map((step, index) => {
        const stepProgress = Math.min(1, Math.max(0, (frame - step.delay) / 30))
        const opacity = interpolate(stepProgress, [0, 1], [0, 1])
        const scale = spring({
          frame: Math.max(0, frame - step.delay),
          fps: 30,
          config: { damping: 12, stiffness: 80, mass: 1 },
        })

        return (
          <div
            key={index}
            style={{
              opacity,
              transform: `scale(${scale})`,
              padding: "20px 30px",
              backgroundColor: `${COLORS.error}20`,
              border: `2px solid ${COLORS.error}`,
              borderRadius: 8,
              fontSize: 28,
              color: COLORS.text.primary,
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: 15,
            }}
          >
            <span style={{ fontSize: 36 }}>❌</span>
            {step.text}
          </div>
        )
      })}
    </div>
  )
}

const TanStackWay: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 40,
      }}
    >
      <div
        style={{
          padding: "30px 40px",
          backgroundColor: `${COLORS.success}20`,
          border: `3px solid ${COLORS.success}`,
          borderRadius: 12,
          fontSize: 32,
          color: COLORS.text.primary,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        <div style={{ marginBottom: 15 }}>Ctrl + Shift + Click</div>
        <div style={{ fontSize: 24, color: COLORS.text.secondary }}>
          任意元素
        </div>
      </div>

      <div
        style={{
          padding: "20px 30px",
          backgroundColor: `${COLORS.primary}20`,
          border: `2px solid ${COLORS.primary}`,
          borderRadius: 8,
          fontSize: 24,
          color: COLORS.text.primary,
          fontFamily: "monospace",
        }}
      >
        data-tsd-source="/src/components/Header.tsx:23:7"
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 15,
          fontSize: 28,
          color: COLORS.success,
          fontWeight: "bold",
        }}
      >
        <span style={{ fontSize: 36 }}>✅</span>
        编辑器自动打开
      </div>
    </div>
  )
}

export const PainPointScene: React.FC = () => {
  const frame = useCurrentFrame()
  const { width, height } = useVideoConfig()

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.background }}>
      <SplitScreenComparison
        leftContent={<TraditionalWay />}
        rightContent={<TanStackWay />}
        leftLabel="传统方式"
        rightLabel="TanStack Start"
        leftColor={COLORS.error}
        rightColor={COLORS.success}
      />

      <SwordSlashEffect
        startX={width * 0.75}
        startY={height * 0.5}
        endX={width * 0.9}
        endY={height * 0.3}
        delay={60}
      />

      <div
        style={{
          position: "absolute",
          bottom: 100,
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 48,
          color: COLORS.text.primary,
          fontWeight: "bold",
          textShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
          opacity: interpolate(Math.min(1, (frame - 180) / 30), [0, 1], [0, 1]),
        }}
      >
        繁琐 vs 优雅
      </div>
    </AbsoluteFill>
  )
}
