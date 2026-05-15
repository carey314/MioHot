import { useState, useMemo } from 'react';
import { promoVisuals, promoSchedule } from '../data/promoVisuals';
import { platformColors } from '../data/data';

const platformOptions = ['全部', 'Twitter', '小红书', '即刻', '朋友圈', '微博', 'V2EX', '掘金', '公众号', '知乎', '抖音'];

const renderStars = (n) => '⭐'.repeat(n);

const PostCard = ({ post }) => {
  const [copied, setCopied] = useState(false);
  const color = platformColors[post.platform] || { bg: '#f0f0f0', text: '#1d1d1f', border: 'rgba(0,0,0,0.1)' };

  const handleCopy = () => {
    const fullText = (post.title ? post.title + '\n\n' : '') +
                     post.content +
                     (post.tags && post.tags.length > 0
                       ? '\n\n' + post.tags.map((t) => '#' + t).join(' ')
                       : '');
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      className="rounded-xl p-4 mb-3"
      style={{
        background: '#ffffff',
        border: post.primary ? `2px solid ${color.text}` : '1px solid rgba(0,0,0,0.08)',
        boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
      }}
    >
      {/* Header: platform badge + primary tag + copy button */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span
            className="text-xs font-semibold px-2 py-0.5 rounded-md"
            style={{ background: color.bg, color: color.text, border: `1px solid ${color.border}` }}
          >
            {post.platform}
          </span>
          {post.primary && (
            <span
              className="text-[10px] px-1.5 py-0.5 rounded font-semibold"
              style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b' }}
            >
              首选
            </span>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="text-xs px-2.5 py-1 rounded-md transition"
          style={{
            background: copied ? '#34c759' : 'rgba(0,113,227,0.1)',
            color: copied ? '#fff' : '#0071e3',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 500,
          }}
        >
          {copied ? '✓ 已复制' : '📋 一键复制'}
        </button>
      </div>

      {/* Title */}
      {post.title && (
        <div className="text-sm font-semibold mb-2" style={{ color: '#1d1d1f' }}>
          {post.title}
        </div>
      )}

      {/* Content */}
      <div
        className="text-sm whitespace-pre-wrap leading-relaxed"
        style={{ color: 'rgba(0,0,0,0.72)', fontFamily: '-apple-system, BlinkMacSystemFont, "PingFang SC", sans-serif' }}
      >
        {post.content}
      </div>

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-1.5 py-0.5 rounded"
              style={{ background: 'rgba(0,113,227,0.08)', color: '#0071e3' }}
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Circles (即刻) */}
      {post.circles && post.circles.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1 items-center">
          <span className="text-[11px]" style={{ color: 'rgba(0,0,0,0.48)' }}>即刻圈子：</span>
          {post.circles.map((c) => (
            <span
              key={c}
              className="text-[11px] px-1.5 py-0.5 rounded"
              style={{ background: 'rgba(255, 193, 7, 0.1)', color: '#fb923c' }}
            >
              {c}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

const PromoVisualsPage = () => {
  const [activePlatform, setActivePlatform] = useState('全部');
  const [zoomImage, setZoomImage] = useState(null);

  // Filter logic: if "全部" → show all; otherwise show only images with a matching post
  const filteredVisuals = useMemo(() => {
    if (activePlatform === '全部') return promoVisuals;
    return promoVisuals
      .map((v) => ({
        ...v,
        posts: v.posts.filter((p) => p.platform === activePlatform),
      }))
      .filter((v) => v.posts.length > 0);
  }, [activePlatform]);

  const totalPosts = useMemo(
    () => promoVisuals.reduce((sum, v) => sum + v.posts.length, 0),
    []
  );

  return (
    <div className="max-w-[1200px]">
      {/* Header */}
      <div className="mb-6">
        <h1
          className="text-3xl font-semibold mb-2"
          style={{ color: '#1d1d1f', letterSpacing: '-0.5px' }}
        >
          🎨 推广素材库
        </h1>
        <p className="text-sm" style={{ color: 'rgba(0,0,0,0.56)' }}>
          13 张图 × {totalPosts} 条平台文案 · 一键复制即发 · 活动窗口 2026-05-14 ~ 05-28
        </p>
      </div>

      {/* Summary stats */}
      <div className="grid grid-cols-4 gap-3 mb-6">
        <div className="rounded-xl p-4" style={{ background: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
          <div className="text-[11px]" style={{ color: 'rgba(0,0,0,0.48)' }}>图片总数</div>
          <div className="text-2xl font-semibold mt-1" style={{ color: '#1d1d1f' }}>{promoVisuals.length}</div>
        </div>
        <div className="rounded-xl p-4" style={{ background: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
          <div className="text-[11px]" style={{ color: 'rgba(0,0,0,0.48)' }}>平台文案总数</div>
          <div className="text-2xl font-semibold mt-1" style={{ color: '#1d1d1f' }}>{totalPosts}</div>
        </div>
        <div className="rounded-xl p-4" style={{ background: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
          <div className="text-[11px]" style={{ color: 'rgba(0,0,0,0.48)' }}>9.5⭐⭐ 高潜力图</div>
          <div className="text-2xl font-semibold mt-1" style={{ color: '#f59e0b' }}>
            {promoVisuals.filter((v) => v.stars >= 2).length}
          </div>
        </div>
        <div className="rounded-xl p-4" style={{ background: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
          <div className="text-[11px]" style={{ color: 'rgba(0,0,0,0.48)' }}>覆盖平台数</div>
          <div className="text-2xl font-semibold mt-1" style={{ color: '#1d1d1f' }}>{platformOptions.length - 1}</div>
        </div>
      </div>

      {/* Platform filter */}
      <div className="mb-6">
        <div className="text-sm font-medium mb-2" style={{ color: 'rgba(0,0,0,0.56)' }}>
          按平台筛选：
        </div>
        <div className="flex flex-wrap gap-2">
          {platformOptions.map((p) => {
            const isActive = activePlatform === p;
            return (
              <button
                key={p}
                onClick={() => setActivePlatform(p)}
                className="text-xs px-3 py-1.5 rounded-lg transition"
                style={{
                  background: isActive ? '#0071e3' : '#ffffff',
                  color: isActive ? '#fff' : '#1d1d1f',
                  border: isActive ? 'none' : '1px solid rgba(0,0,0,0.1)',
                  fontWeight: isActive ? 600 : 400,
                  cursor: 'pointer',
                }}
              >
                {p}
              </button>
            );
          })}
        </div>
      </div>

      {/* Schedule banner */}
      <div
        className="rounded-xl p-4 mb-6"
        style={{
          background: 'linear-gradient(135deg, rgba(245,158,11,0.08), rgba(0,113,227,0.05))',
          border: '1px solid rgba(245,158,11,0.2)',
        }}
      >
        <div className="text-sm font-semibold mb-2" style={{ color: '#1d1d1f' }}>
          📅 推荐发布节奏（5/15 - 5/28）
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
          {promoSchedule.map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="font-medium" style={{ color: '#f59e0b', minWidth: '60px' }}>
                {s.date}
              </span>
              <span style={{ color: 'rgba(0,0,0,0.72)' }}>
                {s.theme}（图 {s.imageIds.join(', ')}）
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Visual cards */}
      <div className="space-y-6">
        {filteredVisuals.map((visual) => (
          <div
            key={visual.id}
            className="rounded-xl overflow-hidden"
            style={{ background: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-0">
              {/* Image column */}
              <div
                className="p-4 flex flex-col items-center"
                style={{ background: '#fafafa', borderRight: '1px solid rgba(0,0,0,0.04)' }}
              >
                <img
                  src={`/promo/${visual.filename}`}
                  alt={visual.title}
                  className="rounded-lg cursor-zoom-in transition hover:scale-[1.02]"
                  style={{
                    width: '100%',
                    maxWidth: '260px',
                    height: 'auto',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  }}
                  onClick={() => setZoomImage(visual)}
                />
                <div className="mt-3 text-center w-full">
                  <div className="text-base font-semibold" style={{ color: '#1d1d1f' }}>
                    图 {visual.id} · {visual.title}
                  </div>
                  <div className="text-xs mt-1" style={{ color: 'rgba(0,0,0,0.48)' }}>
                    {visual.version} · {visual.dimensions}
                  </div>
                  <div className="mt-2 flex items-center justify-center gap-1">
                    <span
                      className="text-xs font-semibold"
                      style={{ color: visual.stars >= 2 ? '#f59e0b' : visual.stars === 1 ? '#fb923c' : '#34c759' }}
                    >
                      {visual.score}/10
                    </span>
                    {visual.stars > 0 && <span className="text-xs">{renderStars(visual.stars)}</span>}
                  </div>
                  <div className="text-[11px] mt-2 px-2" style={{ color: 'rgba(0,0,0,0.56)' }}>
                    {visual.description}
                  </div>
                </div>
              </div>

              {/* Posts column */}
              <div className="p-4">
                <div className="text-xs font-medium mb-3" style={{ color: 'rgba(0,0,0,0.56)' }}>
                  {visual.posts.length} 条平台文案 · 主题：{visual.theme}
                </div>
                {visual.posts.map((post, i) => (
                  <PostCard key={i} post={post} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Zoom modal */}
      {zoomImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.85)', cursor: 'zoom-out' }}
          onClick={() => setZoomImage(null)}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <img
              src={`/promo/${zoomImage.filename}`}
              alt={zoomImage.title}
              style={{ maxWidth: '90vw', maxHeight: '90vh', borderRadius: '12px' }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 p-4 text-white text-sm"
              style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.7))', borderRadius: '0 0 12px 12px' }}
            >
              图 {zoomImage.id} · {zoomImage.title} · {zoomImage.dimensions}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PromoVisualsPage;
