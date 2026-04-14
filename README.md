# MioHot — MioIsland & Code Light 运营工作台

> 一站式内容运营管理工具，为 MioIsland + Code Light 的多平台推广而生。

## 设计初衷

MioIsland（Mac 灵动岛）和 Code Light（iPhone 远程控制 AI 编程）是一个双端系统。面对 8 个平台的内容运营需求，需要一个集中化的工作台来管理文案创作、发布排期、进度追踪。

这个工具解决的核心问题：
- **文案管理散乱** — 40+ 条文案分散在文档中，找不到用不上
- **发布节奏靠记忆** — 哪天该发什么、发了没有，全靠脑子记
- **数据追踪无体系** — 各平台数据分散，无法看全局
- **一人团队效率瓶颈** — 每天只有 3 小时运营时间，需要极致效率

## 产品体系

### MioIsland（Mac 端，开源免费）
- Mac 刘海变灵动岛，实时显示 AI 编程状态
- 像素猫 buddy 系统（18种物种、5项属性）
- 支持 10+ 种终端
- GitHub: https://github.com/MioMioOS/MioIsland
- 安装: `brew install --cask xmqywx/codeisland/codeisland`

### Code Light（iPhone 端）
- iPhone 远程控制 Mac 上的 Claude Code
- Dynamic Island 实时显示
- 精准终端路由、远程启动会话、图片附件
- App Store: 147 国上架
- GitHub: https://github.com/MioMioOS/CodeLight

### 核心故事线
> Mac 刘海里住着一只像素猫，它盯着 Claude 写代码。你不在电脑前？iPhone 上也有一只。

## 功能模块

| 模块 | 功能 | 说明 |
|------|------|------|
| 📅 内容日历 | 周历排期 + 已发标记 | 每周 7 天排期，一键标记已发，状态持久化 |
| 📝 文案库 | 40+ 条文案 + 弹药库 | 按平台/角度筛选，一键复制 |
| 📊 平台策略 | 8 平台完整策略 | 定位、频率、标签、避雷清单 |
| 🎯 执行计划 | 三阶段任务追踪 | P0/P1 优先级，进度可视化 |
| 📈 数据追踪 | 核心指标 + 周复盘 | 可编辑指标卡，复盘模板 |
| 🤝 KOL合作 | 合作模板 + PH清单 | 中英文模板，Product Hunt checklist |

## 文案编写规则

### 内容角度轮换体系（6 个角度）

| 代号 | 角度 | 说明 |
|------|------|------|
| A | 双端系统 | Mac + iPhone 协同，「一个系统，两个屏幕」|
| B | 像素猫 | 品牌符号，趣味互动 |
| C | 技术亮点 | 精准终端路由、Dynamic Island、零知识中转 |
| D | 使用场景 | 做饭审批、通勤查进度、躺沙发操控 |
| E | 幕后/共鸣 | 独立开发者故事、改名经历、情感共鸣 |
| F | 隐性对比 | 不点名竞品，突出差异化 |

### 小红书社区规范

**禁止：**
- 外部链接、二维码
- 绝对化用语（最好、第一、唯一）
- 诱导关注/点赞
- "免费"做标题主词

**安全表达：**
- "开源" 代替 "免费"
- "私信我" 代替放链接
- "评论区" 引导互动
- brew install 属技术内容
- "App Store 搜索 Code Light" 正常表述

### 爆款公式

**痛点型：** 描述痛点（共鸣）→ 转折 → 解决方案 → 互动引导
**共鸣型：** 情感场景（程序员都懂）→ 个人故事 → 顺带提产品 → 开放提问
**场景型：** 具体场景（做饭/地铁/躺沙发）→ 产品怎么解决 → 功能亮点 → 获取方式

### 标签策略
热门：#AI编程 #程序员日常 #Mac效率 #开源项目 #独立开发者
产品：#Claude #效率工具 #MacBook #灵动岛
场景：#远程办公 #科技好物 #程序员的一天

## 技术栈

- React 19 + Vite
- Tailwind CSS v4
- React Router v7
- 数据持久化：localStorage
- 设计规范：Apple Design System（浅色模式）
- 部署：GitHub Pages

## 本地开发

```bash
git clone https://github.com/carey314/MioHot.git
cd MioHot
npm install
npm run dev
# 打开 http://localhost:5173/MioHot/
```

## 部署

推送到 main 分支自动触发 GitHub Actions 部署到 GitHub Pages。

访问地址：https://carey314.github.io/MioHot/

## 文件结构

```
ops-dashboard/
├── src/
│   ├── data/
│   │   └── data.js          # 所有文案、平台策略、执行计划数据
│   ├── components/
│   │   ├── Sidebar.jsx       # 侧边栏导航
│   │   └── GridScanBg.jsx    # 背景动画
│   ├── pages/
│   │   ├── CalendarPage.jsx  # 内容日历（首页）
│   │   ├── CopywritingPage.jsx # 文案库
│   │   ├── StrategyPage.jsx  # 平台策略
│   │   ├── ExecutionPage.jsx # 执行计划
│   │   ├── TrackingPage.jsx  # 数据追踪
│   │   └── KolPage.jsx       # KOL合作
│   ├── App.jsx               # 路由配置
│   └── index.css             # 全局样式
├── .github/workflows/
│   └── deploy.yml            # GitHub Pages 自动部署
├── DESIGN.md                 # Apple 风格设计规范
└── README.md                 # 本文件
```

## License

MIT
