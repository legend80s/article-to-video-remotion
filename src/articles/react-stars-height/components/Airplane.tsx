import type React from "react"
import { formatHeight, type ReferenceObject } from "../data/referenceObjects"

interface AirplaneProps {
  readonly object: ReferenceObject
  readonly scale: number
  readonly opacity: number
}

export const Airplane: React.FC<AirplaneProps> = ({ object, scale, opacity }) => {
  const height = object.height * scale
  const width = 120

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
          height: 40,
          marginBottom: height - 40,
        }}
      >
        <svg width={width} height={40} viewBox="0 0 120 40">
          <g transform="translate(60, 20)">
            <ellipse cx="0" cy="0" rx="35" ry="8" fill="#E8E8E8" />
            <polygon points="-30,0 -50,-15 -50,15" fill="#D0D0D0" />
            <polygon points="25,0 15,-12 15,12" fill="#D0D0D0" />
            <polygon points="-35,0 -45,-8 -45,8" fill="#C0C0C0" />
            <ellipse cx="0" cy="0" rx="8" ry="4" fill="#4A90D9" />
            <circle cx="-25" cy="0" r="2" fill="#FFD700" />
            <circle cx="30" cy="0" r="2" fill="#FF0000" />
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
