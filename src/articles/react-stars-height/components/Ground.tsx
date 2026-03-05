type GroundProps = {
  readonly currentStars: number
}

export const Ground = ({ currentStars }: GroundProps) => {
  // 根据 star 数量动态调整地面厚度
  const groundHeight = currentStars < 1000 ? 16 : 4

  return (
    <div
      className="absolute bottom-0 left-0 right-0"
      style={{ height: groundHeight }}
    >
      <div className="absolute inset-0"></div>
      <div className="absolute bottom-4 left-[90%] -translate-x-1/2 text-sm text-[#8AD4FF] whitespace-nowrap">
        地平线 0 米
      </div>
    </div>
  )
}
