
type GroundProps = {
  readonly currentStars: number
}

export const Ground = ({currentStars }: GroundProps) => {
  // 根据 star 数量动态调整地面厚度
  const groundHeight = currentStars < 1000 ? 16 : 4

  return (
    <div
      className="absolute bottom-0 left-0 right-0"
      style={{ height: groundHeight }}
    >
      {/* 使用 Lucida React 的 BrickWall 组件铺满地面 */}
      <div
        className="absolute inset-0"

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
