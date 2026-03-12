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

export const tsgoMilestones: IMilestone[] = []
