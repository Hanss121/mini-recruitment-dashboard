function StatCard({ title, value, description, tone = "blue", label, delta, caption, icon }) {
  const toneStyles = {
    blue: {
      line: "bg-blue-500",
      soft: "bg-blue-50 text-blue-700 border-blue-100",
      glow: "from-blue-500/12 to-blue-500/0",
      bar: "bg-blue-500",
    },
    emerald: {
      line: "bg-emerald-500",
      soft: "bg-emerald-50 text-emerald-700 border-emerald-100",
      glow: "from-emerald-500/12 to-emerald-500/0",
      bar: "bg-emerald-500",
    },
    violet: {
      line: "bg-violet-500",
      soft: "bg-violet-50 text-violet-700 border-violet-100",
      glow: "from-violet-500/12 to-violet-500/0",
      bar: "bg-violet-500",
    },
  };

  const selectedTone = toneStyles[tone] || toneStyles.blue;
  const chartBars = [34, 52, 44, 68, 58, 82, 74];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className={`absolute inset-x-0 top-0 h-1 ${selectedTone.line}`} />

      <div className={`absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-gradient-to-br ${selectedTone.glow}`} />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border text-lg ${selectedTone.soft}`}>{icon}</div>

            <div>
              <p className="text-sm font-medium text-slate-500">{title}</p>
              <h3 className="mt-2 text-4xl font-bold tracking-tight text-slate-950">{value}</h3>
            </div>
          </div>

          {label && <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${selectedTone.soft}`}>{label}</span>}
        </div>

        <div className="mt-5 flex items-end justify-between gap-4">
          <div>
            {delta && <p className="text-sm font-semibold text-emerald-600">{delta}</p>}
            <p className="mt-1 text-sm leading-6 text-slate-500">{description}</p>
            {caption && <p className="mt-2 text-xs text-slate-400">{caption}</p>}
          </div>

          <div className="flex h-14 items-end gap-1.5">
            {chartBars.map((height, index) => (
              <div key={index} className="w-1.5 overflow-hidden rounded-full bg-slate-100" style={{ height: `${height}%` }}>
                <div className={`h-full w-full rounded-full ${selectedTone.bar}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatCard;
