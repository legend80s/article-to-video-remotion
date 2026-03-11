import rawData from "../../star-data/anomalyco_opencode-stars-history.json"

export interface DailyStarData {
  date: string
  year: number
  month: number
  day: number
  stars: number
  dailyGrowth: number
}

const parseDate = (dateStr: string) => {
  const [day, monthStr, year] = dateStr.split("-")
  return { year: Number(year), month: Number(monthStr), day: Number(day) }
}

export const opencodeStarsDaily: DailyStarData[] = (
  rawData as [string, number, number][]
).map(([dateStr, dailyGrowth, stars]) => {
  const { year, month, day } = parseDate(dateStr)
  return { date: dateStr, year, month, day, dailyGrowth, stars }
})

interface IMilestone {
  year: number
  month: number
  day: number
  event: string
  eventDetails?: string
  reference?: string
}

export const opencodeMilestones: IMilestone[] = [
  {
    year: 2025,
    month: 4,
    day: 30,
    event: "opencode 发布",
    eventDetails: "The open source coding agent 正式发布",
  },
  {
    year: 2025,
    month: 5,
    day: 14,
    event: "首次爆发增长",
    eventDetails: "单日获得 181 stars",
  },
  {
    year: 2025,
    month: 6,
    day: 20,
    event: "快速增长期",
    eventDetails: "单日获得 801 stars",
  },
  {
    year: 2025,
    month: 6,
    day: 23,
    event: "首次高峰",
    eventDetails: "单日最高 1076 stars",
  },
  {
    year: 2025,
    month: 12,
    day: 2,
    event: "v1.0 发布",
    eventDetails: "v1.0.127 版本发布",
  },
  {
    year: 2026,
    month: 1,
    day: 4,
    event: "病毒式传播开始",
    eventDetails: "单日获得 1318 stars，开始爆发式增长",
  },
  {
    year: 2026,
    month: 1,
    day: 5,
    event: "持续爆发",
    eventDetails: "单日获得 2024 stars",
  },
  {
    year: 2026,
    month: 1,
    day: 12,
    event: "超级爆发",
    eventDetails: "单日获得 3025 stars",
  },
  {
    year: 2026,
    month: 2,
    day: 14,
    event: "v1.2 发布",
    eventDetails: "v1.2.0 版本发布，包含 SQLite 数据库迁移",
  },
]
