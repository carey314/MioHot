import { useState } from 'react';
import { platformStrategies, platformColors } from '../data/data';

const platformBrandColors = {
  Twitter: '#1d9bf0',
  '小红书': '#ff2442',
  V2EX: '#1d1d1f',
  '掘金': '#007fff',
  '即刻': '#ffc107',
  '抖音': '#1d1d1f',
  YouTube: '#ff0000',
  'Product Hunt': '#da552f',
};

const StrategyPage = () => {
  const [copiedTag, setCopiedTag] = useState(null);

  const copyTag = (tag, id) => {
    navigator.clipboard.writeText(tag);
    setCopiedTag(id);
    setTimeout(() => setCopiedTag(null), 1500);
  };

  const copyAllTags = (tags, platformName) => {
    navigator.clipboard.writeText(tags.join(' '));
    setCopiedTag(`all-${platformName}`);
    setTimeout(() => setCopiedTag(null), 1500);
  };

  return (
    <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
      <div className="mb-6">
        <h1
          className="text-2xl font-semibold m-0"
          style={{ letterSpacing: '-0.28px', lineHeight: '1.1', color: '#1d1d1f' }}
        >
          平台策略
        </h1>
        <p className="text-sm mt-1" style={{ color: 'rgba(0,0,0,0.56)' }}>
          8 个平台的运营策略详情
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {platformStrategies.map((platform) => {
          const brandColor = platformBrandColors[platform.name] || '#0071e3';
          return (
            <div
              key={platform.name}
              className="rounded-lg overflow-hidden transition-all"
              style={{ background: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', borderRadius: '8px' }}
            >
              {/* Color bar */}
              <div style={{ height: '3px', background: brandColor }} />

              <div className="p-5">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{platform.icon}</span>
                  <div>
                    <h3 className="text-base font-semibold m-0" style={{ color: '#1d1d1f' }}>{platform.name}</h3>
                    <p className="text-xs m-0" style={{ color: 'rgba(0,0,0,0.56)' }}>
                      {platform.positioning}
                    </p>
                  </div>
                  <span
                    className="ml-auto px-2.5 py-1 rounded-full text-xs font-mono"
                    style={{
                      background: '#f5f5f7',
                      color: '#0071e3',
                    }}
                  >
                    {platform.frequency}
                  </span>
                </div>

                {/* Content Type Distribution */}
                <div className="mb-4">
                  <p className="text-xs mb-2" style={{ color: 'rgba(0,0,0,0.56)' }}>
                    内容类型分配
                  </p>
                  <div className="flex flex-col gap-1.5">
                    {platform.contentTypes.map((ct) => (
                      <div key={ct.label} className="flex items-center gap-2">
                        <span
                          className="text-xs w-20 shrink-0 text-right"
                          style={{ color: 'rgba(0,0,0,0.56)' }}
                        >
                          {ct.label}
                        </span>
                        <div
                          className="flex-1 h-4 rounded-full overflow-hidden"
                          style={{ background: 'rgba(0,0,0,0.04)' }}
                        >
                          <div
                            className="h-full rounded-full transition-all duration-700"
                            style={{
                              width: `${ct.percent}%`,
                              background: brandColor,
                              opacity: 0.8,
                            }}
                          />
                        </div>
                        <span
                          className="text-xs w-8 font-mono"
                          style={{ color: 'rgba(0,0,0,0.36)' }}
                        >
                          {ct.percent}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs m-0" style={{ color: 'rgba(0,0,0,0.56)' }}>标签策略</p>
                    <button
                      onClick={() => copyAllTags(platform.tags, platform.name)}
                      className="text-[10px] cursor-pointer hover:opacity-80 transition-opacity"
                      style={{ background: 'none', border: 'none', color: '#0071e3' }}
                    >
                      {copiedTag === `all-${platform.name}` ? '✓ 已复制' : '全部复制'}
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {platform.tags.map((tag, idx) => (
                      <button
                        key={idx}
                        onClick={() => copyTag(tag, `${platform.name}-${idx}`)}
                        className="px-2 py-1 text-xs cursor-pointer transition-all hover:opacity-80"
                        style={{
                          background: copiedTag === `${platform.name}-${idx}` ? 'rgba(52,199,89,0.1)' : '#f5f5f7',
                          color: copiedTag === `${platform.name}-${idx}` ? '#34c759' : '#1d1d1f',
                          border: 'none',
                          borderRadius: '980px',
                        }}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Warnings */}
                <div>
                  <p className="text-xs mb-2" style={{ color: 'rgba(0,0,0,0.56)' }}>避雷清单</p>
                  <div className="flex flex-col gap-1">
                    {platform.warnings.map((w, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 px-2.5 py-1.5 rounded-md text-xs"
                        style={{ background: '#fff0f0', borderLeft: '3px solid #ff3b30' }}
                      >
                        <span style={{ color: '#ff3b30' }}>{w}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StrategyPage;
