import type React from "react"
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion"
import { Building } from "./Building"
import { Mountain } from "./Mountain"
import { Airplane } from "./Airplane"
import { AtmosphereLayer } from "./AtmosphereLayer"
import { Satellite } from "./Satellite"
import { referenceObjects, MAX_HEIGHT } from "../data/referenceObjects"

interface ReferenceObjectsContainerProps {
  readonly scale: number
  readonly cameraY: number
  readonly viewHeight: number
  readonly viewWidth: number
  readonly columnX: number
  readonly currentStars: number
}

export const ReferenceObjectsContainer: React.FC<ReferenceObjectsContainerProps> = ({
  scale,
  cameraY,
  viewHeight,
  viewWidth,
  columnX,
  currentStars,
}) => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  return (
    <>
      {referenceObjects.map((obj, index) => {
        const objY = obj.height * scale
        const relativeY = objY - cameraY
        const isVisible = relativeY > -200 && relativeY < viewHeight + 200

        const fadeInStart = index * 5
        const fadeInDuration = 15
        const opacity = isVisible
          ? interpolate(
              frame,
              [fadeInStart, fadeInStart + fadeInDuration],
              [0, 1],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
            )
          : 0

        if (!isVisible && opacity === 0) return null

        const leftOffset = columnX - 200 - (index % 3) * 120

        switch (obj.type) {
          case "building":
            return (
              <div key={obj.id} style={{ position: "absolute", left: leftOffset, bottom: 0 }}>
                <Building object={obj} scale={scale} opacity={opacity} />
              </div>
            )
          case "mountain":
            return (
              <div key={obj.id} style={{ position: "absolute", left: leftOffset, bottom: 0 }}>
                <Mountain object={obj} scale={scale} opacity={opacity} />
              </div>
            )
          case "airplane":
            return (
              <div key={obj.id} style={{ position: "absolute", left: leftOffset, bottom: 0 }}>
                <Airplane object={obj} scale={scale} opacity={opacity} />
              </div>
            )
          case "layer":
            return (
              <AtmosphereLayer
                key={obj.id}
                object={obj}
                scale={scale}
                opacity={opacity}
                viewWidth={viewWidth}
              />
            )
          case "satellite":
            return (
              <div key={obj.id} style={{ position: "absolute", left: leftOffset, bottom: 0 }}>
                <Satellite object={obj} scale={scale} opacity={opacity} />
              </div>
            )
          default:
            return null
        }
      })}
    </>
  )
}
