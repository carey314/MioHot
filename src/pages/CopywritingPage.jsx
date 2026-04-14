import { useState, useEffect, useMemo } from 'react';
import { copywritingData, ammoLibrary, platformColors, angleLabels } from '../data/data';

const allPlatforms = ['全部', 'Twitter', '小红书', '抖音', 'V2EX', '掘金', '即刻', '版本更新'];
const allAngles = ['全部', 'A', 'B', 'C', 'D', 'E', 'F'];

const STORAGE_KEY_POSTED = 'ops-copywriting-posted';
const STORAGE_KEY_PINNED = 'ops-copywriting-pinned';

const getPlatformStyle = (platform) => {
  const colors = platformColors[platform];
  if (colors) return { background: colors.bg, color: colors.text };
  return { background: '#f0f0f0', color: '#1d1d1f' };
};

const CopywritingPage = () => {
  const [platformFilter, setPlatformFilter] = useState('全部');
  const [angleFilter, setAngleFilter] = useState('全部');
  const [copiedId, setCopiedId] = useState(null);
  const [showAmmo, setShowAmmo] = useState(false);
  const [postedIds, setPostedIds] = useState(new Set());
  const [pinnedIds, setPinnedIds] = useState(new Set());
  const [sortBy, setSortBy] = useState('default'); // default | pinned | posted | unposted
  const [showPostedFilter, setShowPostedFilter] = useState('all'); // all | posted | unposted

  // Load persisted state
  useEffect(() => {
    const savedPosted = localStorage.getItem(STORAGE_KEY_POSTED);
    if (savedPosted) setPostedIds(new Set(JSON.parse(savedPosted)));
    const savedPinned = localStorage.getItem(STORAGE_KEY_PINNED);
    if (savedPinned) setPinnedIds(new Set(JSON.parse(savedPinned)));
  }, []);

  const savePosted = (next) => {
    setPostedIds(next);
    localStorage.setItem(STORAGE_KEY_POSTED, JSON.stringify([...next]));
  };

  const savePinned = (next) => {
    setPinnedIds(next);
    localStorage.setItem(STORAGE_KEY_PINNED, JSON.stringify([...next]));
  };

  const togglePosted = (id) => {
    const next = new Set(postedIds);
    if (next.has(id)) next.delete(id); else next.add(id);
    savePosted(next);
  };

  const togglePinned = (id) => {
    const next = new Set(pinnedIds);
    if (next.has(id)) next.delete(id); else next.add(id);
    savePinned(next);
  };

  // Filter + sort
  const filtered = useMemo(() => {
    let items = copywritingData.filter((item) => {
      if (platformFilter !== '全部' && item.platform !== platformFilter) return false;
      if (angleFilter !== '全部' && item.angle !== angleFilter) return false;
      if (showPostedFilter === 'posted' && !postedIds.has(item.id)) return false;
      if (showPostedFilter === 'unposted' && postedIds.has(item.id)) return false;
      return true;
    });

    // Sort: pinned always first, then by sortBy
    items.sort((a, b) => {
      const aPinned = pinnedIds.has(a.id) ? 1 : 0;
      const bPinned = pinnedIds.has(b.id) ? 1 : 0;
      if (aPinned !== bPinned) return bPinned - aPinned;

      if (sortBy === 'posted') {
        const aPosted = postedIds.has(a.id) ? 1 : 0;
        const bPosted = postedIds.has(b.id) ? 1 : 0;
        return bPosted - aPosted;
      }
      if (sortBy === 'unposted') {
        const aPosted = postedIds.has(a.id) ? 1 : 0;
        const bPosted = postedIds.has(b.id) ? 1 : 0;
        return aPosted - bPosted;
      }
      return 0;
    });

    return items;
  }, [platformFilter, angleFilter, showPostedFilter, sortBy, postedIds, pinnedIds]);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const postedCount = copywritingData.filter((c) => postedIds.has(c.id)).length;
  const pinnedCount = pinnedIds.size;

  // Platform counts
  const platformCounts = useMemo(() => {
    const counts = {};
    copywritingData.forEach((c) => {
      counts[c.platform] = (counts[c.platform] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1
            className="text-2xl font-semibold m-0"
            style={{ letterSpacing: '-0.28px', lineHeight: '1.1', color: '#1d1d1f' }}
          >
            文案库
          </h1>
          <p className="text-sm mt-1" style={{ color: 'rgba(0,0,0,0.56)' }}>
            共 {copywritingData.length} 条 · 已发 {postedCount} 条 · 置顶 {pinnedCount} 条
          </p>
        </div>
        <button
          onClick={() => setShowAmmo(!showAmmo)}
          className="px-4 py-2 text-sm cursor-pointer transition-all"
          style={{
            background: showAmmo ? '#0071e3' : 'transparent',
            color: showAmmo ? '#ffffff' : '#0071e3',
            border: showAmmo ? 'none' : '1px solid #0071e3',
            borderRadius: '980px',
          }}
        >
          {showAmmo ? '← 返回文案库' : '弹药库'}
        </button>
      </div>

      {showAmmo ? (
        /* Ammo Library */
        <div className="grid grid-cols-2 gap-4">
          {['A', 'B', 'C', 'D', 'E', 'F'].map((angle) => {
            const items = ammoLibrary.filter((a) => a.angle === angle);
            return (
              <div
                key={angle}
                className="rounded-lg p-4"
                style={{ background: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', borderRadius: '8px' }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded-full text-xs font-medium" style={{ background: '#f5f5f7', color: '#1d1d1f' }}>
                    角度 {angle}
                  </span>
                  <span className="text-sm" style={{ color: 'rgba(0,0,0,0.56)' }}>{angleLabels[angle]}</span>
                </div>
                <div className="flex flex-col gap-2">
                  {items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between rounded-lg px-3 py-2 group cursor-pointer transition-colors"
                      style={{ background: 'transparent' }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = '#f5f5f7'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
                      onClick={() => copyToClipboard(item.content, `ammo-${angle}-${idx}`)}
                    >
                      <span className="text-sm flex-1" style={{ color: 'rgba(0,0,0,0.56)' }}>{item.content}</span>
                      <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity ml-2 shrink-0" style={{ color: 'rgba(0,0,0,0.36)' }}>
                        {copiedId === `ammo-${angle}-${idx}` ? '✓ 已复制' : '点击复制'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <>
          {/* Filters */}
          <div
            className="mb-4 p-4 rounded-lg flex flex-col gap-3"
            style={{ background: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', borderRadius: '8px' }}
          >
            {/* Platform filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs mr-1 shrink-0" style={{ color: 'rgba(0,0,0,0.56)' }}>平台：</span>
              {allPlatforms.map((p) => (
                <button
                  key={p}
                  onClick={() => setPlatformFilter(p)}
                  className="px-3 py-1 text-xs cursor-pointer transition-all"
                  style={{
                    background: platformFilter === p ? '#0071e3' : '#f5f5f7',
                    color: platformFilter === p ? '#ffffff' : '#1d1d1f',
                    border: 'none',
                    borderRadius: '11px',
                  }}
                >
                  {p}{p !== '全部' && platformCounts[p] ? ` (${platformCounts[p]})` : ''}
                </button>
              ))}
            </div>
            {/* Angle filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs mr-1 shrink-0" style={{ color: 'rgba(0,0,0,0.56)' }}>角度：</span>
              {allAngles.map((a) => (
                <button
                  key={a}
                  onClick={() => setAngleFilter(a)}
                  className="px-3 py-1 text-xs cursor-pointer transition-all"
                  style={{
                    background: angleFilter === a ? '#0071e3' : '#f5f5f7',
                    color: angleFilter === a ? '#ffffff' : '#1d1d1f',
                    border: 'none',
                    borderRadius: '11px',
                  }}
                >
                  {a === '全部' ? '全部' : `${a} ${angleLabels[a]}`}
                </button>
              ))}
            </div>
            {/* Status filter + Sort */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs mr-1 shrink-0" style={{ color: 'rgba(0,0,0,0.56)' }}>状态：</span>
                {[
                  { key: 'all', label: '全部' },
                  { key: 'unposted', label: '未发' },
                  { key: 'posted', label: '已发' },
                ].map((s) => (
                  <button
                    key={s.key}
                    onClick={() => setShowPostedFilter(s.key)}
                    className="px-3 py-1 text-xs cursor-pointer transition-all"
                    style={{
                      background: showPostedFilter === s.key ? '#0071e3' : '#f5f5f7',
                      color: showPostedFilter === s.key ? '#ffffff' : '#1d1d1f',
                      border: 'none',
                      borderRadius: '11px',
                    }}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs mr-1 shrink-0" style={{ color: 'rgba(0,0,0,0.56)' }}>排序：</span>
                {[
                  { key: 'default', label: '默认' },
                  { key: 'unposted', label: '未发优先' },
                  { key: 'posted', label: '已发优先' },
                ].map((s) => (
                  <button
                    key={s.key}
                    onClick={() => setSortBy(s.key)}
                    className="px-3 py-1 text-xs cursor-pointer transition-all"
                    style={{
                      background: sortBy === s.key ? '#1d1d1f' : '#f5f5f7',
                      color: sortBy === s.key ? '#ffffff' : '#1d1d1f',
                      border: 'none',
                      borderRadius: '11px',
                    }}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results count */}
          <div className="mb-4 flex items-center justify-between">
            <p className="text-xs" style={{ color: 'rgba(0,0,0,0.4)' }}>
              显示 {filtered.length} 条结果
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-4">
            {filtered.map((item) => {
              const isPosted = postedIds.has(item.id);
              const isPinned = pinnedIds.has(item.id);

              return (
                <div
                  key={item.id}
                  className="rounded-lg transition-all relative"
                  style={{
                    background: '#ffffff',
                    boxShadow: isPinned
                      ? '0 2px 8px rgba(0,113,227,0.15)'
                      : '0 1px 3px rgba(0,0,0,0.08)',
                    borderRadius: '8px',
                    borderLeft: isPinned ? '3px solid #0071e3' : isPosted ? '3px solid #34c759' : '3px solid transparent',
                    opacity: isPosted ? 0.75 : 1,
                  }}
                >
                  {/* Card header */}
                  <div className="flex items-center justify-between px-5 pt-4 pb-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      {isPinned && (
                        <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: '#e8f4fd', color: '#0071e3' }}>
                          📌 置顶
                        </span>
                      )}
                      {isPosted && (
                        <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: '#e8f5e9', color: '#34c759' }}>
                          ✓ 已发
                        </span>
                      )}
                      <span className="px-2 py-0.5 rounded-full text-xs font-medium" style={getPlatformStyle(item.platform)}>
                        {item.platform}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-xs font-medium" style={{ background: '#f5f5f7', color: '#1d1d1f' }}>
                        {item.angle} {angleLabels[item.angle]}
                      </span>
                    </div>
                    {/* Actions */}
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => togglePinned(item.id)}
                        className="px-2 py-1 text-xs cursor-pointer transition-all rounded-lg"
                        style={{
                          background: isPinned ? 'rgba(0,113,227,0.08)' : 'transparent',
                          color: isPinned ? '#0071e3' : 'rgba(0,0,0,0.3)',
                          border: 'none',
                        }}
                        title={isPinned ? '取消置顶' : '置顶'}
                      >
                        📌
                      </button>
                      <button
                        onClick={() => copyToClipboard(item.content, item.id)}
                        className="px-3 py-1 text-xs cursor-pointer transition-all rounded-lg"
                        style={{
                          background: copiedId === item.id ? 'rgba(52,199,89,0.1)' : 'transparent',
                          color: copiedId === item.id ? '#34c759' : '#0071e3',
                          border: 'none',
                        }}
                      >
                        {copiedId === item.id ? '已复制 ✓' : '复制'}
                      </button>
                    </div>
                  </div>

                  {/* Title */}
                  {item.title && (
                    <h3 className="text-sm font-medium px-5 mb-2" style={{ color: '#1d1d1f' }}>{item.title}</h3>
                  )}

                  {/* Content */}
                  <pre
                    className="text-sm leading-relaxed whitespace-pre-wrap m-0 font-sans px-5"
                    style={{
                      color: isPosted ? 'rgba(0,0,0,0.36)' : 'rgba(0,0,0,0.56)',
                      fontSize: '14px',
                      letterSpacing: '-0.224px',
                      maxHeight: '300px',
                      overflow: 'auto',
                    }}
                  >
                    {item.content}
                  </pre>

                  {/* Footer: 已发 button */}
                  <div className="px-5 py-3 mt-2" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                    <button
                      onClick={() => togglePosted(item.id)}
                      className="w-full py-2 text-xs font-medium cursor-pointer transition-all rounded-lg"
                      style={{
                        background: isPosted ? '#34c759' : 'transparent',
                        color: isPosted ? '#ffffff' : '#0071e3',
                        border: isPosted ? 'none' : '1px solid rgba(0,113,227,0.2)',
                        borderRadius: '8px',
                      }}
                      onMouseEnter={(e) => {
                        if (!isPosted) {
                          e.currentTarget.style.background = '#0071e3';
                          e.currentTarget.style.color = '#ffffff';
                          e.currentTarget.style.border = 'none';
                        } else {
                          e.currentTarget.style.background = '#2db84e';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isPosted) {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = '#0071e3';
                          e.currentTarget.style.border = '1px solid rgba(0,113,227,0.2)';
                        } else {
                          e.currentTarget.style.background = '#34c759';
                        }
                      }}
                    >
                      {isPosted ? '✓ 已发布（点击取消）' : '标记为已发'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16" style={{ color: 'rgba(0,0,0,0.36)' }}>
              <p className="text-4xl mb-3">🔍</p>
              <p>没有符合筛选条件的文案</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CopywritingPage;
