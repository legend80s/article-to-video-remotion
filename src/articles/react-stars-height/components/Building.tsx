import type React from "react"
import { formatHeight, type ReferenceObject } from "../data/referenceObjects"

interface BuildingProps {
  readonly object: ReferenceObject
  readonly scale: number
  readonly opacity: number
}

export const Building: React.FC<BuildingProps> = ({ object, scale, opacity }) => {
  const height = object.height * scale
  const width = 60
  const color = object.color || "#4A90D9"

  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        opacity,
        transform: `translateX(-50%)`,
      }}
    >
      <div
        style={{
          position: "relative",
          width,
          height,
        }}
      >
        <svg
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          style={{ position: "absolute", bottom: 0, left: 0 }}
        >
          <defs>
            <linearGradient id={`building-grad-${object.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={color} stopOpacity="0.8" />
              <stop offset="50%" stopColor={color} stopOpacity="1" />
              <stop offset="100%" stopColor={color} stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <rect
            x="5"
            y="0"
            width={width - 10}
            height={height}
            fill={`url(#building-grad-${object.id})`}
            rx="2"
          />
          {Array.from({ length: Math.floor(height / 15) }).map((_, i) => (
            <rect
              key={i}
              x="10"
              y={i * 15 + 5}
              width="8"
              height="8"
              fill="rgba(255,255,255,0.3)"
              rx="1"
            />
          ))}
          {Array.from({ length: Math.floor(height / 15) }).map((_, i) => (
            <rect
              key={`r-${i}`}
              x={width - 18}
              y={i * 15 + 5}
              width="8"
              height="8"
              fill="rgba(255,255,255,0.3)"
              rx="1"
            />
          ))}
        </svg>
      </div>
      <div
        style={{
          marginTop: 4,
          fontSize: 12,
          color: "#fff",
          textAlign: "center",
          whiteSpace: "nowrap",
          textShadow: "0 0 4px rgba(0,0,0,0.8)",
        }}
      >
        {object.name}
      </div>
      <div
        style={{
          fontSize: 10,
          color: "#aaa",
          textShadow: "0 0 4px rgba(0,0,0,0.8)",
        }}
      >
        {formatHeight(object.height)}
      </div>
    </div>
  )
}
