import type React from "react"
import {
  AbsoluteFill,
  interpolate,
  Sequence,
  spring,
  useCurrentFrame,
} from "remotion"
import { FileTreeGrowth } from "../components/FileTreeGrowth"
import { COLORS } from "../data/constants"
import { useTypewriter } from "../utils/animations"

const OldWay: React.FC = () => {
  const frame = useCurrentFrame()
  const command = useTypewriter("foo-cli gen new-page", 0, 10)

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 40,
      }}
    >
      <div
        style={{
          fontSize: 56,
          color: COLORS.text.primary,
          fontWeight: "bold",
        }}
      >
        传统方式
      </div>

      <div
        style={{
          padding: "30px 40px",
          backgroundColor: COLORS.background,
          borderRadius: 12,
          border: `2px solid ${COLORS.border}`,
          fontFamily: "monospace",
          fontSize: 32,
          color: COLORS.text.code,
        }}
      >
        $ {command}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          fontSize: 36,
          color: COLORS.error,
          fontWeight: "bold",
          opacity: interpolate(Math.min(1, (frame - 60) / 20), [0, 1], [0, 1]),
        }}
      >
        <span style={{ fontSize: 48 }}>❌</span>
        容易忘记命令
      </div>

      <div
        style={{
          padding: "20px 30px",
          backgroundColor: `${COLORS.error}20`,
          border: `2px solid ${COLORS.error}`,
          borderRadius: 8,
          fontSize: 24,
          color: COLORS.text.primary,
          opacity: interpolate(Math.min(1, (frame - 90) / 20), [0, 1], [0, 1]),
        }}
      >
        需要查阅文档，降低开发效率
      </div>
    </div>
  )
}

const TanStackWay: React.FC = () => {
  const frame = useCurrentFrame()

  const fileTree = [
    {
      id: "root",
      name: "src",
      type: "folder" as const,
      icon: "📁",
      children: [
        {
          id: "routes",
          name: "routes",
          type: "folder" as const,
          icon: "📁",
          children: [
            {
              id: "index",
              name: "index.tsx",
              type: "file" as const,
              icon: "📄",
            },
            {
              id: "about",
              name: "about.tsx",
              type: "file" as const,
              icon: "📄",
            },
          ],
        },
        {
          id: "components",
          name: "components",
          type: "folder" as const,
          icon: "📁",
          children: [
            {
              id: "header",
              name: "Header.tsx",
              type: "file" as const,
              icon: "📄",
            },
          ],
        },
      ],
    },
  ]

  const highlightNode = frame > 180 ? "about" : undefined
  const showTemplate = frame > 240

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 30,
      }}
    >
      <div
        style={{
          fontSize: 56,
          color: COLORS.text.primary,
          fontWeight: "bold",
        }}
      >
        TanStack Start 方式
      </div>

      <div
        style={{
          width: "60%",
          height: "60%",
          backgroundColor: COLORS.surface,
          borderRadius: 12,
          border: `2px solid ${COLORS.border}`,
          padding: 30,
        }}
      >
        <FileTreeGrowth
          nodes={fileTree}
          highlightNode={highlightNode}
          showTemplate={showTemplate}
        />
      </div>

      <div
        style={{
          display: "flex",
          gap: 30,
          fontSize: 28,
          color: COLORS.text.primary,
        }}
      >
        <div
          style={{
            padding: "15px 25px",
            backgroundColor: `${COLORS.primary}20`,
            border: `2px solid ${COLORS.primary}`,
            borderRadius: 8,
          }}
        >
          routes/ → 路由模板
        </div>
        <div
          style={{
            padding: "15px 25px",
            backgroundColor: `${COLORS.success}20`,
            border: `2px solid ${COLORS.success}`,
            borderRadius: 8,
          }}
        >
          components/ → 组件模板
        </div>
      </div>

      <div
        style={{
          fontSize: 32,
          color: COLORS.success,
          fontWeight: "bold",
          opacity: interpolate(Math.min(1, (frame - 300) / 20), [0, 1], [0, 1]),
        }}
      >
        ✨ 智能识别，自动生成
      </div>
    </div>
  )
}

const DirectoryTypes: React.FC = () => {
  const frame = useCurrentFrame()

  const directories = [
    { name: "routes", icon: "🛣️", template: "路由模板" },
    { name: "components", icon: "🧩", template: "组件模板" },
    { name: "services", icon: "🔧", template: "Service 代码" },
    { name: "utils", icon: "🛠️", template: "工具函数模板" },
  ]

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 40,
      }}
    >
      <div
        style={{
          fontSize: 48,
          color: COLORS.text.primary,
          fontWeight: "bold",
        }}
      >
        智能目录识别
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 30,
          width: "70%",
        }}
      >
        {directories.map((dir, index) => {
          const delay = index * 15
          const scale = spring({
            frame: Math.max(0, frame - delay),
            fps: 30,
            config: { damping: 12, stiffness: 80, mass: 1 },
          })
          const opacity = interpolate(scale, [0, 1], [0, 1])

          return (
            <div
              key={dir.name}
              style={{
                padding: "30px 40px",
                backgroundColor: COLORS.surface,
                borderRadius: 12,
                border: `2px solid ${COLORS.border}`,
                opacity,
                transform: `scale(${scale})`,
                display: "flex",
                alignItems: "center",
                gap: 20,
              }}
            >
              <span style={{ fontSize: 48 }}>{dir.icon}</span>
              <div>
                <div
                  style={{
                    fontSize: 28,
                    color: COLORS.text.primary,
                    fontWeight: "bold",
                  }}
                >
                  {dir.name}
                </div>
                <div
                  style={{
                    fontSize: 20,
                    color: COLORS.text.secondary,
                    marginTop: 8,
                  }}
                >
                  {dir.template}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div
        style={{
          fontSize: 28,
          color: COLORS.text.secondary,
          textAlign: "center",
          maxWidth: "80%",
        }}
      >
        根据目录位置自动选择合适的模板
      </div>
    </div>
  )
}

export const AutoGenerateScene: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.background }}>
      <Sequence durationInFrames={300}>
        <OldWay />
      </Sequence>

      <Sequence from={300} durationInFrames={450}>
        <TanStackWay />
      </Sequence>

      <Sequence from={750} durationInFrames={450}>
        <DirectoryTypes />
      </Sequence>
    </AbsoluteFill>
  )
}
