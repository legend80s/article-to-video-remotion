import "../handwritten-fonts.css"
import {
  COLUMN_WIDTH,
  formatStars,
  REACT_COLOR,
} from "../data/referenceObjects"

type ReactStarsColumnProps = {
  readonly currentStars: number
  readonly columnHeight: number
  readonly viewHeight: number
  readonly viewWidth: number
  readonly columnX: number
  readonly currentLandmark: { name: string; height: number }
  readonly currentDate: string
  readonly isFinal?: boolean
  readonly bgType?: "wheat" | "gradient" | "black"
}

export const ReactStarsColumn = ({
  currentStars,
  columnHeight,
  viewHeight,
  viewWidth,
  columnX,
  currentLandmark,
  currentDate,
  isFinal = false,
  bgType = "wheat",
}: ReactStarsColumnProps) => {
  const columnWidth = COLUMN_WIDTH
  const isLightBg = bgType === "wheat"

  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: columnX,
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
          className="rounded-full"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          }}
        >
          <defs>
            <linearGradient
              id="column-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
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

        {columnHeight > 20 && (
          <div
            className="text-4xl flex items-center flex-col gap-6"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translateX(-50%)",
              color: isLightBg ? "#1a1a1a" : "#fff",
              fontWeight: "bold",
              textShadow: isLightBg
                ? "0 0 4px rgba(255,255,255,0.3)"
                : "0 0 8px rgba(0,0,0,0.8)",
              whiteSpace: "nowrap",
            }}
          >
            <span>⚛</span>
          </div>
        )}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: columnHeight + 10,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
        }}
      >
        <div
          className={isFinal ? "text-6xl" : "text-4xl"}
          style={{
            color: isLightBg ? "#8B4513" : "#FFD700",
            fontWeight: "bold",
            textShadow: isLightBg
              ? "0 0 4px rgba(255,255,255,0.5)"
              : "0 0 6px rgba(255, 215, 0, 0.6), 0 0 12px rgba(255, 215, 0, 0.3)",
            whiteSpace: "nowrap",
          }}
        >
          {formatStars(Math.round(currentStars))} ⭐
        </div>
        <div
          className="handwritten-text"
          style={{
            fontSize: 18,
            color: isLightBg ? "#2d5a87" : "#8AD4FF",
            textShadow: isLightBg
              ? "0 0 4px rgba(255,255,255,0.3)"
              : "0 0 8px rgba(0,0,0,0.8)",
            whiteSpace: "nowrap",
          }}
        >
          {currentDate}
        </div>
      </div>
    </div>
  )
}
