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

// 最大参照物显示高度（像素）
const MAX_LANDMARK_HEIGHT = 540

// 计算每个参照物阶段的起始和结束高度
const getStageHeights = () => {
  const stages: { startHeight: number; endHeight: number }[] = []
  for (let i = 0; i < landmarks.length - 1; i++) {
    stages.push({
      startHeight: landmarks[i].height,
      endHeight: landmarks[i + 1].height,
    })
  }
  return stages
}

const STAGES = getStageHeights()

// 根据当前进度计算高度，每个阶段分配相等的时间
function calculateHeight(progress: number): number {
  if (progress <= 0) return 0
  if (progress >= 1) return landmarks[landmarks.length - 1].height

  const numStages = STAGES.length
  const progressPerStage = 1 / numStages

  // 找到当前所在的阶段
  const currentStageIndex = Math.floor(progress / progressPerStage)
  const progressInStage = (progress % progressPerStage) / progressPerStage

  const stage = STAGES[Math.min(currentStageIndex, numStages - 1)]

  // 在当前阶段内线性插值
  return interpolate(
    progressInStage,
    [0, 1],
    [stage.startHeight, stage.endHeight],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  )
}

function StarHeightScene() {
  const frame = useCurrentFrame()
  const { height: viewHeight, width: viewWidth } = useVideoConfig()

  // 主参照物目标高度 = 视频高度的一半（540px）
  const mainLandmarkTargetHeight = Math.min(
    viewHeight * 0.5,
    MAX_LANDMARK_HEIGHT,
  )

  // 计算当前进度（0-1）
  const heightProgress = Math.min(frame / VIDEO_CONFIG.durationInFrames, 1)

  // 使用分段式高度计算，每个参照物阶段有相等的展示时间
  const columnHeightInMeters = calculateHeight(heightProgress)

  // 计算当前柱子对应的 star 数（1 star = 1 米）
  const currentStars = columnHeightInMeters

  // 确定当前主参照物索引
  // 主参照物是：柱子高度已经超过的参照物中最高的那个
  let mainLandmarkIndex = 0
  for (let i = 0; i < landmarks.length; i++) {
    if (columnHeightInMeters >= landmarks[i].height) {
      mainLandmarkIndex = i
    } else {
      break
    }
  }

  // 当前主参照物
  const mainLandmark = landmarks[mainLandmarkIndex]

  // 计算缩放比例：基于主参照物高度
  // 主参照物在屏幕上永远显示为 mainLandmarkTargetHeight 高度
  // 所以缩放比例 = mainLandmarkTargetHeight / mainLandmark.height
  const scaleRatio = mainLandmarkTargetHeight / mainLandmark.height

  // 柱子高度（像素）= 柱子实际高度（米）* 缩放比例
  const columnHeightInPixels = columnHeightInMeters * scaleRatio

  // 限制柱子最高不超过主参照物高度的 1.8 倍（确保不会超出屏幕）
  const maxColumnHeight = mainLandmarkTargetHeight * 1.8
  const finalColumnHeight = Math.min(columnHeightInPixels, maxColumnHeight)

  // 柱子和参照物保持距离显示
  // 柱子的 X 位置：保持向右移动 300px 的位置不变
  const columnX = viewWidth * 0.5 + 300

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  })

  // 下一个参照物出现的过渡进度
  // 当柱子高度接近下一个参照物高度时，显示下一个参照物
  let nextLandmarkTransitionProgress = 0
  let nextLandmarkIndex = -1
  if (mainLandmarkIndex < landmarks.length - 1) {
    const nextLandmark = landmarks[mainLandmarkIndex + 1]
    const progressToNext = columnHeightInMeters / nextLandmark.height
    // 当进度超过 80% 时开始显示下一个参照物
    if (progressToNext > 0.8) {
      nextLandmarkTransitionProgress = Math.min((progressToNext - 0.8) / 0.2, 1)
      nextLandmarkIndex = mainLandmarkIndex + 1
    }
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
            nextLandmarkIndex={nextLandmarkIndex}
            landmarks={landmarks}
            columnX={columnX}
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
