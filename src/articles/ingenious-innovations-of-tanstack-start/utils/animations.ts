import { spring, useCurrentFrame, useVideoConfig } from "remotion"

export const useSpringAnimation = (delay = 0) => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const progress = Math.max(0, (frame - delay) / 30)

  return spring({
    frame: progress * 30,
    fps,
    config: { damping: 12, stiffness: 80, mass: 1 },
  })
}

export const useTypewriter = (text: string, delay = 0, charsPerSecond = 20) => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const startFrame = delay * fps
  const charsPerFrame = charsPerSecond / fps
  const currentFrame = Math.max(0, frame - startFrame)

  const visibleChars = Math.min(
    text.length,
    Math.floor(currentFrame * charsPerFrame),
  )

  return text.slice(0, visibleChars)
}

export const useSequence = <T>(items: T[], durationPerItem: number) => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const currentIndex = Math.floor(frame / (durationPerItem * fps))
  const progress = (frame % (durationPerItem * fps)) / (durationPerItem * fps)

  return {
    currentItem: items[currentIndex] || items[items.length - 1],
    currentIndex: Math.min(currentIndex, items.length - 1),
    progress,
  }
}

export const usePulse = (speed = 1) => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const scale = 1 + Math.sin((frame * speed * Math.PI) / fps) * 0.05
  return { transform: `scale(${scale})` }
}
