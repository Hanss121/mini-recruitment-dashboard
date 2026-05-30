import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import JobTable from "../components/JobTable";
import JobForm from "../components/JobForm";
import CandidatePipeline from "../components/CandidatePipeline";

import { jobs as initialJobs } from "../data/jobs";
import { candidates } from "../data/candidates";

function Dashboard({ onLogout }) {
  const [jobList, setJobList] = useState(initialJobs);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isJobFormOpen, setIsJobFormOpen] = useState(false);

  const totalJobs = jobList.length;
  const totalCandidates = candidates.length;
  const totalApplications = jobList.reduce((total, job) => total + job.applicants, 0);

  const filteredJobs = jobList.filter((job) => {
    const keyword = searchQuery.toLowerCase();

    const matchSearch = job.title.toLowerCase().includes(keyword) || job.department.toLowerCase().includes(keyword) || job.location.toLowerCase().includes(keyword);

    const matchStatus = selectedStatus === "All" || job.status === selectedStatus;

    return matchSearch && matchStatus;
  });

  const handleAddJob = (newJob) => {
    setJobList([newJob, ...jobList]);
  };

  return (
    <div className="min-h-screen bg-transparent flex">
      <Sidebar onLogout={onLogout} isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="flex-1 flex flex-col min-w-0">
        <Navbar onMenuClick={() => setIsSidebarOpen(true)} onQuickAdd={() => setIsJobFormOpen(true)} />

        <main className="p-4 md:p-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6 overflow-hidden rounded-3xl bg-slate-950 p-6 text-white shadow-xl md:p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">Recruitment Workspace</p>

                  <h1 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">Turn hiring data into clear recruitment decisions.</h1>

                  <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300 md:text-base">Monitor roles, review applicant flow, and track candidate movement from first application to final hire.</p>
                </div>

                <div className="grid grid-cols-2 gap-3 rounded-3xl border border-white/10 bg-white/5 p-4">
                  <div>
                    <p className="text-2xl font-bold">{totalJobs}</p>
                    <p className="text-xs text-slate-400">Open records</p>
                  </div>

                  <div>
                    <p className="text-2xl font-bold">{totalCandidates}</p>
                    <p className="text-xs text-slate-400">Talent tracked</p>
                  </div>
                </div>
              </div>
            </div>

            <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
              <StatCard title="Active positions" value={totalJobs} label="Roles" icon="Job" delta="+3 this week" description="Roles currently stored and ready for applicant tracking." caption="Compared with last hiring cycle" tone="blue" />

              <StatCard
                title="Candidate pool"
                value={totalCandidates}
                label="Talent"
                icon="CV"
                delta="+8 this week"
                description="Candidates currently moving through the recruitment pipeline."
                caption="Includes applied, interview, and hired stages"
                tone="emerald"
              />

              <StatCard
                title="Applications"
                value={totalApplications}
                label="Inbound"
                icon="App"
                delta="+18% growth"
                description="Submitted applications across all available positions."
                caption="Calculated from active job applicant volume"
                tone="violet"
              />
            </section>

            <section className="mt-6 md:mt-8">
              <JobTable jobs={filteredJobs} searchQuery={searchQuery} onSearchChange={setSearchQuery} selectedStatus={selectedStatus} onStatusChange={setSelectedStatus} onOpenJobForm={() => setIsJobFormOpen(true)} />
            </section>

            <section className="mt-6 md:mt-8">
              <CandidatePipeline candidates={candidates} />
            </section>
          </div>
        </main>
      </div>

      {isJobFormOpen && <JobForm onAddJob={handleAddJob} onClose={() => setIsJobFormOpen(false)} />}
    </div>
  );
}

export default Dashboard;
