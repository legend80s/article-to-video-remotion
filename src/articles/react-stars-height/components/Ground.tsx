import type React from "react"

interface GroundProps {
  readonly width: number
}

export const Ground: React.FC<GroundProps> = ({ width }) => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 4,
        background: "linear-gradient(90deg, transparent, #4A6B4A 10%, #4A6B4A 90%, transparent)",
        boxShadow: "0 0 20px rgba(74, 107, 74, 0.8)",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: 10,
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 14,
          color: "#8AD4FF",
          whiteSpace: "nowrap",
          textShadow: "0 0 4px rgba(0,0,0,0.8)",
        }}
      >
        地面 0 m
      </div>
    </div>
  )
}
