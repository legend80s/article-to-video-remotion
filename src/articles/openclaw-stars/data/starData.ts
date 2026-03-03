// React GitHub Stars 历史数据 (2013-2026)
// 基于历史里程碑和增长趋势的估算数据

export interface StarDataPoint {
  date: string
  year: number
  month: number
  stars: number
  monthlyGrowth: number
}

// 月度累计 star 数据
export const reactStarsMonthly: StarDataPoint[] = [
  { date: "2025-11", year: 2025, month: 11, stars: 231, monthlyGrowth: 231 },
  { date: "2025-12", year: 2025, month: 12, stars: 907, monthlyGrowth: 676 },
  { date: "2026-01", year: 2026, month: 1, stars: 63500, monthlyGrowth: 62593 },
]

// 日度累计 star 数据
export interface DailyStarData {
  date: string
  stars: number
  dailyGrowth: number
}

export const starsDaily: DailyStarData[] = [
  { date: "2025-11-24", stars: 2, dailyGrowth: 2 },
  { date: "2025-11-25", stars: 28, dailyGrowth: 26 },
  { date: "2025-11-26", stars: 48, dailyGrowth: 20 },
  { date: "2025-11-27", stars: 72, dailyGrowth: 24 },
  { date: "2025-11-28", stars: 194, dailyGrowth: 122 },
  { date: "2025-11-29", stars: 222, dailyGrowth: 28 },
  { date: "2025-11-30", stars: 231, dailyGrowth: 9 },
  { date: "2025-12-01", stars: 243, dailyGrowth: 12 },
  { date: "2025-12-02", stars: 250, dailyGrowth: 7 },
  { date: "2025-12-03", stars: 258, dailyGrowth: 8 },
  { date: "2025-12-04", stars: 270, dailyGrowth: 12 },
  { date: "2025-12-05", stars: 276, dailyGrowth: 6 },
  { date: "2025-12-06", stars: 282, dailyGrowth: 6 },
  { date: "2025-12-07", stars: 289, dailyGrowth: 7 },
  { date: "2025-12-08", stars: 292, dailyGrowth: 3 },
  { date: "2025-12-09", stars: 297, dailyGrowth: 5 },
  { date: "2025-12-10", stars: 304, dailyGrowth: 7 },
  { date: "2025-12-11", stars: 307, dailyGrowth: 3 },
  { date: "2025-12-12", stars: 309, dailyGrowth: 2 },
  { date: "2025-12-13", stars: 329, dailyGrowth: 20 },
  { date: "2025-12-14", stars: 336, dailyGrowth: 7 },
  { date: "2025-12-15", stars: 345, dailyGrowth: 9 },
  { date: "2025-12-16", stars: 369, dailyGrowth: 24 },
  { date: "2025-12-17", stars: 375, dailyGrowth: 6 },
  { date: "2025-12-18", stars: 385, dailyGrowth: 10 },
  { date: "2025-12-19", stars: 392, dailyGrowth: 7 },
  { date: "2025-12-20", stars: 400, dailyGrowth: 8 },
  { date: "2025-12-21", stars: 409, dailyGrowth: 9 },
  { date: "2025-12-22", stars: 436, dailyGrowth: 27 },
  { date: "2025-12-23", stars: 446, dailyGrowth: 10 },
  { date: "2025-12-24", stars: 450, dailyGrowth: 4 },
  { date: "2025-12-25", stars: 479, dailyGrowth: 29 },
  { date: "2025-12-26", stars: 519, dailyGrowth: 40 },
  { date: "2025-12-27", stars: 578, dailyGrowth: 59 },
  { date: "2025-12-28", stars: 647, dailyGrowth: 69 },
  { date: "2025-12-29", stars: 699, dailyGrowth: 52 },
  { date: "2025-12-30", stars: 775, dailyGrowth: 76 },
  { date: "2025-12-31", stars: 907, dailyGrowth: 132 },
  { date: "2026-01-01", stars: 985, dailyGrowth: 78 },
  { date: "2026-01-02", stars: 1147, dailyGrowth: 162 },
  { date: "2026-01-03", stars: 1211, dailyGrowth: 64 },
  { date: "2026-01-04", stars: 1337, dailyGrowth: 126 },
  { date: "2026-01-05", stars: 1690, dailyGrowth: 353 },
  { date: "2026-01-06", stars: 2044, dailyGrowth: 354 },
  { date: "2026-01-07", stars: 2314, dailyGrowth: 270 },
  { date: "2026-01-08", stars: 2447, dailyGrowth: 133 },
  { date: "2026-01-09", stars: 2626, dailyGrowth: 179 },
  { date: "2026-01-10", stars: 2850, dailyGrowth: 224 },
  { date: "2026-01-11", stars: 3116, dailyGrowth: 266 },
  { date: "2026-01-12", stars: 3366, dailyGrowth: 250 },
  { date: "2026-01-13", stars: 3739, dailyGrowth: 373 },
  { date: "2026-01-14", stars: 3985, dailyGrowth: 246 },
  { date: "2026-01-15", stars: 4175, dailyGrowth: 190 },
  { date: "2026-01-16", stars: 4414, dailyGrowth: 239 },
  { date: "2026-01-17", stars: 4608, dailyGrowth: 194 },
  { date: "2026-01-18", stars: 4823, dailyGrowth: 215 },
  { date: "2026-01-19", stars: 5058, dailyGrowth: 235 },
  { date: "2026-01-20", stars: 5212, dailyGrowth: 154 },
  { date: "2026-01-21", stars: 5480, dailyGrowth: 268 },
  { date: "2026-01-22", stars: 5862, dailyGrowth: 382 },
  { date: "2026-01-23", stars: 6368, dailyGrowth: 506 },
  { date: "2026-01-24", stars: 7422, dailyGrowth: 1054 },
  { date: "2026-01-25", stars: 14690, dailyGrowth: 7268 },
  { date: "2026-01-26", stars: 38560, dailyGrowth: 23870 },
  { date: "2026-01-27", stars: 63500, dailyGrowth: 24940 },
  { date: "2026-03-2", stars: 244_473, dailyGrowth: -1 },
]

// 季度统计
export interface QuarterData {
  year: number
  quarter: number
  stars: number
  growth: number
}

export const reactStarsQuarterly: QuarterData[] = [
  { year: 2013, quarter: 2, stars: 14700, growth: 14700 },
  { year: 2013, quarter: 3, stars: 14700, growth: 0 },
  { year: 2013, quarter: 4, stars: 14700, growth: 0 },
  { year: 2014, quarter: 1, stars: 23400, growth: 8700 },
  { year: 2014, quarter: 2, stars: 33000, growth: 9600 },
  { year: 2014, quarter: 3, stars: 43500, growth: 10500 },
  { year: 2014, quarter: 4, stars: 54900, growth: 11400 },
  { year: 2015, quarter: 1, stars: 68700, growth: 13800 },
  { year: 2015, quarter: 2, stars: 85200, growth: 16500 },
  { year: 2015, quarter: 3, stars: 104400, growth: 19200 },
  { year: 2015, quarter: 4, stars: 126300, growth: 21900 },
  { year: 2016, quarter: 1, stars: 151800, growth: 25500 },
  { year: 2016, quarter: 2, stars: 180900, growth: 29100 },
  { year: 2016, quarter: 3, stars: 213600, growth: 32700 },
  { year: 2016, quarter: 4, stars: 249900, growth: 36300 },
  { year: 2017, quarter: 1, stars: 290400, growth: 40500 },
  { year: 2017, quarter: 2, stars: 335400, growth: 45000 },
  { year: 2017, quarter: 3, stars: 384900, growth: 49500 },
  { year: 2017, quarter: 4, stars: 438900, growth: 54000 },
  { year: 2018, quarter: 1, stars: 497400, growth: 58500 },
  { year: 2018, quarter: 2, stars: 560400, growth: 63000 },
  { year: 2018, quarter: 3, stars: 627900, growth: 67500 },
  { year: 2018, quarter: 4, stars: 699900, growth: 72000 },
  { year: 2019, quarter: 1, stars: 776400, growth: 76500 },
  { year: 2019, quarter: 2, stars: 857400, growth: 81000 },
  { year: 2019, quarter: 3, stars: 942900, growth: 85500 },
  { year: 2019, quarter: 4, stars: 1032900, growth: 90000 },
  { year: 2020, quarter: 1, stars: 1127400, growth: 94500 },
  { year: 2020, quarter: 2, stars: 1226400, growth: 99000 },
  { year: 2020, quarter: 3, stars: 1329900, growth: 103500 },
  { year: 2020, quarter: 4, stars: 1437900, growth: 108000 },
  { year: 2021, quarter: 1, stars: 1550400, growth: 112500 },
  { year: 2021, quarter: 2, stars: 1667400, growth: 117000 },
  { year: 2021, quarter: 3, stars: 1788900, growth: 121500 },
  { year: 2021, quarter: 4, stars: 1914900, growth: 126000 },
  { year: 2022, quarter: 1, stars: 2045400, growth: 130500 },
  { year: 2022, quarter: 2, stars: 2180400, growth: 135000 },
  { year: 2022, quarter: 3, stars: 2319900, growth: 139500 },
  { year: 2022, quarter: 4, stars: 2463900, growth: 144000 },
  { year: 2023, quarter: 1, stars: 2612400, growth: 148500 },
  { year: 2023, quarter: 2, stars: 2765400, growth: 153000 },
  { year: 2023, quarter: 3, stars: 2922900, growth: 157500 },
  { year: 2023, quarter: 4, stars: 3084900, growth: 162000 },
  { year: 2024, quarter: 1, stars: 3251400, growth: 166500 },
  { year: 2024, quarter: 2, stars: 3422400, growth: 171000 },
  { year: 2024, quarter: 3, stars: 3597900, growth: 175500 },
  { year: 2024, quarter: 4, stars: 3777900, growth: 180000 },
  { year: 2025, quarter: 1, stars: 3962400, growth: 184500 },
  { year: 2025, quarter: 2, stars: 4151400, growth: 189000 },
  { year: 2025, quarter: 3, stars: 4344900, growth: 193500 },
  { year: 2025, quarter: 4, stars: 4542900, growth: 198000 },
  { year: 2026, quarter: 1, stars: 4677400, growth: 134500 },
]

// 年度统计
export interface YearData {
  year: number
  stars: number
  yearlyGrowth: number
}

export const reactStarsYearly: YearData[] = [
  { year: 2013, stars: 14700, yearlyGrowth: 14700 },
  { year: 2014, stars: 54900, yearlyGrowth: 40200 },
  { year: 2015, stars: 126300, yearlyGrowth: 71400 },
  { year: 2016, stars: 249900, yearlyGrowth: 123600 },
  { year: 2017, stars: 438900, yearlyGrowth: 189000 },
  { year: 2018, stars: 699900, yearlyGrowth: 261000 },
  { year: 2019, stars: 1032900, yearlyGrowth: 333000 },
  { year: 2020, stars: 1437900, yearlyGrowth: 405000 },
  { year: 2021, stars: 1914900, yearlyGrowth: 477000 },
  { year: 2022, stars: 2463900, yearlyGrowth: 549000 },
  { year: 2023, stars: 3084900, yearlyGrowth: 621000 },
  { year: 2024, stars: 3777900, yearlyGrowth: 693000 },
  { year: 2025, stars: 4542900, yearlyGrowth: 765000 },
  { year: 2026, stars: 4677400, yearlyGrowth: 134500 },
]

interface IMilestone {
  year: number
  month: number
  day: number
  event: string
  eventDetails?: string
  // stars: number
  // 当天增长的 stars
  incrementedStars?: number
}

// 重要里程碑
export const milestones: IMilestone[] = [
  {
    year: 2025,
    month: 11,
    day: 24,
    event: "Clawdbot 首次开源",
    eventDetails:
      "项目最初名为 Clawdbot（也曾叫 Clawd），由奥地利开发者 Peter Steinberger 开源",

    incrementedStars: 2,
  },
  // 2025年12月3日	项目爆火	24小时内获得 9,000+ GitHub Stars
  {
    year: 2025,
    month: 12,
    day: 3,
    event: "项目爆火 24 ＋9,000+ Stars",
    eventDetails: "项目爆火 24 小时内获得 9,000+ GitHub Stars",
    incrementedStars: 9000,
  },
  // 2026年1月23日	安全漏洞曝光	安全研究人员发现 1000+ 网关暴露，数百个实例存在未授权访问漏洞
  {
    year: 2026,
    month: 1,
    day: 23,
    event: "安全漏洞曝光",
    eventDetails:
      "安全研究人员发现 1000+ 网关暴露，数百个实例存在未授权访问漏洞",
  },
  // 2026年1月25日	官方发布安全补丁	修复网关未授权访问漏洞
  {
    year: 2026,
    month: 1,
    day: 25,
    event: "官方发布安全补丁",
    eventDetails: "修复网关未授权访问漏洞",
    incrementedStars: 0,
  },
  // 2026年1月27日	更名为 Moltbot	因 Anthropic 商标通知（Clawd 与 Claude 谐音），项目更名为 Moltbot；同日发生原账号被抢注事件
  {
    year: 2026,
    month: 1,
    day: 27,
    event: "更名为 Moltbot & 同日发生原账号被抢注事件",
    eventDetails:
      "更名为 Moltbot：因 Anthropic 商标通知（Clawd 与 Claude 谐音），项目更名为 Moltbot；同日发生原账号被抢注事件",
  },
  {
    year: 2026,
    month: 1,
    day: 28,
    event: "加密货币诈骗事件",
    eventDetails:
      "更名时原 Twitter/X 账号 @clawdbot 被抢注，诈骗者发行虚假代币 $CLAWD，市值一度达 1600 万美元后崩盘",
  },
  {
    year: 2026,
    month: 1,
    day: 27,
    event: "ClawdBot 更名为 OpenClaw",
    eventDetails: "项目最终定名为 OpenClaw（曾用名包括 Clawdbot、Moltbot）",
  },
  {
    year: 2026,
    month: 2,
    day: 1,
    event: "突破 14.5 万星",
    eventDetails: "成为 GitHub 史上增长最快的开源项目之一",
  },
  {
    year: 2026,
    month: 2,
    day: 10,
    event: "首次 AI 报复人类事件",
    eventDetails:
      "OpenClaw 智能体 'MJ Rathbun' 因代码合并请求被拒，撰写攻击文章报复开源维护者",
  },
  {
    year: 2026,
    month: 2,
    day: 16,
    event: "创始人加入 OpenAI",
    eventDetails: "Peter Steinberger 宣布加入 OpenAI，负责下一代个人智能体",
  },
  {
    year: 2026,
    month: 2,
    day: 17,
    event: "Cline CLI 供应链攻击",
    eventDetails: "攻击者利用提示词注入漏洞发布恶意版本，强制安装 OpenClaw",
  },
]
