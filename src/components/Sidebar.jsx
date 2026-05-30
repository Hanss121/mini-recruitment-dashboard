function Sidebar({ onLogout, isOpen, onClose }) {
  const workspaceMenu = [
    { label: "Overview", meta: "Hiring summary", active: true },
    { label: "Hiring Pipeline", meta: "Stage progress", active: false },
    { label: "Applications", meta: "Inbound talents", active: false },
    { label: "Interviews", meta: "Scheduled sessions", active: false },
    { label: "Talent Pool", meta: "Saved candidates", active: false },
  ];

  const systemMenu = [
    { label: "Reports", meta: "Hiring insights" },
    { label: "Settings", meta: "Workspace config" },
  ];

  const renderMenuItem = (item) => (
    <button
      key={item.label}
      onClick={onClose}
      className={`group w-full rounded-2xl px-4 py-3.5 text-left transition ${item.active ? "bg-white text-slate-950 shadow-lg shadow-black/20" : "text-slate-300 hover:bg-white/10 hover:text-white"}`}
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold">{item.label}</p>
          <p className={`mt-1 text-xs ${item.active ? "text-slate-500" : "text-slate-500"}`}>{item.meta}</p>
        </div>

        {item.active && <span className="h-2 w-2 rounded-full bg-blue-500" />}
      </div>
    </button>
  );

  return (
    <>
      {isOpen && <div className="fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-sm md:hidden" onClick={onClose} />}

      <aside
        className={`
          fixed left-0 top-0 z-50 flex min-h-screen w-72 flex-col bg-slate-950 text-white
          transition-transform duration-300 md:sticky md:top-0 md:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="border-b border-white/10 px-6 py-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500 text-sm font-black tracking-tight shadow-lg shadow-blue-500/20">RF</div>

              <div>
                <h1 className="text-lg font-bold tracking-tight">RecruitFlow</h1>
                <p className="text-sm text-slate-400">Hiring operating system</p>
              </div>
            </div>

            <button onClick={onClose} className="rounded-lg px-2 py-1 text-slate-400 hover:bg-white/10 hover:text-white md:hidden">
              ×
            </button>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-5">
          <div>
            <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">Recruitment</p>
            <div className="space-y-2">{workspaceMenu.map(renderMenuItem)}</div>
          </div>

          <div className="mt-7">
            <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">Workspace</p>
            <div className="space-y-2">{systemMenu.map(renderMenuItem)}</div>
          </div>
        </nav>

        <div className="px-4 pb-5">
          <div className="mb-4 rounded-3xl border border-white/10 bg-white/[0.04] p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-white">Hiring Sprint</p>
              <span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[11px] font-semibold text-emerald-300">Live</span>
            </div>

            <p className="mt-2 text-xs leading-5 text-slate-400">May 2026 recruitment cycle is currently tracking candidates across 3 stages.</p>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[68%] rounded-full bg-blue-500" />
            </div>
          </div>

          <button onClick={onLogout} className="w-full rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-500">
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
