import type React from "react"
import { Composition, interpolate, useCurrentFrame, useVideoConfig } from "remotion"
import { Title } from "./components/Title"
import { Ground } from "./components/Ground"
import { ReactStarsColumn } from "./components/ReactStarsColumn"
import { ReferenceObjectsContainer } from "./components/ReferenceObjectsContainer"
import { landmarks } from "./data/landmark"

const VIDEO_CONFIG = {
  width: 1920,
  height: 1080,
  fps: 30,
  durationInFrames: 600,
}

const MAX_STARS = 243550

function StarHeightScene() {
  const frame = useCurrentFrame()
  const { height: viewHeight, width: viewWidth } = useVideoConfig()

  // 计算当前应该显示哪个主参照物
  // 找到当前柱子高度（currentStars）所在的区间
  const progress = interpolate(frame, [0, VIDEO_CONFIG.durationInFrames - 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  })

  const currentStars = interpolate(progress, [0, 1], [0, MAX_STARS])

  // 找到当前主参照物的索引
  let currentLandmarkIndex = 0
  for (let i = 0; i < landmarks.length; i++) {
    if (currentStars >= landmarks[i].height) {
      currentLandmarkIndex = i
    } else {
      break
    }
  }

  // 计算下一个参照物出现的进度（当前柱子高度 / 下一个参照物高度）
  const currentLandmark = landmarks[currentLandmarkIndex]
  const nextLandmark = landmarks[currentLandmarkIndex + 1]

  // 计算缩放比例
  // 如果还有下一个参照物，计算过渡动画
  let scaleRatio = 1
  let transitionProgress = 0

  if (nextLandmark) {
    // 过渡区间：从当前参照物高度的 80% 开始到 100%
    const transitionStart = currentLandmark.height * 0.8
    const transitionEnd = currentLandmark.height

    if (currentStars >= transitionStart) {
      transitionProgress = interpolate(
        currentStars,
        [transitionStart, transitionEnd],
        [0, 1],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
      )
    }

    // 缩放比例：从 1 过渡到 currentLandmark.height / nextLandmark.height
    const targetRatio = currentLandmark.height / nextLandmark.height
    scaleRatio = interpolate(transitionProgress, [0, 1], [1, targetRatio], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  }

  // 主参照物高度占视频高度的一半
  const mainLandmarkTargetHeight = viewHeight * 0.5
  const baseScale = mainLandmarkTargetHeight / currentLandmark.height
  const finalScale = baseScale * scaleRatio

  const columnX = viewWidth / 2

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  })

  return (
    <div
      style={{
        width: viewWidth,
        height: viewHeight,
        background: "radial-gradient(ellipse at bottom, #1B2838 0%, #0D1B2A 40%, #000000 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Title opacity={titleOpacity} />

      {/* 地面固定在底部 */}
      <Ground width={viewWidth} />

      {/* 主内容区域 - 包含柱子和参照物 */}
      <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <ReactStarsColumn
            currentStars={currentStars}
            scale={finalScale}
            viewHeight={viewHeight}
            viewWidth={viewWidth}
            currentLandmark={currentLandmark}
          />

          <ReferenceObjectsContainer
            scale={finalScale}
            viewHeight={viewHeight}
            viewWidth={viewWidth}
            columnX={columnX}
            currentStars={currentStars}
            currentLandmarkIndex={currentLandmarkIndex}
            transitionProgress={transitionProgress}
            landmarks={landmarks}
          />
        </div>
      </div>
    </div>
  )
}

export const ReactStarsComposition: React.FC = () => {
  return (
    <Composition
      id="ReactStarsHeight"
      component={StarHeightScene}
      durationInFrames={VIDEO_CONFIG.durationInFrames}
      fps={VIDEO_CONFIG.fps}
      width={VIDEO_CONFIG.width}
      height={VIDEO_CONFIG.height}
    />
  )
}
