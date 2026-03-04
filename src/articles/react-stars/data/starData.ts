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
  // 2013年 - React 诞生
  { date: "2013-05", year: 2013, month: 5, stars: 0, monthlyGrowth: 0 },
  { date: "2013-06", year: 2013, month: 6, stars: 1500, monthlyGrowth: 1500 },
  { date: "2013-07", year: 2013, month: 7, stars: 3200, monthlyGrowth: 1700 },
  { date: "2013-08", year: 2013, month: 8, stars: 5100, monthlyGrowth: 1900 },
  { date: "2013-09", year: 2013, month: 9, stars: 7200, monthlyGrowth: 2100 },
  { date: "2013-10", year: 2013, month: 10, stars: 9500, monthlyGrowth: 2300 },
  { date: "2013-11", year: 2013, month: 11, stars: 12000, monthlyGrowth: 2500 },
  { date: "2013-12", year: 2013, month: 12, stars: 14700, monthlyGrowth: 2700 },

  // 2014年 - 稳定增长
  { date: "2014-01", year: 2014, month: 1, stars: 17500, monthlyGrowth: 2800 },
  { date: "2014-02", year: 2014, month: 2, stars: 20400, monthlyGrowth: 2900 },
  { date: "2014-03", year: 2014, month: 3, stars: 23400, monthlyGrowth: 3000 },
  { date: "2014-04", year: 2014, month: 4, stars: 26500, monthlyGrowth: 3100 },
  { date: "2014-05", year: 2014, month: 5, stars: 29700, monthlyGrowth: 3200 },
  { date: "2014-06", year: 2014, month: 6, stars: 33000, monthlyGrowth: 3300 },
  { date: "2014-07", year: 2014, month: 7, stars: 36400, monthlyGrowth: 3400 },
  { date: "2014-08", year: 2014, month: 8, stars: 39900, monthlyGrowth: 3500 },
  { date: "2014-09", year: 2014, month: 9, stars: 43500, monthlyGrowth: 3600 },
  { date: "2014-10", year: 2014, month: 10, stars: 47200, monthlyGrowth: 3700 },
  { date: "2014-11", year: 2014, month: 11, stars: 51000, monthlyGrowth: 3800 },
  { date: "2014-12", year: 2014, month: 12, stars: 54900, monthlyGrowth: 3900 },

  // 2015年 - React Native 发布，开始爆发
  { date: "2015-01", year: 2015, month: 1, stars: 59200, monthlyGrowth: 4300 },
  { date: "2015-02", year: 2015, month: 2, stars: 63800, monthlyGrowth: 4600 },
  { date: "2015-03", year: 2015, month: 3, stars: 68700, monthlyGrowth: 4900 },
  { date: "2015-04", year: 2015, month: 4, stars: 73900, monthlyGrowth: 5200 },
  { date: "2015-05", year: 2015, month: 5, stars: 79400, monthlyGrowth: 5500 },
  { date: "2015-06", year: 2015, month: 6, stars: 85200, monthlyGrowth: 5800 },
  { date: "2015-07", year: 2015, month: 7, stars: 91300, monthlyGrowth: 6100 },
  { date: "2015-08", year: 2015, month: 8, stars: 97700, monthlyGrowth: 6400 },
  { date: "2015-09", year: 2015, month: 9, stars: 104400, monthlyGrowth: 6700 },
  {
    date: "2015-10",
    year: 2015,
    month: 10,
    stars: 111400,
    monthlyGrowth: 7000,
  },
  {
    date: "2015-11",
    year: 2015,
    month: 11,
    stars: 118700,
    monthlyGrowth: 7300,
  },
  {
    date: "2015-12",
    year: 2015,
    month: 12,
    stars: 126300,
    monthlyGrowth: 7600,
  },

  // 2016年 - 高速增长期
  { date: "2016-01", year: 2016, month: 1, stars: 134400, monthlyGrowth: 8100 },
  { date: "2016-02", year: 2016, month: 2, stars: 142900, monthlyGrowth: 8500 },
  { date: "2016-03", year: 2016, month: 3, stars: 151800, monthlyGrowth: 8900 },
  { date: "2016-04", year: 2016, month: 4, stars: 161100, monthlyGrowth: 9300 },
  { date: "2016-05", year: 2016, month: 5, stars: 170800, monthlyGrowth: 9700 },
  {
    date: "2016-06",
    year: 2016,
    month: 6,
    stars: 180900,
    monthlyGrowth: 10100,
  },
  {
    date: "2016-07",
    year: 2016,
    month: 7,
    stars: 191400,
    monthlyGrowth: 10500,
  },
  {
    date: "2016-08",
    year: 2016,
    month: 8,
    stars: 202300,
    monthlyGrowth: 10900,
  },
  {
    date: "2016-09",
    year: 2016,
    month: 9,
    stars: 213600,
    monthlyGrowth: 11300,
  },
  {
    date: "2016-10",
    year: 2016,
    month: 10,
    stars: 225300,
    monthlyGrowth: 11700,
  },
  {
    date: "2016-11",
    year: 2016,
    month: 11,
    stars: 237400,
    monthlyGrowth: 12100,
  },
  {
    date: "2016-12",
    year: 2016,
    month: 12,
    stars: 249900,
    monthlyGrowth: 12500,
  },

  // 2017年 - Create React App 发布
  {
    date: "2017-01",
    year: 2017,
    month: 1,
    stars: 262900,
    monthlyGrowth: 13000,
  },
  {
    date: "2017-02",
    year: 2017,
    month: 2,
    stars: 276400,
    monthlyGrowth: 13500,
  },
  {
    date: "2017-03",
    year: 2017,
    month: 3,
    stars: 290400,
    monthlyGrowth: 14000,
  },
  {
    date: "2017-04",
    year: 2017,
    month: 4,
    stars: 304900,
    monthlyGrowth: 14500,
  },
  {
    date: "2017-05",
    year: 2017,
    month: 5,
    stars: 319900,
    monthlyGrowth: 15000,
  },
  {
    date: "2017-06",
    year: 2017,
    month: 6,
    stars: 335400,
    monthlyGrowth: 15500,
  },
  {
    date: "2017-07",
    year: 2017,
    month: 7,
    stars: 351400,
    monthlyGrowth: 16000,
  },
  {
    date: "2017-08",
    year: 2017,
    month: 8,
    stars: 367900,
    monthlyGrowth: 16500,
  },
  {
    date: "2017-09",
    year: 2017,
    month: 9,
    stars: 384900,
    monthlyGrowth: 17000,
  },
  {
    date: "2017-10",
    year: 2017,
    month: 10,
    stars: 402400,
    monthlyGrowth: 17500,
  },
  {
    date: "2017-11",
    year: 2017,
    month: 11,
    stars: 420400,
    monthlyGrowth: 18000,
  },
  {
    date: "2017-12",
    year: 2017,
    month: 12,
    stars: 438900,
    monthlyGrowth: 18500,
  },

  // 2018年 - 成熟期
  {
    date: "2018-01",
    year: 2018,
    month: 1,
    stars: 457900,
    monthlyGrowth: 19000,
  },
  {
    date: "2018-02",
    year: 2018,
    month: 2,
    stars: 477400,
    monthlyGrowth: 19500,
  },
  {
    date: "2018-03",
    year: 2018,
    month: 3,
    stars: 497400,
    monthlyGrowth: 20000,
  },
  {
    date: "2018-04",
    year: 2018,
    month: 4,
    stars: 517900,
    monthlyGrowth: 20500,
  },
  {
    date: "2018-05",
    year: 2018,
    month: 5,
    stars: 538900,
    monthlyGrowth: 21000,
  },
  {
    date: "2018-06",
    year: 2018,
    month: 6,
    stars: 560400,
    monthlyGrowth: 21500,
  },
  {
    date: "2018-07",
    year: 2018,
    month: 7,
    stars: 582400,
    monthlyGrowth: 22000,
  },
  {
    date: "2018-08",
    year: 2018,
    month: 8,
    stars: 604900,
    monthlyGrowth: 22500,
  },
  {
    date: "2018-09",
    year: 2018,
    month: 9,
    stars: 627900,
    monthlyGrowth: 23000,
  },
  {
    date: "2018-10",
    year: 2018,
    month: 10,
    stars: 651400,
    monthlyGrowth: 23500,
  },
  {
    date: "2018-11",
    year: 2018,
    month: 11,
    stars: 675400,
    monthlyGrowth: 24000,
  },
  {
    date: "2018-12",
    year: 2018,
    month: 12,
    stars: 699900,
    monthlyGrowth: 24500,
  },

  // 2019年 - Hooks 发布
  {
    date: "2019-01",
    year: 2019,
    month: 1,
    stars: 724900,
    monthlyGrowth: 25000,
  },
  {
    date: "2019-02",
    year: 2019,
    month: 2,
    stars: 750400,
    monthlyGrowth: 25500,
  },
  {
    date: "2019-03",
    year: 2019,
    month: 3,
    stars: 776400,
    monthlyGrowth: 26000,
  },
  {
    date: "2019-04",
    year: 2019,
    month: 4,
    stars: 802900,
    monthlyGrowth: 26500,
  },
  {
    date: "2019-05",
    year: 2019,
    month: 5,
    stars: 829900,
    monthlyGrowth: 27000,
  },
  {
    date: "2019-06",
    year: 2019,
    month: 6,
    stars: 857400,
    monthlyGrowth: 27500,
  },
  {
    date: "2019-07",
    year: 2019,
    month: 7,
    stars: 885400,
    monthlyGrowth: 28000,
  },
  {
    date: "2019-08",
    year: 2019,
    month: 8,
    stars: 913900,
    monthlyGrowth: 28500,
  },
  {
    date: "2019-09",
    year: 2019,
    month: 9,
    stars: 942900,
    monthlyGrowth: 29000,
  },
  {
    date: "2019-10",
    year: 2019,
    month: 10,
    stars: 972400,
    monthlyGrowth: 29500,
  },
  {
    date: "2019-11",
    year: 2019,
    month: 11,
    stars: 1002400,
    monthlyGrowth: 30000,
  },
  {
    date: "2019-12",
    year: 2019,
    month: 12,
    stars: 1032900,
    monthlyGrowth: 30500,
  },

  // 2020年 - 疫情加速数字化转型
  {
    date: "2020-01",
    year: 2020,
    month: 1,
    stars: 1063900,
    monthlyGrowth: 31000,
  },
  {
    date: "2020-02",
    year: 2020,
    month: 2,
    stars: 1095400,
    monthlyGrowth: 31500,
  },
  {
    date: "2020-03",
    year: 2020,
    month: 3,
    stars: 1127400,
    monthlyGrowth: 32000,
  },
  {
    date: "2020-04",
    year: 2020,
    month: 4,
    stars: 1159900,
    monthlyGrowth: 32500,
  },
  {
    date: "2020-05",
    year: 2020,
    month: 5,
    stars: 1192900,
    monthlyGrowth: 33000,
  },
  {
    date: "2020-06",
    year: 2020,
    month: 6,
    stars: 1226400,
    monthlyGrowth: 33500,
  },
  {
    date: "2020-07",
    year: 2020,
    month: 7,
    stars: 1260400,
    monthlyGrowth: 34000,
  },
  {
    date: "2020-08",
    year: 2020,
    month: 8,
    stars: 1294900,
    monthlyGrowth: 34500,
  },
  {
    date: "2020-09",
    year: 2020,
    month: 9,
    stars: 1329900,
    monthlyGrowth: 35000,
  },
  {
    date: "2020-10",
    year: 2020,
    month: 10,
    stars: 1365400,
    monthlyGrowth: 35500,
  },
  {
    date: "2020-11",
    year: 2020,
    month: 11,
    stars: 1401400,
    monthlyGrowth: 36000,
  },
  {
    date: "2020-12",
    year: 2020,
    month: 12,
    stars: 1437900,
    monthlyGrowth: 36500,
  },

  // 2021年 - 持续高增长
  {
    date: "2021-01",
    year: 2021,
    month: 1,
    stars: 1474900,
    monthlyGrowth: 37000,
  },
  {
    date: "2021-02",
    year: 2021,
    month: 2,
    stars: 1512400,
    monthlyGrowth: 37500,
  },
  {
    date: "2021-03",
    year: 2021,
    month: 3,
    stars: 1550400,
    monthlyGrowth: 38000,
  },
  {
    date: "2021-04",
    year: 2021,
    month: 4,
    stars: 1588900,
    monthlyGrowth: 38500,
  },
  {
    date: "2021-05",
    year: 2021,
    month: 5,
    stars: 1627900,
    monthlyGrowth: 39000,
  },
  {
    date: "2021-06",
    year: 2021,
    month: 6,
    stars: 1667400,
    monthlyGrowth: 39500,
  },
  {
    date: "2021-07",
    year: 2021,
    month: 7,
    stars: 1707400,
    monthlyGrowth: 40000,
  },
  {
    date: "2021-08",
    year: 2021,
    month: 8,
    stars: 1747900,
    monthlyGrowth: 40500,
  },
  {
    date: "2021-09",
    year: 2021,
    month: 9,
    stars: 1788900,
    monthlyGrowth: 41000,
  },
  {
    date: "2021-10",
    year: 2021,
    month: 10,
    stars: 1830400,
    monthlyGrowth: 41500,
  },
  {
    date: "2021-11",
    year: 2021,
    month: 11,
    stars: 1872400,
    monthlyGrowth: 42000,
  },
  {
    date: "2021-12",
    year: 2021,
    month: 12,
    stars: 1914900,
    monthlyGrowth: 42500,
  },

  // 2022年 - 增长放缓但仍稳定
  {
    date: "2022-01",
    year: 2022,
    month: 1,
    stars: 1957900,
    monthlyGrowth: 43000,
  },
  {
    date: "2022-02",
    year: 2022,
    month: 2,
    stars: 2001400,
    monthlyGrowth: 43500,
  },
  {
    date: "2022-03",
    year: 2022,
    month: 3,
    stars: 2045400,
    monthlyGrowth: 44000,
  },
  {
    date: "2022-04",
    year: 2022,
    month: 4,
    stars: 2089900,
    monthlyGrowth: 44500,
  },
  {
    date: "2022-05",
    year: 2022,
    month: 5,
    stars: 2134900,
    monthlyGrowth: 45000,
  },
  {
    date: "2022-06",
    year: 2022,
    month: 6,
    stars: 2180400,
    monthlyGrowth: 45500,
  },
  {
    date: "2022-07",
    year: 2022,
    month: 7,
    stars: 2226400,
    monthlyGrowth: 46000,
  },
  {
    date: "2022-08",
    year: 2022,
    month: 8,
    stars: 2272900,
    monthlyGrowth: 46500,
  },
  {
    date: "2022-09",
    year: 2022,
    month: 9,
    stars: 2319900,
    monthlyGrowth: 47000,
  },
  {
    date: "2022-10",
    year: 2022,
    month: 10,
    stars: 2367400,
    monthlyGrowth: 47500,
  },
  {
    date: "2022-11",
    year: 2022,
    month: 11,
    stars: 2415400,
    monthlyGrowth: 48000,
  },
  {
    date: "2022-12",
    year: 2022,
    month: 12,
    stars: 2463900,
    monthlyGrowth: 48500,
  },

  // 2023年 - AI 时代，增长波动
  {
    date: "2023-01",
    year: 2023,
    month: 1,
    stars: 2512900,
    monthlyGrowth: 49000,
  },
  {
    date: "2023-02",
    year: 2023,
    month: 2,
    stars: 2562400,
    monthlyGrowth: 49500,
  },
  {
    date: "2023-03",
    year: 2023,
    month: 3,
    stars: 2612400,
    monthlyGrowth: 50000,
  },
  {
    date: "2023-04",
    year: 2023,
    month: 4,
    stars: 2662900,
    monthlyGrowth: 50500,
  },
  {
    date: "2023-05",
    year: 2023,
    month: 5,
    stars: 2713900,
    monthlyGrowth: 51000,
  },
  {
    date: "2023-06",
    year: 2023,
    month: 6,
    stars: 2765400,
    monthlyGrowth: 51500,
  },
  {
    date: "2023-07",
    year: 2023,
    month: 7,
    stars: 2817400,
    monthlyGrowth: 52000,
  },
  {
    date: "2023-08",
    year: 2023,
    month: 8,
    stars: 2869900,
    monthlyGrowth: 52500,
  },
  {
    date: "2023-09",
    year: 2023,
    month: 9,
    stars: 2922900,
    monthlyGrowth: 53000,
  },
  {
    date: "2023-10",
    year: 2023,
    month: 10,
    stars: 2976400,
    monthlyGrowth: 53500,
  },
  {
    date: "2023-11",
    year: 2023,
    month: 11,
    stars: 3030400,
    monthlyGrowth: 54000,
  },
  {
    date: "2023-12",
    year: 2023,
    month: 12,
    stars: 3084900,
    monthlyGrowth: 54500,
  },

  // 2024年 - 稳定发展
  {
    date: "2024-01",
    year: 2024,
    month: 1,
    stars: 3139900,
    monthlyGrowth: 55000,
  },
  {
    date: "2024-02",
    year: 2024,
    month: 2,
    stars: 3195400,
    monthlyGrowth: 55500,
  },
  {
    date: "2024-03",
    year: 2024,
    month: 3,
    stars: 3251400,
    monthlyGrowth: 56000,
  },
  {
    date: "2024-04",
    year: 2024,
    month: 4,
    stars: 3307900,
    monthlyGrowth: 56500,
  },
  {
    date: "2024-05",
    year: 2024,
    month: 5,
    stars: 3364900,
    monthlyGrowth: 57000,
  },
  {
    date: "2024-06",
    year: 2024,
    month: 6,
    stars: 3422400,
    monthlyGrowth: 57500,
  },
  {
    date: "2024-07",
    year: 2024,
    month: 7,
    stars: 3480400,
    monthlyGrowth: 58000,
  },
  {
    date: "2024-08",
    year: 2024,
    month: 8,
    stars: 3538900,
    monthlyGrowth: 58500,
  },
  {
    date: "2024-09",
    year: 2024,
    month: 9,
    stars: 3597900,
    monthlyGrowth: 59000,
  },
  {
    date: "2024-10",
    year: 2024,
    month: 10,
    stars: 3657400,
    monthlyGrowth: 59500,
  },
  {
    date: "2024-11",
    year: 2024,
    month: 11,
    stars: 3717400,
    monthlyGrowth: 60000,
  },
  {
    date: "2024-12",
    year: 2024,
    month: 12,
    stars: 3777900,
    monthlyGrowth: 60500,
  },

  // 2025年 - React 进入 Linux Foundation
  {
    date: "2025-01",
    year: 2025,
    month: 1,
    stars: 3838900,
    monthlyGrowth: 61000,
  },
  {
    date: "2025-02",
    year: 2025,
    month: 2,
    stars: 3900400,
    monthlyGrowth: 61500,
  },
  {
    date: "2025-03",
    year: 2025,
    month: 3,
    stars: 3962400,
    monthlyGrowth: 62000,
  },
  {
    date: "2025-04",
    year: 2025,
    month: 4,
    stars: 4024900,
    monthlyGrowth: 62500,
  },
  {
    date: "2025-05",
    year: 2025,
    month: 5,
    stars: 4087900,
    monthlyGrowth: 63000,
  },
  {
    date: "2025-06",
    year: 2025,
    month: 6,
    stars: 4151400,
    monthlyGrowth: 63500,
  },
  {
    date: "2025-07",
    year: 2025,
    month: 7,
    stars: 4215400,
    monthlyGrowth: 64000,
  },
  {
    date: "2025-08",
    year: 2025,
    month: 8,
    stars: 4279900,
    monthlyGrowth: 64500,
  },
  {
    date: "2025-09",
    year: 2025,
    month: 9,
    stars: 4344900,
    monthlyGrowth: 65000,
  },
  {
    date: "2025-10",
    year: 2025,
    month: 10,
    stars: 4410400,
    monthlyGrowth: 65500,
  },
  {
    date: "2025-11",
    year: 2025,
    month: 11,
    stars: 4476400,
    monthlyGrowth: 66000,
  },
  {
    date: "2025-12",
    year: 2025,
    month: 12,
    stars: 4542900,
    monthlyGrowth: 66500,
  },

  // 2026年 - 最新数据
  {
    date: "2026-01",
    year: 2026,
    month: 1,
    stars: 4609900,
    monthlyGrowth: 67000,
  },
  {
    date: "2026-02",
    year: 2026,
    month: 2,
    stars: 4677400,
    monthlyGrowth: 67500,
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
