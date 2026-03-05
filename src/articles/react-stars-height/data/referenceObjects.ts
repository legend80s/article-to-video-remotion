export interface ReferenceObject {
  id: string
  name: string
  height: number
  type: "building" | "mountain" | "airplane" | "layer" | "satellite"
  color?: string
  special?: boolean
}

export const referenceObjects: ReferenceObject[] = [
  { id: "building-1", name: "7层住宅楼", height: 22, type: "building" },
  {
    id: "building-2",
    name: "上海国际商贸中心T2",
    height: 370,
    type: "building",
  },
  { id: "building-3", name: "上海中心大厦", height: 632, type: "building" },
  {
    id: "building-4",
    name: "哈利法塔",
    height: 828,
    type: "building",
    color: "#FFAA00",
    special: true,
  },
  { id: "mountain-1", name: "泰山", height: 1545, type: "mountain" },
  { id: "mountain-2", name: "富士山", height: 3776, type: "mountain" },
  { id: "mountain-3", name: "玉龙雪山", height: 5596, type: "mountain" },
  { id: "mountain-4", name: "念青唐古拉山", height: 7162, type: "mountain" },
  { id: "mountain-5", name: "乔戈里峰", height: 8611, type: "mountain" },
  { id: "mountain-6", name: "珠穆朗玛峰", height: 8848, type: "mountain" },
  { id: "airplane-1", name: "民航客机", height: 10000, type: "airplane" },
  { id: "layer-1", name: "平流层顶", height: 50000, type: "layer" },
  { id: "layer-2", name: "中间层顶", height: 85000, type: "layer" },
  { id: "layer-3", name: "卡门线（太空边界）", height: 100000, type: "layer" },
  {
    id: "satellite-1",
    name: "低地球轨道卫星",
    height: 200000,
    type: "satellite",
  },
]

export const MAX_HEIGHT = 243550
// react star 柱子宽度
export const COLUMN_WIDTH = 60
export const REACT_COLOR = "rgb(8, 126, 164)"

export function formatHeight(meters: number): string {
  if (meters >= 1000) {
    return `${(meters / 1000).toFixed(1)} km`
  }
  return `${meters} m`
}

export function formatStars(stars: number): string {
  return stars.toLocaleString()
}
