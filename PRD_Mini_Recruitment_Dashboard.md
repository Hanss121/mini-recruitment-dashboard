# PRD — Mini Recruitment Dashboard

## 1. Ringkasan Produk

**Mini Recruitment Dashboard** adalah aplikasi web sederhana untuk membantu HR atau admin mengelola lowongan kerja, kandidat, dan status lamaran dalam satu dashboard.

Aplikasi ini memiliki fitur login dummy, dashboard ringkasan data, manajemen job, pencarian/filter job, serta pipeline kandidat berdasarkan status rekrutmen.

## 2. Tujuan Produk

Tujuan utama aplikasi ini adalah:

1. Memudahkan admin melihat ringkasan data recruitment.
2. Memudahkan pengelolaan daftar lowongan kerja.
3. Memudahkan monitoring kandidat berdasarkan tahapan rekrutmen.
4. Menyediakan tampilan dashboard yang clean, modern, dan responsif.
5. Menjadi MVP yang bisa dikembangkan menjadi sistem HR/recruitment yang lebih lengkap.

## 3. Target Pengguna

### Primary User

**HR Admin / Recruiter**

Pengguna yang bertugas mengelola lowongan kerja, kandidat, dan proses lamaran.

### Secondary User

**Hiring Manager**

Pengguna yang ingin melihat progress kandidat dan status rekrutmen.

## 4. Scope Produk

### In Scope

Fitur yang masuk dalam versi MVP:

1. Login page dengan dummy authentication.
2. Dashboard statistik:
   - Total Jobs
   - Total Candidates
   - Total Applications
3. Job Management:
   - List jobs
   - Search jobs
   - Filter status
   - Add new job
4. Candidate Pipeline:
   - Applied
   - Interview
   - Hired
5. UI/UX:
   - Responsive
   - Clean design
   - Modern SaaS style

### Out of Scope

Fitur yang belum masuk MVP:

1. Register user.
2. Real backend authentication.
3. Role permission.
4. Upload CV.
5. Email notification.
6. Integrasi job portal.
7. Edit/delete kandidat.
8. Detail kandidat lengkap.
9. Export report.
10. Real-time collaboration.

## 5. User Flow

### Flow 1 — Login

1. User membuka aplikasi.
2. User masuk ke halaman login.
3. User mengisi email dan password.
4. Sistem melakukan validasi dummy.
5. Jika berhasil, user diarahkan ke dashboard.
6. Jika gagal, sistem menampilkan pesan error.

### Flow 2 — Melihat Dashboard

1. User berhasil login.
2. User melihat statistik utama:
   - Total Jobs
   - Total Candidates
   - Total Applications
3. User dapat mengakses halaman Job Management dan Candidate Pipeline.

### Flow 3 — Mengelola Job

1. User membuka halaman Job Management.
2. User melihat daftar job.
3. User dapat mencari job berdasarkan keyword.
4. User dapat memfilter job berdasarkan status.
5. User dapat menambahkan job baru.
6. Job baru muncul di daftar job.

### Flow 4 — Melihat Candidate Pipeline

1. User membuka bagian Candidate Pipeline.
2. Kandidat ditampilkan berdasarkan status:
   - Applied
   - Interview
   - Hired
3. User dapat melihat jumlah kandidat pada setiap tahap.

## 6. Fitur Detail

## 6.1 Login Page

### Deskripsi

Halaman login digunakan untuk masuk ke aplikasi menggunakan dummy authentication.

### Input

| Field | Type | Required | Keterangan |
|---|---|---:|---|
| Email | Text/Email | Ya | Email user |
| Password | Password | Ya | Password user |

### Dummy Credential

Contoh credential:

```text
Email: admin@recruitment.com
Password: admin123
```

### Validasi

| Kondisi | Response |
|---|---|
| Email kosong | Tampilkan error “Email wajib diisi” |
| Password kosong | Tampilkan error “Password wajib diisi” |
| Email/password salah | Tampilkan error “Email atau password salah” |
| Email/password benar | Redirect ke Dashboard |

### Acceptance Criteria

1. User bisa login menggunakan dummy credential.
2. User tidak bisa masuk jika email/password salah.
3. Form menampilkan error jika input kosong.
4. Setelah login berhasil, user masuk ke dashboard.

## 6.2 Dashboard

### Deskripsi

Dashboard menampilkan ringkasan data recruitment.

### Komponen Dashboard

| Komponen | Deskripsi |
|---|---|
| Total Jobs | Jumlah seluruh lowongan kerja |
| Total Candidates | Jumlah seluruh kandidat |
| Total Applications | Jumlah seluruh lamaran |

### Contoh Data

| Metric | Value |
|---|---:|
| Total Jobs | 12 |
| Total Candidates | 48 |
| Total Applications | 75 |

### Acceptance Criteria

1. Dashboard menampilkan 3 card statistik utama.
2. Data statistik bisa berasal dari dummy data.
3. Tampilan card rapi, modern, dan mudah dibaca.
4. Dashboard responsive di desktop dan mobile.

## 6.3 Job Management

### Deskripsi

Fitur ini digunakan untuk melihat, mencari, memfilter, dan menambahkan lowongan kerja.

### Data Job

| Field | Type | Keterangan |
|---|---|---|
| ID | String/Number | ID job |
| Job Title | String | Nama posisi |
| Department | String | Divisi |
| Location | String | Lokasi kerja |
| Status | String | Open / Closed / Draft |
| Applicants | Number | Jumlah pelamar |
| Created At | Date | Tanggal dibuat |

### Status Job

| Status | Keterangan |
|---|---|
| Open | Lowongan aktif |
| Closed | Lowongan ditutup |
| Draft | Lowongan belum dipublikasikan |

### Fitur List Jobs

User dapat melihat daftar job dalam bentuk table atau card.

Kolom minimal:

| Kolom |
|---|
| Job Title |
| Department |
| Location |
| Status |
| Applicants |
| Created At |

### Fitur Search Jobs

User dapat mencari job berdasarkan:

1. Job title
2. Department
3. Location

### Fitur Filter Status

User dapat memfilter job berdasarkan:

1. All
2. Open
3. Closed
4. Draft

### Fitur Add New Job

User dapat menambahkan job baru melalui form/modal.

### Input Add Job

| Field | Type | Required |
|---|---|---:|
| Job Title | Text | Ya |
| Department | Text | Ya |
| Location | Text | Ya |
| Status | Select | Ya |
| Description | Textarea | Opsional |

### Acceptance Criteria

1. User dapat melihat daftar jobs.
2. User dapat mencari job berdasarkan keyword.
3. User dapat memfilter job berdasarkan status.
4. User dapat menambahkan job baru.
5. Job baru langsung muncul di list setelah disimpan.
6. Form add job wajib melakukan validasi field required.

## 6.4 Candidate Pipeline

### Deskripsi

Candidate Pipeline menampilkan kandidat berdasarkan tahapan rekrutmen.

### Pipeline Stage

| Stage | Keterangan |
|---|---|
| Applied | Kandidat baru melamar |
| Interview | Kandidat masuk tahap interview |
| Hired | Kandidat diterima |

### Data Candidate

| Field | Type | Keterangan |
|---|---|---|
| ID | String/Number | ID kandidat |
| Name | String | Nama kandidat |
| Email | String | Email kandidat |
| Position | String | Posisi yang dilamar |
| Stage | String | Applied / Interview / Hired |
| Applied Date | Date | Tanggal melamar |

### Tampilan Pipeline

Pipeline dapat dibuat dalam bentuk board/kanban sederhana:

```text
Applied        Interview        Hired
---------      -----------      --------
Candidate A    Candidate C      Candidate E
Candidate B    Candidate D
```

### Acceptance Criteria

1. Kandidat ditampilkan berdasarkan stage.
2. Setiap stage menampilkan jumlah kandidat.
3. UI pipeline mudah dibaca.
4. Tampilan tetap responsif di mobile.

## 7. UI/UX Requirement

### Design Style

Aplikasi menggunakan gaya **modern SaaS dashboard**.

Karakteristik UI:

1. Clean layout.
2. Sidebar navigation.
3. Card-based dashboard.
4. Rounded corner.
5. Soft shadow.
6. Consistent spacing.
7. Warna netral dengan satu warna utama.
8. Typography mudah dibaca.

### Layout Utama

Struktur halaman setelah login:

```text
Sidebar
- Dashboard
- Jobs
- Candidates
- Logout

Main Content
- Header
- Statistic Cards
- Job Management
- Candidate Pipeline
```

### Responsive Requirement

| Device | Requirement |
|---|---|
| Desktop | Sidebar tampil penuh |
| Tablet | Layout menyesuaikan ukuran layar |
| Mobile | Sidebar menjadi drawer/menu toggle |
| Mobile | Table dapat berubah menjadi card/list |

## 8. Data Dummy

### Dummy Jobs

```json
[
  {
    "id": 1,
    "title": "Frontend Developer",
    "department": "Engineering",
    "location": "Remote",
    "status": "Open",
    "applicants": 12,
    "createdAt": "2026-05-01"
  },
  {
    "id": 2,
    "title": "Backend Developer",
    "department": "Engineering",
    "location": "Jakarta",
    "status": "Open",
    "applicants": 18,
    "createdAt": "2026-05-03"
  },
  {
    "id": 3,
    "title": "UI/UX Designer",
    "department": "Product",
    "location": "Bandung",
    "status": "Draft",
    "applicants": 5,
    "createdAt": "2026-05-05"
  }
]
```

### Dummy Candidates

```json
[
  {
    "id": 1,
    "name": "Andi Saputra",
    "email": "andi@email.com",
    "position": "Frontend Developer",
    "stage": "Applied",
    "appliedDate": "2026-05-10"
  },
  {
    "id": 2,
    "name": "Siti Aminah",
    "email": "siti@email.com",
    "position": "Backend Developer",
    "stage": "Interview",
    "appliedDate": "2026-05-11"
  },
  {
    "id": 3,
    "name": "Budi Santoso",
    "email": "budi@email.com",
    "position": "UI/UX Designer",
    "stage": "Hired",
    "appliedDate": "2026-05-12"
  }
]
```

## 9. Functional Requirement

| ID | Requirement | Priority |
|---|---|---|
| FR-001 | User dapat login menggunakan dummy credential | High |
| FR-002 | Sistem menampilkan error login jika credential salah | High |
| FR-003 | User dapat melihat total jobs | High |
| FR-004 | User dapat melihat total candidates | High |
| FR-005 | User dapat melihat total applications | High |
| FR-006 | User dapat melihat list jobs | High |
| FR-007 | User dapat mencari jobs | High |
| FR-008 | User dapat filter jobs berdasarkan status | High |
| FR-009 | User dapat menambahkan job baru | High |
| FR-010 | User dapat melihat candidate pipeline | High |
| FR-011 | Aplikasi responsive | High |
| FR-012 | User dapat logout | Medium |

## 10. Non-Functional Requirement

| ID | Requirement | Keterangan |
|---|---|---|
| NFR-001 | Responsive | Aplikasi berjalan baik di desktop, tablet, dan mobile |
| NFR-002 | Performance | Halaman harus terasa ringan dan cepat |
| NFR-003 | Usability | Navigasi mudah dipahami |
| NFR-004 | Maintainability | Struktur kode rapi dan mudah dikembangkan |
| NFR-005 | Accessibility | Warna dan teks cukup kontras |
| NFR-006 | Scalability | Struktur data bisa dikembangkan ke backend nanti |

## 11. Suggested Page Structure

```text
/pages
  /login
  /dashboard
  /jobs
  /candidates
```

Atau jika menggunakan React:

```text
/src
  /components
    Sidebar.jsx
    Navbar.jsx
    StatCard.jsx
    JobTable.jsx
    JobForm.jsx
    CandidatePipeline.jsx
  /pages
    Login.jsx
    Dashboard.jsx
  /data
    jobs.js
    candidates.js
  App.jsx
```

## 12. Suggested Tech Stack

Untuk MVP sederhana:

| Bagian | Teknologi |
|---|---|
| Frontend | React / Next.js |
| Styling | Tailwind CSS |
| State | useState / Context API |
| Data | Dummy JSON |
| Auth | Dummy Auth |
| Deployment | Vercel / Netlify |

## 13. Success Metrics

Produk dianggap berhasil jika:

1. User bisa login dan masuk dashboard.
2. User bisa melihat statistik recruitment.
3. User bisa melihat, mencari, memfilter, dan menambahkan job.
4. User bisa melihat kandidat berdasarkan pipeline.
5. Tampilan aplikasi nyaman digunakan di desktop dan mobile.
6. Tidak ada error utama pada flow MVP.

## 14. MVP Deliverables

Output akhir aplikasi minimal harus memiliki:

1. Halaman Login.
2. Dashboard utama.
3. Statistik recruitment.
4. Job list.
5. Search dan filter job.
6. Form tambah job.
7. Candidate pipeline.
8. Responsive layout.
9. Dummy data.
10. Clean modern UI.

## 15. Future Improvement

Fitur lanjutan yang bisa ditambahkan setelah MVP:

1. Real authentication.
2. Backend API.
3. Database.
4. Edit dan delete job.
5. Detail job.
6. Detail kandidat.
7. Drag and drop candidate pipeline.
8. Upload CV.
9. Notes untuk kandidat.
10. Interview schedule.
11. Email notification.
12. Export data ke Excel/PDF.
13. Role-based access control.
14. Analytics recruitment.
