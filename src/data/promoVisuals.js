// ============================================================
// 推广素材库 — 13 张图 × 多平台爆款文案
// 数据来源：codelight-image2 项目（superpower 出图 v8/v9/v10）+ 联网搜索的 2026 平台爆款规律
// 活动窗口：2026-05-14 ~ 2026-05-28
// 原则：一张图覆盖 3-4 个平台，最大化复用
// ============================================================

export const promoVisuals = [
  {
    id: 1,
    filename: '01-hero.png',
    title: 'Code Light Hero',
    version: 'v8',
    dimensions: '1024×1536',
    score: 8,
    stars: 0,
    theme: '上架公告主视觉',
    description: 'Apple keynote 风产品全家福，MacBook + iPhone 双端，灵动岛/挂件实景。',
    posts: [
      {
        platform: 'Twitter',
        primary: true,
        title: 'Code Light is live on App Store 🚀',
        content: `After a year of solo dev, Code Light is on the App Store.

Mac is the base. iPhone is the remote.
Dynamic Island shows what Claude is doing in real-time.

3 days free, no card.
apps.apple.com/app/code-light/id6761744871`,
        tags: ['BuildInPublic', 'ClaudeCode', 'IndieDev', 'iOS', 'DynamicIsland', 'AIcoding'],
      },
      {
        platform: '即刻',
        primary: false,
        title: '做了一年的 App，今天上架 App Store',
        content: `一个让 Claude Code 跟着你走的 iPhone App。

Mac 在跑 → 灵动岛实时同步 → 不在电脑前也能看 / 回复 / 批准 ✅

打开 App 就送 3 天免费试用，搜「Code Light」即可。
不投广告，靠真实使用 + 真实反馈。`,
        tags: [],
        circles: ['独立开发的日常', '产品安利社', 'AI 探索站'],
      },
      {
        platform: '微博',
        primary: false,
        title: 'Code Light 2.0 上架 App Store 啦 🎉',
        content: `【独立开发者上架日记】

我做的 Code Light 终于上架 App Store 了 🎉

让 Claude Code 在 Mac 和 iPhone 之间实时同步：
✅ Mac 上 AI 在跑代码
✅ iPhone 灵动岛同步显示状态
✅ 离开电脑也能看 / 回复 / 批准

3 天免费试用，搜「Code Light」可下。求各位 V 友转发支持 🙏`,
        tags: ['独立开发', 'ClaudeCode', '上架', 'AI编程', '程序员', '小众App'],
      },
      {
        platform: 'V2EX',
        primary: false,
        title: '[分享创造] Code Light — Claude Code 的 iPhone 伴侣，上 App Store 了',
        content: `一个让 Claude Code 在 Mac/iPhone 双端同步的工具，今天上架 App Store。

核心功能：
- iPhone 灵动岛 + 锁屏 Live Activity 实时显示 Claude 状态
- 精准 cmux 终端定位（session UUID → PID → 环境变量）
- 多 Mac 配对 + 多 server 支持
- 所有 Claude 斜杠命令都能从手机发
- E2E 加密 + 零知识中继

三端协同：
- iPhone：apps.apple.com/app/code-light/id6761744871
- Mac：github.com/MioMioOS/MioIsland（必装 3.0.0+）
- Server：code.7ove.online（也可自托管）

License: CC BY-NC 4.0，仅限个人学习研究。`,
        tags: [],
      },
    ],
  },
  {
    id: 2,
    filename: '02-mioisland.png',
    title: 'MioIsland 特写',
    version: 'v8',
    dimensions: '1024×1536',
    score: 9.5,
    stars: 2,
    theme: 'Mac 端刘海挂件展示',
    description: 'MacBook 刘海下方挂件特写，磨砂玻璃质感，显示当前会话状态。',
    posts: [
      {
        platform: '即刻',
        primary: true,
        title: '你 Mac 屏幕顶部的刘海，其实可以变成挂件',
        content: `MioIsland 3.0 上线。Mac 的"刘海"位置长出来一个小卡片，实时显示 Claude Code 当前在干什么：

· Thinking
· Edit main.swift
· Needs approval

不是菜单栏图标，是真的"刘海挂件"。配 Code Light（iPhone App Store）一起用。

开源：github.com/MioMioOS/MioIsland`,
        tags: [],
        circles: ['独立开发的日常', '产品安利社', 'AI 探索站', 'Mac 效率'],
      },
      {
        platform: '掘金',
        primary: false,
        title: '让 Mac 的刘海，从无用变成最有用',
        content: `MacBook 顶部那道黑色刘海，自带摄像头之外的像素一直是浪费的。

MioIsland 3.0 让它长出一个"挂件"，实时显示 Claude Code 的当前会话状态：思考中 / 工具运行 / 等待批准 / 完成。

不是菜单栏图标——是真的从刘海下方"探"出来的磨砂玻璃质感卡片。

技术拆解：
1. 用 NSPanel + 自定义 NSWindowMask 模拟刘海覆盖
2. 通过 Claude hooks + JSONL 文件监听获取实时状态
3. X-Client-Version header 协议升级 + 兑换码新流程

代码全开源：github.com/MioMioOS/MioIsland`,
        tags: ['macOS', 'SwiftUI', 'ClaudeCode', '独立开发', '原创'],
      },
      {
        platform: '小红书',
        primary: false,
        title: '✨ MacBook 刘海居然能这么用！',
        content: `✨ 程序员的隐藏 setup：把 MacBook 刘海变成 AI 状态挂件

之前刘海除了能放摄像头，剩下的像素一直被浪费 🥲

MioIsland 3.0 在那个位置长出来一个磨砂玻璃感的小卡片：
🟢 Claude 思考中
🟠 Claude 在跑工具
🟡 等待你批准
✅ 任务完成

配合 iPhone 上的 Code Light 用，绝杀 ✨

GitHub 找「MioMioOS/MioIsland」，开源免费`,
        tags: ['Mac效率', '程序员日常', '独立开发', 'macOS', 'ClaudeCode', '小众工具', '隐藏功能'],
      },
      {
        platform: 'V2EX',
        primary: false,
        title: '[分享创造] MioIsland 3.0 — 把 Mac 刘海做成 Claude Code 状态挂件',
        content: `MioIsland 3.0 上线。简单介绍：

- macOS menubar app，在 Mac 屏幕顶部刘海下方"探"出一个磨砂玻璃质感卡片
- 实时显示当前活跃的 Claude Code 会话状态
- 配合 iPhone 端 Code Light 使用（App Store 已上架）

3.0 主要变更：
1. 每个 server 请求带 X-Client-Version header（新协议）
2. 兑换码流程从 /v1/redeem 升级到 /v2/redeem
3. Live Activity 推送强制 HTTP/2

老版本（< 3.0.0）兑换码会失败。

License: CC BY-NC 4.0
github.com/MioMioOS/MioIsland`,
        tags: [],
      },
    ],
  },
  {
    id: 3,
    filename: '03-promo.png',
    title: '推广活动卡',
    version: 'v8',
    dimensions: '1024×1536',
    score: 9,
    stars: 1,
    theme: '推广换码活动主图',
    description: '图文 10 天 / 视频 30 天 兑换码 + ⚠️ MioIsland 3.0.0+ 必要条件。',
    posts: [
      {
        platform: '小红书',
        primary: true,
        title: '🎁 帮我推一下 App，免费送你长期试用码（独立开发者朴素请求）',
        content: `独立开发者的朴素请求 ✋

不投广告，靠你帮我推一下：
🖼 图文 = 10 天兑换码
🎬 视频 30s+ = 30 天兑换码
💎 跨平台叠加 = 最多 40 天

朋友圈 / 小红书 / 微博 / 即刻 任一公开账号都行
发完截图私信我 → 立刻发码

⚠️ Mac 端 MioIsland 必须升到 3.0.0+
（旧版兑换会失败，是协议升级的硬要求）

5/14 起开放 14 天，先来先发 ⏰`,
        tags: ['独立开发', 'ClaudeCode', 'AI编程', '推广有奖', '试用福利', '灵动岛', '程序员', '免费领码'],
      },
      {
        platform: '即刻',
        primary: false,
        title: '搞了一个朴素的推广活动 —— 帮我推一下，免费送你长期试用',
        content: `不投广告，靠真实使用感受。

🖼 图文 = 10 天兑换码
🎬 视频 30s+ = 30 天兑换码
跨平台可叠加 = 最多 40 天

朋友圈 / 小红书 / 微博 / 即刻 任一公开账号都行。链接私信我，审核通过立刻发码。

⚠️ 兑换前请把 Mac 端 MioIsland 升级到 3.0.0+

额度有限，开放 14 天（5/14 - 5/28）。`,
        tags: [],
        circles: ['独立开发的日常', '产品安利社'],
      },
      {
        platform: '朋友圈',
        primary: false,
        title: '推广活动（朋友圈版）',
        content: `Code Light 上架 App Store 啦 🎉
搞个朴素的推广活动：

帮我转发图文 = 10 天兑换码
拍个 30 秒视频 = 30 天兑换码
图文 + 视频都做 = 40 天

私信我截图/链接即可领码 🎁
⚠️ 兑换需 Mac MioIsland 3.0.0+

求支持 🙏`,
        tags: [],
      },
      {
        platform: '微博',
        primary: false,
        title: '【独立开发者求助】推广换长期试用',
        content: `刚上架 App Store 不投广告，求大家帮推 🙏

我的 Code Light（Claude Code 的 iPhone 伴侣）：
🖼 帮转图文 = 10 天兑换码
🎬 拍视频 30s+ = 30 天兑换码
跨平台可叠加

私信我链接，立刻发码 ✨
⚠️ Mac 端 MioIsland 需升级 3.0.0+

5/14 起开放 14 天，先到先得`,
        tags: ['独立开发', 'ClaudeCode', '推广有奖', 'AI编程', '免费试用'],
      },
    ],
  },
  {
    id: 4,
    filename: '04-social.png',
    title: '社交媒体竖版',
    version: 'v8',
    dimensions: '1024×1536',
    score: 9.5,
    stars: 2,
    theme: '朋友圈/小红书封面',
    description: '生活化竖版，半开 MacBook + iPhone 立旁边 + 自然光线。',
    posts: [
      {
        platform: '朋友圈',
        primary: true,
        title: '我做的 App 上 App Store 了 🎉',
        content: `我做的 App 上 App Store 了 🎉

Code Light：让 Claude Code 在 Mac 和 iPhone 之间实时同步。
· Mac 上 Claude 在写代码
· iPhone 灵动岛同步显示状态
· 我离开电脑去喝咖啡 = 不脱节

3 天免费试用，App Store 搜「Code Light」

帮忙转发的朋友送 10 天兑换码，私我即可 🙏`,
        tags: [],
      },
      {
        platform: '小红书',
        primary: false,
        title: '程序员的 App 上架 App Store 是什么体验 🥹',
        content: `苹果审核来回 7 轮，今天终于过了 🎉

Code Light：让 Claude Code 跟着你走
📱 iPhone 灵动岛 + 锁屏 Live Activity
🖥️ Mac 端 MioIsland 桥接
☁️ 自托管 or 公共服务器都支持

270+ GitHub Stars，开源 CC BY-NC
3 天免费试用，0 绑卡

独立开发不易，求支持 🙏`,
        tags: ['独立开发', 'ClaudeCode', 'App上架', '程序员', 'AI编程', '灵动岛', '小众宝藏'],
      },
      {
        platform: '即刻',
        primary: false,
        title: '上架日记体（即刻版）',
        content: `做了一年的 App 今天终于上架了。

Code Light = Claude Code 的 iPhone 伴侣。Mac 在写代码，iPhone 实时显示状态。

苹果审核 7 轮才过。一个人写 iOS + macOS + Server 三端，真的需要"靠时间"。

App Store 搜「Code Light」，3 天免费试用。`,
        tags: [],
        circles: ['独立开发的日常', '产品安利社'],
      },
      {
        platform: '微博',
        primary: false,
        title: '微博上架公告',
        content: `🎉 一年 solo dev 的 App 上架啦

【Code Light】让 Claude Code 跟着你走
📱 iPhone 灵动岛实时同步 Claude 状态
🖥️ Mac 端 MioIsland 桥接
3 天免费试用，无需绑卡

求转发求体验求 star 🙏
App Store 搜「Code Light」`,
        tags: ['独立开发', 'ClaudeCode', 'AI编程', '程序员日常'],
      },
    ],
  },
  {
    id: 5,
    filename: '05-dynamicisland.png',
    title: '灵动岛特写',
    version: 'v9',
    dimensions: '1024×1536',
    score: 9,
    stars: 1,
    theme: 'iPhone 灵动岛细节',
    description: 'iPhone 顶部灵动岛展开状态，活跃绿色脉冲 + 计时器。',
    posts: [
      {
        platform: '小红书',
        primary: true,
        title: '救命！iPhone 灵动岛居然能这么玩 🐱',
        content: `作为程序员我一直觉得 iPhone 灵动岛没啥用 🥲

直到我自己做了一个能塞进灵动岛的工具——
让 Mac 上的 Claude Code 实时在我灵动岛显示状态：

🟢 思考中
🟡 等批准
🟠 工具运行
✅ 完成

像素猫在锁屏 Live Activity 上陪你看 AI 写代码，超治愈 🥹

⚠️ 灵动岛功能需要 iPhone 14 Pro 及以上
搜「Code Light」开 App 就送 3 天免费试用`,
        tags: ['灵动岛', 'CodeLight', 'ClaudeCode', 'iPhone玩法', '程序员', 'AI编程', '像素艺术', 'Mac效率', 'iPhone15'],
      },
      {
        platform: 'Twitter',
        primary: false,
        title: 'The Dynamic Island was made for this',
        content: `Hot take: the Dynamic Island was made for showing AI agent state.

Phase pulses. Tool names. Approval prompts. Timer.

I built Code Light because none of the existing tools did this right.

apps.apple.com/app/code-light/id6761744871`,
        tags: ['DynamicIsland', 'ClaudeCode', 'iOS', 'IndieDev', 'BuildInPublic'],
      },
      {
        platform: '即刻',
        primary: false,
        title: '灵动岛真支持 vs 推送通知，差别在哪',
        content: `很多远程 CLI 工具都说"支持灵动岛"，实际上发的是普通推送通知 — 弹一下就消失。

Code Light 跑的是 ActivityKit Live Activity：持续在灵动岛显示阶段 / 工具名 / 计时器，phase 切换通过 APNs HTTP/2 推送（普通推送走 HTTP/1.1，Live Activity 必须 HTTP/2，踩坑 3 天才发现）。

灵动岛功能需要 iPhone 14 Pro 及以上。`,
        tags: [],
        circles: ['独立开发的日常', 'AI 探索站'],
      },
      {
        platform: '抖音',
        primary: false,
        title: '【30s 视频脚本】"程序员用灵动岛监督 AI"',
        content: `【脚本拆分】

0-3s: 镜头怼脸 + iPhone 锁屏特写
旁白："你以为灵动岛只能看音乐播放？"

3-10s: 灵动岛切换 4 个状态特写
旁白："其实可以监督 AI 写代码"

10-20s: 真实使用场景（咖啡馆 / 通勤）
旁白："Claude 在 Mac 上跑，iPhone 实时同步"
"等批准的时候，点一下批准就行"

20-30s: 像素猫锁屏特写 + App Store 截图
旁白："像素猫陪你看 AI 写代码"
"App Store 搜 Code Light，3 天免费试"`,
        tags: ['程序员', 'AI编程', '灵动岛', 'Mac', 'ClaudeCode', '独立开发'],
      },
    ],
  },
  {
    id: 6,
    filename: '06-pairing.png',
    title: '双端配对',
    version: 'v9',
    dimensions: '1024×1536',
    score: 8,
    stars: 0,
    theme: 'Mac + iPhone 配对场景',
    description: 'Mac 屏幕显示 QR 码 + 短码，iPhone 扫码瞬间。',
    posts: [
      {
        platform: '即刻',
        primary: true,
        title: '一个 iPhone 配对 N 台 Mac，我做了这件事',
        content: `公司 Mac mini + 家里 MacBook Pro + 出差备机 = 一个 iPhone 全管

Code Light 的做法：
· 每台 Mac 一个永久 6 位短码
· 输码加新 Mac，1-3 秒完成
· 列表里一键切换

不过期、不轮转、重启不变。每台 Mac 甚至可以接不同的后端服务器。

最近还在搞推广送码活动，私聊领 ✨`,
        tags: [],
        circles: ['独立开发的日常', '产品安利社', 'Mac 效率'],
      },
      {
        platform: '小红书',
        primary: false,
        title: '📱 一个 iPhone 可以配对几台 Mac？我的答案是 N',
        content: `公司 Mac mini + 家里 MacBook Pro + 出差备机
= 一个 iPhone 全管

Code Light 的做法：
· 每台 Mac 一个永久 6 位短码
· 输码加新 Mac，1-3 秒完成
· 列表里一键切换

不过期、不轮转、重启不变。

最近还在搞推广送码活动~`,
        tags: ['Mac效率', '多设备协同', '独立开发', 'ClaudeCode', '程序员日常', '灵动岛'],
      },
      {
        platform: '朋友圈',
        primary: false,
        title: '多 Mac 多 server 场景（朋友圈版）',
        content: `做 iOS 开发常见的痛：公司 Mac + 家里 Mac + 出差 Mac 怎么统一管？

我做的 Code Light 直接搞定：一个 iPhone 配对 N 台 Mac，每台一个永久 6 位短码。

App Store 搜「Code Light」试试，3 天免费 ✨`,
        tags: [],
      },
      {
        platform: 'Twitter',
        primary: false,
        title: 'One iPhone, N Macs',
        content: `One iPhone, multiple Macs. Different servers per Mac. Permanent 6-char shortcode that never rotates.

Most remote dev tools force a 1:1 device pairing.

Code Light treats your Macs as a flat list. Tap to switch. Server auto-reconnects.

apps.apple.com/app/code-light/id6761744871`,
        tags: ['BuildInPublic', 'ClaudeCode', 'iOS', 'macOS', 'DevTools', 'IndieDev'],
      },
    ],
  },
  {
    id: 7,
    filename: '07-commute.png',
    title: '通勤地铁',
    version: 'v9',
    dimensions: '1024×1536',
    score: 9.5,
    stars: 2,
    theme: '通勤生活场景',
    description: '地铁车厢中年轻人捧 iPhone，锁屏 Live Activity 清晰可见。',
    posts: [
      {
        platform: '小红书',
        primary: true,
        title: '☕ Claude 在思考。你在喝咖啡。你会知道。',
        content: `今天通勤路上的真实瞬间 🚇

📱 锁屏亮起 → Live Activity 弹出
🤖 "feat/auth · 等待批准 · 0:42"
👆 点开看了一眼，回复"OK 批准"
🚇 地铁还没出站，Claude 已经继续干

"不脱节"的感觉，原来这么爽 🥹

像素猫在锁屏上陪着，连等地铁都治愈了

App Store 搜「Code Light」开 App 即送 3 天免费试用`,
        tags: ['通勤日常', '程序员生活', '灵动岛', 'ClaudeCode', 'AI编程', '独立开发', 'Mac效率', '治愈系'],
      },
      {
        platform: '朋友圈',
        primary: false,
        title: '通勤路上跑 AI（朋友圈版）',
        content: `我做的 Code Light 在 App Store 上架啦 📱

通勤路上锁屏看一眼 Claude 在干啥，地铁里点一下批准命令——以前需要回到电脑前才能干的事，现在 iPhone 就能搞定。

3 天免费试用，搜「Code Light」就能下载。
觉得不错的朋友帮我转发一下，私我送 10 天兑换码 🎁`,
        tags: [],
      },
      {
        platform: '即刻',
        primary: false,
        title: '"通勤 30 分钟也能推进项目"是真的',
        content: `早晨地铁里发生的事：

1. Claude 跑到一半弹"需要批准 rm -rf node_modules"
2. iPhone 锁屏 Live Activity 抖了一下
3. 点开看了一眼，回了"yes"
4. 地铁还在等下一站，Claude 已经继续

通勤 30 分钟，我推进了一次 PR review，回了一条工程同事的代码问题。
全程没碰 MacBook。

这就是我做 Code Light 的理由。已上 App Store。`,
        tags: [],
        circles: ['独立开发的日常', 'AI 探索站'],
      },
      {
        platform: '微博',
        primary: false,
        title: '通勤场景情绪图（微博版）',
        content: `通勤地铁里 iPhone 锁屏看 AI 写代码进度 ☕

这是我做的 Code Light，让 Claude Code 在 Mac 和 iPhone 之间实时同步。

📱 灵动岛 + 锁屏 Live Activity
🐱 像素猫陪你看 AI 干活
✅ 路上点一下批准就能继续

App Store 搜「Code Light」3 天免费试。求 V 友转发支持 🙏`,
        tags: ['程序员', '通勤日常', 'ClaudeCode', 'AI编程', '独立开发'],
      },
    ],
  },
  {
    id: 8,
    filename: '08-pixelcat.png',
    title: '像素猫拟人',
    version: 'v9',
    dimensions: '1024×1536',
    score: 8.5,
    stars: 0,
    theme: '像素猫品牌强化',
    description: '像素艺术风小猫 4 种姿势（思考/打字/举手/胜利）拟人化。',
    posts: [
      {
        platform: '小红书',
        primary: true,
        title: '🐱 我在 Mac 刘海里养了一只像素猫',
        content: `🐱 我在 Mac 刘海里养了一只像素猫

不是 emoji。不是 Live2D。是真的 8-bit 像素艺术的小猫，住在 Mac 屏幕顶部的"刘海挂件"里 ✨

它会陪你看 Claude Code 写代码：
🤔 Claude 思考 → 猫"想"的姿势
⌨️ Claude 干活 → 猫"打字"姿势
✋ Claude 等批准 → 猫举手
🎉 Claude 干完 → 猫胜利

iPhone 锁屏也有一只它在陪你。

"养猫"零成本，每天打开 Mac 就能看 🥹`,
        tags: ['像素猫', '像素艺术', 'ClaudeCode', '独立开发', '程序员日常', '治愈系', 'Mac效率', '数字宠物', '手绘像素'],
      },
      {
        platform: '微博',
        primary: false,
        title: '【独立开发】像素猫 4 种姿势',
        content: `做了一个 App 叫 Code Light，里面养了一只像素猫🐱

它有 4 种姿势：思考/打字/举手/胜利，对应 Claude Code 的 4 种状态。

苹果上架审核来回 7 轮，今天终于通过了。求转发求 star 求体验🙏

App Store 搜「Code Light」 / 3 天免费试用`,
        tags: ['独立开发', '像素艺术', 'ClaudeCode', 'AI编程', '程序员', '小众App'],
      },
      {
        platform: '即刻',
        primary: false,
        title: '为什么我给开发者工具配了一只像素猫',
        content: `开发者工具普遍冷冰冰。我想让 Code Light 不一样。

所以我画了一只 8-bit 像素猫，让它住在 Mac 刘海挂件和 iPhone 锁屏 Live Activity 上。Claude 在思考、打字、等批准、完成时，猫会切换 4 种姿势陪你。

"工具该有温度" 不是抽象口号，是具体可以做的设计选择。`,
        tags: [],
        circles: ['独立开发的日常', '产品安利社'],
      },
      {
        platform: 'Twitter',
        primary: false,
        title: 'A pixel cat lives in my Mac notch',
        content: `A pixel cat lives in my Mac's notch.

It watches Claude Code write code. Different poses for thinking, typing, waiting for approval, done.

Same cat appears on iPhone lockscreen when paired.

I made a product. The cat is the soul.

apps.apple.com/app/code-light/id6761744871`,
        tags: ['BuildInPublic', 'PixelArt', 'ClaudeCode', 'IndieDev', 'DesignDetail'],
      },
    ],
  },
  {
    id: 9,
    filename: '09-tutorial.png',
    title: '3 步教程',
    version: 'v10',
    dimensions: '1024×1536',
    score: 8.5,
    stars: 0,
    theme: '配对教程示意',
    description: '3 步弧形流程图：Mac 显示码 → iPhone 扫码 → 配对完成。',
    posts: [
      {
        platform: '小红书',
        primary: true,
        title: '📲 Code Light 配对 Mac，三步搞定（保姆级教程）',
        content: `收到很多朋友问"怎么配对" → 保姆级 3 步：

1️⃣ Mac 装 MioIsland
github.com/MioMioOS/MioIsland
打开后点"Pair iPhone" → 显示 QR + 6 位短码

2️⃣ iPhone 装 Code Light
App Store 搜「Code Light」
选"扫码"或"输 6 位码"

3️⃣ 扫一下或输入 → 1-3 秒完成 ✅
Mac 列表出现 = 配对成功

⚠️ MioIsland 必须 3.0.0+
⚠️ 多 Mac：每台 Mac 一个码，加一台 = 输一个码

3 天免费试用打开就送，不用绑卡`,
        tags: ['教程', 'ClaudeCode', 'Mac效率', '程序员', '独立开发', '保姆级教程'],
      },
      {
        platform: '公众号',
        primary: false,
        title: 'Code Light 配对教程（含常见问题排查）',
        content: `配对 Mac 三步走，超过 3 分钟没成功的请看排查清单：

Step 1：Mac 装 MioIsland 3.0.0+
Step 2：iPhone App Store 装 Code Light
Step 3：扫 QR 或输入 6 位短码

常见问题：
· "扫码没反应" → 检查 MioIsland 是否前台显示 QR
· "短码输错了" → 字母全部大写，区分 O / 0 和 I / 1
· "配对成功但看不到会话" → 等 5 秒，会话同步有最多 5 秒延迟
· "兑换码失败" → 100% 是 MioIsland 没升到 3.0.0+`,
        tags: ['ClaudeCode', '配对教程', '排错指南'],
      },
      {
        platform: '即刻',
        primary: false,
        title: '配对 = 3 步（即刻简版）',
        content: `Code Light 配对 3 步：

1. Mac 装 MioIsland 3.0.0+，打开点"Pair iPhone" → 出 QR + 6 位短码
2. iPhone App Store 装 Code Light，选扫码 / 输码
3. 1-3 秒 ✅

⚠️ MioIsland 必须 3.0.0+，否则兑换码也会失败。

要不要我录个视频版？需要的人点赞，凑够 10 个就拍。`,
        tags: [],
        circles: ['独立开发的日常', 'AI 探索站'],
      },
      {
        platform: '知乎',
        primary: false,
        title: 'Code Light + MioIsland 怎么配对？保姆级教程',
        content: `问：Code Light 怎么和 Mac 配对？

答：分 3 步，全程 1 分钟。

## Step 1：Mac 装 MioIsland

去 \`github.com/MioMioOS/MioIsland\` 下载 3.0.0+ 版本，安装到 /Applications/。打开后会在屏幕顶部刘海下方"探"出一个挂件，点击挂件菜单 → "Pair iPhone"。

会弹出一个 QR 码和一个 6 位字符短码（永久不变）。

## Step 2：iPhone 装 Code Light

App Store 搜「Code Light」，免费下载，开 App 即送 3 天免费试用。

## Step 3：扫码 or 输码

- 扫 Mac 屏幕上的 QR
- 或者手动输入 6 位短码
- 1-3 秒完成

之后 Mac 列表里就能看到刚配对的 Mac，点进去看 Claude Code 会话。

## 常见问题

⚠️ MioIsland 必须升到 3.0.0+，否则兑换码会失败（协议升级要求）。`,
        tags: ['ClaudeCode', '独立开发', 'iOS', 'Mac教程', 'AI编程'],
      },
    ],
  },
  {
    id: 10,
    filename: '10-banner.png',
    title: '横版 banner',
    version: 'v10',
    dimensions: '1536×1024',
    score: 9,
    stars: 1,
    theme: '公众号封面/Twitter pinned',
    description: '杂志感横版编排，左侧文字 + 右侧产品组合实景。',
    posts: [
      {
        platform: '公众号',
        primary: true,
        title: 'Code Light 上架 App Store：让 Claude Code 跟着你走（一个独立开发者的全栈复盘）',
        content: `Code Light 2.0 已上架 App Store。

这是我一个人写了 12 个月的 iOS + macOS + Server 全栈系统。让 Claude Code 在 Mac 和 iPhone 之间实时同步——Mac 上 AI 在跑，iPhone 灵动岛实时显示状态，离开电脑也能看 / 回复 / 批准。

本文拆解三件事：
1. 为什么"灵动岛 + 像素猫"是 Claude Code 的最佳载体
2. iOS / macOS / Server 三端技术决策
3. 上架后正在跑的「推广换长期试用」活动

3 天免费试用，App Store 搜「Code Light」即可下载。`,
        tags: ['ClaudeCode', '独立开发', 'iOSApp', '灵动岛', 'AI编程'],
      },
      {
        platform: 'Twitter',
        primary: false,
        title: 'Code Light is live (pinned banner)',
        content: `Code Light is live.

Built solo for a year. iOS + macOS + Server.
Native Swift everywhere, zero RN/Electron.

If you use Claude Code, this is what your Dynamic Island was made for.

apps.apple.com/app/code-light/id6761744871

(3 days free, no card)`,
        tags: ['BuildInPublic', 'ClaudeCode', 'iOS', 'DynamicIsland', 'IndieDev'],
      },
      {
        platform: '即刻',
        primary: false,
        title: '一年 solo dev 的产品复盘',
        content: `今天 Code Light 上架 App Store。

一个人 12 个月写完 iOS + macOS + Server 三端。
苹果审核来回 7 轮。

最大的几个技术决策：
1. iOS 端死磕原生 Swift，不用 React Native — ActivityKit + 触感反馈 + Live Activity 是 RN 做不好的
2. Mac 端做成"刘海挂件" — 比菜单栏更显眼，比悬浮窗更克制
3. Server 端零知识中继 — 我自己都看不到用户的代码和对话

如果你用 Claude Code，欢迎试 3 天免费。`,
        tags: [],
        circles: ['独立开发的日常', '产品安利社', 'AI 探索站'],
      },
      {
        platform: '微博',
        primary: false,
        title: '产品上架长文（微博版）',
        content: `🎉【独立开发者 1 年成果】Code Light 上架 App Store

我一个人写了 12 个月：
· iOS 端 Swift + SwiftUI + ActivityKit
· Mac 端 Swift + AppKit
· Server 端 Fastify + Socket.io + Prisma

让 Claude Code 在 Mac/iPhone 双端实时同步。

苹果审核 7 轮过了，今天终于能让大家用上 🙏

App Store 搜「Code Light」 / 3 天免费`,
        tags: ['独立开发', 'ClaudeCode', 'AI编程', 'iOS', '上架日记'],
      },
    ],
  },
  {
    id: 11,
    filename: '11-bedroom.png',
    title: '床头晨光',
    version: 'v10',
    dimensions: '1024×1536',
    score: 9.5,
    stars: 2,
    theme: '早晨场景',
    description: '床头柔光下 iPhone 锁屏 Live Activity，像素猫陪伴。',
    posts: [
      {
        platform: '小红书',
        primary: true,
        title: '🌅 早上睁眼第一件事：看 Claude 昨晚干到哪了',
        content: `作为程序员，最舒服的 AI 编程 setup 不是大屏幕，
而是床头那个 iPhone 📱

🌙 睡前：布置 Claude 一个大任务 → 关灯
🛌 半夜：Live Activity 静默推送"完成"
🌅 早晨：睁眼锁屏看像素猫陪着的会话总结

代码已经写完，测试也跑过。
我的工作只剩 review + merge ✅

这就是新一代独立开发体验。

搜「Code Light」试 3 天，看看适不适合你`,
        tags: ['程序员日常', 'ClaudeCode', 'AI编程', '晨间仪式感', '独立开发', 'Mac效率', '灵动岛', '自由职业'],
      },
      {
        platform: '即刻',
        primary: false,
        title: '"睡前布置 Claude，早晨收工"是真的',
        content: `最近一周的真实工作流：

🌙 睡前 30 分钟在床上用 iPhone 布置 Claude 任务
🌅 早晨醒来灵动岛已经显示"完成"
💼 起床 review + merge 收工

不是噱头，远程新建会话 + Live Activity 完成推送 + cmux 集成 全套打通。

Code Light 已上 App Store，搜「Code Light」试 3 天`,
        tags: [],
        circles: ['独立开发的日常', 'AI 探索站'],
      },
      {
        platform: '朋友圈',
        primary: false,
        title: '睡前布置 AI 工作（朋友圈版）',
        content: `最近最爽的体验：睡前 5 分钟在床上给 Claude 布置一晚的任务。

早晨醒来 → 锁屏看完成总结 → 起床 review → 收工 ✅

我做的 Code Light 让这件事变可能。App Store 搜得到，3 天免费试。

转发的朋友私我领 10 天兑换码 🎁`,
        tags: [],
      },
      {
        platform: '微博',
        primary: false,
        title: '"床头码农"新姿势',
        content: `🌅 程序员的新作息：

睡前 → iPhone 给 Claude 布置任务 → 关灯
半夜 → 灵动岛推送"完成"
早晨 → 锁屏看像素猫陪着的总结 → 起床收工

我做的 Code Light 让这件事变现实。
App Store 搜「Code Light」/ 3 天免费试用 🥹`,
        tags: ['程序员', 'AI编程', 'ClaudeCode', '独立开发', '生活方式'],
      },
    ],
  },
  {
    id: 12,
    filename: '12-desk.png',
    title: '办公工位',
    version: 'v10',
    dimensions: '1024×1536',
    score: 9,
    stars: 1,
    theme: '理想工位场景',
    description: 'MacBook 主屏 + iPhone 立桌角，灵动岛余光可见。',
    posts: [
      {
        platform: '即刻',
        primary: true,
        title: '理想工位 = MacBook 在跑 + iPhone 立旁边',
        content: `最近一直在跑长任务，发现一个反直觉的设置：

**iPhone 比 MacBook 第二屏更好用。**

· 立在桌角，灵动岛一直亮着
· 余光就能扫到 Claude 的状态
· 解锁就能回复一行 → 锁屏继续跑
· 不抢 MacBook 主屏的代码视野

这就是我做 Code Light 的初衷。
已上 App Store，搜「Code Light」`,
        tags: [],
        circles: ['独立开发的日常', 'Mac 效率', '我的极简办公'],
      },
      {
        platform: '朋友圈',
        primary: false,
        title: '理想工位（朋友圈版）',
        content: `分享我最近的理想工位 ✨

MacBook 在跑 Claude，iPhone 立桌角，灵动岛余光看着。
不用切屏，不用回头，AI 状态一直在视线里。

这就是我做的 Code Light，App Store 搜得到，3 天免费试。

转发支持的朋友私我领 10 天兑换码 🎁`,
        tags: [],
      },
      {
        platform: '小红书',
        primary: false,
        title: '💻 程序员的理想工位长这样',
        content: `💻 试了一周，这是我目前最满意的工位 setup

📍 MacBook：主屏跑代码 + Claude Code
📍 iPhone：立桌角，灵动岛一直亮
📍 余光：能看 Claude 状态，但不抢主屏视野

iPhone 比第二屏好用的原因：
✅ 解锁就能回复，比切屏快
✅ 灵动岛持续显示，比鼠标移过去看更轻
✅ 不会被代码编辑器全屏挡住

这就是我做 Code Light 的初衷 ✨

#工位分享 #程序员 #Mac效率 #独立开发 #ClaudeCode #极简办公 #效率工具`,
        tags: ['工位分享', '程序员', 'Mac效率', '独立开发', 'ClaudeCode', '极简办公', '效率工具'],
      },
      {
        platform: 'Twitter',
        primary: false,
        title: 'iPhone > second monitor',
        content: `Hot take: when running AI coding agents, iPhone propped on the desk beats a second monitor.

- Dynamic Island stays lit
- Peripheral vision picks up state changes
- Unlock to reply, no window switching
- Doesn't steal vertical screen real estate

This is why I built Code Light.

apps.apple.com/app/code-light/id6761744871`,
        tags: ['BuildInPublic', 'ClaudeCode', 'DevSetup', 'iOS', 'Productivity'],
      },
    ],
  },
  {
    id: 13,
    filename: '13-airport.png',
    title: '机场候机',
    version: 'v10',
    dimensions: '1024×1536',
    score: 9.5,
    stars: 2,
    theme: '出差远程场景',
    description: '机场候机厅 iPhone 屏幕显示远程会话启动，落地灯效果。',
    posts: [
      {
        platform: '小红书',
        primary: true,
        title: '✈️ 出差路上写代码？让 Claude 在家替你写',
        content: `候机 2 小时的真实操作 🛫

🛫 登机前：iPhone 点"+ 新建会话"
🖥️ 家里 Mac 立刻开新 cmux workspace
🤖 选预设跑 refactor 任务
📲 起飞后整段离线
✅ 落地开机 → 灵动岛全是绿色
🏨 酒店打开 MacBook → 代码写完，review + commit 收工

"人离机器没离 AI"
独立开发者的远程办公新姿势 ✨

搜「Code Light」试 3 天`,
        tags: ['出差日常', '远程办公', '程序员日常', 'ClaudeCode', 'AI编程', '独立开发', 'Mac效率', '数字游民'],
      },
      {
        platform: '朋友圈',
        primary: false,
        title: '出差也能让 AI 在家替你打工（朋友圈版）',
        content: `出差最大的痛点：Mac 不在身边 = 干等。

我做的 Code Light 解决了这个：
登机前 iPhone 触发 Mac 开新任务，飞行中离线，落地一开机灵动岛全是绿色 ✅

"人离机器没离 AI" 这件事，原来真的能成。

App Store 搜「Code Light」试用 3 天，转发的朋友私我领 10 天码 ✈️`,
        tags: [],
      },
      {
        platform: '即刻',
        primary: false,
        title: '机场候机也能推进项目',
        content: `今天在候机厅做的事：

iPhone Code Light → 点"+ 新建会话" → 选预设 "Claude --skip-perms + Chrome" → 选项目路径 → Launch

家里 Mac 上立刻开了一个新 cmux workspace 跑指定任务。

我什么都没做。等飞机时间在视频里。

落地一开 Mac，活儿干完了。`,
        tags: [],
        circles: ['独立开发的日常', '数字游民', 'AI 探索站'],
      },
      {
        platform: 'Twitter',
        primary: false,
        title: 'Remote-launch from the airport',
        content: `Boarded a 4-hour flight. Pulled out iPhone, hit "+ new session" in Code Light, picked a preset, picked a path, hit Launch.

A new cmux workspace started on my Mac at home. Claude refactored the auth module while I was offline.

Landed. Opened laptop. PR ready to review.

apps.apple.com/app/code-light/id6761744871`,
        tags: ['BuildInPublic', 'ClaudeCode', 'RemoteWork', 'DigitalNomad', 'IndieDev'],
      },
    ],
  },
];

// ============================================================
// 发布节奏建议（5/15-5/28 活动窗口）
// ============================================================
export const promoSchedule = [
  { date: '5/15 周五', platforms: 'Twitter + 即刻 + 朋友圈', theme: '上架公告',         imageIds: [1, 4] },
  { date: '5/16 周六', platforms: '小红书 + 微博',           theme: '灵动岛 + 像素猫种草', imageIds: [5, 8] },
  { date: '5/17 周日', platforms: '即刻 + 公众号',           theme: '技术深度（MioIsland 3.0）', imageIds: [2, 10] },
  { date: '5/18 周一', platforms: '小红书 + 朋友圈',         theme: '通勤场景情绪图',     imageIds: [7] },
  { date: '5/19 周二', platforms: '小红书 + 即刻',           theme: '推广活动卡',         imageIds: [3] },
  { date: '5/20 周三', platforms: '小红书 + 知乎',           theme: '3 步教程',           imageIds: [9] },
  { date: '5/21 周四', platforms: '小红书 + 朋友圈',         theme: '床头晨光',           imageIds: [11] },
  { date: '5/22 周五', platforms: '即刻 + 朋友圈',           theme: '办公工位',           imageIds: [12] },
  { date: '5/24 周日', platforms: '小红书 + 朋友圈',         theme: '机场候机（周末出行流量）', imageIds: [13] },
  { date: '5/26 周二', platforms: 'Twitter + 即刻',          theme: '数据复盘 + 末班车',   imageIds: [1, 3] },
];
