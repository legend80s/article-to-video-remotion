import type React from "react"

type UpcomingHintProps = {
  nextName: string
  nextHeight: number
  progress: number
}

const formatHeight = (meters: number): string => {
  if (meters >= 1000) {
    return `${(meters / 1000).toFixed(0)} 千米`
  }
  return `${meters} 米`
}

export const UpcomingHint: React.FC<UpcomingHintProps> = ({
  nextName,
  nextHeight,
  progress,
}) => {
  const style: React.CSSProperties = {
    position: "absolute",
    bottom: 20,
    right: 20,
    padding: "8px 12px",
    background: "rgba(0,0,0,0.6)",
    color: "#fff",
    borderRadius: 8,
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto',
    fontSize: 14,
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    gap: 8,
    boxShadow: "0 2px 6px rgba(0,0,0,0.4)",
    // ensure it stays readable over varying backgrounds
    textShadow: "0 1px 2px rgba(0,0,0,.4)",
  }

  return (
    <div style={style} className="system-reminder">
      <span style={{ opacity: 0.95 }}>Upcoming</span>
      <span style={{ fontWeight: 700 }}>{nextName}</span>
      <span style={{ color: "#9bd7ff" }}>{formatHeight(nextHeight)}</span>
    </div>
  )
}
