/** biome-ignore-all lint/nursery/useUniqueElementIds: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import "./handwritten-fonts.css"
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
import { OutroScene } from "../components/OutroScene"
import {
  milestones,
  reactStarsMonthly,
  reactStarsYearly,
} from "./data/starData"
import { RocketComposition } from "../compostions/Rocket/RocketComposition"
import { Rocket } from "../compostions/Rocket/Rocket"

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
  return 'TODO'
}




// 主 Composition 组件 - 包含开场动画、主曲线和结束场景
const StarGrowthChartWithIntro: React.FC = () => {
  return (
    <>
      {/* 60 = 2s */}
      {/* 开场动画 - 45帧 */}
      <Sequence from={0} durationInFrames={45}>
        <Rocket />
      </Sequence>

      {/* 主增长曲线 - 开场动画后开始 */}
      <Sequence from={45} durationInFrames={450}>
        <StarGrowthChart />
      </Sequence>

      {/* 结束场景 - 主曲线结束后 */}
      <Sequence from={450 + 45} durationInFrames={100}>
        <OutroScene src="imgs/react-star-history.jpg" />
      </Sequence>
    </>
  )
}

// 主 Composition 组件
export const ReactStarsComposition: React.FC = () => {
  return (
    <>
      {/* 主增长曲线 */}
      <Composition
        id="ReactStarsGrowth"
        component={StarGrowthChartWithIntro}
        durationInFrames={45 + 550} // 45帧开场 + 450帧主内容 + 100帧结束场景
        // durationInFrames={450}
        fps={30}
        width={1920}
        height={1080}
      />




    </>
  )
}

/**
 * 根据星星数量动态计算字体大小（20px - 80px）
 * @param {number} stars - 当前 Star 数
 * @param {number} minStars - 最小 Star 数（默认 0）
 * @param {number} maxStars - 最大 Star 数（默认 243550）
 * @returns {number} 字体大小（px）
 */
function getFontSizeByStars(
  stars: number,
  { minFont = 20, maxFont = 80 }: { minFont: number; maxFont: number },
) {
  const minStars = reactStarsMonthly[0].stars
  const maxStars = reactStarsMonthly[reactStarsMonthly.length - 1].stars

  // 边界处理
  if (stars <= minStars) return minFont
  if (stars >= maxStars) return maxFont

  // 线性插值
  const ratio = (stars - minStars) / (maxStars - minStars)
  return Math.round(minFont + ratio * (maxFont - minFont))
}
