import {
  AbsoluteFill,
  interpolate,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion"

export const MyComposition = () => {
  return (
    <>
      <Sequence durationInFrames={40}>
        <SprintComponent title="Welcome to Remotion" />
      </Sequence>
      <Sequence from={40}>
        <SprintComponent title="Hello World!" />
      </Sequence>
    </>
  )
}

function SprintComponent({ title }: { title: string }) {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const scale = spring({
    fps,
    frame,
  })

  return (
    <div
      style={{
        flex: 1,
        textAlign: "center",
        fontSize: "7em",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ transform: `scale(${scale})` }}>
        {title}@{frame}
      </div>
    </div>
  )
}
