// ============================================================
// 平台颜色配置
// ============================================================
export const platformColors = {
  Twitter: { bg: '#e8f4fd', text: '#1d9bf0', border: 'rgba(29, 155, 240, 0.2)' },
  '小红书': { bg: '#fce8e8', text: '#ff2442', border: 'rgba(255, 36, 66, 0.2)' },
  V2EX: { bg: '#f0f0f0', text: '#1d1d1f', border: 'rgba(0, 0, 0, 0.1)' },
  '掘金': { bg: '#e8f4fd', text: '#007fff', border: 'rgba(0, 127, 255, 0.2)' },
  '即刻': { bg: '#fff3e0', text: '#ffc107', border: 'rgba(255, 193, 7, 0.2)' },
  '抖音': { bg: '#f0f0f0', text: '#1d1d1f', border: 'rgba(0, 0, 0, 0.1)' },
  YouTube: { bg: '#fce8e8', text: '#ff0000', border: 'rgba(255, 0, 0, 0.2)' },
  'Product Hunt': { bg: '#fff0e5', text: '#da552f', border: 'rgba(218, 85, 47, 0.2)' },
  '数据复盘': { bg: '#e8f5e9', text: '#34c759', border: 'rgba(52, 199, 89, 0.2)' },
  '版本更新': { bg: '#e8f5e9', text: '#34c759', border: 'rgba(52, 199, 89, 0.2)' },
};

export const angleLabels = {
  A: '双端系统',
  B: '像素猫',
  C: '技术亮点',
  D: '使用场景',
  E: '幕后故事',
  F: '隐性对比',
};

export const angleColors = {
  A: { bg: 'rgba(99, 102, 241, 0.15)', text: '#818cf8' },
  B: { bg: 'rgba(244, 114, 182, 0.15)', text: '#f472b6' },
  C: { bg: 'rgba(34, 211, 238, 0.15)', text: '#22d3ee' },
  D: { bg: 'rgba(163, 230, 53, 0.15)', text: '#a3e635' },
  E: { bg: 'rgba(251, 146, 60, 0.15)', text: '#fb923c' },
  F: { bg: 'rgba(192, 132, 252, 0.15)', text: '#c084fc' },
};

// ============================================================
// 内容日历默认排期
// ============================================================
export const defaultSchedule = {
  1: { platform: 'Twitter', note: '英文 - 角度轮换' },
  2: { platform: '小红书', note: '角度轮换' },
  3: { platform: 'Twitter', note: '英文 - 角度轮换 + 即刻' },
  4: { platform: '小红书', note: '角度轮换' },
  5: { platform: 'Twitter', note: '周报/数据分享' },
  6: { platform: '抖音', note: '如有余力' },
  0: { platform: '数据复盘', note: '下周规划' },
};

// ============================================================
// 文案库数据
// ============================================================
export const copywritingData = [
  // Twitter (英文, 5条)
  {
    id: 'tw-1',
    platform: 'Twitter',
    angle: 'A',
    title: '双端系统介绍',
    content: `There's a pixel cat living in my Mac's notch.

It watches Claude Code write code all day. When I leave my desk, another one wakes up on my iPhone.

MioIsland (Mac, open source) + Code Light (iPhone) = one system.

Your AI coding assistant, monitored from anywhere.`,
  },
  {
    id: 'tw-2',
    platform: 'Twitter',
    angle: 'C',
    title: '精准路由技术',
    content: `The hardest problem in remote CLI tools: sending a message to the RIGHT terminal window.

If you have 3 Claude Code sessions, most tools broadcast to all of them. Or worse — random.

Code Light does precise terminal routing. Message hits the exact window you're targeting.

This is why I built it instead of using the alternatives.`,
  },
  {
    id: 'tw-3',
    platform: 'Twitter',
    angle: 'D',
    title: '做饭工作流',
    content: `My actual workflow last night:

1. Asked Claude to refactor auth module
2. Went to kitchen to cook dinner
3. Phone buzzes — Claude needs to delete a file
4. Approved from Dynamic Island while stirring pasta
5. Came back, refactor done, tests passing

The future of coding is not sitting at your desk.`,
  },
  {
    id: 'tw-4',
    platform: 'Twitter',
    angle: 'E',
    title: '改名故事',
    content: `I named my app CodeIsland.

Someone with 10x my followers started posting about "CodeIsland" on Twitter. They got the SEO. I got confused DMs.

So I renamed it MioIsland. "Mio" means the pixel cat that lives in your notch.

Lesson: name your product something unGoogleable. Or at least check Twitter first.`,
  },
  {
    id: 'tw-5',
    platform: 'Twitter',
    angle: 'F',
    title: '灵动岛对比',
    content: `Hot take: Dynamic Island for Claude Code is table stakes now. Every dev tool has one.

What none of them have: controlling your Mac terminal from your iPhone.

Start sessions. Send slash commands. Approve tool calls. Attach photos.

The island is the display. The phone is the remote.`,
  },

  // 小红书 (中文, 5条)
  {
    id: 'xhs-1',
    platform: '小红书',
    angle: 'A',
    title: 'Mac刘海里养了只猫，它还会跟着你到iPhone上',
    content: `Mac 刘海 = 灵动岛，里面住着一只像素猫 🐱
它盯着 Claude 帮你写代码。

但你总不能一直盯着电脑吧？

所以我又做了个 iPhone 版。

✅ 手机上实时看 AI 写代码的进度
✅ 躺沙发上一键审批 Claude 的操作
✅ 出门在外也能远程启动新会话
✅ 拍张照发给 Claude 当参考

Mac 端叫 MioIsland，开源免费
iPhone 端叫 Code Light，App Store 在架

它们是一个系统。Mac 是大本营，iPhone 是遥控器。

开源地址私信我 📮`,
  },
  {
    id: 'xhs-2',
    platform: '小红书',
    angle: 'B',
    title: '给程序员养了只电子宠物，它住在Mac刘海里',
    content: `别人的 Mac 刘海是一条黑缝。
我的刘海里住着一只像素猫。

它叫 Mio，是 MioIsland 的吉祥物。

这只猫会做什么？
→ Claude 在写代码时，它趴在刘海上看
→ 代码出错了，它表情会变
→ 你可以给它换物种（18种可选）
→ 它有 5 项属性，会随着你写代码变化

重点：它不只是装饰。
点它可以看当前 AI 会话状态、跳转终端、切换任务。

免费开源。brew install 一行搞定。

想养猫的评论区扣 1 🐾`,
  },
  {
    id: 'xhs-3',
    platform: '小红书',
    angle: 'D',
    title: '做饭的时候Claude给我发消息，我用iPhone批准了',
    content: `真实场景：

下午 3 点，让 Claude 重构一个模块。
去厨房热饭。

手机震了一下。

看了眼灵动岛：Claude 要删除 3 个旧文件。
滑动审批，继续炒菜。

又震了一下。
Claude 要创建新目录。
审批。

饭热好了，回到电脑前。
重构完了。测试全过。

这不是未来。这是我每天的日常。

MioIsland（Mac端，免费开源）
Code Light（iPhone端，App Store）

发内容晒体验 = 免费用，私信我了解 📮`,
  },
  {
    id: 'xhs-4',
    platform: '小红书',
    angle: 'F',
    title: '用了3个Mac灵动岛工具，只留下了这个',
    content: `Mac 灵动岛工具现在一搜一大把。
我自己做了一个，也试了其他几个。

说说我为什么最后只用自己做的：

1. 光看不能用 → 看着挺好看，但只是个状态显示
   我的：点击可以跳转终端、切换会话

2. 发消息到随机窗口 → 开了 3 个终端，消息不知道飞到哪
   我的：精准路由，哪个窗口就是哪个窗口

3. 离开电脑就断了 → 只有 Mac 端
   我的：iPhone 远程控制，出门也能操作

4. 不开源 → 服务器黑盒，不放心
   我的：服务端开源，可自建，零知识中转

不点名。自己体验。

MioIsland 开源免费
Code Light App Store 在架`,
  },
  {
    id: 'xhs-5',
    platform: '小红书',
    angle: 'E',
    title: '我做的开源工具被别人截流了，所以我改名了',
    content: `做了一个 Mac 灵动岛工具叫 CodeIsland。
GitHub 270 star。

然后发现 Twitter 上有人也用 CodeIsland 这个名字发内容。
粉丝比我多。搜索结果排在我前面。
新用户以为那个才是正版。

一开始很生气。
后来想明白了——名字是我自己没保护好。

所以改名了：MioIsland。
Mio 是刘海里那只像素猫的名字。

独立开发者教训 #37：
起名之前先搜 Twitter。

新名字其实更好。有故事感。有品牌感。
一只叫 Mio 的猫，住在你的 Mac 刘海里。

你的独立开发有没有踩过类似的坑？评论区聊聊 💬`,
  },

  // 小红书 新增 (15条)
  // 生活场景类 x 4
  {
    id: 'xhs-new-1',
    platform: '小红书',
    angle: 'D',
    title: '我炒着菜审批了一次代码删除，Claude差点把我项目搞崩',
    content: `昨晚真实经历：

让 Claude 帮我重构登录模块，然后去炒菜。

油锅刚热，手机灵动岛弹了一下——
「Claude 请求删除 auth.swift」

我一手拿锅铲一手滑开 Code Light，点了审批。

又来一条：「Claude 请求创建 newAuth.swift」
审批。

炒完一盘番茄炒蛋，回到电脑前。
重构完成。测试全绿。

说实话，第一次批准删除文件的时候手抖了一下。
但精准路由保证消息发到对应窗口，不会误操作。

MioIsland（Mac端开源）+ Code Light（iPhone端）
让你的 AI 编程不必被绑在电脑前。

你们有没有在奇怪的场合写过代码？评论区聊聊

#AI编程 #程序员日常 #效率工具 #Mac效率 #远程办公`,
  },
  {
    id: 'xhs-new-2',
    platform: '小红书',
    angle: 'D',
    title: '地铁上看AI帮我写代码，旁边大哥以为我在看股票',
    content: `每天通勤 40 分钟地铁。

以前这段时间只能刷手机。
现在我会在出门前给 Claude 布置一个任务，
然后地铁上用 Code Light 盯进度。

iPhone 灵动岛实时显示：
🔵 思考中 → 🟢 写代码中 → 🟡 等待审批

有次旁边大哥探头看了一眼我手机，
大概以为我在看什么实时走势图。

其实是 AI 在帮我写接口。

到站的时候 Claude 刚好写完，
我在电梯里审批了最后一步。
到工位打开电脑，代码已经躺在那了。

通勤时间 = 编程时间，这才是效率。

App Store 搜 Code Light
Mac 端 MioIsland brew install 搞定

#程序员日常 #AI编程 #效率工具 #远程办公 #程序员的一天`,
  },
  {
    id: 'xhs-new-3',
    platform: '小红书',
    angle: 'D',
    title: '躺在沙发上指挥AI写代码，这才是我想要的生活',
    content: `周末下午。

沙发上。毯子盖着。猫趴在腿上。
我在用 iPhone 指挥 Claude 写代码。

具体操作：
1. Code Light 里选一个终端窗口
2. 发条消息：「帮我写个用户资料页面」
3. 灵动岛变蓝——Claude 开始思考
4. 变绿——开始写代码了
5. 变黄——要我审批创建文件
6. 滑一下，批准

全程没从沙发上起来。

有人问：为什么不直接去电脑前？
因为猫趴在我腿上，我不能动。（真的）

而且说实话，很多编程任务不需要你盯着看。
交给 AI 做，你只需要在关键节点审批一下。

MioIsland + Code Light
把编程从「坐在电脑前」变成「随时随地」

#AI编程 #程序员日常 #效率工具 #远程办公 #Mac效率 #智能编程`,
  },
  {
    id: 'xhs-new-4',
    platform: '小红书',
    angle: 'D',
    title: '跑步5公里，Claude帮我写完了一个功能',
    content: `这是我新发明的工作方式：运动编程法。

出门跑步前：
→ 给 Claude 一个明确任务
→ 戴上 AirPods 开跑

跑到第 2 公里：
→ 手腕震了一下
→ 看了眼手机灵动岛，Claude 在等审批
→ 停下来花 10 秒批准，继续跑

跑到第 4 公里：
→ 又一条审批请求
→ 这次是要安装一个依赖包
→ 批准，继续跑

跑完 5 公里回家：
→ 打开电脑，功能写好了
→ 跑步 + 编程一起完成

以前觉得「运动和工作不可兼得」
现在觉得 AI 时代不需要一直守着电脑

Code Light 让审批变成几秒钟的事
MioIsland 让 Mac 刘海变成状态监控器

有没有同款一边运动一边工作的？

#程序员日常 #AI编程 #效率工具 #远程办公 #程序员的一天`,
  },

  // 技术科普类 x 3
  {
    id: 'xhs-new-5',
    platform: '小红书',
    angle: 'C',
    title: '为什么你的AI消息总发错窗口？聊聊精准终端路由',
    content: `用 AI 编程的人大概都遇到过：

同时开了 3 个终端窗口，
给第 2 个窗口发消息，
结果跑到第 1 个窗口去了。

或者更惨——广播到所有窗口。

为什么会这样？
因为大部分工具不区分终端窗口。
对它们来说，终端就是终端，没有「第几个」的概念。

Code Light 做了一个叫「精准终端路由」的设计：

→ 每个终端窗口有自己的唯一 ID
→ 你在 iPhone 上选哪个窗口，消息就发到哪
→ 服务端只转发到匹配的连接，不广播
→ 支持 Terminal/iTerm2/Ghostty/Cursor 等 10+ 终端

听起来简单对吧？
但实现起来要处理：窗口切换、终端重启、网络断连重连……

这就是为什么别人没做这个功能。

技术细节想了解更多可以评论区问我

#AI编程 #开发者工具 #效率工具 #程序员日常 #Mac技巧`,
  },
  {
    id: 'xhs-new-6',
    platform: '小红书',
    angle: 'C',
    title: '你的代码经过别人的服务器了吗？聊聊零知识中转',
    content: `用远程控制工具的时候，有没有想过一个问题：

你的代码、你的终端内容，经过了谁的服务器？

很多远程工具的架构是这样的：
你的代码 → 服务器存储 → 另一端读取

服务器能看到你所有内容。

Code Light 用的是「零知识中转」：

→ 消息经过服务器，但服务器不存储内容
→ 只保留连接元数据（谁连了谁）
→ 消息体在传输层加密
→ Ed25519 签名认证，防篡改
→ 服务端完全开源，不放心可以自己搭

简单说：服务器是个邮递员，只负责送信，看不到信的内容。

对于程序员来说，代码安全不是可选项。
特别是公司项目，万一泄露了不是闹着玩的。

所以选远程工具，第一个问「服务端开不开源」。

有问题评论区聊

#AI编程 #程序员日常 #开源项目 #开发者工具 #效率工具`,
  },
  {
    id: 'xhs-new-7',
    platform: '小红书',
    angle: 'C',
    title: 'iPhone灵动岛能实时显示AI编程状态，怎么做到的？',
    content: `很多人看到我的 iPhone 灵动岛显示 AI 编程状态，
都问：这是怎么实现的？

简单科普一下 Dynamic Island 的工作原理：

iOS 有个叫 Live Activity 的功能，
App 可以在灵动岛和锁屏上显示实时信息。

Code Light 利用这个能力：
→ Mac 上的 MioIsland 监控 Claude Code 状态
→ 状态变化通过 WebSocket 推送到 iPhone
→ iPhone 更新 Live Activity
→ 灵动岛实时变化颜色和图标

蓝色 = AI 在思考
绿色 = AI 在写代码
黄色 = 等你审批
红色 = 出错了

整个延迟在 1 秒以内。

长按灵动岛还能展开看详情：
当前在哪个终端、做什么任务、进度如何。

不用打开 App 就能掌握 AI 的工作状态。

你们觉得灵动岛还能显示什么？评论区说说

#AI编程 #灵动岛 #效率工具 #科技好物 #开发者工具 #智能编程`,
  },

  // 情感共鸣类 x 3
  {
    id: 'xhs-new-8',
    platform: '小红书',
    angle: 'E',
    title: '一个人写了两个App一个服务器，独立开发者的真实日常',
    content: `大家看到的是：
MioIsland（Mac App）+ Code Light（iPhone App）+ 中转服务器

三个产品。

背后是：
一个人。

没有团队。没有投资。没有设计师。

我自己写 Swift 做 Mac 端。
自己写 SwiftUI 做 iPhone 端。
自己写 Node.js 做服务端。
自己画像素猫。
自己写文档。
自己做推广。
自己回 GitHub Issues。

有人问：你不累吗？

说实话，累。

但每次看到有人在 GitHub 上说
「这个工具改变了我的工作方式」
就觉得值了。

270 个 star，每一个背后都是真实用户。

独立开发不容易，但做出来的东西是自己的。

同为独立开发者的，评论区举个手

#独立开发者 #开源项目 #程序员日常 #代码人生 #AI编程`,
  },
  {
    id: 'xhs-new-9',
    platform: '小红书',
    angle: 'E',
    title: '从CodeIsland到MioIsland，改名背后的心酸故事',
    content: `给你们讲一个独立开发者的真实故事。

我做了一个 Mac 灵动岛工具，取名 CodeIsland。
上了 GitHub，拿了 270 star。

开心了两天。

第三天发现：
Twitter 上有个大V也在发「CodeIsland」相关内容。
粉丝量是我的十几倍。
搜 CodeIsland，他的内容排第一。

更难受的是，有人私信我：
「你是不是抄了 xxx 的 CodeIsland？」

没有。是我先做的。但谁在乎呢？

纠结了三天，决定改名。

新名字：MioIsland。
Mio = 灵动岛里那只像素猫的名字。

改名后反而更好了：
✅ 搜索没有竞争
✅ 名字有故事感
✅ 品牌辨识度更高

教训：起名之前一定要搜遍全网。

你有没有被「撞名」的经历？

#独立开发者 #开源项目 #程序员日常 #代码人生 #AI编程`,
  },
  {
    id: 'xhs-new-10',
    platform: '小红书',
    angle: 'E',
    title: 'GitHub 270 star，说多不多，但每一个我都记得',
    content: `有人说 270 star 不算什么。

确实，很多项目上千上万。

但对一个独立开发者来说，
270 个真实用户点了那颗星，
意味着：

→ 有 270 个人试了我的工具
→ 有一部分人每天在用
→ 有人提了 Issues 帮我改进
→ 有人发了 PR 贡献代码

记得第一个 star 是凌晨 2 点来的。
当时还在调 bug，看到通知差点从椅子上蹦起来。

记得第 100 个 star 那天。
一个日本开发者写了篇博客推荐 MioIsland。

记得第 200 个 star。
有人说「这是我见过对 Claude Code 支持最好的灵动岛工具」。

做开源不赚钱（MioIsland 完全开源）。
但这种被认可的感觉，比涨薪还开心。

你的开源项目有多少 star？评论区晒一晒

#开源项目 #独立开发者 #程序员日常 #代码人生 #AI编程`,
  },

  // 产品对比类 x 2
  {
    id: 'xhs-new-11',
    platform: '小红书',
    angle: 'F',
    title: '试了5个Mac灵动岛工具之后，说说真实感受',
    content: `最近 Mac 灵动岛工具突然多了起来。
作为一个自己也做了灵动岛工具的人，
我挨个试了一圈。

说说我的真实感受（不点名）：

工具 A：
✅ 界面很漂亮
❌ 只能显示状态，不能操作
❌ 不支持多终端窗口

工具 B：
✅ 功能挺多
❌ 消息会发到错误的终端窗口
❌ 不开源，不知道数据去了哪

工具 C：
✅ 开源
❌ 没有 iPhone 端
❌ 半年没更新了

工具 D：
✅ 有手机端
❌ 安卓的…我用 iPhone

说到底，灵动岛工具核心看三点：
1. 能不能精准控制多个终端
2. 离开电脑能不能继续用
3. 数据安全不安全

我做 MioIsland + Code Light 就是因为市面上没有同时满足这三点的。

你们在用哪个？评论区聊聊

#Mac效率 #AI编程 #效率工具 #程序员好物 #开发者工具`,
  },
  {
    id: 'xhs-new-12',
    platform: '小红书',
    angle: 'F',
    title: '为什么市面上的灵动岛工具都不够用，我自己做了一个',
    content: `去年开始用 Claude Code 写代码。

第一个痛点：不知道 AI 写到哪了。
→ 找了个灵动岛工具，解决了。

第二个痛点：开了 3 个终端，灵动岛只显示其中一个。
→ 换了个工具，还是一样。

第三个痛点：出门在外，完全断联。
→ 没有任何工具有手机端。

第四个痛点：不知道数据有没有经过别人的服务器。
→ 大部分工具不开源。

找了一圈，没有一个能全解决。

索性自己做：
→ MioIsland：Mac 灵动岛，开源
→ Code Light：iPhone 远程控制
→ 自研中转服务器，零知识架构，开源

现在这套组合用了几个月，
每天做饭、散步、通勤的时候都在用。

有时候解决痛点最快的方式就是自己做一个。

#程序员日常 #AI编程 #Mac效率 #独立开发者 #效率工具 #开发者工具`,
  },

  // 趣味互动类 x 3
  {
    id: 'xhs-new-13',
    platform: '小红书',
    angle: 'B',
    title: '18种像素宠物你选哪只？住在Mac刘海里的那种',
    content: `MioIsland 的灵动岛里可以养宠物。

不是普通宠物，是像素风的小家伙。

一共 18 种物种可选：
🐱 猫（默认款，经典）
🐶 狗
🐰 兔子
🐹 仓鼠
🐦 鸟
🐸 青蛙
🐼 熊猫
🦊 狐狸
……还有 10 种我不剧透了

每只宠物有 5 项属性：
→ 会随着你写代码而变化
→ 写得多，宠物状态越好
→ 长时间不写代码…它会寂寞的

重点是这只宠物不只是装饰！
→ 点它可以跳转到对应终端
→ 可以查看当前 AI 会话状态
→ 实用 + 有趣 两不误

来投个票：如果你养一只，你选什么物种？

评论区告诉我，选最多的我拿来当头像 🎨

#程序员好物 #Mac效率 #灵动岛 #科技好物 #AI编程 #效率工具`,
  },
  {
    id: 'xhs-new-14',
    platform: '小红书',
    angle: 'A',
    title: 'AI写代码最离谱的时刻，我先来',
    content: `用 Claude Code 这么久，
遇到过不少离谱时刻。

我先来几个：

1. 让它改一个按钮颜色，它把整个页面重写了
   → 灵动岛变绿的时间异常地长，我就知道不对劲

2. 让它修一个 bug，它说「我觉得这个功能不应该存在」然后删了
   → 幸好 Code Light 有审批，我及时拒绝了

3. 凌晨 2 点让它跑测试，它开始写诗
   → 灵动岛显示「AI 正在输出」但内容是一首关于代码的十四行诗

4. 同时开了 3 个窗口让它干不同的活
   → 结果它在第一个窗口里感叹「我好忙」

有了 MioIsland 的灵动岛实时监控 +
Code Light 的远程审批，
至少这些离谱时刻我能第一时间发现并制止。

你们遇到过什么离谱的 AI 编程时刻？
评论区比比谁的更离谱 👇

#AI编程 #程序员日常 #Claude #vibecoding #程序员的一天`,
  },
  {
    id: 'xhs-new-15',
    platform: '小红书',
    angle: 'A',
    title: '程序员的Mac刘海都装了啥？晒出你的灵动岛',
    content: `发现程序员的 Mac 刘海越来越卷了。

有人装了音乐播放器。
有人装了系统监控。
有人装了天气预报。

我装的是：一只像素猫 + AI 编程状态监控。

我的 Mac 刘海日常状态：
→ 像素猫趴在那，尾巴偶尔晃一下
→ Claude 开始工作时变成蓝色光晕
→ 代码写到一半需要审批时弹出提示
→ 点一下跳转到对应终端窗口

除了好看，它其实是个实用的控制面板：
→ 显示当前 AI 会话状态
→ 支持 10+ 终端（iTerm2/Ghostty/Cursor等）
→ 还有 Stats 插件显示系统信息

MioIsland 开源，brew install 一行搞定。

来晒晒你的 Mac 刘海装了什么？
评论区截图走起 📸

#MacBook #Mac效率 #灵动岛 #程序员好物 #Mac技巧 #效率工具`,
  },

  // V2EX (3条)
  {
    id: 'v2ex-1',
    platform: 'V2EX',
    angle: 'A',
    title: '[开源] MioIsland + Code Light：Mac 刘海灵动岛 + iPhone 远程控制 Claude Code',
    content: `各位 V 友好，分享一个我做的开源项目组合：

MioIsland（Mac 端）：在 Mac 刘海区域实现灵动岛效果，实时显示 Claude Code 会话状态，里面住着一只像素猫。

Code Light（iPhone 端）：远程控制 Mac 上的 Claude Code 终端。可以启动会话、发送命令、审批工具调用、附带照片。

两个 App 通过零知识中转服务器通信，服务端也开源，可自建。

技术栈：SwiftUI + Socket.io + PostgreSQL

GitHub 地址和 App Store 链接见正文。`,
  },
  {
    id: 'v2ex-2',
    platform: 'V2EX',
    angle: 'C',
    title: '如何实现 Claude Code 终端消息的精准路由（多窗口不串台）',
    content: `做 Code Light 时遇到的最大技术难题：当用户同时开了多个 Claude Code 终端窗口时，如何保证消息发送到正确的窗口？

大部分方案要么广播到所有窗口，要么随机选一个。

我的实现方案：基于终端会话 ID 的精准路由，每个窗口有唯一标识，消息携带目标 ID，服务端只转发到匹配的连接。

详细技术实现分享，欢迎讨论。`,
  },
  {
    id: 'v2ex-3',
    platform: 'V2EX',
    angle: 'E',
    title: '独立开发第 12 天：被同名项目截流后改名，GitHub 270 star 的复盘',
    content: `分享一下独立开发的经历：

原名 CodeIsland，做了个 Mac 灵动岛工具。上了 GitHub 拿到 270 star。

然后发现 Twitter 上有个粉丝比我多很多的人也在用 CodeIsland 这个名字。搜索结果他排第一。

改名 MioIsland。Mio 是灵动岛里那只像素猫的名字。

教训：起名前一定要搜 Twitter/Google/GitHub，确认没有同名项目。

现在反而觉得新名字更好，有品牌辨识度。`,
  },

  // 即刻 (3条)
  {
    id: 'jk-1',
    platform: '即刻',
    angle: 'E',
    title: 'MioIsland 开发日记 Day 12',
    content: `MioIsland 开发日记 Day 12 — 今天把 Codex 支持加上了

除了 Claude Code，现在 MioIsland 也支持 OpenAI Codex CLI 了。

灵动岛里的像素猫不挑 AI，谁写代码它都看。

下一步：支持更多 AI 编程工具的终端监控。`,
  },
  {
    id: 'jk-2',
    platform: '即刻',
    angle: 'B',
    title: '你见过 Mac 刘海里的猫吗？',
    content: `你见过 Mac 刘海里的猫吗？18 种物种可选

MioIsland 的灵动岛里住着一只像素宠物。默认是猫，但你可以换成狗、兔子、仓鼠……一共 18 种。

它会随着你写代码的状态变化表情和属性。

免费开源，brew install 即可。`,
  },
  {
    id: 'jk-3',
    platform: '即刻',
    angle: 'D',
    title: '发内容换免费活动',
    content: `发内容换免费活动 — 在任何平台发一条关于 MioIsland 或 Code Light 的内容

规则很简单：
1. 在任何社交平台发一条关于 MioIsland 或 Code Light 的内容
2. 截图发给我
3. 获得 Code Light 高级版兑换码

不限平台，不限形式，真实体验即可。`,
  },

  // 掘金 (3条)
  {
    id: 'jj-1',
    platform: '掘金',
    angle: 'C',
    title: 'macOS 灵动岛开发实战：从刘海到 Dynamic Island 的完整实现',
    content: `本文详细介绍如何在 macOS 上实现类似 iPhone Dynamic Island 的效果。

内容包括：
- macOS 刘海区域的坐标计算
- NSPanel 的配置和层级管理
- 动画效果的 SwiftUI 实现
- 与终端进程的通信方案

基于 MioIsland 开源项目的实际开发经验。`,
  },
  {
    id: 'jj-2',
    platform: '掘金',
    angle: 'C',
    title: 'Socket.io + PostgreSQL 实现零知识消息中转：Code Light 服务端架构',
    content: `Code Light 的服务端需要实现：Mac 和 iPhone 之间的实时消息中转，且服务器不存储任何消息内容（零知识）。

技术方案：
- Socket.io 实现双向实时通信
- PostgreSQL 仅存储连接元数据，不存消息体
- 基于会话 ID 的精准路由
- 端到端加密的消息传输

服务端完全开源，支持自建部署。`,
  },
  {
    id: 'jj-3',
    platform: '掘金',
    angle: 'D',
    title: '2026 年我的 Claude Code 工作流：Mac 灵动岛 + iPhone 远程控制',
    content: `分享我目前的 AI 辅助编程工作流：

核心工具：Claude Code（终端）+ MioIsland（Mac 灵动岛）+ Code Light（iPhone 远程控制）

日常场景：
- 在 Mac 上启动 Claude Code 任务
- 灵动岛实时显示进度和状态
- 离开电脑后用 iPhone 继续监控和操作
- 支持审批、发送命令、附带截图

效率提升的关键不是 AI 写得更快，而是你不需要一直守在电脑前。`,
  },

  // 小红书 痛点角度 (10条)
  {
    id: 'xhs-pain-1',
    platform: '小红书',
    angle: 'D',
    title: '用 Claude Code 写代码最烦的一件事',
    content: `你有没有这种体验：\n\n让 Claude 帮你写代码，写着写着你想看看邮件、查个文档、回个消息。\n\n然后你得 cmd+tab 切回终端看一眼——它写到哪了？\n再 cmd+tab 切回去继续干你的事。\n过一分钟又忍不住切回去看。\n\n反复横跳。心流全碎。\n\n我之前每天至少切 50 次窗口看 Claude 的进度。直到我把 Mac 刘海变成了状态监控器。\n\n现在 Claude 在干嘛，抬眼看一下刘海就知道：\n🔵 在思考\n🟢 在写代码\n🟡 等你审批\n\n不用切窗口，不打断任何事。\n\n而且点一下灵动岛就能跳转到对应终端窗口，需要操作的时候再过去。\n\nMioIsland，开源，brew install 一行搞定。\n支持 10+ 终端，iTerm2/Ghostty/Cursor 都行。\n\n#AI编程 #ClaudeCode #效率工具 #程序员日常 #Mac效率`,
  },
  {
    id: 'xhs-pain-2',
    platform: '小红书',
    angle: 'D',
    title: '每次Claude要审批我都得跑回电脑前',
    content: `Claude Code 用户一定懂这个痛：\n\n你让 Claude 去做一个大任务。\n它需要删文件、装依赖、创建目录，每一步都得你审批。\n\n问题是——你不可能一直坐在电脑前等着。\n\n去倒杯水回来，它等了你 3 分钟。\n去趟厕所回来，它等了你 8 分钟。\n接了个电话回来，它等了你 15 分钟。\n\n整个重构本来 20 分钟能完事，被你的"不在工位"拖成了一小时。\n\n后来我在 iPhone 上装了 Code Light。\n\n现在不管在哪，手机灵动岛一亮——Claude 要审批了。\n滑一下就批准，10 秒搞定，不用走回电脑前。\n\n去接水的时候批准过删文件。\n上厕所的时候批准过装依赖。\n甚至跑步的时候批准过创建目录。\n\n审批不应该把你绑在椅子上。\n\nApp Store 搜 Code Light\n\n#ClaudeCode #AI编程 #程序员日常 #效率工具 #远程办公`,
  },
  {
    id: 'xhs-pain-3',
    platform: '小红书',
    angle: 'D',
    title: '开了3个Claude终端，我已经分不清谁在做什么了',
    content: `多任务并行是 Claude Code 的正确用法。\n\n窗口 1：重构登录模块\n窗口 2：写单元测试\n窗口 3：修一个紧急 bug\n\n理论上很美好。\n\n实际操作：\n→ cmd+tab 看到一个终端在跑，是哪个任务？\n→ 切到下一个，这个又是哪个？\n→ 三个窗口长得一模一样，全是命令行\n→ 分不清、记不住、搞混了\n\n我被这个问题折磨了两周。\n\n现在用 MioIsland，灵动岛上直接显示每个会话的标签和状态。\n\n一眼就知道：\n→ 窗口 1 正在写代码（绿色）\n→ 窗口 2 等审批（黄色）\n→ 窗口 3 已完成（灰色）\n\n点哪个跳哪个，不用自己去记"刚才那个终端在第几个桌面"。\n\niPhone 上更直观，Code Light 列出所有活跃会话，每个状态一目了然。\n\n多任务不可怕，可怕的是管不住。\n\n#AI编程 #ClaudeCode #程序员日常 #效率工具 #Mac效率 #远程办公`,
  },
  {
    id: 'xhs-pain-4',
    platform: '小红书',
    angle: 'D',
    title: 'Claude跑完了你不知道，这才是最大的浪费',
    content: `你有没有这样的经历：\n\n让 Claude 做一个大任务，预计要跑十几分钟。\n你切去干别的了——刷了会手机、看了个视频、吃了个饭。\n\n回来一看：Claude 20 分钟前就跑完了。\n\n你白等了 20 分钟。\n或者说，你本可以 20 分钟前就开始下一个任务。\n\n这种"不知道它什么时候结束"的焦虑，比任务本身还累。\n要么一直盯着屏幕，要么错过完成时间。\n\n装了 MioIsland 之后：\n→ Claude 跑完的瞬间，灵动岛状态变化\n→ 配合 Code Light，iPhone 也会收到通知\n→ 你在任何地方都能第一时间知道"完事了"\n\n不用守着屏幕等，也不会错过完成时刻。\n\n时间是开发者最贵的资源，别浪费在"等"上面。\n\nMioIsland 开源免费，brew install 搞定\nCode Light App Store 在架\n\n#AI编程 #ClaudeCode #效率工具 #程序员日常 #Mac效率`,
  },
  {
    id: 'xhs-pain-5',
    platform: '小红书',
    angle: 'D',
    title: '想给Claude发张截图，但我在手机上',
    content: `这个场景真的经常遇到：\n\n在外面走路，突然想到一个 UI 问题。\n或者测试的时候手机上看到一个 bug。\n掏出手机拍了张截图。\n\n然后呢？\n\n以前的流程：\n1. 先把截图传到电脑（AirDrop/微信文件传输助手）\n2. 回到电脑前\n3. 打开终端\n4. 把图片路径粘贴给 Claude\n\n等你回到电脑，灵感已经凉了。\n\n现在用 Code Light：\n→ 手机上直接拍照\n→ 选一个终端窗口\n→ 照片直接发给 Claude\n→ Claude 立刻开始根据截图工作\n\n从"想到"到"执行"，30 秒。\n不用回电脑，不用传文件，不用等。\n\n特别适合前端开发——看到 UI 不对，拍一张直接让 Claude 改。\n\nApp Store 搜 Code Light\n\n#AI编程 #ClaudeCode #效率工具 #程序员日常 #远程办公 #前端开发`,
  },
  {
    id: 'xhs-pain-6',
    platform: '小红书',
    angle: 'D',
    title: 'Claude Code没有图形界面，纯靠终端我真的迷茫了',
    content: `刚开始用 Claude Code 的时候：\n\n打开终端，黑底白字。\n输入一条指令，开始跑。\n\n然后呢？\n\n它在干嘛？跑到哪了？还要多久？\n终端里刷了一堆文字，看不出个所以然。\n\n别的 AI 工具好歹有个界面——进度条、状态栏、高亮提示。\nClaude Code 就给你一个光标在那闪。\n\n我知道终端才是效率天花板。\n但能不能给个直观的状态提示？\n\n后来我做了 MioIsland：\n→ Mac 刘海变灵动岛\n→ 蓝色=思考、绿色=写代码、黄色=等审批、红色=出错\n→ 一眼就知道 Claude 在干嘛\n→ 还有只像素猫在上面趴着，给命令行加了点温度\n\n终端的效率 + 灵动岛的直觉。\n\n新手友好，老手省心。\n\n开源免费。brew install --cask xmqywx/codeisland/codeisland\n\n#ClaudeCode #AI编程 #效率工具 #程序员新手 #Mac效率 #灵动岛`,
  },
  {
    id: 'xhs-pain-7',
    platform: '小红书',
    angle: 'D',
    title: 'AI帮我写代码，但我得一直盯着屏幕？',
    content: `AI 编程的承诺是：解放程序员。\n\n现实是：\n你让 AI 写代码，然后你全程盯着它写。\n\n因为你不盯着——\n→ 它可能删错文件\n→ 它可能跑偏方向\n→ 它可能做完了你不知道\n→ 它可能等你审批等到超时\n\n所以你被钉在屏幕前，比自己写代码还累。\n\n这不叫"AI帮你写代码"，这叫"你帮AI看着它写代码"。\n\n我觉得正确的模式应该是：\n→ 布置任务 → 去干别的 → 关键节点收到通知 → 审批一下 → 继续干别的\n\n所以我做了 MioIsland + Code Light：\n→ Mac 灵动岛：余光就能看到 AI 状态，不用切窗口\n→ iPhone 远程：离开电脑也能监控和操作\n→ 精准通知：只在需要你的时候打扰你\n\nAI 编程的正确姿势是异步的，不是同步盯盘。\n\n#AI编程 #ClaudeCode #效率工具 #程序员日常 #远程办公 #程序员的一天`,
  },
  {
    id: 'xhs-pain-8',
    platform: '小红书',
    angle: 'D',
    title: '公司一台Mac家里一台Mac，Claude会话管理是噩梦',
    content: `有两台 Mac 的程序员应该懂：\n\n公司电脑上跑了几个 Claude Code 会话。\n回到家想继续？\n\n对不起，Claude Code 的会话在本地终端里，换台电脑就没了。\n\n以前我的做法：\n→ 下班前把进度记在备忘录里\n→ 回家打开电脑重新起一个会话\n→ 把上下文重新喂一遍\n→ 浪费 20 分钟恢复现场\n\n更惨的是，有时候家里电脑上的 Claude 跑着任务，你到了公司想看一眼进度——看不了。\n\n用了 Code Light 之后：\n→ iPhone 可以配对多台 Mac\n→ 公司 Mac 和家里 Mac 的会话都能在手机上看到\n→ 不管你人在哪，所有 Claude 会话一个 App 管完\n→ 还能远程给任意一台 Mac 发指令\n\n两台电脑，一个遥控器。\n\nApp Store 搜 Code Light\n\n#程序员日常 #AI编程 #远程办公 #效率工具 #Mac效率 #ClaudeCode`,
  },
  {
    id: 'xhs-pain-9',
    platform: '小红书',
    angle: 'D',
    title: 'Claude跑了一天，我完全不知道花了多少token',
    content: `用 Claude Code 有个隐形焦虑：\n\n你知道它在跑，但你不知道它在烧多少钱。\n\n特别是让它做大任务的时候——重构整个模块、写一套测试、做代码审查。\n跑了一下午，token 用了多少？API 费用多少？\n\n终端里不会告诉你。\n你得自己去 Dashboard 查，还不是实时的。\n\n就像打车不开计价器，到了目的地才知道多少钱。心慌。\n\n用了 MioIsland 之后：\n→ 灵动岛上能看到当前会话的 token 消耗\n→ 实时更新，跑着就能看到数字在涨\n→ 心里有数，该省的时候省，该花的时候花\n\n写代码可以大方，但花钱不能糊涂。\n\nMioIsland 开源免费\nbrew install 一行搞定\n\n#AI编程 #ClaudeCode #效率工具 #程序员日常 #Mac效率 #token`,
  },
  {
    id: 'xhs-pain-10',
    platform: '小红书',
    angle: 'D',
    title: '离开电脑=断开AI，这合理吗？',
    content: `2026 年了，AI 能帮你写代码、做测试、重构架构。\n\n但有一个荒谬的前提：你得坐在电脑前。\n\n一旦你离开工位：\n→ Claude 要审批？等你回来。\n→ Claude 写完了？你不知道。\n→ 想给 Claude 加个需求？走回去打字。\n→ 想看看进度？走回去看屏幕。\n\n你的 AI 助手很强，但它被困在你的 Mac 里。\n你一走开，它就变成了一个在终端里自言自语的程序。\n\n这不对。\n\nAI 编程应该是异步的：\n→ 布置任务后你可以去做任何事\n→ 需要你的时候手机通知你\n→ 手机上就能完成审批、发指令、看进度\n→ 回到电脑前，代码已经写好了\n\n这就是 MioIsland + Code Light 要解决的问题。\n\nMac 灵动岛 = 你在电脑前时的状态面板\niPhone App = 你不在电脑前时的遥控器\n\n编程不应该把你绑在椅子上。\n\nMioIsland 开源 | Code Light App Store 在架\n\n#AI编程 #ClaudeCode #远程办公 #效率工具 #程序员日常 #程序员的一天`,
  },

  // 小红书 - 共鸣型 (10条)
  {
    id: 'xhs-resonance-1',
    platform: '小红书',
    angle: 'E',
    title: '写代码最孤独的时刻是什么',
    content: `凌晨两点，整栋楼只有你的屏幕还亮着。\n\nClaude 在 thinking...，终端光标一闪一闪，你盯着它，像盯着一个沉默的朋友。\n\n那种感觉很奇怪——你不是一个人在写代码，但你确实是一个人。AI 不会问你"要不要休息一下"，也不会说"这个需求本来就不合理"。\n\n后来我给 Mac 刘海里塞了一只像素猫。\n\n它不会写代码，但它会趴在那，尾巴偶尔晃一下。Claude 跑任务的时候它会亮起蓝色光晕，像是在说"我在呢"。\n\n听起来很傻对吧。但凌晨两点的时候，有个东西在屏幕上动一下，真的会好一点。\n\n那只猫叫 Mio，住在一个叫 MioIsland 的开源工具里。\n\n你凌晨写代码的时候，是什么陪着你？\n\n#程序员日常 #独立开发 #凌晨coding #MioIsland #Mac效率`,
  },
  {
    id: 'xhs-resonance-2',
    platform: '小红书',
    angle: 'E',
    title: '独立开发者的日常其实是这样的',
    content: `你以为独立开发是这样的：\n坐在咖啡馆，戴着降噪耳机，优雅地敲代码，窗外阳光正好。\n\n实际上是这样的：\n边吃外卖边改 bug，手机上盯着 Claude 的进度，椅子上的衣服三天没收，刚想去洗澡发现 AI 又要审批了。\n\n没有产品经理催你，但 deadline 是自己定的，更狠。\n没有同事帮你 review，但 Claude 会在凌晨三点问你"要不要删这个文件"。\n\n这不是吐槽，是真心话：独立开发最难的不是技术，是你得同时当程序员、产品经理、设计师、测试、运营，还有——自己的老板。\n\n所以我给自己做了个"移动工位"：Mac 上 MioIsland 看状态，iPhone 上 Code Light 远程操作。至少吃外卖的时候不用跑回电脑前了。\n\n独立开发的朋友们，你们今天吃的什么外卖？\n\n#独立开发 #程序员日常 #一人公司 #CodeLight #远程办公`,
  },
  {
    id: 'xhs-resonance-3',
    platform: '小红书',
    angle: 'E',
    title: '为什么我不想回办公室了',
    content: `回办公室的第一天，我花了两个小时在通勤上。\n\n到了公司打开电脑，做的事情跟在家一模一样：开终端、跑 Claude、等结果、改代码。\n\n唯一的区别是，在家的时候 Claude 跑大任务我可以去做饭、遛狗、躺沙发上用手机看进度。在公司只能坐在工位上假装很忙地等着。\n\n后来我想明白了：回办公室不是为了工作效率，是为了让别人看见你在工作。\n\n现在我的工作流是这样的：\nMac 上开着 Claude Code，刘海里 MioIsland 实时显示状态。\n出门的时候切到 iPhone 上的 Code Light，审批、发命令、看进度，全程不断。\n\n效率比坐办公室高，但没人看见。\n\n你是更在意"真的高效"还是"看起来高效"？\n\n#远程办公 #在家办公 #程序员 #效率工具 #MioIsland #CodeLight`,
  },
  {
    id: 'xhs-resonance-4',
    platform: '小红书',
    angle: 'E',
    title: '程序员的安全感到底来自哪里',
    content: `不是高薪。涨薪的快乐撑不过两周。\n不是大厂。大厂也裁员。\n不是技术栈新。今年学的框架明年可能就没人用了。\n\n我现在的安全感来自一个很小的事：\n\n手机上随时能看到 Claude 在帮我跑测试。\n\n听起来荒谬，但想想看——你把一个复杂任务交给 AI，然后出门办事。以前你会焦虑：它跑到哪了？有没有出错？会不会改崩了什么？\n\n现在我手机灵动岛上实时显示状态：running... done... needs approval。\n一切在掌控中。\n\n这种"我知道发生了什么"的感觉，是我找到的最朴实的安全感。\n\n用的是 Code Light + MioIsland，一个 iPhone 端一个 Mac 端，感兴趣私信我。\n\n你的安全感来自哪里？评论区聊聊。\n\n#程序员 #安全感 #AI编程 #CodeLight #独立开发者`,
  },
  {
    id: 'xhs-resonance-5',
    platform: '小红书',
    angle: 'E',
    title: '你有没有对着终端发呆过',
    content: `Claude 在跑一个大重构。\n\n预计要十几分钟。\n\n你坐在电脑前，什么都做不了。切出去怕错过审批，盯着看又没什么可看的。就那么坐着，看光标闪啊闪。\n\n后来我算了一下，每天"等 AI"的时间加起来至少有一个小时。\n\n一个小时！我可以做饭、跑步、看半集剧、或者什么都不做地躺着。\n\n但我选择坐在电脑前发呆。\n\n转折点是我把 Claude 的进度搬到了手机上。\niPhone 灵动岛实时显示任务状态，需要审批会弹通知。\n\n现在 Claude 跑任务的时候，我终于可以站起来了。\n\n听起来是个小事，但"能离开椅子"这件事，改变了我整个工作节奏。\n\n工具叫 Code Light，App Store 能搜到。\n\n你等 AI 的时候在干什么？\n\n#AI编程 #ClaudeCode #程序员 #CodeLight #效率`,
  },
  {
    id: 'xhs-resonance-6',
    platform: '小红书',
    angle: 'E',
    title: '一个人到底能做多大的事',
    content: `说个让我自己都有点难以置信的事：\n\n我一个人写了一个 Mac App、一个 iPhone App、一个后端服务器。\n\n不是什么简单的 demo，是真上架、真能用的产品。Mac 端开源拿了 270 个 star，iPhone 端上架了 147 个国家的 App Store。\n\n这不是炫耀。说实话，过程很痛苦。一个人意味着每个角色都是你——写不动代码的时候还得画图标，画完图标还得写文案，写完文案还得回 GitHub issue。\n\n但这件事让我想明白了一个道理：\n\nAI 时代，"一个人能做什么"的上限被彻底改写了。\n\n以前一个人做两个 App 需要几个月，现在 Claude Code 帮你写、帮你改、帮你测，两周就能从想法到上架。\n\n瓶颈不再是"你会不会"，而是"你敢不敢开始"。\n\nMac 端叫 MioIsland（开源），iPhone 端叫 Code Light，感兴趣私信我。\n\n你有什么一直想做但还没开始的 side project？\n\n#独立开发 #一人公司 #sideproject #AI编程 #MioIsland`,
  },
  {
    id: 'xhs-resonance-7',
    platform: '小红书',
    angle: 'E',
    title: '每个程序员都有一个想做但没做的 side project',
    content: `你是不是也有一个记事本文件，里面写满了"以后想做的东西"？\n\n一个 App 的 idea。一个自动化脚本的构想。一个"如果我有时间就做"的项目。\n\n然后这个文件在那里躺了一年、两年、三年。\n\n我也是。直到我用 Claude Code 真的开始做了。\n\n从想法到 Mac App 上架，14 天。\n从灵动岛原型到 GitHub 开源，3 天。\n从"要不要做个 iPhone 端"到 App Store 审核通过，12 天。\n\n不是我变牛了，是 AI 把"从想法到产品"这条路缩短了 80%。\n\n你不需要是全栈大神。你只需要知道自己想做什么，然后告诉 Claude。\n\n我做的东西叫 MioIsland 和 Code Light。不完美，但它们存在了。\n\n比完美的计划更重要的是：你真的开始做了。\n\n你的那个 side project，是什么？\n\n#sideproject #程序员 #独立开发 #AI编程 #想做就做`,
  },
  {
    id: 'xhs-resonance-8',
    platform: '小红书',
    angle: 'E',
    title: '你的 Mac 刘海有在用吗',
    content: `说真的，MacBook 的刘海你平时看吗？\n\n我问了一圈朋友，99% 的回答是"就一个黑条啊，有什么好看的"。\n\n还有人说"已经自动忽略了，就像鼻子一样，大脑直接过滤掉了"。\n\n但你有没有想过，那其实是一块黄金位置——永远在屏幕最上方，你抬头就能看到。\n\n所以我往里面塞了一只猫。\n\n一只像素风格的小猫，趴在刘海上，尾巴偶尔晃一下。你不看它的时候它就静静待着，你看它的时候它偶尔会回头看你一眼。\n\n后来我给它加了功能：显示 Claude Code 的运行状态、切换终端窗口、显示系统信息。\n\n但说实话，最开始做它的原因就是：我想让那个黑条变得有趣一点。\n\n现在每次开机，第一眼看到的就是那只猫。每次抬头都会笑一下。\n\n工具叫 MioIsland，开源的，brew install 就行。\n\n你会想在刘海里放什么？\n\n#MacBook #Mac刘海 #灵动岛 #MioIsland #像素猫 #程序员好物`,
  },
  {
    id: 'xhs-resonance-9',
    platform: '小红书',
    angle: 'E',
    title: '远程办公第三年，我找到了最舒服的姿势',
    content: `不是人体工学椅。\n不是升降桌。\n不是那个被吹上天的屏幕灯。\n\n是——躺在沙发上，用手机操控 Mac 上的 AI 写代码。\n\n我知道这听起来像摆烂。但听我说完：\n\n以前远程办公，我逼自己坐书房、用外接屏、保持"办公室般的仪式感"。结果每天最痛苦的事不是写代码，是让自己坐到那张椅子上。\n\n后来我放弃了。\n\n早上赖在床上用手机给 Claude 发任务。\n中午在沙发上用手机审批代码。\n下午去咖啡馆，Mac 在家跑着，手机随时能看进度。\n\n效率反而比"端坐在书房"的时候高。\n\n因为瓶颈从来不是你坐在哪，而是你能不能随时开始工作。\n\n用的工具：Mac 上 MioIsland 看状态，iPhone 上 Code Light 远程操作。\n\n你远程办公的"最舒服姿势"是什么？\n\n#远程办公 #在家工作 #程序员日常 #CodeLight #效率工具`,
  },
  {
    id: 'xhs-resonance-10',
    platform: '小红书',
    angle: 'E',
    title: '给自己写的工具取名字的那一刻',
    content: `程序员应该都懂这种感觉：\n\n写了一个工具，功能做完了，突然到了"起名字"这一步。\n\n想了几十个名字，全被 npm/GitHub/App Store 占了。\n好不容易想到一个，搜一下发现有个大 V 在用同名项目。\n再想一个，太长了。再想一个，太技术了。\n\n最后我给它起了个名字叫 MioIsland。\n\nMio 是住在刘海里那只像素猫的名字。Island 是灵动岛。\n\n取完名字的那一刻，感觉不一样了。它不再是"我写的一个工具"，它变成了"我的作品"。\n\n后来每次在终端里输入 brew install mio-island，看到这个名字从屏幕上滚过去，心里都会想：\n\n这是我做的东西。\n\n不是什么大项目，270 个 star，一个人开发。但它有自己的名字、自己的猫、自己的故事。\n\n你给自己写的工具/项目起过什么名字？背后有什么故事？\n\n#程序员 #独立开发 #开源 #MioIsland #命名的艺术 #sideproject`,
  },
  // 抖音短视频脚本 (12条)
  {
    id: 'douyin-1',
    platform: '抖音',
    angle: 'D',
    title: '手机控制电脑写代码？',
    content: `【视频脚本】
画面1：手机屏幕特写，手指点击发送一条消息（0-3秒）
字幕：「用手机...控制电脑写代码？」
画面2：切到电脑屏幕，终端开始自动跑代码（3-8秒）
字幕：「Mac 上的 AI 收到指令，开始执行」
画面3：手机收到完成通知，灵动岛弹出像素猫动画（8-13秒）
字幕：「写完了，手机收到通知」
画面4：展示完整代码 diff，一行没手敲（13-18秒）
字幕：「全程没碰键盘」

【发布描述】
手机发指令，电脑自动写代码。这不是未来，是我每天的工作流。

#程序员 #AI编程 #效率工具 #远程办公 #ClaudeCode`,
  },
  {
    id: 'douyin-2',
    platform: '抖音',
    angle: 'D',
    title: '做饭时 AI 给我发消息',
    content: `【视频脚本】
画面1：厨房场景，正在炒菜，手机震动（0-3秒）
字幕：「做饭做到一半，AI 说要删个文件」
画面2：油烟中单手拿起手机，灵动岛显示审批请求（3-7秒）
字幕：「灵动岛弹出来了：要不要批准？」
画面3：大拇指点一下"批准"，放下手机继续炒菜（7-11秒）
字幕：「点一下，继续炒菜」
画面4：吃完饭回到电脑前，代码已经重构完毕（11-16秒）
字幕：「回来一看——代码重构完了，测试全过」

【发布描述】
炒着菜审批代码，这就是我说的"解放双手"。

#程序员做饭 #AI编程 #CodeLight #远程办公 #效率`,
  },
  {
    id: 'douyin-3',
    platform: '抖音',
    angle: 'D',
    title: '躺沙发指挥 AI 干活',
    content: `【视频脚本】
画面1：沙发视角，人躺着刷手机，看起来在摸鱼（0-3秒）
字幕：「室友以为我在刷抖音」
画面2：手机屏幕特写，其实在给 AI 发编程任务（3-7秒）
字幕：「其实我在远程操控 Mac 上的 Claude」
画面3：电脑屏幕亮着，代码在自动写（7-11秒）
字幕：「电脑在书房跑着，代码在自动写」
画面4：手机收到完成消息，竖个大拇指（11-15秒）
字幕：「任务完成。起身？不存在的」

【发布描述】
看起来在摸鱼，其实在用手机远程写代码。

#程序员日常 #摸鱼 #远程编程 #AI写代码 #躺平编程`,
  },
  {
    id: 'douyin-4',
    platform: '抖音',
    angle: 'A',
    title: 'Mac 刘海里住着一只猫',
    content: `【视频脚本】
画面1：MacBook 刘海区域特写，空空如也（0-2秒）
字幕：「你 Mac 的刘海，平时是不是浪费了？」
画面2：安装 MioIsland，像素猫从刘海里探出头（2-6秒）
字幕：「装上这个，刘海里住进一只猫」
画面3：AI 在写代码，猫在打字（6-10秒）
字幕：「AI 工作时，猫跟着一起敲代码」
画面4：AI 完成任务，猫变成爱心眼（10-14秒）
字幕：「任务完成，猫变成这样」
画面5：18种猫咪快速轮播（14-18秒）
字幕：「一共 18 种像素猫，每个 AI 会话随机一只」

【发布描述】
给 Mac 刘海装了只像素猫，它能实时显示 AI 编程状态。

#Mac #灵动岛 #像素猫 #MioIsland #程序员 #开源`,
  },
  {
    id: 'douyin-5',
    platform: '抖音',
    angle: 'B',
    title: '给我的 AI 养了只电子宠物',
    content: `【视频脚本】
画面1：打开终端，启动 Claude Code（0-3秒）
字幕：「每次启动 AI 编程助手」
画面2：刘海区域出现一只随机像素猫（3-6秒）
字幕：「刘海里就会蹦出一只像素猫」
画面3：快速展示 6 种不同形态的猫（思考、写代码、完成、报错等）（6-12秒）
字幕：「它有 6 种状态：思考、写码、等待、完成...」
画面4：展示稀有度——普通/稀有/传说（12-18秒）
字幕：「还有稀有度系统，传说级猫概率不到 5%」
画面5：集齐多只猫的收藏画面（18-22秒）
字幕：「你集齐了几只？」

【发布描述】
给 AI 养了只电子猫，它住在 Mac 刘海里，还有稀有度系统。

#电子宠物 #像素猫 #Mac #AI编程 #MioIsland #收藏`,
  },
  {
    id: 'douyin-6',
    platform: '抖音',
    angle: 'C',
    title: '3 个终端消息不会发错',
    content: `【视频脚本】
画面1：Mac 屏幕上同时开着 3 个 Claude Code 终端（0-3秒）
字幕：「同时开了 3 个 AI 编程窗口」
画面2：手机上显示 3 个会话列表，点击其中一个（3-7秒）
字幕：「手机上选第 2 个窗口发消息」
画面3：只有第 2 个终端收到消息并开始响应（7-12秒）
字幕：「只有第 2 个终端响应了，其他两个没动」
画面4：文字说明精准路由原理（12-16秒）
字幕：「精准路由，消息只到你指定的终端窗口」

【发布描述】
同时开 3 个 AI 终端，手机消息不会发错窗口。这才叫精准路由。

#程序员 #终端 #ClaudeCode #效率工具 #精准路由`,
  },
  {
    id: 'douyin-7',
    platform: '抖音',
    angle: 'F',
    title: '试了 5 个灵动岛工具',
    content: `【视频脚本】
画面1：Mac 刘海区域，文字弹出（0-3秒）
字幕：「试了 5 个 Mac 灵动岛工具」
画面2：快速闪过几个工具的界面（不露名字）（3-7秒）
字幕：「有的只能放音乐、有的只是装饰」
画面3：展示 MioIsland 的完整功能（7-15秒）
字幕：「只有一个真的能干活：看 AI 状态、管理会话、手机同步」
画面4：手机配合操作的画面（15-20秒）
字幕：「关键是：还能连手机远程操控」

【发布描述】
Mac 灵动岛工具试了一圈，只留下了这一个。

#Mac #灵动岛 #效率工具 #工具测评 #程序员`,
  },
  {
    id: 'douyin-8',
    platform: '抖音',
    angle: 'E',
    title: '一个人做了两个 App',
    content: `【视频脚本】
画面1：桌面场景，Mac + iPhone 并排（0-3秒）
字幕：「一个人，做了两个 App」
画面2：Mac 上展示 MioIsland 界面（3-7秒）
字幕：「一个给 Mac：在刘海里监控 AI 编程」
画面3：iPhone 上展示 Code Light 界面（7-11秒）
字幕：「一个给 iPhone：远程操控 AI 终端」
画面4：两个设备联动画面（11-16秒）
字幕：「两个 App 联起来，人在哪都能写代码」
画面5：GitHub star 数滚动 + 个人照片（16-20秒）
字幕：「独立开发第 30 天，270 star」

【发布描述】
一个人做了两个 App，一个给 Mac 一个给 iPhone。独立开发者的日常。

#独立开发 #程序员 #sideproject #MioIsland #CodeLight #开源`,
  },
  {
    id: 'douyin-9',
    platform: '抖音',
    angle: 'D',
    title: '地铁上查看 AI 写代码进度',
    content: `【视频脚本】
画面1：地铁车厢内，掏出手机（0-3秒）
字幕：「通勤路上，看看 AI 写到哪了」
画面2：手机打开 Code Light，显示当前任务进度（3-7秒）
字幕：「出门前让 AI 重构一个模块」
画面3：进度显示 80%，AI 在等审批（7-11秒）
字幕：「写了 80%，等我批准删一个旧文件」
画面4：点击批准，放回口袋（11-15秒）
字幕：「批了，到公司应该就写完了」

【发布描述】
地铁上看 AI 写代码进度，顺手批个权限。到公司代码就好了。

#通勤 #程序员 #AI编程 #远程办公 #地铁日常`,
  },
  {
    id: 'douyin-10',
    platform: '抖音',
    angle: 'D',
    title: '跑步回来代码写好了',
    content: `【视频脚本】
画面1：出门前对着 Mac 说任务，启动 Claude Code（0-3秒）
字幕：「出门跑步前，给 AI 安排个任务」
画面2：跑步画面 + 手机手臂带上 Code Light 通知闪过（3-8秒）
字幕：「跑步途中，手机一直有通知」
画面3：跑完回家，满头大汗看电脑（8-12秒）
字幕：「跑完 5 公里回来」
画面4：终端显示 All tests passed，代码已完成（12-16秒）
字幕：「代码写完了，测试全过」

【发布描述】
出门跑步 5 公里，回来代码写好测试全过。AI 时代的工作方式。

#跑步 #程序员 #AI编程 #效率 #运动 #ClaudeCode`,
  },
  {
    id: 'douyin-11',
    platform: '抖音',
    angle: 'A',
    title: '一个系统两个屏幕',
    content: `【视频脚本】
画面1：分屏画面——左边 Mac 右边 iPhone（0-3秒）
字幕：「一个系统，两个屏幕」
画面2：Mac 刘海里像素猫在写代码（3-7秒）
字幕：「Mac 上：AI 在刘海里写代码」
画面3：iPhone 上同步显示相同状态（7-11秒）
字幕：「iPhone 上：实时同步进度」
画面4：在 iPhone 上发送指令，Mac 上立刻响应（11-16秒）
字幕：「手机发指令，电脑秒响应」
画面5：两个设备的像素猫同时变成完成状态（16-20秒）
字幕：「任务完成，两只猫一起开心」

【发布描述】
Mac + iPhone 双屏联动，AI 编程状态实时同步。

#Mac #iPhone #双端联动 #MioIsland #CodeLight #程序员`,
  },
  {
    id: 'douyin-12',
    platform: '抖音',
    angle: 'C',
    title: '你的代码不经过任何人的服务器',
    content: `【视频脚本】
画面1：黑底白字大标题（0-3秒）
字幕：「你的代码，不经过任何人的服务器」
画面2：简笔画动画——手机 → 中转服务器 → 电脑，打叉（3-7秒）
字幕：「一般工具：手机 → 第三方服务器 → 电脑」
画面3：简笔画动画——手机 → 电脑，直连（7-11秒）
字幕：「Code Light：手机直连你自己的 Mac」
画面4：代码在本机终端运行的画面（11-15秒）
字幕：「代码只在你的电脑上跑，零知识中转」
画面5：对比表格——隐私、速度、离线可用（15-20秒）
字幕：「不上传、不存储、不经过第三方」

【发布描述】
你的代码只在你自己的电脑上跑，不经过任何人的服务器。零知识中转。

#隐私 #程序员 #数据安全 #CodeLight #开源 #零信任`,
  },
  // 版本更新文案 (5条)
  {
    id: 'changelog-1',
    platform: '版本更新',
    angle: 'C',
    title: 'MioIsland v1.0.0 发布',
    content: `【版本亮点】
· macOS 灵动岛 AI 编程助手首次发布
· 像素猫动画（6 种状态实时反映 AI 工作阶段）
· 8-bit 芯片音效系统
· 按项目分组管理多个 AI 会话
· cmux/Ghostty AppleScript 一键跳转终端
· 代码 diff 预览 + 权限审批弹窗

适合发布在：GitHub Release / V2EX / 掘金 / Twitter`,
  },
  {
    id: 'changelog-2',
    platform: '版本更新',
    angle: 'C',
    title: 'MioIsland v1.9.0-rc1 发布',
    content: `【版本亮点】
· Code Light iPhone 伴侣 App 初步集成
· Socket.io 实时通信：Mac 与 iPhone 双端联动
· 扫码配对流程 + 服务器连接 + 能力扫描
· Developer ID 签名（RC 版本）

适合发布在：GitHub Release / V2EX / 掘金 / Twitter`,
  },
  {
    id: 'changelog-3',
    platform: '版本更新',
    angle: 'C',
    title: 'MioIsland v2.0.1 发布',
    content: `【版本亮点】
· 完整插件系统 + 在线插件市场 miomio.chat/plugins
· 支持 URL 一键安装插件
· Stats 插件重新设计为报纸风格排版
· 关于页新增插件市场推广卡片

适合发布在：GitHub Release / V2EX / 掘金 / Twitter`,
  },
  {
    id: 'changelog-4',
    platform: '版本更新',
    angle: 'C',
    title: 'MioIsland v2.0.4 发布',
    content: `【版本亮点】
· 修复未签名二进制在 macOS Sonoma/Sequoia/Tahoe 上被 launchd 拒绝启动
· 发布时自动 ad-hoc 签名，Gatekeeper 不再报错
· 所有 macOS 14+ 用户不再需要手动处理签名问题

适合发布在：GitHub Release / V2EX / 掘金 / Twitter`,
  },
  {
    id: 'changelog-5',
    platform: '版本更新',
    angle: 'C',
    title: 'MioIsland v2.0.8 发布',
    content: `【版本亮点】
· 修复 iPhone Code Light 消息无法送达 Claude 终端的问题
· 修复 ps 输出截断导致找不到 cmux workspace
· 修复 Hardened Runtime 下 ps -E 无法读取环境变量
· 手机消息不再静默丢失，双端通信恢复稳定

适合发布在：GitHub Release / V2EX / 掘金 / Twitter`,
  },
  // 抖音图文 (10条)
  {
    id: 'douyin-img-1',
    platform: '抖音',
    angle: 'D',
    title: '用手机控制 AI 写代码是什么体验',
    content: `【图文内容】
图1：iPhone 灵动岛显示 Claude 正在工作的状态（封面，大字叠加「手机控制 AI 写代码？」）
图2：Mac 刘海灵动岛同步显示相同状态
图3：Code Light 手机端发消息界面，输入一条指令
图4：Mac 终端收到消息并开始执行
图5：执行完成，代码结果展示

【发布描述】
手机发一条消息，Mac 上的 Claude 就开始干活了。出门在外也能写代码，灵动岛实时显示进度，完成了手机会通知你。这不是概念片，是我每天在用的工具。MioIsland + Code Light，开源免费。

#AI编程 #程序员日常 #效率工具 #Claude #远程办公 #开发者工具`,
  },
  {
    id: 'douyin-img-2',
    platform: '抖音',
    angle: 'B',
    title: 'Mac 刘海里的 18 只像素宠物',
    content: `【图文内容】
图1：最可爱的像素猫特写，大字「Mac 刘海里养了 18 只猫」（封面）
图2：黑猫 + 橘猫 + 三花猫并排展示
图3：赛博猫 + 幽灵猫 + 骷髅猫暗黑系展示
图4：彩虹猫 + 星空猫 + 樱花猫少女系展示
图5：5 项属性面板截图（稀有度/性格/等级）
图6：不同状态下猫咪的动画变化
图7：你的猫是哪只？评论区告诉我

【发布描述】
Mac 刘海不是摆设，里面住着像素猫。18 个物种，每只性格不一样，还会根据 AI 工作状态变换动作。写代码的时候它陪你，摸鱼的时候它睡觉。你会选哪只？MioIsland 开源，GitHub 搜就有。

#MacBook #灵动岛 #像素猫 #程序员好物 #科技好物 #Mac效率`,
  },
  {
    id: 'douyin-img-3',
    platform: '抖音',
    angle: 'D',
    title: '程序员最爽的下班方式',
    content: `【图文内容】
图1：关电脑收拾东西的桌面（封面，大字「下班了，AI 还在加班」）
图2：路上手机灵动岛显示 Claude 正在工作
图3：到家了，手机弹出完成通知，灵动岛显示绿色爱心眼猫咪
图4：打开电脑，代码已经写好了，diff 预览干干净净
图5：一行没改直接合并的截图

【发布描述】
下班前丢给 Claude 一个重构任务，走人。路上灵动岛能看到进度，到家打开电脑代码已经写完了。程序员的被动收入是 AI 帮你加的班。MioIsland + Code Light 双端联动，开源。

#程序员的一天 #AI编程 #下班 #效率工具 #Claude #编程日常`,
  },
  {
    id: 'douyin-img-4',
    platform: '抖音',
    angle: 'C',
    title: '你的代码经过了谁的服务器？',
    content: `【图文内容】
图1：黑底大字「你的代码安全吗？」（封面）
图2：普通远程工具的数据流向图：手机 → 第三方服务器 → 电脑，标红「代码在别人服务器停留」
图3：MioIsland 的数据流向图：手机 → 加密中转 → 电脑，标绿「零知识，不存储」
图4：服务器代码开源截图 + 可自建说明
图5：对比表格：隐私/速度/可审计三项对比

【发布描述】
用远程工具操控 AI 写代码，你的代码经过了谁的服务器？很多工具会在第三方存一份。MioIsland 零知识中转，代码只在你自己电脑上跑，中转服务器不存储任何内容，而且开源可自建。安全不靠承诺，靠代码可查。

#数据安全 #开源 #程序员日常 #AI工具 #隐私 #开发者工具`,
  },
  {
    id: 'douyin-img-5',
    platform: '抖音',
    angle: 'F',
    title: 'Mac 灵动岛工具横评',
    content: `【图文内容】
图1：大字「试了 5 个 Mac 灵动岛工具，只留了 1 个」（封面）
图2：功能对比表（工具 A/B/C/D/MioIsland），维度：AI 联动/iPhone 同步/开源/像素宠物/终端路由
图3：MioIsland 独有功能——像素猫状态系统截图
图4：MioIsland 独有功能——iPhone Code Light 远程控制截图
图5：MioIsland 独有功能——精准终端路由演示截图
图6：结论：唯一同时做到 AI 编程联动 + 手机远程 + 开源的灵动岛工具

【发布描述】
Mac 灵动岛工具不少，但大多数只是显示个歌名或天气。真正能和 AI 编程联动、手机远程控制、还开源的，目前就 MioIsland 一个。不踩别人，只是需求不同。如果你用 Claude Code，可以试试。

#Mac效率 #灵动岛 #效率工具 #科技好物 #开源 #程序员好物`,
  },
  {
    id: 'douyin-img-6',
    platform: '抖音',
    angle: 'A',
    title: '一个系统两个屏幕',
    content: `【图文内容】
图1：Mac + iPhone 同框摆拍，灵动岛都亮着（封面，大字「一个系统，两个屏幕」）
图2：Mac 灵动岛显示 Claude 状态 + 像素猫
图3：iPhone 灵动岛同步显示相同状态
图4：手机端发出一条编程指令
图5：Mac 终端收到并执行，像素猫变成工作状态

【发布描述】
Mac 是大本营，iPhone 是遥控器。MioIsland 装在 Mac 上，Code Light 装在 iPhone 上，两个 App 组成一个系统。灵动岛同步状态，手机能发指令，Mac 负责执行。一个人开发的开源项目，GitHub 270 star。

#AI编程 #MacBook #效率工具 #独立开发者 #灵动岛 #开源`,
  },
  {
    id: 'douyin-img-7',
    platform: '抖音',
    angle: 'E',
    title: '独立开发 14 天的数据',
    content: `【图文内容】
图1：大字「一个人，14 天，两个 App」（封面）
图2：GitHub star 增长曲线截图，标注关键节点
图3：App Store 上架 Code Light 的截图
图4：用户好评反馈截图合集
图5：代码提交热力图，绿到发黑
图6：开发过程中的崩溃瞬间（bug 截图 + 修复记录）

【发布描述】
14 天从零做了两个 App：Mac 端 MioIsland 开源灵动岛，iPhone 端 Code Light 远程控制。GitHub 270 star，App Store 已上架。一个人全栈，没有团队没有融资。独立开发者的快乐就是这个：想做就做，做完就发。

#独立开发者 #开源 #程序员日常 #AI编程 #编程日常 #科技好物`,
  },
  {
    id: 'douyin-img-8',
    platform: '抖音',
    angle: 'D',
    title: 'AI 编程效率工具链分享',
    content: `【图文内容】
图1：大字「我的 AI 编程全套装备」（封面）
图2：Claude Code 终端界面截图，标注「大脑」
图3：MioIsland Mac 灵动岛截图，标注「状态监控」
图4：Code Light iPhone 端截图，标注「远程遥控」
图5：完整工作流程图：写需求 → Claude 执行 → 灵动岛监控 → 手机审批 → 代码完成

【发布描述】
分享我的 AI 编程工具链：Claude Code 负责写代码，MioIsland 在 Mac 刘海里显示实时状态，Code Light 让我用手机远程发指令和审批。三个工具串起来，写代码的效率直接翻倍。前两个开源，iPhone 端 App Store 能下。

#AI工具 #程序员好物 #效率工具 #Claude #AI编程 #开发者工具`,
  },
  {
    id: 'douyin-img-9',
    platform: '抖音',
    angle: 'D',
    title: '做饭 15 分钟，Claude 重构了整个模块',
    content: `【图文内容】
图1：厨房台面上放着手机，灵动岛亮着（封面，大字「做饭 15 分钟，代码重构完了」）
图2：出发前在终端启动 Claude 重构任务的截图
图3：厨房做饭中，手机灵动岛显示进度
图4：手机弹出审批请求，边炒菜边点同意
图5：回到电脑前，重构完成的 diff 预览截图

【发布描述】
给 Claude 下了个重构任务就去做饭了。炒菜的时候手机弹了个审批，看了眼 diff 点了同意。15 分钟后回来，整个模块重构干净了。这就是 AI 编程的正确打开方式：你做你的事，它做它的事。

#AI编程 #程序员的一天 #效率工具 #Claude #远程办公 #编程日常`,
  },
  {
    id: 'douyin-img-10',
    platform: '抖音',
    angle: 'C',
    title: '为什么我的消息不会发错终端',
    content: `【图文内容】
图1：大字「开了 3 个终端，消息精准到达」（封面）
图2：Mac 上同时开着 3 个 Claude Code 终端窗口的截图
图3：精准路由原理图解：每个终端有唯一 ID，消息按 ID 投递
图4：实际操作演示——手机选择目标终端 → 发送消息 → 只有对应终端收到
图5：对比图：广播模式（3 个都收到）vs 精准路由（只有 1 个收到）

【发布描述】
同时开 3 个 Claude Code 终端，用手机发消息，能精准送到你指定的那个窗口。不是广播，不是随机，是精准路由。每个终端有唯一标识，消息按标识投递。这个问题看似简单，但大多数远程工具都没解决好。

#AI编程 #开发者工具 #效率工具 #程序员日常 #科技好物 #开源`,
  },
  // ============================================================
  // 小红书 v2（20 条）
  // ============================================================
  {
    id: 'xhs-v2-1',
    platform: '小红书',
    angle: 'D',
    title: 'AI帮我写了8小时代码，我只看了3次手机',
    content: `真事。

周六早上 9 点，给 Claude 列了个需求清单：
重写设置页面 + 新增搜索功能 + 单元测试。

然后我就出门了。

第一次看手机：中午吃饭。
灵动岛绿色——在写代码。嗯，不管。

第二次：下午逛超市。
灵动岛黄色——需要审批删除旧文件。
超市走道里滑了一下，批准。

第三次：晚饭前。
灵动岛红色爱心眼猫——全部完成。

回家打开 Mac，2000 多行新代码，测试全绿。

8 小时里我做了什么？
逛街、做饭、看了半部电影。

MioIsland（Mac 开源）+ Code Light（iPhone）
让 AI 加班，你去生活。

你最长让 AI 连续工作过多久？评论区说说

#AI编程 #Claude Code #远程编程 #程序员日常 #效率工具 #Mac效率`,
  },
  {
    id: 'xhs-v2-2',
    platform: '小红书',
    angle: 'D',
    title: '下班后Claude还在加班，我在看电影',
    content: `下班前做了一件事：

打开 Code Light，给 Claude 发了条消息：
「把这 5 个 API 接口从 REST 迁移到 GraphQL」

然后关 Mac，走人。

路上灵动岛显示蓝色——Claude 在思考架构。
电影院坐下的时候变绿了——开始写代码。
电影中间震动一次——请求审批新文件，盲点批准。

电影结束出来一看：
5 个接口全部迁移完毕，还帮我写了迁移文档。

这就是我理解的「AI 时代的工作方式」：
你不需要盯着它干活，你需要的是一根线能连上它。

Code Light 就是那根线。

你下班后还会惦记代码吗？

#远程编程 #AI编程 #程序员的一天 #Claude Code #效率工具 #iPhone`,
  },
  {
    id: 'xhs-v2-3',
    platform: '小红书',
    angle: 'C',
    title: '为什么我的Claude Code从来不出错？因为我能实时看到它在干嘛',
    content: `不是 Claude 不出错。
是我能在它出错之前拦住它。

秘诀就一个：实时监控 + 精准路由。

MioIsland 在 Mac 灵动岛实时显示：
🔵 思考中（在规划方案）
🟢 写代码中（在执行）
🟡 等待审批（要删文件/改配置）
🔴 出错了（需要人工介入）

Code Light 在 iPhone 同步这些状态。

关键是「精准路由」——
我同时开 5 个终端窗口，每个跑不同项目。
消息不会发错窗口，审批不会批错项目。

很多人用 AI 编程翻车，不是 AI 不行，
是你根本不知道它在干嘛，等发现时已经来不及了。

你们用 AI 写代码有没有翻车经历？

#Claude Code #AI编程 #Mac灵动岛 #开发者工具 #编程效率 #程序员必备`,
  },
  {
    id: 'xhs-v2-4',
    platform: '小红书',
    angle: 'D',
    title: '带娃的时候顺手审批了5次代码权限',
    content: `当了爹之后最缺的就是整块时间。

以前写代码需要坐在电脑前 2-3 小时。
现在？碎片化到极致。

今天的记录：
10:15 — 换尿布间隙，审批 Claude 创建新模块 ✅
11:30 — 喂奶的时候，看了眼进度，在写测试 👀
13:00 — 哄睡着了，审批删除废弃文件 ✅
14:20 — 带娃下楼遛弯，审批数据库迁移 ✅
15:45 — 娃午睡醒来前，审批最后一次部署 ✅

5 次审批，每次不超过 10 秒。
全程没碰过电脑。

Code Light 的灵动岛推送太适合碎片时间了。
不用打开 App，滑一下就能批准。

有娃的程序员太需要这种工具了。

你们带娃的时候还能写代码吗？

#程序员奶爸 #AI编程 #远程办公 #Claude Code #效率工具 #iPhone`,
  },
  {
    id: 'xhs-v2-5',
    platform: '小红书',
    angle: 'A',
    title: 'Mac + iPhone双屏写代码是什么体验',
    content: `解锁了一种新工作方式：

Mac = 主力战场
iPhone = 远程遥控器

具体怎么配合？

Mac 上装 MioIsland（开源免费）
→ 灵动岛显示 AI 工作状态
→ 像素猫陪你写代码

iPhone 上装 Code Light
→ 远程发指令给 Claude
→ 实时看终端输出
→ 审批文件操作

两端通过安全通道同步，零知识架构——
服务器不存你的代码，只做消息中转。

最爽的场景：
Mac 放工位，人在会议室。
iPhone 看到 Claude 写完了，直接审批。
回到工位代码已经 ready。

这不是未来，这是我的日常。

你平时用什么设备组合写代码？

#Mac效率 #iPhone #AI编程 #双屏工作 #Claude Code #远程编程`,
  },
  {
    id: 'xhs-v2-6',
    platform: '小红书',
    angle: 'C',
    title: 'Claude Code用了3个月的经验：这些设置一定要改',
    content: `用 Claude Code 三个月，踩过的坑总结一下。

很多人装完就直接用，其实这些设置不改效率差很多：

1️⃣ 终端检测
MioIsland 自动检测 Ghostty/Warp/iTerm2 等 10 种终端
你不设置，默认终端可能漏消息

2️⃣ 审批权限
默认每个文件操作都要审批
建议：信任目录内自动批准，敏感目录手动

3️⃣ 多终端路由
开 3 个窗口，消息会发到哪个？
Code Light 的精准路由帮你选对窗口

4️⃣ 灵动岛状态
开了灵动岛才能第一时间知道 AI 在干嘛
关掉 = 盲人写代码

5️⃣ Buddy 系统
不只是好看，像素猫的状态就是 AI 的状态
猫睡觉 = 空闲，猫跑步 = 执行中

这些不改，Claude Code 只发挥了 60% 的能力。

你还有什么 Claude Code 使用技巧？评论区交流

#Claude Code #AI编程 #编程技巧 #效率提升 #Mac效率 #开发者工具`,
  },
  {
    id: 'xhs-v2-7',
    platform: '小红书',
    angle: 'D',
    title: '「周末躺了一天，代码写了2000行」不是我写的',
    content: `周末日报：

✅ 重构了用户模块（约 800 行）
✅ 新增推送通知功能（约 600 行）
✅ 补了 12 个单元测试（约 400 行）
✅ 修了 3 个遗留 bug（约 200 行）

我做了什么？

8:00 起床，给 Claude 布置第一个任务
8:05 继续睡
10:00 醒了看一眼手机，审批了两次
12:00 出门吃饭
14:00 回来刷剧，顺手审批
17:00 遛弯
20:00 打开 Mac 验收，全部搞定

2000 行代码，我大概打了 50 个字。

这不是懒，这是正确使用工具。

Code Light 让你随时随地审批和监控。
MioIsland 让你坐在电脑前也能一目了然。

你周末会让 AI 帮你干活吗？

#AI编程 #远程编程 #程序员周末 #Claude Code #效率工具 #程序员日常`,
  },
  {
    id: 'xhs-v2-8',
    platform: '小红书',
    angle: 'E',
    title: '从0到App Store上架只用了12天',
    content: `这是 Code Light 的时间线：

Day 1-2：确定方向——iPhone 远程控制 Claude Code
Day 3-4：核心功能——终端路由 + 消息推送
Day 5-6：UI 设计——灵动岛适配 + 状态动画
Day 7-8：安全架构——零知识加密 + 无代码存储
Day 9-10：测试打磨——兼容 147 个国家/地区
Day 11：提交 App Store 审核
Day 12：审核通过，正式上架

一个人。没有团队。没有投资。

用的就是 Claude Code 自己帮我写自己。
是的，用 AI 编程工具写了一个 AI 编程工具的控制端。

这可能是最「吃自己狗粮」的开发故事了。

Mac 端 MioIsland 开源，GitHub 270+ star
iPhone 端 Code Light，App Store 147 国上架

你有过最快的上架记录是多少天？

#独立开发 #App Store #AI编程 #一人公司 #程序员故事 #开发者`,
  },
  {
    id: 'xhs-v2-9',
    platform: '小红书',
    angle: 'B',
    title: '我Mac刘海里的猫今天换了个物种',
    content: `打开 MioIsland 的 Buddy 系统，
抽到了新猫——赛博猫 🤖

18 种像素猫，每只都不一样：
🐱 普通猫——温柔，陪你写日常代码
🐱 橘猫——贪吃，加载进度条是它吃鱼
🐱 三花猫——傲娇，出错时会翻白眼
🐱 赛博猫——酷炫，适合写算法
🐱 幽灵猫——深夜编程专用
🐱 彩虹猫——周五心情专用

每只猫有 5 项属性：
稀有度 ⭐ / 性格 / 等级 / 状态 / 进度条

而且猫的动作跟 AI 状态联动：
Claude 思考 → 猫歪头
Claude 写代码 → 猫跑步
Claude 完成 → 猫变爱心眼
Claude 报错 → 猫摊手

你说这刘海还是装饰吗？这是桌面宠物啊。

你最想要哪只猫？评论区选一只

#Mac灵动岛 #像素猫 #桌面宠物 #MacBook #程序员好物 #科技好物`,
  },
  {
    id: 'xhs-v2-10',
    platform: '小红书',
    angle: 'F',
    title: '用了6个Claude Code辅助工具，删了5个',
    content: `作为 Claude Code 重度用户，
我试过市面上能找到的所有辅助工具。

结论：删了 5 个，只留了 1 套。

删掉的问题：
❌ 工具 A：只能单向推送，不能操控
❌ 工具 B：消息广播，多终端会发错
❌ 工具 C：要把代码传到别人服务器（不放心）
❌ 工具 D：只有 Web 端，没有原生体验
❌ 工具 E：不开源，出了 bug 只能等更新

留下的是 MioIsland + Code Light：
✅ 双向操控——不只是看，还能发指令
✅ 精准路由——5 个终端不会发错
✅ 零知识架构——服务器不存代码
✅ Mac 原生灵动岛体验
✅ MioIsland 开源，代码全透明

不是广告，是真用了半年的结论。

你们在用什么 AI 编程辅助工具？好用吗？

#Claude Code #AI编程工具 #效率工具对比 #程序员测评 #开发者工具 #Mac效率`,
  },
  {
    id: 'xhs-v2-11',
    platform: '小红书',
    angle: 'D',
    title: '洗澡时Claude给我发通知说代码写完了',
    content: `程序员洗澡的正确方式：

1. 洗澡前给 Claude 布置任务
2. 把手机放浴室外面
3. 洗着洗着听到通知声
4. 擦手看一眼灵动岛——绿色爱心眼猫 ✅

代码写完了，测试也跑完了。

擦干头发，坐下来 review 一遍，直接合并。

以前洗澡前要犹豫「代码写到一半要不要先提交」。
现在？让 Claude 继续，我先洗。

Code Light 的推送通知太好用了。
完成、报错、需要审批——三种情况都会通知。

你不需要一直盯着，它会找你的。

洗澡时间的生产力，get ✓

你有没有在奇怪的时候收到代码通知？

#AI编程 #程序员日常 #Claude Code #效率工具 #远程编程 #程序员的一天`,
  },
  {
    id: 'xhs-v2-12',
    platform: '小红书',
    angle: 'C',
    title: '你的AI编程助手有灵动岛吗',
    content: `灵动岛不该只是放歌和导航。

如果你是程序员，灵动岛应该告诉你：
→ AI 在不在工作
→ 在做什么
→ 需不需要你操作

MioIsland 把 Mac 灵动岛变成 AI 控制台：

展开状态：
显示当前任务名 + 进度 + 像素猫动画

收起状态：
一个颜色点就知道全部——
🔵 思考 🟢 执行 🟡 等审批 ✅ 完成

长按：
直接跳转到对应终端窗口

iPhone 的 Code Light 也一样：
灵动岛实时同步 Mac 上的状态。

两个屏幕，两个灵动岛，一个 AI。

你的灵动岛平时都在显示什么？

#Mac灵动岛 #AI编程 #灵动岛玩法 #MacBook #开发者工具 #效率工具`,
  },
  {
    id: 'xhs-v2-13',
    platform: '小红书',
    angle: 'A',
    title: '手机一键启动Mac上的Claude，不用碰电脑',
    content: `场景：你在外面，突然想让 AI 帮你干个活。

以前：
❌ 远程桌面连回去 → 卡
❌ SSH 进去 → 麻烦
❌ 等回家再说 → 忘了

现在：
✅ 打开 Code Light
✅ 选一个终端窗口
✅ 发条消息
✅ Claude 开始工作

就这么简单。手机上操作，Mac 上执行。

而且不是盲发——
你能看到 Claude 的实时输出，
能看到它创建了什么文件，
能审批它的每一步操作。

安全性？零知识架构。
你的代码不会经过任何第三方服务器。

一部手机，控制一台 Mac。
这是 2026 年程序员该有的样子。

你出门在外会想远程写代码吗？

#远程编程 #iPhone #Claude Code #AI编程 #手机编程 #效率工具`,
  },
  {
    id: 'xhs-v2-14',
    platform: '小红书',
    angle: 'E',
    title: 'GitHub 270 star背后：一个人、两个App、无数个深夜',
    content: `MioIsland 在 GitHub 拿到 270 star 了。

说实话，每一颗 star 背后都有故事。

第 1 颗 star：
发布第一天，是个巴西开发者给的。
我激动得截了图。

第 50 颗 star：
有人提了第一个 Issue——
「能不能支持 Warp 终端？」
熬了一夜加上了。

第 100 颗 star：
被一个日本博主推了。
那天 star 涨了 40 多。

第 200 颗 star：
有人 fork 了去做 Linux 版。
开源的魅力就在这里。

第 270 颗 star：
此刻。还在路上。

一个人开发，14 天从 0 到双端上架。
没有团队，没有融资，就是想做个好用的工具。

感谢每一个点 star 的人。

你会为什么样的开源项目点 star？

#开源 #GitHub #独立开发 #程序员故事 #一人公司 #AI编程`,
  },
  {
    id: 'xhs-v2-15',
    platform: '小红书',
    angle: 'D',
    title: '坐高铁3小时，Claude帮我重构了整个项目',
    content: `北京到上海高铁，4.5 小时。

上车前：
打开 Code Light，给 Claude 发了个大任务——
「把整个项目从 MVC 重构成 MVVM」

上车后：
偶尔瞄一眼灵动岛。
🔵→🟢→🟡→🟢→🟡→🟢

中途审批了 8 次文件操作。
每次不超过 5 秒，滑一下就行。

最精彩的一次：
Claude 要删掉旧的 ViewController 文件夹。
37 个文件。
我在高铁上犹豫了 3 秒，还是批准了。

下车前 30 分钟：
灵动岛变成爱心眼猫——重构完成。
82 个文件改动，测试全绿。

到了酒店打开 Mac review 一遍。完美。

高铁时间 = 重构时间。
以前是浪费，现在是产能。

你在高铁上都做什么？

#程序员出差 #AI编程 #远程编程 #Claude Code #高铁 #效率工具`,
  },
  {
    id: 'xhs-v2-16',
    platform: '小红书',
    angle: 'F',
    title: '别人的灵动岛是装饰，我的是控制台',
    content: `Mac 灵动岛能干嘛？

普通人：
看个通知，放个音乐播放器。

我：
把它变成了 AI 编程控制台。

MioIsland 装上之后，灵动岛变成这样：

日常状态——像素猫在里面跑
Claude 思考——猫歪头，岛变蓝
Claude 写代码——猫奔跑，岛变绿
需要审批——猫举手，岛变黄
全部完成——猫变爱心眼

点一下展开：
看到当前任务、进度、终端窗口信息。

长按一下：
直接跳转到对应终端。

这才是灵动岛该有的样子。
不是花瓶，是真正能交互的控制面板。

你的灵动岛是装饰还是工具？

#Mac灵动岛 #MacBook #AI编程 #开发者工具 #效率工具 #Mac效率`,
  },
  {
    id: 'xhs-v2-17',
    platform: '小红书',
    angle: 'C',
    title: '开了5个终端窗口，消息从来没发错过',
    content: `同时跑 5 个项目是什么体验？

终端 1：前端 React 项目
终端 2：后端 Python API
终端 3：iOS Swift 项目
终端 4：数据库迁移脚本
终端 5：文档生成

每个终端都有 Claude 在跑。

问题来了：手机发一条消息，发到哪个终端？

大多数远程工具的做法：广播。5 个都收到。
结果？混乱。

Code Light 的做法：精准路由。

每个终端有唯一 ID。
手机上选目标终端 → 消息直达。
不会串，不会漏，不会错。

这个技术点看似简单，做对了才知道有多难。
（提示：不同终端类型的进程检测方式完全不同）

你同时开几个终端？

#Claude Code #AI编程 #开发者工具 #终端 #Mac效率 #编程效率`,
  },
  {
    id: 'xhs-v2-18',
    platform: '小红书',
    angle: 'B',
    title: '18种像素猫你集齐了几种？',
    content: `MioIsland 的 Buddy 系统是会上瘾的。

18 种像素猫，每只都有独特属性：

常见款 ⭐
黑猫 / 橘猫 / 白猫 / 灰猫

稀有款 ⭐⭐
三花猫 / 暹罗猫 / 虎斑猫

史诗款 ⭐⭐⭐
赛博猫 / 幽灵猫 / 骷髅猫

传说款 ⭐⭐⭐⭐
彩虹猫 / 星空猫 / 樱花猫

每只猫的性格不同，
写代码时的小动作也不同。

橘猫写代码会偷吃；
幽灵猫只在深夜出没；
彩虹猫 debug 时会变色。

最绝的是属性面板——
稀有度、性格、等级、状态都有数据卡片。

这不是灵动岛，这是宝可梦。

你集齐了几种？最想要哪只？

#像素猫 #Mac灵动岛 #桌面宠物 #MacBook #程序员好物 #科技好物`,
  },
  {
    id: 'xhs-v2-19',
    platform: '小红书',
    angle: 'D',
    title: '健身1小时回来，测试全绿',
    content: `程序员健身的最大阻碍是什么？
「代码还没写完，走不开。」

我的解法：

出门前 2 分钟：
打开 Code Light，给 Claude 发任务。
「帮我把这 3 个 TODO 处理掉，写完跑一遍测试」

健身中：
手臂训练间隙瞄一眼手表（Apple Watch 也能收推送）
灵动岛绿色——在干活。安心。

练完拉伸时：
手机灵动岛变黄——需要审批。
汗还没擦干，滑一下批准。

回家洗完澡：
灵动岛爱心眼猫——完成了。
打开 Mac，测试全绿。

健身时间 ≠ 停工时间。
不是你在摸鱼，是 AI 在加班。

你健身的时候会惦记代码吗？

#程序员健身 #AI编程 #远程编程 #Claude Code #效率工具 #程序员日常`,
  },
  {
    id: 'xhs-v2-20',
    platform: '小红书',
    angle: 'E',
    title: '我把产品名改了，反而火了',
    content: `Code Light 原来不叫这个名字。

最早叫「Claude Remote」。
直白，但没记忆点。

后来改成「CodeIsland」。
好听，但跟 Mac 端 MioIsland 太像，用户分不清。

再后来有人做了个同名工具。
我一怒之下全改了：

Mac 端：MioIsland（Mio = 我的，Island = 岛）
iPhone 端：Code Light（代码之光，轻量控制）

改完之后发生了什么？

1. App Store 搜索排名上升——名字独特，竞争少
2. 用户终于能分清两个 App 了
3. 品牌感出来了——一重一轻，一大一小

有时候被逼着改名，反而是好事。

产品命名踩过的坑，比写代码还多。

你觉得什么样的产品名好记？

#独立开发 #产品命名 #App Store #程序员故事 #创业 #一人公司`,
  },
  // ============================================================
  // 抖音图文 v2（20 条）
  // ============================================================
  {
    id: 'douyin-v2-1',
    platform: '抖音',
    angle: 'D',
    title: '程序员的 iPhone 屏幕里都有什么',
    content: `【图文内容】
图1：iPhone 主屏幕，Code Light 图标高亮，大字「程序员的手机长这样」（封面）
图2：打开 Code Light，终端列表页面，显示 3 个正在运行的项目
图3：进入某个终端，Claude 正在输出代码，实时滚动
图4：灵动岛特写——蓝色思考状态 → 绿色执行状态 → 黄色等审批
图5：审批操作演示——滑动批准删除旧文件
图6：完成状态——灵动岛变成爱心眼像素猫 + 推送通知

【发布描述】
你以为程序员手机里只有 GitHub 和 Stack Overflow？不，我的手机能直接控制 Mac 上的 AI 写代码。Code Light 让 iPhone 变成 Claude Code 的遥控器，灵动岛实时显示进度，走到哪都能写代码。App Store 搜 Code Light。

#程序员 #iPhone #AI编程 #Claude #远程办公 #开发者工具`,
  },
  {
    id: 'douyin-v2-2',
    platform: '抖音',
    angle: 'D',
    title: '上班摸鱼其实在远程写代码',
    content: `【图文内容】
图1：办公室场景，同事在聊天，你在看手机，大字「摸鱼？不，在写代码」（封面）
图2：手机屏幕特写——Code Light 界面，Claude 正在执行任务
图3：灵动岛状态变化时间线：9:15 发任务 → 9:30 在写 → 10:00 要审批
图4：开会时手机放桌上，灵动岛黄色闪烁，偷偷滑一下批准
图5：中午休息打开 Mac，代码全写好了，diff 预览干净整齐
图6：Before/After 对比——以前整天坐电脑前 vs 现在碎片时间搞定

【发布描述】
看起来在摸鱼其实在远程指挥 AI 写代码。开会、吃饭、聊天的间隙，手机灵动岛实时显示 Claude 的工作状态。需要审批就滑一下，不需要就放着。回到工位代码已经 ready。这叫什么？这叫效率。

#程序员日常 #摸鱼 #AI编程 #远程办公 #效率工具 #Claude`,
  },
  {
    id: 'douyin-v2-3',
    platform: '抖音',
    angle: 'C',
    title: 'Mac 刘海的 6 种玩法',
    content: `【图文内容】
图1：Mac 刘海特写，MioIsland 灵动岛展开状态，大字「刘海不是装饰」（封面）
图2：玩法1 — AI 状态监控：蓝/绿/黄/红四色含义图解
图3：玩法2 — 像素猫养成：展示 3 只不同稀有度的猫
图4：玩法3 — 终端快捷跳转：长按灵动岛直达终端
图5：玩法4 — 进度追踪：展开状态显示任务名+进度条
图6：玩法5 — 审批面板：需要权限时灵动岛变黄，点击展开审批
图7：玩法6 — 完成庆祝：爱心眼猫 + 音效反馈

【发布描述】
Mac 刘海除了挡光线还能干嘛？装上 MioIsland 之后有 6 种玩法：AI 状态监控、像素猫养成、终端跳转、进度追踪、审批面板、完成庆祝。每个功能都有实际用途，不是花瓶。开源免费，GitHub 搜 MioIsland。

#MacBook #灵动岛 #Mac效率 #AI编程 #开发者工具 #程序员好物`,
  },
  {
    id: 'douyin-v2-4',
    platform: '抖音',
    angle: 'A',
    title: '一部手机管 3 台 Mac',
    content: `【图文内容】
图1：一部 iPhone 放中间，三台 Mac 排列在周围，大字「1 部手机管 3 台 Mac」（封面）
图2：Code Light 设备列表页——显示公司 Mac / 家里 Mac / 服务器 Mac
图3：切换到公司 Mac，查看前端项目 Claude 运行状态
图4：切换到家里 Mac，给后端项目发新指令
图5：切换到服务器 Mac，审批数据库迁移操作
图6：三台 Mac 灵动岛同时显示不同状态的合成图
图7：总结图：一部 iPhone = 所有 Mac 的遥控器

【发布描述】
公司一台 Mac 跑前端，家里一台跑后端，还有一台当服务器。一部 iPhone 全管了。Code Light 支持多设备切换，每台 Mac 上的 Claude 独立运行，手机随时切换查看和操控。精准路由保证消息不会发错机器。

#iPhone #Mac #远程办公 #AI编程 #多设备 #程序员效率`,
  },
  {
    id: 'douyin-v2-5',
    platform: '抖音',
    angle: 'D',
    title: '外卖到了，代码也写完了',
    content: `【图文内容】
图1：外卖放桌上还在冒热气，Mac 屏幕显示代码写完，大字「外卖到了 代码也好了」（封面）
图2：时间线 — 12:00 点外卖 + 给 Claude 发任务
图3：12:15 灵动岛绿色——Claude 在写代码，你在刷手机等外卖
图4：12:28 外卖到了，灵动岛还是绿色——还在写
图5：12:35 吃到一半，灵动岛变黄——需要审批，筷子放下滑一下
图6：12:45 吃完收拾，灵动岛爱心眼猫——代码写完了，打开 Mac 验收

【发布描述】
点外卖的同时给 AI 布置任务。外卖 30 分钟到，代码也差不多写完了。吃饭时间不是停工时间，灵动岛让你随时知道进度。外卖和代码同时到手的感觉，懂的都懂。

#程序员日常 #外卖 #AI编程 #Claude #效率工具 #程序员的一天`,
  },
  {
    id: 'douyin-v2-6',
    platform: '抖音',
    angle: 'B',
    title: '给 AI 养了只猫，它住在屏幕上',
    content: `【图文内容】
图1：Mac 灵动岛里像素猫的超近距离截图，大字「这只猫住在我的刘海里」（封面）
图2：猫的日常状态合集——跑步/歪头/睡觉/举手/爱心眼 5 种动作
图3：18 种猫的全家福排列——从常见到传说
图4：数据卡片特写——稀有度 ⭐⭐⭐ / 性格：傲娇 / 等级：Lv.12
图5：猫和 AI 状态联动演示——Claude 思考时猫歪头，写代码时猫跑步
图6：深夜编程场景——幽灵猫在灵动岛若隐若现
图7：投票图：「你想养哪只？评论区选」

【发布描述】
Mac 刘海里住着一只像素猫。18 个物种，每只性格不一样。它的动作和 AI 工作状态联动——Claude 思考它就歪头，写代码它就跑步，完成了它就变爱心眼。不只是好看，一眼就知道 AI 在干嘛。MioIsland 开源免费。

#像素猫 #MacBook #灵动岛 #桌面宠物 #程序员好物 #科技好物`,
  },
  {
    id: 'douyin-v2-7',
    platform: '抖音',
    angle: 'F',
    title: '灵动岛工具红黑榜',
    content: `【图文内容】
图1：大字「灵动岛工具红黑榜」红色和黑色分栏（封面）
图2：黑榜 — 纯装饰类：只显示天气/时钟，没有交互，用两天就关了
图3：黑榜 — 广播类远程工具：消息发到所有终端，分不清谁是谁
图4：黑榜 — 云端存储类：代码传到别人服务器，安全堪忧
图5：红榜 — MioIsland：真正能交互的灵动岛，AI 状态实时显示
图6：红榜对比细节：精准路由 vs 广播、零知识 vs 云存储、开源 vs 闭源
图7：总结图：选工具三要素——能交互、够安全、可验证

【发布描述】
用过很多灵动岛工具，分享一下红黑榜。黑榜：纯装饰没交互的、消息广播分不清终端的、要上传代码到云端的。红榜：能实时显示 AI 状态、精准路由不串台、零知识架构不存代码、而且开源可验证。你在用哪个？

#灵动岛 #工具测评 #Mac效率 #AI编程 #开发者工具 #红黑榜`,
  },
  {
    id: 'douyin-v2-8',
    platform: '抖音',
    angle: 'E',
    title: '12 天从想法到上架的全过程',
    content: `【图文内容】
图1：时间轴从 Day 1 到 Day 12，大字「12 天，从 0 到 App Store」（封面）
图2：Day 1-2 — 确定方向：手绘草图 + 需求笔记截图
图3：Day 3-6 — 核心开发：代码编辑器截图 + Claude Code 终端输出
图4：Day 7-8 — 安全架构：零知识加密原理简图
图5：Day 9-10 — 打磨测试：多设备测试场景照片
图6：Day 11 — 提交审核：App Store Connect 截图
图7：Day 12 — 审核通过：上架成功通知 + 147 国可用

【发布描述】
12 天从一个想法做到 App Store 上架 147 个国家。一个人，没团队，用 Claude Code 帮我写 Claude Code 的控制端。Day 1 画草图，Day 6 核心功能跑通，Day 11 提交审核，Day 12 通过。独立开发的速度可以很快。

#独立开发 #App Store #AI编程 #程序员故事 #一人公司 #创业`,
  },
  {
    id: 'douyin-v2-9',
    platform: '抖音',
    angle: 'C',
    title: 'AI 写代码时你的手机在显示什么',
    content: `【图文内容】
图1：iPhone 灵动岛特写，显示蓝色 AI 状态，大字「AI 在写代码，你手机知道吗」（封面）
图2：状态1 — 蓝色脉冲：Claude 在思考，规划方案（猫歪头）
图3：状态2 — 绿色流动：Claude 在写代码，输出中（猫跑步）
图4：状态3 — 黄色闪烁：需要审批文件操作（猫举手）
图5：状态4 — 红色警告：出错了需要人工介入（猫摊手）
图6：状态5 — 绿色爱心：全部完成（猫变爱心眼）
图7：一张图总结 5 种状态 + 颜色 + 猫的表情

【发布描述】
当 AI 在 Mac 上写代码的时候，你的 iPhone 灵动岛在同步显示 5 种状态：思考、执行、等审批、报错、完成。每种状态对应一种颜色和一只像素猫的表情。不用打开 App，看一眼灵动岛就知道 AI 在干嘛。Code Light 让你和 AI 永远在线。

#AI编程 #iPhone #灵动岛 #Claude #远程编程 #开发者工具`,
  },
  {
    id: 'douyin-v2-10',
    platform: '抖音',
    angle: 'D',
    title: '咖啡还没凉，bug 已经修完了',
    content: `【图文内容】
图1：一杯热咖啡冒着热气 + Mac 屏幕上代码，大字「咖啡没凉 bug 修好了」（封面）
图2：9:00 发现 bug — 错误日志截图 + 红色报警
图3：9:02 给 Claude 发指令 —「修复这个空指针异常」
图4：9:05 灵动岛绿色 — Claude 在定位问题和写修复代码
图5：9:12 灵动岛黄色 — 需要审批修改 3 个文件，滑一下批准
图6：9:18 灵动岛爱心眼 — 修复完成，测试通过，咖啡还是热的

【发布描述】
发现 bug 到修完只要 18 分钟。给 Claude 描述问题，它自动定位、修复、跑测试。灵动岛全程显示进度，需要审批滑一下就行。咖啡都没凉 bug 就修好了。以前 debug 半天的活，现在一杯咖啡的时间。

#程序员 #debug #AI编程 #Claude #效率工具 #程序员日常`,
  },
  {
    id: 'douyin-v2-11',
    platform: '抖音',
    angle: 'A',
    title: '这可能是 iPhone 最极客的用法',
    content: `【图文内容】
图1：iPhone 举在手上，屏幕显示终端代码输出，大字「iPhone 最极客的用法」（封面）
图2：普通人的 iPhone — 社交、视频、游戏、购物
图3：程序员的 iPhone — Code Light 终端列表 + 实时代码输出
图4：操作演示1 — 手机选终端 → 发指令 → Claude 开始工作
图5：操作演示2 — 灵动岛监控 + 审批操作
图6：操作演示3 — Slash 命令：/cost 查花费、/model 切模型
图7：总结：一部 iPhone = 便携 AI 编程终端

【发布描述】
iPhone 除了刷视频还能干嘛？用 Code Light 把它变成 AI 编程遥控器。远程控制 Mac 上的 Claude Code，实时看终端输出，审批文件操作，还能用 Slash 命令切模型、查花费。147 个国家可用，App Store 搜 Code Light。

#iPhone #极客 #AI编程 #程序员 #科技好物 #Claude`,
  },
  {
    id: 'douyin-v2-12',
    platform: '抖音',
    angle: 'C',
    title: '服务器不存你的代码，怎么做到的',
    content: `【图文内容】
图1：大字「你的代码安全吗？」+ 锁头图标（封面）
图2：普通远程工具架构图——代码上传到云端服务器 → 服务器能看到一切 ⚠️
图3：Code Light 零知识架构图——服务器只做消息中转，不存储任何代码内容
图4：技术细节1 — 端到端加密：消息在手机上加密，Mac 上解密
图5：技术细节2 — 无日志策略：服务器不记录消息内容
图6：对比总结表格：传统方案 vs 零知识方案（安全性/隐私/速度）
图7：一句话总结：「你的代码只在你的设备上」

【发布描述】
远程控制 AI 写代码，最担心的就是代码安全。Code Light 用零知识架构——服务器只负责消息中转，不存储任何代码内容。你的代码从始至终只在你自己的设备上。而且 Mac 端 MioIsland 开源，安全性可以自己验证。

#代码安全 #隐私 #AI编程 #开源 #开发者工具 #程序员`,
  },
  {
    id: 'douyin-v2-13',
    platform: '抖音',
    angle: 'D',
    title: '午休 20 分钟 Claude 干了什么',
    content: `【图文内容】
图1：办公桌上趴着午睡的场景，大字「午休 20 分钟 AI 干了啥」（封面）
图2：Before — 12:30 午休前的项目状态：3 个 TODO 待完成
图3：12:31 — 给 Claude 发任务后趴下午睡
图4：12:35 — 灵动岛绿色（在写），你在睡（手机放桌上的侧拍）
图5：12:48 — 灵动岛黄色闪了一下，没醒，Claude 等了 2 分钟自动跳过非关键审批
图6：After — 12:50 醒了看手机：3 个 TODO 全完成，代码 diff 截图
图7：Before/After 对比：午休前 3 个红色 TODO → 午休后全绿

【发布描述】
午休前给 Claude 布置了 3 个 TODO。趴下睡了 20 分钟。醒来一看全做完了，测试也通过了。Before/After 对比太爽了。午休时间也是生产力，关键是有个工具能让你随时发任务随时看进度。

#午休 #程序员日常 #AI编程 #Before After #效率工具 #Claude`,
  },
  {
    id: 'douyin-v2-14',
    platform: '抖音',
    angle: 'E',
    title: '270 个 star 是怎么来的',
    content: `【图文内容】
图1：GitHub star 数字 270 大字 + 星星特效（封面）
图2：第 1 颗 star — 巴西开发者，发布第一天，截图留念
图3：第 50 颗 — 第一个 Issue：「支持 Warp 终端吗？」连夜加上
图4：第 100 颗 — 日本博主推荐，一天涨 40 star
图5：第 200 颗 — 有人 fork 做 Linux 版，开源的力量
图6：star 增长曲线图 — 几个关键节点标注
图7：感谢图 + 「下一个目标：500 star」

【发布描述】
MioIsland 在 GitHub 拿到 270 star。每颗 star 背后都有故事：第一颗来自巴西，第 50 颗带来了 Warp 终端支持，第 100 颗来自日本博主推荐，第 200 颗有人 fork 做 Linux 版。一个人开发的开源项目，靠口碑一步步涨上来。

#GitHub #开源 #star #独立开发 #程序员故事 #AI编程`,
  },
  {
    id: 'douyin-v2-15',
    platform: '抖音',
    angle: 'F',
    title: '为什么我不用现成的，自己做了一个',
    content: `【图文内容】
图1：大字「为什么自己造轮子？」+ 工具图标（封面）
图2：需求列表 — 我需要的 5 个功能打勾列表
图3：现成工具 A — 满足 2/5 ❌ 不能双向操控
图4：现成工具 B — 满足 3/5 ❌ 消息会发错终端
图5：现成工具 C — 满足 3/5 ❌ 代码要上传云端
图6：自己做的 MioIsland + Code Light — 满足 5/5 ✅ 全部满足
图7：总结：不是喜欢造轮子，是现成的轮子不圆

【发布描述】
为什么不用现成的 AI 编程辅助工具？因为试了一圈，没有一个同时满足：双向操控、精准路由、零知识安全、原生灵动岛、开源透明。不是喜欢造轮子，是现成的轮子真的不圆。所以自己花 14 天做了 MioIsland + Code Light。

#独立开发 #AI编程 #开发者工具 #造轮子 #程序员 #效率工具`,
  },
  {
    id: 'douyin-v2-16',
    platform: '抖音',
    angle: 'B',
    title: '你的编程搭档是什么物种',
    content: `【图文内容】
图1：6 只不同像素猫排成一排，大字「你的搭档是哪只？」（封面）
图2：黑猫 — 「沉稳型，适合写后端」配属性卡片
图3：橘猫 — 「干饭型，适合写 CRUD」配属性卡片
图4：赛博猫 — 「极客型，适合写算法」配属性卡片
图5：樱花猫 — 「文艺型，适合写前端」配属性卡片
图6：幽灵猫 — 「夜猫子型，适合通宵 debug」配属性卡片
图7：投票图 — 「你选哪只？评论区告诉我」

【发布描述】
MioIsland 的 18 种像素猫不只是好看，每只都有独特性格和属性。黑猫沉稳适合写后端，橘猫贪吃适合 CRUD，赛博猫极客适合算法，樱花猫文艺适合前端，幽灵猫夜猫子适合通宵。你会选哪只当编程搭档？评论区投票！

#像素猫 #MacBook #灵动岛 #程序员 #桌面宠物 #投票`,
  },
  {
    id: 'douyin-v2-17',
    platform: '抖音',
    angle: 'D',
    title: '遛狗的时候收到了代码完成的通知',
    content: `【图文内容】
图1：公园遛狗场景，手机灵动岛绿色，大字「遛狗时收到代码完成通知」（封面）
图2：出门前 — Mac 上 Claude 正在跑任务，关上笔记本带狗出门
图3：公园里 — 狗在跑，你在看灵动岛：绿色，还在写
图4：狗在喝水 — 灵动岛变黄，掏手机滑一下审批
图5：往回走 — 灵动岛爱心眼猫，推送通知「任务完成」
图6：到家打开 Mac — 代码整整齐齐，测试全通过

【发布描述】
出门遛狗前给 Claude 一个任务。公园里狗在撒欢，灵动岛在显示进度。中途审批了一次文件操作，遛完回来代码就写好了。有了 Code Light，离开电脑不代表离开工作。AI 在加班，你在享受生活。

#遛狗 #程序员日常 #AI编程 #远程办公 #Claude #程序员的一天`,
  },
  {
    id: 'douyin-v2-18',
    platform: '抖音',
    angle: 'C',
    title: 'Slash 命令有多方便',
    content: `【图文内容】
图1：Code Light 输入框里输入 / 弹出命令列表，大字「一个 / 搞定一切」（封面）
图2：/cost — 实时显示当前会话花了多少钱 + Token 用量
图3：/model — 一键切换 Claude 模型（Opus/Sonnet/Haiku）
图4：/status — 查看所有终端的运行状态概览
图5：/approve — 快速批准当前等待的权限请求
图6：实际场景演示 — 发现花太多了 → /model 切到 Haiku 省钱
图7：总结：6 个常用 Slash 命令速查表

【发布描述】
Code Light 里输入一个 / 就能调出快捷命令。/cost 看花费，/model 切模型，/status 看状态，/approve 快速审批。不用记复杂操作，一个斜杠搞定。特别是 /cost 和 /model，帮你在速度和成本之间灵活切换。

#AI编程 #Claude #效率工具 #开发者工具 #快捷命令 #iPhone`,
  },
  {
    id: 'douyin-v2-19',
    platform: '抖音',
    angle: 'A',
    title: 'Mac 和 iPhone 是怎么实时同步的',
    content: `【图文内容】
图1：Mac 和 iPhone 中间画一条连线，大字「它们是怎么同步的？」（封面）
图2：架构图全貌 — Mac（MioIsland）↔ 中转服务器 ↔ iPhone（Code Light）
图3：Step 1 — Mac 上 Claude 状态变化 → MioIsland 检测到
图4：Step 2 — 状态加密后发送到中转服务器（不存储）
图5：Step 3 — Code Light 收到 → 更新灵动岛 + 推送通知
图6：反向操作 — iPhone 发指令 → 中转 → Mac 终端精准接收
图7：关键点总结：端到端加密 / 毫秒级同步 / 零知识中转

【发布描述】
Mac 和 iPhone 怎么做到实时同步？MioIsland 检测 Claude 状态变化，加密后通过中转服务器推送到 Code Light。反过来手机也能发指令回 Mac。关键是：服务器只中转不存储，端到端加密，毫秒级响应。两个设备像一个系统一样工作。

#Mac #iPhone #AI编程 #技术架构 #同步 #开发者工具`,
  },
  {
    id: 'douyin-v2-20',
    platform: '抖音',
    angle: 'E',
    title: '被抄袭后我做了什么',
    content: `【图文内容】
图1：大字「被抄袭了」+ 裂开的表情（封面）
图2：Timeline — 发布产品 → 发现同名工具出现 → 功能高度相似
图3：当时的心情 — 愤怒、无奈、不甘
图4：冷静后的决定 — 不纠缠，改名 + 加速迭代
图5：改名过程 — Claude Remote → CodeIsland → MioIsland + Code Light
图6：改名后的效果 — 搜索排名上升 + 品牌辨识度提高 + 用户好评
图7：给独立开发者的建议 — 「被抄袭说明方向对了，跑得比它快就行」

【发布描述】
产品发布后发现被抄袭了，功能高度相似。愤怒之后做了一个决定：不纠缠，改名加速跑。从 Claude Remote 改到 MioIsland + Code Light，反而搜索排名上升了。被抄袭说明方向对了，独立开发者能做的就是跑得比别人快。

#独立开发 #抄袭 #程序员故事 #创业 #一人公司 #产品`,
  },

  // ============================================================
  // Twitter 20 条 (英文, Build in Public)
  // ============================================================

  // tw-v2-1 ~ tw-v2-5: Build in Public 数据分享
  {
    id: 'tw-v2-1',
    platform: 'Twitter',
    angle: 'build-in-public',
    title: '270 stars in 2 weeks',
    content: `270 GitHub stars in 2 weeks. Zero marketing budget.

Here's what actually moved the needle for MioIsland:
- 1 HN post → 89 stars overnight
- 1 V2EX post → 43 stars
- Word of mouth → the rest

Open source + solving a real problem > ads.

Try it: github.com/anthropics/MioIsland

#buildinpublic #opensource #macOS`,
  },
  {
    id: 'tw-v2-2',
    platform: 'Twitter',
    angle: 'build-in-public',
    title: 'Code Light 147 countries',
    content: `Code Light just went live in 147 countries on the App Store.

Day 1 numbers:
- 312 downloads
- 4.8 avg rating (23 reviews)
- 0 crashes

One person. No team. No funding.

If you use Claude Code, this is your iPhone remote control.

#buildinpublic #indiedev #ClaudeCode`,
  },
  {
    id: 'tw-v2-3',
    platform: 'Twitter',
    angle: 'build-in-public',
    title: 'Monthly revenue update',
    content: `April revenue update for my indie dev setup:

MioIsland (open source, free): $0
Code Light (App Store): $1,847 MRR

Total users: 4,200+
Support tickets this month: 7
Hours spent on support: 3

The ratio of users-to-support-tickets is what happens when you ship stable software.

#buildinpublic #indiehacker #revenue`,
  },
  {
    id: 'tw-v2-4',
    platform: 'Twitter',
    angle: 'build-in-public',
    title: 'Most requested feature',
    content: `I asked 200 MioIsland users: "What feature do you want most?"

Results:
- 34% — Multi-terminal management
- 28% — Custom pixel cat skins
- 19% — Notification grouping
- 12% — Linux support
- 7% — Other

Building the top 2 this month. The people have spoken.

#buildinpublic #productdev #opensource`,
  },
  {
    id: 'tw-v2-5',
    platform: 'Twitter',
    angle: 'build-in-public',
    title: 'GitHub star growth chart',
    content: `MioIsland star growth:

Week 1: 0 → 47
Week 2: 47 → 134
Week 3: 134 → 198
Week 4: 198 → 270

No mass email. No paid promotion. Just people finding it, using it, and starring it.

The best marketing is a product that solves a real problem.

github.com/anthropics/MioIsland

#buildinpublic #github #opensource`,
  },

  // tw-v2-6 ~ tw-v2-10: 技术 Thread
  {
    id: 'tw-v2-6',
    platform: 'Twitter',
    angle: 'tech-thread',
    title: 'How precise terminal routing works',
    content: `How do you send a message to the RIGHT terminal when you have 5 Claude Code sessions open?

Most tools broadcast. Or guess. Code Light uses precise routing.

Thread on how it works 🧵

1/ Each terminal gets a unique session ID on connection via Socket.io
2/ The iPhone app shows all active sessions with terminal name + project path
3/ When you send a command, it's wrapped: { targetId: "abc123", payload: "..." }
4/ Server does a direct emit to that socket ID only. Zero fan-out.
5/ If the target terminal disconnects, you get a real-time status update on your phone.

No broadcasting. No collision. Just precise delivery.

#ClaudeCode #engineering #architecture`,
  },
  {
    id: 'tw-v2-7',
    platform: 'Twitter',
    angle: 'tech-thread',
    title: 'Dynamic Island is underrated',
    content: `Dynamic Island on iPhone is massively underrated for developer tools.

Here's how Code Light uses it 🧵

1/ Live Activity shows current Claude Code session status
2/ Compact view: session name + running/idle indicator
3/ Expanded view: last 3 lines of output + approve/reject buttons
4/ Permission requests pop as Dynamic Island alerts — tap to approve without unlocking
5/ Implementation: ActivityKit + SwiftUI. Surprisingly clean API.

Apple built this for Uber ETAs. We repurposed it for AI coding.

#iOS #SwiftUI #DynamicIsland`,
  },
  {
    id: 'tw-v2-8',
    platform: 'Twitter',
    angle: 'tech-thread',
    title: 'Zero-knowledge relay architecture',
    content: `Your code never touches our servers.

Here's the zero-knowledge architecture behind Code Light 🧵

1/ All communication is end-to-end encrypted with Ed25519 key pairs
2/ Keys are generated on-device. We never see them.
3/ The relay server sees encrypted blobs only. No plaintext, no metadata about content.
4/ Pairing uses a QR code that contains the public key — no account needed.
5/ Even if our server is compromised, attackers get encrypted noise.

Security shouldn't be a premium feature.

#security #encryption #privacy`,
  },
  {
    id: 'tw-v2-9',
    platform: 'Twitter',
    angle: 'tech-thread',
    title: 'Ed25519 auth deep dive',
    content: `Why we chose Ed25519 over RSA for device authentication:

- Key generation: 0.3ms vs 250ms
- Signature size: 64 bytes vs 256 bytes
- Verification speed: 3x faster

On mobile, every millisecond matters. Ed25519 gives us fast, small, secure auth.

Implementation: libsodium on both ends. Swift on iOS, Node.js on server.

The DX of libsodium is genuinely good.

#cryptography #security #mobiledev`,
  },
  {
    id: 'tw-v2-10',
    platform: 'Twitter',
    angle: 'tech-thread',
    title: 'Socket.io reconnection strategy',
    content: `The hardest part of real-time mobile apps: reconnection.

Your phone goes through a tunnel. WiFi drops. App gets backgrounded.

Our Socket.io reconnection strategy:

1/ Exponential backoff: 1s → 2s → 4s → 8s (cap at 30s)
2/ Message queue: commands typed offline get queued and sent on reconnect
3/ Session persistence: reconnecting to the same session ID resumes state
4/ Background keep-alive: iOS background tasks ping every 30s
5/ Fallback: if Socket.io fails, fall back to APNs push for critical alerts

Result: <2s reconnection time in 95% of cases.

#engineering #socketio #mobile`,
  },

  // tw-v2-11 ~ tw-v2-15: 使用场景/演示
  {
    id: 'tw-v2-11',
    platform: 'Twitter',
    angle: 'use-case',
    title: 'Cooking + coding workflow',
    content: `My 7pm workflow:

1. Tell Claude to refactor the auth module
2. Walk to kitchen, start cooking
3. Phone buzzes — Claude wants to delete 3 files
4. Tap "Approve" on Dynamic Island while chopping onions
5. 20 min later: dinner ready, refactor done, all tests green

Code Light turns your iPhone into a Claude Code remote.

Try it — link in bio.

#ClaudeCode #remotework #productivity`,
  },
  {
    id: 'tw-v2-12',
    platform: 'Twitter',
    angle: 'use-case',
    title: 'Commute coding session',
    content: `Commute productivity hack:

I gave Claude 3 tasks before leaving home. On the train, I:
- Approved 2 file deletions
- Rejected 1 risky database migration
- Reviewed 47 lines of diff on my phone

By the time I sat down at the office, the PR was ready.

This is what "mobile-first AI development" actually looks like.

#productivity #coding #commute`,
  },
  {
    id: 'tw-v2-13',
    platform: 'Twitter',
    angle: 'use-case',
    title: 'Multi-terminal management',
    content: `Running 4 Claude Code sessions simultaneously:

Terminal 1: Frontend refactor (React)
Terminal 2: API migration (Fastify)
Terminal 3: Database schema update
Terminal 4: Test suite

All visible on my iPhone. I approve/reject permissions for each one independently.

It's like being an air traffic controller for AI agents.

#AIcoding #devtools #productivity`,
  },
  {
    id: 'tw-v2-14',
    platform: 'Twitter',
    angle: 'use-case',
    title: 'Weekend project in bed',
    content: `Sunday morning. Still in bed.

Claude is building my weekend project on the Mac downstairs.

From my phone:
- Watching live output
- Approving file operations
- Sending follow-up instructions

Shipped a side project before getting out of bed.

The future of coding is lazy (in the best way).

#indiedev #weekendproject #lazy`,
  },
  {
    id: 'tw-v2-15',
    platform: 'Twitter',
    angle: 'use-case',
    title: 'Emergency hotfix from cafe',
    content: `Got a "production is down" alert at a café.

Didn't have my laptop. Had my phone.

1. Opened Code Light
2. Connected to my Mac at home (always-on)
3. Told Claude: "Check the error logs and fix the null pointer in auth.js"
4. Approved the 3-line fix
5. Claude ran tests. All green.
6. Deployed.

Total time: 4 minutes. Didn't even finish my coffee.

#devops #hotfix #remotework`,
  },

  // tw-v2-16 ~ tw-v2-20: 独立开发者故事
  {
    id: 'tw-v2-16',
    platform: 'Twitter',
    angle: 'indie-story',
    title: 'The rename story',
    content: `I originally named my app "IslandCode."

Then I found out someone was already using that name in the App Store.

Rename process:
- 2 hours picking a new name
- 4 hours updating every string, asset, and config
- 1 hour re-submitting to App Review
- 3 days waiting

Now it's "Code Light" and honestly? Better name.

Sometimes being forced to change is a feature, not a bug.

#indiedev #appstore #naming`,
  },
  {
    id: 'tw-v2-17',
    platform: 'Twitter',
    angle: 'indie-story',
    title: 'One-person team reality',
    content: `What a one-person dev team actually looks like:

Monday: Write Swift code
Tuesday: Write Node.js code
Wednesday: Design icons in Figma
Thursday: Write marketing copy
Friday: Answer support emails
Saturday: Fix the bug I introduced Monday
Sunday: "I should hire someone"

Repeat forever.

But the upside? Every decision takes 5 minutes, not 5 meetings.

#indiedev #solofounder #startup`,
  },
  {
    id: 'tw-v2-18',
    platform: 'Twitter',
    angle: 'indie-story',
    title: 'Shipping fast philosophy',
    content: `My shipping philosophy:

v1.0 — Ship when it works
v1.1 — Ship when users complain
v1.2 — Ship when you can't sleep because of the bug

MioIsland went from idea to 270 stars in 30 days.
Code Light went from prototype to App Store in 45 days.

Perfect is the enemy of shipped.

#buildinpublic #shipping #startup`,
  },
  {
    id: 'tw-v2-19',
    platform: 'Twitter',
    angle: 'indie-story',
    title: 'Open source economics',
    content: `Why I open-sourced MioIsland (the Mac app) but not Code Light (the iPhone app):

MioIsland → Trust. Users run this ON their machine. They deserve to see every line.
Code Light → Revenue. This pays the bills.

Open source the trust layer. Monetize the convenience layer.

This is the sustainable indie dev model I believe in.

github.com/anthropics/MioIsland

#opensource #indiehacker #businessmodel`,
  },
  {
    id: 'tw-v2-20',
    platform: 'Twitter',
    angle: 'indie-story',
    title: 'First user feedback',
    content: `First real user feedback on Code Light:

"I didn't know I needed this until I used it. Now I can't go back."

This is the sentence every indie dev dreams of hearing.

Not "nice app." Not "cool idea." But "I can't go back."

That's product-market fit in 13 words.

Try it yourself — link in bio.

#buildinpublic #pmf #indiedev`,
  },

  // ============================================================
  // V2EX 20 条 (中文, 技术深度)
  // ============================================================

  // v2-v2-1 ~ v2-v2-5: 项目发布/更新帖
  {
    id: 'v2-v2-1',
    platform: 'V2EX',
    angle: '项目发布',
    title: 'MioIsland：给 Mac 灵动岛加个 AI 编程助手（开源，270 star）',
    content: `各位好，分享一个我做的开源项目 MioIsland。

简单说：它在 Mac 的灵动岛区域显示一只像素猫，实时反映 Claude Code 的运行状态。编码中猫在敲键盘，等待时猫在打盹，出错了猫会跳起来。

技术栈：
- SwiftUI + AppKit 混合架构
- NSPanel 悬浮窗，不抢焦点
- Socket.io 实时通信
- 像素动画：6 种状态，逐帧渲染

为什么做这个：用 Claude Code 写代码时，经常开着好几个终端，不知道哪个在跑、哪个在等我审批。灵动岛正好解决这个问题——一眼就能看到状态。

目前 270 star，欢迎体验和提 Issue。

GitHub: github.com/anthropics/MioIsland`,
  },
  {
    id: 'v2-v2-2',
    platform: 'V2EX',
    angle: '项目更新',
    title: 'Code Light v1.3 发布：多终端精准路由 + 全新 UI',
    content: `Code Light 是 MioIsland 的 iPhone 端，用来远程控制 Mac 上的 Claude Code。

v1.3 主要更新：
1. 多终端精准路由——同时开 5 个 Claude Code 终端，消息精准送达指定窗口
2. 全新会话列表 UI，按项目分组
3. Dynamic Island 扩展：展开可见最近 3 行输出
4. 支持 Ghostty / Warp / iTerm2 / cmux 终端自动检测

下载量突破 3000，目前 147 个国家上架。

技术细节可以看我之前的帖子。欢迎 V 友体验反馈。

App Store 搜索 "Code Light"`,
  },
  {
    id: 'v2-v2-3',
    platform: 'V2EX',
    angle: '里程碑',
    title: '开源 30 天，MioIsland 从 0 到 270 star 的复盘',
    content: `做了一个月，简单复盘一下 MioIsland 的增长路径：

时间线：
- Day 1-3: MVP，基础像素猫动画 + Claude Code 状态检测
- Day 7: 发 V2EX，+43 star
- Day 10: 发 Hacker News，+89 star（排到第二页）
- Day 14: 有人提了第一个 PR（国际化支持）
- Day 21: 被一个 YouTube 博主介绍，+60 star
- Day 30: 270 star，32 个 fork

关键经验：
1. 解决自己的问题 > 追热点
2. README 要写好，截图/GIF 必须有
3. 回复每一个 Issue，哪怕只是说"感谢反馈"
4. V2EX 和 HN 是开源项目最好的冷启动渠道

GitHub: github.com/anthropics/MioIsland`,
  },
  {
    id: 'v2-v2-4',
    platform: 'V2EX',
    angle: '版本更新',
    title: 'MioIsland v1.2：i18n 支持 + 终端自动检测 + Buddy 系统',
    content: `MioIsland 更新到 v1.2，主要变化：

1. 国际化：自动检测系统语言，支持 Auto / English / 中文
   - 感谢社区贡献的中文 PR
   - 所有 UI 字符串走 Localizable.strings

2. 终端自动检测：
   - 支持 Ghostty、Warp、iTerm2、cmux、Terminal.app 等 10 种
   - 通过 $TERM_PROGRAM 和 $TERM 环境变量判断
   - cmux 用户特别友好：自动检测 socket path

3. Buddy 系统：
   - 18 种 ASCII Art 精灵
   - 每个 Buddy 有稀有度、性格、进度条
   - 完成会话显示绿色爱心眼猫咪

GitHub: github.com/anthropics/MioIsland`,
  },
  {
    id: 'v2-v2-5',
    platform: 'V2EX',
    angle: '项目发布',
    title: 'Code Light：用 iPhone 远程控制 Claude Code（已上架 147 国）',
    content: `做了一个 iPhone App，叫 Code Light，配合 Mac 端的 MioIsland 使用。

核心功能：
- 在手机上看 Claude Code 的实时输出
- 审批文件操作权限（Claude 要删文件时手机弹通知）
- 发送后续指令
- Dynamic Island 实时状态

使用场景：
- 让 Claude 跑长任务，人去做饭/遛狗/通勤，手机监控
- 同时管理多个 Claude Code 终端
- 紧急 hotfix 时不需要打开笔记本

安全设计：Ed25519 端到端加密，零知识中转，不需要账号。

App Store 搜索 "Code Light"，免费试用。

Mac 端开源：github.com/anthropics/MioIsland`,
  },

  // v2-v2-6 ~ v2-v2-10: 技术实现帖
  {
    id: 'v2-v2-6',
    platform: 'V2EX',
    angle: '技术实现',
    title: '聊聊 Socket.io 在移动端的坑：重连、后台保活、消息队列',
    content: `最近做 Code Light（iPhone 远程控制 Claude Code），Socket.io 踩了不少坑，分享一下：

1. 重连策略
默认指数退避太保守。我们改成：1s→2s→4s→8s，cap 30s。
关键：reconnection attempt 时要带上 lastEventId，服务端补发丢失消息。

2. iOS 后台保活
iOS 对后台 Socket 连接很不友好。方案：
- BGTaskScheduler 每 30s 一次 keep-alive
- 同时注册 APNs 推送作为 fallback
- 如果 Socket 断开超过 60s，自动切换到纯推送模式

3. 消息队列
手机进隧道断网，用户还在输入命令。做了一个本地队列：
- 命令先存 CoreData
- 重连后按顺序发送
- 每条消息带 idempotency key 防重复执行

4. 心跳优化
默认 25s ping 太频繁，改成 45s。省电 + 减少流量。
但要配合服务端 pingTimeout 调大到 60s。

代码示例就不贴了，核心逻辑在 GitHub: github.com/anthropics/MioIsland`,
  },
  {
    id: 'v2-v2-7',
    platform: 'V2EX',
    angle: '技术实现',
    title: 'Swift 实现灵动岛动画：从像素猫到 Live Activity',
    content: `MioIsland 的灵动岛动画实现细节分享：

1. 像素猫渲染
不是用 Lottie，是逐帧渲染：
- 每种状态（编码/等待/错误/空闲/完成/睡觉）6-12 帧
- 用 Canvas 绘制，每帧是 16x16 像素矩阵
- 帧率 8fps，刻意的复古感

2. 灵动岛适配
NSPanel 方案：
- .nonactivatingPanel 样式，不抢焦点
- 设置 level = .statusBar + 1
- 通过 NSScreen.main?.auxiliaryTopLeftArea 获取灵动岛区域
- 不同 Mac 灵动岛尺寸不同，需要动态适配

3. Live Activity（iPhone 端）
Code Light 用 ActivityKit：
- 紧凑视图：项目名 + 状态指示灯
- 展开视图：最近输出 + 操作按钮
- 锁屏也可见
- 限制：Live Activity 最多 8 小时自动过期，需要续期逻辑

4. 动画性能
SwiftUI 的 TimelineView 做定时刷新，比 Timer + @State 省电。
测试下来 CPU 占用 < 0.5%。

GitHub: github.com/anthropics/MioIsland`,
  },
  {
    id: 'v2-v2-8',
    platform: 'V2EX',
    angle: '技术实现',
    title: 'Ed25519 在移动端认证的实践：为什么不用 RSA',
    content: `Code Light 的设备认证用了 Ed25519，分享一下选型和实现：

为什么不用 RSA：
- 密钥生成：Ed25519 0.3ms vs RSA 250ms（手机上差距更大）
- 签名大小：64 bytes vs 256 bytes（省流量）
- 验证速度：3x
- 安全性：128 bit security level，等价 RSA 3072

实现方案：
iOS 端：Swift + libsodium（通过 swift-sodium）
服务端：Node.js + tweetnacl

配对流程：
1. Mac 端生成密钥对，公钥编成 QR Code
2. iPhone 扫码获取公钥
3. 之后每次通信，iPhone 用自己的私钥签名，Mac 用对应公钥验证
4. 不需要服务端存任何密钥——零知识

踩坑：
- swift-sodium 在 arm64 模拟器上有编译问题，需要手动设置 excluded architectures
- tweetnacl 的 sign.detached() 和 sign() 返回值格式不同，别搞混

GitHub: github.com/anthropics/MioIsland`,
  },
  {
    id: 'v2-v2-9',
    platform: 'V2EX',
    angle: '技术实现',
    title: 'cmux 集成实战：如何让 AI 编程助手感知终端复用器',
    content: `MioIsland 需要感知用户在用哪个终端，cmux 是个特殊案例。

背景：cmux 是一个终端复用器，一个窗口开多个 pane。Claude Code 可能在其中一个 pane 运行。

检测方案：
1. 检查 $TMUX 或 $CMUX_SOCKET 环境变量
2. 解析 socket path 获取 session 信息
3. 通过 cmux list-panes 获取 pane 布局
4. 匹配 Claude Code 进程所在的 pane ID

集成点：
- MioIsland 显示 "Terminal: cmux session-name:window.pane"
- Code Light 可以精准路由到特定 pane
- 支持 pane 切换时自动更新状态

兼容性：
- tmux 2.x / 3.x 都测过
- cmux 自己的 socket 格式和 tmux 不同，要分别处理
- screen 也做了基本支持（但不推荐，API 太老）

代码在 MioIsland 的 TerminalDetector.swift 里，欢迎看源码。

GitHub: github.com/anthropics/MioIsland`,
  },
  {
    id: 'v2-v2-10',
    platform: 'V2EX',
    angle: '技术实现',
    title: 'Fastify + Socket.io + APNs：Code Light 后端架构全解析',
    content: `Code Light 后端用 Fastify + Socket.io，加上 APNs 推送做兜底。架构分享：

整体架构：
\`\`\`
iPhone ←→ Socket.io ←→ Relay Server ←→ Socket.io ←→ Mac
          ↓ (fallback)
        APNs Push
\`\`\`

为什么选 Fastify 而不是 Express：
- 性能：JSON 序列化快 2x
- Schema 验证：用 JSON Schema 做请求验证，比 joi 快
- 插件系统：封装比中间件更清晰

Socket.io 配置要点：
- 用 Redis adapter 做多实例支持
- 自定义 parser 减少 payload 大小
- pingInterval 45s，pingTimeout 60s

APNs 集成：
- 用 @parse/node-apn（不是 node-apn，后者停维护了）
- 只推关键事件：权限请求、任务完成、错误
- 证书方式用 Token-based（.p8），不用 Certificate-based

数据层：
- PostgreSQL 存用户设备信息（加密后的公钥）
- 不存任何通信内容——零知识设计
- Redis 做 Socket session 映射

日均请求：~50k，单实例扛住了。成本 $12/月 VPS。

GitHub: github.com/anthropics/MioIsland`,
  },

  // v2-v2-11 ~ v2-v2-15: 经验分享帖
  {
    id: 'v2-v2-11',
    platform: 'V2EX',
    angle: '经验分享',
    title: '一个人做两个产品：独立开发的时间管理（或者说时间浪费）',
    content: `同时维护 MioIsland（开源 Mac App）和 Code Light（iPhone App），一个人。

我的周计划通常是这样的：
- 周一二：Code Light 功能开发（Swift）
- 周三：MioIsland bug 修复 + PR 审核（Swift + Node）
- 周四：后端/运维（Node + PostgreSQL）
- 周五：写文档、回 Issue、发推
- 周末：摸鱼/学习/偶尔加班

实际执行率：大约 60%。剩下 40% 被以下事情吃掉：
- 用户反馈的紧急 bug（不修不行）
- App Store 审核被拒（改了重提，又被拒）
- 灵感来了临时改计划
- 摸鱼

总结：一个人做产品最大的优势是决策快，最大的劣势是所有角色都得自己扮演。

我还在探索更好的方式。各位独立开发者有什么经验？`,
  },
  {
    id: 'v2-v2-12',
    platform: 'V2EX',
    angle: '经验分享',
    title: '从 0 到上架 App Store：Code Light 的 45 天开发记录',
    content: `Code Light 从第一行代码到上架 App Store，用了 45 天。记录一下关键节点：

Day 1-7: 原型
- SwiftUI 搭建基础 UI
- Socket.io 连通 Mac 端
- 能显示 Claude Code 输出

Day 8-14: 核心功能
- 权限审批系统
- 多终端管理
- Ed25519 加密配对

Day 15-21: 打磨
- Dynamic Island 集成
- 离线消息队列
- 错误恢复

Day 22-28: 测试
- TestFlight 邀请 20 个用户
- 修了 37 个 bug
- 性能优化（内存泄漏、电池消耗）

Day 29-35: 上架准备
- App Store 截图（用 Figma 做的）
- 审核指南研读（重点：4.2 设计最低要求）
- 隐私政策页面

Day 36-40: 审核
- 第一次被拒：缺少"演示模式"，审核人员没有 Mac 无法测试
- 加了一个 Demo 模式，模拟 Claude Code 输出
- 第二次通过

Day 41-45: 上线 + 冷启动
- 发 V2EX / Twitter / 即刻
- 前 3 天 312 下载

经验：预留审核时间，别卡 deadline。`,
  },
  {
    id: 'v2-v2-13',
    platform: 'V2EX',
    angle: '经验分享',
    title: '被截流后改名的经历：独立开发者的命名教训',
    content: `之前我的 App 叫 "IslandCode"，结果发现被截流了。

事情经过：
1. 在 App Store 搜 "IslandCode"，排第一的不是我的 App
2. 有人用了几乎一样的名字和图标风格
3. 联系 Apple，回复："名称不构成商标侵权，建议更换名称"

改名代价：
- 代码里所有 bundleId、字符串、注释：4 小时
- Figma 设计稿里的品牌元素：2 小时
- 重新提交审核：等 3 天
- SEO 归零：之前积累的搜索排名全没了

教训：
1. 上架前先搜索目标名称，确认没有近似产品
2. 考虑注册商标（成本 ~300 元/类）
3. 名字越独特越好，通用词组合容易撞
4. 改名要趁早，用户越多改名代价越大

"Code Light" 这个名字是改名后取的，反而比原来的好。塞翁失马。`,
  },
  {
    id: 'v2-v2-14',
    platform: 'V2EX',
    angle: '经验分享',
    title: '开源项目的第一个 PR：比自己写代码更开心',
    content: `MioIsland 收到第一个外部 PR 的时候，说实话比项目上 HN 首页更开心。

这个 PR 是国际化支持——一个台湾开发者主动提的，把所有 UI 字符串抽成了 Localizable.strings，并添加了繁体中文翻译。

代码质量很好，commit message 规范，还附了截图。

我做了什么：
1. 认真 review，提了 2 个小建议
2. 帮他 rebase 到最新 main
3. 合并后发了一条推感谢他
4. 在 README 加了 Contributors 区域

后续影响：
- 又有人提了日文翻译 PR
- Issue 数量翻倍（说明有人在用了）
- Star 增速明显加快

经验：对 PR 贡献者好一点，他们是你项目最珍贵的资产。

GitHub: github.com/anthropics/MioIsland`,
  },
  {
    id: 'v2-v2-15',
    platform: 'V2EX',
    angle: '经验分享',
    title: '独立开发者的 AI 编程体验：Claude Code 帮我省了多少时间',
    content: `作为 MioIsland 和 Code Light 的唯一开发者，Claude Code 是我的 "第二双手"。

具体数据（过去 30 天）：
- Claude Code 会话数：347 次
- 采纳率（approve/total）：78%
- 最长单次会话：2.5 小时（数据库迁移）
- 估算节省时间：约 120 小时

最适合交给 Claude 的任务：
1. 样板代码（API endpoint、数据模型）
2. 单元测试（给它函数签名就行）
3. 重构（"把这个文件从 class 改成 protocol"）
4. Bug 修复（贴错误日志让它分析）

不适合的任务：
1. 架构决策（需要全局视角）
2. UI 微调（像素级审美它不行）
3. 复杂业务逻辑（需要领域知识）

我的工作流：让 Claude 干活 → Code Light 在手机上监控 → 有空了 review。

反正自己做的产品，用自己的产品管理 AI，某种意义上的自举。`,
  },

  // v2-v2-16 ~ v2-v2-20: 工具推荐/讨论帖
  {
    id: 'v2-v2-16',
    platform: 'V2EX',
    angle: '工具推荐',
    title: '2026 年 AI 编程工具链推荐（独立开发者视角）',
    content: `做了一年独立开发，分享我目前的 AI 编程工具链：

核心：
- Claude Code（主力 AI 编程助手）
- MioIsland（Mac 灵动岛状态监控，自己做的）
- Code Light（iPhone 远程控制，自己做的）

编辑器：
- VS Code + Claude 插件（日常开发）
- Xcode（Swift 必须用原生）
- 偶尔 Cursor（对比体验）

终端：
- Ghostty（性能最好，GPU 渲染）
- cmux（多窗口管理）
- 跑 Claude Code 专门开一个 Ghostty 窗口

部署：
- Fly.io（后端服务，$12/月够用）
- Cloudflare Pages（静态站点）
- App Store（iOS App）

设计：
- Figma（UI + 截图）
- SF Symbols（图标）
- 像素画用 Aseprite

总成本：约 $50/月（不含 Claude Pro $20）

各位在用什么工具链？`,
  },
  {
    id: 'v2-v2-17',
    platform: 'V2EX',
    angle: '工具讨论',
    title: '终端选择讨论：Ghostty vs Warp vs iTerm2（2026 实测对比）',
    content: `最近测了三款主流终端，分享对比：

Ghostty：
- 优势：GPU 渲染超流畅，启动 <100ms，配置简单
- 劣势：生态还不够成熟，插件少
- 适合：追求性能和简洁的人

Warp：
- 优势：AI 集成好，块编辑，协作功能
- 劣势：Electron，内存占用 ~300MB，偶尔卡顿
- 适合：团队协作场景

iTerm2：
- 优势：最成熟，功能最全，社区最大
- 劣势：启动慢，不够现代
- 适合：需要高级功能（trigger、profile 等）的人

我的选择：Ghostty 做主力，iTerm2 做备用。

关键指标对比（M2 MacBook Pro）：
| 指标 | Ghostty | Warp | iTerm2 |
|------|---------|------|--------|
| 启动 | 80ms | 1.2s | 800ms |
| 内存 | 45MB | 310MB | 120MB |
| 渲染 | GPU | GPU | CPU |
| 大文件 | 流畅 | 卡 | 卡 |

欢迎讨论。`,
  },
  {
    id: 'v2-v2-18',
    platform: 'V2EX',
    angle: '工具讨论',
    title: '远程开发的正确姿势：从 SSH 到 AI 遥控',
    content: `远程开发的方案进化史（我自己的经历）：

阶段 1：SSH + tmux
- 远程服务器开 tmux，SSH 连进去
- 断网就 attach 回来
- 缺点：手机上 SSH 体验很差

阶段 2：VS Code Remote
- Remote-SSH 插件连远程机器
- 体验好很多，但要开电脑
- 缺点：不在电脑前就无能为力

阶段 3：Tailscale + 内网穿透
- 家里的 Mac 组 VPN，随时可达
- iPad 也能连
- 缺点：还是得有一个能跑 IDE 的设备

阶段 4（现在）：Claude Code + Code Light
- Mac 一直开着跑 Claude Code
- 手机上用 Code Light 远程控制
- 审批权限、看输出、发指令，全在 iPhone 上
- 不需要 SSH，不需要 IDE

本质变化：从"远程操作编辑器"变成"远程指挥 AI"。

你们现在怎么做远程开发？`,
  },
  {
    id: 'v2-v2-19',
    platform: 'V2EX',
    angle: '工具推荐',
    title: 'StoreKit 2 实战心得：从订阅到退款全流程',
    content: `Code Light 的内购用的 StoreKit 2，比 StoreKit 1 好太多了，分享一些心得：

1. Product 获取
StoreKit 2 用 async/await，不再需要 delegate 地狱：
\`\`\`swift
let products = try await Product.products(for: ["pro_monthly"])
\`\`\`

2. 购买流程
\`\`\`swift
let result = try await product.purchase()
switch result {
case .success(let verification):
    // 验证 + 解锁功能
case .pending:
    // 等待家长审批等
case .userCancelled:
    break
}
\`\`\`

3. 服务端验证
StoreKit 2 推荐用 App Store Server API v2，不再用 verifyReceipt。
签名用 JWS，服务端用 jose 库解析。

4. 退款处理
Transaction.updates 可以监听退款事件，实时撤销权限。

5. 踩坑
- Sandbox 环境和 Production 行为不一致（特别是续费间隔）
- 家庭共享需要单独处理 Transaction.currentEntitlements
- StoreKit 2 最低支持 iOS 15

总体体验：StoreKit 2 是苹果近年来 API 设计最好的一次升级。`,
  },
  {
    id: 'v2-v2-20',
    platform: 'V2EX',
    angle: '讨论',
    title: '你们觉得 AI 编程助手最缺什么功能？',
    content: `用了大半年 Claude Code，说说我觉得目前 AI 编程助手最缺的几个功能：

1. 多终端感知
AI 只能看到当前终端，不知道我其他窗口在做什么。（我做 MioIsland 就是为了解决状态可视化）

2. 上下文持久化
每次新会话都要重新解释项目背景。CLAUDE.md 有帮助但还不够。

3. 移动端审批
让 AI 跑长任务时，我不想一直守在电脑前。（所以做了 Code Light）

4. 安全边界
AI 能访问整个文件系统，缺少更细粒度的权限控制。

5. 协作模式
多人用 AI 改同一个项目，冲突怎么解决？

我的两个产品（MioIsland + Code Light）解决了 1 和 3，但 2/4/5 还是开放问题。

V 友们觉得还缺什么？或者你们怎么解决这些问题的？`,
  },

  // ============================================================
  // 掘金 20 条 (中文, 技术博文)
  // ============================================================

  // juejin-v2-1 ~ juejin-v2-5: Swift/SwiftUI 开发实战
  {
    id: 'juejin-v2-1',
    platform: '掘金',
    angle: 'Swift实战',
    title: 'SwiftUI + AppKit 混合开发：在 Mac 灵动岛区域做悬浮窗',
    content: `## 背景
MioIsland 需要在 Mac 灵动岛区域显示像素猫动画，覆盖在所有窗口之上。

## 核心方案：NSPanel 悬浮窗
- 为什么不用 NSWindow：NSPanel 支持 .nonactivatingPanel，不抢焦点
- level 设置为 .statusBar + 1，保证覆盖菜单栏
- auxiliaryTopLeftArea API 获取灵动岛精确位置

## SwiftUI 集成
- NSHostingView 桥接 SwiftUI 视图到 NSPanel
- 避免使用 .ignoresSafeArea()，会导致灵动岛区域计算错误
- @Environment 传递 colorScheme 做暗色模式适配

## 像素猫动画实现
- TimelineView 替代 Timer，更省电
- Canvas 绘制 16x16 像素矩阵
- 6 种状态 × 6-12 帧 = 约 60 帧资源
- 帧率锁定 8fps，复古风格

## 性能优化
- CPU 占用 < 0.5%（TimelineView 在不可见时自动暂停）
- 内存占用 < 15MB
- 无 Metal shader，纯 CPU 渲染够用

## 踩坑
1. macOS 14 和 15 的灵动岛尺寸不同，需要运行时检测
2. NSPanel 在 Mission Control 中的层级问题
3. 暗色模式切换时 Canvas 不会自动重绘

GitHub: github.com/anthropics/MioIsland`,
  },
  {
    id: 'juejin-v2-2',
    platform: '掘金',
    angle: 'Swift实战',
    title: '用 Socket.io-Client-Swift 做实时通信：从连接到断线重连全攻略',
    content: `## 背景
MioIsland 的 Mac 端需要和 Code Light 的服务端实时通信。选了 Socket.io-Client-Swift。

## 依赖安装
- SPM 方式引入 socket.io-client-swift
- 注意版本兼容：16.x 支持 macOS 12+

## 基础连接
\`\`\`swift
let manager = SocketManager(socketURL: url, config: [
    .log(false),
    .compress,
    .forceWebsockets(true)
])
let socket = manager.defaultSocket
\`\`\`

## 事件处理架构
- 用 enum 定义所有事件类型，避免字符串魔法
- Codable 做消息序列化
- 自定义 SocketEventHandler 协议统一处理

## 断线重连策略
- reconnects: true, reconnectWait: 1, reconnectWaitMax: 30
- 自定义 reconnectAttempts 不设上限
- 重连时带上 lastEventId 补发丢失消息

## 认证握手
- connect 时带 Ed25519 签名的 token
- 服务端验证通过才进入正式通信

## 性能考量
- forceWebsockets 避免 long-polling fallback 的额外开销
- compress 减少流量
- 消息合并：短时间内多条状态更新只发最后一条

## 常见问题
1. ATS 限制：开发时 localhost 需要配置 NSAppTransportSecurity
2. Background 模式下 Socket 被 kill：配合 BGTaskScheduler
3. 内存泄漏：socket.on 返回的 UUID 要 off 掉`,
  },
  {
    id: 'juejin-v2-3',
    platform: '掘金',
    angle: 'Swift实战',
    title: 'StoreKit 2 完全指南：从零实现 iOS 内购（订阅 + 买断）',
    content: `## 背景
Code Light 使用 StoreKit 2 实现内购，支持月订阅和终身买断两种模式。

## StoreKit 2 vs StoreKit 1
- async/await 替代 delegate
- 本地验证替代服务端 verifyReceipt
- Transaction.updates 实时监听

## 产品配置
- App Store Connect 创建产品
- 本地用 StoreKit Configuration File 测试

## 核心代码
### 获取产品
\`\`\`swift
let products = try await Product.products(for: productIds)
\`\`\`

### 购买
\`\`\`swift
let result = try await product.purchase()
// 处理 success / pending / userCancelled
\`\`\`

### 权限检查
\`\`\`swift
for await result in Transaction.currentEntitlements {
    // 验证签名 + 解锁功能
}
\`\`\`

## 服务端验证（可选）
- App Store Server API v2
- JWS 签名验证
- Server Notification v2 监听状态变更

## 退款处理
- Transaction.updates 监听 REVOKE 事件
- 实时撤销功能权限

## 测试技巧
- Xcode StoreKit Testing：本地模拟购买、退款、续费
- Sandbox 环境：续费间隔缩短（月→5分钟）
- 注意 Sandbox 和 Production 行为差异`,
  },
  {
    id: 'juejin-v2-4',
    platform: '掘金',
    angle: 'Swift实战',
    title: 'ActivityKit 实战：为开发者工具打造 Dynamic Island 体验',
    content: `## 背景
Code Light 使用 Dynamic Island 显示 Claude Code 实时状态，让用户不打开 App 也能看到运行情况。

## ActivityKit 基础
- 最低 iOS 16.1
- 需要 Info.plist 配置 NSSupportsLiveActivities
- Widget Extension 中定义 UI

## 三种展示模式
### 紧凑视图（Compact）
- leading: 项目图标
- trailing: 状态文字（running/idle/error）
- 限制极严：不能超过 ~60pt 宽度

### 展开视图（Expanded）
- 上方：项目名 + 终端类型
- 中间：最近 3 行输出
- 下方：Approve / Reject 按钮

### 锁屏视图（Lock Screen）
- 显示完整状态卡片
- 可放操作按钮

## 数据更新
\`\`\`swift
let state = CodeSessionState(output: latestLines, status: .running)
await activity?.update(using: state)
\`\`\`

## 限制和解决方案
- 8 小时自动过期 → 定时续期逻辑
- 每次更新有大小限制（4KB）→ 只传最近 3 行
- 最多同时 5 个 Live Activity → 优先显示活跃会话
- 推送更新需要 push token → APNs 集成

## 性能
- 更新频率控制在 1次/秒 以内
- UI 渲染在 Widget Extension 进程，不影响主 App`,
  },
  {
    id: 'juejin-v2-5',
    platform: '掘金',
    angle: 'Swift实战',
    title: '像素动画引擎：用 SwiftUI Canvas 实现 8-bit 风格角色动画',
    content: `## 背景
MioIsland 的像素猫动画是项目的视觉核心。从零实现一个轻量像素动画引擎。

## 设计原则
- 16x16 像素矩阵（经典 NES 风格）
- 8fps 帧率（刻意的复古感）
- 调色板限制在 16 色以内

## 数据结构
\`\`\`swift
struct PixelFrame {
    let pixels: [[Color]]  // 16x16
    let duration: TimeInterval
}
struct PixelAnimation {
    let frames: [PixelFrame]
    let loop: Bool
}
\`\`\`

## Canvas 渲染
- SwiftUI Canvas 比 SpriteKit 轻量得多
- 每个像素画一个 rect
- 用 TimelineView 控制帧切换

## 状态机
- 6 种状态：coding / waiting / error / idle / complete / sleeping
- 状态切换有过渡动画（2-3 帧淡出 + 淡入）
- 状态由 Socket.io 事件驱动

## 资源管理
- 帧数据存在 JSON 文件中，运行时加载
- 总资源 < 200KB
- 支持运行时热更新（debug 模式）

## 扩展：Buddy 系统
- 18 种 ASCII Art 精灵
- 每个 Buddy 有稀有度和性格属性
- 稀有度影响动画帧数（越稀有动画越丰富）

## 性能数据
- Canvas 重绘：< 0.1ms
- 内存占用（动画资源）：< 5MB
- CPU（8fps 渲染）：< 0.3%`,
  },

  // juejin-v2-6 ~ juejin-v2-10: Node.js/后端实战
  {
    id: 'juejin-v2-6',
    platform: '掘金',
    angle: '后端实战',
    title: 'Fastify vs Express：2026 年 Node.js 后端框架选型实战',
    content: `## 背景
Code Light 后端从 Express 迁移到 Fastify，性能提升 2x。记录选型过程和迁移经验。

## 为什么迁移
- Express 中间件嵌套太深，代码不好维护
- JSON 序列化性能瓶颈（占请求时间的 30%）
- 缺少内置 Schema 验证

## Fastify 优势
### 性能
- JSON 序列化：fast-json-stringify 比 JSON.stringify 快 2x
- 路由匹配：find-my-way 比 Express 的 path-to-regexp 快 10x
- 整体 QPS：Express 8k → Fastify 18k（简单 JSON API）

### 开发体验
- 插件系统 > 中间件系统
- 内置 JSON Schema 验证
- TypeScript 支持更好
- 日志：pino 比 winston 快 5x

## 迁移过程
1. 路由迁移：Express router → Fastify plugin
2. 中间件迁移：大部分有 Fastify 版本
3. 错误处理：setErrorHandler 比 Express 的 error middleware 更清晰
4. Socket.io：fastify-socket.io 插件，无缝集成

## 踩坑
- Fastify 默认不解析 application/x-www-form-urlencoded
- 插件加载顺序很重要（register 是异步的）
- 默认的 bodyLimit 是 1MB，上传大文件要调大

## 性能对比（Code Light 生产环境）
| 指标 | Express | Fastify |
|------|---------|---------|
| P50 延迟 | 12ms | 5ms |
| P99 延迟 | 89ms | 34ms |
| 内存 | 180MB | 120MB |`,
  },
  {
    id: 'juejin-v2-7',
    platform: '掘金',
    angle: '后端实战',
    title: 'Socket.io 服务端架构设计：从单机到多实例',
    content: `## 背景
Code Light 中转服务从单实例扩展到多实例的 Socket.io 架构演进。

## 单实例架构
\`\`\`
iPhone ←→ Socket.io Server ←→ Mac
\`\`\`
简单直接，但有单点故障。

## 多实例架构
\`\`\`
iPhone ←→ LB ←→ Server1 ←→ Redis Adapter ←→ Server2 ←→ Mac
\`\`\`

## Redis Adapter
- @socket.io/redis-adapter 做跨实例消息广播
- Redis Pub/Sub 实现事件转发
- 配置 sticky session（基于 session ID hash）

## Room 设计
- 每个 Mac-iPhone 配对是一个 Room
- Room ID = 设备对的 hash
- join/leave 时清理旧连接

## 消息可靠性
- 每条消息带 sequence number
- 客户端 ack 确认
- 未 ack 的消息进入 retry 队列
- 最多重试 3 次，之后走 APNs fallback

## 水平扩展
- Nginx upstream 做负载均衡
- ip_hash 保证同一设备连同一实例
- health check 端点检测实例状态

## 监控
- Socket.io admin UI 看连接数
- Prometheus + Grafana 监控延迟和错误率
- 自定义 metric：消息投递成功率

## 当前规模
- 日活连接：~2000
- 日均消息：~50k
- 2 个实例足够（$24/月）`,
  },
  {
    id: 'juejin-v2-8',
    platform: '掘金',
    angle: '后端实战',
    title: 'PostgreSQL 在小项目中的最佳实践：不用 ORM 也能写好 SQL',
    content: `## 背景
Code Light 后端用 PostgreSQL 存设备信息和会话数据。不用 ORM，直接写 SQL。

## 为什么不用 ORM
- 项目小，表不超过 10 个
- SQL 比 ORM 的 DSL 更直观
- 性能可预测
- 不想引入 Prisma 的 build 步骤

## 数据库设计
核心表：
- devices: 设备公钥（加密存储）、注册时间
- sessions: 活跃会话、设备对映射
- push_tokens: APNs push token

## 连接池
- 用 pg 库的 Pool
- max: 10, idleTimeoutMillis: 30000
- 连接数 = 2 * CPU cores + 1（经验公式）

## 查询优化
- 索引策略：device_id 是查询热点，加 B-tree 索引
- 避免 SELECT *，只取需要的列
- 用 EXPLAIN ANALYZE 验证查询计划

## 迁移方案
- 不用 migration 工具，手写 SQL 文件
- 按日期编号：001_create_devices.sql
- 部署时按顺序执行

## 安全
- 所有查询用参数化，防 SQL 注入
- 设备公钥加密存储（AES-256）
- 定期备份到 S3
- 不存任何通信内容（零知识设计）

## 性能
- 当前数据量：~5000 行
- P99 查询延迟：< 2ms
- 连接池利用率：平均 20%`,
  },
  {
    id: 'juejin-v2-9',
    platform: '掘金',
    angle: '后端实战',
    title: 'APNs 推送实战：Token-based 认证 + 静默推送 + 富通知',
    content: `## 背景
Code Light 用 APNs 作为 Socket.io 的降级通道。当 Socket 断开时，关键事件走推送。

## 认证方式选择
Token-based (.p8) vs Certificate-based (.p12)：
- Token 不过期，Certificate 每年要换
- Token 一个 key 管所有 App，Certificate 每个 App 单独
- 选了 Token-based

## 服务端实现
用 @parse/node-apn（注意不是已停维护的 node-apn）：
\`\`\`javascript
const apn = require('@parse/node-apn')
const provider = new apn.Provider({
    token: { key: './AuthKey.p8', keyId, teamId },
    production: true
})
\`\`\`

## 推送类型
### 1. 权限请求（Alert）
- 标题："Claude Code 需要审批"
- 正文：操作类型 + 文件路径
- 操作按钮：Approve / Reject
- Category + Action 实现

### 2. 状态更新（Silent）
- content-available: 1
- 更新 Live Activity 数据
- 不弹通知，后台处理

### 3. 任务完成（Rich）
- 附带截图（UNNotificationAttachment）
- 显示最后几行输出

## 踩坑
- Sandbox vs Production 推送地址不同
- 设备 token 在重装 App 后会变
- 静默推送频率有限制（每小时）
- Rich notification 附件大小限制 10MB

## 可靠性
- 推送成功率 > 99.5%
- 失败重试 2 次
- 记录所有推送 log 方便排查`,
  },
  {
    id: 'juejin-v2-10',
    platform: '掘金',
    angle: '后端实战',
    title: 'Node.js 进程管理：PM2 + 健康检查 + 零停机部署',
    content: `## 背景
Code Light 后端需要 7×24 运行，分享 Node.js 生产环境的运维经验。

## PM2 配置
\`\`\`javascript
module.exports = {
    apps: [{
        name: 'codelight-api',
        script: 'dist/server.js',
        instances: 2,
        exec_mode: 'cluster',
        max_memory_restart: '500M',
        env: { NODE_ENV: 'production' }
    }]
}
\`\`\`

## 健康检查
- /health 端点：返回 { status, uptime, connections, memory }
- Fly.io 每 10s 检查一次
- 连续 3 次失败自动重启实例

## 零停机部署
1. 构建新版本
2. PM2 reload（graceful restart）
3. 新实例就绪后旧实例才下线
4. Socket.io 连接自动重连到新实例

## 内存管理
- --max-old-space-size=512
- 监控 heap 使用率
- Socket 连接泄漏检测：定期检查 connected sockets 数量

## 日志
- pino 做结构化日志
- 日志轮转：每天一个文件，保留 7 天
- 错误日志单独文件 + 告警

## 监控告警
- CPU > 80% 持续 5min → Slack 告警
- 内存 > 400MB → 自动重启
- Socket 连接数 > 5000 → 扩容提醒
- 错误率 > 1% → 立即告警

## 成本
- Fly.io shared-cpu-1x, 256MB: $12/月
- 日均 50k 请求，绰绰有余`,
  },

  // juejin-v2-11 ~ juejin-v2-15: 架构设计
  {
    id: 'juejin-v2-11',
    platform: '掘金',
    angle: '架构设计',
    title: '零知识中转架构：如何设计一个"看不见用户数据"的服务',
    content: `## 背景
Code Light 的核心承诺：你的代码永远不经过我们的服务器（以明文形式）。

## 什么是零知识架构
- 服务端只负责转发加密数据
- 服务端没有解密能力
- 即使服务端被入侵，攻击者也只能看到密文

## 设计方案
### 密钥管理
- 每个设备本地生成 Ed25519 密钥对
- 私钥永远不离开设备
- 公钥通过 QR Code 交换（配对时）

### 通信加密
1. 发送方用接收方公钥加密消息
2. 密文发到中转服务器
3. 服务器原样转发（看不懂内容）
4. 接收方用自己的私钥解密

### 服务端存什么
- 设备 ID → Socket ID 映射（内存中，不持久化）
- 加密后的公钥哈希（用于路由）
- 不存任何消息内容

## 信任模型
- 用户不需要信任服务端
- 唯一的信任点：设备配对时的物理接近（扫 QR Code）
- 无账号系统，无密码

## 权衡
### 优势
- 安全性最高
- 不需要 GDPR 合规（因为不存用户数据）
- 服务端代码可以公开审计

### 劣势
- 不支持多设备消息同步（需要每个设备单独配对）
- 密钥丢失不可恢复
- 服务端无法做内容审核

## 实现细节
- 加密库：libsodium（两端都有绑定）
- 消息格式：nonce(24B) + ciphertext + tag(16B)
- 密钥交换：X25519（从 Ed25519 转换）`,
  },
  {
    id: 'juejin-v2-12',
    platform: '掘金',
    angle: '架构设计',
    title: '多设备认证方案：Ed25519 + QR Code + 无账号系统',
    content: `## 背景
Code Light 不需要注册账号。设备通过 Ed25519 密钥对 + QR Code 完成认证。

## 为什么无账号
- 降低使用门槛（不需要邮箱/手机号）
- 减少隐私风险（不存个人信息）
- 简化架构（不需要用户系统）

## 配对流程
### Step 1: Mac 端生成密钥对
\`\`\`swift
let keyPair = Sodium().sign.keyPair()
// publicKey: 32 bytes, secretKey: 64 bytes
\`\`\`

### Step 2: 生成 QR Code
- 编码内容：{ publicKey, serverURL, deviceName }
- 用 CIFilter("CIQRCodeGenerator") 生成

### Step 3: iPhone 扫码
- 解析 QR Code 获取 Mac 公钥
- iPhone 也生成自己的密钥对
- 通过服务器交换公钥（此步骤本身也是加密的）

### Step 4: 握手验证
- 双方互发签名的 challenge
- 验证通过 → 配对完成
- 配对信息存 Keychain

## 安全性分析
- 中间人攻击：QR Code 扫描要求物理接近，攻击者无法介入
- 重放攻击：每次握手用随机 nonce
- 密钥泄露：私钥存 Keychain（Secure Enclave 保护）

## 多设备管理
- Mac 可以配对多个 iPhone
- 每个配对独立密钥对
- 撤销配对 = 删除对应密钥

## 踩坑
1. QR Code 容量限制：Ed25519 公钥 Base64 后 44 字符，加元数据约 200 字符，没问题
2. Keychain 在 App 重装后数据保留问题：用 kSecAttrAccessibleWhenUnlockedThisDeviceOnly`,
  },
  {
    id: 'juejin-v2-13',
    platform: '掘金',
    angle: '架构设计',
    title: '实时通信的可靠性保障：消息队列 + 幂等性 + 降级策略',
    content: `## 背景
Code Light 的核心是实时通信。手机网络不稳定，如何保证消息可靠送达？

## 三层保障体系

### 第一层：Socket.io 可靠传输
- 每条消息带 sequence number
- 接收方发 ack 确认
- 发送方维护未确认队列
- 超时（5s）自动重发

### 第二层：本地消息队列
- 断网时命令存入 CoreData
- 每条消息有 idempotency key（UUID）
- 重连后按顺序发送
- 服务端用 idempotency key 去重

### 第三层：APNs 降级
- Socket 断开 > 60s 自动切换
- 关键事件（权限请求、错误）走 APNs
- APNs 到达后唤醒 App 尝试重连 Socket

## 幂等性设计
### 为什么重要
同一条 "approve" 命令执行两次 = 灾难

### 实现
\`\`\`javascript
// 服务端
const processed = new Map() // idempotencyKey → result
if (processed.has(key)) return processed.get(key)
const result = await execute(command)
processed.set(key, result)
// 10 分钟后清理
\`\`\`

## 消息顺序保证
- 每个设备对维护独立的 sequence counter
- 乱序消息进入 reorder buffer
- 等待缺失的 sequence 最多 3s，然后强制处理

## 监控指标
- 消息投递成功率：99.7%
- P99 投递延迟：800ms（含网络）
- 降级到 APNs 频率：约 2%/天`,
  },
  {
    id: 'juejin-v2-14',
    platform: '掘金',
    angle: '架构设计',
    title: '精准路由设计：如何把消息送到正确的终端窗口',
    content: `## 背景
用户同时开 5 个 Claude Code 终端，手机发的消息要送到正确的那一个。

## 问题分析
### 广播方案的问题
- 所有终端都收到 → 执行冲突
- 用户无法指定目标

### 随机/轮询的问题
- 不可预测
- 用户体验差

## 精准路由方案

### 终端标识
每个终端连接时生成唯一 Session ID：
\`\`\`javascript
const sessionId = crypto.randomUUID()
socket.join(\`terminal:\${sessionId}\`)
\`\`\`

### 终端信息上报
连接时上报：
- 终端类型（Ghostty/Warp/iTerm2/...）
- 项目路径（cwd）
- Claude Code 会话状态
- PID

### iPhone 端展示
- 列表显示所有活跃终端
- 按项目分组
- 实时状态指示灯
- 用户点击选择目标

### 定向投递
\`\`\`javascript
io.to(\`terminal:\${targetSessionId}\`).emit('command', payload)
\`\`\`

## 边缘情况
1. 目标终端断开 → 即时通知手机 + 阻止发送
2. 终端重连 → 新 Session ID + 自动重新注册
3. 同一项目多个终端 → UI 上显示 PID 区分

## 性能
- 路由查找：O(1)，Socket.io Room 基于 Map
- 终端列表同步延迟：< 500ms
- 支持最多 20 个同时终端`,
  },
  {
    id: 'juejin-v2-15',
    platform: '掘金',
    angle: '架构设计',
    title: '独立开发者的安全架构：小团队如何做到企业级安全',
    content: `## 背景
一个人做产品，安全不能妥协。分享 MioIsland + Code Light 的安全架构。

## 原则
1. 零信任：不信任任何中间节点
2. 最小权限：每个组件只有必要的权限
3. 纵深防御：多层保护，单点失败不致命

## 传输安全
- TLS 1.3 全链路
- 端到端 Ed25519 加密（TLS 之上再加一层）
- Certificate pinning（防中间人）

## 存储安全
- iOS Keychain（Secure Enclave 保护密钥）
- macOS Keychain（同上）
- 服务端不存敏感数据

## 认证安全
- 无密码系统（Ed25519 密钥对）
- 设备配对需物理接近（QR Code）
- 每次通信都签名验证

## 代码安全
- 依赖审计：npm audit + Snyk
- 依赖锁定：package-lock.json
- Mac 端开源，接受社区审计

## 运维安全
- 服务器最小化安装
- 自动安全更新
- 日志脱敏

## 隐私合规
- 不收集个人信息 → 不需要 GDPR 合规
- 不存通信内容 → 不存在数据泄露风险
- 隐私政策：一页纸就写完了

## 成本
以上所有安全措施，额外成本：$0
开源库 + 正确的架构设计 = 免费的企业级安全`,
  },

  // juejin-v2-16 ~ juejin-v2-20: AI 编程工具/效率
  {
    id: 'juejin-v2-16',
    platform: '掘金',
    angle: 'AI效率',
    title: 'Claude Code 工作流全指南：从 CLAUDE.md 到自动化',
    content: `## 背景
使用 Claude Code 半年，总结一套高效工作流。

## CLAUDE.md：项目记忆
- 放在项目根目录
- 写清楚：技术栈、目录结构、命名规范、禁忌事项
- Claude 每次会话自动读取
- 定期更新（版本变化后）

## 会话管理
### 任务拆分
- 一个会话 = 一个明确任务
- 不要在一个会话里塞太多事

### 上下文控制
- 开头给必要上下文（不要让它猜）
- 文件太大就指定范围
- 适时开新会话（避免上下文过长）

## 审批策略
### 自动批准
- 读取文件
- 运行测试
- lint / format

### 手动审批
- 删除文件
- 修改配置文件
- 安装依赖
- 执行部署命令

## Code Light 集成
- 长任务交给 Claude，Code Light 监控
- 关键审批推到手机
- 不需要守在电脑前

## 效率数据
- 日均会话：10-15 次
- 采纳率：78%
- 估算节省：每天 3-4 小时

## 常见误区
1. 让 Claude 做架构决策（它缺全局视角）
2. 不 review 就 approve（AI 也会犯错）
3. 上下文给太多（token 浪费 + 质量下降）`,
  },
  {
    id: 'juejin-v2-17',
    platform: '掘金',
    angle: 'AI效率',
    title: '终端里的 AI：Claude Code + Ghostty + cmux 最佳组合',
    content: `## 背景
终端是 AI 编程的主战场。分享我的终端配置方案。

## Ghostty：主力终端
### 为什么选 Ghostty
- GPU 渲染，大量输出不卡
- 启动 < 100ms
- 配置文件简单（TOML）
- 内存占用 ~45MB

### 配置要点
\`\`\`toml
font-family = "JetBrains Mono"
font-size = 14
theme = "catppuccin-mocha"
window-decoration = false
\`\`\`

## cmux：会话管理
### 基本配置
- 3 个 pane 布局：主编辑 + Claude Code + 日志
- 绑定 prefix + c 创建新窗口
- 自动保存/恢复会话

### 与 MioIsland 集成
- MioIsland 自动检测 cmux session
- 显示当前 pane 中的 Claude Code 状态

## Claude Code：AI 引擎
### 工作流
1. cmux 分屏，左边写代码，右边跑 Claude
2. Claude 输出实时可见
3. MioIsland 灵动岛显示状态
4. Code Light 手机端监控

## 组合效果
- 本地开发：Ghostty + cmux + Claude Code + MioIsland
- 远程监控：Code Light on iPhone
- 全套成本：$20/月（Claude Pro 订阅）

## 替代方案对比
| 组合 | 优点 | 缺点 |
|------|------|------|
| VS Code + Copilot | 集成度高 | 不够灵活 |
| Cursor | AI 原生 | 偏重 IDE |
| Terminal + Claude | 灵活 | 需要自己配 |`,
  },
  {
    id: 'juejin-v2-18',
    platform: '掘金',
    angle: 'AI效率',
    title: '远程 AI 编程的最后一块拼图：从 SSH 到手机遥控',
    content: `## 背景
AI 编程改变了远程开发的方式：不再是远程操作编辑器，而是远程指挥 AI。

## 远程开发的演进
### 阶段 1：SSH 直连
- ssh → tmux → vim
- 简单粗暴，手机上几乎不可用

### 阶段 2：VS Code Remote
- Remote-SSH / Remote-Tunnel
- 好用，但需要一台能跑 VS Code 的设备

### 阶段 3：Cloud IDE
- GitHub Codespaces / Gitpod
- 浏览器即可，但延迟和成本问题

### 阶段 4：AI 代理 + 移动遥控
- Mac 上跑 Claude Code（本地算力）
- iPhone 用 Code Light 远程控制
- 人只需要做决策（approve/reject/指令）

## 为什么这是最后一块拼图
以前的远程开发：你在远处写代码
现在的远程开发：AI 在本地写代码，你在远处审批

## 技术实现
- 通信：Socket.io + Ed25519 E2E 加密
- 降级：APNs 推送
- 状态：Dynamic Island 实时显示
- 安全：零知识中转

## 使用场景
1. 通勤时审批 AI 的代码改动
2. 做饭时监控长时间运行的任务
3. 紧急 hotfix 不需要打开笔记本
4. 同时管理多个 AI 编程会话

## 局限性
- 大段代码 review 还是电脑上更舒服
- 复杂交互（画图、拖拽）做不到
- 依赖网络连接`,
  },
  {
    id: 'juejin-v2-19',
    platform: '掘金',
    angle: 'AI效率',
    title: 'AI 编程的成本分析：一个独立开发者的真实账单',
    content: `## 背景
AI 编程不免费。作为独立开发者，分享真实的 AI 编程开销。

## 月度账单
| 项目 | 费用 | 说明 |
|------|------|------|
| Claude Pro | $20 | 主力 AI |
| Fly.io VPS | $12 | Code Light 后端 |
| 域名 | $1 | .dev 域名年费均摊 |
| Apple Developer | $8 | $99/年均摊 |
| 总计 | ~$41 | |

## AI 使用量
- Claude Code 日均会话：10-15 次
- 月均 token 消耗：约 500 万
- Pro 额度够用（偶尔触及限制）

## ROI 分析
### 时间节省
- AI 辅助前：功能开发平均 8h
- AI 辅助后：平均 3h
- 月节省：约 120h

### 换算
- 如果这些时间值 $30/h → 月节省 $3600
- AI 成本 $41 → ROI 约 87x

## 隐藏成本
1. 学习成本：适应 AI 工作流花了约 2 周
2. 审批成本：review AI 代码的时间（不可省略）
3. 修复成本：AI 偶尔产生的 bug

## 省钱技巧
1. CLAUDE.md 写好 → 减少无效会话
2. 任务拆解清晰 → 减少 token 浪费
3. 及时结束偏离的会话

## 结论
AI 编程对独立开发者来说是性价比最高的"雇员"。
$41/月的成本换 120h/月的生产力，没有什么投资比这更划算。`,
  },
  {
    id: 'juejin-v2-20',
    platform: '掘金',
    angle: 'AI效率',
    title: '打造 AI 编程的监控体系：MioIsland + Code Light 架构详解',
    content: `## 背景
AI 编程需要监控。Claude Code 在后台跑，你怎么知道它在做什么？

## 问题
1. Claude Code 在终端里跑，看不到状态
2. 需要审批权限时必须在电脑前
3. 多个终端无法统一管理
4. 离开电脑就失去控制

## 解决方案：双端监控
### Mac 端：MioIsland（开源）
- 灵动岛像素猫显示状态
- 编码中/等待中/出错了，一目了然
- 不需要切窗口

### iPhone 端：Code Light
- 实时输出流
- 权限审批
- 指令发送
- Dynamic Island 状态

## 数据流架构
\`\`\`
Claude Code → stdout/stderr → MioIsland（本地）
                          ↓
                    Socket.io Server
                          ↓
                    Code Light（iPhone）
\`\`\`

## 监控指标
- 会话状态：running / idle / error / waiting
- 最近输出：最后 50 行
- 权限请求：待审批列表
- 终端信息：类型、项目路径、PID

## 告警机制
1. 权限请求 → Dynamic Island + 推送
2. 错误发生 → 推送 + 声音
3. 任务完成 → 静默推送

## 扩展能力
- Webhook 集成（Slack/Discord 通知）
- 日志导出
- 统计分析（会话时长、采纳率）

开源地址：github.com/anthropics/MioIsland
App Store 搜索：Code Light`,
  },

  // ============================================================
  // 即刻 20 条 (中文, 短内容)
  // ============================================================

  // jike-v2-1 ~ jike-v2-5: 开发日记
  {
    id: 'jike-v2-1',
    platform: '即刻',
    angle: '开发日记',
    title: '今天 MioIsland 到 270 star',
    content: `今天 MioIsland 到 270 star 了。

说实话比我预期的快。一个月前还是 0，当时想的是"能有 50 个就不错了"。

回看这一个月做了什么：写代码、发帖、回 Issue、修 bug、再写代码。循环。

没有什么秘诀，就是做一个自己每天都在用的东西，然后分享出去。

有时候觉得独立开发最大的乐趣不是赚钱（目前也没赚到），而是看到有人用你的东西，然后说"这个好用"。

明天继续写代码。`,
  },
  {
    id: 'jike-v2-2',
    platform: '即刻',
    angle: '开发日记',
    title: '本周进展',
    content: `本周进展汇报：

Code Light:
- 修了 3 个 crash bug（都是 Socket 断开时的边缘情况）
- 新增终端类型检测（支持 Warp 了）
- 动态岛 UI 微调，文字不再溢出

MioIsland:
- 合并了 2 个 PR（日文翻译 + bug fix）
- README 加了 GIF 演示
- Star 从 255 涨到 270

其他:
- 发了 3 条推（最好的一条 12k impressions）
- 写了 1 篇 V2EX 帖子

下周计划：Code Light v1.3 上线。

一个人做两个产品，每天感觉时间不够用。但很充实。`,
  },
  {
    id: 'jike-v2-3',
    platform: '即刻',
    angle: '开发日记',
    title: '今天修了一个诡异的 bug',
    content: `今天花了 4 小时修一个 bug：Dynamic Island 在 iPhone 15 Pro 上显示正常，但 iPhone 14 Pro 上文字被截断。

排查过程：
1. 以为是字体大小问题 → 不是
2. 以为是布局约束问题 → 不是
3. 最后发现：两代 iPhone 的 Dynamic Island 物理尺寸不一样（差 2pt）

修复方案：运行时检测设备型号，动态调整 padding。

一行代码的修复，4 小时的排查。

编程就是这样，90% 的时间在找问题，10% 的时间在写解决方案。`,
  },
  {
    id: 'jike-v2-4',
    platform: '即刻',
    angle: '开发日记',
    title: 'Claude Code 今天帮我省了 3 小时',
    content: `今天的 Claude Code 使用记录：

任务：把 Code Light 的网络层从回调改成 async/await

过程：
- 我：描述要改的文件和目标
- Claude：15 分钟改完 8 个文件
- 我：review + 修了 2 个小问题
- 全程：45 分钟

如果手动改：估计 4 小时（光找回调嵌套就头疼）

重点是我全程在用 Code Light 在手机上监控——用自己的产品管 AI 改自己的产品，这种自举的感觉特别好。

AI 编程最大的好处不是"它帮你写代码"，而是"它把你从无聊重复的工作中解放出来"。省下来的时间可以思考架构和产品。`,
  },
  {
    id: 'jike-v2-5',
    platform: '即刻',
    angle: '开发日记',
    title: '收到第一个用户打赏',
    content: `今天收到第一个用户打赏——一个日本开发者，在 GitHub 上给 MioIsland sponsor 了 $5/月。

金额不多，但意义很大。这是第一次有陌生人觉得我的作品值得付费支持。

他还留了一条消息："This little pixel cat makes my coding sessions more fun. Thank you."

说实话看到的时候有点感动。做开源项目大部分时候是没有回报的，你不知道有没有人在用，有没有人觉得好。

$5 不够买一杯咖啡（在东京的话），但它告诉我：有人在用，有人喜欢。

继续做。`,
  },

  // jike-v2-6 ~ jike-v2-10: 产品更新
  {
    id: 'jike-v2-6',
    platform: '即刻',
    angle: '产品更新',
    title: 'Code Light v1.3 上线了',
    content: `Code Light v1.3 今天上线了！

新功能：
1. 多终端精准路由——同时开好几个 Claude Code，消息能精准送到你指定的那个窗口
2. 终端列表按项目分组——一眼就知道哪个终端在跑什么
3. Dynamic Island 展开视图——不用打开 App 就能看到最近输出

修复：
- Socket 重连后偶尔丢消息的问题
- 暗色模式下文字颜色不对

这个版本我自己已经用了两周，最大的改进是多终端路由。以前同时开 3 个终端，消息经常发错窗口，现在终于解决了。

App Store 搜索 "Code Light" 更新。`,
  },
  {
    id: 'jike-v2-7',
    platform: '即刻',
    angle: '产品更新',
    title: 'MioIsland 支持 Warp 终端了',
    content: `有 Warp 用户一直在催的功能终于做了——MioIsland 现在支持自动检测 Warp 终端。

之前只支持 Ghostty / iTerm2 / Terminal.app / cmux，现在加上 Warp 总共支持 10 种终端。

检测原理：读取 $TERM_PROGRAM 环境变量。Warp 的值是 "WarpTerminal"，比较好识别。

顺便优化了终端检测的 fallback 逻辑：如果环境变量缺失，通过进程树往上找父进程。

这个 Issue 已经挂了两周，今天终于关掉了。感觉舒畅。

GitHub: github.com/anthropics/MioIsland`,
  },
  {
    id: 'jike-v2-8',
    platform: '即刻',
    angle: '产品更新',
    title: '处理了一波用户反馈',
    content: `这周集中处理了一波 Code Light 的用户反馈：

反馈 1："为什么断网后重连要等很久？"
→ 重连超时从默认 30s 改成了 10s，加了可视化进度条

反馈 2："能不能支持 iPad？"
→ 已经在做了，下个版本。iPad 的大屏幕做代码 review 体验会好很多

反馈 3："能不能发语音指令？"
→ 有意思的想法，加到 backlog 了。技术上可行（Speech → Text → Claude），但体验需要打磨

反馈 4："App 图标不好看"
→ 收到，但…我觉得挺好看的啊（逃

独立开发者处理反馈的好处是快。从收到反馈到修完 push，可以 24 小时内搞定。`,
  },
  {
    id: 'jike-v2-9',
    platform: '即刻',
    angle: '产品更新',
    title: 'Buddy 系统上线',
    content: `MioIsland 的 Buddy 系统上线了！除了像素猫，现在有 18 种 ASCII Art 精灵可以选。

每个 Buddy 有：
- 稀有度（Common → Legendary）
- 性格（勤奋/懒散/好奇/...）
- 进度条（使用时长解锁更多）

其实这个功能完全是为了好玩做的，和核心功能没关系。但用户反馈说"这让编程变得更有趣了"。

有时候产品不需要每个功能都"有用"。有些功能的价值就是让人觉得开心。

最受欢迎的 Buddy 目前是"绿色爱心眼猫咪"——会话完成时出现，莫名其妙很治愈。`,
  },
  {
    id: 'jike-v2-10',
    platform: '即刻',
    angle: '产品更新',
    title: '国际化终于做完了',
    content: `MioIsland 的国际化终于做完了。支持：Auto / English / 中文。

过程比想象中复杂：
1. 抽取所有 UI 字符串到 Localizable.strings（200+ 条）
2. 处理字符串插值（Swift 的 String(format:) 和 SwiftUI 的 LocalizedStringKey 行为不同）
3. 中文和英文 UI 宽度差异导致的布局问题
4. 日期/数字格式本地化

最感动的是这个功能起源于一个社区 PR。一个台湾开发者主动把所有字符串抽出来，还附了繁体中文翻译。我在此基础上加了简体中文。

开源的美妙之处：你不是一个人在做。即使你是一个人的团队。`,
  },

  // jike-v2-11 ~ jike-v2-15: 独立开发者感悟
  {
    id: 'jike-v2-11',
    platform: '即刻',
    angle: '感悟',
    title: '一个人做产品的孤独感',
    content: `一个人做产品最难的不是写代码，是孤独。

没有人讨论技术方案，没有人 review 你的代码，没有人在你卡住的时候说"要不要一起看看"。

凌晨 2 点修完一个 bug，想找人庆祝，发现只有猫在旁边睡觉。

怎么应对：
1. 即刻/Twitter 发开发日记——写出来就不觉得孤独了
2. 开源——PR 和 Issue 是最好的交流
3. 用 Claude Code 当结对编程的搭档（认真的）
4. 参加线下 meetup——见见真人

独立开发不是独自开发。只是团队分散在互联网上。

如果你也在一个人做产品，在评论区打个招呼吧。让我知道我不是一个人。`,
  },
  {
    id: 'jike-v2-12',
    platform: '即刻',
    angle: '感悟',
    title: '被 App Store 拒审的经历',
    content: `Code Light 第一次提交 App Store 审核被拒了。

原因：审核人员没有 Mac，无法测试"远程控制 Mac 上的 Claude Code"功能。所以判定 App 不满足"最低功能要求"。

我的内心：？？？

解决方案：加了一个 Demo 模式——不需要连接 Mac，模拟 Claude Code 的输出和交互。审核人员可以体验完整功能。

第二次提交通过了。

教训：
1. 你的 App 如果依赖外部设备/服务，必须提供独立的演示模式
2. 审核指南 4.2 写得很模糊，但他们确实在执行
3. 被拒不可怕，理解审核逻辑后改就行

写 App Store 审核说明的时间比写代码还多。这算 iOS 开发的一部分吧。`,
  },
  {
    id: 'jike-v2-13',
    platform: '即刻',
    angle: '感悟',
    title: '关于完美主义和发布',
    content: `有一个功能我改了 5 遍才发布。

第 1 遍：功能完成，但 UI 不够好看
第 2 遍：UI 改好了，但动画不够流畅
第 3 遍：动画改好了，但发现一个边缘 case
第 4 遍：边缘 case 修了，但代码不够优雅
第 5 遍：代码重构了，但…等等，我是不是该发布了

然后我发布了。用户反馈：功能好用，其他的没注意。

那 4 次额外的修改，对用户来说完全透明。但花了我 3 天时间。

现在的原则：第一遍写完，跑通测试，没有明显 bug，就发。

完美是一个移动的靶子，永远打不中。不如先发出去，让用户告诉你哪里该改。`,
  },
  {
    id: 'jike-v2-14',
    platform: '即刻',
    angle: '感悟',
    title: '开源带来的意外收获',
    content: `开源 MioIsland 带来的意外收获：

1. 简历加分——面试时对方说"哦你做了这个，我看过"
2. 技术提升——社区 PR 让我学到了不知道的 API
3. 用户信任——"代码都公开的，安全没问题"
4. 交朋友——有几个贡献者变成了网友
5. 被抄袭——呃，这算收获吗（至少说明有人觉得值得抄？）

最大的收获其实是心态变化。以前写代码怕被人看到不好的地方，现在觉得"被人看到→被人提意见→代码变好"是一个良性循环。

开源最难的不是技术，是把代码展示给所有人的勇气。

但一旦你跨出这一步，你会发现世界上有很多善意的人。`,
  },
  {
    id: 'jike-v2-15',
    platform: '即刻',
    angle: '感悟',
    title: '赚到第一笔钱',
    content: `Code Light 上线一个月，总收入 $1,847。

具体分布：
- Pro 月订阅（$4.99）：287 人
- 终身买断（$19.99）：18 人

扣掉 Apple 30% 抽成和服务器成本后，净收入约 $1,240。

够不够？
- 够付房租：不够
- 够覆盖开发成本（服务器 + Apple Developer）：够了
- 够让我继续做下去的动力：绝对够

有意思的是终身买断只有 18 人，但贡献了 $360。未来可能提价到 $29.99。

第一桶金的意义不在于金额，在于验证：有人愿意为你做的东西付费。

这是从"做着玩"到"做成事业"的分界线。`,
  },

  // jike-v2-16 ~ jike-v2-20: 互动讨论
  {
    id: 'jike-v2-16',
    platform: '即刻',
    angle: '讨论',
    title: '你们用什么终端？',
    content: `好奇大家在用什么终端？

我目前的选择：
- 主力：Ghostty（GPU 渲染真的快）
- 备用：iTerm2（功能全）
- 尝试过：Warp（好看但吃内存）、Alacritty（太简陋）、Kitty（配置复杂）

做 MioIsland 的时候需要适配各种终端，所以几乎都试了一遍。

个人排名：Ghostty > iTerm2 > Warp > Kitty > Alacritty > Terminal.app

选终端我最看重的三点：
1. 渲染性能（大量输出不卡）
2. 启动速度（< 200ms）
3. 配置简单（不想花一下午写配置文件）

你们呢？用什么终端？最看重什么？`,
  },
  {
    id: 'jike-v2-17',
    platform: '即刻',
    angle: '讨论',
    title: 'AI 编程每月花多少钱？',
    content: `聊聊 AI 编程的开销。

我的账单：
- Claude Pro: $20/月
- 偶尔 GPT-4 对比: $20/月（不是每月）
- GitHub Copilot: $0（退订了，Claude Code 更好用）

总计：约 $20-40/月

我的感受：Claude Code 的 $20/月是我花过最值的订阅。每天节省 3-4 小时，月节省 100+ 小时。

但我知道有些人觉得贵。也有人 API 调用费超过 $100/月的。

想问问大家：
1. 你们 AI 编程每月花多少？
2. 觉得值吗？
3. 用什么模型/工具？

分享你的数字，让我们看看独立开发者在 AI 上的平均投入。`,
  },
  {
    id: 'jike-v2-18',
    platform: '即刻',
    angle: '讨论',
    title: '远程办公用什么工具？',
    content: `最近研究远程开发的工具链，发现变化好大。

我目前的远程开发工具：
- 代码同步：Git（没什么好说的）
- 远程连接：Tailscale（组 VPN，家里的 Mac 随时可达）
- AI 遥控：Code Light（手机控制 Mac 上的 Claude Code）
- 文件传输：AirDrop / iCloud
- 通信：Telegram / Discord

以前还用过 SSH + tmux、VS Code Remote、mosh，但自从有了 Claude Code + Code Light，远程开发的方式完全变了——不是远程写代码，而是远程指挥 AI 写代码。

你们远程开发用什么工具？
- 有没有什么工具用了就回不去的？
- 有没有什么痛点一直没解决的？

评论区分享一下，互相安利。`,
  },
  {
    id: 'jike-v2-19',
    platform: '即刻',
    angle: '讨论',
    title: '独立开发者怎么做冷启动？',
    content: `Code Light 的冷启动策略，分享给同样在做产品的朋友：

渠道效果排名：
1. V2EX 分享创造（转化率最高，技术用户精准）
2. Twitter/X Build in Public（长期，曝光量大）
3. 即刻独立开发者圈子（社区氛围好，互动多）
4. Hacker News（爆发力强，但难上首页）
5. 掘金/SegmentFault（技术文章引流）

不起作用的：
- 朋友圈（非技术朋友看不懂）
- 公众号（增长太慢）
- 知乎（回答容易被折叠）

关键经验：
1. 不要同时铺所有渠道，先做好 2-3 个
2. 真诚分享 > 营销话术
3. 有数字就放数字（人对数字有天然兴趣）
4. 持续更新比一次性发布重要

你们的冷启动用了什么渠道？什么最有效？`,
  },
  {
    id: 'jike-v2-20',
    platform: '即刻',
    angle: '讨论',
    title: '2026 年学什么技术最值？',
    content: `年初立的 flag 是"学一门新技术"，到了 4 月还没决定学什么。

我在纠结的几个方向：
1. Rust——系统编程，CLI 工具需求大，但学习曲线陡
2. Flutter——跨平台，但我已经会 SwiftUI 了
3. LLM 微调——AI 热门，但不确定独立开发者用不用得上
4. WebAssembly——前景好，但目前场景有限

已有技能：Swift / Node.js / TypeScript / Python（够用水平）

选择标准：
- 能在 6 个月内用到自己的产品里
- 市场需求增长中
- 个人有兴趣

目前倾向 Rust（可以用来写 MioIsland 的高性能模块）。

你们 2026 年在学什么？为什么选那个方向？来聊聊。`,
  },
  // ============================================================
  // 抖音图文 (20条)
  // ============================================================
  {
    id: 'douyin-v3-1',
    platform: '抖音',
    angle: 'D',
    title: '手机能写代码？不，比那更离谱',
    content: `手机写代码？不不不，比那离谱多了。

我用 iPhone 远程指挥 Mac 上的 AI 自动写代码。出门遛狗的时候，Claude Code 在家帮我重构整个模块。手机上实时看进度，需要审批权限就滑一下灵动岛。

回到家，代码写完了，测试也跑通了。

这不是未来科技，这是我每天的工作流。

---
【配图建议】
图1（封面）：深色背景 + iPhone 屏幕展示 Code Light 界面 + 大字「手机能写代码？不，比那更离谱」
图2：Code Light 主界面截图，展示多个 Claude Code 会话
图3：手机灵动岛弹出权限审批通知
图4：Mac 屏幕上 Claude Code 正在写代码的截图
图5：手机和 Mac 并排展示同一个项目的对比图
图6：最终效果——测试通过的终端截图

【豆包P图提示词】
封面：「在纯黑渐变背景上，左侧放置 iPhone 手机实拍图展示代码界面，右侧叠加白色加粗大字"手机能写代码？"第二行蓝色大字"不，比那更离谱"，添加蓝紫色科技光效，竖版 1080×1920」
截图：「给这张 iPhone 截图添加手机外壳 mockup，背景替换为深灰渐变，四周添加柔和蓝色光晕效果」

#远程编程 #AI写代码 #程序员效率 #iPhone开发工具 #ClaudeCode`,
  },
  {
    id: 'douyin-v3-2',
    platform: '抖音',
    angle: 'F',
    title: '安装了 6 个灵动岛工具，结局意想不到',
    content: `网上能找到的 Mac 灵动岛工具，我全装了一遍。

第1个：只能显示音乐，卸载。
第2个：收费 68，功能单一，卸载。
第3个：动画卡顿，卸载。
第4个：不支持 M 芯片，卸载。
第5个：只是个装饰，卸载。
第6个：MioIsland——开源免费，能跑像素猫，能显示 AI 编程状态，270 star。

留下来了。

---
【配图建议】
图1（封面）：6 个 App 图标排列 + 大字「安装了 6 个灵动岛工具」+ 红色叉号标记前 5 个
图2：第1-2个工具的截图 + 红色「卸载」标记
图3：第3-4个工具的截图 + 红色「卸载」标记
图4：第5个工具的截图 + 红色「卸载」标记
图5：MioIsland 截图 + 绿色「留下」标记
图6：MioIsland GitHub 页面 270 star 截图
图7：MioIsland 像素猫动画在刘海区运行的截图

【豆包P图提示词】
封面：「深色背景上排列 6 个 App 图标（2行3列），前5个上叠加红色半透明叉号，最后一个发出金色光芒，上方白色大字"安装了6个灵动岛工具"，下方黄色小字"结局意想不到"，1080×1920 竖版」
截图：「左右分屏对比布局，左侧标注 Before（普通灵动岛截图）右侧标注 After（MioIsland 像素猫截图），中间添加白色箭头，深色背景」

#Mac灵动岛 #开源软件 #程序员必备 #MacApp推荐 #MioIsland`,
  },
  {
    id: 'douyin-v3-3',
    platform: '抖音',
    angle: 'C',
    title: '你的 AI 每天偷偷传了多少数据？',
    content: `你每天用 AI 写代码，有没有想过它传了什么出去？

很多远程 AI 工具的数据链路：
你的代码 → 工具服务器 → AI 服务器 → 返回

中间那一跳，你的代码在别人的服务器上走了一圈。

Code Light 的数据链路：
你的手机 → 你的 Mac（本地 Claude Code）

没有中间服务器。你的代码始终在你自己的设备上。这不是营销话术，是架构决定的。

---
【配图建议】
图1（封面）：锁头图标 + 大字「你的 AI 偷偷传了多少数据？」+ 红色警告色调
图2：普通工具的数据流向图（手机→服务器→AI→服务器→Mac）标红
图3：Code Light 的数据流向图（手机→Mac）标绿
图4：Code Light 设置页面截图，展示本地连接
图5：对比总结图——左红右绿

【豆包P图提示词】
封面：「深红色警告风格背景，中央放置一个发光的锁头图标，上方白色大字"你的AI"，下方红色大字"每天偷偷传了多少数据？"，添加数据流粒子效果，1080×1920 竖版」
截图：「制作数据流向示意图，左侧"普通工具"路径用红色箭头（手机→云服务器→AI→返回），右侧"Code Light"路径用绿色箭头（手机→Mac），深色背景，扁平设计风格」

#数据隐私 #AI安全 #程序员工具 #代码安全 #远程开发`,
  },
  {
    id: 'douyin-v3-4',
    platform: '抖音',
    angle: 'D',
    title: '上班时间用手机的正确方式',
    content: `领导：上班时间不要玩手机。
我：我没玩，我在工作。

打开手机 → Code Light → 选择一个 Claude Code 会话 → 发送指令「重构这个函数，加上错误处理」→ 锁屏放桌上。

5 分钟后灵动岛弹通知：「需要你审批删除旧文件」→ 滑一下同意 → 继续开会。

会后看结果：代码改完了，PR 也提了。

这才是上班用手机的正确方式。

---
【配图建议】
图1（封面）：办公室场景 + 手机屏幕亮着 Code Light + 大字「上班用手机的正确方式」
图2：Code Light 发送指令的界面截图
图3：锁屏状态下灵动岛显示编程状态
图4：灵动岛弹出审批通知的截图
图5：最终 PR 提交成功的截图
图6：表情包风格总结图「老板以为我在摸鱼，其实我在写代码」

【豆包P图提示词】
封面：「办公室虚化背景，前景是一只手持 iPhone 展示代码界面，上方叠加白色大字"上班用手机"，下方蓝色大字"的正确方式"，添加柔和白色光效，1080×1920 竖版」
截图：「给这张手机截图添加 iPhone 外壳 mockup，背景替换为办公桌木纹虚化效果，添加轻微暖色滤镜」

#程序员日常 #远程编程 #效率工具 #AI编程 #上班摸鱼`,
  },
  {
    id: 'douyin-v3-5',
    platform: '抖音',
    angle: 'B',
    title: 'Mac 刘海里跑出来一只猫？？',
    content: `等等，我 Mac 的刘海里怎么有一只猫？？

它还会动！写代码的时候在打字，空闲的时候在睡觉，出错了还会惊讶。

这是 MioIsland，一个开源的 Mac 灵动岛工具。刘海区域不再浪费，住进去一只像素猫。

而且有 18 种不同的猫可以选。每只都有自己的性格和稀有度。

最重要的：开源免费。GitHub 搜 MioIsland。

---
【配图建议】
图1（封面）：Mac 刘海区域特写 + 像素猫探出头 + 大字「刘海里跑出来一只猫？？」
图2：像素猫在刘海区域打字的动画截图
图3：像素猫睡觉状态的截图
图4：像素猫惊讶状态的截图
图5：18 种猫的选择面板截图
图6：其中 4-5 只特色猫的展示
图7：GitHub 开源页面截图

【豆包P图提示词】
封面：「MacBook 刘海区域特写放大，一只可爱的像素风格猫咪从刘海边缘探出头，上方叠加白色手写风大字"刘海里跑出来一只猫？？"，深色背景，添加惊讶表情符号效果，1080×1920 竖版」
截图：「给这张 Mac 刘海区域截图放大 3 倍，保持像素清晰，背景替换为纯黑，四周添加柔和蓝紫色光晕」

#Mac灵动岛 #像素猫 #开源免费 #MacBook美化 #MioIsland #程序员桌面`,
  },
  {
    id: 'douyin-v3-6',
    platform: '抖音',
    angle: 'C',
    title: 'Mac 灵动岛一键安装教程',
    content: `Mac 灵动岛，3 分钟搞定，跟着做：

Step 1：打开 GitHub 搜索 MioIsland
Step 2：点 Releases → 下载最新 .dmg
Step 3：拖进 Applications 文件夹
Step 4：打开 App → 选一只你喜欢的猫
Step 5：授权辅助功能权限

搞定！刘海区域现在住着一只像素猫了。

它不只是装饰——还能显示 AI 编程状态、Spotify 音乐、系统监控。

全部免费，开源项目。

---
【配图建议】
图1（封面）：深色背景 + MioIsland 图标 + 大字「一键安装教程」+ Step by Step 标签
图2：GitHub Release 页面截图，箭头指向下载按钮
图3：拖拽安装 dmg 的截图
图4：App 首次打开的选猫界面截图
图5：辅助功能权限授权的截图
图6：安装完成后刘海区域展示像素猫的效果截图
图7：完成！最终效果全景图

【豆包P图提示词】
封面：「深色科技背景，中央放置 MioIsland 的 App 图标（像素猫），上方白色大字"Mac 灵动岛"，下方蓝色大字"一键安装教程"，左侧添加 Step by Step 竖排小字标签，1080×1920 竖版」
截图：「给每张步骤截图添加圆角和编号（Step 1、Step 2 等），红色箭头指向关键按钮，背景统一为深灰色」

#Mac教程 #灵动岛安装 #开源软件 #MacBook技巧 #程序员工具`,
  },
  {
    id: 'douyin-v3-7',
    platform: '抖音',
    angle: 'A',
    title: 'iPhone 配对 Mac 全过程',
    content: `用 iPhone 远程控制 Mac 上的 Claude Code，只需要 3 步：

Step 1：Mac 上打开 MioIsland → 设置 → 开启远程连接
Step 2：iPhone 上 App Store 下载 Code Light
Step 3：扫码配对 → 完成

就这么简单。现在你的 iPhone 可以：
✅ 查看所有 Claude Code 会话
✅ 发送编程指令
✅ 审批文件操作权限
✅ 灵动岛实时显示进度

配对一次，以后自动连接。

---
【配图建议】
图1（封面）：iPhone 和 Mac 并排 + 连接线动画 + 大字「3 步配对」
图2：Mac 上 MioIsland 设置页面截图
图3：App Store 中 Code Light 的页面截图
图4：扫码配对过程的截图
图5：配对成功后 iPhone 展示会话列表
图6：最终效果——手机远程操控的实际截图

【豆包P图提示词】
封面：「深色背景，左侧 MacBook 右侧 iPhone，中间用发光的蓝色虚线连接，上方白色大字"iPhone 配对 Mac"，下方黄色标签"只需3步"，1080×1920 竖版」
截图：「给配对过程截图添加步骤编号标签和红色箭头指引，背景统一深色，每张图之间风格一致」

#iPhone技巧 #Mac远程控制 #ClaudeCode #AI编程 #效率工具`,
  },
  {
    id: 'douyin-v3-8',
    platform: '抖音',
    angle: 'C',
    title: 'Claude Code 效率翻倍的 3 个设置',
    content: `用 Claude Code 但效率上不去？这 3 个设置帮你翻倍：

设置1：自定义 System Prompt
→ 告诉 Claude 你的项目结构和编码习惯，减少反复解释

设置2：开启 MioIsland 灵动岛监控
→ 不用切窗口就能看到 AI 当前在干嘛，该审批就审批

设置3：配合 Code Light 手机端
→ 离开电脑也能看进度，通勤时间也是工作时间

这三个搭配起来，我的日均完成任务数直接翻倍了。

---
【配图建议】
图1（封面）：大字「效率翻倍」+ Claude Code logo + 数字 3 高亮
图2：System Prompt 配置界面截图 + 说明文字
图3：MioIsland 灵动岛显示编程状态的截图
图4：Code Light 手机端截图
图5：Before/After 效率对比图

【豆包P图提示词】
封面：「深色背景，中央大号白色数字"3"带蓝色发光效果，上方白色大字"Claude Code"，下方黄色大字"效率翻倍的设置"，添加向上箭头图标，1080×1920 竖版」
截图：「给每张设置截图添加编号圆圈标记和简短说明文字条，背景统一深灰渐变，关键区域用蓝色方框高亮」

#ClaudeCode #AI编程效率 #程序员技巧 #开发工具 #效率提升`,
  },
  {
    id: 'douyin-v3-9',
    platform: '抖音',
    angle: 'D',
    title: '远程启动 AI 写代码，只需要两步',
    content: `出门在外想让 AI 帮你写代码？两步搞定：

第一步：打开 Code Light → 选择你的 Mac
第二步：输入指令，比如「帮我写一个用户登录模块，要有输入验证和错误处理」

然后你就可以去忙别的了。

AI 在你的 Mac 上自动写代码，遇到需要你确认的操作会推送到手机。你随时都能看进度、给反馈。

实测：一次通勤时间完成了一个完整的 API 模块。

---
【配图建议】
图1（封面）：手机屏幕 + 「两步启动」大字 + 代码背景
图2：Code Light 选择 Mac 设备的截图
图3：输入编程指令的界面截图
图4：AI 正在写代码的进度展示
图5：手机收到审批通知的截图
图6：最终代码完成的结果截图

【豆包P图提示词】
封面：「深色代码风格背景（显示模糊的代码行），前景放置手机截图，上方叠加白色大字"远程启动 AI 写代码"，下方蓝色标签"只需两步"，1080×1920 竖版」
截图：「给手机截图添加 iPhone 外壳和柔和阴影，背景为纯黑渐变，底部添加步骤说明文字条」

#远程编程 #AI写代码 #手机编程 #程序员效率 #CodeLight`,
  },
  {
    id: 'douyin-v3-10',
    platform: '抖音',
    angle: 'A',
    title: '一部手机管理 3 台 Mac 的方法',
    content: `公司一台 Mac，家里一台 Mac，还有一台 Mac Mini 当服务器。

以前来回切很痛苦。现在用 Code Light，一部 iPhone 管理全部。

打开 App → 三台设备都在列表里 → 点哪台操作哪台。

公司的在跑测试 → 看一眼进度 ✅
家里的在部署 → 审批一下权限 ✅
Mini 在跑后台任务 → 查看日志 ✅

一个人，一部手机，三台电脑。

---
【配图建议】
图1（封面）：一部手机 + 三台 Mac 图标围绕 + 大字「一部手机管 3 台 Mac」
图2：Code Light 设备列表截图，显示 3 台设备
图3：切换到公司 Mac 的会话截图
图4：切换到家里 Mac 的会话截图
图5：切换到 Mac Mini 的会话截图
图6：总结图——连接拓扑示意

【豆包P图提示词】
封面：「深色背景，中央一部 iPhone 发出蓝色光芒，三台 MacBook 以三角形排列在四周，用蓝色发光连线连接到手机，上方白色大字"一部手机"，下方蓝色大字"管理 3 台 Mac"，1080×1920 竖版」
截图：「给设备列表截图添加设备图标和标签（公司/家里/服务器），背景统一深色，每个设备用不同颜色标记区分」

#多设备管理 #远程控制 #程序员工具 #Mac技巧 #效率办公`,
  },
  {
    id: 'douyin-v3-11',
    platform: '抖音',
    angle: 'D',
    title: '程序员的 iPhone 桌面长什么样',
    content: `分享一下我的 iPhone 桌面，程序员版：

第一页：日常 App（微信、地图、支付宝这些）

第二页：开发工具
→ Code Light（远程 Claude Code）
→ GitHub Mobile（看 PR 和 issue）
→ TestFlight（测试自己的 App）
→ Termius（紧急 SSH）
→ Working Copy（Git 操作）

重点是 Code Light 在 Dock 栏——因为用得最多。
灵动岛常驻显示 AI 编程状态。

你的桌面长什么样？评论区晒一下。

---
【配图建议】
图1（封面）：iPhone 桌面截图 + 大字「程序员的 iPhone 桌面」
图2：第一页桌面截图（日常 App）
图3：第二页桌面截图（开发工具高亮标注）
图4：Code Light 在 Dock 栏的特写
图5：灵动岛显示编程状态的截图
图6：各个开发 App 的简介标注图

【豆包P图提示词】
封面：「iPhone 桌面截图作为背景（稍微模糊），上方叠加半透明黑色遮罩，白色大字"程序员的 iPhone 桌面"居中，底部小字"开发工具大公开"，1080×1920 竖版」
截图：「在 iPhone 桌面截图上，用白色圆角矩形标注框+箭头指向关键 App，标注文字说明每个 App 的用途」

#程序员桌面 #iPhone桌面分享 #开发工具 #手机桌面 #程序员日常`,
  },
  {
    id: 'douyin-v3-12',
    platform: '抖音',
    angle: 'D',
    title: '咖啡厅里最安静的那个人在干嘛',
    content: `咖啡厅里最安静的那个人，没带电脑，就一部手机。

但他在写代码。

打开 Code Light → 连上家里的 Mac → 让 Claude Code 写一个数据库迁移脚本。

点一杯美式，靠窗坐下。

手机震了一下：「需要确认：是否执行 migration？」

滑一下同意。继续喝咖啡。

这就是 2026 年的远程开发。不需要背电脑，不需要找插座。

---
【配图建议】
图1（封面）：咖啡厅场景 + 手机屏幕亮着 + 大字「最安静的那个人在干嘛」
图2：咖啡厅桌面上放着手机和咖啡的照片
图3：手机上 Code Light 界面截图
图4：发送编程指令的截图
图5：收到审批通知的截图
图6：代码执行完成的结果截图

【豆包P图提示词】
封面：「咖啡厅暖色调背景虚化，前景是木桌上一杯咖啡旁边放着亮屏的 iPhone，上方叠加白色大字"咖啡厅里最安静的那个人"，下方小字"在干嘛？"，添加柔和暖色光效，1080×1920 竖版」
截图：「给手机截图添加咖啡厅环境的虚化背景，添加暖色调滤镜，保持屏幕内容清晰」

#远程办公 #咖啡厅工作 #程序员生活 #数字游民 #CodeLight`,
  },
  {
    id: 'douyin-v3-13',
    platform: '抖音',
    angle: 'D',
    title: '健身完回来，代码写好了',
    content: `今天的工作流：

18:00 给 Claude Code 下指令：「重写支付模块，参考 Stripe 最新 API 文档」
18:05 出门去健身房
19:30 健身完，打开手机看一眼

Code Light 通知：3 个文件修改完成，1 个需要审批。

审批完 → 回家 → 打开电脑 → 代码已经在那了，跑一遍测试，全绿。

用 AI 写代码最爽的地方：它不需要休息，但你需要。

---
【配图建议】
图1（封面）：哑铃 + 手机 + 代码 = 大字「健身完，代码写好了」
图2：出门前在 Mac 上启动 Claude Code 任务的截图
图3：Code Light 发送指令的截图
图4：健身场景（可以用图标/插画代替）
图5：手机收到完成通知的截图
图6：回家后电脑上测试全绿的截图

【豆包P图提示词】
封面：「深色背景，左侧放置哑铃图标，右侧放置代码编辑器截图，中间用白色大字"健身完回来"上方，"代码写好了"下方，添加绿色对勾效果，1080×1920 竖版」
截图：「制作时间线信息图：18:00 下指令→18:05 出门→19:30 回来看结果，每个节点配对应截图缩略图，深色背景」

#程序员健身 #AI写代码 #工作生活平衡 #远程编程 #效率`,
  },
  {
    id: 'douyin-v3-14',
    platform: '抖音',
    angle: 'D',
    title: '高铁上打开手机看到这个画面',
    content: `高铁上无聊打开手机，灵动岛上有个小猫在动。

点开一看：MioIsland 在显示我 Mac 上 Claude Code 的状态——原来出门前忘关了，AI 还在跑。

顺手打开 Code Light 看了一眼，Claude 已经自动完成了 80% 的重构任务。

还有两个文件操作需要审批。在高铁上滑了两下，审批通过。

到站的时候，任务 100% 完成。

出门忘关 AI 也不是坏事。

---
【配图建议】
图1（封面）：高铁车窗 + 手机屏幕显示灵动岛像素猫 + 大字「高铁上看到这个画面」
图2：灵动岛显示 AI 编程状态的特写截图
图3：Code Light 查看任务进度 80% 的截图
图4：审批文件操作的截图
图5：任务 100% 完成的截图

【豆包P图提示词】
封面：「高铁车窗模糊风景作为背景，前景手持 iPhone 展示灵动岛上的像素猫，上方白色大字"高铁上打开手机"，下方蓝色大字"看到这个画面"，1080×1920 竖版」
截图：「给灵动岛截图做放大特写处理，添加放大镜效果框，背景虚化为高铁内部场景」

#高铁通勤 #远程编程 #灵动岛 #程序员日常 #AI编程`,
  },
  {
    id: 'douyin-v3-15',
    platform: '抖音',
    angle: 'D',
    title: '睡前最后看一眼手机',
    content: `睡前最后看一眼手机的习惯改不了。

但现在看的不是朋友圈，是 Code Light。

「Claude 说：所有任务已完成。3 个文件已修改，测试全部通过。明天可以直接提 PR。」

灵动岛上的像素猫也睡着了（MioIsland 空闲状态动画）。

关灯，安心睡觉。

明天起来最舒服的事：打开电脑，代码都写好了，直接 review 就行。

---
【配图建议】
图1（封面）：暗色卧室场景 + 手机亮光 + 大字「睡前最后看一眼」
图2：Code Light 显示任务完成的截图
图3：灵动岛像素猫睡觉状态的截图
图4：第二天打开电脑看到代码已完成的截图
图5：代码 review 通过提交 PR 的截图

【豆包P图提示词】
封面：「深蓝色夜晚氛围背景，一部 iPhone 屏幕发出柔和光芒照亮周围，上方白色大字"睡前最后看一眼手机"，手机屏幕隐约显示代码完成的界面，添加月亮和星星元素，1080×1920 竖版」
截图：「给完成状态截图添加柔和的蓝色夜间滤镜，降低亮度和对比度，营造夜晚氛围」

#程序员睡前 #AI帮你写代码 #远程编程 #效率工具 #睡前习惯`,
  },
  {
    id: 'douyin-v3-16',
    platform: '抖音',
    angle: 'E',
    title: '一个人做两个 App 的第 14 天',
    content: `一个人同时做 MioIsland（Mac 端）和 Code Light（iPhone 端），第 14 天记录：

Day 1-3：搭框架，两个项目来回切
Day 4-7：MioIsland 核心功能完成，像素猫能动了
Day 8-10：Code Light 远程连接调通
Day 11-13：两端联调，bug 多到崩溃
Day 14：终于能从 iPhone 操控 Mac 上的 Claude Code 了

感悟：
- 一个人做两个 App 不是 2 倍工作量，是 4 倍（联调）
- AI 帮了大忙但不能替代系统设计
- 像素猫是坚持下去的动力（看它跑就开心）

MioIsland 已开源，270 star。Code Light 已上架 App Store。

---
【配图建议】
图1（封面）：日历 + 大字「一个人做两个 App」+ 「Day 14」标记
图2：Day 1-3 的开发截图/commit 记录
图3：Day 4-7 像素猫第一次能动的截图
图4：Day 8-10 远程连接调通的截图
图5：Day 11-13 bug 列表截图
图6：Day 14 最终效果截图
图7：GitHub star 数和 App Store 上架截图

【豆包P图提示词】
封面：「深色背景，左侧竖排日历标记从 Day 1 到 Day 14（高亮 Day 14），右侧放置两个 App 图标，上方白色大字"一个人做两个App"，下方小字"第14天记录"，1080×1920 竖版」
截图：「制作时间线信息图，纵向排列 Day 1-3、4-7、8-10、11-13、14 五个阶段，每个阶段配缩略截图和一句话描述，深色背景」

#独立开发者 #App开发日记 #程序员日常 #开源项目 #BuildInPublic`,
  },
  {
    id: 'douyin-v3-17',
    platform: '抖音',
    angle: 'E',
    title: '从 270 star 到现在',
    content: `MioIsland 的 star 增长记录：

第 1 天：0 star（只有我自己）
第 3 天：12 star（朋友捧场）
第 7 天：47 star（V2EX 发了一帖）
第 14 天：120 star（Twitter 有人转发了）
第 21 天：200 star（Hacker News 短暂上榜）
现在：270 star

每一个 star 都是一个真实的开发者觉得这个项目有用。

做开源不是为了 star，但 star 是最好的正反馈。

下一个目标：500 star。做更多功能，对得起每一个 star。

---
【配图建议】
图1（封面）：GitHub star 图标 + 大字「270 ⭐」+ 增长曲线
图2：第 1 天 0 star 的 GitHub 截图
图3：增长曲线图（手绘风格）
图4：V2EX 帖子截图
图5：Twitter 转发截图
图6：当前 270 star 的 GitHub 页面截图
图7：下一个目标 500 star 的计划图

【豆包P图提示词】
封面：「深色背景，中央金色大号 GitHub Star 图标，下方白色大字"270"，上方小字"从0到"，添加向上增长的金色粒子效果和光芒，1080×1920 竖版」
截图：「制作 star 增长折线图，横轴为天数纵轴为 star 数，关键节点标注事件（V2EX发帖、Twitter转发、HN上榜），深色背景蓝色折线金色节点」

#开源项目 #GitHub #独立开发者 #Star增长 #MioIsland #BuildInPublic`,
  },
  {
    id: 'douyin-v3-18',
    platform: '抖音',
    angle: 'E',
    title: '被抄名字后我做了一个决定',
    content: `上个月发现有人抄了 MioIsland 的名字做了一个山寨版。

第一反应：生气。
第二反应：说明这个方向有人认可。
第三反应：做了一个决定——开源。

把核心代码全部开源，MIT 协议。

逻辑很简单：
- 抄名字我没法阻止
- 但开源社区会认原版
- 技术实力才是真正的护城河
- 270 个 star 就是 270 个见证者

结果：开源后反而涨得更快了。社区有人帮忙提 PR，修 bug，加功能。

被抄不可怕，怕的是因为被抄就畏手畏脚。

---
【配图建议】
图1（封面）：大字「被抄名字后」+ 下方「我做了一个决定」
图2：发现山寨版的截图（打码处理）
图3：做出开源决定的心路历程文字图
图4：GitHub 开源页面截图
图5：社区 PR 和 issue 互动截图
图6：Star 增长的 before/after 对比

【豆包P图提示词】
封面：「深色背景，上方白色大字"被抄名字后"，下方蓝色大字"我做了一个决定"，中间放置一个打开的锁图标（象征开源），添加决断感的光线效果，1080×1920 竖版」
截图：「左右对比布局，左侧 Before（闭源，star 增长慢），右侧 After（开源，star 增长快），中间白色箭头，深色背景」

#独立开发者故事 #开源 #被抄袭怎么办 #程序员创业 #MioIsland`,
  },
  {
    id: 'douyin-v3-19',
    platform: '抖音',
    angle: 'B',
    title: '你选哪只像素猫？',
    content: `MioIsland 有 18 种像素猫，每只都不一样。

你选哪只住在你的 Mac 刘海里？

1. 经典橘猫——最可爱，人气第一
2. 暗影猫——酷，适合深色主题
3. 彩虹猫——骚，稀有度最高
4. 西装猫——上班专用（bushi）
5. 赛博猫——科技感拉满
6. 圣诞猫——限定皮肤

还有 12 只没展示，自己去 App 里探索。

评论区告诉我你选哪只，选最多的那只我出一个专属壁纸。

---
【配图建议】
图1（封面）：6 只像素猫排列 + 大字「你选哪只？」
图2：经典橘猫 + 暗影猫展示
图3：彩虹猫 + 西装猫展示
图4：赛博猫 + 圣诞猫展示
图5：18 种猫的全家福缩略图
图6：投票引导图「评论区告诉我」

【豆包P图提示词】
封面：「深色背景，6 只不同颜色的像素猫以 2 行 3 列排列，每只下方标注名字，上方白色大字"你选哪只像素猫？"，添加发光选择框效果，1080×1920 竖版」
截图：「给每对像素猫截图放大到清晰可见，添加编号和名字标签，背景纯黑，每只猫周围添加对应颜色的光晕」

#像素猫 #Mac灵动岛 #投票 #你选哪个 #MioIsland #可爱猫咪`,
  },
  {
    id: 'douyin-v3-20',
    platform: '抖音',
    angle: 'A',
    title: '手机控制电脑写代码靠谱吗？',
    content: `争议话题：用手机远程控制电脑写代码，到底靠不靠谱？

正方观点：
✅ 不在电脑前也能推进工作
✅ AI 写代码不需要你盯着
✅ 审批操作手机比电脑方便
✅ 碎片时间利用起来了

反方观点：
❌ 手机屏幕看代码太小
❌ 网络不稳会断连
❌ 复杂决策需要看完整上下文

我的实际体验（用了 Code Light 一个月）：
→ 适合：下达指令、看进度、审批操作、简单 review
→ 不适合：复杂调试、系统架构设计

结论：手机是遥控器，不是工作站。用对场景就很香。

你觉得呢？评论区聊聊。

---
【配图建议】
图1（封面）：手机 vs 电脑 + 大字「靠谱吗？」+ 辩论风格
图2：正方观点列表（绿色对勾）
图3：反方观点列表（红色叉号）
图4：实际使用场景截图
图5：适合/不适合的对比总结图
图6：引导互动——「你觉得呢？」

【豆包P图提示词】
封面：「深色背景，左侧放置手机图标右侧放置电脑图标，中间白色 VS 大字带闪电效果，上方红色大字"手机控制电脑写代码"，下方黄色大字"靠谱吗？"，1080×1920 竖版」
截图：「辩论风格双栏布局，左栏绿色标题"正方"配绿色对勾列表，右栏红色标题"反方"配红色叉号列表，深色背景」

#程序员讨论 #远程编程 #AI写代码 #手机编程 #你怎么看`,
  },

  // 小红书 V3 图文文案 x 20
  // 数字盘点类 x 4
  {
    id: 'xhs-v3-1',
    platform: '小红书',
    angle: 'C',
    title: 'Claude Code 必装的 3 个效率工具',
    content: `用 Claude Code 写代码的人越来越多了。
但大多数人只装了 Claude，没装周边工具，效率只发挥了一半。

我自己每天在用的 3 个搭配工具，分享给你：

1️⃣ MioIsland（Mac 灵动岛）
把 Mac 刘海变成 AI 状态面板。Claude 在想什么、写到哪了、有没有卡住——一眼看到。
点击灵动岛可以跳转终端、切换会话，不用来回 cmd+tab。
开源免费，brew 一行安装。

2️⃣ Code Light（iPhone 遥控器）
出门了还想盯着 Claude 写代码？手机装这个。
远程启动会话、审批操作、发照片当参考。
精准终端路由——3 个终端窗口，消息发到你指定的那个。

3️⃣ 终端多路复用（tmux/cmux）
Claude Code 经常需要开多个会话。
tmux 配合 MioIsland 的自动检测，会话管理效率翻倍。

三个工具配合起来，体验完全不一样。

你用 Claude Code 有什么效率技巧？评论区交流一下

---
【配图建议】
图1（封面）：3 个工具 logo/截图拼贴 + 大字「Claude Code 必装 3 件套」，1080x1440
图2：MioIsland 灵动岛功能截图 + 要点标注
图3：Code Light iPhone 端截图 + 要点标注
图4：tmux 多会话截图 + 配合 MioIsland 效果
图5：三个工具协作流程图，箭头串联

【豆包P图提示词】
封面：「深色渐变背景，顶部白色大字"Claude Code 必装 3 件套"，下方三个圆角卡片横排，每个卡片里放一个工具图标和名字，卡片带淡蓝色发光边框，底部小字"效率提升不止一点"，1080×1440 竖版」
截图美化：「将 Mac 截图放入 MacBook 样机中，背景纯黑，截图周围添加功能标注箭头和白色文字说明，整体风格科技感」

#ClaudeCode #AI编程 #效率工具 #Mac效率 #程序员必备`,
  },
  {
    id: 'xhs-v3-2',
    platform: '小红书',
    angle: 'D',
    title: '用 AI 编程 30 天，5 个改变我工作的习惯',
    content: `一个月前开始用 Claude Code 写代码。
说实话，不只是多了个工具，是工作习惯都变了。

分享 5 个变化：

1. 不再盯着屏幕等编译
以前：编译时刷手机 → 忘了回来看
现在：MioIsland 灵动岛实时显示状态，写完自动提醒

2. 碎片时间也能推进度
以前：离开电脑 = 停工
现在：Code Light 手机远程下指令，地铁上也能让 AI 干活

3. 学会了「异步编程思维」
给 Claude 布置任务 → 去做别的事 → 手机审批 → 回来验收
一个人干出两个人的活

4. 不再怕重构
以前：重构 = 风险大、耗时长
现在：让 Claude 重构，手机盯着，随时回滚

5. 下班时间提前了
不是因为偷懒。是因为很多等待时间被利用起来了。

这不是广告。是一个月真实使用后的感受。

你用 AI 编程多久了？有什么变化？

---
【配图建议】
图1（封面）：日历 + 数字「30天」+ 大字「5 个变化」，1080x1440
图2：习惯 1-2 的对比图（Before/After 两栏）
图3：习惯 3-4 的对比图
图4：习惯 5 + 下班时间对比数据
图5：总结图：一句话概括「AI 编程改变的不是代码，是工作方式」

【豆包P图提示词】
封面：「浅色渐变背景，左侧一个大日历图标显示"30天"，右侧白色大字"5 个改变我工作的习惯"，底部小字"用 AI 编程的真实感受"，添加微妙的代码元素装饰，1080×1440 竖版」
截图美化：「双栏对比布局，左栏标题"Before"用灰色调，右栏标题"After"用绿色调，每行一个习惯对比，箭头连接，深色背景白色文字」

#AI编程 #效率提升 #程序员成长 #ClaudeCode #工作习惯`,
  },
  {
    id: 'xhs-v3-3',
    platform: '小红书',
    angle: 'C',
    title: 'Mac 刘海的 8 种玩法你知道几个',
    content: `Mac 那个刘海，大部分人当它不存在。
但其实装了 MioIsland 之后，它能做很多事。

整理了 8 种玩法：

1. AI 状态监控
Claude Code 当前状态实时显示：思考中/写代码/等审批/已完成

2. 像素猫陪伴
18 种像素猫可选，它会随着 AI 状态变换表情

3. 会话快速切换
点击灵动岛 → 弹出会话列表 → 一键跳转对应终端

4. 终端自动检测
Ghostty、Warp、iTerm2、Terminal……自动识别你用哪个

5. 项目分组管理
按项目名自动分组，多项目并行不混乱

6. 权限审批提醒
Claude 要删文件、改配置时，灵动岛高亮提醒

7. 代码 Diff 预览
不用跳到终端就能在灵动岛看 Claude 改了什么

8. 8-bit 音效系统
复古芯片音效，写代码像打游戏

全部免费开源。brew install mioisland 一行搞定。

你的 Mac 刘海现在在干什么？

---
【配图建议】
图1（封面）：Mac 刘海特写 + 大字「8 种玩法」+ 数字序号环绕，1080x1440
图2：玩法 1-2 截图（AI 状态 + 像素猫）
图3：玩法 3-4 截图（会话切换 + 终端检测）
图4：玩法 5-6 截图（项目分组 + 权限审批）
图5：玩法 7-8 截图（Diff 预览 + 音效设置）

【豆包P图提示词】
封面：「MacBook 正面特写，刘海区域发出蓝色光芒，周围环绕 8 个小图标代表 8 种功能，上方白色大字"Mac 刘海的 8 种玩法"，背景深色渐变，1080×1440 竖版」
截图美化：「将功能截图放入 Mac 屏幕样机顶部刘海区域，用箭头和标注文字指出功能要点，背景纯黑突出刘海发光效果」

#Mac技巧 #Mac灵动岛 #MioIsland #效率工具 #程序员装机`,
  },
  {
    id: 'xhs-v3-4',
    platform: '小红书',
    angle: 'A',
    title: 'iPhone + Mac 联动的 4 个神操作',
    content: `苹果生态最香的地方就是设备联动。
但原生功能之外，还有更骚的操作。

分享 4 个我每天在用的 iPhone + Mac 联动技巧：

1. 手机远程启动 AI 写代码
出门前忘了给 Claude 布置任务？
打开 Code Light → 选终端 → 输入指令 → 走人
回来的时候代码已经写好了

2. 灵动岛同步
Mac 刘海上的 MioIsland 显示 AI 状态
iPhone 灵动岛也同步显示
两边状态实时一致

3. 手机审批 Mac 操作
Claude 要删文件、装依赖、改配置——
手机弹出审批通知，滑动即可
精准路由到对应终端窗口，不会误操作

4. 拍照发给 AI 当参考
看到一个好的 UI 设计？
手机拍照 → Code Light 发给 Claude → AI 参考着写代码

这套组合的核心：Mac 是工作站，iPhone 是遥控器。
两个 App：MioIsland（Mac，开源）+ Code Light（iPhone）

你有什么 Apple 生态联动技巧？评论区分享一下

---
【配图建议】
图1（封面）：iPhone 和 MacBook 并排 + 大字「4 个神操作」+ 连接线条，1080x1440
图2：操作 1 截图——Code Light 远程启动界面
图3：操作 2 截图——双端灵动岛同步对比
图4：操作 3 截图——手机审批通知 + Mac 终端
图5：操作 4 截图——拍照发送给 AI 的流程

【豆包P图提示词】
封面：「深色背景，左侧 iPhone 样机右侧 MacBook 样机，中间用发光的连接线和数据流粒子效果连接，上方白色大字"iPhone + Mac 联动"，下方黄色大字"4 个神操作"，1080×1440 竖版」
截图美化：「双设备截图并排展示，iPhone 截图放入手机样机，Mac 截图放入电脑样机，中间用箭头标注数据流向，背景深色」

#苹果生态 #iPhone技巧 #Mac效率 #设备联动 #程序员工具`,
  },

  // Before/After 对比类 x 4
  {
    id: 'xhs-v3-5',
    platform: '小红书',
    angle: 'D',
    title: '装了 MioIsland 前后，我的效率变化',
    content: `不是标题党。装完 MioIsland 一周后，我认真对比了一下效率。
结果自己都没想到。

Before（没装之前）：
❌ Claude 写完代码我不知道 → 经常回来发现等了半小时
❌ 多个终端来回切换 → cmd+tab 按到手酸
❌ AI 要审批时我不在 → 任务卡住白等
❌ 不知道 Claude 卡在哪一步 → 打开终端翻半天

After（装了之后）：
✅ 灵动岛实时状态 → 余光一扫就知道进度
✅ 点击灵动岛直跳终端 → 不用 cmd+tab
✅ 审批提醒 + Code Light 手机审批 → 不漏不卡
✅ 状态面板一目了然 → 思考中/写代码/等审批

实际感受：
→ 每天省下 30-40 分钟的「等待 + 切换」时间
→ 心智负担少了很多，不用惦记着去看终端

免费开源。试一天你就回不去了。

装过的来说说你的体验？

---
【配图建议】
图1（封面）：左右分栏「Before vs After」+ 效率箭头，1080x1440
图2：Before 场景——凌乱的多窗口截图 + 红色标注痛点
图3：After 场景——MioIsland 灵动岛清爽截图 + 绿色标注优点
图4：时间对比数据图——柱状图展示省时效果
图5：一句话总结 + 安装命令截图

【豆包P图提示词】
封面：「深色背景左右分栏，左侧红色调标题"Before"配混乱桌面图标，右侧绿色调标题"After"配整洁界面图标，中间白色大箭头，上方大字"装了 MioIsland 前后"，1080×1440 竖版」
截图美化：「对比布局，左图加红色半透明遮罩和叉号标注，右图加绿色边框和对勾标注，底部放时间节省数据条」

#效率对比 #MioIsland #Mac灵动岛 #BeforeAfter #程序员效率`,
  },
  {
    id: 'xhs-v3-6',
    platform: '小红书',
    angle: 'F',
    title: '普通灵动岛 vs 能操控的灵动岛',
    content: `Mac 灵动岛工具现在有不少了。
但大部分只做了一件事：显示状态。

来对比一下「普通灵动岛」和「能操控的灵动岛」区别有多大：

普通灵动岛：
→ 看到 AI 在写代码（然后呢？）
→ 看到进度百分比（然后呢？）
→ 看到一个好看的动画（然后呢？）
→ 要操作还是得切到终端

能操控的灵动岛（MioIsland + Code Light）：
→ 看到状态 + 点击直跳终端窗口
→ 看到审批请求 + 直接操作
→ 支持精准路由 → 3 个终端不会发错
→ 离开电脑 → 手机继续操控
→ 开源 → 服务端代码你都看得到
→ 零知识中转 → 你的代码不经过别人的服务器

区别在哪？一个是显示器，一个是控制台。

不点名对比。你们用过哪些，评论区说说体验

---
【配图建议】
图1（封面）：两个灵动岛对比 + 大字「看 vs 控」，1080x1440
图2：普通灵动岛截图 + 红色标注「只能看」
图3：MioIsland 截图 + 绿色标注「能操控」
图4：功能对比表格（6 项对比）
图5：总结图：「显示器 vs 控制台」

【豆包P图提示词】
封面：「深色背景，上方两个 Mac 刘海截图并排，左侧灰暗色调标注"普通"，右侧发光色调标注"进阶"，中间大字"VS"，下方白色大字"看 vs 控"，1080×1440 竖版」
截图美化：「功能对比表格，左列灰色背景配叉号，右列深蓝背景配对勾，每行一个功能点，表头分别是"普通灵动岛"和"MioIsland"」

#Mac灵动岛 #工具对比 #MioIsland #AI编程工具 #程序员选择`,
  },
  {
    id: 'xhs-v3-7',
    platform: '小红书',
    angle: 'D',
    title: '有手机遥控前后，我的下班时间对比',
    content: `先放结论：平均提前 47 分钟下班。
不是摸鱼。是把等待时间利用起来了。

Before（没有手机遥控）：
9:00 到工位 → 开始写代码
中间 Claude 在跑任务 → 我盯着屏幕等
Claude 要审批 → 我必须在电脑前
午饭时间 → 任务暂停
下午继续 → 又是等+盯+切换
18:30 才能收工

After（用了 Code Light）：
9:00 到工位 → 给 Claude 布置任务
Claude 跑任务时 → 我去开会/喝咖啡/午饭
手机灵动岛显示进度 → 不用盯屏幕
需要审批 → 手机滑一下
午饭时间也能推进度
17:45 基本搞定

关键不是工作量少了。
是以前浪费在「等待 AI」上的时间被释放了。

MioIsland（Mac端开源）+ Code Light（iPhone端）
让 AI 给你打工，不是你给 AI 打工。

你一般几点下班？

---
【配图建议】
图1（封面）：时钟对比 18:30 vs 17:45 + 大字「提前 47 分钟」，1080x1440
图2：Before 时间线——红色标注等待时段
图3：After 时间线——绿色标注释放时段
图4：一天工作流对比图
图5：总结：「AI 给你打工，不是你给 AI 打工」

【豆包P图提示词】
封面：「深色背景，两个大时钟并排，左侧红色时钟指向 18:30，右侧绿色时钟指向 17:45，中间白色大箭头向下，上方黄色大字"下班时间提前 47 分钟"，1080×1440 竖版」
截图美化：「时间线对比图，上方红色时间线标注"Before"每个时段用色块表示，下方绿色时间线标注"After"，用虚线连接对应时段，深色背景」

#下班自由 #效率工具 #AI编程 #远程办公 #程序员日常`,
  },
  {
    id: 'xhs-v3-8',
    platform: '小红书',
    angle: 'A',
    title: 'Mac 刘海 Before vs After',
    content: `翻出我 Mac 刘海的「装修前后」对比。
差距大到我自己都没想到。

Before：
一条黑缝。啥也没有。
每次看到都想吐槽苹果的设计。
打开全屏应用还挡住菜单栏。

After（装了 MioIsland）：
刘海里住着一只像素猫。
AI 写代码的进度一目了然。
点一下就能跳到对应终端。
审批提醒直接弹在刘海上。
还有 8-bit 复古音效。

最离谱的是——
这只猫还能通过 iPhone 远程操控。
出门在外，打开 Code Light，
手机灵动岛和 Mac 刘海同步显示。

从「最没用的设计」变成「离不开的功能区」。

免费开源。一行命令安装。
试过的都说回不去了。

你的 Mac 刘海现在长什么样？截图来看看

---
【配图建议】
图1（封面）：Mac 刘海特写 Before/After 上下对比，1080x1440
图2：Before——空刘海 + 吐槽文字
图3：After——MioIsland 运行中 + 像素猫
图4：After——灵动岛展开状态 + 功能标注
图5：iPhone 端同步效果截图

【豆包P图提示词】
封面：「MacBook 屏幕顶部特写，上半部分灰暗色调展示空刘海标注"Before"，下半部分明亮色调展示有像素猫和状态信息的刘海标注"After"，中间白色分割线，1080×1440 竖版」
截图美化：「Mac 刘海区域放大截图，周围用白色标注线和文字说明各个功能区域，背景纯黑让刘海区域发光突出」

#Mac刘海 #BeforeAfter #MioIsland #Mac美化 #程序员桌面`,
  },

  // 教程类 x 4
  {
    id: 'xhs-v3-9',
    platform: '小红书',
    angle: 'C',
    title: '3 步把你的 Mac 刘海变成 AI 控制台',
    content: `全程 2 分钟，不需要任何编程基础。
跟着做就行。

Step 1：安装 MioIsland
打开终端，输入一行命令：
brew install --cask mioisland
等它装完。就这么简单。

Step 2：启动 + 连接 Claude Code
打开 MioIsland → 它会自动检测你的终端类型
支持 Ghostty、Warp、iTerm2、Terminal 等 10 种终端
启动 Claude Code → 灵动岛自动显示 AI 状态

Step 3：选一只像素猫
设置里有 18 种像素猫可选
每只有不同的稀有度和属性
选完它就住在你的刘海里了

进阶玩法：
→ 装 Code Light（iPhone 端）可以手机远程操控
→ 多个 Claude 会话可以在灵动岛切换
→ 点击灵动岛可以直跳对应终端窗口

就这么简单。免费开源。
装完截图发评论区，我帮你看看装对了没

---
【配图建议】
图1（封面）：「3 步教程」+ Mac 刘海截图 + 步骤序号，1080x1440
图2：Step 1——终端安装命令截图 + 标注
图3：Step 2——MioIsland 连接成功截图
图4：Step 3——像素猫选择界面截图
图5：进阶玩法汇总图 + 二维码引导

【豆包P图提示词】
封面：「深色背景，上方白色大字"3 步搞定"，下方三个圆形步骤图标（1 安装 2 连接 3 选猫）用线条串联，底部 Mac 刘海截图展示最终效果，1080×1440 竖版」
截图美化：「教程步骤截图，每张添加大号步骤编号标签，用红色方框标注关键操作位置，底部添加简短文字说明」

#Mac教程 #MioIsland安装 #AI编程入门 #Mac效率 #新手教程`,
  },
  {
    id: 'xhs-v3-10',
    platform: '小红书',
    angle: 'A',
    title: 'iPhone 远程控制 Mac 写代码完整教程',
    content: `很多人问我：手机真的能远程控制电脑写代码吗？
能。而且设置很简单。完整教程来了。

准备工作：
Mac 上装好 MioIsland（免费开源）
iPhone 上装好 Code Light（App Store 搜索）

Step 1：配对连接
打开 MioIsland → 设置 → 生成配对码
打开 Code Light → 扫码或输入配对码
连接成功会看到绿色状态灯

Step 2：远程启动会话
Code Light 首页 → 选择终端窗口
输入指令或选择预设 → 发送
Mac 上 Claude Code 自动启动

Step 3：远程操控
iPhone 灵动岛实时显示 AI 状态
Claude 需要审批 → 手机弹出通知
滑动审批 / 拒绝 / 输入追加指令

关键技术：精准终端路由
你的 Mac 开了 3 个终端窗口？
消息会发到你选的那个，不会串。

安全性：零知识中转
你的代码不会被服务器读取
中转节点只做消息转发

试过的评论区说说体验，有问题也可以问我

---
【配图建议】
图1（封面）：iPhone 和 Mac 连接示意图 + 大字「完整教程」，1080x1440
图2：Step 1——配对过程截图（Mac + iPhone 并排）
图3：Step 2——远程启动截图
图4：Step 3——审批操作截图
图5：安全架构简图（零知识中转）

【豆包P图提示词】
封面：「深色背景，iPhone 样机在左 MacBook 样机在右，中间用发光的虚线连接并标注"配对"，上方白色大字"手机远程控制 Mac 写代码"，下方绿色标签"完整教程"，1080×1440 竖版」
截图美化：「步骤截图放入设备样机，每步添加红色圆形编号，关键按钮用红色箭头标注，底部放简短操作说明」

#远程编程教程 #CodeLight #MioIsland #手机控制电脑 #程序员教程`,
  },
  {
    id: 'xhs-v3-11',
    platform: '小红书',
    angle: 'C',
    title: 'Claude Code 新手必看的效率设置',
    content: `刚开始用 Claude Code 的时候，我也是默认设置裸奔。
后来发现调几个地方，体验完全不一样。

分享我自用的效率设置：

1. 搭配 MioIsland（灵动岛）
不装这个你就得一直盯着终端看进度。
装了之后余光看刘海就行。
brew install --cask mioisland

2. 开启多会话模式
一个项目一个 Claude 会话。
MioIsland 按项目分组，灵动岛一键切换。
不会搞混。

3. 终端选择
推荐 Ghostty 或 iTerm2
MioIsland 对这两个支持好
自动检测终端类型，不用手动配置

4. 审批别嫌烦
Claude 请求权限时认真看。
特别是删除文件和执行脚本。
MioIsland 会高亮显示危险操作。

5. 手机遥控（进阶）
装 Code Light → 布置任务后可以离开
碎片时间用手机推进度
适合 AI 跑长任务的时候

这些都不花钱。设置一次，长期受益。

还有什么好的设置建议？评论区补充

---
【配图建议】
图1（封面）：设置图标 + 大字「新手必看」+ Claude Code logo，1080x1440
图2：MioIsland 灵动岛效果截图 + 标注
图3：多会话管理界面截图
图4：终端检测 + 审批提醒截图
图5：Code Light 手机端截图 + 总结清单

【豆包P图提示词】
封面：「深色背景，中间大齿轮图标里嵌入 Claude 标志，上方橙色大字"Claude Code 新手必看"，下方白色大字"效率设置指南"，周围散布小图标代表各设置项，1080×1440 竖版」
截图美化：「设置界面截图，用红色方框标注推荐选项，旁边添加白色箭头和文字说明"推荐开启"或"建议修改"，背景深色」

#ClaudeCode #新手教程 #AI编程设置 #效率工具 #程序员入门`,
  },
  {
    id: 'xhs-v3-12',
    platform: '小红书',
    angle: 'D',
    title: '手机远程启动 AI 写代码教程',
    content: `这个场景你一定遇到过：
出门了才想起来有个功能忘了让 Claude 写。

以前只能等回家。
现在掏出手机就能搞定。

具体操作（跟着做）：

1. 打开 Code Light（iPhone）
确保之前已经配对过 Mac（只需配对一次）

2. 选择目标终端
你的 Mac 上开了几个终端窗口都会显示
选你要操作的那个

3. 输入指令
比如："帮我给 UserProfile 页面加上暗色模式支持"
点发送

4. 等 Claude 开始工作
手机灵动岛会实时显示状态
Claude 开始思考 → 写代码 → 需要审批时通知你

5. 手机审批
Claude 要创建文件？滑动审批。
要安装依赖？看看是什么，审批。
要删东西？仔细看，再决定。

整个过程不需要碰 Mac。
精准路由保证消息不会发错终端。
零知识中转保证代码安全。

回到家打开电脑，代码已经写好了。

试过的人来评论区打个卡

---
【配图建议】
图1（封面）：手机屏幕 + 代码元素 + 大字「手机启动 AI 写代码」，1080x1440
图2：Step 1-2——打开 App + 选择终端截图
图3：Step 3——输入指令界面截图
图4：Step 4-5——灵动岛状态 + 审批操作截图
图5：回到电脑看成果的场景图

【豆包P图提示词】
封面：「深色背景，一只手握着 iPhone 样机，屏幕上显示代码编辑界面，手机周围有代码片段飘浮效果，上方白色大字"手机远程启动 AI 写代码"，底部绿色标签"保姆级教程"，1080×1440 竖版」
截图美化：「iPhone 截图放入手机样机，每步截图添加红色圆圈编号和箭头指引，底部放一行文字说明当前步骤」

#远程编程 #AI写代码 #手机教程 #CodeLight #程序员神器`,
  },

  // 情绪共鸣类 x 4
  {
    id: 'xhs-v3-13',
    platform: '小红书',
    angle: 'E',
    title: '凌晨 3 点写代码，只有刘海里的猫陪我',
    content: `凌晨 3 点。第 4 杯咖啡。
整个世界安静得只剩下键盘声和风扇声。

Bug 找了两小时，终于定位到一个异步竞态问题。
让 Claude 帮我修。

看了眼 Mac 刘海——
像素猫眯着眼，趴在灵动岛上。
Claude 的状态显示：思考中...

等着等着有点困。
靠在椅子上闭了会眼。

灵动岛一闪——
Claude 写完了。像素猫醒了。
测试跑了一遍。全绿。

凌晨 3:17。Bug 修好了。
只有一只像素猫目睹了全过程。

独立开发就是这样。
没有同事帮你 review，没有 PM 帮你排优先级。
凌晨的 debug 只有你和你的 AI。

但至少刘海里有只猫。
它不会写代码，但它在。

深夜写代码的朋友，评论区举个手

---
【配图建议】
图1（封面）：暗色调 Mac 屏幕 + 刘海里的像素猫 + 大字「凌晨3点」，1080x1440
图2：深夜桌面氛围图——只有屏幕亮着
图3：MioIsland 灵动岛特写——像素猫 + 思考中状态
图4：代码跑通的终端截图——全绿的测试结果
图5：窗外天快亮的场景 + 一句感慨

【豆包P图提示词】
封面：「暗色调，MacBook 屏幕微光照亮键盘，刘海区域有一只发光的像素猫，上方白色手写体大字"凌晨3点"，下方小字"只有刘海里的猫陪我"，整体氛围温暖孤独感，1080×1440 竖版」
截图美化：「深夜氛围滤镜，降低整体亮度，只保留屏幕和像素猫的光源，添加轻微噪点纹理营造深夜感」

#深夜写代码 #独立开发 #程序员日常 #像素猫 #MioIsland`,
  },
  {
    id: 'xhs-v3-14',
    platform: '小红书',
    angle: 'E',
    title: '独立开发者的真实桌面长这样',
    content: `看了太多「极简工作台」分享。
来看看真实的独立开发者桌面吧。

我的桌面：
→ MacBook Pro 一台，贴满贴纸
→ 外接显示器上开了 6 个终端窗口
→ 桌上散着三根充电线
→ 咖啡杯旁边是草稿纸
→ 草稿纸上画着数据库 ER 图
→ Mac 刘海里住着一只像素猫

软件层面：
→ 3 个 Claude Code 会话同时跑
→ MioIsland 灵动岛显示当前活跃会话
→ Code Light 在 iPhone 上随时待命
→ Figma 开着设计稿
→ 浏览器 20 个 tab（别问）

日常工作流：
9:00 给 Claude 布置三个任务
9:05 去倒咖啡
9:10 回来看灵动岛，一个已完成两个还在跑
9:15 审批完操作，开始写新需求
9:30 出门买早餐，手机继续盯

这就是独立开发的真实状态。
不极简，但有效。

晒晒你的桌面呗？

---
【配图建议】
图1（封面）：真实凌乱桌面 + 大字「真实桌面」，1080x1440
图2：桌面全景——各种线材、咖啡、草稿纸
图3：屏幕特写——多窗口 + 灵动岛
图4：iPhone Code Light 界面截图
图5：工作流时间线图

【豆包P图提示词】
封面：「俯拍视角的桌面照片风格，MacBook 居中，周围散布咖啡杯、充电线、草稿纸等物品，刘海区域有像素猫发光，上方白色贴纸风格大字"独立开发者的真实桌面"，1080×1440 竖版」
截图美化：「真实桌面照片后期，轻微提高对比度，给屏幕区域增加清晰度，其他区域轻微虚化，突出重点」

#独立开发 #程序员桌面 #工作台 #真实生活 #程序员日常`,
  },
  {
    id: 'xhs-v3-15',
    platform: '小红书',
    angle: 'D',
    title: '周末最舒服的写代码方式',
    content: `周六下午。阳光刚好。
不想坐在书桌前。

于是我搬到了沙发上。

MacBook 放茶几。
开了两个 Claude 会话——一个写前端，一个重构后端。
MioIsland 灵动岛显示两个任务都在跑。

然后我拿起 iPhone，打开 Code Light。
躺在沙发上盯进度。

Claude 前端会话要审批：创建 3 个新组件。
手机上滑一下。批准。

后端会话要审批：删除旧的 API 路由。
看了眼 diff。没问题。批准。

中间去阳台浇了个花。
手机震了一下——前端写完了。
回来看了眼，效果不错。

一个下午，沙发上搞定了两个模块。
没坐在电脑前超过 20 分钟。

这才是程序员周末该有的样子吧。

你周末怎么写代码？

---
【配图建议】
图1（封面）：沙发 + MacBook + 阳光 + 大字「最舒服的写代码方式」，1080x1440
图2：沙发场景——MacBook 在茶几上，灵动岛可见
图3：手机 Code Light 截图——躺着审批
图4：阳台浇花场景 + 手机通知
图5：完成效果——两个模块搞定的终端截图

【豆包P图提示词】
封面：「温暖色调，沙发上放着 MacBook，旁边是一杯茶，阳光从窗户洒进来，Mac 刘海上有像素猫，上方白色大字"周末最舒服的写代码方式"，整体氛围温馨慵懒，1080×1440 竖版」
截图美化：「生活场景照片风格，暖色调滤镜，轻微过曝营造阳光感，设备屏幕内容清晰可见」

#程序员周末 #远程办公 #舒适编程 #独立开发 #生活方式`,
  },
  {
    id: 'xhs-v3-16',
    platform: '小红书',
    angle: 'E',
    title: '做了个月独立开发，说说真心话',
    content: `一个月前辞职开始全职独立开发。
说几句不装的真心话。

收入：目前为零。
是的，零。Code Light 刚上架，MioIsland 免费开源。

但我不后悔。原因：

1. 学到的比上班三年多
一个人干前端后端运营设计。
被逼着学了 SwiftUI、CloudKit、终端集成。
ChatGPT 和 Claude 是我的全栈同事。

2. 作品感
MioIsland 在 GitHub 拿到 270 star。
有人在 issue 里说"这个工具改变了我的工作流"。
这种成就感上班拿不到。

3. 自由
凌晨 3 点写代码因为想写，不是因为 deadline。
下午 2 点去跑步因为想跑，不是因为请假。

但也有难的地方：
→ 没人 review 你的代码（所以做了 MioIsland 让 AI 陪着）
→ 没人帮你做决定（所以手机上装了 Code Light 随时能操作）
→ 没有稳定收入（所以每天都在想怎么让产品更好）

独立开发不是躺赢。
是更辛苦，但更自由。

正在独立开发或想独立开发的朋友，评论区聊聊

---
【配图建议】
图1（封面）：一个人的工作台 + 大字「做了一个月独立开发」，1080x1440
图2：GitHub star 截图 + 用户反馈截图
图3：一天的时间分配饼图
图4：做的两个产品截图（MioIsland + Code Light）
图5：一句话总结 + 引导互动

【豆包P图提示词】
封面：「暖色调，一人工作台俯拍，MacBook 屏幕上有代码，旁边是笔记本和笔，上方白色大字"做了一个月独立开发"，下方小字"说说真心话"，整体氛围真实不做作，1080×1440 竖版」
截图美化：「数据展示风格，GitHub star 截图放大关键数字，添加上升箭头和绿色标注，背景深色突出数据」

#独立开发 #辞职创业 #程序员故事 #真心话 #独立开发者日常`,
  },

  // 悬念反转类 x 4
  {
    id: 'xhs-v3-17',
    platform: '小红书',
    angle: 'F',
    title: '删了所有灵动岛工具，只留了这一个',
    content: `Mac 灵动岛工具我装过 5 个。
上周全删了。只留了一个。

先说删掉的几个有什么问题：

工具 A：好看但只能看
漂亮的动画，但点了没反应。
看到 AI 在跑任务，然后呢？还是得切终端。

工具 B：发消息到错误窗口
开了 3 个终端，消息随机发。
有次把测试环境的命令发到了生产终端。吓出一身冷汗。

工具 C：不开源，数据经过他们的服务器
作为开发者，我的代码经过别人服务器这件事让我不舒服。

留下的那个：MioIsland

为什么？
→ 点击灵动岛直接跳到对应终端
→ 精准路由，3 个窗口不会发错
→ 开源，服务端代码全公开
→ 零知识中转，代码不被读取
→ 还能用 iPhone（Code Light）远程操控
→ 有只像素猫陪我写代码（加分项）

不是因为它是我做的所以推荐。
是因为真的用了之后删不掉。

你们在用什么灵动岛工具？评论区说说

---
【配图建议】
图1（封面）：5 个 App 图标，4 个打叉 1 个打勾 + 大字「只留这一个」，1080x1440
图2：删掉的工具问题列表（红色标注）
图3：MioIsland 功能亮点截图（绿色标注）
图4：精准路由 + 安全架构对比图
图5：最终桌面——只有 MioIsland 在运行

【豆包P图提示词】
封面：「深色背景，5 个应用图标排列，前 4 个用红色大叉覆盖并变灰，最后一个发光高亮带绿色对勾，上方白色大字"删了所有灵动岛工具"，下方黄色大字"只留了这一个"，1080×1440 竖版」
截图美化：「对比列表风格，左侧灰色区域列出被删工具和问题（配红色叉号），右侧高亮区域列出保留工具优点（配绿色对勾），深色背景」

#Mac灵动岛 #工具测评 #MioIsland #删繁就简 #程序员工具`,
  },
  {
    id: 'xhs-v3-18',
    platform: '小红书',
    angle: 'D',
    title: '老板以为我在摸鱼，其实...',
    content: `上周开会的时候，老板瞄了一眼我手机。
看到我在滑来滑去。

他的表情明显在想：又在摸鱼。

其实我在干嘛？

用 Code Light 远程操控我 Mac 上的 Claude。
因为开会之前我给 Claude 布置了一个重构任务。

开会 30 分钟，Claude 提了 4 次审批请求：
→ 删除旧的路由文件 → 手机上审批
→ 创建新的 middleware → 审批
→ 修改 package.json → 看了眼改了什么 → 审批
→ 跑测试 → 自动通过

会开完了。重构也做完了。

回到工位打开电脑——
测试全绿。代码已提交。

老板：你今天效率挺高啊。
我：嗯...一直在干活。（没说谎）

MioIsland + Code Light
让你在任何地方都在「干活」。

你有没有类似的「在摸鱼其实在干活」的经历？

---
【配图建议】
图1（封面）：会议室场景 + 手机屏幕 + 大字「以为我在摸鱼」，1080x1440
图2：会议中偷看手机——Code Light 审批界面
图3：4 次审批记录截图
图4：回到工位——测试全绿截图
图5：反转揭示：「其实一直在干活」

【豆包P图提示词】
封面：「会议室模糊背景，前景一只手握着 iPhone，屏幕上显示代码审批界面，上方红色大字"老板以为我在摸鱼"，下方白色大字"其实..."，整体偷拍视角感，1080×1440 竖版」
截图美化：「手机截图放入 iPhone 样机，添加会议室模糊背景，营造"偷偷操作"的氛围，屏幕内容清晰可见」

#程序员摸鱼 #远程办公 #效率工具 #开会日常 #CodeLight`,
  },
  {
    id: 'xhs-v3-19',
    platform: '小红书',
    angle: 'C',
    title: '你的代码正在经过别人的服务器',
    content: `这个问题很多人没想过：
你用的远程开发工具，消息经过谁的服务器？

大部分远程终端/远程 IDE 工具的架构：
你的电脑 → 他们的服务器 → 你的手机
中间那个服务器能看到你的代码。

你可能会说：大公司不会看我代码的。
也许吧。但你确定吗？

MioIsland + Code Light 的做法不一样：

1. 零知识中转
中转服务器只做消息转发，不解密内容。
就像一个邮递员——它搬运信封，但看不到信的内容。

2. 服务端开源
不信？代码在 GitHub 上，你自己去看。
看不懂？找个懂的朋友帮你看。

3. 可自建
不放心公共服务器？自己部署一个。
文档里有教程，Docker 一行命令。

4. 端到端加密
Mac 到 iPhone 的通信全程加密。

这不是在恐吓你。
是希望你在选工具的时候多问一句：我的代码安全吗？

你在用什么远程工具？注意过安全问题吗？

---
【配图建议】
图1（封面）：锁 + 服务器图标 + 大字「你的代码安全吗」，1080x1440
图2：普通架构图——中间服务器标红「可读取」
图3：零知识架构图——中间服务器标绿「不可读取」
图4：开源 + 可自建的说明图
图5：安全检查清单——选工具前该问的 3 个问题

【豆包P图提示词】
封面：「深色背景，中间一个大锁图标，锁上方飘浮着代码片段（半透明），上方红色大字"你的代码正在经过别人的服务器"，底部白色小字"你知道吗？"，整体氛围警示感，1080×1440 竖版」
截图美化：「架构图风格，用方框和箭头展示数据流向，危险部分用红色标注，安全部分用绿色标注，背景深色，线条简洁」

#代码安全 #隐私保护 #开源 #零知识架构 #程序员必知`,
  },
  {
    id: 'xhs-v3-20',
    platform: '小红书',
    angle: 'B',
    title: '同事看到我刘海里有只猫，表情亮了',
    content: `今天最好笑的事：
同事路过我工位，突然停下来说——

「你 Mac 刘海里是不是有只猫？」

我：对啊。
他：什么鬼？Mac 还能养猫？
我：它叫 Mio，有 18 种物种可以选。
他：...你是不是上班太无聊了？

然后我给他演示了一下：

我：「你看，这只猫不是摆设。点它——」
灵动岛展开，显示 Claude 正在写代码。
「这是 AI 编程的状态面板。」

他：「等等，它还能动？」
我：「动啊。Claude 在思考它眯眼，写完代码它会醒来。」

他：「这也太可爱了...等等，你说它能控制终端？」
我：「点击直接跳转。3 个终端窗口精准路由。」

他：「...帮我也装一个。」
我：「brew install --cask mioisland。免费的。」

下午他发消息给我：「我选了赛博猫。」

结局：我们组现在 4 个人的刘海里都有猫了。

你想养哪只？18 种里我推荐经典橘猫入门

---
【配图建议】
图1（封面）：Mac 刘海特写 + 像素猫 + 大字「刘海里有只猫」，1080x1440
图2：对话场景——两人看电脑，表情惊讶
图3：18 种像素猫展示合集
图4：灵动岛展开功能演示截图
图5：4 台 Mac 的刘海都有猫的合照

【豆包P图提示词】
封面：「MacBook 刘海区域大特写，里面有一只可爱的像素猫在动，猫的周围有小星星和爱心装饰，上方白色大字"同事看到我刘海里有只猫"，下方粉色大字"表情亮了"，整体氛围轻松可爱，1080×1440 竖版」
截图美化：「像素猫展示页面，每只猫放在独立卡片中，卡片带圆角和淡色边框，标注物种名和稀有度星级，背景深色，整体排列整齐美观」

#像素猫 #Mac灵动岛 #办公室趣事 #MioIsland #同事日常`,
  },
];

// ============================================================
// 文案弹药库
// ============================================================
export const ammoLibrary = [
  // 角度A
  { angle: 'A', content: '「Mac 是大本营，iPhone 是遥控器」', lang: 'zh' },
  { angle: 'A', content: '「一个系统，两个屏幕」', lang: 'zh' },
  { angle: 'A', content: '「离开电脑不代表离开 AI」', lang: 'zh' },
  { angle: 'A', content: '"Your Mac is the base. Your iPhone is the remote."', lang: 'en' },
  { angle: 'A', content: '"One system, two screens."', lang: 'en' },
  // 角度B
  { angle: 'B', content: '「刘海里住着一只猫」', lang: 'zh' },
  { angle: 'B', content: '「你的 Mac 刘海不是浪费的像素，它是猫窝」', lang: 'zh' },
  { angle: 'B', content: '「18 种物种，你选哪只？」', lang: 'zh' },
  { angle: 'B', content: '"There\'s a cat in your notch."', lang: 'en' },
  { angle: 'B', content: '"The pixel cat watches your AI write code."', lang: 'en' },
  // 角度C
  { angle: 'C', content: '「消息发到哪个窗口，精准到位」', lang: 'zh' },
  { angle: 'C', content: '「3 个终端开着也不会串」', lang: 'zh' },
  { angle: 'C', content: '「零知识中转，服务器不存任何内容」', lang: 'zh' },
  { angle: 'C', content: '"Precise terminal routing — no more wrong window."', lang: 'en' },
  { angle: 'C', content: '"Zero-knowledge relay. We never see your code."', lang: 'en' },
  // 角度D
  { angle: 'D', content: '「做饭的时候批准了 Claude 的请求」', lang: 'zh' },
  { angle: 'D', content: '「躺在沙发上审代码」', lang: 'zh' },
  { angle: 'D', content: '「通勤路上看 AI 写代码的进度」', lang: 'zh' },
  { angle: 'D', content: '"Approved a file deletion while making pasta."', lang: 'en' },
  { angle: 'D', content: '"Checked AI progress from the subway."', lang: 'en' },
  // 角度E
  { angle: 'E', content: '「一个人做了 Mac + iPhone + 服务器」', lang: 'zh' },
  { angle: 'E', content: '「被截流后改名，反而更好了」', lang: 'zh' },
  { angle: 'E', content: '「270 star 的开源项目背后」', lang: 'zh' },
  { angle: 'E', content: '"Solo dev, two apps, one pixel cat."', lang: 'en' },
  // 角度F
  { angle: 'F', content: '「别的灵动岛只能看，这个能操控」', lang: 'zh' },
  { angle: 'F', content: '「别人的消息发到随机窗口，我的精准路由」', lang: 'zh' },
  { angle: 'F', content: '"Most tools show status. This one gives control."', lang: 'en' },
  { angle: 'F', content: '"Others broadcast. We route precisely."', lang: 'en' },
];

// ============================================================
// 平台策略数据
// ============================================================
export const platformStrategies = [
  {
    name: 'Twitter/X',
    icon: '🐦',
    positioning: '英文独立开发者账号，#buildinpublic 方向',
    frequency: '每天 1-2 条',
    contentTypes: [
      { label: '技术分享', percent: 30 },
      { label: '产品更新', percent: 25 },
      { label: '幕后故事', percent: 20 },
      { label: '互动讨论', percent: 15 },
      { label: '转发评论', percent: 10 },
    ],
    tags: ['#ClaudeCode', '#AIcoding', '#CodeLight', '#MioIsland', '#buildinpublic', '#indiehacker'],
    warnings: ['不要用中文发', '不要直接硬广', '避免负面情绪输出', '不要一天发超过5条'],
  },
  {
    name: '小红书',
    icon: '📕',
    positioning: 'Kris造物局 — 独立开发者+效率工具',
    frequency: '每周 3-5 条',
    contentTypes: [
      { label: '教程/攻略', percent: 35 },
      { label: '产品体验', percent: 30 },
      { label: '幕后日记', percent: 20 },
      { label: '互动话题', percent: 15 },
    ],
    tags: ['#Mac效率', '#程序员', '#AI编程', '#独立开发', '#灵动岛', '#效率工具'],
    warnings: ['标题必须有 emoji', '首图要竖版 3:4', '不要发纯英文', '避免明显广告感', '不要用小红书违禁词'],
  },
  {
    name: 'V2EX',
    icon: '💻',
    positioning: '技术向独立开发者，「分享创造」节点',
    frequency: '每 1-2 周 1 条',
    contentTypes: [
      { label: '技术分享', percent: 50 },
      { label: '项目介绍', percent: 30 },
      { label: '经验复盘', percent: 20 },
    ],
    tags: ['分享创造', '开源', 'macOS', 'SwiftUI'],
    warnings: ['V2EX 反感营销', '要真诚分享不要卖货', '标题不要太标题党', '不要频繁发同一个项目'],
  },
  {
    name: '掘金',
    icon: '⛏️',
    positioning: '技术博主，深度技术文章',
    frequency: '每周 1-2 篇',
    contentTypes: [
      { label: '技术教程', percent: 60 },
      { label: '架构设计', percent: 25 },
      { label: '工具推荐', percent: 15 },
    ],
    tags: ['macOS', 'SwiftUI', 'Socket.io', 'Claude Code', '灵动岛'],
    warnings: ['文章要有技术深度', '代码片段要完整', '不要纯产品介绍', '排版要规范'],
  },
  {
    name: '即刻',
    icon: '⚡',
    positioning: '独立开发者，「独立开发者」「效率工具」圈子',
    frequency: '每周 3-5 条',
    contentTypes: [
      { label: '开发日记', percent: 40 },
      { label: '产品动态', percent: 30 },
      { label: '互动讨论', percent: 30 },
    ],
    tags: ['独立开发者', '效率工具', 'AI编程', '开源'],
    warnings: ['即刻喜欢真实故事', '不要太正式', '多互动多回复', '发动态要及时'],
  },
  {
    name: '抖音',
    icon: '🎵',
    positioning: '科技/编程短视频，酷炫效果展示',
    frequency: '每周 2-3 条',
    contentTypes: [
      { label: '产品演示', percent: 50 },
      { label: '编程技巧', percent: 30 },
      { label: '幕后花絮', percent: 20 },
    ],
    tags: ['#程序员', '#AI编程', '#Mac', '#效率', '#独立开发'],
    warnings: ['前 3 秒决定生死', '竖屏拍摄', '字幕必须加', '不要超过 60 秒', 'BGM 要选对'],
  },
  {
    name: 'YouTube',
    icon: '🎬',
    positioning: '英文演示视频，深度 demo + 教程',
    frequency: '每月 1-2 条',
    contentTypes: [
      { label: '完整演示', percent: 50 },
      { label: '技术解析', percent: 30 },
      { label: 'Vlog', percent: 20 },
    ],
    tags: ['Claude Code', 'AI coding', 'macOS', 'indie dev', 'MioIsland'],
    warnings: ['缩略图要醒目', '标题要有关键词', '描述里放链接', '英文字幕必须准确'],
  },
  {
    name: 'Product Hunt',
    icon: '🚀',
    positioning: '一次性 launch，准备好了才发',
    frequency: '一次性',
    contentTypes: [
      { label: 'Launch 准备', percent: 100 },
    ],
    tags: ['Developer Tools', 'AI', 'macOS', 'Productivity'],
    warnings: ['选周二/周三 launch', '提前预热', '准备好 maker comment', '找 hunter 推荐', '截图和视频要精致'],
  },
];

// ============================================================
// 执行计划数据
// ============================================================
export const executionPlan = {
  A: {
    name: '阶段 A：冷启动（第 1-4 周）',
    description: '建立基础设施、开始内容输出、积累初始用户',
    weeks: [
      {
        week: 1,
        title: '第 1 周：基础建设 + 首批内容',
        tasks: [
          { id: 'a1-1', text: 'MioIsland README 优化', time: '1小时', priority: 'P0', done: false },
          { id: 'a1-2', text: 'MioIsland App 内加 Code Light 引导', time: '2小时', priority: 'P0', done: false },
          { id: 'a1-3', text: '素材集中拍摄 S1-S10', time: '2小时', priority: 'P0', done: false },
          { id: 'a1-4', text: '小红书发 1 条双端系统文案', time: '1小时', priority: 'P0', done: false },
          { id: 'a1-5', text: '爆款帖评论区置顶提及 Code Light', time: '10分钟', priority: 'P0', done: false },
          { id: 'a1-6', text: 'Twitter 发 2 条', time: '30分钟', priority: 'P1', done: false },
          { id: 'a1-7', text: 'Twitter 回复 5 条热帖', time: '30分钟', priority: 'P1', done: false },
          { id: 'a1-8', text: '即刻注册+发 1 条', time: '30分钟', priority: 'P1', done: false },
          { id: 'a1-9', text: '建立素材管理文件夹', time: '15分钟', priority: 'P1', done: false },
          { id: 'a1-10', text: '建立兑换码追踪表格', time: '30分钟', priority: 'P1', done: false },
        ],
      },
      {
        week: 2,
        title: '第 2 周：持续输出 + 社区渗透',
        tasks: [
          { id: 'a2-1', text: '小红书发 2 条（像素猫 + 使用场景）', time: '2小时', priority: 'P0', done: false },
          { id: 'a2-2', text: 'Twitter 每天 1-2 条持续发', time: '3小时', priority: 'P0', done: false },
          { id: 'a2-3', text: 'V2EX 发 1 条技术分享帖', time: '2小时', priority: 'P0', done: false },
          { id: 'a2-4', text: '掘金发 1 篇技术文章', time: '3小时', priority: 'P0', done: false },
          { id: 'a2-5', text: '即刻发 3 条开发日记', time: '1小时', priority: 'P1', done: false },
          { id: 'a2-6', text: '收集用户反馈并回复', time: '1小时', priority: 'P1', done: false },
          { id: 'a2-7', text: '开始剪辑第一个抖音视频', time: '2小时', priority: 'P1', done: false },
        ],
      },
      {
        week: 3,
        title: '第 3 周：扩大覆盖 + 数据复盘',
        tasks: [
          { id: 'a3-1', text: '小红书发 3 条（保持节奏）', time: '3小时', priority: 'P0', done: false },
          { id: 'a3-2', text: 'Twitter 持续 + 开始互动大V', time: '2小时', priority: 'P0', done: false },
          { id: 'a3-3', text: '发布第一个抖音短视频', time: '1小时', priority: 'P0', done: false },
          { id: 'a3-4', text: '掘金发第 2 篇文章', time: '3小时', priority: 'P1', done: false },
          { id: 'a3-5', text: '即刻持续发 + 加圈子', time: '1小时', priority: 'P1', done: false },
          { id: 'a3-6', text: '数据复盘：各平台表现', time: '1小时', priority: 'P0', done: false },
          { id: 'a3-7', text: '调整下周内容策略', time: '30分钟', priority: 'P1', done: false },
        ],
      },
      {
        week: 4,
        title: '第 4 周：KOL 合作 + 准备阶段B',
        tasks: [
          { id: 'a4-1', text: '联系 3-5 个 KOL/博主', time: '2小时', priority: 'P0', done: false },
          { id: 'a4-2', text: '准备 KOL 合作素材包', time: '2小时', priority: 'P0', done: false },
          { id: 'a4-3', text: '小红书 + Twitter 保持节奏', time: '3小时', priority: 'P0', done: false },
          { id: 'a4-4', text: 'YouTube 第一个英文演示视频', time: '4小时', priority: 'P1', done: false },
          { id: 'a4-5', text: '月度数据总结', time: '1小时', priority: 'P0', done: false },
          { id: 'a4-6', text: '制定阶段 B 详细计划', time: '1小时', priority: 'P0', done: false },
          { id: 'a4-7', text: 'Product Hunt launch 预热准备', time: '2小时', priority: 'P1', done: false },
        ],
      },
    ],
  },
  B: {
    name: '阶段 B：加速增长（第 5-8 周）',
    description: 'KOL 合作落地、Product Hunt launch、付费转化优化',
    weeks: [
      {
        week: 5,
        title: '第 5 周：KOL 合作 + PH 准备',
        tasks: [
          { id: 'b5-1', text: 'KOL 合作内容上线', time: '3小时', priority: 'P0', done: false },
          { id: 'b5-2', text: 'Product Hunt 页面准备', time: '4小时', priority: 'P0', done: false },
          { id: 'b5-3', text: '所有平台保持发布节奏', time: '4小时', priority: 'P0', done: false },
          { id: 'b5-4', text: '收集并展示用户评价', time: '1小时', priority: 'P1', done: false },
        ],
      },
      {
        week: 6,
        title: '第 6 周：Product Hunt Launch',
        tasks: [
          { id: 'b6-1', text: 'Product Hunt 正式发布', time: '全天', priority: 'P0', done: false },
          { id: 'b6-2', text: '全平台联动宣传', time: '3小时', priority: 'P0', done: false },
          { id: 'b6-3', text: '实时回复 PH 评论', time: '全天', priority: 'P0', done: false },
          { id: 'b6-4', text: '发布 launch 复盘文章', time: '2小时', priority: 'P1', done: false },
        ],
      },
      {
        week: 7,
        title: '第 7 周：乘势追击',
        tasks: [
          { id: 'b7-1', text: 'PH launch 后续跟进', time: '2小时', priority: 'P0', done: false },
          { id: 'b7-2', text: '第二波 KOL 合作', time: '3小时', priority: 'P0', done: false },
          { id: 'b7-3', text: '优化付费转化路径', time: '3小时', priority: 'P0', done: false },
        ],
      },
      {
        week: 8,
        title: '第 8 周：数据驱动优化',
        tasks: [
          { id: 'b8-1', text: '全面数据复盘', time: '3小时', priority: 'P0', done: false },
          { id: 'b8-2', text: '总结最佳内容类型和发布时间', time: '2小时', priority: 'P0', done: false },
          { id: 'b8-3', text: '制定阶段 C 计划', time: '2小时', priority: 'P0', done: false },
          { id: 'b8-4', text: '优化自动化流程', time: '2小时', priority: 'P1', done: false },
        ],
      },
    ],
  },
  C: {
    name: '阶段 C：稳定运营（第 9-12 周）',
    description: '建立可持续的内容体系、社区运营、持续优化',
    weeks: [
      {
        week: 9,
        title: '第 9-10 周：体系化运营',
        tasks: [
          { id: 'c9-1', text: '建立内容生产 SOP', time: '3小时', priority: 'P0', done: false },
          { id: 'c9-2', text: '建立微信/Discord 社区', time: '2小时', priority: 'P0', done: false },
          { id: 'c9-3', text: '所有平台保持稳定节奏', time: '每周4小时', priority: 'P0', done: false },
          { id: 'c9-4', text: '开始用户故事征集', time: '2小时', priority: 'P1', done: false },
        ],
      },
      {
        week: 11,
        title: '第 11-12 周：长期增长',
        tasks: [
          { id: 'c11-1', text: 'SEO 优化（博客/官网）', time: '4小时', priority: 'P0', done: false },
          { id: 'c11-2', text: '季度数据总结', time: '2小时', priority: 'P0', done: false },
          { id: 'c11-3', text: '规划下一季度内容', time: '2小时', priority: 'P0', done: false },
          { id: 'c11-4', text: '探索新渠道（播客/Newsletter）', time: '3小时', priority: 'P1', done: false },
        ],
      },
    ],
  },
};

// ============================================================
// 数据追踪指标
// ============================================================
export const defaultMetrics = [
  { id: 'github-star', label: 'GitHub Star', current: 270, target: 1000, icon: '⭐' },
  { id: 'xhs-followers', label: '小红书粉丝', current: 0, target: 500, icon: '📕' },
  { id: 'twitter-followers', label: 'Twitter 粉丝', current: 0, target: 1000, icon: '🐦' },
  { id: 'codelight-downloads', label: 'Code Light 下载', current: 0, target: 500, icon: '📱' },
  { id: 'wechat-group', label: '微信群人数', current: 0, target: 200, icon: '💬' },
];

// ============================================================
// KOL 合作模板
// ============================================================
export const kolTemplates = {
  zh: `Hi [KOL名字]，

我是 MioIsland 和 Code Light 的开发者。

看到你经常分享 [相关领域] 的内容，想聊聊合作的可能：

MioIsland 是一个开源的 Mac 灵动岛工具，可以在刘海区域实时显示 Claude Code 的运行状态。配合 iPhone 端的 Code Light，可以远程控制 Mac 上的 AI 编程终端。

合作方式可以很灵活：
- 体验后发一条真实感受
- 我可以提供 Code Light 高级版兑换码
- 也可以聊聊其他合作形式

GitHub 已有 270+ star，Mac 端完全免费开源。

方便的话回复聊聊？谢谢！`,

  en: `Hi [Name],

I'm the developer of MioIsland and Code Light.

I've been following your content about [topic] and thought there might be a fit for collaboration.

MioIsland is an open-source Dynamic Island tool for Mac that shows real-time Claude Code status in your notch. Code Light is the iPhone companion — remote control your Mac terminal from anywhere.

Would love to send you a free Code Light premium code to try it out. If you find it useful, a mention would mean a lot.

270+ GitHub stars, Mac app is fully free and open source.

Let me know if you're interested!`,
};

// ============================================================
// Product Hunt Checklist
// ============================================================
export const phChecklist = [
  { id: 'ph-1', text: '产品页面截图准备（5张高质量）', done: false },
  { id: 'ph-2', text: '产品演示视频（60秒以内）', done: false },
  { id: 'ph-3', text: 'Tagline 撰写并测试', done: false },
  { id: 'ph-4', text: 'Maker Comment 准备', done: false },
  { id: 'ph-5', text: '找到 Hunter 并确认', done: false },
  { id: 'ph-6', text: '提前 1 周在 Twitter 预热', done: false },
  { id: 'ph-7', text: '邮件列表通知准备', done: false },
  { id: 'ph-8', text: '所有平台联动文案准备', done: false },
  { id: 'ph-9', text: 'Launch 当天全天在线回复', done: false },
  { id: 'ph-10', text: 'Launch 后 48 小时复盘', done: false },
];

// ============================================================
// 版本更新日志
// ============================================================
export const changelogData = [
  {
    version: 'v2.0.8',
    date: '2026-04-13',
    type: 'fix',
    title: '修复 iPhone Code Light 消息无法送达 Claude 终端',
    changes: [
      '修复 ps 输出截断导致 CodeIsland 找不到 cmux workspace',
      '修复 Hardened Runtime 下 ps -E 无法读取环境变量',
      '修复新版 Claude Code 启动参数格式变化导致进程匹配失败',
      '消息从手机发出后不再静默丢失',
    ],
  },
  {
    version: 'v2.0.7',
    date: '2026-04-13',
    type: 'fix',
    title: '修复手机消息发送时 CodeIsland 卡死',
    changes: [
      '所有子进程调用改为后台队列 + 5秒超时，不再阻塞主线程',
      '新增「设置 → cmux 连接诊断」面板：权限检查、测试发送、日志查看',
      '新增「设置 → 日志」面板，实时 tail 日志文件',
      '新增请求辅助功能 / 自动化权限的快捷按钮',
    ],
  },
  {
    version: 'v2.0.6',
    date: '2026-04-13',
    type: 'improvement',
    title: 'Anthropic API 代理设置架构重构',
    changes: [
      '代理设置改为进程级别，子进程自动继承，无需逐插件配置',
      'AppDelegate 启动时 setenv，修改后立即生效无需重启',
      'Stats 插件不再需要自己注入环境变量',
    ],
  },
  {
    version: 'v2.0.5',
    date: '2026-04-13',
    type: 'fix',
    title: 'Stats 插件代理支持',
    changes: [
      'API 代理设置现在也覆盖 Stats 插件的 AI 每日总结',
      '精确作用域注入，不再污染全局环境变量',
      '无需手动 launchctl setenv',
    ],
  },
  {
    version: 'v2.0.4',
    date: '2026-04-13',
    type: 'fix',
    title: '修复 macOS Sonoma+ 安装启动失败',
    changes: [
      '修复未签名二进制在 Sonoma/Sequoia/Tahoe 上被 launchd 拒绝启动',
      '发布时自动 ad-hoc 签名，Gatekeeper 不再报错',
    ],
  },
  {
    version: 'v2.0.2',
    date: '2026-04-13',
    type: 'feature',
    title: '支持配置 HTTP 代理访问 Anthropic API',
    changes: [
      '新增「设置 → 通用 → Anthropic API Proxy」配置项',
      '支持 Clash / V2Ray 等本地代理（如 127.0.0.1:7890）',
      '修改后下次轮询生效，无需重启',
    ],
  },
  {
    version: 'v2.0.1',
    date: '2026-04-12',
    type: 'feature',
    title: '插件市场上线',
    changes: [
      '完整插件系统 + 在线插件市场 miomio.chat/plugins',
      '支持 URL 一键安装插件',
      'Stats 插件重新设计为报纸风格排版',
      '关于页新增插件市场推广卡片',
    ],
  },
  {
    version: 'v1.11.0',
    date: '2026-04-10',
    type: 'feature',
    title: 'Codex 集成 + 交互式问答 UI',
    changes: [
      '支持 Codex 会话检测和追踪',
      'Claude 提问时在灵动岛显示可点击选项芯片',
      '新增 Notch 自定义模式（Live Edit）',
      '支持多选和自定义文本输入',
    ],
  },
  {
    version: 'v1.9.0-rc1',
    date: '2026-04-08',
    type: 'feature',
    title: 'CodeLight 手机同步 + Socket.io 通信',
    changes: [
      '初步集成 Code Light iPhone 伴侣 App',
      '配对流程、服务器连接、能力扫描',
      'Developer ID 签名（未公证 RC 版本）',
    ],
  },
  {
    version: 'v1.8.4',
    date: '2026-04-08',
    type: 'feature',
    title: '僵尸会话检测 + cmux 跨窗口跳转',
    changes: [
      '自动检测已死进程并标记为「已结束」',
      '已结束会话降低透明度显示 + 一键清除',
      'cmux 跨窗口跳转支持 AppleScript',
      'Code Light 手机伴侣预览',
    ],
  },
  {
    version: 'v1.8.3',
    date: '2026-04-07',
    type: 'feature',
    title: 'API 用量预警 + 社区入口',
    changes: [
      '5h/7d 用量达到阈值时弹出 macOS 通知 + 8-bit 警报音',
      '可配置预警阈值：70%/80%/90%/关闭',
      '跳转终端后自动收起面板',
      '落地页新增「加入社区」按钮 + 微信群二维码',
    ],
  },
  {
    version: 'v1.8.2',
    date: '2026-04-05',
    type: 'fix',
    title: '修复 iTerm2 终端跳转 + 落地页改版',
    changes: [
      '修复 iTerm2 基于 TTY 的会话匹配',
      '落地页 v2：Aceternity MacBook 滚动动画',
      '更新中文 README',
    ],
  },
  {
    version: 'v1.8.1',
    date: '2026-04-04',
    type: 'improvement',
    title: '设置面板优化 + Developer ID 签名',
    changes: [
      '设置面板紧凑布局：双列开关网格，可滚动',
      '新增 Star + Feedback 按钮',
      '新增微信联系方式',
      'Developer ID 签名',
    ],
  },
  {
    version: 'v1.8.0',
    date: '2026-04-04',
    type: 'feature',
    title: '智能弹窗抑制 + 快捷回复',
    changes: [
      '任务完成时检测是否正在看该终端，避免打扰',
      '支持 cmux/iTerm2/Ghostty/Terminal.app 检测',
      'Claude 提问时直接在会话行显示回复按钮',
      '阶段切换闪光动画',
    ],
  },
  {
    version: 'v1.7.1',
    date: '2026-04-03',
    type: 'improvement',
    title: 'UI 细节打磨',
    changes: [
      'Usage 移至右下角 mini 进度条',
      '终端标签按类型着色（cmux 蓝/Ghostty 紫/iTerm 绿/Warp 琥珀）',
      '活跃会话高亮 + 大图标 + 强调背景',
      'Buddy 卡片修复重复名称',
    ],
  },
  {
    version: 'v1.7.0',
    date: '2026-04-03',
    type: 'feature',
    title: 'Claude 用量监控 + 子代理追踪',
    changes: [
      '实时 5h/7d 用量百分比，读取 macOS Keychain OAuth token',
      '每 5 分钟自动刷新 + 手动刷新按钮',
      '用量颜色编码：绿(<70%)/橙(70-90%)/红(>90%)',
      '子代理数量角标 + 可折叠详情视图',
      '活跃会话高亮 + 终端类型标签',
    ],
  },
  {
    version: 'v1.5.0',
    date: '2026-04-03',
    type: 'feature',
    title: '智能摘要 + 任务完成自动弹窗',
    changes: [
      '会话列表显示最近一次问答摘要',
      '任务完成时自动展开 Notch',
      '收起状态下轮播：状态/任务/工具/项目',
      '30秒/60秒无人处理时状态点变橙/变红',
      '8-bit 合成音效：胜利号角、错误蜂鸣等',
    ],
  },
  {
    version: 'v1.4.0',
    date: '2026-04-02',
    type: 'fix',
    title: '修复 Buddy 计算兼容性',
    changes: [
      '同时支持 Bun 和 Node 安装的 Claude Code',
      'Bun 优先计算，结果缓存到本地',
      '设置面板可点击 + Pixel Cat 模式开关',
    ],
  },
  {
    version: 'v1.3.2',
    date: '2026-04-02',
    type: 'fix',
    title: '修复 Buddy 准确性',
    changes: [
      '使用 Bun 精确计算 species/rarity/stats',
      '设置面板完全可点击',
      '面板关闭距离修正',
    ],
  },
  {
    version: 'v1.3.1',
    date: '2026-04-02',
    type: 'fix',
    title: '原生 wyhash 实现，移除 Bun 依赖',
    changes: [
      '纯 Swift 实现 wyhash，无需 Bun',
      '修正 Buddy roll 顺序与 Claude Code 一致',
      '设置面板交互修复',
    ],
  },
  {
    version: 'v1.2.2',
    date: '2026-04-02',
    type: 'fix',
    title: 'Ad-hoc 签名 + 中文 README',
    changes: [
      'Ad-hoc 签名减少 Gatekeeper 警告',
      '新增中文 README',
      '修正 App 图标居中',
    ],
  },
  {
    version: 'v1.2.1',
    date: '2026-04-01',
    type: 'fix',
    title: '图标修复 + 中文本地化',
    changes: [
      '修正 App 图标像素猫居中',
      '合并中文本地化 PR，支持 Auto/English/中文 切换',
    ],
  },
  {
    version: 'v1.2.0',
    date: '2026-04-01',
    type: 'feature',
    title: 'i18n 系统 + 终端自动检测',
    changes: [
      '自动检测系统语言，支持英文 + 中文',
      '语言切换：Auto / English / 中文',
      '自动检测 Ghostty/Warp/iTerm2/cmux 等 10 种终端',
      '完成会话显示绿色爱心眼猫咪',
      'Buddy 准确 stats + ASCII 像素精灵',
    ],
  },
  {
    version: 'v1.1.0',
    date: '2026-04-01',
    type: 'feature',
    title: 'Buddy 系统 + 终端检测',
    changes: [
      'Emoji 像素动画 + 18 种 ASCII Art 精灵',
      'Buddy 数据卡片：稀有度星级、性格、进度条',
      '使用 Bun 精确计算 Buddy 属性',
      '自动检测 10 种终端类型',
      'Pixel Cat 模式切换',
    ],
  },
  {
    version: 'v1.0.0',
    date: '2026-04-01',
    type: 'major',
    title: 'CodeIsland 首次发布',
    changes: [
      'macOS 灵动岛 AI 编程助手',
      '像素猫动画（6 种状态）',
      '8-bit 芯片音效系统',
      '按项目分组会话',
      'cmux/Ghostty AppleScript 集成',
      '代码 diff 预览 + 权限审批',
    ],
  },
];
