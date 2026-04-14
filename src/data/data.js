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
