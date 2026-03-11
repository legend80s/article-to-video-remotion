import rawData from "../../star-data/anomalyco_opencode-stars-history.json"

rawData.push(
  // added by me
  ["11-03-2026", 0, 120104],
)

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
    event: "🚩 opencode 发布",
    eventDetails: "The open source coding agent 正式发布",
  },
  // {
  //   year: 2025,
  //   month: 5,
  //   day: 14,
  //   event: "首次爆发增长",
  //   eventDetails: "单日获得 181 stars",
  // },
  // {
  //   year: 2025,
  //   month: 6,
  //   day: 20,
  //   event: "快速增长期",
  //   eventDetails: "单日获得 801 stars",
  // },
  {
    year: 2025,
    month: 6,
    day: 23,
    event: "首次高峰 ⛰️：单日最高 1076 stars",
    eventDetails: "单日最高 1076 stars",
  },
  // 2025年9月29日	OpenCode Zen发布
  {
    year: 2025,
    month: 9,
    day: 29,
    event: "🚩 OpenCode Zen 发布",
    eventDetails: "OpenCode Zen 版本发布，提供更简洁的用户界面和增强的功能",
  },
  {
    year: 2025,
    month: 11,
    day: 1,
    event: "40万月活用户",
    eventDetails:
      "发布5个月后达到 400,000 月活用户，39,000 GitHub stars，350 名贡献者",
  },
  // {
  //   year: 2025,
  //   month: 12,
  //   day: 10,
  //   event: "v1.0 发布。65万月活用户",
  //   eventDetails: "v1.0.142 版本发布",
  // },

  // 2025-12-16 Desktop Beta 正式发布 OpenCode Desktop (Beta) 版本正式发布，支持 macOS、Windows 和 Linux 平台
  {
    year: 2025,
    month: 12,
    day: 16,
    event: "🚩 Desktop Beta 正式发布",
    eventDetails:
      "OpenCode Desktop (Beta) 版本正式发布，支持 macOS、Windows 和 Linux 平台",
  },

  // MiMo V2 Flash 2025-12-22
  // {
  //   year: 2025,
  //   month: 12,
  //   day: 22,
  //   event: "🆙 新增小米模型 MiMo V2 Flash",
  //   eventDetails:
  //     "",
  // },

  {
    year: 2026,
    month: 1,
    day: 4,
    event: "🚩 v1.1.1 重大版本发布！🦠 病毒式传播开始",
    eventDetails: "单日获得 1318 stars，开始爆发式增长",
  },
  // {
  //   year: 2026,
  //   month: 1,
  //   day: 5,
  //   event: "持续爆发",
  //   eventDetails: "单日获得 2024 stars",
  // },
  {
    year: 2026,
    month: 1,
    day: 12,
    event: "超级爆发 🌋：单日获得 3025 stars！",
    eventDetails: "单日获得 3025 stars",
  },
  // 2026-01-29	企业级采用	Cloudflare 等财富500强企业开始采用，100K+ GitHub stars，700+ 贡献者，250万+ 月活开发者
  {
    year: 2026,
    month: 1,
    day: 29,
    event: "企业级采用：Cloudflare 等财富500强企业开始采用",
    eventDetails:
      "Cloudflare 等财富500强企业开始采用，100K+ GitHub stars，700+ 贡献者，250万+ 月活开发者",
  },

  {
    year: 2026,
    month: 2,
    day: 12,
    event: "🆙 免费模型 MiniMax M2.5 加入",
    eventDetails:
      "MiniMax M2.5 was added to OpenCode around mid-February 2026, with reports of it going live and being available for use in OpenCode/NetMind platforms around February 12–16, 2026. It was integrated as a high-performance, cost-effective alternative to Claude Opus, designed for agentic coding and capable of being configured via API in OpenCode. ",
  },

  // 1.2.24 latest Mar 10, 2026
  {
    year: 2026,
    month: 3,
    day: 10,
    event: "🚩 最新版本发布 v1.2.24",
  },
]
