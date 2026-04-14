import { useState } from 'react';
import { changelogData } from '../data/data';

const typeConfig = {
  major: { label: '重大更新', bg: '#e8f5e9', text: '#34c759' },
  feature: { label: '新功能', bg: '#e8f4fd', text: '#0071e3' },
  fix: { label: '修复', bg: '#fce8e8', text: '#ff3b30' },
  improvement: { label: '改进', bg: '#f5f5f7', text: 'rgba(0,0,0,0.56)' },
};

const filters = [
  { key: 'all', label: '全部' },
  { key: 'major', label: '重大更新' },
  { key: 'feature', label: '新功能' },
  { key: 'fix', label: '修复' },
  { key: 'improvement', label: '改进' },
];

const ChangelogPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered =
    activeFilter === 'all'
      ? changelogData
      : changelogData.filter((item) => item.type === activeFilter);

  return (
    <div style={{ maxWidth: 800, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <h1
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: '#1d1d1f',
            letterSpacing: '-0.5px',
            margin: 0,
          }}
        >
          版本更新
        </h1>
        <p
          style={{
            fontSize: 15,
            color: 'rgba(0,0,0,0.48)',
            marginTop: 6,
          }}
        >
          MioIsland 更新日志
        </p>
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActiveFilter(f.key)}
            style={{
              padding: '6px 16px',
              borderRadius: 20,
              border: 'none',
              cursor: 'pointer',
              fontSize: 13,
              fontWeight: activeFilter === f.key ? 600 : 400,
              background: activeFilter === f.key ? '#1d1d1f' : '#f5f5f7',
              color: activeFilter === f.key ? '#ffffff' : 'rgba(0,0,0,0.56)',
              transition: 'all 0.2s',
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div style={{ position: 'relative', paddingLeft: 32 }}>
        {/* Vertical line */}
        <div
          style={{
            position: 'absolute',
            left: 7,
            top: 8,
            bottom: 8,
            width: 2,
            background: 'rgba(0,0,0,0.1)',
            borderRadius: 1,
          }}
        />

        {filtered.map((item, index) => {
          const tc = typeConfig[item.type];
          const isLatest = index === 0;

          return (
            <div
              key={item.version}
              style={{ position: 'relative', marginBottom: 20 }}
            >
              {/* Timeline dot */}
              <div
                style={{
                  position: 'absolute',
                  left: -28,
                  top: 20,
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  background: tc.text,
                  border: '2px solid #ffffff',
                  boxShadow: `0 0 0 2px ${tc.text}33`,
                }}
              />

              {/* Card */}
              <div
                style={{
                  background: '#ffffff',
                  borderRadius: 12,
                  padding: isLatest ? '24px 28px' : '20px 24px',
                  boxShadow: isLatest
                    ? '0 2px 8px rgba(0,0,0,0.1)'
                    : '0 1px 3px rgba(0,0,0,0.08)',
                  border: isLatest ? '1px solid rgba(0,113,227,0.15)' : '1px solid rgba(0,0,0,0.04)',
                }}
              >
                {/* Version row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    marginBottom: 8,
                    flexWrap: 'wrap',
                  }}
                >
                  <span
                    style={{
                      fontSize: isLatest ? 20 : 17,
                      fontWeight: 600,
                      color: '#1d1d1f',
                      letterSpacing: '-0.3px',
                    }}
                  >
                    {item.version}
                  </span>

                  {isLatest && (
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        padding: '2px 8px',
                        borderRadius: 10,
                        background: '#0071e3',
                        color: '#ffffff',
                      }}
                    >
                      最新
                    </span>
                  )}

                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 500,
                      padding: '2px 8px',
                      borderRadius: 10,
                      background: tc.bg,
                      color: tc.text,
                    }}
                  >
                    {tc.label}
                  </span>

                  <span
                    style={{
                      fontSize: 13,
                      color: 'rgba(0,0,0,0.48)',
                      marginLeft: 'auto',
                    }}
                  >
                    {item.date}
                  </span>
                </div>

                {/* Title */}
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: '#1d1d1f',
                    margin: '0 0 12px 0',
                  }}
                >
                  {item.title}
                </p>

                {/* Changes list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {item.changes.map((change, i) => (
                    <div
                      key={i}
                      style={{
                        fontSize: 13,
                        color: 'rgba(0,0,0,0.64)',
                        lineHeight: 1.5,
                        display: 'flex',
                        gap: 8,
                      }}
                    >
                      <span style={{ color: 'rgba(0,0,0,0.24)', flexShrink: 0 }}>·</span>
                      <span>{change}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChangelogPage;
