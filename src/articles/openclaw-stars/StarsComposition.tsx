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
  starsDaily,
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

  // 使用日度数据
  const dailyData = starsDaily
  const maxStars = Math.max(...dailyData.map((d) => d.stars))
  const dataLength = dailyData.length
  const animationProgress = interpolate(
    frame,
    [0, durationInFrames * 0.85],
    [0, 1],
    {
      extrapolateRight: "clamp",
    },
  )

  const visibleDataCount = Math.floor(animationProgress * dataLength)
  const visibleData = dailyData.slice(0, visibleDataCount + 1)

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
      : "2025-11-24"

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
          OpenClaw GitHub Stars ⭐ Growth (2025.11 —— 2026.03)
        </h1>
        <p
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "#333",
            margin: "10px 0 0 0",
            fontFamily: "'Comic Neue', cursive",
            textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
          }}
        >
          From 0 to {formatNumber(dailyData[dailyData.length - 1].stars)} stars
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
                fill="#333"
                fontSize={16}
                fontWeight="bold"
                textAnchor="end"
                fontFamily="'Comic Neue', cursive"
              >
                {formatNumber(value)}
              </text>
            </g>
          )
        })}

        {/* 年份标记 - 日度数据按月份显示 */}
        {[2025, 2026].map((year) => {
          // 找到每年1月1日的索引
          const firstDayOfYear = `${year}-01-01`
          const yearIndex = dailyData.findIndex((d) => d.date >= firstDayOfYear)
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
                  HEIGHT -
                  CHART_MARGIN.bottom +
                  35 +
                  (Math.random() - 0.5) * 2 +
                  20
                }
                fill="#333"
                fontSize={28}
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
        {dailyData
          .map((d, i) => ({ date: d.date, index: i }))
          .filter((_, i) => i % 7 === 0) // 每5天显示一个刻度
          .map(({ date, index }) => {
            const x = CHART_MARGIN.left + index * xScale
            const label = date.slice(5) // 显示 MM-DD 格式
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
          // 检查是否里程碑日期
          const isMilestone = milestones.some((m) => {
            const milestoneDate = `${m.year}-${String(m.month).padStart(2, "0")}-01`
            return (
              point.date === milestoneDate ||
              point.date.startsWith(
                `${m.year}-${String(m.month).padStart(2, "0")}-`,
              )
            )
          })

          if (!isMilestone && i % 7 !== 0) {
            return null
          }

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

        {/* 里程碑标记 */}
        {milestones.map((milestone, i) => {
          // 日度数据中查找对应日期的索引
          const index = dailyData.findIndex(
            (d) =>
              d.date ===
              `${milestone.year}-${String(milestone.month).padStart(2, "0")}-01`,
          )
          if (index === -1 || index > visibleDataCount) return null

          // 使用基于索引的一致随机偏移量（与曲线相同）
          const { randomX, randomY } = getRandomOffset(index, 2)
          const x = CHART_MARGIN.left + index * xScale + randomX
          const y =
            HEIGHT -
            CHART_MARGIN.bottom -
            dailyData[index].stars * yScale +
            randomY

          // 里程碑随着曲线绘制逐个出现
          // 计算该里程碑应该出现的时间点（基于数据点索引）
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
                x={x + 25}
                y={y - 15}
                fill="rgb(51, 51, 51)"
                fontSize={20}
                fontWeight="bold"
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

        {/* 曲线顶端的 🦞 - 跟随曲线顶点移动 */}
        {visibleData.length > 0 &&
          (() => {
            // 使用当前动画位置的数据点，让🦞跟随曲线移动
            const lastIndex = visibleData.length - 1
            const lastPoint = visibleData[lastIndex]
            if (!lastPoint) return null
            const { randomX, randomY } = getRandomOffset(lastIndex, 2)
            const x = CHART_MARGIN.left + lastIndex * xScale + randomX
            const y =
              HEIGHT - CHART_MARGIN.bottom - lastPoint.stars * yScale + randomY

            return (
              <text x={x} y={y - 15} fontSize={28} textAnchor="middle">
                🦞
              </text>
            )
          })()}
      </svg>

      {/* 当前数据展示 */}
      <div
        style={{
          position: "absolute",
          bottom: 700,
          right: 872,
          background: "rgba(0,0,0,0.6)",
          padding: "20px 30px",
          borderRadius: 12,
          border: "1px solid #61dafb",
          color: "white",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#eee",
            marginBottom: 5,
            fontWeight: "bold",
          }}
        >
          🗓️ {currentDate}
        </div>
        <span
          style={{
            fontSize: 48,
            fontWeight: "bold",
            color: "#61dafb",
          }}
        >
          {currentStars}

          <span
            className="text-2xl ms-2"
            style={{ color: "#eee", fontWeight: "bold" }}
          >
            stars
          </span>
        </span>
      </div>

      {/* 图例 */}
      {/* <div
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
      </div> */}
    </div>
  )
}

// 主 Composition 组件
export const StarsComposition: React.FC = () => {
  const repoName = "OpenClaw"
  return (
    <>
      {/* 主增长曲线 */}
      <Composition
        id={`${repoName}StarsGrowth`}
        component={StarGrowthChart}
        durationInFrames={450}
        fps={30}
        width={1920}
        height={1080}
      />

      {/* 年度增长 */}
      {/* <Composition
        id={`${repoName}YearlyGrowth`}
        component={YearlyGrowthChart}
        durationInFrames={120}
        fps={30}
        width={1920}
        height={1080}
      /> */}
    </>
  )
}
