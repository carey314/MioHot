# 贡献指南

## 添加新文案

1. 编辑 `src/data/data.js`
2. 在 `copywritingData` 数组末尾添加新条目
3. 格式：`{ id: 'xxx', platform: '平台', angle: '角度', title: '标题', content: '内容' }`
4. 确保遵守对应平台的社区规范
5. `npm run build` 确认编译通过

## 文案角度说明
- A: 双端系统  B: 像素猫  C: 技术亮点
- D: 使用场景  E: 幕后/共鸣  F: 隐性对比

## 开发规范
- Apple 浅色设计风格，唯一彩色 #0071e3
- 数据持久化用 localStorage
- 组件拆分到 pages/ 和 components/
