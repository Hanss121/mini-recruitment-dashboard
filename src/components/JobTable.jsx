function JobTable({ jobs, searchQuery, onSearchChange, selectedStatus, onStatusChange, onOpenJobForm }) {
  const statusStyles = {
    Open: {
      pill: "bg-emerald-50 text-emerald-700 border-emerald-200",
      dot: "bg-emerald-500",
      label: "Actively hiring",
    },
    Closed: {
      pill: "bg-rose-50 text-rose-700 border-rose-200",
      dot: "bg-rose-500",
      label: "Archived role",
    },
    Draft: {
      pill: "bg-amber-50 text-amber-700 border-amber-200",
      dot: "bg-amber-500",
      label: "Needs review",
    },
  };

  const statusOptions = ["All", "Open", "Closed", "Draft"];

  const getDepartmentInitials = (department) => {
    return department
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-5 py-5 md:px-6">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Job Operations</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">Roles currently moving through hiring</h2>
            <p className="mt-1 text-sm text-slate-500">Review requisitions, monitor applicant volume, and take quick action.</p>
          </div>

          <div className="flex w-full flex-col gap-3 md:flex-row xl:w-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search title, team, location..."
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 md:w-80"
            />

            <select
              value={selectedStatus}
              onChange={(e) => onStatusChange(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 md:w-44"
            >
              {statusOptions.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>

            <button onClick={onOpenJobForm} className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-lg">
              Add Position
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[1080px] text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/80">
              <th className="px-6 py-4 text-left font-semibold text-slate-500">Role</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-500">Team</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-500">Location</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-500">Status</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-500">Applicant Flow</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-500">Created</th>
              <th className="px-6 py-4 text-right font-semibold text-slate-500">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {jobs.length > 0 ? (
              jobs.map((job) => {
                const selectedStatusStyle = statusStyles[job.status] || statusStyles.Draft;

                const progressWidth = Math.min(job.applicants * 5, 100);

                return (
                  <tr key={job.id} className="group transition hover:bg-slate-50">
                    <td className="px-6 py-5">
                      <div>
                        <p className="font-semibold text-slate-950">{job.title}</p>
                        <p className="mt-1 text-xs text-slate-400">Req-{String(job.id).padStart(3, "0")}</p>
                      </div>
                    </td>

                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-xs font-bold text-white">{getDepartmentInitials(job.department)}</div>
                        <div>
                          <p className="font-medium text-slate-800">{job.department}</p>
                          <p className="text-xs text-slate-400">Hiring team</p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-5 text-slate-600">{job.location}</td>

                    <td className="px-6 py-5">
                      <div>
                        <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${selectedStatusStyle.pill}`}>
                          <span className={`h-1.5 w-1.5 rounded-full ${selectedStatusStyle.dot}`} />
                          {job.status}
                        </span>

                        <p className="mt-2 text-xs text-slate-400">{selectedStatusStyle.label}</p>
                      </div>
                    </td>

                    <td className="px-6 py-5">
                      <div className="max-w-48">
                        <div className="flex items-center justify-between gap-3">
                          <span className="font-semibold text-slate-900">{job.applicants} applicants</span>
                          <span className="text-xs text-slate-400">{progressWidth}%</span>
                        </div>

                        <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                          <div className="h-full rounded-full bg-blue-500" style={{ width: `${progressWidth}%` }} />
                        </div>

                        <p className="mt-2 text-xs text-slate-400">{job.applicants >= 15 ? "High applicant volume" : "Healthy early traction"}</p>
                      </div>
                    </td>

                    <td className="px-6 py-5 text-slate-500">{job.createdAt}</td>

                    <td className="px-6 py-5">
                      <div className="flex justify-end gap-2 opacity-100 transition md:opacity-0 md:group-hover:opacity-100">
                        <button className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700">View</button>

                        <button className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:border-amber-200 hover:bg-amber-50 hover:text-amber-700">Edit</button>

                        <button className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-700">Archive</button>
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="7" className="px-6 py-12 text-center">
                  <p className="font-semibold text-slate-800">No roles match your filters</p>
                  <p className="mt-1 text-sm text-slate-500">Try a different keyword or status filter.</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default JobTable;
