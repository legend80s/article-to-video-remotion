import type React from "react"
import { AbsoluteFill, interpolate, spring, useCurrentFrame } from "remotion"
import { COLORS } from "../data/constants"

interface EditorOpeningProps {
  filePath: string
  lineNumber?: number
  columnNumber?: number
  code: string
  delay?: number
}

export const EditorOpening: React.FC<EditorOpeningProps> = ({
  filePath,
  lineNumber = 1,
  columnNumber = 1,
  code,
  delay = 0,
}) => {
  const frame = useCurrentFrame()
  const progress = Math.min(1, (frame - delay) / 60)

  const windowScale = spring({
    frame: Math.max(0, frame - delay),
    fps: 30,
    config: { damping: 12, stiffness: 80, mass: 1 },
  })

  const opacity = interpolate(progress, [0, 0.2, 1], [0, 1, 1])
  const translateY = interpolate(progress, [0, 1], [100, 0])

  const lines = code.split("\n")
  const maxLineNumber = lines.length.toString().length

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.background,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "80%",
          height: "80%",
          backgroundColor: COLORS.surface,
          borderRadius: 8,
          border: `2px solid ${COLORS.border}`,
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
          opacity,
          transform: `translateY(${translateY}px) scale(${windowScale})`,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            backgroundColor: COLORS.background,
            padding: "12px 20px",
            borderBottom: `1px solid ${COLORS.border}`,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", gap: 8 }}>
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: "#FF5F56",
              }}
            />
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: "#FFBD2E",
              }}
            />
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: "#27C93F",
              }}
            />
          </div>
          <div
            style={{
              flex: 1,
              textAlign: "center",
              color: COLORS.text.secondary,
              fontSize: 14,
              fontFamily: "monospace",
            }}
          >
            {filePath}
          </div>
        </div>

        <div
          style={{
            flex: 1,
            padding: 20,
            fontFamily: "monospace",
            fontSize: 16,
            overflow: "hidden",
            display: "flex",
          }}
        >
          <div
            style={{
              color: COLORS.text.secondary,
              textAlign: "right",
              paddingRight: 20,
              userSelect: "none",
              minWidth: maxLineNumber * 20,
            }}
          >
            {lines.map((_, index) => (
              <div key={index} style={{ height: 24 }}>
                {index + 1}
              </div>
            ))}
          </div>

          <div
            style={{
              flex: 1,
              color: COLORS.text.primary,
              position: "relative",
            }}
          >
            {lines.map((line, index) => {
              const isTargetLine = index + 1 === lineNumber
              return (
                <div
                  key={index}
                  style={{
                    height: 24,
                    backgroundColor: isTargetLine
                      ? `${COLORS.primary}30`
                      : "transparent",
                    borderRadius: isTargetLine ? 4 : 0,
                    paddingLeft: isTargetLine ? 8 : 0,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: COLORS.text.code,
                    }}
                  >
                    {line}
                  </span>
                </div>
              )
            })}

            {lineNumber > 0 && (
              <div
                style={{
                  position: "absolute",
                  left: -30,
                  top: (lineNumber - 1) * 24,
                  width: 4,
                  height: 24,
                  backgroundColor: COLORS.primary,
                  borderRadius: 2,
                }}
              />
            )}
          </div>
        </div>

        <div
          style={{
            backgroundColor: COLORS.background,
            padding: "8px 20px",
            borderTop: `1px solid ${COLORS.border}`,
            color: COLORS.text.secondary,
            fontSize: 12,
            fontFamily: "monospace",
          }}
        >
          Ln {lineNumber}, Col {columnNumber}
        </div>
      </div>
    </AbsoluteFill>
  )
}
