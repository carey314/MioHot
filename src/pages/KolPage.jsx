import { useState, useEffect, useCallback } from 'react';
import { kolTemplates, phChecklist } from '../data/data';

const KolPage = () => {
  const [copiedTemplate, setCopiedTemplate] = useState(null);
  const [kolList, setKolList] = useState([]);
  const [phItems, setPhItems] = useState(phChecklist);
  const [showAddKol, setShowAddKol] = useState(false);
  const [newKol, setNewKol] = useState({ name: '', platform: '', status: '待联系', notes: '' });

  useEffect(() => {
    const savedKol = localStorage.getItem('ops-kol-list');
    if (savedKol) setKolList(JSON.parse(savedKol));
    const savedPh = localStorage.getItem('ops-ph-checklist');
    if (savedPh) {
      setPhItems(JSON.parse(savedPh));
    } else {
      // Persist default checklist so toggle states are not lost
      localStorage.setItem('ops-ph-checklist', JSON.stringify(phChecklist));
    }
  }, []);

  const saveKol = useCallback((data) => {
    setKolList(data);
    localStorage.setItem('ops-kol-list', JSON.stringify(data));
  }, []);

  const savePh = useCallback((data) => {
    setPhItems(data);
    localStorage.setItem('ops-ph-checklist', JSON.stringify(data));
  }, []);

  const copyTemplate = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedTemplate(key);
    setTimeout(() => setCopiedTemplate(null), 2000);
  };

  const addKol = () => {
    if (!newKol.name) return;
    const kol = { ...newKol, id: Date.now() };
    saveKol([...kolList, kol]);
    setNewKol({ name: '', platform: '', status: '待联系', notes: '' });
    setShowAddKol(false);
  };

  const updateKolStatus = (id, status) => {
    const next = kolList.map((k) => (k.id === id ? { ...k, status } : k));
    saveKol(next);
  };

  const removeKol = (id) => {
    saveKol(kolList.filter((k) => k.id !== id));
  };

  const togglePhItem = (id) => {
    const next = phItems.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    );
    savePh(next);
  };

  const phDone = phItems.filter((i) => i.done).length;
  const phTotal = phItems.length;

  const statusColors = {
    '待联系': { bg: '#f5f5f7', text: 'rgba(0,0,0,0.56)' },
    '已联系': { bg: '#e8f4fd', text: '#0071e3' },
    '进行中': { bg: '#fff3e0', text: '#ff9500' },
    '已完成': { bg: '#e8f5e9', text: '#34c759' },
    '已拒绝': { bg: '#fff0f0', text: '#ff3b30' },
  };

  return (
    <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
      {/* Header */}
      <div className="mb-6">
        <h1
          className="text-2xl font-semibold m-0"
          style={{ letterSpacing: '-0.28px', lineHeight: '1.1', color: '#1d1d1f' }}
        >
          KOL 合作
        </h1>
        <p className="text-sm mt-1" style={{ color: 'rgba(0,0,0,0.56)' }}>
          合作模板 & 追踪管理
        </p>
      </div>

      {/* Templates */}
      <div className="grid grid-cols-2 gap-5 mb-8">
        {[
          { key: 'zh', label: '中文模板', content: kolTemplates.zh },
          { key: 'en', label: '英文模板', content: kolTemplates.en },
        ].map(({ key, label, content }) => (
          <div
            key={key}
            className="rounded-lg p-5 transition-all"
            style={{ background: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', borderRadius: '8px' }}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium m-0" style={{ color: '#1d1d1f' }}>{label}</h3>
              <button
                onClick={() => copyTemplate(content, key)}
                className="px-3 py-1 text-xs cursor-pointer transition-all"
                style={{
                  background: copiedTemplate === key ? 'rgba(52,199,89,0.1)' : 'transparent',
                  color: copiedTemplate === key ? '#34c759' : '#0071e3',
                  border: 'none',
                  borderRadius: '8px',
                }}
              >
                {copiedTemplate === key ? '已复制 ✓' : '复制'}
              </button>
            </div>
            <pre
              className="text-xs leading-relaxed whitespace-pre-wrap m-0 font-sans max-h-[300px] overflow-auto"
              style={{ color: 'rgba(0,0,0,0.56)', letterSpacing: '-0.12px', background: '#f5f5f7', padding: '12px', borderRadius: '8px' }}
            >
              {content}
            </pre>
          </div>
        ))}
      </div>

      {/* KOL Tracking */}
      <div
        className="rounded-lg p-5 mb-8"
        style={{ background: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', borderRadius: '8px' }}
      >
        <div className="flex items-center justify-between mb-4">
          <h3
            className="text-base font-semibold m-0"
            style={{ letterSpacing: '-0.28px', color: '#1d1d1f' }}
          >
            KOL 合作追踪
          </h3>
          <button
            onClick={() => setShowAddKol(true)}
            className="px-3 py-1.5 text-xs cursor-pointer transition-all"
            style={{
              background: '#0071e3',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
            }}
          >
            + 添加 KOL
          </button>
        </div>

        {kolList.length === 0 ? (
          <div className="text-center py-8 text-sm" style={{ color: 'rgba(0,0,0,0.36)' }}>
            还没有 KOL 合作记录，点击上方按钮添加
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {kolList.map((kol) => {
              const sc = statusColors[kol.status] || statusColors['待联系'];
              return (
                <div
                  key={kol.id}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 transition-colors"
                  style={{ background: '#f5f5f7' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#eee'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#f5f5f7'; }}
                >
                  <div className="flex-1">
                    <span className="text-sm font-medium" style={{ color: '#1d1d1f' }}>{kol.name}</span>
                    {kol.platform && (
                      <span className="text-xs ml-2" style={{ color: 'rgba(0,0,0,0.56)' }}>
                        @{kol.platform}
                      </span>
                    )}
                    {kol.notes && (
                      <p className="text-xs mt-0.5 m-0" style={{ color: 'rgba(0,0,0,0.36)' }}>
                        {kol.notes}
                      </p>
                    )}
                  </div>
                  <select
                    value={kol.status}
                    onChange={(e) => updateKolStatus(kol.id, e.target.value)}
                    className="rounded-md px-2 py-1 text-xs cursor-pointer"
                    style={{
                      background: sc.bg,
                      color: sc.text,
                      border: 'none',
                      outline: 'none',
                      borderRadius: '8px',
                    }}
                  >
                    {Object.keys(statusColors).map((s) => (
                      <option key={s} value={s} style={{ background: '#ffffff', color: '#1d1d1f' }}>
                        {s}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={() => removeKol(kol.id)}
                    className="hover:opacity-80 transition-opacity cursor-pointer text-xs"
                    style={{ background: 'none', border: 'none', color: '#ff3b30' }}
                  >
                    ✕
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {/* Add KOL Modal */}
        {showAddKol && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{ background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(8px)' }}
            onClick={() => setShowAddKol(false)}
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
                添加 KOL
              </h3>
              <div className="flex flex-col gap-3">
                <input
                  value={newKol.name}
                  onChange={(e) => setNewKol({ ...newKol, name: e.target.value })}
                  placeholder="KOL 名称"
                  className="px-3 py-2 text-sm"
                  style={{
                    background: '#f5f5f7',
                    border: '1px solid rgba(0,0,0,0.1)',
                    borderRadius: '11px',
                    outline: 'none',
                    color: '#1d1d1f',
                  }}
                />
                <input
                  value={newKol.platform}
                  onChange={(e) => setNewKol({ ...newKol, platform: e.target.value })}
                  placeholder="平台（如 Twitter / 小红书）"
                  className="px-3 py-2 text-sm"
                  style={{
                    background: '#f5f5f7',
                    border: '1px solid rgba(0,0,0,0.1)',
                    borderRadius: '11px',
                    outline: 'none',
                    color: '#1d1d1f',
                  }}
                />
                <input
                  value={newKol.notes}
                  onChange={(e) => setNewKol({ ...newKol, notes: e.target.value })}
                  placeholder="备注"
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
                    onClick={addKol}
                    className="flex-1 py-2 text-sm font-medium text-white cursor-pointer"
                    style={{
                      background: '#0071e3',
                      border: 'none',
                      borderRadius: '8px',
                    }}
                  >
                    添加
                  </button>
                  <button
                    onClick={() => setShowAddKol(false)}
                    className="flex-1 py-2 text-sm cursor-pointer"
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

      {/* Product Hunt Checklist */}
      <div
        className="rounded-lg p-5"
        style={{ background: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', borderRadius: '8px' }}
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3
              className="text-base font-semibold m-0"
              style={{ letterSpacing: '-0.28px', color: '#1d1d1f' }}
            >
              Product Hunt Launch Checklist
            </h3>
            <span className="text-xs" style={{ color: 'rgba(0,0,0,0.56)' }}>
              {phDone}/{phTotal} 已完成
            </span>
          </div>
          <div className="w-32 h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(0,0,0,0.06)' }}>
            <div
              className="h-full rounded-full"
              style={{
                width: `${phTotal > 0 ? Math.round((phDone / phTotal) * 100) : 0}%`,
                background: '#0071e3',
              }}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          {phItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all group"
              style={{
                background: item.done ? 'rgba(52,199,89,0.06)' : 'transparent',
              }}
              onClick={() => togglePhItem(item.id)}
            >
              <div
                className="w-4 h-4 rounded shrink-0 flex items-center justify-center"
                style={{
                  background: item.done ? '#0071e3' : '#ffffff',
                  border: item.done ? 'none' : '1px solid rgba(0,0,0,0.15)',
                }}
              >
                {item.done && <span className="text-[10px] text-white">✓</span>}
              </div>
              <span
                className={`text-sm ${item.done ? 'line-through' : ''}`}
                style={{ color: item.done ? 'rgba(0,0,0,0.36)' : 'rgba(0,0,0,0.56)' }}
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KolPage;
