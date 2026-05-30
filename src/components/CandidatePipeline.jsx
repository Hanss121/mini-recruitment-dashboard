function CandidatePipeline({ candidates }) {
  const stages = [
    {
      key: "Applied",
      title: "Applied",
      subtitle: "New applicants waiting for review",
      accent: "border-blue-500",
      badge: "bg-blue-50 text-blue-700 border-blue-100",
    },
    {
      key: "Interview",
      title: "Interview",
      subtitle: "Candidates in active conversation",
      accent: "border-violet-500",
      badge: "bg-violet-50 text-violet-700 border-violet-100",
    },
    {
      key: "Hired",
      title: "Hired",
      subtitle: "Accepted candidates and closed wins",
      accent: "border-emerald-500",
      badge: "bg-emerald-50 text-emerald-700 border-emerald-100",
    },
  ];

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Candidate Pipeline</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">Talent movement by hiring stage</h2>
          <p className="mt-1 text-sm text-slate-500">See match quality, recent activity, and candidate readiness at a glance.</p>
        </div>

        <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600">{candidates.length} candidates tracked</div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {stages.map((stage) => {
          const filteredCandidates = candidates.filter((candidate) => candidate.stage === stage.key);

          return (
            <div key={stage.key} className={`rounded-3xl border border-slate-200 border-t-4 ${stage.accent} bg-slate-50/70 p-4`}>
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-bold text-slate-950">{stage.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{stage.subtitle}</p>
                </div>

                <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${stage.badge}`}>{filteredCandidates.length}</span>
              </div>

              <div className="space-y-3">
                {filteredCandidates.length > 0 ? (
                  filteredCandidates.map((candidate) => (
                    <div key={candidate.id} className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                      <div className="flex items-start gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">{getInitials(candidate.name)}</div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                              <h4 className="truncate font-semibold text-slate-950">{candidate.name}</h4>
                              <p className="mt-1 truncate text-sm text-slate-500">{candidate.email}</p>
                            </div>

                            <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">{candidate.matchScore}%</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 rounded-2xl bg-slate-50 px-3 py-3">
                        <p className="text-sm font-semibold text-slate-800">{candidate.position}</p>

                        <p className="mt-1 text-xs text-slate-500">{candidate.lastActivity}</p>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {candidate.skills?.map((skill) => (
                          <span key={skill} className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-600">
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4 flex gap-2">
                        <button className="flex-1 rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-50">View</button>

                        <button className="flex-1 rounded-xl bg-slate-950 px-3 py-2 text-xs font-semibold text-white transition hover:bg-blue-600">Move Stage</button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-5 text-center">
                    <p className="text-sm font-medium text-slate-500">No candidates in this stage</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CandidatePipeline;
