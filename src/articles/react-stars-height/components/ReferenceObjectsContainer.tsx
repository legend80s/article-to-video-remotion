import type React from "react"

type ReferenceObjectsContainerProps = {
  readonly columnHeight: number
  readonly viewHeight: number
  readonly viewWidth: number
  readonly mainLandmarkIndex: number
  readonly scaleRatio: number
  readonly nextLandmarkTransitionProgress: number
  readonly nextLandmarkIndex: number
  readonly landmarks: { name: string; height: number }[]
  readonly columnX: number
}

export const ReferenceObjectsContainer = ({
  viewHeight,
  mainLandmarkIndex,
  scaleRatio,
  nextLandmarkTransitionProgress,
  nextLandmarkIndex,
  landmarks,
  columnX,
}: ReferenceObjectsContainerProps) => {
  const groundHeight = 0

  // 计算参照物在屏幕上的显示高度
  // 所有参照物都使用相同的 scaleRatio 进行缩放
  const getLandmarkDisplayHeight = (landmarkHeight: number) => {
    return landmarkHeight * scaleRatio
  }

  const renderLandmarks = () => {
    const elements: React.ReactNode[] = []

    // 主参照物的 X 位置（在柱子左侧，保持 600px 间距）
    const mainLandmarkX = columnX - 600

    // 渲染所有已展示的参照物（包括当前主参照物和之前的参照物）
    // 注意：所有参照物都使用当前的 scaleRatio，这样它们会按比例缩小
    for (let i = 0; i <= mainLandmarkIndex; i++) {
      const landmark = landmarks[i]
      const displayHeight = getLandmarkDisplayHeight(landmark.height)

      // 计算位置：主参照物在 mainLandmarkX，之前的参照物向左偏移
      // 保持每个参照物之间 150px 的恒定间距
      const offsetFromMain = mainLandmarkIndex - i
      const leftPosition = mainLandmarkX - offsetFromMain * 150

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
              width: 80,
              height: displayHeight,
              background: getLandmarkColor(i),
              borderRadius: 4,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              paddingBottom: 8,
            }}
          >
            {/* 建筑物窗户效果 - 只对较低的建筑物显示 */}
            {i < 4 && displayHeight > 30 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {Array.from({
                  length: Math.min(5, Math.floor(displayHeight / 20)),
                }).map((_, j) => (
                  <div
                    key={j}
                    style={{
                      width: 60,
                      height: 2,
                      background: "rgba(255,255,255,0.3)",
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          <div
            style={{
              marginBottom: 8,
              textAlign: "center",
              color: "#fff",
              fontSize: 14,
              fontWeight: "bold",
              textShadow: "0 0 4px rgba(0,0,0,0.8)",
              whiteSpace: "nowrap",
            }}
          >
            <div>{landmark.name}</div>
            <div style={{ color: "#8AD4FF", fontSize: 12 }}>
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
      // 下一个参照物也在柱子左侧，保持恒定间距
      const nextLeftPosition = mainLandmarkX - 150

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
              width: 80,
              height: nextDisplayHeight,
              background: getLandmarkColor(nextLandmarkIndex),
              borderRadius: 4,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              paddingBottom: 8,
            }}
          >
            {nextLandmarkIndex < 4 && nextDisplayHeight > 30 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {Array.from({ length: 5 }).map((_, j) => (
                  <div
                    key={j}
                    style={{
                      width: 60,
                      height: 2,
                      background: "rgba(255,255,255,0.3)",
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          <div
            style={{
              marginBottom: 8,
              textAlign: "center",
              color: "#fff",
              fontSize: 14,
              fontWeight: "bold",
              textShadow: "0 0 4px rgba(0,0,0,0.8)",
              whiteSpace: "nowrap",
            }}
          >
            <div>{nextLandmark.name}</div>
            <div style={{ color: "#8AD4FF", fontSize: 12 }}>
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

function getLandmarkColor(index: number): string {
  const colors = [
    "#4A90D9",
    "#4A90D9",
    "#4A90D9",
    "#FFAA00",
    "#5D4E37",
    "#5D4E37",
    "#5D4E37",
    "#5D4E37",
    "#5D4E37",
    "#5D4E37",
    "#E8E8E8",
    "#8AD4FF",
    "#8AD4FF",
    "#8AD4FF",
    "#C0C0C0",
  ]
  return colors[index] || "#4A90D9"
}

function formatHeight(meters: number): string {
  if (meters >= 1000) {
    return `${(meters / 1000).toFixed(0)} km`
  }
  return `${meters} m`
}
