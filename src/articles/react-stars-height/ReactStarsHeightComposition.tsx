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
  durationInFrames: 1500, // 50秒，放慢柱子增长速度
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

  // 每个参照物的周期 = 增长时间 + 停留时间
  const growthFrames = framesPerLandmark - pauseFrames
  const framesPerLandmarkWithPause = growthFrames + pauseFrames

  // 柱子增长进度（0-1）基于增长时间
  const columnGrowthProgress = Math.min(frame / growthFrames, 1)

  // 参照物切换进度基于完整周期（增长 + 停留）
  const rawLandmarkIndex = frame / framesPerLandmarkWithPause

  // 当前柱子高度 = 当前进度对应的star数
  const progress = interpolate(frame, [0, totalActiveFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  })

  // 柱子高度计算：先快速增长到参照物高度，然后停留
  // - 增长阶段：每 growthFrames 帧，柱子从 0 增长到当前参照物高度
  // - 停留阶段：在达到当前参照物高度后停留 pauseFrames 帧
  // - 过渡：然后切换到下一个参照物

  const growthTimePerLandmark = growthFrames // 每参照物增长时间

  // 计算当前处于第几个增长周期（基于纯增长时间）
  const currentGrowthIndex = Math.floor(frame / growthTimePerLandmark)

  // 计算在当前增长周期内的进度（0-1）
  const progressInGrowth =
    (frame % growthTimePerLandmark) / growthTimePerLandmark

  // 确定当前柱子应该达到的参照物索引
  let actualLandmarkIndex = currentGrowthIndex
  if (actualLandmarkIndex >= landmarks.length) {
    actualLandmarkIndex = landmarks.length - 1
  }
  const actualLandmark = landmarks[actualLandmarkIndex]

  // 计算柱子目标高度
  let columnTargetHeight: number
  const timeInCurrentCycle = frame % framesPerLandmarkWithPause

  if (timeInCurrentCycle >= growthFrames) {
    // 停留阶段：保持在当前参照物高度
    columnTargetHeight = actualLandmark.height
  } else {
    // 增长阶段：从 0 增长到当前参照物高度
    columnTargetHeight = progressInGrowth * actualLandmark.height
  }

  // 当前参照物索引（用于显示）：基于完整周期（增长+停留）
  let currentLandmarkIndex = Math.floor(frame / framesPerLandmarkWithPause)
  if (currentLandmarkIndex >= landmarks.length) {
    currentLandmarkIndex = landmarks.length - 1
  }
  if (currentLandmarkIndex < 0) {
    currentLandmarkIndex = 0
  }

  const currentLandmark = landmarks[currentLandmarkIndex]
  const nextLandmark = landmarks[currentLandmarkIndex + 1]

  // 过渡进度（用于显示下一个参照物）
  let transitionProgress = 0
  if (timeInCurrentCycle >= growthFrames) {
    transitionProgress = (timeInCurrentCycle - growthFrames) / pauseFrames
  }

  // 当前柱子实际 star 数（用于显示）
  const currentStars = interpolate(progress, [0, 1], [0, MAX_STARS])

  // 转换柱子高度为像素值
  // 当柱子高度等于参照物高度时，显示为视频高度的一半
  const mainLandmarkTargetHeight = viewHeight * 0.5
  const columnHeight =
    (columnTargetHeight / actualLandmark.height) * mainLandmarkTargetHeight

  // 限制柱子最高不超过视频高度的 90%
  const maxColumnHeight = viewHeight * 0.9
  let finalColumnHeight = columnHeight
  if (finalColumnHeight > maxColumnHeight) {
    finalColumnHeight = maxColumnHeight
  }

  const columnX = viewWidth / 2 + 350

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
            columnX={columnX}
            currentLandmark={currentLandmark}
          />

          <ReferenceObjectsContainer
            columnHeight={finalColumnHeight}
            viewHeight={viewHeight}
            viewWidth={viewWidth}
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
