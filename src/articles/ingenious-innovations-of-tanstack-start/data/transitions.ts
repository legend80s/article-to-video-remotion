import { interpolate, spring } from "remotion"

export const fadeIn = (progress: number) => {
  return interpolate(progress, [0, 1], [0, 1])
}

export const fadeOut = (progress: number) => {
  return interpolate(progress, [0, 1], [1, 0])
}

export const slideInFromBottom = (progress: number) => {
  const opacity = interpolate(progress, [0, 1], [0, 1])
  const translateY = interpolate(progress, [0, 1], [100, 0])
  return { opacity, transform: `translateY(${translateY}px)` }
}

export const slideInFromRight = (progress: number) => {
  const opacity = interpolate(progress, [0, 1], [0, 1])
  const translateX = interpolate(progress, [0, 1], [100, 0])
  return { opacity, transform: `translateX(${translateX}px)` }
}

export const slideOutToTop = (progress: number) => {
  const opacity = interpolate(progress, [0, 1], [1, 0])
  const translateY = interpolate(progress, [0, 1], [0, -100])
  return { opacity, transform: `translateY(${translateY}px)` }
}

export const slideOutToLeft = (progress: number) => {
  const opacity = interpolate(progress, [0, 1], [1, 0])
  const translateX = interpolate(progress, [0, 1], [0, -100])
  return { opacity, transform: `translateX(${translateX}px)` }
}

export const scaleIn = (progress: number) => {
  const scale = spring({
    frame: progress * 30,
    fps: 30,
    config: { damping: 12, stiffness: 80, mass: 1 },
  })
  return { transform: `scale(${scale})` }
}

export const crossFade = (progress: number) => {
  return {
    opacity: interpolate(progress, [0, 0.5, 1], [0, 1, 1]),
  }
}
