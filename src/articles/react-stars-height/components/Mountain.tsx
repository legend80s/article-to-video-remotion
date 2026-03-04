import type React from "react"
import { formatHeight, type ReferenceObject } from "../data/referenceObjects"

interface MountainProps {
  readonly object: ReferenceObject
  readonly scale: number
  readonly opacity: number
}

export const Mountain: React.FC<MountainProps> = ({ object, scale, opacity }) => {
  const height = object.height * scale
  const width = 100
  const color = "#6B8E6B"

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
            <linearGradient id={`mountain-grad-${object.id}`} x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#4A6B4A" stopOpacity="1" />
              <stop offset="70%" stopColor={color} stopOpacity="1" />
              <stop offset="85%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
            </linearGradient>
          </defs>
          <polygon
            points={`50,0 0,${height} 100,${height}`}
            fill={`url(#mountain-grad-${object.id})`}
          />
          <polygon
            points={`50,0 30,${height * 0.3} 70,${height * 0.3}`}
            fill="rgba(255,255,255,0.95)"
          />
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
