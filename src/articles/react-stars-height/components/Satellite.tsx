import type React from "react"
import { formatHeight, type ReferenceObject } from "../data/referenceObjects"

interface SatelliteProps {
  readonly object: ReferenceObject
  readonly scale: number
  readonly opacity: number
}

export const Satellite: React.FC<SatelliteProps> = ({ object, scale, opacity }) => {
  const height = object.height * scale
  const width = 80

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
          height: 50,
          marginBottom: height - 50,
        }}
      >
        <svg width={width} height={50} viewBox="0 0 80 50">
          <g transform="translate(40, 25)">
            <rect x="-8" y="-6" width="16" height="12" fill="#C0C0C0" rx="2" />
            <rect x="-35" y="-3" width="25" height="6" fill="#4A90D9" rx="1" />
            <rect x="10" y="-3" width="25" height="6" fill="#4A90D9" rx="1" />
            <circle cx="0" cy="0" r="3" fill="#FFD700" />
            <line x1="-35" y1="-3" x2="-35" y2="3" stroke="#3A80C9" strokeWidth="1" />
            <line x1="35" y1="-3" x2="35" y2="3" stroke="#3A80C9" strokeWidth="1" />
          </g>
        </svg>
      </div>
      <div
        style={{
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
