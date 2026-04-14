import { Routes, Route } from 'react-router-dom';
import GridScanBg from './components/GridScanBg';
import Sidebar from './components/Sidebar';
import DashboardPage from './pages/DashboardPage';
import CalendarPage from './pages/CalendarPage';
import CopywritingPage from './pages/CopywritingPage';
import StrategyPage from './pages/StrategyPage';
import ExecutionPage from './pages/ExecutionPage';
import TrackingPage from './pages/TrackingPage';
import KolPage from './pages/KolPage';
import ChangelogPage from './pages/ChangelogPage';

function App() {
  return (
    <div className="min-h-screen">
      <GridScanBg />
      <Sidebar />
      <main className="ml-[220px] p-6 min-h-screen">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/copywriting" element={<CopywritingPage />} />
          <Route path="/strategy" element={<StrategyPage />} />
          <Route path="/execution" element={<ExecutionPage />} />
          <Route path="/tracking" element={<TrackingPage />} />
          <Route path="/kol" element={<KolPage />} />
          <Route path="/changelog" element={<ChangelogPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
