import type React from "react"
import { AbsoluteFill, interpolate, Sequence, useCurrentFrame } from "remotion"
import { EditorOpening } from "../components/EditorOpening"
import { CODE_SNIPPETS } from "../data/codeSnippets"
import { COLORS } from "../data/constants"
import { useTypewriter } from "../utils/animations"

const FeatureShowcase: React.FC = () => {
  const frame = useCurrentFrame()
  const clickProgress = Math.min(1, (frame - 30) / 20)
  const highlightProgress = Math.min(1, (frame - 60) / 15)

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
          marginBottom: 20,
        }}
      >
        一键打开源码
      </div>

      <div
        style={{
          position: "relative",
          width: "60%",
          height: "50%",
          backgroundColor: COLORS.surface,
          borderRadius: 12,
          border: `2px solid ${COLORS.border}`,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 30,
            left: 30,
            padding: "20px 30px",
            backgroundColor: `${COLORS.primary}30`,
            border: `2px solid ${COLORS.primary}`,
            borderRadius: 8,
            fontSize: 28,
            color: COLORS.text.primary,
            fontWeight: "bold",
            cursor: "pointer",
            transform: `scale(${1 + clickProgress * 0.1})`,
            opacity: interpolate(clickProgress, [0, 1], [1, 0.8]),
          }}
        >
          Header 组件
        </div>

        <div
          style={{
            position: "absolute",
            top: 30,
            left: 30,
            padding: "20px 30px",
            backgroundColor: `${COLORS.success}30`,
            border: `2px solid ${COLORS.success}`,
            borderRadius: 8,
            fontSize: 20,
            color: COLORS.text.primary,
            opacity: highlightProgress,
            transform: `translateY(${interpolate(highlightProgress, [0, 1], [0, 10])}px)`,
          }}
        >
          <div
            style={{
              marginBottom: 8,
              fontSize: 16,
              color: COLORS.text.secondary,
            }}
          >
            Ctrl + Shift + Click
          </div>
          <div style={{ fontFamily: "monospace", fontSize: 16 }}>
            {CODE_SNIPPETS.dataAttribute}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 30,
            right: 30,
            fontSize: 24,
            color: COLORS.text.secondary,
          }}
        >
          浏览器预览
        </div>
      </div>

      <div
        style={{
          fontSize: 32,
          color: COLORS.success,
          fontWeight: "bold",
          opacity: interpolate(Math.min(1, (frame - 90) / 20), [0, 1], [0, 1]),
        }}
      >
        ✨ 瞬间定位到源码位置
      </div>
    </div>
  )
}

const ConfigDemo: React.FC = () => {
  const code = useTypewriter(CODE_SNIPPETS.viteConfig, 0, 15)
  const envCode = useTypewriter(CODE_SNIPPETS.envVar, 30, 10)

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
        简单配置
      </div>

      <div
        style={{
          width: "70%",
          backgroundColor: COLORS.surface,
          borderRadius: 12,
          border: `2px solid ${COLORS.border}`,
          padding: 30,
          fontFamily: "monospace",
          fontSize: 20,
          color: COLORS.text.code,
          lineHeight: 1.6,
        }}
      >
        {code}
      </div>

      <div
        style={{
          width: "70%",
          backgroundColor: COLORS.background,
          borderRadius: 8,
          border: `2px solid ${COLORS.primary}`,
          padding: 20,
          fontFamily: "monospace",
          fontSize: 24,
          color: COLORS.text.primary,
          textAlign: "center",
        }}
      >
        {envCode}
      </div>

      <div
        style={{
          fontSize: 28,
          color: COLORS.text.secondary,
          textAlign: "center",
        }}
      >
        只需一行配置，即可启用
      </div>
    </div>
  )
}

const TeamCollaboration: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 50,
      }}
    >
      <div
        style={{
          fontSize: 48,
          color: COLORS.text.primary,
          fontWeight: "bold",
        }}
      >
        团队协作
      </div>

      <div
        style={{
          display: "flex",
          gap: 60,
          alignItems: "center",
        }}
      >
        <div
          style={{
            padding: "30px 40px",
            backgroundColor: `${COLORS.primary}20`,
            border: `2px solid ${COLORS.primary}`,
            borderRadius: 12,
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 36, marginBottom: 15 }}>👤</div>
          <div
            style={{
              fontSize: 24,
              color: COLORS.text.primary,
              fontWeight: "bold",
            }}
          >
            个人配置
          </div>
          <div
            style={{
              fontSize: 20,
              color: COLORS.text.secondary,
              marginTop: 10,
            }}
          >
            LAUNCH_EDITOR=trae
          </div>
        </div>

        <div style={{ fontSize: 48, color: COLORS.text.secondary }}>+</div>

        <div
          style={{
            padding: "30px 40px",
            backgroundColor: `${COLORS.success}20`,
            border: `2px solid ${COLORS.success}`,
            borderRadius: 12,
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 36, marginBottom: 15 }}>👥</div>
          <div
            style={{
              fontSize: 24,
              color: COLORS.text.primary,
              fontWeight: "bold",
            }}
          >
            团队配置
          </div>
          <div
            style={{
              fontSize: 20,
              color: COLORS.text.secondary,
              marginTop: 10,
            }}
          >
            vite.config.ts
          </div>
        </div>
      </div>

      <div
        style={{
          fontSize: 32,
          color: COLORS.text.primary,
          fontWeight: "bold",
          textAlign: "center",
          maxWidth: "80%",
          lineHeight: 1.5,
        }}
      >
        和而不同
        <br />
        <span
          style={{
            fontSize: 24,
            color: COLORS.text.secondary,
            fontWeight: "normal",
          }}
        >
          每个人都可以使用自己偏好的编辑器
        </span>
      </div>
    </div>
  )
}

export const ClickToCodeScene: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.background }}>
      <Sequence durationInFrames={450}>
        <FeatureShowcase />
      </Sequence>

      <Sequence from={450} durationInFrames={450}>
        <ConfigDemo />
      </Sequence>

      <Sequence from={900} durationInFrames={450}>
        <TeamCollaboration />
      </Sequence>

      <Sequence from={1350} durationInFrames={150}>
        <EditorOpening
          filePath="/src/components/Header.tsx"
          lineNumber={23}
          columnNumber={7}
          code={CODE_SNIPPETS.headerComponent}
          delay={0}
        />
      </Sequence>
    </AbsoluteFill>
  )
}
