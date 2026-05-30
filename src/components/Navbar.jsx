function Navbar({ onMenuClick, onQuickAdd }) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/85 px-4 py-4 backdrop-blur-xl md:px-8">
      <div className="flex items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <button onClick={onMenuClick} className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-slate-700 shadow-sm transition hover:bg-slate-50 md:hidden">
            ☰
          </button>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Live workspace</p>
            </div>

            <h2 className="mt-1 truncate text-lg font-bold tracking-tight text-slate-950 md:text-xl">Recruitment Command Center</h2>
          </div>
        </div>

        <div className="hidden flex-1 justify-center px-6 lg:flex">
          <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5">
            <input type="text" placeholder="Search candidates, jobs, interviews..." className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400" />
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button onClick={onQuickAdd} className="hidden rounded-2xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-600 sm:block">
            Quick Add
          </button>

          <button className="relative rounded-2xl border border-slate-200 bg-white px-3 py-2.5 text-slate-700 shadow-sm transition hover:bg-slate-50">
            <span className="text-sm">Bell</span>
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
          </button>

          <div className="hidden items-center gap-3 sm:flex">
            <div className="text-right">
              <p className="text-sm font-semibold text-slate-900">HR Admin</p>
              <p className="text-xs text-slate-500">admin@recruitment.com</p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">A</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
