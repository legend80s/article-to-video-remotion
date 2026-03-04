import type React from "react"

interface TitleProps {
  readonly opacity?: number
}

export const Title: React.FC<TitleProps> = ({ opacity = 1 }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 40,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        opacity,
        zIndex: 100,
      }}
    >
      <div
        style={{
          fontSize: 48,
          fontWeight: "bold",
          color: "#fff",
          textShadow: "0 0 20px rgba(8, 126, 164, 0.8), 0 0 40px rgba(8, 126, 164, 0.4)",
          textAlign: "center",
        }}
      >
        React GitHub Star ⭐ 增长趋势 2013 至 2026
      </div>
    </div>
  )
}
