import type React from "react"
import { AbsoluteFill, interpolate, spring, useCurrentFrame } from "remotion"
import { CODE_SNIPPETS } from "../data/codeSnippets"
import { COLORS } from "../data/constants"
import { useTypewriter } from "../utils/animations"

const LinkAutocomplete: React.FC = () => {
  const code = useTypewriter(CODE_SNIPPETS.linkComponent, 0, 12)

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
        Link 组件自动补全
      </div>

      <div
        style={{
          width: "70%",
          padding: 40,
          backgroundColor: COLORS.surface,
          borderRadius: 12,
          border: `2px solid ${COLORS.primary}`,
          fontFamily: "monospace",
          fontSize: 28,
          color: COLORS.text.code,
          lineHeight: 1.8,
        }}
      >
        {code}
      </div>

      <div
        style={{
          display: "flex",
          gap: 20,
          fontSize: 24,
          color: COLORS.text.secondary,
        }}
      >
        <div
          style={{
            padding: "10px 20px",
            backgroundColor: `${COLORS.info}20`,
            border: `2px solid ${COLORS.info}`,
            borderRadius: 6,
          }}
        >
          to 属性自动提示
        </div>
        <div
          style={{
            padding: "10px 20px",
            backgroundColor: `${COLORS.success}20`,
            border: `2px solid ${COLORS.success}`,
            borderRadius: 6,
          }}
        >
          类型安全
        </div>
      </div>
    </div>
  )
}

const NavigateTypeHint: React.FC = () => {
  const code = useTypewriter(CODE_SNIPPETS.navigateFunction, 0, 10)

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
        navigate 函数类型提示
      </div>

      <div
        style={{
          width: "70%",
          padding: 40,
          backgroundColor: COLORS.surface,
          borderRadius: 12,
          border: `2px solid ${COLORS.primary}`,
          fontFamily: "monospace",
          fontSize: 28,
          color: COLORS.text.code,
          lineHeight: 1.8,
        }}
      >
        {code}
      </div>

      <div
        style={{
          padding: "20px 30px",
          backgroundColor: `${COLORS.warning}20`,
          border: `2px solid ${COLORS.warning}`,
          borderRadius: 8,
          fontSize: 24,
          color: COLORS.text.primary,
        }}
      >
        💡 编译时检查，运行时安全
      </div>
    </div>
  )
}

const RatingStars: React.FC = () => {
  const frame = useCurrentFrame()

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
          fontSize: 56,
          color: COLORS.text.primary,
          fontWeight: "bold",
        }}
      >
        类型安全评分
      </div>

      <div
        style={{
          display: "flex",
          gap: 20,
          fontSize: 80,
        }}
      >
        {[...Array(3)].map((_, index) => {
          const delay = index * 10
          const scale = spring({
            frame: Math.max(0, frame - delay),
            fps: 30,
            config: { damping: 12, stiffness: 80, mass: 1 },
          })
          const opacity = interpolate(scale, [0, 1], [0, 1])

          return (
            <span
              key={index}
              style={{
                transform: `scale(${scale})`,
                opacity,
                filter: `drop-shadow(0 0 20px ${COLORS.warning})`,
              }}
            >
              ⭐
            </span>
          )
        })}
      </div>

      <div
        style={{
          fontSize: 36,
          color: COLORS.text.primary,
          fontWeight: "bold",
          opacity: interpolate(Math.min(1, (frame - 60) / 20), [0, 1], [0, 1]),
        }}
      >
        完美的类型支持
      </div>
    </div>
  )
}

export const TypeHintScene: React.FC = () => {
  const frame = useCurrentFrame()

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.background }}>
      {frame < 120 && <LinkAutocomplete />}
      {frame >= 120 && frame < 240 && <NavigateTypeHint />}
      {frame >= 240 && <RatingStars />}
    </AbsoluteFill>
  )
}
