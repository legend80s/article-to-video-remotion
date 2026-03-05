import type React from "react"
import { interpolate } from "remotion"

interface ReferenceObjectsContainerProps {
  readonly columnHeight: number
  readonly viewHeight: number
  readonly viewWidth: number
  readonly columnX: number
  readonly currentStars: number
  readonly currentLandmarkIndex: number
  readonly transitionProgress: number
  readonly landmarks: { name: string; height: number }[]
}

export const ReferenceObjectsContainer: React.FC<ReferenceObjectsContainerProps> = ({
  columnHeight,
  viewHeight,
  viewWidth,
  columnX,
  currentStars,
  currentLandmarkIndex,
  transitionProgress,
  landmarks,
}) => {
  // 地面高度
  const groundHeight = 0

  // 主参照物高度固定为视频高度的一半
  const landmarkHeight = viewHeight * 0.5

  // 渲染当前参照物和下一个参照物（都在左侧）
  const renderLandmarks = () => {
    const currentLandmark = landmarks[currentLandmarkIndex]
    const nextLandmark = landmarks[currentLandmarkIndex + 1]

    // 当前参照物位置
    const currentLeftPosition = viewWidth * 0.1
    // 下一个参照物位置（紧挨着当前参照物）
    const nextLeftPosition = currentLeftPosition + 100 // 紧挨着，间距100px

    return (
      <>
        {/* 当前参照物 */}
        <div
          key={`current-${currentLandmarkIndex}`}
          style={{
            position: "absolute",
            left: currentLeftPosition,
            bottom: groundHeight,
            display: "flex",
            flexDirection: "column-reverse",
            alignItems: "center",
            opacity: 1 - transitionProgress * 0.5,
          }}
        >
          {/* 参照物图形 */}
          <div
            style={{
              width: 80,
              height: landmarkHeight,
              background: getLandmarkColor(currentLandmarkIndex),
              borderRadius: 4,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              paddingBottom: 8,
            }}
          >
            {currentLandmarkIndex < 4 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {Array.from({ length: Math.min(5, Math.floor(landmarkHeight / 20)) }).map((_, i) => (
                  <div
                    key={i}
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

          {/* 参照物名称和高度 */}
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
            <div>{currentLandmark.name}</div>
            <div style={{ color: "#8AD4FF", fontSize: 12 }}>
              {formatHeight(currentLandmark.height)}
            </div>
          </div>
        </div>

        {/* 下一个参照物（过渡时显示在旁边） */}
        {nextLandmark && transitionProgress > 0 && (
          <div
            key={`next-${currentLandmarkIndex + 1}`}
            style={{
              position: "absolute",
              left: nextLeftPosition,
              bottom: groundHeight,
              display: "flex",
              flexDirection: "column-reverse",
              alignItems: "center",
              opacity: transitionProgress,
            }}
          >
            {/* 参照物图形 */}
            <div
              style={{
                width: 80,
                height: landmarkHeight,
                background: getLandmarkColor(currentLandmarkIndex + 1),
                borderRadius: 4,
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                paddingBottom: 8,
              }}
            >
              {currentLandmarkIndex + 1 < 4 && (
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
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

            {/* 参照物名称和高度 */}
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
          </div>
        )}
      </>
    )
  }

  return <>{renderLandmarks()}</>
}

// 根据索引获取参照物颜色
function getLandmarkColor(index: number): string {
  const colors = [
    "#4A90D9", // 建筑物 - 蓝色
    "#4A90D9",
    "#4A90D9",
    "#FFAA00", // 哈利法塔 - 金色
    "#5D4E37", // 山脉 - 棕色
    "#5D4E37",
    "#5D4E37",
    "#5D4E37",
    "#5D4E37",
    "#5D4E37",
    "#E8E8E8", // 飞机 - 白色
    "#8AD4FF", // 大气层 - 浅蓝
    "#8AD4FF",
    "#8AD4FF",
    "#C0C0C0", // 卫星 - 银色
  ]
  return colors[index] || "#4A90D9"
}

// 格式化高度显示
function formatHeight(meters: number): string {
  if (meters >= 1000) {
    return `${(meters / 1000).toFixed(0)} km`
  }
  return `${meters} m`
}
