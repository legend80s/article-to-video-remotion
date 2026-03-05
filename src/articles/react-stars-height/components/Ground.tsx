import type React from "react"

interface GroundProps {
  readonly width: number
  readonly currentStars: number
}

export const Ground: React.FC<GroundProps> = ({ width, currentStars }) => {
  // 根据 star 数量动态调整地面厚度
  const groundHeight = currentStars < 1000 ? 16 : 4

  return (
    <div
      className="absolute bottom-0 left-0 right-0"
      style={{ height: groundHeight }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-green-600 to-transparent"
        style={{
          background:
            "linear-gradient(90deg, transparent, #4A6B4A 10%, #4A6B4A 90%, transparent)",
          boxShadow: "0 0 20px rgba(74, 107, 74, 0.8)",
        }}
      />
      <div
        className="absolute bottom-10 left-[90%] -translate-x-1/2 text-sm text-[#8AD4FF] whitespace-nowrap"
        style={{
          fontSize: 14,
          textShadow: "0 0 4px rgba(0,0,0,0.8)",
        }}
      >
        地面 0 m
      </div>
    </div>
  )
}
