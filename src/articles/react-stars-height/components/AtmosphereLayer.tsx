import type React from "react"
import { formatHeight, type ReferenceObject } from "../data/referenceObjects"

interface AtmosphereLayerProps {
  readonly object: ReferenceObject
  readonly scale: number
  readonly opacity: number
  readonly viewWidth: number
}

export const AtmosphereLayer: React.FC<AtmosphereLayerProps> = ({ object, scale, opacity, viewWidth }) => {
  const height = object.height * scale

  return (
    <div
      style={{
        position: "absolute",
        bottom: height,
        left: 0,
        right: 0,
        opacity,
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: viewWidth,
          borderTop: "2px dashed rgba(100, 200, 255, 0.6)",
          position: "relative",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 20,
          top: -8,
          fontSize: 11,
          color: "#8AD4FF",
          whiteSpace: "nowrap",
          textShadow: "0 0 4px rgba(0,0,0,0.8)",
        }}
      >
        {object.name} ({formatHeight(object.height)})
      </div>
    </div>
  )
}
