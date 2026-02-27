import React from "react";
import {
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
  Composition,
} from "remotion";
import {
  reactStarsMonthly,
  reactStarsYearly,
  milestones,
} from "./data/starData";

const WIDTH = 1920;
const HEIGHT = 1080;
const CHART_HEIGHT = 600;
const CHART_WIDTH = 1600;
const CHART_MARGIN = { top: 100, right: 100, bottom: 150, left: 150 };

// 格式化数字
const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(0)}K`;
  }
  return num.toString();
};

// 主图表组件
const StarGrowthChart: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const maxStars = Math.max(...reactStarsMonthly.map((d) => d.stars));
  const dataLength = reactStarsMonthly.length;
  const animationProgress = interpolate(
    frame,
    [0, durationInFrames * 0.85],
    [0, 1],
    {
      extrapolateRight: "clamp",
    },
  );

  const visibleDataCount = Math.floor(animationProgress * dataLength);
  const visibleData = reactStarsMonthly.slice(0, visibleDataCount + 1);

  const xScale = CHART_WIDTH / (dataLength - 1);
  const yScale = CHART_HEIGHT / maxStars;

  // 生成路径
  const generatePath = () => {
    if (visibleData.length < 2) return "";
    return visibleData
      .map((point, i) => {
        const x = CHART_MARGIN.left + i * xScale;
        const y = HEIGHT - CHART_MARGIN.bottom - point.stars * yScale;
        return `${i === 0 ? "M" : "L"} ${x} ${y}`;
      })
      .join(" ");
  };

  // 生成填充区域路径
  const generateAreaPath = () => {
    if (visibleData.length < 2) return "";
    const linePath = visibleData
      .map((point, i) => {
        const x = CHART_MARGIN.left + i * xScale;
        const y = HEIGHT - CHART_MARGIN.bottom - point.stars * yScale;
        return `${i === 0 ? "M" : "L"} ${x} ${y}`;
      })
      .join(" ");

    const lastX = CHART_MARGIN.left + (visibleData.length - 1) * xScale;
    const bottomY = HEIGHT - CHART_MARGIN.bottom;
    const firstX = CHART_MARGIN.left;

    return `${linePath} L ${lastX} ${bottomY} L ${firstX} ${bottomY} Z`;
  };

  // 当前显示的 star 数
  const currentStars =
    visibleData.length > 0 ? visibleData[visibleData.length - 1].stars : 0;
  const currentDate =
    visibleData.length > 0
      ? visibleData[visibleData.length - 1].date
      : "2013-05";

  return (
    <div
      style={{
        width: WIDTH,
        height: HEIGHT,
        background:
          "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        fontFamily: "system-ui, -apple-system, sans-serif",
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
          color: "white",
        }}
      >
        <h1
          style={{
            fontSize: 48,
            fontWeight: "bold",
            margin: 0,
            background: "linear-gradient(90deg, #61dafb, #21a9c4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          React GitHub Stars Growth (2013-2026)
        </h1>
        <p style={{ fontSize: 20, color: "#888", margin: "10px 0 0 0" }}>
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
            <stop offset="0%" stopColor="#61dafb" stopOpacity={0.4} />
            <stop offset="100%" stopColor="#61dafb" stopOpacity={0.05} />
          </linearGradient>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#61dafb" />
            <stop offset="100%" stopColor="#21a9c4" />
          </linearGradient>
        </defs>

        {/* 网格线 */}
        {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => {
          const y = HEIGHT - CHART_MARGIN.bottom - CHART_HEIGHT * ratio;
          const value = maxStars * ratio;
          return (
            <g key={i}>
              <line
                x1={CHART_MARGIN.left}
                y1={y}
                x2={WIDTH - CHART_MARGIN.right}
                y2={y}
                stroke="#333"
                strokeWidth={1}
                strokeDasharray="5,5"
              />
              <text
                x={CHART_MARGIN.left - 20}
                y={y + 5}
                fill="#666"
                fontSize={14}
                textAnchor="end"
              >
                {formatNumber(value)}
              </text>
            </g>
          );
        })}

        {/* 年份标记 */}
        {[
          2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023,
          2024, 2025, 2026,
        ].map((year) => {
          const yearIndex = reactStarsMonthly.findIndex(
            (d) => d.year === year && d.month === 1,
          );
          if (yearIndex === -1) return null;
          const x = CHART_MARGIN.left + yearIndex * xScale;
          return (
            <g key={year}>
              <line
                x1={x}
                y1={HEIGHT - CHART_MARGIN.bottom}
                x2={x}
                y2={HEIGHT - CHART_MARGIN.bottom + 10}
                stroke="#666"
                strokeWidth={1}
              />
              <text
                x={x}
                y={HEIGHT - CHART_MARGIN.bottom + 35}
                fill="#888"
                fontSize={16}
                textAnchor="middle"
              >
                {year}
              </text>
            </g>
          );
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
            stroke="url(#lineGradient)"
            strokeWidth={4}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}

        {/* 数据点 */}
        {visibleData.map((point, i) => {
          const x = CHART_MARGIN.left + i * xScale;
          const y = HEIGHT - CHART_MARGIN.bottom - point.stars * yScale;
          const isMilestone = milestones.some(
            (m) => m.year === point.year && m.month === point.month,
          );

          if (!isMilestone && i % 6 !== 0) return null;

          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={isMilestone ? 8 : 4}
              fill={isMilestone ? "#ff6b6b" : "#61dafb"}
              stroke="white"
              strokeWidth={2}
              style={{
                opacity: spring({
                  frame: frame - i * 0.5,
                  fps,
                  config: { damping: 100 },
                }),
              }}
            />
          );
        })}

        {/* 里程碑标记 */}
        {milestones.map((milestone, i) => {
          const index = reactStarsMonthly.findIndex(
            (d) => d.year === milestone.year && d.month === milestone.month,
          );
          if (index === -1 || index > visibleDataCount) return null;

          const x = CHART_MARGIN.left + index * xScale;
          const y = HEIGHT - CHART_MARGIN.bottom - milestone.stars * yScale;

          const labelProgress = interpolate(
            frame,
            [
              durationInFrames * 0.7 + i * 5,
              durationInFrames * 0.7 + i * 5 + 15,
            ],
            [0, 1],
            { extrapolateRight: "clamp" },
          );

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
                  opacity: labelProgress,
                  transform: `scale(${labelProgress})`,
                  transformOrigin: `${x}px ${y}px`,
                }}
              />
              <text
                x={x}
                y={y - 25}
                fill="#ff6b6b"
                fontSize={14}
                fontWeight="bold"
                textAnchor="middle"
                style={{ opacity: labelProgress }}
              >
                {milestone.event}
              </text>
            </g>
          );
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
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#61dafb",
            }}
          />
          <span>Stars Growth</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#ff6b6b",
            }}
          />
          <span>Major Milestones</span>
        </div>
      </div>
    </div>
  );
};

// 年度增长柱状图组件
const YearlyGrowthChart: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const maxGrowth = Math.max(...reactStarsYearly.map((d) => d.yearlyGrowth));
  const barWidth = 80;
  const gap = 40;

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
          const barHeight = (year.yearlyGrowth / maxGrowth) * 400;
          const delay = i * 3;
          const heightProgress = spring({
            frame: frame - delay,
            fps,
            config: { damping: 100 },
          });

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
          );
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
  );
};

// 总结组件
const SummaryScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const fadeIn = spring({
    frame,
    fps,
    config: { damping: 100 },
  });

  const finalStars = reactStarsMonthly[reactStarsMonthly.length - 1].stars;

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
  );
};

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
  );
};
