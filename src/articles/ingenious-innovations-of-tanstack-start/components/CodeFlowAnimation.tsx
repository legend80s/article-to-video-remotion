import type React from "react"
import { AbsoluteFill, interpolate, spring, useCurrentFrame } from "remotion"
import { COLORS } from "../data/constants"

interface FlowNode {
  id: string
  label: string
  icon: string
  x: number
  y: number
}

interface CodeFlowAnimationProps {
  nodes: FlowNode[]
  connections: Array<{ from: string; to: string; label?: string }>
}

export const CodeFlowAnimation: React.FC<CodeFlowAnimationProps> = ({
  nodes,
  connections,
}) => {
  const frame = useCurrentFrame()

  const getNodeScale = (index: number) => {
    const startFrame = index * 15 + 30
    if (frame < startFrame) return 0
    return spring({
      frame: frame - startFrame,
      fps: 30,
      config: { damping: 12, stiffness: 80, mass: 1 },
    })
  }

  const getLineProgress = (index: number) => {
    const startFrame = index * 15 + 90
    if (frame < startFrame) return 0
    return Math.min(1, (frame - startFrame) / 30)
  }

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.background }}>
      <svg style={{ width: "100%", height: "100%" }}>
        {connections.map((conn, index) => {
          const fromNode = nodes.find((n) => n.id === conn.from)
          const toNode = nodes.find((n) => n.id === conn.to)
          if (!fromNode || !toNode) return null

          const progress = getLineProgress(index)
          const x1 = fromNode.x
          const y1 = fromNode.y
          const x2 = toNode.x
          const y2 = toNode.y

          const currentX = x1 + (x2 - x1) * progress
          const currentY = y1 + (y2 - y1) * progress

          return (
            <g key={conn.from + conn.to}>
              <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={COLORS.primary}
                strokeWidth={3}
                strokeDasharray="10,5"
                opacity={progress}
              />
              <circle
                cx={currentX}
                cy={currentY}
                r={8}
                fill={COLORS.success}
                opacity={progress}
              />
              {conn.label && (
                <text
                  x={(x1 + x2) / 2}
                  y={(y1 + y2) / 2 - 20}
                  fill={COLORS.text.secondary}
                  fontSize={24}
                  textAnchor="middle"
                  opacity={progress}
                >
                  {conn.label}
                </text>
              )}
            </g>
          )
        })}

        {nodes.map((node, index) => {
          const scale = getNodeScale(index)
          const opacity = interpolate(scale, [0, 1], [0, 1])

          return (
            <g
              key={node.id}
              transform={`translate(${node.x}, ${node.y})`}
              opacity={opacity}
            >
              <circle
                r={50 * scale}
                fill={COLORS.surface}
                stroke={COLORS.primary}
                strokeWidth={3}
              />
              <text
                x={0}
                y={10}
                fill={COLORS.text.primary}
                fontSize={40}
                textAnchor="middle"
                dominantBaseline="middle"
              >
                {node.icon}
              </text>
              <text
                x={0}
                y={80}
                fill={COLORS.text.primary}
                fontSize={20}
                textAnchor="middle"
                fontWeight="bold"
              >
                {node.label}
              </text>
            </g>
          )
        })}
      </svg>
    </AbsoluteFill>
  )
}
