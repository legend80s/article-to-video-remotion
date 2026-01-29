import type React from "react"
import { AbsoluteFill, interpolate, spring, useCurrentFrame } from "remotion"
import { COLORS } from "../data/constants"

interface SwordSlashEffectProps {
  startX: number
  startY: number
  endX: number
  endY: number
  delay?: number
}

export const SwordSlashEffect: React.FC<SwordSlashEffectProps> = ({
  startX,
  startY,
  endX,
  endY,
  delay = 0,
}) => {
  const frame = useCurrentFrame()
  const progress = Math.min(1, (frame - delay) / 20)

  const scale = spring({
    frame: Math.max(0, frame - delay),
    fps: 30,
    config: { damping: 12, stiffness: 80, mass: 1 },
  })

  const currentX = startX + (endX - startX) * progress
  const currentY = startY + (endY - startY) * progress

  const slashAngle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI)
  const slashLength = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2)

  const opacity = interpolate(progress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      <svg style={{ width: "100%", height: "100%" }}>
        <defs>
          <linearGradient id="slashGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0" />
            <stop offset="50%" stopColor={COLORS.primary} stopOpacity="1" />
            <stop offset="100%" stopColor={COLORS.primary} stopOpacity="0" />
          </linearGradient>
        </defs>

        <g
          transform={`translate(${currentX}, ${currentY}) rotate(${slashAngle})`}
          opacity={opacity}
        >
          <line
            x1={-slashLength / 2}
            y1={0}
            x2={slashLength / 2}
            y2={0}
            stroke="url(#slashGradient)"
            strokeWidth={4}
            strokeLinecap="round"
          />

          <circle
            cx={0}
            cy={0}
            r={20 * scale}
            fill={COLORS.primary}
            opacity={0.6}
          />

          {[...Array(5)].map((_, i) => {
            const angle = (i / 5) * Math.PI * 2
            const distance = 30 + i * 10
            const x = Math.cos(angle) * distance * scale
            const y = Math.sin(angle) * distance * scale
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r={5}
                fill={COLORS.success}
                opacity={0.8}
              />
            )
          })}
        </g>

        <g opacity={opacity}>
          <circle
            cx={startX}
            cy={startY}
            r={15}
            fill={COLORS.warning}
            opacity={0.8}
          />
          <text
            x={startX}
            y={startY + 5}
            fill={COLORS.background}
            fontSize={16}
            textAnchor="middle"
            fontWeight="bold"
          >
            ⚡
          </text>
        </g>
      </svg>
    </AbsoluteFill>
  )
}
