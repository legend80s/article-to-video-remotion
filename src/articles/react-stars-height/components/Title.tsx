import "../handwritten-fonts.css"

type TitleProps = {
  readonly opacity?: number
}

export const Title = ({ opacity = 1 }: TitleProps) => {
  return (
    <div
      className="absolute top-10 left-0 right-0 flex justify-center z-[100]"
      style={{ opacity }}
    >
      <div
        className="handwritten-title text-5xl font-bold text-white text-center"
        style={{
          textShadow:
            "0 0 20px rgba(8, 126, 164, 0.8), 0 0 40px rgba(8, 126, 164, 0.4)",
        }}
      >
        React GitHub Star ⭐ 增长趋势 2013 至 2026年3月
      </div>
    </div>
  )
}
