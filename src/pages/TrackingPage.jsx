import { useState, useEffect, useCallback } from 'react';
import { defaultMetrics } from '../data/data';

const TrackingPage = () => {
  const [metrics, setMetrics] = useState(defaultMetrics);
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ week: '', highlights: '', issues: '', plan: '' });

  useEffect(() => {
    const savedMetrics = localStorage.getItem('ops-metrics');
    if (savedMetrics) {
      setMetrics(JSON.parse(savedMetrics));
    } else {
      // Persist default metrics so edits are not lost
      localStorage.setItem('ops-metrics', JSON.stringify(defaultMetrics));
    }
    const savedReviews = localStorage.getItem('ops-reviews');
    if (savedReviews) setReviews(JSON.parse(savedReviews));
  }, []);

  const saveMetrics = useCallback((data) => {
    setMetrics(data);
    localStorage.setItem('ops-metrics', JSON.stringify(data));
  }, []);

  const startEdit = (id, current) => {
    setEditingId(id);
    setEditValue(String(current));
  };

  const finishEdit = (id) => {
    const val = parseInt(editValue) || 0;
    const next = metrics.map((m) => (m.id === id ? { ...m, current: val } : m));
    saveMetrics(next);
    setEditingId(null);
  };

  const addReview = () => {
    if (!newReview.week) return;
    const review = { ...newReview, id: Date.now(), createdAt: new Date().toISOString() };
    const next = [review, ...reviews];
    setReviews(next);
    localStorage.setItem('ops-reviews', JSON.stringify(next));
    setNewReview({ week: '', highlights: '', issues: '', plan: '' });
  };

  return (
    <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
      {/* Header */}
      <div className="mb-6">
        <h1
          className="text-2xl font-semibold m-0"
          style={{ letterSpacing: '-0.28px', lineHeight: '1.1', color: '#1d1d1f' }}
        >
          数据追踪
        </h1>
        <p className="text-sm mt-1" style={{ color: 'rgba(0,0,0,0.56)' }}>
          核心指标监控 & 每周复盘
        </p>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-5 gap-4 mb-8">
        {metrics.map((metric) => {
          const progress = metric.target > 0 ? Math.min(100, Math.round((metric.current / metric.target) * 100)) : 0;
          return (
            <div
              key={metric.id}
              className="rounded-lg p-4 text-center transition-all"
              style={{ background: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', borderRadius: '8px' }}
            >
              <div className="text-3xl mb-2">{metric.icon}</div>
              <div className="text-xs mb-2" style={{ color: 'rgba(0,0,0,0.56)' }}>{metric.label}</div>

              {editingId === metric.id ? (
                <input
                  type="number"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  onBlur={() => finishEdit(metric.id)}
                  onKeyDown={(e) => e.key === 'Enter' && finishEdit(metric.id)}
                  autoFocus
                  className="w-full text-center text-2xl font-bold rounded-lg py-1"
                  style={{
                    background: '#f5f5f7',
                    border: '1px solid #0071e3',
                    color: '#1d1d1f',
                    outline: 'none',
                    borderRadius: '11px',
                  }}
                />
              ) : (
                <div
                  className="text-2xl font-bold cursor-pointer hover:opacity-80 transition-opacity"
                  style={{ color: '#1d1d1f' }}
                  onClick={() => startEdit(metric.id, metric.current)}
                  title="点击编辑"
                >
                  {metric.current.toLocaleString()}
                </div>
              )}

              <div className="text-[10px] mt-1 mb-2" style={{ color: 'rgba(0,0,0,0.36)' }}>
                目标 {metric.target.toLocaleString()}
              </div>

              <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(0,0,0,0.06)' }}>
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${progress}%`,
                    background:
                      progress >= 100
                        ? '#34c759'
                        : '#0071e3',
                  }}
                />
              </div>
              <div className="text-[10px] mt-1" style={{ color: 'rgba(0,0,0,0.36)' }}>{progress}%</div>
            </div>
          );
        })}
      </div>

      {/* Weekly Review Form */}
      <div
        className="rounded-lg p-5 mb-6"
        style={{ background: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', borderRadius: '8px' }}
      >
        <h3
          className="text-base font-semibold mb-4"
          style={{ letterSpacing: '-0.28px', color: '#1d1d1f' }}
        >
          每周复盘
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs block mb-1" style={{ color: 'rgba(0,0,0,0.56)' }}>周数</label>
            <input
              value={newReview.week}
              onChange={(e) => setNewReview({ ...newReview, week: e.target.value })}
              placeholder="例：第 1 周"
              className="w-full px-3 py-2 text-sm"
              style={{
                background: '#f5f5f7',
                border: '1px solid rgba(0,0,0,0.1)',
                borderRadius: '11px',
                outline: 'none',
                color: '#1d1d1f',
              }}
            />
          </div>
          <div>
            <label className="text-xs block mb-1" style={{ color: 'rgba(0,0,0,0.56)' }}>亮点</label>
            <input
              value={newReview.highlights}
              onChange={(e) => setNewReview({ ...newReview, highlights: e.target.value })}
              placeholder="本周做得好的..."
              className="w-full px-3 py-2 text-sm"
              style={{
                background: '#f5f5f7',
                border: '1px solid rgba(0,0,0,0.1)',
                borderRadius: '11px',
                outline: 'none',
                color: '#1d1d1f',
              }}
            />
          </div>
          <div>
            <label className="text-xs block mb-1" style={{ color: 'rgba(0,0,0,0.56)' }}>问题</label>
            <input
              value={newReview.issues}
              onChange={(e) => setNewReview({ ...newReview, issues: e.target.value })}
              placeholder="遇到的问题..."
              className="w-full px-3 py-2 text-sm"
              style={{
                background: '#f5f5f7',
                border: '1px solid rgba(0,0,0,0.1)',
                borderRadius: '11px',
                outline: 'none',
                color: '#1d1d1f',
              }}
            />
          </div>
          <div>
            <label className="text-xs block mb-1" style={{ color: 'rgba(0,0,0,0.56)' }}>下周计划</label>
            <input
              value={newReview.plan}
              onChange={(e) => setNewReview({ ...newReview, plan: e.target.value })}
              placeholder="下周重点..."
              className="w-full px-3 py-2 text-sm"
              style={{
                background: '#f5f5f7',
                border: '1px solid rgba(0,0,0,0.1)',
                borderRadius: '11px',
                outline: 'none',
                color: '#1d1d1f',
              }}
            />
          </div>
        </div>
        <button
          onClick={addReview}
          className="mt-4 px-5 py-2 text-sm font-medium text-white cursor-pointer transition-all hover:opacity-90"
          style={{
            background: '#0071e3',
            border: 'none',
            borderRadius: '8px',
          }}
        >
          保存复盘
        </button>
      </div>

      {/* Review History */}
      {reviews.length > 0 && (
        <div>
          <h3 className="text-sm mb-3" style={{ color: 'rgba(0,0,0,0.56)' }}>复盘记录</h3>
          <div className="flex flex-col gap-3">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="rounded-lg p-4"
                style={{ background: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', borderRadius: '8px' }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium" style={{ color: '#1d1d1f' }}>{review.week}</span>
                  <span className="text-[10px]" style={{ color: 'rgba(0,0,0,0.36)' }}>
                    {new Date(review.createdAt).toLocaleDateString('zh-CN')}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div>
                    <span className="block mb-1" style={{ color: '#34c759' }}>亮点</span>
                    <span style={{ color: 'rgba(0,0,0,0.56)' }}>{review.highlights}</span>
                  </div>
                  <div>
                    <span className="block mb-1" style={{ color: '#ff3b30' }}>问题</span>
                    <span style={{ color: 'rgba(0,0,0,0.56)' }}>{review.issues}</span>
                  </div>
                  <div>
                    <span className="block mb-1" style={{ color: '#0071e3' }}>下周</span>
                    <span style={{ color: 'rgba(0,0,0,0.56)' }}>{review.plan}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TrackingPage;
