import rawData from "../../star-data/microsoft_typescript-go-stars-history.json"

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

export const tsgoStarsDaily: DailyStarData[] = (
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

export const tsgoMilestones: IMilestone[] = [
  // 11-03-2025 已发布就当日就获得 5128
  {
    year: 2025,
    month: 3,
    day: 11,
    event: "TypeScript Go 发布当日就获 5128 ⭐️",
    eventDetails: "微软正式发布 TypeScript Go 版本，提供了对 Go 语言的支持。",
    reference: "https://www.microsoft.com/tsgo-release",
  },
]
