// React GitHub Stars 历史数据 (2013-2026)
// 基于历史里程碑和增长趋势的估算数据

export interface StarDataPoint {
  date: string;
  year: number;
  month: number;
  stars: number;
  monthlyGrowth: number;
}

// 月度累计 star 数据
export const reactStarsMonthly: StarDataPoint[] = [];

// 季度统计
export interface QuarterData {
  year: number;
  quarter: number;
  stars: number;
  growth: number;
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
];

// 年度统计
export interface YearData {
  year: number;
  stars: number;
  yearlyGrowth: number;
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
];


interface IMilestone {
  year: number;
  month: number;
  event: string;
  stars: number;
}

// 重要里程碑
export const milestones: IMilestone[] = [
  { year: 2013, month: 5, event: "React 开源发布", stars: 0 },
  { year: 2015, month: 1, event: "React Native 发布", stars: 59200 },
  { year: 2016, month: 4, event: "React 15 发布", stars: 161100 },
  { year: 2017, month: 5, event: "Create React App 发布", stars: 319900 },
  { year: 2019, month: 2, event: "React Hooks 发布", stars: 750400 },
  { year: 2020, month: 10, event: "React 17 发布", stars: 1365400 },
  { year: 2022, month: 3, event: "React 18 发布", stars: 2045400 },
  { year: 2024, month: 4, event: "React 19 发布", stars: 3307900 },
  {
    year: 2025,
    month: 12,
    event: "React 进入 Linux Foundation",
    stars: 4542900,
  },
  { year: 2026, month: 2, event: "当前", stars: 4677400 },
];
