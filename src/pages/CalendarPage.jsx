import { useState, useEffect, useCallback } from 'react';
import { defaultSchedule, platformColors } from '../data/data';

const dayNames = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
const dayOrder = [1, 2, 3, 4, 5, 6, 0]; // 周一到周日

function getWeekStart(date) {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(d.setDate(diff));
}

function formatDate(date) {
  return `${date.getMonth() + 1}/${date.getDate()}`;
}

function getWeekKey(weekStart) {
  return `${weekStart.getFullYear()}-${weekStart.getMonth()}-${weekStart.getDate()}`;
}

const getPlatformStyle = (platform) => {
  const colors = platformColors[platform];
  if (colors) return { background: colors.bg, color: colors.text };
  return { background: '#f0f0f0', color: '#1d1d1f' };
};

const CalendarPage = () => {
  const [weekOffset, setWeekOffset] = useState(0);
  const [scheduleData, setScheduleData] = useState({});
  const [showAddModal, setShowAddModal] = useState(null); // day index or null
  const [newItem, setNewItem] = useState({ platform: 'Twitter', angle: '', desc: '' });

  const today = new Date();
  const weekStart = getWeekStart(today);
  weekStart.setDate(weekStart.getDate() + weekOffset * 7);
  const weekKey = getWeekKey(weekStart);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('ops-calendar');
    if (saved) setScheduleData(JSON.parse(saved));
  }, []);

  const save = useCallback(
    (data) => {
      setScheduleData(data);
      localStorage.setItem('ops-calendar', JSON.stringify(data));
    },
    []
  );

  // Initialize default items for current week into localStorage (once per week)
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('ops-calendar') || '{}');
    let needsSave = false;
    dayOrder.forEach((dayIdx) => {
      const key = `${weekKey}-${dayIdx}`;
      if (!saved[key]) {
        const def = defaultSchedule[dayIdx];
        if (def) {
          saved[key] = [{ platform: def.platform, desc: def.note, done: false, id: `default-${dayIdx}` }];
        } else {
          saved[key] = [];
        }
        needsSave = true;
      }
    });
    if (needsSave) {
      setScheduleData(saved);
      localStorage.setItem('ops-calendar', JSON.stringify(saved));
    }
  }, [weekKey]);

  // Get items for a specific day
  const getItems = (dayIdx) => {
    const key = `${weekKey}-${dayIdx}`;
    if (scheduleData[key]) return scheduleData[key];
    // Fallback (should not normally reach here after initialization)
    const def = defaultSchedule[dayIdx];
    if (def) return [{ platform: def.platform, desc: def.note, done: false, id: `default-${dayIdx}` }];
    return [];
  };

  const toggleDone = (dayIdx, itemId) => {
    const key = `${weekKey}-${dayIdx}`;
    const items = [...getItems(dayIdx)];
    const idx = items.findIndex((i) => i.id === itemId);
    if (idx >= 0) {
      items[idx] = { ...items[idx], done: !items[idx].done };
      save({ ...scheduleData, [key]: items });
    }
  };

  const addItem = (dayIdx) => {
    const key = `${weekKey}-${dayIdx}`;
    const items = [...getItems(dayIdx)];
    items.push({
      id: `custom-${Date.now()}`,
      platform: newItem.platform,
      desc: `${newItem.angle ? `[${newItem.angle}] ` : ''}${newItem.desc}`,
      done: false,
    });
    save({ ...scheduleData, [key]: items });
    setShowAddModal(null);
    setNewItem({ platform: 'Twitter', angle: '', desc: '' });
  };

  // Progress
  const allItems = dayOrder.flatMap((d) => getItems(d));
  const doneCount = allItems.filter((i) => i.done).length;
  const totalCount = allItems.length;
  const progress = totalCount > 0 ? Math.round((doneCount / totalCount) * 100) : 0;

  return (
    <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1
            className="text-2xl font-semibold m-0"
            style={{ letterSpacing: '-0.28px', lineHeight: '1.1', color: '#1d1d1f' }}
          >
            内容日历
          </h1>
          <p className="text-sm mt-1" style={{ color: 'rgba(0,0,0,0.56)' }}>
            {formatDate(weekStart)} - {formatDate(new Date(weekStart.getTime() + 6 * 86400000))}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setWeekOffset((o) => o - 1)}
            className="px-3 py-1.5 text-sm hover:shadow-md transition-all cursor-pointer"
            style={{ background: '#ffffff', border: 'none', borderRadius: '980px', color: '#1d1d1f', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}
          >
            ← 上一周
          </button>
          <button
            onClick={() => setWeekOffset(0)}
            className="px-3 py-1.5 text-sm text-white cursor-pointer"
            style={{ background: '#0071e3', border: 'none', borderRadius: '980px' }}
          >
            本周
          </button>
          <button
            onClick={() => setWeekOffset((o) => o + 1)}
            className="px-3 py-1.5 text-sm hover:shadow-md transition-all cursor-pointer"
            style={{ background: '#ffffff', border: 'none', borderRadius: '980px', color: '#1d1d1f', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}
          >
            下一周 →
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div
        className="mb-6 p-4 rounded-lg"
        style={{ background: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', borderRadius: '8px' }}
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm" style={{ color: 'rgba(0,0,0,0.56)' }}>本周进度</span>
          <span className="text-sm font-mono" style={{ color: '#0071e3' }}>
            {doneCount}/{totalCount} ({progress}%)
          </span>
        </div>
        <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(0,0,0,0.06)' }}>
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${progress}%`,
              background: '#0071e3',
            }}
          />
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-3">
        {dayOrder.map((dayIdx) => {
          const date = new Date(weekStart);
          date.setDate(date.getDate() + (dayIdx === 0 ? 6 : dayIdx - 1));
          const isToday =
            weekOffset === 0 && today.getDay() === dayIdx;
          const items = getItems(dayIdx);

          return (
            <div
              key={dayIdx}
              className="rounded-lg p-3 min-h-[200px] flex flex-col"
              style={{
                background: '#ffffff',
                border: isToday ? '2px solid #0071e3' : '1px solid rgba(0,0,0,0.06)',
                borderRadius: '8px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                transition: 'all 0.3s',
              }}
            >
              {/* Day Header */}
              <div className="flex items-center justify-between mb-3">
                <span
                  className="text-xs font-medium"
                  style={{ color: isToday ? '#0071e3' : 'rgba(0,0,0,0.56)' }}
                >
                  {dayNames[dayIdx]}
                </span>
                <span
                  className="text-xs"
                  style={{ color: isToday ? '#0071e3' : 'rgba(0,0,0,0.36)' }}
                >
                  {formatDate(date)}
                </span>
              </div>

              {/* Items */}
              <div className="flex-1 flex flex-col gap-2">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-lg text-xs transition-all"
                    style={{
                      background: item.done ? 'rgba(52,199,89,0.06)' : '#f5f5f7',
                      borderLeft: item.done ? '3px solid #34c759' : '3px solid transparent',
                      overflow: 'hidden',
                    }}
                  >
                    <div className="p-2 pb-1.5">
                      <div className="flex items-center mb-1">
                        <span
                          className="px-1.5 py-0.5 rounded text-[10px] font-medium"
                          style={getPlatformStyle(item.platform)}
                        >
                          {item.platform}
                        </span>
                      </div>
                      <p className="text-[11px] leading-relaxed m-0" style={{ color: item.done ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.56)', textDecoration: item.done ? 'line-through' : 'none' }}>{item.desc}</p>
                    </div>
                    <button
                      onClick={() => toggleDone(dayIdx, item.id)}
                      className="w-full text-[11px] font-medium py-1.5 cursor-pointer transition-all"
                      style={{
                        background: item.done ? '#34c759' : 'transparent',
                        color: item.done ? '#ffffff' : '#0071e3',
                        border: 'none',
                        borderTop: item.done ? 'none' : '1px solid rgba(0,113,227,0.15)',
                      }}
                      onMouseEnter={(e) => {
                        if (!item.done) {
                          e.currentTarget.style.background = '#0071e3';
                          e.currentTarget.style.color = '#ffffff';
                        } else {
                          e.currentTarget.style.background = '#2db84e';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!item.done) {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = '#0071e3';
                        } else {
                          e.currentTarget.style.background = '#34c759';
                        }
                      }}
                    >
                      {item.done ? '✓ 已发（点击取消）' : '标记已发'}
                    </button>
                  </div>
                ))}
              </div>

              {/* Add Button */}
              <button
                onClick={() => setShowAddModal(dayIdx)}
                className="mt-2 w-full py-1.5 rounded-lg text-xs transition-all cursor-pointer"
                style={{
                  background: 'transparent',
                  border: '1px dashed rgba(0,0,0,0.15)',
                  color: 'rgba(0,0,0,0.4)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderStyle = 'solid'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderStyle = 'dashed'; }}
              >
                + 添加
              </button>
            </div>
          );
        })}
      </div>

      {/* Add Modal */}
      {showAddModal !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(8px)' }}
          onClick={() => setShowAddModal(null)}
        >
          <div
            className="rounded-xl p-6 w-[400px]"
            style={{ background: '#ffffff', boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3
              className="text-lg font-semibold mb-4"
              style={{ letterSpacing: '-0.28px', lineHeight: '1.14', color: '#1d1d1f' }}
            >
              添加排期 - {dayNames[showAddModal]}
            </h3>
            <div className="flex flex-col gap-3">
              <select
                value={newItem.platform}
                onChange={(e) => setNewItem({ ...newItem, platform: e.target.value })}
                className="rounded-xl px-3 py-2 text-sm"
                style={{
                  background: '#f5f5f7',
                  border: '1px solid rgba(0,0,0,0.1)',
                  borderRadius: '11px',
                  outline: 'none',
                  color: '#1d1d1f',
                }}
              >
                {['Twitter', '小红书', 'V2EX', '掘金', '即刻', '抖音', 'YouTube', 'Product Hunt'].map(
                  (p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  )
                )}
              </select>
              <select
                value={newItem.angle}
                onChange={(e) => setNewItem({ ...newItem, angle: e.target.value })}
                className="rounded-xl px-3 py-2 text-sm"
                style={{
                  background: '#f5f5f7',
                  border: '1px solid rgba(0,0,0,0.1)',
                  borderRadius: '11px',
                  outline: 'none',
                  color: '#1d1d1f',
                }}
              >
                <option value="">选择角度（可选）</option>
                <option value="A">A - 双端系统</option>
                <option value="B">B - 像素猫</option>
                <option value="C">C - 技术亮点</option>
                <option value="D">D - 使用场景</option>
                <option value="E">E - 幕后故事</option>
                <option value="F">F - 隐性对比</option>
              </select>
              <input
                value={newItem.desc}
                onChange={(e) => setNewItem({ ...newItem, desc: e.target.value })}
                placeholder="简短描述..."
                className="px-3 py-2 text-sm"
                style={{
                  background: '#f5f5f7',
                  border: '1px solid rgba(0,0,0,0.1)',
                  borderRadius: '11px',
                  outline: 'none',
                  color: '#1d1d1f',
                }}
              />
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => addItem(showAddModal)}
                  className="flex-1 py-2 rounded-lg text-sm font-medium text-white cursor-pointer"
                  style={{
                    background: '#0071e3',
                    border: 'none',
                    borderRadius: '8px',
                  }}
                >
                  添加
                </button>
                <button
                  onClick={() => setShowAddModal(null)}
                  className="flex-1 py-2 rounded-lg text-sm cursor-pointer"
                  style={{
                    background: '#f5f5f7',
                    color: 'rgba(0,0,0,0.56)',
                    border: 'none',
                    borderRadius: '8px',
                  }}
                >
                  取消
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarPage;
