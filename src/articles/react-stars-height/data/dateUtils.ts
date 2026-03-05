import { reactStarsMonthly } from "./starData"

export function getDateByStars(stars: number): string {
  if (stars <= 0) return "2013-05"
  
  for (let i = 0; i < reactStarsMonthly.length - 1; i++) {
    const current = reactStarsMonthly[i]
    const next = reactStarsMonthly[i + 1]
    
    if (stars >= current.stars && stars <= next.stars) {
      return current.date
    }
  }
  
  return reactStarsMonthly[reactStarsMonthly.length - 1].date
}

export function formatDate(date: string): string {
  const [year, month] = date.split("-")
  return `${year}年${month}月`
}
