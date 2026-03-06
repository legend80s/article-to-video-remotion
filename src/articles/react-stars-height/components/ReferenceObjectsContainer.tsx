import type React from "react"
import { Img, staticFile } from "remotion"

type ReferenceObjectsContainerProps = {
  readonly columnHeight: number
  readonly viewHeight: number
  readonly viewWidth: number
  readonly mainLandmarkIndex: number
  readonly scaleRatio: number
  readonly nextLandmarkTransitionProgress: number
  readonly nextLandmarkIndex: number
  readonly landmarks: {
    name: string
    height: number
    image?: string
    emoji?: string
    placement?: React.CSSProperties["alignItems"]
  }[]
  readonly columnX: number
  readonly bgType?: "wheat" | "gradient" | "black"
}

export const ReferenceObjectsContainer = ({
  viewHeight,
  mainLandmarkIndex,
  scaleRatio,
  nextLandmarkTransitionProgress,
  nextLandmarkIndex,
  landmarks,
  columnX,
  bgType = "wheat",
}: ReferenceObjectsContainerProps) => {
  const groundHeight = 0
  const isLightBg = bgType === "wheat"

  // 计算参照物在屏幕上的显示高度
  // 所有参照物都使用相同的 scaleRatio 进行缩放
  const getLandmarkDisplayHeight = (landmarkHeight: number) => {
    return landmarkHeight * scaleRatio
  }

  const renderLandmarks = () => {
    const elements: React.ReactNode[] = []

    // 新的参照物出现逻辑：
    // 1. 新的参照物出现在最右侧（靠近柱子的位置）
    // 2. 当新的参照物出现时，所有已存在的参照物向左移动50px
    // 3. 参照物列表始终保持从右到左的顺序

    // 最右侧参照物的位置（靠近柱子）
    const rightmostLandmarkX = columnX - 600

    // 渲染所有已展示的参照物（从最新的到最旧的）
    for (let i = mainLandmarkIndex; i >= 0; i--) {
      const landmark = landmarks[i]
      const displayHeight = getLandmarkDisplayHeight(landmark.height)

      // 计算位置：最新的参照物在最右侧，之前的参照物依次向左移动
      // 每个参照物向左移动 120px（确保有足够间距避免重叠）
      // 当下一个参照物出现时，所有参照物整体向左移动 120px，为新的参照物让出空间
      const offsetFromRightmost = mainLandmarkIndex - i

      // 计算下一个参照物出现时的过渡偏移量
      // 当有下一个参照物时，所有已存在的参照物向左移动 120px
      const transitionOffset = nextLandmarkTransitionProgress * 120

      // 当前参照物的位置 = 基础位置 - 过渡偏移量
      const leftPosition =
        rightmostLandmarkX - offsetFromRightmost * 120 - transitionOffset

      // 当前主参照物完全不透明，之前的参照物透明度降低
      const isMainLandmark = i === mainLandmarkIndex
      const opacity = isMainLandmark ? 1 : 0.4

      elements.push(
        <div
          key={`landmark-${i}`}
          style={{
            position: "absolute",
            left: leftPosition,
            bottom: groundHeight,
            display: "flex",
            flexDirection: "column-reverse",
            alignItems: "center",
            opacity,
          }}
        >
          <div
            style={{
              height: displayHeight,
              width: landmark.emoji ? 80 : "auto",
              display: "flex",
              alignItems: landmark.image
                ? "flex-end"
                : (landmark.placement ?? "flex-start"),
              justifyContent: "center",
              background: landmark.image ? "none" : "#4A90D9",
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
            }}
          >
            {landmark.image ? (
              <Img
                src={staticFile(landmark.image)}
                className="w-auto"
                style={{
                  height: displayHeight,
                  objectFit: "contain",
                }}
              />
            ) : (
              <span style={{ fontSize: Math.min(displayHeight * 0.5, 60) }}>
                {landmark.emoji || "🏗️"}
              </span>
            )}
          </div>

          <div
            className="text-xl 1"
            style={{
              marginBottom: 8,
              textAlign: "center",
              color: isLightBg ? "#1a1a1a" : "#fff",

              fontWeight: "bold",
              textShadow: isLightBg
                ? "0 0 4px rgba(255,255,255,0.3)"
                : "0 0 4px rgba(0,0,0,0.8)",
              whiteSpace: "nowrap",
            }}
          >
            <div>{landmark.name}</div>
            <div
              className="text-lg"
              style={{ color: isLightBg ? "#2d5a87" : "#8AD4FF" }}
            >
              {formatHeight(landmark.height)}
            </div>
          </div>
        </div>,
      )
    }

    // 渲染下一个参照物（带过渡动画）
    if (nextLandmarkIndex >= 0 && nextLandmarkTransitionProgress > 0) {
      const nextLandmark = landmarks[nextLandmarkIndex]
      const nextDisplayHeight = getLandmarkDisplayHeight(nextLandmark.height)
      // 下一个参照物始终出现在最右侧位置（靠近柱子）
      const nextLeftPosition = rightmostLandmarkX

      elements.push(
        <div
          key={`next-${nextLandmarkIndex}`}
          style={{
            position: "absolute",
            left: nextLeftPosition,
            bottom: groundHeight,
            display: "flex",
            flexDirection: "column-reverse",
            alignItems: "center",
            opacity: nextLandmarkTransitionProgress,
          }}
        >
          <div
            style={{
              height: Math.min(900, nextDisplayHeight),
              width: nextLandmark.emoji ? 80 : "auto",
              display: "flex",
              alignItems: nextLandmark.image
                ? "flex-end"
                : (nextLandmark.placement ?? "flex-start"),
              justifyContent: "center",
              background: nextLandmark.image ? "none" : "#4A90D9",
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
            }}
          >
            {nextLandmark.image ? (
              <Img
                src={staticFile(nextLandmark.image)}
                style={{
                  height: Math.min(900, nextDisplayHeight),
                  width: "auto",
                  objectFit: "contain",
                }}
              />
            ) : (
              <span style={{ fontSize: Math.min(nextDisplayHeight * 0.5, 60) }}>
                {nextLandmark.emoji || "🏗️"}
              </span>
            )}
          </div>

          <div
            className="text-4xl"
            style={{
              marginBottom: 8,
              textAlign: "center",
              color: isLightBg ? "#1a1a1a" : "#fff",

              fontWeight: "bold",
              textShadow: isLightBg
                ? "0 0 4px rgba(255,255,255,0.3)"
                : "0 0 4px rgba(0,0,0,0.8)",
              whiteSpace: "nowrap",
            }}
          >
            <div>{nextLandmark.name}</div>
            <div
              className="text-lg"
              style={{ color: isLightBg ? "#2d5a87" : "#8AD4FF" }}
            >
              {formatHeight(nextLandmark.height)}
            </div>
          </div>
        </div>,
      )
    }

    return elements
  }

  return <>{renderLandmarks()}</>
}

function formatHeight(meters: number): string {
  if (meters >= 1000) {
    return `${(meters / 1000).toFixed(0)} 千米`
  }
  return `${meters} 米`
}
