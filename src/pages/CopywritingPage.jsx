import { useState } from 'react';
import { copywritingData, ammoLibrary, platformColors, angleLabels, angleColors } from '../data/data';

const allPlatforms = ['全部', 'Twitter', '小红书', 'V2EX', '掘金', '即刻', '抖音', '版本更新'];
const allAngles = ['全部', 'A', 'B', 'C', 'D', 'E', 'F'];

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

  const filtered = copywritingData.filter((item) => {
    if (platformFilter !== '全部' && item.platform !== platformFilter) return false;
    if (angleFilter !== '全部' && item.angle !== angleFilter) return false;
    return true;
  });

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

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
            共 {copywritingData.length} 条文案
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
        // Ammo Library
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
                  <span
                    className="px-2 py-0.5 rounded-full text-xs font-medium"
                    style={{ background: '#f5f5f7', color: '#1d1d1f' }}
                  >
                    角度 {angle}
                  </span>
                  <span className="text-sm" style={{ color: 'rgba(0,0,0,0.56)' }}>
                    {angleLabels[angle]}
                  </span>
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
                      <span className="text-sm flex-1" style={{ color: 'rgba(0,0,0,0.56)' }}>
                        {item.content}
                      </span>
                      <span
                        className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity ml-2 shrink-0"
                        style={{ color: 'rgba(0,0,0,0.36)' }}
                      >
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
            className="mb-6 p-4 rounded-lg flex flex-col gap-3"
            style={{ background: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', borderRadius: '8px' }}
          >
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs mr-1" style={{ color: 'rgba(0,0,0,0.56)' }}>平台：</span>
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
                  {p}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs mr-1" style={{ color: 'rgba(0,0,0,0.56)' }}>角度：</span>
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
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-4">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="rounded-lg p-5 transition-all"
                style={{
                  background: '#ffffff',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                  borderRadius: '8px',
                  animation: 'fadeIn 0.5s ease-out',
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span
                      className="px-2 py-0.5 rounded-full text-xs font-medium"
                      style={getPlatformStyle(item.platform)}
                    >
                      {item.platform}
                    </span>
                    <span
                      className="px-2 py-0.5 rounded-full text-xs font-medium"
                      style={{ background: '#f5f5f7', color: '#1d1d1f' }}
                    >
                      {item.angle} {angleLabels[item.angle]}
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(item.content, item.id)}
                    className="px-3 py-1 text-xs cursor-pointer transition-all"
                    style={{
                      background: copiedId === item.id ? 'rgba(52,199,89,0.1)' : 'transparent',
                      color: copiedId === item.id ? '#34c759' : '#0071e3',
                      border: 'none',
                      borderRadius: '8px',
                    }}
                  >
                    {copiedId === item.id ? '已复制 ✓' : '复制'}
                  </button>
                </div>
                {item.title && (
                  <h3 className="text-sm font-medium mb-2" style={{ color: '#1d1d1f' }}>{item.title}</h3>
                )}
                <pre
                  className="text-sm leading-relaxed whitespace-pre-wrap m-0 font-sans"
                  style={{ color: 'rgba(0,0,0,0.56)', fontSize: '14px', letterSpacing: '-0.224px' }}
                >
                  {item.content}
                </pre>
              </div>
            ))}
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
