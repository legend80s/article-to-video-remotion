import type React from "react"
import { formatHeight } from '../data/referenceObjects'

type UpcomingHintProps = {
  nextName: string
  nextHeight: number
  progress: number
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
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    gap: 8,
    boxShadow: "0 2px 6px rgba(0,0,0,0.4)",
    // ensure it stays readable over varying backgrounds
    textShadow: "0 1px 2px rgba(0,0,0,.4)",
  }

  return (
    <div style={style} className="system-reminder text-lg">
      <span style={{ opacity: 0.95 }}>下一个参照物</span>
      <span style={{ fontWeight: 700 }}>{nextName}</span>
      <span style={{ color: "#9bd7ff" }}>{formatHeight(nextHeight)}</span>
    </div>
  )
}
