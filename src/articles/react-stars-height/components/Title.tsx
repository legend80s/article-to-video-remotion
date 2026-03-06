import "../handwritten-fonts.css"

type TitleProps = {
  readonly opacity?: number
  readonly bgType?: "wheat" | "gradient" | "black"
}

export const Title = ({ opacity = 1, bgType = "wheat" }: TitleProps) => {
  const isLightBg = bgType === "wheat"
  return (
    <div
      className="absolute top-10 left-0 right-0 flex justify-center z-[100]"
      style={{ opacity }}
    >
      <div
        className="handwritten-title text-5xl font-bold text-center"
        style={{
          color: isLightBg ? "#1a1a1a" : "#fff",
          textShadow: isLightBg
            ? "0 0 10px rgba(255,255,255,0.3)"
            : "0 0 20px rgba(8, 126, 164, 0.8), 0 0 40px rgba(8, 126, 164, 0.4)",
        }}
      >
        React GitHub Star ⭐ 增长趋势 2013 至 2026年3月
      </div>
    </div>
  )
}
