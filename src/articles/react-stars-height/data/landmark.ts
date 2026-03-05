type ILandmark = {
  name: string
  height: number
  image?: string
  emoji?: string
}

export const landmarks: ILandmark[] = [
  { name: "7层住宅楼", height: 22, emoji: "🏠" },
  // { name: "上海国际商贸中心T2", height: 370 },
  {
    name: "深圳华润大厦",
    height: 392,
    image: "imgs/landmark/remove深圳华润大厦.png",
  },
  {
    name: "上海环球金融中心",
    height: 492,
    image: "imgs/landmark/remove上海环球金融中心.png",
  },
  {
    name: "台北101",
    height: 508,
    image: "imgs/landmark/remove台北101.png",
  },
  {
    name: "深圳平安国际金融中心",
    height: 599,
    image: "imgs/landmark/remove深圳平安国际金融中心.png",
  },
  {
    name: "上海中心大厦",
    height: 632,
    image: "imgs/landmark/remove上海中心大厦.png",
  },
  {
    name: "阿联酋哈利法塔",
    height: 828,
    image: "imgs/landmark/remove阿联酋哈利法塔.png",
  },
  { name: "泰山", height: 1545, emoji: "⛰️" },
  { name: "富士山", height: 3776, emoji: "🗻" },
  { name: "玉龙雪山", height: 5596, emoji: "🏔️" },
  { name: "念青唐古拉山", height: 7162, emoji: "🏔️" },
  // { name: "乔戈里峰", height: 8611, emoji: "🏔️" },
  { name: "珠穆朗玛峰", height: 8848, emoji: "🏔️" },
  { name: "民航客机", height: 10000, emoji: "✈️" },
  { name: "平流层顶", height: 50000, emoji: "☁️" },
  { name: "中间层顶", height: 85000, emoji: "🌌" },
  { name: "卡门线（太空边界）", height: 100000, emoji: "🚀" },
  { name: "低地球轨道卫星", height: 200000, emoji: "🛰️" },
]
