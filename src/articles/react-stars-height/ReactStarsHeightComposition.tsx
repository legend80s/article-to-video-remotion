import type React from "react"
import {
  Composition,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion"
import { Ground } from "./components/Ground"
import { ReactStarsColumn } from "./components/ReactStarsColumn"
import { ReferenceObjectsContainer } from "./components/ReferenceObjectsContainer"
import { Title } from "./components/Title"
import { landmarks } from "./data/landmark"

const VIDEO_CONFIG = {
  width: 1920,
  height: 1080,
  fps: 30,
  durationInFrames: 900, // 30秒，确保每个参照物至少有0.8秒展示时间
}

const MAX_STARS = 243550

function StarHeightScene() {
  const frame = useCurrentFrame()
  const { height: viewHeight, width: viewWidth } = useVideoConfig()

  // 根据帧数平均分配每个参照物的展示时间
  // 总帧数减去一些缓冲帧
  const totalActiveFrames = VIDEO_CONFIG.durationInFrames - 60
  const framesPerLandmark = totalActiveFrames / landmarks.length

  // 停留时间 0.5 秒 = 15 帧
  const pauseFrames = 15

  // 根据当前帧数计算当前应该显示哪个参照物
  const rawLandmarkIndex = frame / (framesPerLandmark - pauseFrames)
  let currentLandmarkIndex = Math.floor(rawLandmarkIndex)

  // 边界处理
  if (currentLandmarkIndex >= landmarks.length) {
    currentLandmarkIndex = landmarks.length - 1
  }
  if (currentLandmarkIndex < 0) {
    currentLandmarkIndex = 0
  }

  // 计算在当前参照物内的进度（排除停留时间）
  const progressInLandmark =
    (frame % (framesPerLandmark - pauseFrames)) /
    (framesPerLandmark - pauseFrames)

  // 当前柱子高度 = 当前进度对应的star数
  const progress = interpolate(frame, [0, totalActiveFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  })

  // 柱子高度计算：先快速增长到参照物高度，然后停留
  // 在每个参照物周期内：
  // - 0% - 60%：从 0 增长到当前参照物高度
  // - 60% - 80%：停留在当前参照物高度（0.5秒）
  // - 80% - 100%：过渡到下一个参照物

  const currentLandmark = landmarks[currentLandmarkIndex]
  const nextLandmark = landmarks[currentLandmarkIndex + 1]

  // 计算增长进度（在 60% 时间点达到参照物高度）
  let growthProgress = progressInLandmark / 0.6
  if (growthProgress > 1) growthProgress = 1

  // 停留阶段判断
  const isPausing = progressInLandmark >= 0.6 && progressInLandmark < 0.8

  // 计算柱子应该达到的高度
  let columnTargetHeight: number
  if (isPausing) {
    // 停留阶段：保持在当前参照物高度
    columnTargetHeight = currentLandmark.height
  } else if (progressInLandmark >= 0.8) {
    // 过渡阶段：从当前参照物高度过渡到下一个
    const transitionProgress = (progressInLandmark - 0.8) / 0.2
    const targetHeight = nextLandmark
      ? nextLandmark.height
      : currentLandmark.height
    columnTargetHeight = interpolate(
      transitionProgress,
      [0, 1],
      [currentLandmark.height, targetHeight],
      {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      },
    )
  } else {
    // 增长阶段：从 0 增长到当前参照物高度
    columnTargetHeight = growthProgress * currentLandmark.height
  }

  // 当前柱子实际 star 数（用于显示）
  const currentStars = interpolate(progress, [0, 1], [0, MAX_STARS])

  // 转换柱子高度为像素值
  // 当柱子高度等于参照物高度时，显示为视频高度的一半
  const mainLandmarkTargetHeight = viewHeight * 0.5
  const columnHeight =
    (columnTargetHeight / currentLandmark.height) * mainLandmarkTargetHeight

  // 限制柱子最高不超过视频高度的 90%
  const maxColumnHeight = viewHeight * 0.9
  let finalColumnHeight = columnHeight
  if (finalColumnHeight > maxColumnHeight) {
    finalColumnHeight = maxColumnHeight
  }

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
        background:
          "radial-gradient(ellipse at bottom, #1B2838 0%, #0D1B2A 40%, #000000 100%)",
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
            columnHeight={finalColumnHeight}
            viewHeight={viewHeight}
            viewWidth={viewWidth}
            currentLandmark={currentLandmark}
          />

          <ReferenceObjectsContainer
            columnHeight={finalColumnHeight}
            viewHeight={viewHeight}
            viewWidth={viewWidth}
            columnX={columnX}
            currentStars={currentStars}
            currentLandmarkIndex={currentLandmarkIndex}
            transitionProgress={
              progressInLandmark >= 0.8 ? (progressInLandmark - 0.8) / 0.2 : 0
            }
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
