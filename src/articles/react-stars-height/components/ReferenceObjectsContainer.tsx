import type React from "react"

type ReferenceObjectsContainerProps = {
  readonly columnHeight: number
  readonly viewHeight: number
  readonly viewWidth: number
  readonly columnX: number
  readonly currentStars: number
  readonly currentLandmarkIndex: number
  readonly transitionProgress: number
  readonly landmarks: { name: string; height: number }[]
}

export const ReferenceObjectsContainer = ({
  columnHeight,
  viewHeight,
  viewWidth,
  columnX,
  currentStars,
  currentLandmarkIndex,
  transitionProgress,
  landmarks,
}: ReferenceObjectsContainerProps) => {
  const groundHeight = 0

  const landmarkHeight = viewHeight * 0.5

  const renderLandmarks = () => {
    const elements: React.ReactNode[] = []

    for (let i = 0; i <= currentLandmarkIndex; i++) {
      const isCurrentOrNext = i === currentLandmarkIndex || i === currentLandmarkIndex + 1
      const opacity = isCurrentOrNext ? 1 : 0.3

      const leftPosition = viewWidth * 0.1 + i * 120

      elements.push(
        <div
          key={`landmark-${i}`}
          style={{
            position: "absolute",
            left: leftPosition,
            bottom: groundHeight,
            display: "flex",
            flexDirection: "column-reverse",
            alignItems: "center",
            opacity,
          }}
        >
          <div
            style={{
              width: 80,
              height: landmarkHeight,
              background: getLandmarkColor(i),
              borderRadius: 4,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              paddingBottom: 8,
            }}
          >
            {i < 4 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {Array.from({ length: Math.min(5, Math.floor(landmarkHeight / 20)) }).map((_, j) => (
                  <div
                    key={j}
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
            <div>{landmarks[i].name}</div>
            <div style={{ color: "#8AD4FF", fontSize: 12 }}>
              {formatHeight(landmarks[i].height)}
            </div>
          </div>
        </div>
      )
    }

    if (currentLandmarkIndex < landmarks.length - 1 && transitionProgress > 0) {
      const nextIndex = currentLandmarkIndex + 1
      const nextLeftPosition = viewWidth * 0.1 + (currentLandmarkIndex + 1) * 120

      elements.push(
        <div
          key={`next-${nextIndex}`}
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
          <div
            style={{
              width: 80,
              height: landmarkHeight,
              background: getLandmarkColor(nextIndex),
              borderRadius: 4,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              paddingBottom: 8,
            }}
          >
            {nextIndex < 4 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {Array.from({ length: 5 }).map((_, j) => (
                  <div
                    key={j}
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
            <div>{landmarks[nextIndex].name}</div>
            <div style={{ color: "#8AD4FF", fontSize: 12 }}>
              {formatHeight(landmarks[nextIndex].height)}
            </div>
          </div>
        </div>
      )
    }

    return elements
  }

  return <>{renderLandmarks()}</>
}

function getLandmarkColor(index: number): string {
  const colors = [
    "#4A90D9",
    "#4A90D9",
    "#4A90D9",
    "#FFAA00",
    "#5D4E37",
    "#5D4E37",
    "#5D4E37",
    "#5D4E37",
    "#5D4E37",
    "#5D4E37",
    "#E8E8E8",
    "#8AD4FF",
    "#8AD4FF",
    "#8AD4FF",
    "#C0C0C0",
  ]
  return colors[index] || "#4A90D9"
}

function formatHeight(meters: number): string {
  if (meters >= 1000) {
    return `${(meters / 1000).toFixed(0)} km`
  }
  return `${meters} m`
}
