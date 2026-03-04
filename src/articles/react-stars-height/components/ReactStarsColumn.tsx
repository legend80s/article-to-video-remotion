import type React from "react"
import { COLUMN_WIDTH, REACT_COLOR, formatStars, MAX_HEIGHT } from "../data/referenceObjects"

interface ReactStarsColumnProps {
  readonly currentStars: number
  readonly scale: number
  readonly cameraY: number
  readonly viewHeight: number
}

export const ReactStarsColumn: React.FC<ReactStarsColumnProps> = ({
  currentStars,
  scale,
  cameraY,
  viewHeight,
}) => {
  const columnHeight = currentStars * scale
  const columnWidth = COLUMN_WIDTH
  const relativeY = columnHeight - cameraY

  const showReactLabel = relativeY > 0 && relativeY < viewHeight
  const showStarsLabel = relativeY > -50 && relativeY < viewHeight + 50

  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          width: columnWidth,
          height: columnHeight,
        }}
      >
        <svg
          width={columnWidth}
          height={Math.max(columnHeight, 1)}
          viewBox={`0 0 ${columnWidth} ${Math.max(columnHeight, 1)}`}
          style={{ position: "absolute", bottom: 0, left: 0 }}
        >
          <defs>
            <linearGradient id="column-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={REACT_COLOR} stopOpacity="0.85" />
              <stop offset="50%" stopColor={REACT_COLOR} stopOpacity="1" />
              <stop offset="100%" stopColor={REACT_COLOR} stopOpacity="0.85" />
            </linearGradient>
            <filter id="column-glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <rect
            x="0"
            y="0"
            width={columnWidth}
            height={Math.max(columnHeight, 1)}
            fill="url(#column-gradient)"
            filter="url(#column-glow)"
            rx="4"
          />
        </svg>

        {showReactLabel && (
          <div
            style={{
              position: "absolute",
              top: columnHeight - 30,
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: 14,
              color: "#fff",
              fontWeight: "bold",
              textShadow: "0 0 8px rgba(0,0,0,0.8)",
            }}
          >
            ⚛ React
          </div>
        )}
      </div>

      {showStarsLabel && (
        <div
          style={{
            position: "absolute",
            bottom: columnHeight + 30,
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: 24,
            color: "#FFD700",
            fontWeight: "bold",
            textShadow: "0 0 10px rgba(255, 215, 0, 0.8), 0 0 20px rgba(255, 215, 0, 0.5)",
            whiteSpace: "nowrap",
          }}
        >
          {formatStars(Math.round(currentStars))} ★
        </div>
      )}
    </div>
  )
}
