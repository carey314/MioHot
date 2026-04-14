import { useState, useEffect, useCallback } from 'react';
import { executionPlan } from '../data/data';

const phaseKeys = ['A', 'B', 'C'];

const ExecutionPage = () => {
  const [activePhase, setActivePhase] = useState('A');
  const [taskStates, setTaskStates] = useState({});
  const [expandedWeeks, setExpandedWeeks] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem('ops-tasks');
    if (saved) setTaskStates(JSON.parse(saved));
    // Expand first week by default
    setExpandedWeeks({ 1: true });
  }, []);

  const save = useCallback((data) => {
    setTaskStates(data);
    localStorage.setItem('ops-tasks', JSON.stringify(data));
  }, []);

  const toggleTask = (taskId) => {
    const next = { ...taskStates, [taskId]: !taskStates[taskId] };
    save(next);
  };

  const toggleWeek = (weekNum) => {
    setExpandedWeeks((prev) => ({ ...prev, [weekNum]: !prev[weekNum] }));
  };

  // Overall progress
  const allTasks = Object.values(executionPlan).flatMap((phase) =>
    phase.weeks.flatMap((w) => w.tasks)
  );
  const completedCount = allTasks.filter((t) => taskStates[t.id]).length;
  const totalCount = allTasks.length;
  const overallProgress = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  // Phase progress
  const getPhaseProgress = (key) => {
    const phaseTasks = executionPlan[key].weeks.flatMap((w) => w.tasks);
    const done = phaseTasks.filter((t) => taskStates[t.id]).length;
    return { done, total: phaseTasks.length, percent: phaseTasks.length > 0 ? Math.round((done / phaseTasks.length) * 100) : 0 };
  };

  return (
    <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
      {/* Header */}
      <div className="mb-6">
        <h1
          className="text-2xl font-semibold m-0"
          style={{ letterSpacing: '-0.28px', lineHeight: '1.1', color: '#1d1d1f' }}
        >
          执行计划
        </h1>
        <p className="text-sm mt-1" style={{ color: 'rgba(0,0,0,0.56)' }}>
          三阶段运营执行
        </p>
      </div>

      {/* Overall Progress */}
      <div
        className="mb-6 p-4 rounded-lg"
        style={{ background: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', borderRadius: '8px' }}
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm" style={{ color: 'rgba(0,0,0,0.56)' }}>整体进度</span>
          <span className="text-sm font-mono" style={{ color: '#0071e3' }}>
            {completedCount}/{totalCount} ({overallProgress}%)
          </span>
        </div>
        <div className="h-3 rounded-full overflow-hidden" style={{ background: 'rgba(0,0,0,0.06)' }}>
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${overallProgress}%`,
              background: '#0071e3',
            }}
          />
        </div>
      </div>

      {/* Phase Tabs */}
      <div className="flex gap-3 mb-6">
        {phaseKeys.map((key) => {
          const phase = executionPlan[key];
          const prog = getPhaseProgress(key);
          return (
            <button
              key={key}
              onClick={() => setActivePhase(key)}
              className="flex-1 rounded-lg p-4 text-left cursor-pointer transition-all"
              style={{
                background: '#ffffff',
                border: activePhase === key ? '2px solid #0071e3' : '1px solid rgba(0,0,0,0.06)',
                boxShadow: activePhase === key ? '0 4px 12px rgba(0,0,0,0.12)' : '0 1px 3px rgba(0,0,0,0.08)',
                borderRadius: '8px',
              }}
            >
              <div className="text-sm font-medium mb-1" style={{ color: '#1d1d1f' }}>{phase.name.split('：')[0]}</div>
              <div className="text-xs mb-2" style={{ color: 'rgba(0,0,0,0.56)' }}>{phase.description}</div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(0,0,0,0.06)' }}>
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${prog.percent}%`,
                      background: '#0071e3',
                    }}
                  />
                </div>
                <span className="text-[10px] font-mono" style={{ color: 'rgba(0,0,0,0.36)' }}>{prog.percent}%</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div
          className="absolute left-6 top-0 bottom-0 w-px"
          style={{ background: 'rgba(0,0,0,0.1)' }}
        />

        {executionPlan[activePhase].weeks.map((week) => {
          const expanded = expandedWeeks[week.week] !== false;
          const weekDone = week.tasks.filter((t) => taskStates[t.id]).length;
          const weekTotal = week.tasks.length;

          return (
            <div key={week.week} className="relative mb-4">
              {/* Timeline dot */}
              <div
                className="absolute left-4 top-4 w-5 h-5 rounded-full z-10 flex items-center justify-center"
                style={{
                  background: weekDone === weekTotal && weekTotal > 0 ? '#34c759' : '#0071e3',
                }}
              >
                <span className="text-[10px] text-white font-bold">{week.week}</span>
              </div>

              {/* Week Card */}
              <div
                className="ml-14 rounded-lg overflow-hidden transition-all"
                style={{ background: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', borderRadius: '8px' }}
              >
                <button
                  onClick={() => toggleWeek(week.week)}
                  className="w-full flex items-center justify-between p-4 cursor-pointer text-left"
                  style={{ background: 'transparent', border: 'none' }}
                >
                  <div>
                    <h3 className="text-sm font-medium m-0" style={{ color: '#1d1d1f' }}>{week.title}</h3>
                    <span className="text-xs" style={{ color: 'rgba(0,0,0,0.56)' }}>
                      {weekDone}/{weekTotal} 已完成
                    </span>
                  </div>
                  <span
                    className="transition-transform"
                    style={{ color: 'rgba(0,0,0,0.36)', transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  >
                    ▼
                  </span>
                </button>

                {expanded && (
                  <div className="px-4 pb-4">
                    {/* P0 tasks */}
                    {week.tasks.filter((t) => t.priority === 'P0').length > 0 && (
                      <div className="mb-3">
                        <div className="flex items-center gap-2 mb-2">
                          <span
                            className="px-1.5 py-0.5 rounded text-[10px] font-bold text-white"
                            style={{ background: '#ff3b30' }}
                          >
                            P0
                          </span>
                          <span className="text-[10px]" style={{ color: 'rgba(0,0,0,0.36)' }}>必须完成</span>
                        </div>
                        {week.tasks
                          .filter((t) => t.priority === 'P0')
                          .map((task) => (
                            <TaskRow
                              key={task.id}
                              task={task}
                              done={!!taskStates[task.id]}
                              onToggle={() => toggleTask(task.id)}
                            />
                          ))}
                      </div>
                    )}
                    {/* P1 tasks */}
                    {week.tasks.filter((t) => t.priority === 'P1').length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span
                            className="px-1.5 py-0.5 rounded text-[10px] font-bold text-white"
                            style={{ background: '#ff9500' }}
                          >
                            P1
                          </span>
                          <span className="text-[10px]" style={{ color: 'rgba(0,0,0,0.36)' }}>尽量完成</span>
                        </div>
                        {week.tasks
                          .filter((t) => t.priority === 'P1')
                          .map((task) => (
                            <TaskRow
                              key={task.id}
                              task={task}
                              done={!!taskStates[task.id]}
                              onToggle={() => toggleTask(task.id)}
                            />
                          ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const TaskRow = ({ task, done, onToggle }) => (
  <div
    className="flex items-center gap-3 px-3 py-2 rounded-lg mb-1 transition-all cursor-pointer group"
    style={{
      background: done ? 'rgba(52,199,89,0.06)' : 'transparent',
    }}
    onClick={onToggle}
  >
    <div
      className="w-4 h-4 rounded shrink-0 flex items-center justify-center transition-all"
      style={{
        background: done ? '#0071e3' : '#ffffff',
        border: done ? 'none' : '1px solid rgba(0,0,0,0.15)',
      }}
    >
      {done && <span className="text-[10px] text-white">✓</span>}
    </div>
    <span
      className={`flex-1 text-sm ${done ? 'line-through' : ''}`}
      style={{ color: done ? 'rgba(0,0,0,0.36)' : 'rgba(0,0,0,0.56)' }}
    >
      {task.text}
    </span>
    <span className="text-xs font-mono" style={{ color: 'rgba(0,0,0,0.36)' }}>{task.time}</span>
  </div>
);

export default ExecutionPage;
