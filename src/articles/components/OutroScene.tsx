import { Img, interpolate, staticFile, useCurrentFrame } from "remotion"

type IProps = {
  src: string
}

// 结束场景 - 显示历史图片
export const OutroScene: React.FC<IProps> = ({ src }) => {
  const frame = useCurrentFrame()

  // 结束场景从第 490 帧开始（Sequence 的 from=490）
  // 图片渐现动画 - 从第 0 帧开始（相对于 Sequence），40 帧内渐现
  const outroOpacity = interpolate(frame, [0, 25], [0, 1], {
    extrapolateRight: "clamp",
  })

  // 遮罩揭示动画 - 从第 25 帧开始，60 帧内从完全不透明到完全透明
  const maskOpacity = interpolate(frame, [25, 100], [1, 0], {
    extrapolateRight: "clamp",
  })

  return (
    <div
      className="w-full"
      style={{
        background: "rgb(248, 245, 230)", // 米色背景，与主图表一致
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Img
        src={staticFile(src)}
        style={{
          width: "90%",
          height: "auto",
          objectFit: "contain",
          opacity: outroOpacity,
        }}
        alt="OpenClaw Star History"
      />
      {/* 右半部分遮罩 - 慢慢揭示效果 */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50%",
          height: "100%",
          background: "rgb(248, 245, 230)", // 与背景相同的米色
          opacity: maskOpacity,
        }}
      />
    </div>
  )
}
