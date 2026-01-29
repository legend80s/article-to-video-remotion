# Remotion 视频制作 Prompt

## 🎯 项目概述

基于文章《Tanstack Start 的天才创新之处》制作一个**2分钟左右**的技术演示视频，重点展示“一键打开源码”和“文件自动生成”两个核心功能。**必须使用 remotion-best-practices skill**。

## 📁 项目结构

```
src/articles/ingenious-innovations-of-tanstack-start/
├── index.tsx                    # 主视频组件入口
├── scenes/                      # 所有场景组件
│   ├── 0-PainPointScene.tsx     # 痛点对比开场 (0-20s)
│   ├── 1-ClickToCodeScene.tsx   # 一键打开演示 (20-70s)
│   ├── 2-HowItWorksScene.tsx    # 原理动画 (40-60s)
│   ├── 3-AutoGenerateScene.tsx  # 文件自动生成 (70-100s)
│   ├── 4-TypeHintScene.tsx      # 路由提示 (100-110s)
│   └── 5-CTAScene.tsx           # 行动号召 (110-120s)
├── components/                  # 共享组件
│   ├── SplitScreenComparison.tsx
│   ├── CodeFlowAnimation.tsx
│   ├── FileTreeGrowth.tsx
│   ├── SwordSlashEffect.tsx
│   └── EditorOpening.tsx
├── data/                       # 数据与配置
│   ├── constants.ts
│   ├── codeSnippets.ts
│   └── transitions.ts
└── utils/                      # 工具函数
    └── animations.ts
```

## 🎨 设计规范

### 1. 视频规格
- **时长**: 120秒 (2分钟)
- **帧率**: 30fps
- **分辨率**: 1920x1080
- **背景色**: #0d1117 (GitHub Dark)

### 2. 配色方案
```typescript
const COLORS = {
  // 品牌色
  primary: '#C678DD', // TanStack 紫
  primaryDark: '#9B59B6',
  
  // 状态色
  success: '#50FA7B', // 绿色 - TanStack 方式
  error: '#FF5555',   // 红色 - 传统方式
  warning: '#FFB86C',
  info: '#8BE9FD',
  
  // UI 色
  background: '#0d1117',
  surface: '#161B22',
  border: '#30363D',
  text: {
    primary: '#F0F6FC',
    secondary: '#8B949E',
    code: '#79C0FF'
  }
}
```

### 3. 动画规范
- 使用 `spring` 物理动画，不要用线性动画
- 所有入场动画：从下方或右侧滑入
- 所有退场动画：向上或向左滑出
- 代码打字机效果：每字符 0.05 秒
- 转场：使用交叉淡入淡出，时长 0.5 秒

## 🎬 场景详细要求

### Scene 0: PainPointScene (0-20秒)
**目的**: 快速展示开发者的核心痛点
**内容**:
1. 左右分屏对比
   - 左侧: 传统方式（红色标注）
     - Chrome DevTools 中寻找类名
     - 复制粘贴 -> 全局搜索 -> 找不到
     - 逐段删除尝试
   - 右侧: TanStack Start（绿色标注）
     - Ctrl+Shift+Click 高亮显示
     - 剑气特效动画
     - 编辑器自动打开

**动画要求**:
- 使用 `SplitScreenComparison` 组件
- 左侧: 错误链条动画（3步连锁反应）
- 右侧: 剑气从点击点发射
- 对比文本: "繁琐 vs 优雅"

### Scene 1: ClickToCodeScene (20-70秒)
**目的**: 完整演示一键打开功能
**分部分**:
1. **功能展示** (20-40秒):
   - 浏览器录屏模拟
   - Ctrl+Shift+Click 按键可视化
   - 数据属性高亮: `data-tsd-source="/src/components/Header.tsx:23:7"`
   - 编辑器打开动画（使用 `EditorOpening` 组件）

2. **配置演示** (40-55秒):
   - 简洁的 vite.config.ts 代码展示
   ```typescript
   // vite.config.ts
   import { devtools } from "@tanstack/devtools-vite"
   
   export default defineConfig({
     plugins: [devtools()]
   })
   ```
   - 环境变量设置: `LAUNCH_EDITOR=trae`

3. **团队协作** (55-70秒):
   - 展示个人配置 vs 团队配置
   - 强调"和而不同"的设计哲学

### Scene 2: HowItWorksScene (40-60秒 - 与场景1重叠)
**目的**: 展示技术原理
**动画流程**:
```
[点击元素] → [data-tsd-source属性] → [网络请求] 
     ↓
[服务端处理] → [launch-editor调用] → [编辑器打开]
     ↓
[精确定位到行:列]
```

**要求**:
- 使用 `CodeFlowAnimation` 组件
- 每个节点有图标和简短说明
- 箭头有流动动画
- 关键代码片段闪现

### Scene 3: AutoGenerateScene (70-100秒)
**目的**: 展示文件自动生成智能体验
**对比演示**:
1. **旧方式** (70-80秒):
   - 终端输入: `foo-cli gen new-page`
   - 红色×标记，文字"容易忘记"
   
2. **TanStack方式** (80-100秒):
   - 文件树视图
   - 在 `routes/` 新建 `about.tsx`
   - 自动生成路由模板动画
   - 智能目录识别:
     - `components/` → 组件模板
     - `services/` → service 代码
     - `utils/` → 工具函数模板

**视觉元素**:
- 使用 `FileTreeGrowth` 组件
- 目录图标变化动画
- 模板代码生成打字机效果

### Scene 4: TypeHintScene (100-110秒)
**目的**: 简要展示路由类型提示
**内容**:
- Link 组件自动补全动画
- navigate 函数类型提示
- ⭐⭐⭐ 评分动画
- 快速转场，不深入细节

### Scene 5: CTAScene (110-120秒)
**目的**: 行动号召
**元素**:
1. 三个核心功能图标并列:
   - 剑图标 (一键打开)
   - 魔法棒图标 (自动生成)  
   - 盾牌图标 (类型安全)
   
2. 宣传语: "让 React 开发更自然"
3. GitHub 星星动画
4. 二维码/链接浮现

