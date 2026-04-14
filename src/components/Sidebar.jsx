import { NavLink } from 'react-router-dom';

const navItems = [
  { path: '/', icon: '🏠', label: 'Dashboard', end: true },
  { path: '/calendar', icon: '📅', label: '内容日历' },
  { path: '/copywriting', icon: '📝', label: '文案库' },
  { path: '/strategy', icon: '📊', label: '平台策略' },
  { path: '/execution', icon: '🎯', label: '执行计划' },
  { path: '/tracking', icon: '📈', label: '数据追踪' },
  { path: '/kol', icon: '🤝', label: 'KOL合作' },
];

const Sidebar = () => {
  return (
    <aside
      className="fixed left-0 top-0 bottom-0 w-[220px] flex flex-col py-6 px-3 z-50"
      style={{
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'saturate(180%) blur(20px)',
        WebkitBackdropFilter: 'saturate(180%) blur(20px)',
        borderRight: '1px solid rgba(0,0,0,0.08)',
      }}
    >
      {/* Logo */}
      <div className="px-3 mb-8">
        <h1
          className="text-xl font-semibold m-0"
          style={{ letterSpacing: '-0.28px', lineHeight: '1.14', color: '#1d1d1f' }}
        >
          运营工作台
        </h1>
        <p className="text-xs mt-1" style={{ color: 'rgba(0,0,0,0.4)' }}>
          MioIsland & Code Light
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.end || false}
            className={({ isActive }) =>
              `flex items-center gap-3 py-2.5 text-sm transition-all duration-200 no-underline${isActive ? ' sidebar-active' : ''}`
            }
            style={({ isActive }) =>
              isActive
                ? {
                    background: '#0071e3',
                    color: '#ffffff',
                    fontWeight: 600,
                    borderRadius: '8px',
                    paddingLeft: '12px',
                    paddingRight: '12px',
                    boxShadow: '0 2px 8px rgba(0, 113, 227, 0.35)',
                    borderLeft: '3px solid #ffffff',
                  }
                : {
                    color: '#1d1d1f',
                    paddingLeft: '15px',
                    paddingRight: '12px',
                    borderRadius: '8px',
                  }
            }
            onMouseEnter={(e) => {
              if (!e.currentTarget.classList.contains('sidebar-active')) {
                e.currentTarget.style.background = '#f0f0f5';
              }
            }}
            onMouseLeave={(e) => {
              if (!e.currentTarget.classList.contains('sidebar-active')) {
                e.currentTarget.style.background = 'transparent';
              }
            }}
          >
            {({ isActive }) => (
              <>
                <span className="text-lg" style={{ filter: isActive ? 'brightness(1.15)' : 'none' }}>{item.icon}</span>
                <span style={{ fontSize: '14px', letterSpacing: '-0.224px', fontWeight: isActive ? 600 : 400 }}>{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-3 pt-4" style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
        <p className="text-[11px] leading-relaxed" style={{ color: 'rgba(0,0,0,0.36)' }}>
          v1.0 · 数据存 localStorage
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
