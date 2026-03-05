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

const MAX_LANDMARK_HEIGHT = 540
const MAX_STARS = 243550

const getStageHeights = () => {
  const stages: { startHeight: number; endHeight: number }[] = []
  for (let i = 0; i < landmarks.length - 1; i++) {
    stages.push({
      startHeight: landmarks[i].height,
      endHeight: landmarks[i + 1].height,
    })
  }
  // 添加最后一个阶段：从最后一个 landmark 到 MAX_STARS
  stages.push({
    startHeight: landmarks[landmarks.length - 1].height,
    endHeight: MAX_STARS,
  })
  return stages
}

const STAGES = getStageHeights()

function calculateHeight(progress: number): number {
  if (progress <= 0) return 0
  if (progress >= 1) return MAX_STARS

  const numStages = STAGES.length
  const progressPerStage = 1 / numStages

  const currentStageIndex = Math.floor(progress / progressPerStage)
  const progressInStage = (progress % progressPerStage) / progressPerStage

  const stage = STAGES[Math.min(currentStageIndex, numStages - 1)]

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

  const mainLandmarkTargetHeight = Math.min(
    viewHeight * 0.5,
    MAX_LANDMARK_HEIGHT,
  )

  const heightProgress = Math.min(
    frame / (VIDEO_CONFIG.durationInFrames - 1),
    1,
  )

  const columnHeightInMeters = calculateHeight(heightProgress)

  const currentStars = heightProgress >= 1 ? MAX_STARS : columnHeightInMeters

  let mainLandmarkIndex = 0
  for (let i = 0; i < landmarks.length; i++) {
    if (columnHeightInMeters >= landmarks[i].height) {
      mainLandmarkIndex = i
    } else {
      break
    }
  }

  const mainLandmark = landmarks[mainLandmarkIndex]

  const scaleRatio = mainLandmarkTargetHeight / mainLandmark.height

  const columnHeightInPixels = columnHeightInMeters * scaleRatio

  const MAX_COLUMN_HEIGHT = 800
  const maxColumnHeight = Math.min(
    mainLandmarkTargetHeight * 1.8,
    MAX_COLUMN_HEIGHT,
  )
  const finalColumnHeight = Math.min(columnHeightInPixels, maxColumnHeight)

  const columnX = viewWidth * 0.5 + 300

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  })

  let nextLandmarkTransitionProgress = 0
  let nextLandmarkIndex = -1
  if (mainLandmarkIndex < landmarks.length - 1) {
    const nextLandmark = landmarks[mainLandmarkIndex + 1]
    const progressToNext = columnHeightInMeters / nextLandmark.height
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

      <Ground currentStars={currentStars} />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 8,
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
