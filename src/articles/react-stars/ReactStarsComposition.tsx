/** biome-ignore-all lint/nursery/useUniqueElementIds: <explanation> */
import "./handwritten-fonts.css"
import type React from "react"
import {
  Composition,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion"
import {
  milestones,
  reactStarsMonthly,
  reactStarsYearly,
} from "./data/starData"

const WIDTH = 1920
const HEIGHT = 1080
const CHART_HEIGHT = 600
const CHART_WIDTH = 1600
const CHART_MARGIN = { top: 100, right: 100, bottom: 150, left: 150 }

// 格式化数字
const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return `${(num / 1000).toFixed(0)}K`
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(0)}K`
  }
  return num.toString()
}

// 主图表组件
const StarGrowthChart: React.FC = () => {
  const frame = useCurrentFrame()
  const { fps, durationInFrames } = useVideoConfig()

  const maxStars = Math.max(...reactStarsMonthly.map((d) => d.stars))
  const dataLength = reactStarsMonthly.length
  const animationProgress = interpolate(
    frame,
    [0, durationInFrames * 0.85],
    [0, 1],
    {
      extrapolateRight: "clamp",
    },
  )

  const visibleDataCount = Math.floor(animationProgress * dataLength)
  const visibleData = reactStarsMonthly.slice(0, visibleDataCount + 1)

  const xScale = CHART_WIDTH / (dataLength - 1)
  const yScale = CHART_HEIGHT / maxStars

  // 生成一致的随机偏移量（基于索引）
  const getRandomOffset = (index: number, range: number = 3) => {
    // 使用正弦函数生成基于索引的一致随机值
    const randomX = ((Math.sin(index * 12.9898) + 1) / 2 - 0.5) * range
    const randomY = ((Math.sin(index * 78.233) + 1) / 2 - 0.5) * range
    return { randomX, randomY }
  }

  // 生成路径
  const generatePath = () => {
    if (visibleData.length < 2) return ""
    return visibleData
      .map((point, i) => {
        // 使用基于索引的一致随机偏移量
        const { randomX, randomY } = getRandomOffset(i, 2)
        const x = CHART_MARGIN.left + i * xScale + randomX
        const y = HEIGHT - CHART_MARGIN.bottom - point.stars * yScale + randomY
        return `${i === 0 ? "M" : "L"} ${x} ${y}`
      })
      .join(" ")
  }

  // 生成填充区域路径
  const generateAreaPath = () => {
    if (visibleData.length < 2) return ""
    const linePath = visibleData
      .map((point, i) => {
        // 使用基于索引的一致随机偏移量
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

  // 当前显示的 star 数
  const currentStars =
    visibleData.length > 0 ? visibleData[visibleData.length - 1].stars : 0
  const currentDate =
    visibleData.length > 0
      ? visibleData[visibleData.length - 1].date
      : "2013-05"

  return (
    <div
      style={{
        width: WIDTH,
        height: HEIGHT,
        background:
          "linear-gradient(135deg, #f8f5e6 0%, #f0e6d2 50%, #e8d9b6 100%)",
        boxShadow: "0 0 20px rgba(0,0,0,0.1)",
        fontFamily: "'Comic Neue', 'Architects Daughter', cursive",
        // Add font-face for handwritten fonts
        WebkitFontSmoothing: "antialiased",
        position: "relative",
      }}
    >
      {/* 标题 */}
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
          style={{
            fontSize: 48,
            fontWeight: "bold",
            margin: 0,
            fontFamily: "'Architects Daughter', cursive",
            color: "#333",
            textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
          }}
        >
          React GitHub Stars Growth (2013-2026)
        </h1>
        <p
          style={{
            fontSize: 20,
            color: "#666",
            margin: "10px 0 0 0",
            fontFamily: "'Comic Neue', cursive",
          }}
        >
          From 0 to{" "}
          {formatNumber(reactStarsMonthly[reactStarsMonthly.length - 1].stars)}{" "}
          stars
        </p>
      </div>

      {/* SVG 图表 */}
      <svg
        width={WIDTH}
        height={HEIGHT}
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        {/* 渐变定义 */}
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
        </defs>

        {/* 网格线 */}
        {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => {
          const y = HEIGHT - CHART_MARGIN.bottom - CHART_HEIGHT * ratio
          const value = maxStars * ratio
          // Add random offset for hand-drawn effect
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
                fill="#888"
                fontSize={14}
                textAnchor="end"
                fontFamily="'Comic Neue', cursive"
              >
                {formatNumber(value)}
              </text>
            </g>
          )
        })}

        {/* 年份标记 */}
        {[
          2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023,
          2024, 2025, 2026,
        ].map((year) => {
          const yearIndex = reactStarsMonthly.findIndex(
            (d) => d.year === year && d.month === 1,
          )
          if (yearIndex === -1) return null
          const x = CHART_MARGIN.left + yearIndex * xScale
          // Add random offset for hand-drawn effect
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
                  HEIGHT - CHART_MARGIN.bottom + 35 + (Math.random() - 0.5) * 2
                }
                fill="#888"
                fontSize={16}
                textAnchor="middle"
                fontFamily="'Comic Neue', cursive"
              >
                {year}
              </text>
            </g>
          )
        })}

        {/* 填充区域 */}
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

        {/* 主线条 */}
        {visibleData.length > 1 && (
          <path
            d={generatePath()}
            fill="none"
            stroke="#ff6b6b"
            strokeWidth={5}
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

        {/* 数据点 */}
        {visibleData.map((point, i) => {
          // 使用基于索引的一致随机偏移量
          const { randomX, randomY } = getRandomOffset(i, 2)
          const x = CHART_MARGIN.left + i * xScale + randomX
          const y =
            HEIGHT - CHART_MARGIN.bottom - point.stars * yScale + randomY
          const isMilestone = milestones.some(
            (m) => m.year === point.year && m.month === point.month,
          )

          if (!isMilestone && i % 6 !== 0) return null

          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={isMilestone ? 6 : 3}
              fill={isMilestone ? "#ff6b6b" : "#ff6b6b"}
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

        {/* 里程碑标记 */}
        {milestones.map((milestone, i) => {
          const index = reactStarsMonthly.findIndex(
            (d) => d.year === milestone.year && d.month === milestone.month,
          )
          if (index === -1 || index > visibleDataCount) return null

          // 使用基于索引的一致随机偏移量（与曲线相同）
          const { randomX, randomY } = getRandomOffset(index, 2)
          const x = CHART_MARGIN.left + index * xScale + randomX
          const y =
            HEIGHT -
            CHART_MARGIN.bottom -
            reactStarsMonthly[index].stars * yScale +
            randomY

          const labelProgress = interpolate(
            frame,
            [
              durationInFrames * 0.7 + i * 5,
              durationInFrames * 0.7 + i * 5 + 15,
            ],
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
                stroke="#ff6b6b"
                strokeWidth={3}
                style={{
                  opacity: spring({
                    frame: frame - index * 0.5,
                    fps,
                    config: { damping: 100 },
                  }),
                }}
              />
              <text
                x={x + 25}
                y={y - 15}
                fill="#ff6b6b"
                fontSize={14}
                fontWeight="bold"
                fontFamily="'Comic Neue', cursive"
                style={{
                  opacity: labelProgress,
                  transform: `translateX(${labelProgress * 10}px)`,
                }}
              >
                {milestone.event}
              </text>
            </g>
          )
        })}
      </svg>

      {/* 当前数据展示 */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          right: 100,
          background: "rgba(0,0,0,0.6)",
          padding: "20px 30px",
          borderRadius: 12,
          border: "1px solid #61dafb",
          color: "white",
        }}
      >
        <div style={{ fontSize: 16, color: "#888", marginBottom: 5 }}>
          {currentDate}
        </div>
        <div
          style={{
            fontSize: 48,
            fontWeight: "bold",
            color: "#61dafb",
          }}
        >
          {formatNumber(currentStars)}
        </div>
        <div style={{ fontSize: 16, color: "#888" }}>stars</div>
      </div>

      {/* 图例 */}
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
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#61dafb",
            }}
          />
          <span style={{ fontSize: 16, fontWeight: "bold", color: "#333" }}>
            星标增长
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#ff6b6b",
            }}
          />
          <span style={{ fontSize: 16, fontWeight: "bold", color: "#333" }}>
            重要里程碑
          </span>
        </div>
      </div>
    </div>
  )
}

// 年度增长柱状图组件
const YearlyGrowthChart: React.FC = () => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const maxGrowth = Math.max(...reactStarsYearly.map((d) => d.yearlyGrowth))
  const barWidth = 80
  const gap = 40

  return (
    <div
      style={{
        width: WIDTH,
        height: HEIGHT,
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        fontFamily: "system-ui, -apple-system, sans-serif",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          fontSize: 48,
          fontWeight: "bold",
          color: "white",
          marginBottom: 60,
          background: "linear-gradient(90deg, #61dafb, #21a9c4)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Yearly Growth of React Stars
      </h1>

      <div style={{ display: "flex", alignItems: "flex-end", height: 500 }}>
        {reactStarsYearly.map((year, i) => {
          const barHeight = (year.yearlyGrowth / maxGrowth) * 400
          const delay = i * 3
          const heightProgress = spring({
            frame: frame - delay,
            fps,
            config: { damping: 100 },
          })

          return (
            <div
              key={year.year}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: `0 ${gap / 2}px`,
              }}
            >
              <div
                style={{
                  width: barWidth,
                  height: barHeight * heightProgress,
                  background: `linear-gradient(180deg, #61dafb 0%, #21a9c4 100%)`,
                  borderRadius: "4px 4px 0 0",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  paddingBottom: 10,
                }}
              >
                <span
                  style={{
                    color: "white",
                    fontSize: 14,
                    fontWeight: "bold",
                    opacity: heightProgress,
                  }}
                >
                  {formatNumber(year.yearlyGrowth)}
                </span>
              </div>
              <div
                style={{
                  marginTop: 15,
                  color: "#888",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {year.year}
              </div>
            </div>
          )
        })}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 60,
          color: "#666",
          fontSize: 18,
        }}
      >
        Stars added each year
      </div>
    </div>
  )
}

// 总结组件
const SummaryScene: React.FC = () => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const fadeIn = spring({
    frame,
    fps,
    config: { damping: 100 },
  })

  const finalStars = reactStarsMonthly[reactStarsMonthly.length - 1].stars

  return (
    <div
      style={{
        width: WIDTH,
        height: HEIGHT,
        background:
          "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        fontFamily: "system-ui, -apple-system, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <div style={{ textAlign: "center", opacity: fadeIn }}>
        <div
          style={{
            fontSize: 180,
            fontWeight: "bold",
            background: "linear-gradient(90deg, #61dafb, #21a9c4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: 20,
          }}
        >
          {formatNumber(finalStars)}
        </div>
        <div style={{ fontSize: 36, color: "#888", marginBottom: 60 }}>
          Total GitHub Stars
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 60,
            marginTop: 40,
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: 48,
                fontWeight: "bold",
                color: "#61dafb",
              }}
            >
              2013
            </div>
            <div style={{ fontSize: 18, color: "#666" }}>First Released</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: 48,
                fontWeight: "bold",
                color: "#61dafb",
              }}
            >
              13
            </div>
            <div style={{ fontSize: 18, color: "#666" }}>Years of Growth</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: 48,
                fontWeight: "bold",
                color: "#61dafb",
              }}
            >
              #1
            </div>
            <div style={{ fontSize: 18, color: "#666" }}>
              Frontend Framework
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// 主 Composition 组件
export const ReactStarsComposition: React.FC = () => {
  return (
    <>
      {/* 主增长曲线 */}
      <Composition
        id="ReactStarsGrowth"
        component={StarGrowthChart}
        durationInFrames={450}
        fps={30}
        width={1920}
        height={1080}
      />

      {/* 年度增长 */}
      <Composition
        id="ReactYearlyGrowth"
        component={YearlyGrowthChart}
        durationInFrames={120}
        fps={30}
        width={1920}
        height={1080}
      />

      {/* 总结 */}
      <Composition
        id="ReactStarsSummary"
        component={SummaryScene}
        durationInFrames={90}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  )
}
