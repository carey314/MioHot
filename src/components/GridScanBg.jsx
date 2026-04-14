const GridScanBg = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden" style={{ background: '#f5f5f7' }}>
    {/* 扫描线 */}
    <div
      className="absolute inset-x-0 h-[200px]"
      style={{
        background: 'linear-gradient(180deg, transparent, rgba(0,113,227,0.03), transparent)',
        animation: 'scan 8s linear infinite',
      }}
    />
  </div>
);

export default GridScanBg;
