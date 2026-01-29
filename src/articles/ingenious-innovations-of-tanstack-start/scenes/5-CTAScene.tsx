import type React from "react"
import { AbsoluteFill, interpolate, spring, useCurrentFrame } from "remotion"
import { COLORS } from "../data/constants"

const FeatureIcons: React.FC = () => {
  const frame = useCurrentFrame()

  const features = [
    { icon: "⚔️", title: "一键打开", color: COLORS.primary },
    { icon: "🪄", title: "自动生成", color: COLORS.success },
    { icon: "🛡️", title: "类型安全", color: COLORS.info },
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
        gap: 60,
      }}
    >
      <div
        style={{
          fontSize: 64,
          color: COLORS.text.primary,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        让 React 开发更自然
      </div>

      <div
        style={{
          display: "flex",
          gap: 60,
        }}
      >
        {features.map((feature, index) => {
          const delay = index * 15
          const scale = spring({
            frame: Math.max(0, frame - delay),
            fps: 30,
            config: { damping: 12, stiffness: 80, mass: 1 },
          })
          const opacity = interpolate(scale, [0, 1], [0, 1])

          return (
            <div
              key={index}
              style={{
                padding: "40px 50px",
                backgroundColor: COLORS.surface,
                borderRadius: 16,
                border: `3px solid ${feature.color}`,
                opacity,
                transform: `scale(${scale})`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 20,
              }}
            >
              <span style={{ fontSize: 72 }}>{feature.icon}</span>
              <div
                style={{
                  fontSize: 28,
                  color: COLORS.text.primary,
                  fontWeight: "bold",
                }}
              >
                {feature.title}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const GitHubStars: React.FC = () => {
  const frame = useCurrentFrame()
  const starCount = Math.floor(
    interpolate(Math.min(1, (frame - 30) / 60), [0, 1], [0, 50000]),
  )
  const formattedCount = starCount.toLocaleString()

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
        立即体验
      </div>

      <div
        style={{
          display: "flex",
          gap: 40,
          alignItems: "center",
        }}
      >
        <div
          style={{
            padding: "30px 50px",
            backgroundColor: `${COLORS.warning}20`,
            border: `3px solid ${COLORS.warning}`,
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <span style={{ fontSize: 48 }}>⭐</span>
          <div>
            <div style={{ fontSize: 20, color: COLORS.text.secondary }}>
              GitHub Stars
            </div>
            <div
              style={{
                fontSize: 36,
                color: COLORS.text.primary,
                fontWeight: "bold",
              }}
            >
              {formattedCount}
            </div>
          </div>
        </div>

        <div
          style={{
            padding: "30px 50px",
            backgroundColor: `${COLORS.primary}20`,
            border: `3px solid ${COLORS.primary}`,
            borderRadius: 12,
            fontSize: 28,
            color: COLORS.text.primary,
            fontWeight: "bold",
          }}
        >
          github.com/TanStack/router
        </div>
      </div>

      <div
        style={{
          fontSize: 32,
          color: COLORS.text.secondary,
          textAlign: "center",
          maxWidth: "80%",
          lineHeight: 1.6,
        }}
      >
        加入数万开发者的选择
        <br />
        开启全新的 React 开发体验
      </div>
    </div>
  )
}

const QRCode: React.FC = () => {
  const frame = useCurrentFrame()
  const scale = spring({
    frame: Math.max(0, frame - 30),
    fps: 30,
    config: { damping: 12, stiffness: 80, mass: 1 },
  })
  const opacity = interpolate(scale, [0, 1], [0, 1])

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
          padding: 30,
          backgroundColor: COLORS.surface,
          borderRadius: 16,
          border: `3px solid ${COLORS.primary}`,
          opacity,
          transform: `scale(${scale})`,
        }}
      >
        <div
          style={{
            width: 200,
            height: 200,
            backgroundColor: COLORS.background,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 24,
            color: COLORS.text.secondary,
          }}
        >
          QR Code
        </div>
      </div>

      <div
        style={{
          fontSize: 36,
          color: COLORS.text.primary,
          fontWeight: "bold",
          opacity: interpolate(Math.min(1, (frame - 90) / 20), [0, 1], [0, 1]),
        }}
      >
        扫码了解更多
      </div>

      <div
        style={{
          fontSize: 24,
          color: COLORS.text.secondary,
          opacity: interpolate(Math.min(1, (frame - 120) / 20), [0, 1], [0, 1]),
        }}
      >
        tanstack.com/router
      </div>
    </div>
  )
}

export const CTAScene: React.FC = () => {
  const frame = useCurrentFrame()

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.background }}>
      {frame < 120 && <FeatureIcons />}
      {frame >= 120 && frame < 240 && <GitHubStars />}
      {frame >= 240 && <QRCode />}
    </AbsoluteFill>
  )
}
