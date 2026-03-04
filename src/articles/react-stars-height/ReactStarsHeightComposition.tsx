import type React from "react"
import { Composition, interpolate, useCurrentFrame, useVideoConfig } from "remotion"
import { Title } from "./components/Title"
import { Ground } from "./components/Ground"
import { ReactStarsColumn } from "./components/ReactStarsColumn"
import { ReferenceObjectsContainer } from "./components/ReferenceObjectsContainer"
import { MAX_HEIGHT, referenceObjects } from "./data/referenceObjects"

const VIDEO_CONFIG = {
  width: 1920,
  height: 1080,
  fps: 30,
  durationInFrames: 600,
}

const MAX_STARS = 243550
const VISIBLE_HEIGHT = 200000
const SCALE_FACTOR = VIDEO_CONFIG.height / VISIBLE_HEIGHT

function StarHeightScene() {
  const frame = useCurrentFrame()
  const { height: viewHeight, width: viewWidth } = useVideoConfig()

  const progress = interpolate(frame, [0, VIDEO_CONFIG.durationInFrames - 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  })

  const currentStars = interpolate(progress, [0, 1], [0, MAX_STARS])
  const currentHeight = currentStars

  const maxCameraY = MAX_HEIGHT * SCALE_FACTOR - viewHeight * 0.3
  const cameraY = interpolate(progress, [0, 1], [0, maxCameraY], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  })

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

      <div
        style={{
          position: "absolute",
          top: 100,
          left: 0,
          right: 0,
          bottom: 0,
          transform: `translateY(-${cameraY}px)`,
          transformOrigin: "bottom center",
        }}
      >
        <Ground width={viewWidth} />

        <ReactStarsColumn
          currentStars={currentStars}
          scale={SCALE_FACTOR}
          cameraY={cameraY}
          viewHeight={viewHeight}
        />

        <ReferenceObjectsContainer
          scale={SCALE_FACTOR}
          cameraY={cameraY}
          viewHeight={viewHeight}
          viewWidth={viewWidth}
          columnX={columnX}
          currentStars={currentStars}
        />
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
