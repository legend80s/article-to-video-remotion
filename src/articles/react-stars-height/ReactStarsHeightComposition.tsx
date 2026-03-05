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
  durationInFrames: 1500,
}

const MAX_STARS = 243550

function StarHeightScene() {
  const frame = useCurrentFrame()
  const { height: viewHeight, width: viewWidth } = useVideoConfig()

  // 主参照物目标高度 = 视频高度的一半
  const mainLandmarkTargetHeight = viewHeight * 0.5

  // 计算当前应该展示到第几个参照物
  // 每个参照物的展示时间 = 总时间 / 参照物数量
  const totalActiveFrames = VIDEO_CONFIG.durationInFrames - 60
  const framesPerLandmark = totalActiveFrames / landmarks.length

  // 增长阶段占 80%，停留阶段占 20%
  const growthRatio = 0.8
  const growthFrames = framesPerLandmark * growthRatio
  const pauseFrames = framesPerLandmark - growthFrames

  // 当前处于第几个参照物周期（基于完整周期）
  const currentCycleIndex = Math.floor(frame / framesPerLandmark)
  const timeInCurrentCycle = frame % framesPerLandmark

  // 确定当前主参照物索引
  let mainLandmarkIndex = currentCycleIndex
  if (mainLandmarkIndex >= landmarks.length) {
    mainLandmarkIndex = landmarks.length - 1
  }
  if (mainLandmarkIndex < 0) {
    mainLandmarkIndex = 0
  }

  // 当前主参照物
  const mainLandmark = landmarks[mainLandmarkIndex]

  // 计算柱子目标高度（米）
  let columnTargetHeightInMeters: number

  if (timeInCurrentCycle < growthFrames) {
    // 增长阶段：从 0 增长到当前主参照物高度
    const growthProgress = timeInCurrentCycle / growthFrames
    columnTargetHeightInMeters = growthProgress * mainLandmark.height
  } else {
    // 停留阶段：保持在当前主参照物高度
    columnTargetHeightInMeters = mainLandmark.height
  }

  // 计算当前柱子实际 star 数（用于显示）
  const totalProgress = Math.min(frame / totalActiveFrames, 1)
  const currentStars = interpolate(totalProgress, [0, 1], [0, MAX_STARS])

  // 计算缩放比例：基于主参照物高度
  // 主参照物在屏幕上永远显示为 mainLandmarkTargetHeight 高度
  // 所以缩放比例 = mainLandmarkTargetHeight / mainLandmark.height
  const scaleRatio = mainLandmarkTargetHeight / mainLandmark.height

  // 柱子高度（像素）= 柱子目标高度（米）* 缩放比例
  const columnHeightInPixels = columnTargetHeightInMeters * scaleRatio

  // 限制柱子最高不超过视频高度的 90%
  const maxColumnHeight = viewHeight * 0.9
  const finalColumnHeight = Math.min(columnHeightInPixels, maxColumnHeight)

  const columnX = viewWidth / 2 + 350

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  })

  // 下一个参照物出现的过渡进度
  let nextLandmarkTransitionProgress = 0
  if (
    timeInCurrentCycle >= growthFrames &&
    mainLandmarkIndex < landmarks.length - 1
  ) {
    nextLandmarkTransitionProgress =
      (timeInCurrentCycle - growthFrames) / pauseFrames
  }

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
            columnX={columnX}
            currentLandmark={mainLandmark}
          />

          <ReferenceObjectsContainer
            columnHeight={finalColumnHeight}
            viewHeight={viewHeight}
            viewWidth={viewWidth}
            mainLandmarkIndex={mainLandmarkIndex}
            scaleRatio={scaleRatio}
            nextLandmarkTransitionProgress={nextLandmarkTransitionProgress}
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
