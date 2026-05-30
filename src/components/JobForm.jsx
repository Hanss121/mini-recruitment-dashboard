import { useState } from "react";

function JobForm({ onAddJob, onClose }) {
  const [formData, setFormData] = useState({
    title: "",
    department: "",
    location: "",
    status: "Open",
    description: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      setError("Job Title wajib diisi");
      return;
    }

    if (!formData.department.trim()) {
      setError("Department wajib diisi");
      return;
    }

    if (!formData.location.trim()) {
      setError("Location wajib diisi");
      return;
    }

    if (!formData.status) {
      setError("Status wajib dipilih");
      return;
    }

    const newJob = {
      id: Date.now(),
      title: formData.title,
      department: formData.department,
      location: formData.location,
      status: formData.status,
      applicants: 0,
      createdAt: new Date().toISOString().split("T")[0],
      description: formData.description,
    };

    onAddJob(newJob);
    setError("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4" onClick={onClose}>
      <div className="w-full max-w-2xl rounded-2xl bg-white shadow-xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between border-b border-gray-200 px-6 py-5">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Add New Job</h3>
            <p className="mt-1 text-sm text-gray-500">Tambahkan lowongan kerja baru ke daftar jobs.</p>
          </div>

          <button type="button" onClick={onClose} className="rounded-lg px-3 py-1 text-xl text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            ×
          </button>
        </div>

        <div className="max-h-[75vh] overflow-y-auto px-6 py-5">
          {error && <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">{error}</div>}

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Job Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Contoh: Frontend Developer"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Department</label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                placeholder="Contoh: Engineering"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Contoh: Jakarta"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Status</label>
              <select name="status" value={formData.status} onChange={handleChange} className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100">
                <option value="Open">Open</option>
                <option value="Closed">Closed</option>
                <option value="Draft">Draft</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="mb-1 block text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Deskripsi pekerjaan..."
                rows="4"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="md:col-span-2 flex flex-col-reverse gap-3 border-t border-gray-200 pt-4 md:flex-row md:justify-end">
              <button type="button" onClick={onClose} className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100">
                Cancel
              </button>

              <button type="submit" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
                Save Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default JobForm;
