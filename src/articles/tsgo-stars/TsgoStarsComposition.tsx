/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import "./handwritten-fonts.css"
import type React from "react"
import {
  Composition,
  Img,
  interpolate,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion"
import { Rocket } from "../compostions/Rocket/Rocket"
import { tsgoMilestones, tsgoStarsDaily } from "./data/starData"

const WIDTH = 1920
const HEIGHT = 1080
const CHART_HEIGHT = 600
const CHART_WIDTH = 1600
const CHART_MARGIN = { top: 100, right: 100, bottom: 150, left: 150 }

const formatNumber = (
  num: number,
  { unit = true }: { unit?: boolean } = {},
): string => {
  if (!unit) return num.toLocaleString("en-US")

  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(0)}K`
  }

  return num.toString()
}

const milestones = tsgoMilestones

const StarGrowthChart = () => {
  const frame = useCurrentFrame()
  const { fps, durationInFrames } = useVideoConfig()

  const maxStars = Math.max(...tsgoStarsDaily.map((d) => d.stars))
  const maxDailyGrowth = Math.max(...tsgoStarsDaily.map((d) => d.dailyGrowth))
  const dataLength = tsgoStarsDaily.length
  const animationProgress = interpolate(
    frame,
    [0, durationInFrames * 0.85],
    [0, 1],
    {
      extrapolateRight: "clamp",
    },
  )

  const visibleDataCount = Math.floor(animationProgress * dataLength)
  const visibleData = tsgoStarsDaily.slice(0, visibleDataCount + 1)

  const xScale = CHART_WIDTH / (dataLength - 1)
  const yScale = CHART_HEIGHT / maxStars
  const yScaleIncrement = CHART_HEIGHT / maxDailyGrowth

  const highestPeak = [...tsgoStarsDaily].sort(
    (a, b) => b.dailyGrowth - a.dailyGrowth,
  )[0]

  const getRandomOffset = (index: number, range: number = 3) => {
    const randomX = ((Math.sin(index * 12.9898) + 1) / 2 - 0.5) * range
    const randomY = ((Math.sin(index * 78.233) + 1) / 2 - 0.5) * range
    return { randomX, randomY }
  }

  const generatePath = () => {
    if (visibleData.length < 2) return ""
    return visibleData
      .map((point, i) => {
        const { randomX, randomY } = getRandomOffset(i, 2)
        const x = CHART_MARGIN.left + i * xScale + randomX
        const y = HEIGHT - CHART_MARGIN.bottom - point.stars * yScale + randomY
        return `${i === 0 ? "M" : "L"} ${x} ${y}`
      })
      .join(" ")
  }

  const generateIncrementPath = () => {
    if (visibleData.length < 2) return ""

    const points = visibleData.map((point, i) => {
      const { randomX, randomY } = getRandomOffset(i, 1)
      const x = CHART_MARGIN.left + i * xScale + randomX
      const y =
        HEIGHT -
        CHART_MARGIN.bottom -
        point.dailyGrowth * yScaleIncrement +
        randomY
      return { x, y }
    })

    let path = `M ${points[0].x} ${points[0].y}`

    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1]
      const curr = points[i]
      const midX = (prev.x + curr.x) / 2
      const midY = (prev.y + curr.y) / 2

      if (i === 1) {
        path += ` L ${midX} ${midY}`
      } else {
        path += ` Q ${prev.x} ${prev.y} ${midX} ${midY}`
      }
    }

    const last = points[points.length - 1]
    path += ` L ${last.x} ${last.y}`

    return path
  }

  const generateAreaPath = () => {
    if (visibleData.length < 2) return ""
    const linePath = visibleData
      .map((point, i) => {
        const { randomX, randomY } = getRandomOffset(i, 2)
        const x = CHART_MARGIN.left + i * xScale + randomX
        const y = HEIGHT - CHART_MARGIN.bottom - point.stars * yScale + randomY
        return `${i === 0 ? "M" : "L"} ${x} ${y}`
      })
      .join(" ")

    const lastIndex = visibleData.length - 1
    const { randomX: lastRandomX } = getRandomOffset(lastIndex, 2)
    const lastX = CHART_MARGIN.left + lastIndex * xScale + lastRandomX
    const bottomY = HEIGHT - CHART_MARGIN.bottom
    const { randomX: firstRandomX } = getRandomOffset(0, 2)
    const firstX = CHART_MARGIN.left + firstRandomX

    return `${linePath} L ${lastX} ${bottomY} L ${firstX} ${bottomY} Z`
  }

  const currentStars =
    visibleData.length > 0 ? visibleData[visibleData.length - 1].stars : 0
  const currentDate =
    visibleData.length > 0
      ? visibleData[visibleData.length - 1].date
      : "2025-04"

  return (
    <div
      style={{
        width: WIDTH,
        height: HEIGHT,
        background:
          "linear-gradient(135deg, #f8f5e6 0%, #f0e6d2 50%, #e8d9b6 100%)",
        boxShadow: "0 0 20px rgba(0,0,0,0.1)",
        fontFamily: "'Comic Neue', 'Architects Daughter', cursive",
        WebkitFontSmoothing: "antialiased",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 40,
          left: 0,
          right: 0,
          textAlign: "center",
          color: "#333",
        }}
      >
        <h1
          className="text-6xl font-bold"
          style={{
            fontFamily: "'JetBrains Mono', monospace",

            color: "#333",

            margin: 0,

            letterSpacing: "0.22em",
          }}
        >
          TSGO
        </h1>
        <p
          className="text-2xl text-gray-700"
          style={{
            fontWeight: "bold",
            margin: "10px 0 0 0",
            fontFamily: "'Comic Neue', cursive",

            textShadow: "1px 1px 2px rgba(0,0,0,0.1)",

            letterSpacing: "0.05em",
          }}
        >
          GitHub Star ⭐ Growth
        </p>
      </div>

      <svg
        width={WIDTH}
        height={HEIGHT}
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <defs>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ff6b6b" stopOpacity={0.2} />
            <stop offset="100%" stopColor="#ff6b6b" stopOpacity={0.05} />
          </linearGradient>
          <filter id="sketchFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.01"
              numOctaves="3"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="1"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
          <filter id="softBlur">
            <feGaussianBlur stdDeviation="1.5" />
          </filter>
        </defs>

        {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => {
          const y = HEIGHT - CHART_MARGIN.bottom - CHART_HEIGHT * ratio
          const value = maxStars * ratio
          const randomY = (Math.random() - 0.5) * 2
          return (
            <g key={i}>
              <line
                x1={CHART_MARGIN.left}
                y1={y + randomY}
                x2={WIDTH - CHART_MARGIN.right}
                y2={y + (Math.random() - 0.5) * 2}
                stroke="#444"
                strokeWidth={1.2}
                strokeLinecap="round"
                style={{
                  strokeDasharray: `${Math.random() * 2 + 4}, ${Math.random() * 2 + 2}`,
                }}
              />
              <text
                x={CHART_MARGIN.left - 20 + (Math.random() - 0.5) * 2}
                y={y + 5 + (Math.random() - 0.5) * 2}
                fill="#333"
                className="text-[32px]"
                fontWeight="bold"
                textAnchor="end"
                fontFamily="'Comic Neue', cursive"
              >
                {formatNumber(value)}
              </text>
            </g>
          )
        })}

        {[2024, 2025, 2026].map((year) => {
          const yearIndex = tsgoStarsDaily.findIndex(
            (d) => d.year === year && d.month === 1,
          )
          if (yearIndex === -1) {
            const yearStartIndex = tsgoStarsDaily.findIndex(
              (d) => d.year === year,
            )
            if (yearStartIndex === -1) return null
            const x = CHART_MARGIN.left + yearStartIndex * xScale
            const randomX = (Math.random() - 0.5) * 2
            return (
              <g key={year}>
                <line
                  x1={x + randomX}
                  y1={HEIGHT - CHART_MARGIN.bottom}
                  x2={x + (Math.random() - 0.5) * 2}
                  y2={
                    HEIGHT -
                    CHART_MARGIN.bottom +
                    10 +
                    (Math.random() - 0.5) * 2
                  }
                  stroke="#666"
                  strokeWidth={1.2}
                  strokeLinecap="round"
                />
                <text
                  x={x + (Math.random() - 0.5) * 3}
                  y={
                    HEIGHT -
                    CHART_MARGIN.bottom +
                    55 +
                    (Math.random() - 0.5) * 2
                  }
                  fill="#333"
                  className="11 text-[32px]"
                  fontWeight="bold"
                  textAnchor="middle"
                  fontFamily="'Comic Neue', cursive"
                >
                  {year}
                </text>
              </g>
            )
          }
          const x = CHART_MARGIN.left + yearIndex * xScale
          const randomX = (Math.random() - 0.5) * 2
          return (
            <g key={year}>
              <line
                x1={x + randomX}
                y1={HEIGHT - CHART_MARGIN.bottom}
                x2={x + (Math.random() - 0.5) * 2}
                y2={
                  HEIGHT - CHART_MARGIN.bottom + 10 + (Math.random() - 0.5) * 2
                }
                stroke="#666"
                strokeWidth={1.2}
                strokeLinecap="round"
              />
              <text
                x={x + (Math.random() - 0.5) * 3}
                y={
                  HEIGHT - CHART_MARGIN.bottom + 55 + (Math.random() - 0.5) * 2
                }
                fill="#333"
                className="text-[32px]"
                fontWeight="bold"
                textAnchor="middle"
                fontFamily="'Comic Neue', cursive"
              >
                {year}
              </text>
            </g>
          )
        })}

        {/* 日期标记 - 天维度 */}
        {tsgoStarsDaily
          .map((d, i) => ({
            date: d.date,
            index: i,
            month: d.month,
            day: d.day,
          }))
          .filter((_, i) => i % 30 === 0)
          .map(({ date, index, month, day }) => {
            const x = CHART_MARGIN.left + index * xScale
            const label = `${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`
            return (
              <g key={date}>
                <line
                  x1={x}
                  y1={HEIGHT - CHART_MARGIN.bottom}
                  y2={HEIGHT - CHART_MARGIN.bottom + 4}
                  stroke="#aaa"
                  strokeWidth={1}
                />
                <text
                  x={x}
                  y={HEIGHT - CHART_MARGIN.bottom + 28}
                  fill="#666"
                  fontSize={22}
                  textAnchor="middle"
                  fontFamily="'Comic Neue', cursive"
                >
                  {label}
                </text>
              </g>
            )
          })}

        {visibleData.length > 1 && (
          <path
            d={generateAreaPath()}
            fill="url(#areaGradient)"
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
            stroke="#ff6b6b"
            strokeWidth={7}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              filter: "url(#sketchFilter)",
              strokeDasharray: "0.5, 1.5",
              strokeLinejoin: "round",
              opacity: spring({
                frame,
                fps,
                config: { damping: 100, stiffness: 100 },
              }),
            }}
          />
        )}

        {visibleData.length > 1 && (
          <path
            d={generateIncrementPath()}
            fill="none"
            stroke="#4caf50"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              opacity: 0.6,
            }}
          />
        )}

        {(() => {
          const index = tsgoStarsDaily.findIndex(
            (d) =>
              d.year === highestPeak.year &&
              d.month === highestPeak.month &&
              d.day === highestPeak.day,
          )
          if (index === -1 || index > visibleDataCount) return null

          const { randomX, randomY } = getRandomOffset(index, 1)
          const x = CHART_MARGIN.left + index * xScale + randomX
          const y =
            HEIGHT -
            CHART_MARGIN.bottom -
            highestPeak.dailyGrowth * yScaleIncrement +
            randomY +
            18

          return (
            <g key="highestPeak">
              <text
                x={x}
                y={y}
                fill="#2e7d32"
                className="text-[20px]"
                fontWeight="bold"
                textAnchor="middle"
                fontFamily="'JetBrains Mono', monospace"
              >
                单日最高斩获 {highestPeak.dailyGrowth} star
              </text>
            </g>
          )
        })()}

        {visibleData.map((point, i) => {
          const { randomX, randomY } = getRandomOffset(i, 2)
          const x = CHART_MARGIN.left + i * xScale + randomX
          const y =
            HEIGHT - CHART_MARGIN.bottom - point.stars * yScale + randomY
          const isMilestone = milestones.some(
            (m) =>
              m.year === point.year &&
              m.month === point.month &&
              m.day === point.day,
          )

          if (!isMilestone && i % 7 !== 0) return null

          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={isMilestone ? 6 : 3}
              fill={isMilestone ? "#ec1313" : "#ff6b6b"}
              stroke="#333"
              strokeWidth={1.5}
              style={{
                opacity: spring({
                  frame: frame - i * 0.5,
                  fps,
                  config: { damping: 100 },
                }),
                filter: "url(#sketchFilter)",
              }}
            />
          )
        })}

        {visibleData.length > 0 &&
          (() => {
            const lastIndex = visibleData.length - 1
            const lastPoint = visibleData[lastIndex]
            if (!lastPoint) return null
            const { randomX, randomY } = getRandomOffset(lastIndex, 2)
            const lobsterShift = animationProgress > 0.95 ? -50 : 0
            const x = CHART_MARGIN.left + lastIndex * xScale + randomX
            const y =
              HEIGHT -
              CHART_MARGIN.bottom -
              lastPoint.stars * yScale +
              randomY +
              lobsterShift

            const starsScale = interpolate(
              lastPoint.stars,
              [0, 10000, 50000, 100000, 120000],
              [0.8, 1.2, 1.8, 2.5, 3.2],
              { extrapolateRight: "clamp" },
            )

            const breathe = interpolate(frame % 60, [0, 30, 60], [0, -8, 0], {
              extrapolateRight: "clamp",
            })
            const wobble = interpolate(frame % 45, [0, 22, 45], [0, 5, 0], {
              extrapolateRight: "clamp",
            })
            const pulseScale = interpolate(
              frame % 90,
              [0, 45, 90],
              [1, 1.15, 1],
              { extrapolateRight: "clamp" },
            )
            const finalScale = starsScale * pulseScale

            const baseFontSize = getFontSizeByStars(lastPoint.stars, {
              minFont: 20,
              maxFont: 56,
            })

            return (
              <g
                style={{
                  transform: `translate(${wobble}px, ${breathe}px) scale(${finalScale})`,
                  transformOrigin: `${x}px ${y - 15}px`,
                }}
              >
                <foreignObject
                  x={x - baseFontSize / 2}
                  y={y - 18 - baseFontSize}
                  width={baseFontSize}
                  height={baseFontSize}
                >
                  <Img
                    src="https://avatars.githubusercontent.com/u/6154722?v=4"
                    style={{
                      width: "100%",
                      height: "100%",
                      filter: "drop-shadow(0px 1px 0px rgba(0,0,0,0.4))",
                    }}
                    alt="TSGO Logo"
                  />
                </foreignObject>
              </g>
            )
          })()}

        {milestones.map((milestone, i) => {
          const index = tsgoStarsDaily.findIndex(
            (d) =>
              d.year === milestone.year &&
              d.month === milestone.month &&
              d.day === milestone.day,
          )
          if (index === -1 || index > visibleDataCount) return null

          const { randomX, randomY } = getRandomOffset(index, 2)
          const x = CHART_MARGIN.left + index * xScale + randomX
          const y =
            HEIGHT -
            CHART_MARGIN.bottom -
            tsgoStarsDaily[index].stars * yScale +
            randomY

          const milestoneAppearFrame =
            (index / dataLength) * durationInFrames * 0.85
          const labelProgress = interpolate(
            frame,
            [milestoneAppearFrame, milestoneAppearFrame + 10],
            [0, 1],
            { extrapolateRight: "clamp" },
          )

          return (
            <g key={i}>
              <circle
                cx={x}
                cy={y}
                r={12}
                fill="none"
                stroke="#ec1313"
                strokeWidth={1.5}
                style={{
                  opacity: spring({
                    frame: frame - milestoneAppearFrame,
                    fps,
                    config: { damping: 100 },
                  }),
                }}
              />
              <text
                x={x - 150}
                y={y - 15 - (i === milestones.length - 1 ? 15 : 0)}
                className="text-[24px] font-bold fill-[#ffx6b6b]"
                fontFamily="'Comic Neue', cursive"
                style={{
                  opacity: labelProgress,
                  transform: `translateX(${labelProgress * 10}px)`,
                }}
              >
                {milestone.year}-{milestone.month} {milestone.event}
              </text>
            </g>
          )
        })}
      </svg>

      <div
        style={{
          position: "absolute",
          bottom: 40,
          right: 100,
          minWidth: "20rem",
          background: "rgba(0,0,0,0.6)",
          padding: "20px 30px",
          borderRadius: 12,
          border: "1px solid #ff6b6b",
          color: "white",
        }}
      >
        <div
          className="text-[32px]"
          style={{
            color: "#eee",
            marginBottom: 5,
            fontWeight: "bold",
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          {currentDate}
        </div>
        <code
          className="text-6xl"
          style={{
            fontSize: 72,
            fontWeight: 600,
            color: "#ffd700",
            fontFamily: "'JetBrains Mono', monospace",
            textShadow: "0 0 30px rgba(255, 215, 0, 0.5)",
            lineHeight: 1,
          }}
        >
          {formatNumber(currentStars, { unit: false })}
        </code>
        <div
          className="text-[32px]"
          style={{
            fontFamily: "'JetBrains Mono', monospace",

            letterSpacing: "0.15em",

            color: "#eee",
            fontWeight: "bold",
          }}
        >
          STARS
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: 100,
          display: "flex",
          gap: 30,
          color: "white",
          fontSize: 14,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            className="w-8 h-1"
            style={{ background: "#4caf50", borderRadius: 2 }}
          />
          <span
            className="text-2xl"
            style={{ fontWeight: "bold", color: "#333" }}
          >
            日增量
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div className="flex rounded-full border border-[#ec1313] w-6 h-6 items-center justify-center">
            <i
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#ec1313",
              }}
            />
          </div>
          <span
            className="text-2xl"
            style={{ fontWeight: "bold", color: "#333" }}
          >
            重要里程碑
          </span>
        </div>
      </div>
    </div>
  )
}

const StarGrowthChartWithIntro: React.FC = () => {
  const rocketDuration = 70
  const totalDuration = 495
  return (
    <>
      <Sequence from={0} durationInFrames={rocketDuration}>
        <Rocket />
      </Sequence>

      <Sequence
        from={rocketDuration}
        durationInFrames={totalDuration - rocketDuration}
      >
        <StarGrowthChart />
      </Sequence>
    </>
  )
}

export const TsgoStarsComposition: React.FC = () => {
  return (
    <Composition
      id="TsgoStarsGrowth"
      component={StarGrowthChartWithIntro}
      durationInFrames={45 + 450}
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
  const minStars = tsgoStarsDaily[0].stars
  const maxStars = tsgoStarsDaily[tsgoStarsDaily.length - 1].stars

  if (stars <= minStars) return minFont
  if (stars >= maxStars) return maxFont

  const ratio = (stars - minStars) / (maxStars - minStars)
  return Math.round(minFont + ratio * (maxFont - minFont))
}
