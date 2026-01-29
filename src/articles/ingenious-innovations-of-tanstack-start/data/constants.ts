export const COLORS = {
  primary: "#C678DD",
  primaryDark: "#9B59B6",
  success: "#50FA7B",
  error: "#FF5555",
  warning: "#FFB86C",
  info: "#8BE9FD",
  background: "#0d1117",
  surface: "#161B22",
  border: "#30363D",
  text: {
    primary: "#F0F6FC",
    secondary: "#8B949E",
    code: "#79C0FF",
  },
} as const

export const VIDEO_CONFIG = {
  durationInFrames: 3600,
  fps: 30,
  width: 1920,
  height: 1080,
} as const

export const SCENE_TIMINGS = {
  painPoint: { start: 0, end: 600 },
  clickToCode: { start: 600, end: 2100 },
  howItWorks: { start: 1200, end: 1800 },
  autoGenerate: { start: 2100, end: 3000 },
  typeHint: { start: 3000, end: 3300 },
  cta: { start: 3300, end: 3600 },
} as const
