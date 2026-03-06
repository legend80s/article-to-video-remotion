type GroundProps = {
  readonly currentStars: number
  readonly bgType?: "wheat" | "gradient" | "black"
}

export const Ground = ({ currentStars, bgType = "wheat" }: GroundProps) => {
  const groundHeight = currentStars < 1000 ? 16 : 4
  const isLightBg = bgType === "wheat"

  return (
    <div
      className="absolute bottom-0 left-0 right-0"
      style={{ height: groundHeight }}
    >
      <div className="absolute inset-0"></div>
      <div
        className="absolute bottom-1 left-[90%] -translate-x-1/2 text-3xl whitespace-nowrap"
        style={{ color: isLightBg ? "#1a1a1a" : "#8AD4FF" }}
      >
        地平线
      </div>
    </div>
  )
}
