import type React from "react"
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion"
import { COLORS } from "../data/constants"

interface SplitScreenComparisonProps {
  leftContent: React.ReactNode
  rightContent: React.ReactNode
  leftLabel: string
  rightLabel: string
  leftColor?: string
  rightColor?: string
}

export const SplitScreenComparison: React.FC<SplitScreenComparisonProps> = ({
  leftContent,
  rightContent,
  leftLabel,
  rightLabel,
  leftColor = COLORS.error,
  rightColor = COLORS.success,
}) => {
  const frame = useCurrentFrame()
  const { width } = useVideoConfig()

  const dividerProgress = Math.min(1, frame / 30)

  const leftX = interpolate(dividerProgress, [0, 1], [-width / 2, 0])
  const rightX = interpolate(dividerProgress, [0, 1], [width / 2, 0])

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.background }}>
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "50%",
          height: "100%",
          transform: `translateX(${leftX}px)`,
          backgroundColor: COLORS.surface,
          borderRight: `2px solid ${COLORS.border}`,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            padding: 40,
            borderBottom: `2px solid ${leftColor}`,
            backgroundColor: `${leftColor}20`,
          }}
        >
          <h2
            style={{
              color: leftColor,
              fontSize: 48,
              margin: 0,
              fontWeight: "bold",
            }}
          >
            {leftLabel}
          </h2>
        </div>
        <div
          style={{
            flex: 1,
            padding: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {leftContent}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "50%",
          height: "100%",
          transform: `translateX(${rightX}px)`,
          backgroundColor: COLORS.surface,
          borderLeft: `2px solid ${COLORS.border}`,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            padding: 40,
            borderBottom: `2px solid ${rightColor}`,
            backgroundColor: `${rightColor}20`,
          }}
        >
          <h2
            style={{
              color: rightColor,
              fontSize: 48,
              margin: 0,
              fontWeight: "bold",
            }}
          >
            {rightLabel}
          </h2>
        </div>
        <div
          style={{
            flex: 1,
            padding: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {rightContent}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: COLORS.background,
          padding: "20px 40px",
          borderRadius: 8,
          border: `2px solid ${COLORS.primary}`,
          fontSize: 36,
          color: COLORS.text.primary,
          fontWeight: "bold",
          zIndex: 10,
        }}
      >
        VS
      </div>
    </AbsoluteFill>
  )
}
