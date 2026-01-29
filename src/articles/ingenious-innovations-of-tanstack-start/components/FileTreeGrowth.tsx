import type React from "react"
import { AbsoluteFill, interpolate, spring, useCurrentFrame } from "remotion"
import { COLORS } from "../data/constants"

interface FileNode {
  id: string
  name: string
  type: "file" | "folder"
  children?: FileNode[]
  icon?: string
}

interface FileTreeGrowthProps {
  nodes: FileNode[]
  highlightNode?: string
  showTemplate?: boolean
}

const FileNodeComponent: React.FC<{
  node: FileNode
  depth: number
  frame: number
  highlightNode?: string
  showTemplate?: boolean
}> = ({ node, depth, frame, highlightNode, showTemplate }) => {
  const delay = depth * 15
  const scale = spring({
    frame: Math.max(0, frame - delay),
    fps: 30,
    config: { damping: 12, stiffness: 80, mass: 1 },
  })

  const opacity = interpolate(scale, [0, 1], [0, 1])
  const isHighlighted = highlightNode === node.id
  const showTemplateContent =
    showTemplate && isHighlighted && node.type === "file"

  return (
    <div
      style={{
        marginLeft: depth * 30,
        opacity,
        transform: `scaleX(${scale})`,
        transformOrigin: "left",
        marginBottom: 8,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "8px 12px",
          borderRadius: 4,
          backgroundColor: isHighlighted
            ? `${COLORS.primary}30`
            : "transparent",
          border: isHighlighted ? `2px solid ${COLORS.primary}` : "none",
        }}
      >
        <span
          style={{
            fontSize: 24,
            marginRight: 12,
            color: node.type === "folder" ? COLORS.info : COLORS.text.secondary,
          }}
        >
          {node.icon || (node.type === "folder" ? "📁" : "📄")}
        </span>
        <span
          style={{
            color: COLORS.text.primary,
            fontSize: 20,
            fontWeight: isHighlighted ? "bold" : "normal",
          }}
        >
          {node.name}
        </span>
      </div>

      {showTemplateContent && (
        <div
          style={{
            marginLeft: 40,
            marginTop: 10,
            padding: 20,
            backgroundColor: COLORS.surface,
            borderRadius: 8,
            border: `1px solid ${COLORS.border}`,
            fontFamily: "monospace",
            fontSize: 16,
            color: COLORS.text.code,
            whiteSpace: "pre-wrap",
          }}
        >
          {node.type === "file" &&
            node.name.endsWith(".tsx") &&
            `// ${node.name}
export default function ${node.name.replace(".tsx", "")}() {
  return (
    <div>
      <h1>${node.name.replace(".tsx", "").replace(/^\w/, (c) => c.toUpperCase())}</h1>
    </div>
  )
}`}
        </div>
      )}

      {node.children &&
        node.children.map((child) => (
          <FileNodeComponent
            key={child.id}
            node={child}
            depth={depth + 1}
            frame={frame}
            highlightNode={highlightNode}
            showTemplate={showTemplate}
          />
        ))}
    </div>
  )
}

export const FileTreeGrowth: React.FC<FileTreeGrowthProps> = ({
  nodes,
  highlightNode,
  showTemplate,
}) => {
  const frame = useCurrentFrame()

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.background }}>
      <div
        style={{
          padding: 60,
          height: "100%",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2
          style={{
            color: COLORS.text.primary,
            fontSize: 36,
            marginBottom: 30,
            fontWeight: "bold",
          }}
        >
          文件树
        </h2>
        <div style={{ flex: 1, overflow: "hidden" }}>
          {nodes.map((node) => (
            <FileNodeComponent
              key={node.id}
              node={node}
              depth={0}
              frame={frame}
              highlightNode={highlightNode}
              showTemplate={showTemplate}
            />
          ))}
        </div>
      </div>
    </AbsoluteFill>
  )
}
