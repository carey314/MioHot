import { Link } from 'react-router-dom';
import { copywritingData, executionPlan, defaultMetrics } from '../data/data';
import { useState, useEffect } from 'react';

const modules = [
  { path: '/calendar', icon: '📅', label: '内容日历', desc: '本周排期 + 已发追踪' },
  { path: '/copywriting', icon: '📝', label: '文案库', desc: `${copywritingData.length} 条文案随时取用` },
  { path: '/strategy', icon: '📊', label: '平台策略', desc: '8 平台完整策略' },
  { path: '/execution', icon: '🎯', label: '执行计划', desc: '三阶段任务追踪' },
  { path: '/tracking', icon: '📈', label: '数据追踪', desc: '核心指标 + 周复盘' },
  { path: '/kol', icon: '🤝', label: 'KOL合作', desc: '合作模板 + PH清单' },
];

const DashboardPage = () => {
  const [metrics, setMetrics] = useState(defaultMetrics);
  const [calendarStats, setCalendarStats] = useState({ done: 0, total: 7 });

  useEffect(() => {
    const savedMetrics = localStorage.getItem('ops-metrics');
    if (savedMetrics) setMetrics(JSON.parse(savedMetrics));

    const savedCal = localStorage.getItem('ops-calendar');
    if (savedCal) {
      const data = JSON.parse(savedCal);
      const values = Object.values(data).flat();
      const done = values.filter((i) => i.done).length;
      setCalendarStats({ done, total: values.length || 7 });
    }
  }, []);

  const xhsCount = copywritingData.filter((c) => c.platform === '小红书').length;
  const twCount = copywritingData.filter((c) => c.platform === 'Twitter').length;

  return (
    <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
      {/* Hero */}
      <div className="mb-8">
        <h1
          className="text-4xl font-semibold m-0"
          style={{ letterSpacing: '-0.28px', lineHeight: '1.07', color: '#1d1d1f' }}
        >
          MioHot
        </h1>
        <p className="text-lg mt-2" style={{ color: 'rgba(0,0,0,0.56)', lineHeight: '1.47' }}>
          MioIsland & Code Light 运营工作台
        </p>
      </div>

      {/* Story Banner */}
      <div
        className="rounded-xl p-6 mb-8"
        style={{
          background: 'linear-gradient(135deg, #000000 0%, #1d1d1f 100%)',
          boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
        }}
      >
        <p
          className="text-lg font-medium m-0"
          style={{ color: '#ffffff', lineHeight: '1.47', letterSpacing: '-0.374px' }}
        >
          「Mac 刘海里住着一只像素猫，它盯着 Claude 写代码。
          <br />
          你不在电脑前？iPhone 上也有一只。」
        </p>
        <div className="flex gap-4 mt-4">
          <span
            className="text-xs px-3 py-1 rounded-full"
            style={{ background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)' }}
          >
            MioIsland · Mac · 开源免费
          </span>
          <span
            className="text-xs px-3 py-1 rounded-full"
            style={{ background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)' }}
          >
            Code Light · iPhone · App Store
          </span>
          <span
            className="text-xs px-3 py-1 rounded-full"
            style={{ background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)' }}
          >
            ⭐ 270 GitHub Stars
          </span>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {[
          { label: '文案库', value: copywritingData.length, unit: '条', sub: `小红书 ${xhsCount} · Twitter ${twCount}` },
          { label: '本周进度', value: calendarStats.done, unit: `/ ${calendarStats.total}`, sub: '已发布内容' },
          { label: 'GitHub Star', value: metrics[0]?.current || 270, unit: '', sub: `目标 ${metrics[0]?.target || 500}` },
          { label: '覆盖平台', value: 8, unit: '个', sub: '全平台策略就绪' },
        ].map((stat, i) => (
          <div
            key={i}
            className="rounded-xl p-5"
            style={{
              background: '#ffffff',
              boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
            }}
          >
            <p className="text-xs m-0 mb-2" style={{ color: 'rgba(0,0,0,0.48)' }}>
              {stat.label}
            </p>
            <p className="text-3xl font-semibold m-0" style={{ color: '#1d1d1f', letterSpacing: '-0.28px' }}>
              {stat.value}
              <span className="text-sm font-normal ml-1" style={{ color: 'rgba(0,0,0,0.36)' }}>
                {stat.unit}
              </span>
            </p>
            <p className="text-xs m-0 mt-1" style={{ color: 'rgba(0,0,0,0.36)' }}>
              {stat.sub}
            </p>
          </div>
        ))}
      </div>

      {/* Module Cards */}
      <h2
        className="text-xl font-semibold mb-4"
        style={{ color: '#1d1d1f', letterSpacing: '-0.28px' }}
      >
        功能模块
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {modules.map((mod) => (
          <Link
            key={mod.path}
            to={mod.path}
            className="rounded-xl p-5 no-underline transition-all duration-300"
            style={{
              background: '#ffffff',
              boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
              display: 'block',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.12)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span className="text-2xl">{mod.icon}</span>
            <h3
              className="text-base font-semibold mt-3 mb-1"
              style={{ color: '#1d1d1f', letterSpacing: '-0.224px' }}
            >
              {mod.label}
            </h3>
            <p className="text-sm m-0" style={{ color: 'rgba(0,0,0,0.48)' }}>
              {mod.desc}
            </p>
          </Link>
        ))}
      </div>

      {/* Content Angle Guide */}
      <h2
        className="text-xl font-semibold mt-8 mb-4"
        style={{ color: '#1d1d1f', letterSpacing: '-0.28px' }}
      >
        内容角度速查
      </h2>
      <div
        className="rounded-xl overflow-hidden"
        style={{ background: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}
      >
        {[
          { code: 'A', name: '双端系统', example: '一个系统，两个屏幕', color: '#0071e3' },
          { code: 'B', name: '像素猫', example: '刘海里住着一只猫', color: '#ff9500' },
          { code: 'C', name: '技术亮点', example: '精准终端路由，消息不会发错', color: '#34c759' },
          { code: 'D', name: '使用场景', example: '做饭时审批了 Claude 的请求', color: '#ff3b30' },
          { code: 'E', name: '幕后/共鸣', example: '一个人做了两个 App', color: '#af52de' },
          { code: 'F', name: '隐性对比', example: '别的灵动岛只能看，这个能操控', color: '#1d1d1f' },
        ].map((angle, i) => (
          <div
            key={angle.code}
            className="flex items-center gap-4 px-5 py-3"
            style={{ borderTop: i > 0 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}
          >
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-semibold text-white shrink-0"
              style={{ background: angle.color }}
            >
              {angle.code}
            </span>
            <span className="text-sm font-medium w-24 shrink-0" style={{ color: '#1d1d1f' }}>
              {angle.name}
            </span>
            <span className="text-sm" style={{ color: 'rgba(0,0,0,0.48)' }}>
              {angle.example}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
