// React GitHub Stars 历史数据 (2013-2026)
// 基于历史里程碑和增长趋势的估算数据

export interface StarDataPoint {
  date: string
  year: number
  month: number
  stars: number
  milestone?: {
    event: string
    eventDetails: string
    reference?: string
  }
}

// 月度累计 star 数据
export const reactStarsMonthly: StarDataPoint[] = [
  {
    date: "2013-05",
    year: 2013,
    month: 5,
    stars: 0,
    milestone: {
      event: "React 开源发布",
      eventDetails: "在 JSConf US 2013 上，Jordan Wa...",
    },
  },
  {
    date: "2013-06",
    year: 2013,
    month: 6,
    stars: 24,
  },
  {
    date: "2013-07",
    year: 2013,
    month: 7,
    stars: 407,
    milestone: {
      event: "React 在 JSFiddle 可用",
      eventDetails: "React 和 JSX 可以在 JSF...",
    },
  },
  {
    date: "2013-08",
    year: 2013,
    month: 8,
    stars: 820,
  },
  {
    date: "2013-09",
    year: 2013,
    month: 9,
    stars: 1251,
    milestone: {
      event: "React 获得早期关注",
      eventDetails: "David Nolen 介绍 OM（基于 React...",
    },
  },
  {
    date: "2013-10",
    year: 2013,
    month: 10,
    stars: 1684,
  },
  {
    date: "2013-11",
    year: 2013,
    month: 11,
    stars: 2145,
  },
  {
    date: "2013-12",
    year: 2013,
    month: 12,
    stars: 2606,
  },
  {
    date: "2014-01",
    year: 2014,
    month: 1,
    stars: 3094,
    milestone: {
      event: "React Developer Tools 发布",
      eventDetails: "Chrome 开发者工具扩展...",
    },
  },
  {
    date: "2014-02",
    year: 2014,
    month: 2,
    stars: 3593,
  },
  {
    date: "2014-03",
    year: 2014,
    month: 3,
    stars: 4054,
  },
  {
    date: "2014-04",
    year: 2014,
    month: 4,
    stars: 4573,
    milestone: {
      event: "React London 2014",
      eventDetails: "首次 React 伦敦大会，推动社区发展",
    },
  },
  {
    date: "2014-05",
    year: 2014,
    month: 5,
    stars: 5082,
  },
  {
    date: "2014-06",
    year: 2014,
    month: 6,
    stars: 5610,
  },
  {
    date: "2014-07",
    year: 2014,
    month: 7,
    stars: 6131,
    milestone: {
      event: "React Hot Loader 发布",
      eventDetails: "实现组件热重载，不丢失状态",
    },
  },
  {
    date: "2014-08",
    year: 2014,
    month: 8,
    stars: 6705,
  },
  {
    date: "2014-09",
    year: 2014,
    month: 9,
    stars: 7342,
  },
  {
    date: "2014-10",
    year: 2014,
    month: 10,
    stars: 8044,
  },
  {
    date: "2014-11",
    year: 2014,
    month: 11,
    stars: 8888,
  },
  {
    date: "2014-12",
    year: 2014,
    month: 12,
    stars: 9862,
  },
  {
    date: "2015-01",
    year: 2015,
    month: 1,
    stars: 11125,
    milestone: {
      event: "React Native 发布",
      eventDetails: "React.js Conf 2015 上发布 ...",
    },
  },
  {
    date: "2015-02",
    year: 2015,
    month: 2,
    stars: 12816,
  },
  {
    date: "2015-03",
    year: 2015,
    month: 3,
    stars: 14489,
    milestone: {
      event: "React Native iOS 开源",
      eventDetails: "React Native for iO...",
    },
  },
  {
    date: "2015-04",
    year: 2015,
    month: 4,
    stars: 16421,
  },
  {
    date: "2015-05",
    year: 2015,
    month: 5,
    stars: 18240,
  },
  {
    date: "2015-06",
    year: 2015,
    month: 6,
    stars: 19662,
    milestone: {
      event: "Redux 发布",
      eventDetails: "Dan Abramov 和 Andrew Clark 发布 ...",
    },
  },
  {
    date: "2015-07",
    year: 2015,
    month: 7,
    stars: 20855,
  },
  {
    date: "2015-08",
    year: 2015,
    month: 8,
    stars: 22100,
  },
  {
    date: "2015-09",
    year: 2015,
    month: 9,
    stars: 23358,
    milestone: {
      event: "React Native Android 发布",
      eventDetails: "React Native 支持...",
    },
  },
  {
    date: "2015-10",
    year: 2015,
    month: 10,
    stars: 24779,
    milestone: {
      event: "React 0.14 发布",
      eventDetails: "React 和 ReactDOM 分离，支持无状态...",
    },
  },
  {
    date: "2015-11",
    year: 2015,
    month: 11,
    stars: 26398,
  },
  {
    date: "2015-12",
    year: 2015,
    month: 12,
    stars: 27912,
  },
  {
    date: "2016-01",
    year: 2016,
    month: 1,
    stars: 29434,
  },
  {
    date: "2016-02",
    year: 2016,
    month: 2,
    stars: 30861,
  },
  {
    date: "2016-03",
    year: 2016,
    month: 3,
    stars: 32353,
  },
  {
    date: "2016-04",
    year: 2016,
    month: 4,
    stars: 34212,
    milestone: {
      event: "React 15 发布",
      eventDetails: "重大版本更新，改进 DOM 交互，删除 SVG 属性白...",
    },
  },
  {
    date: "2016-05",
    year: 2016,
    month: 5,
    stars: 35879,
  },
  {
    date: "2016-06",
    year: 2016,
    month: 6,
    stars: 37489,
  },
  {
    date: "2016-07",
    year: 2016,
    month: 7,
    stars: 38832,
  },
  {
    date: "2016-08",
    year: 2016,
    month: 8,
    stars: 41327,
  },
  {
    date: "2016-09",
    year: 2016,
    month: 9,
    stars: 46123,
    milestone: {
      event: "50,000 Stars 里程碑",
      eventDetails: "React 达到 50,000 GitHub...",
    },
  },
  {
    date: "2016-10",
    year: 2016,
    month: 10,
    stars: 50328,
  },
  {
    date: "2016-11",
    year: 2016,
    month: 11,
    stars: 53628,
  },
  {
    date: "2016-12",
    year: 2016,
    month: 12,
    stars: 56675,
  },
  {
    date: "2017-01",
    year: 2017,
    month: 1,
    stars: 59683,
  },
  {
    date: "2017-02",
    year: 2017,
    month: 2,
    stars: 62559,
  },
  {
    date: "2017-03",
    year: 2017,
    month: 3,
    stars: 65053,
  },
  {
    date: "2017-04",
    year: 2017,
    month: 4,
    stars: 67708,
    milestone: {
      event: "React Fiber 开源",
      eventDetails: "F8 2017 上开源 React Fiber，...",
    },
  },
  {
    date: "2017-05",
    year: 2017,
    month: 5,
    stars: 70183,
  },
  {
    date: "2017-06",
    year: 2017,
    month: 6,
    stars: 72653,
  },
  {
    date: "2017-07",
    year: 2017,
    month: 7,
    stars: 74970,
  },
  {
    date: "2017-08",
    year: 2017,
    month: 8,
    stars: 77299,
  },
  {
    date: "2017-09",
    year: 2017,
    month: 9,
    stars: 79573,
    milestone: {
      event: "React 16 发布",
      eventDetails: "Fiber 架构正式版，引入 Error Bounda...",
    },
  },
  {
    date: "2017-10",
    year: 2017,
    month: 10,
    stars: 81731,
  },
  {
    date: "2017-11",
    year: 2017,
    month: 11,
    stars: 83929,
  },
  {
    date: "2017-12",
    year: 2017,
    month: 12,
    stars: 86035,
  },
  {
    date: "2018-01",
    year: 2018,
    month: 1,
    stars: 88200,
  },
  {
    date: "2018-02",
    year: 2018,
    month: 2,
    stars: 90365,
  },
  {
    date: "2018-03",
    year: 2018,
    month: 3,
    stars: 92330,
    milestone: {
      event: "React 16.3 发布",
      eventDetails: "引入新的 Context API、Refs API...",
    },
  },
  {
    date: "2018-04",
    year: 2018,
    month: 4,
    stars: 94527,
  },
  {
    date: "2018-05",
    year: 2018,
    month: 5,
    stars: 96684,
  },
  {
    date: "2018-06",
    year: 2018,
    month: 6,
    stars: 98956,
    milestone: {
      event: "100,000 Stars 里程碑",
      eventDetails: "约 100,000 Stars（Vue.j...",
    },
  },
  {
    date: "2018-07",
    year: 2018,
    month: 7,
    stars: 101194,
  },
  {
    date: "2018-08",
    year: 2018,
    month: 8,
    stars: 103487,
  },
  {
    date: "2018-09",
    year: 2018,
    month: 9,
    stars: 105751,
  },
  {
    date: "2018-10",
    year: 2018,
    month: 10,
    stars: 107919,
  },
  {
    date: "2018-11",
    year: 2018,
    month: 11,
    stars: 110138,
  },
  {
    date: "2018-12",
    year: 2018,
    month: 12,
    stars: 112268,
  },
  {
    date: "2019-01",
    year: 2019,
    month: 1,
    stars: 114455,
  },
  {
    date: "2019-02",
    year: 2019,
    month: 2,
    stars: 116630,
    milestone: {
      event: "React Hooks 发布",
      eventDetails: "React 16.8 发布，引入 Hooks（u...",
    },
  },
  {
    date: "2019-03",
    year: 2019,
    month: 3,
    stars: 118587,
  },
  {
    date: "2019-04",
    year: 2019,
    month: 4,
    stars: 120749,
  },
  {
    date: "2019-05",
    year: 2019,
    month: 5,
    stars: 122839,
  },
  {
    date: "2019-06",
    year: 2019,
    month: 6,
    stars: 125000,
  },
  {
    date: "2019-07",
    year: 2019,
    month: 7,
    stars: 127034,
  },
  {
    date: "2019-08",
    year: 2019,
    month: 8,
    stars: 129034,
    milestone: {
      event: "React 16.9 发布",
      eventDetails: "引入 Concurrent Mode 实验性功能",
    },
  },
  {
    date: "2019-09",
    year: 2019,
    month: 9,
    stars: 130964,
  },
  {
    date: "2019-10",
    year: 2019,
    month: 10,
    stars: 132794,
  },
  {
    date: "2019-11",
    year: 2019,
    month: 11,
    stars: 134677,
  },
  {
    date: "2019-12",
    year: 2019,
    month: 12,
    stars: 136524,
  },
  {
    date: "2020-01",
    year: 2020,
    month: 1,
    stars: 138487,
  },
  {
    date: "2020-02",
    year: 2020,
    month: 2,
    stars: 140539,
  },
  {
    date: "2020-03",
    year: 2020,
    month: 3,
    stars: 142566,
  },
  {
    date: "2020-04",
    year: 2020,
    month: 4,
    stars: 144881,
  },
  {
    date: "2020-05",
    year: 2020,
    month: 5,
    stars: 147294,
  },
  {
    date: "2020-06",
    year: 2020,
    month: 6,
    stars: 150000,
  },
  {
    date: "2020-07",
    year: 2020,
    month: 7,
    stars: 153112,
  },
  {
    date: "2020-08",
    year: 2020,
    month: 8,
    stars: 157025,
  },
  {
    date: "2020-09",
    year: 2020,
    month: 9,
    stars: 161489,
  },
  {
    date: "2020-10",
    year: 2020,
    month: 10,
    stars: 166185,
    milestone: {
      event: "React 17 发布",
      eventDetails: "无新开发者功能，专注于渐进式升级，改进事件委托",
    },
  },
  {
    date: "2020-11",
    year: 2020,
    month: 11,
    stars: 171271,
  },
  {
    date: "2020-12",
    year: 2020,
    month: 12,
    stars: 176271,
  },
  {
    date: "2021-01",
    year: 2021,
    month: 1,
    stars: 181364,
  },
  {
    date: "2021-02",
    year: 2021,
    month: 2,
    stars: 186226,
  },
  {
    date: "2021-03",
    year: 2021,
    month: 3,
    stars: 190286,
  },
  {
    date: "2021-04",
    year: 2021,
    month: 4,
    stars: 194269,
  },
  {
    date: "2021-05",
    year: 2021,
    month: 5,
    stars: 197466,
  },
  {
    date: "2021-06",
    year: 2021,
    month: 6,
    stars: 199936,
    milestone: {
      event: "200,000 Stars 里程碑",
      eventDetails: "React 达到 200,000 GitH...",
    },
  },
  {
    date: "2021-07",
    year: 2021,
    month: 7,
    stars: 201754,
  },
  {
    date: "2021-08",
    year: 2021,
    month: 8,
    stars: 203464,
  },
  {
    date: "2021-09",
    year: 2021,
    month: 9,
    stars: 205021,
  },
  {
    date: "2021-10",
    year: 2021,
    month: 10,
    stars: 206399,
  },
  {
    date: "2021-11",
    year: 2021,
    month: 11,
    stars: 207708,
  },
  {
    date: "2021-12",
    year: 2021,
    month: 12,
    stars: 208881,
  },
  {
    date: "2022-01",
    year: 2022,
    month: 1,
    stars: 210015,
  },
  {
    date: "2022-02",
    year: 2022,
    month: 2,
    stars: 211087,
  },
  {
    date: "2022-03",
    year: 2022,
    month: 3,
    stars: 212018,
    milestone: {
      event: "React 18 发布",
      eventDetails: "引入并发特性（Concurrent Features）...",
    },
  },
  {
    date: "2022-04",
    year: 2022,
    month: 4,
    stars: 213024,
  },
  {
    date: "2022-05",
    year: 2022,
    month: 5,
    stars: 213991,
  },
  {
    date: "2022-06",
    year: 2022,
    month: 6,
    stars: 215000,
    milestone: {
      event: "React 18.2 发布",
      eventDetails: "Strict Mode 改进，实验性 Server...",
    },
  },
  {
    date: "2022-07",
    year: 2022,
    month: 7,
    stars: 215961,
  },
  {
    date: "2022-08",
    year: 2022,
    month: 8,
    stars: 216905,
  },
  {
    date: "2022-09",
    year: 2022,
    month: 9,
    stars: 217805,
  },
  {
    date: "2022-10",
    year: 2022,
    month: 10,
    stars: 218641,
  },
  {
    date: "2022-11",
    year: 2022,
    month: 11,
    stars: 219478,
  },
  {
    date: "2022-12",
    year: 2022,
    month: 12,
    stars: 220266,
  },
  {
    date: "2023-01",
    year: 2023,
    month: 1,
    stars: 221067,
  },
  {
    date: "2023-02",
    year: 2023,
    month: 2,
    stars: 221860,
  },
  {
    date: "2023-03",
    year: 2023,
    month: 3,
    stars: 222577,
    milestone: {
      event: "React 18.3 发布",
      eventDetails: "性能优化，DevTools 改进",
    },
  },
  {
    date: "2023-04",
    year: 2023,
    month: 4,
    stars: 223377,
  },
  {
    date: "2023-05",
    year: 2023,
    month: 5,
    stars: 224164,
  },
  {
    date: "2023-06",
    year: 2023,
    month: 6,
    stars: 225000,
  },
  {
    date: "2023-07",
    year: 2023,
    month: 7,
    stars: 225814,
  },
  {
    date: "2023-08",
    year: 2023,
    month: 8,
    stars: 226645,
  },
  {
    date: "2023-09",
    year: 2023,
    month: 9,
    stars: 227469,
  },
  {
    date: "2023-10",
    year: 2023,
    month: 10,
    stars: 228262,
  },
  {
    date: "2023-11",
    year: 2023,
    month: 11,
    stars: 229082,
  },
  {
    date: "2023-12",
    year: 2023,
    month: 12,
    stars: 229878,
  },
  {
    date: "2024-01",
    year: 2024,
    month: 1,
    stars: 230708,
  },
  {
    date: "2024-02",
    year: 2024,
    month: 2,
    stars: 231549,
  },
  {
    date: "2024-03",
    year: 2024,
    month: 3,
    stars: 232348,
  },
  {
    date: "2024-04",
    year: 2024,
    month: 4,
    stars: 233219,
    milestone: {
      event: "React 19 发布",
      eventDetails: "引入 React Compiler，自动优化渲染，Ac...",
    },
  },
  {
    date: "2024-05",
    year: 2024,
    month: 5,
    stars: 234083,
  },
  {
    date: "2024-06",
    year: 2024,
    month: 6,
    stars: 235000,
  },
  {
    date: "2024-07",
    year: 2024,
    month: 7,
    stars: 235894,
  },
  {
    date: "2024-08",
    year: 2024,
    month: 8,
    stars: 236818,
  },
  {
    date: "2024-09",
    year: 2024,
    month: 9,
    stars: 237760,
  },
  {
    date: "2024-10",
    year: 2024,
    month: 10,
    stars: 238706,
  },
  {
    date: "2024-11",
    year: 2024,
    month: 11,
    stars: 239738,
  },
  {
    date: "2024-12",
    year: 2024,
    month: 12,
    stars: 240806,
    milestone: {
      event: "React 19.2 发布",
      eventDetails: "编译器优化，新特性完善",
    },
  },
  {
    date: "2025-01",
    year: 2025,
    month: 1,
    stars: 242000,
  },
  {
    date: "2025-02",
    year: 2025,
    month: 2,
    stars: 243282,
    milestone: {
      event: "OpenClaw 超越 React",
      eventDetails: "OpenClaw 项目超越 React 成...",
    },
  },
  {
    date: "2025-03",
    year: 2025,
    month: 3,
    stars: 244505,
  },
  {
    date: "2025-04",
    year: 2025,
    month: 4,
    stars: 245928,
  },
  {
    date: "2025-05",
    year: 2025,
    month: 5,
    stars: 247375,
  },
  {
    date: "2025-06",
    year: 2025,
    month: 6,
    stars: 248942,
  },
  {
    date: "2025-07",
    year: 2025,
    month: 7,
    stars: 250528,
  },
  {
    date: "2025-08",
    year: 2025,
    month: 8,
    stars: 252237,
  },
  {
    date: "2025-09",
    year: 2025,
    month: 9,
    stars: 254018,
  },
  {
    date: "2025-10",
    year: 2025,
    month: 10,
    stars: 255809,
  },
  {
    date: "2025-11",
    year: 2025,
    month: 11,
    stars: 257730,
  },
  {
    date: "2025-12",
    year: 2025,
    month: 12,
    stars: 259656,
  },
  {
    date: "2026-01",
    year: 2026,
    month: 1,
    stars: 261715,
    milestone: {
      event: "React 19.2.4 发布",
      eventDetails: "最新稳定版本，持续优化",
    },
  },
  {
    date: "2026-02",
    year: 2026,
    month: 2,
    stars: 263843,
  },
  {
    date: "2026-03",
    year: 2026,
    month: 3,
    stars: 265826,
  },
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

// 重要里程碑
type IMilestone = {
  year: number
  month: number
  event: string
  eventDetails?: string
  stars: number
  reference?: string
}

export const milestones: IMilestone[] = [
  {
    year: 2013,
    month: 5,
    event: "React 开源发布：初期遭质疑JSX“倒退”",
    eventDetails:
      "Facebook在JSConf美国大会上开源React，采用组件化架构和虚拟DOM理念",
    stars: 0,
  },
  {
    year: 2015,
    month: 3,
    event: "RN (iOS) 发布：移动端革命",
    eventDetails: 'React Native 发布：移动端革命，"Learn Once, Write Anywhere"',
    reference:
      "https://swovo.com/blog/the-evolution-of-react-native/#:~:text=In%20March%202015%2C%20React%20Native%20was%20open%2Dsourced%20and%20made%20available%20on%20GitHub.",
    stars: 59200,
  },
  // 2015-06	Redux发布	状态管理标准方案诞生（Dan Abramov）
  {
    year: 2015,
    month: 6,
    event: "Redux发布",
    eventDetails: "状态管理标准方案诞生（Dan Abramov）",
    stars: 161100,
  },
  // 2015年10月 拆分React与ReactDOM 明确分层架构，引入PropTypes，支持函数组件
  {
    year: 2015,
    month: 10,
    event: "v0.14.0 拆分React与ReactDOM",
    eventDetails:
      "拆分React与ReactDOM 明确分层架构，引入PropTypes，支持函数组件",
    stars: 161100,
  },
  // 2016年4月	v15.0	首个v15版本	优化服务端渲染性能，支持Fragment，初始渲染改用document.createElement
  {
    year: 2016,
    month: 4,
    event: "v15.0",
    eventDetails:
      "优化服务端渲染性能，支持Fragment，初始渲染改用document.createElement",
    stars: 319900,
  },
  // 2016-09: ⭐ 50,000 Stars 里程碑
  {
    year: 2016,
    month: 9,
    event: "⭐️ 50,000 Stars 里程碑",
    stars: 50000,
  },

  // 2017年9月	v16.0	Fiber架构问世	异步可中断渲染，引入Error Boundaries和Portals，React核心重写
  {
    year: 2017,
    month: 9,
    event: "v16.0 Fiber架构问世，React核心重写",
    eventDetails:
      "Fiber架构问世：异步可中断渲染、错误边界、Portals，React核心重写",
    stars: 40000,
    reference:
      "https://dev.to/sirajmsm/evolution-of-react-a-version-by-version-comparison-4kgl",
  },
  // 2018年3月	v16.3	新版Context API	生命周期调整（废弃componentWill*），引入createRef和forwardRef
  {
    year: 2018,
    month: 3,
    event: "v16.3 新版 Context API、Strict Mode",
    eventDetails:
      "生命周期调整（废弃componentWillxxx），引入createRef和forwardRef",
    stars: 40000,
  },
  // 2018-06: ⭐ 100,000 Stars 里程碑
  {
    year: 2018,
    month: 6,
    event: "⭐️ 100,000 Stars 里程碑",
    stars: 10_0000,
  },

  // 2019年2月	v16.8	Hooks革命	引入useState、useEffect，函数组件获得状态管理能力，彻底改变React编程范式
  {
    year: 2019,
    month: 2,
    event: "v16.8 Hooks 革命性发布",
    eventDetails:
      "引入useState、useEffect，函数组件获得状态管理能力，彻底改变React编程范式",
    stars: 0,
  },
  // 2020年10月	v17.0	过渡版本	无新特性，事件委托重构，新JSX转换（无需import React），为并发模式铺路
  {
    year: 2020,
    month: 10,
    event: "v17.0 “无新特性”版本",
    eventDetails:
      "无新特性，事件委托重构，新JSX转换（无需import React），为并发模式铺路",
    stars: 0,
  },
  // 2021-06: ⭐ 200,000 Stars 里程碑
  {
    year: 2021,
    month: 6,
    event: "20_0000 Stars 里程碑",
    stars: 20_0000,
  },

  // 2022年3月	v18.0	并发渲染	并发模式、自动批处理、Transitions、Suspense on Server，useTransition/useDeferredValue
  {
    year: 2022,
    month: 3,
    event: "v18.0 并发渲染",
    eventDetails:
      "并发模式、自动批处理、Transitions、Suspense，useTransition/useDeferredValue",
    stars: 0,
  },
  // 2023-03 v18.2.0 Server Components实验性支持
  {
    year: 2023,
    month: 3,
    event: "v18.2.0 Server Components",
    eventDetails: "实验性支持，为未来版本提供基础",
    stars: 0,
  },
  // 2024年12月5日	v19.0	全栈演进	Actions、React编译器（React Forget）、文档元数据管理、Server Components正式版
  {
    year: 2024,
    month: 12,
    event: "v19 发布（React Compiler）",
    eventDetails:
      "Actions、React编译器（React Forget）、Server Components 正式版",
    stars: 0,
    reference: "https://react.dev/blog/2024/12/05/react-19",
  },
  // 2025年10月7日	-	React基金会成立	项目过渡到Linux基金会旗下，实现供应商中立的环境
  {
    year: 2025,
    month: 10,
    event: "React 进入 Linux Foundation",
    stars: 4542900,
  },
  // 2026年1月26日	v19.2.4	最新版本发布	截至被OpenClaw超越前的最后一个版本
  {
    year: 2026,
    month: 1,
    event: "v19.2.4 最新版本发布",
    eventDetails: "被 OpenClaw 超越前的最后一个版本",
    stars: 4677400,
  },
  // 2026年3月3日	-	被OpenClaw超越	React星标数达24.3万，被诞生仅四个月的OpenClaw（24.8万星）超越
  {
    year: 2026,
    month: 3,
    event: "被OpenClaw超越",
    eventDetails:
      "React星标数达24.3万，被诞生仅四个月的OpenClaw（25.6万星）超越",
    stars: 243_467,
  },
]
