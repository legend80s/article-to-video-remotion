import "./cosmic-fonts.css"
import type React from "react"
import {
  Composition,
  Img,
  interpolate,
  Sequence,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion"
import { Rocket } from "../compostions/Rocket/Rocket"
import {
  opencodeMilestones,
  opencodeStarsDaily,
} from "../opencode-stars/data/starData"

const WIDTH = 1920
const HEIGHT = 1080
const CHART_HEIGHT = 550
const CHART_WIDTH = 1500
const CHART_MARGIN = { top: 120, right: 180, bottom: 150, left: 120 }

const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(0)}K`
  }
  return num.toString()
}

const milestones = opencodeMilestones

const StarGrowthChart: React.FC = () => {
  const frame = useCurrentFrame()
  const { fps, durationInFrames } = useVideoConfig()

  const maxStars = Math.max(...opencodeStarsDaily.map((d) => d.stars))
  const dataLength = opencodeStarsDaily.length
  const animationProgress = interpolate(
    frame,
    [0, durationInFrames * 0.85],
    [0, 1],
    {
      extrapolateRight: "clamp",
    },
  )

  const visibleDataCount = Math.floor(animationProgress * dataLength)
  const visibleData = opencodeStarsDaily.slice(0, visibleDataCount + 1)

  const xScale = CHART_WIDTH / (dataLength - 1)
  const yScale = CHART_HEIGHT / maxStars

  const getRandomOffset = (index: number, range: number = 2) => {
    const randomX = ((Math.sin(index * 12.9898) + 1) / 2 - 0.5) * range
    const randomY = ((Math.sin(index * 78.233) + 1) / 2 - 0.5) * range
    return { randomX, randomY }
  }

  const generatePath = () => {
    if (visibleData.length < 2) return ""
    return visibleData
      .map((point, i) => {
        const { randomX, randomY } = getRandomOffset(i, 1.5)
        const x = CHART_MARGIN.left + i * xScale + randomX
        const y = HEIGHT - CHART_MARGIN.bottom - point.stars * yScale + randomY
        return `${i === 0 ? "M" : "L"} ${x} ${y}`
      })
      .join(" ")
  }

  const generateAreaPath = () => {
    if (visibleData.length < 2) return ""
    const linePath = visibleData
      .map((point, i) => {
        const { randomX, randomY } = getRandomOffset(i, 1.5)
        const x = CHART_MARGIN.left + i * xScale + randomX
        const y = HEIGHT - CHART_MARGIN.bottom - point.stars * yScale + randomY
        return `${i === 0 ? "M" : "L"} ${x} ${y}`
      })
      .join(" ")

    const lastIndex = visibleData.length - 1
    const { randomX: lastRandomX } = getRandomOffset(lastIndex, 1.5)
    const lastX = CHART_MARGIN.left + lastIndex * xScale + lastRandomX
    const bottomY = HEIGHT - CHART_MARGIN.bottom
    const { randomX: firstRandomX } = getRandomOffset(0, 1.5)
    const firstX = CHART_MARGIN.left + firstRandomX

    return `${linePath} L ${lastX} ${bottomY} L ${firstX} ${bottomY} Z`
  }

  const currentStars =
    visibleData.length > 0 ? visibleData[visibleData.length - 1].stars : 0
  const currentDate =
    visibleData.length > 0
      ? visibleData[visibleData.length - 1].date
      : "2025-04"

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  })

  const glowIntensity = spring({
    frame,
    fps,
    config: { damping: 80 },
  })

  const starsScale = interpolate(
    currentStars,
    [0, 10000, 50000, 100000, 120000],
    [0.6, 0.9, 1.4, 2.0, 2.5],
    { extrapolateRight: "clamp" },
  )

  return (
    <div
      style={{
        width: WIDTH,
        height: HEIGHT,
        background: "black",
        // background:
        //   "linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 50%, #0f0f23 100%)",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Cormorant Garamond', serif",
      }}
    >
      <svg
        width={WIDTH}
        height={HEIGHT}
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <defs>
          <linearGradient id="cosmicAreaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffd700" stopOpacity={0.15} />
            <stop offset="50%" stopColor="#ff8c00" stopOpacity={0.08} />
            <stop offset="100%" stopColor="#ffd700" stopOpacity={0.02} />
          </linearGradient>

          <linearGradient id="goldGlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fff7e0" />
            <stop offset="50%" stopColor="#ffd700" />
            <stop offset="100%" stopColor="#ff8c00" />
          </linearGradient>

          <filter id="starGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="softGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="lineGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {[...Array(80)].map((_, i) => {
            const x = (Math.sin(i * 127.1) * 0.5 + 0.5) * WIDTH
            const y = (Math.cos(i * 311.7) * 0.5 + 0.5) * HEIGHT
            const size = Math.random() * 2 + 0.5
            const opacity = Math.random() * 0.6 + 0.2
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r={size}
                fill="#ffffff"
                opacity={opacity * glowIntensity}
              />
            )
          })}
        </defs>
      </svg>

      <div
        style={{
          position: "absolute",
          top: 50,
          left: 0,
          right: 0,
          textAlign: "center",
          opacity: titleOpacity,
        }}
      >
        <h1
          style={{
            fontSize: 52,
            fontWeight: 600,
            margin: 0,
            fontFamily: "'Cormorant Garamond', serif",
            color: "#fff7e0",
            textShadow: "0 0 40px rgba(255, 215, 0, 0.3)",
            letterSpacing: "0.02em",
          }}
        >
          opencode
        </h1>
        <p
          style={{
            fontSize: 28,
            fontWeight: 300,
            color: "rgba(255, 247, 224, 0.6)",
            margin: "8px 0 0 0",
            fontFamily: "'Cormorant Garamond', serif",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          GitHub Star Growth
        </p>
      </div>

      <div
        style={{
          position: "absolute",
          top: 160,
          left: 60,
          display: "flex",
          alignItems: "baseline",
          gap: 16,
          opacity: titleOpacity,
        }}
      >
        <span
          style={{
            fontSize: 18,
            fontWeight: 300,
            color: "rgba(255, 247, 224, 0.5)",
            fontFamily: "'Cormorant Garamond', serif",
            letterSpacing: "0.1em",
          }}
        >
          {opencodeStarsDaily[0].year}
        </span>
        <span
          style={{
            fontSize: 28,
            color: "rgba(255, 247, 224, 0.3)",
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          —
        </span>
        <span
          style={{
            fontSize: 18,
            fontWeight: 300,
            color: "rgba(255, 247, 224, 0.5)",
            fontFamily: "'Cormorant Garamond', serif",
            letterSpacing: "0.1em",
          }}
        >
          {opencodeStarsDaily.at(-1)?.year}
        </span>
      </div>

      <svg
        width={WIDTH}
        height={HEIGHT}
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => {
          const y = HEIGHT - CHART_MARGIN.bottom - CHART_HEIGHT * ratio
          const value = maxStars * ratio
          return (
            <g key={i}>
              <line
                x1={CHART_MARGIN.left}
                y1={y}
                x2={WIDTH - CHART_MARGIN.right}
                y2={y}
                stroke="rgba(255, 247, 224, 0.08)"
                strokeWidth={1}
              />
              <text
                x={CHART_MARGIN.left - 15}
                y={y + 5}
                fill="rgba(255, 247, 224, 0.4)"
                fontSize={18}
                fontWeight={300}
                textAnchor="end"
                fontFamily="'JetBrains Mono', monospace"
              >
                {formatNumber(value)}
              </text>
            </g>
          )
        })}

        {[2025, 2026].map((year) => {
          const yearIndex = opencodeStarsDaily.findIndex(
            (d) => d.year === year && d.month === 1,
          )
          if (yearIndex === -1) {
            const yearStartIndex = opencodeStarsDaily.findIndex(
              (d) => d.year === year,
            )
            if (yearStartIndex === -1) return null
            const x = CHART_MARGIN.left + yearStartIndex * xScale
            return (
              <g key={year}>
                <line
                  x1={x}
                  y1={HEIGHT - CHART_MARGIN.bottom}
                  x2={x}
                  y2={HEIGHT - CHART_MARGIN.bottom + 8}
                  stroke="rgba(255, 247, 224, 0.2)"
                  strokeWidth={1}
                />
                <text
                  x={x}
                  y={HEIGHT - CHART_MARGIN.bottom + 35}
                  fill="rgba(255, 247, 224, 0.4)"
                  fontSize={18}
                  fontWeight={300}
                  textAnchor="middle"
                  fontFamily="'JetBrains Mono', monospace"
                >
                  {year}
                </text>
              </g>
            )
          }
          const x = CHART_MARGIN.left + yearIndex * xScale
          return (
            <g key={year}>
              <line
                x1={x}
                y1={HEIGHT - CHART_MARGIN.bottom}
                x2={x}
                y2={HEIGHT - CHART_MARGIN.bottom + 8}
                stroke="rgba(255, 247, 224, 0.2)"
                strokeWidth={1}
              />
              <text
                x={x}
                y={HEIGHT - CHART_MARGIN.bottom + 35}
                fill="rgba(255, 247, 224, 0.4)"
                fontSize={18}
                fontWeight={300}
                textAnchor="middle"
                fontFamily="'JetBrains Mono', monospace"
              >
                {year}
              </text>
            </g>
          )
        })}

        {visibleData.length > 1 && (
          <path
            d={generateAreaPath()}
            fill="url(#cosmicAreaGradient)"
            style={{
              opacity: spring({
                frame,
                fps,
                config: { damping: 100 },
              }),
            }}
          />
        )}

        {visibleData.length > 1 && (
          <path
            d={generatePath()}
            fill="none"
            stroke="url(#goldGlow)"
            strokeWidth={4}
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#lineGlow)"
            style={{
              strokeDasharray: "0.5, 2",
              opacity: spring({
                frame,
                fps,
                config: { damping: 80, stiffness: 80 },
              }),
            }}
          />
        )}

        {visibleData.map((point, i) => {
          const { randomX, randomY } = getRandomOffset(i, 1.5)
          const x = CHART_MARGIN.left + i * xScale + randomX
          const y =
            HEIGHT - CHART_MARGIN.bottom - point.stars * yScale + randomY
          const isMilestone = milestones.some(
            (m) =>
              m.year === point.year &&
              m.month === point.month &&
              m.day === point.day,
          )

          if (!isMilestone && i % 14 !== 0) return null

          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={isMilestone ? 5 : 2}
              fill={isMilestone ? "#ffd700" : "rgba(255, 215, 0, 0.5)"}
              filter="url(#starGlow)"
              style={{
                opacity: spring({
                  frame: frame - i * 0.3,
                  fps,
                  config: { damping: 100 },
                }),
              }}
            />
          )
        })}

        {visibleData.length > 0 &&
          (() => {
            const lastIndex = visibleData.length - 1
            const lastPoint = visibleData[lastIndex]
            if (!lastPoint) return null
            const { randomX, randomY } = getRandomOffset(lastIndex, 1.5)
            const x = CHART_MARGIN.left + lastIndex * xScale + randomX
            const y =
              HEIGHT - CHART_MARGIN.bottom - lastPoint.stars * yScale + randomY

            const breathe = interpolate(frame % 60, [0, 30, 60], [0, -6, 0], {
              extrapolateRight: "clamp",
            })
            const pulseScale = interpolate(
              frame % 90,
              [0, 45, 90],
              [1, 1.12, 1],
              { extrapolateRight: "clamp" },
            )
            const finalScale = starsScale * pulseScale
            const baseFontSize = getFontSizeByStars(lastPoint.stars, {
              minFont: 12,
              maxFont: 48,
            })

            return (
              <g
                style={{
                  transform: `translate(${0}px, ${breathe}px) scale(${finalScale})`,
                  transformOrigin: `${x}px ${y - 12}px`,
                }}
              >
                <foreignObject
                  x={x - baseFontSize / 2}
                  y={y - 12 - baseFontSize}
                  width={baseFontSize}
                  height={baseFontSize}
                >
                  <Img
                    src={staticFile("imgs/opencode-logo.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                      filter:
                        "drop-shadow(0 0 12px rgba(255, 215, 0, 0.8)) brightness(1.3)",
                    }}
                    alt="opencode Logo"
                  />
                </foreignObject>
              </g>
            )
          })()}

        {milestones.map((milestone, i) => {
          const index = opencodeStarsDaily.findIndex(
            (d) =>
              d.year === milestone.year &&
              d.month === milestone.month &&
              d.day === milestone.day,
          )
          if (index === -1 || index > visibleDataCount) return null

          const { randomX, randomY } = getRandomOffset(index, 1.5)
          const x = CHART_MARGIN.left + index * xScale + randomX
          const y =
            HEIGHT -
            CHART_MARGIN.bottom -
            opencodeStarsDaily[index].stars * yScale +
            randomY

          const milestoneAppearFrame =
            (index / dataLength) * durationInFrames * 0.85
          const labelProgress = interpolate(
            frame,
            [milestoneAppearFrame, milestoneAppearFrame + 15],
            [0, 1],
            { extrapolateRight: "clamp" },
          )

          const isLatest = i === milestones.length - 1

          return (
            <g key={i}>
              <circle
                cx={x}
                cy={y}
                r={isLatest ? 16 : 10}
                fill="none"
                stroke="#ffd700"
                strokeWidth={1.5}
                filter="url(#softGlow)"
                style={{
                  opacity: spring({
                    frame: frame - milestoneAppearFrame,
                    fps,
                    config: { damping: 80 },
                  }),
                }}
              />
              <circle
                cx={x}
                cy={y}
                r={isLatest ? 6 : 4}
                fill="#ffd700"
                filter="url(#starGlow)"
                style={{
                  opacity: spring({
                    frame: frame - milestoneAppearFrame,
                    fps,
                    config: { damping: 80 },
                  }),
                }}
              />
              <text
                x={x + 20}
                y={y - 8}
                fill="rgba(255, 247, 224, 0.9)"
                fontSize={15}
                fontWeight={400}
                fontFamily="'Cormorant Garamond', serif"
                style={{
                  opacity: labelProgress,
                  transform: `translateX(${labelProgress * 15}px)`,
                }}
              >
                {milestone.event}
              </text>
            </g>
          )
        })}
      </svg>

      <div
        style={{
          position: "absolute",
          bottom: 50,
          right: 80,
          textAlign: "right",
        }}
      >
        <div
          style={{
            fontSize: 14,
            fontWeight: 300,
            color: "rgba(255, 247, 224, 0.4)",
            fontFamily: "'Cormorant Garamond', serif",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: 4,
          }}
        >
          {currentDate}
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 600,
            color: "#ffd700",
            fontFamily: "'JetBrains Mono', monospace",
            textShadow: "0 0 30px rgba(255, 215, 0, 0.5)",
            lineHeight: 1,
          }}
        >
          {formatNumber(currentStars)}
        </div>
        <div
          style={{
            fontSize: 20,
            fontWeight: 300,
            color: "rgba(255, 247, 224, 0.5)",
            fontFamily: "'Cormorant Garamond', serif",
            letterSpacing: "0.15em",
          }}
        >
          STARS
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 50,
          left: 80,
          display: "flex",
          gap: 24,
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#ffd700",
              boxShadow: "0 0 10px rgba(255, 215, 0, 0.6)",
            }}
          />
          <span
            style={{
              fontSize: 14,
              fontWeight: 300,
              color: "rgba(255, 247, 224, 0.5)",
              fontFamily: "'Cormorant Garamond', serif",
              letterSpacing: "0.1em",
            }}
          >
            Milestone
          </span>
        </div>
      </div>
    </div>
  )
}

const StarGrowthChartWithIntro: React.FC = () => {
  return (
    <>
      <Sequence from={0} durationInFrames={60}>
        <Rocket />
      </Sequence>

      <Sequence from={60} durationInFrames={420}>
        <StarGrowthChart />
      </Sequence>
    </>
  )
}

export const OpencodeStarsCosmicComposition: React.FC = () => {
  return (
    <Composition
      id="OpencodeStarsCosmicGrowth"
      component={StarGrowthChartWithIntro}
      durationInFrames={60 + 420}
      fps={30}
      width={1920}
      height={1080}
    />
  )
}

function getFontSizeByStars(
  stars: number,
  { minFont = 20, maxFont = 80 }: { minFont: number; maxFont: number },
) {
  const minStars = opencodeStarsDaily[0].stars
  const maxStars = opencodeStarsDaily[opencodeStarsDaily.length - 1].stars

  if (stars <= minStars) return minFont
  if (stars >= maxStars) return maxFont

  const ratio = (stars - minStars) / (maxStars - minStars)
  return Math.round(minFont + ratio * (maxFont - minFont))
}
