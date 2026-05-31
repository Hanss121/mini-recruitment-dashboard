# Penjelasan Singkat Project

## Teknologi yang Digunakan

Project **Mini Recruitment Dashboard** dibuat menggunakan:

- **React.js** untuk membangun antarmuka aplikasi.
- **Vite** sebagai build tool agar proses development cepat.
- **Tailwind CSS** untuk styling modern dan responsive.
- **React useState** untuk mengelola state seperti login, search, filter, modal, dan data jobs.
- **Dummy data** dari file JavaScript untuk jobs dan candidates.
- **localStorage** untuk menyimpan status login dummy.

Aplikasi ini belum menggunakan backend dan database karena masih berada pada tahap MVP.

## Struktur Project

```text
src
├── components
│   ├── Sidebar.jsx
│   ├── Navbar.jsx
│   ├── StatCard.jsx
│   ├── JobTable.jsx
│   ├── JobForm.jsx
│   └── CandidatePipeline.jsx
├── pages
│   ├── Login.jsx
│   └── Dashboard.jsx
├── data
│   ├── jobs.js
│   └── candidates.js
├── App.jsx
├── main.jsx
└── index.css
```

## Penilaian

### Problem Solving

Aplikasi membantu HR/Admin melihat ringkasan recruitment, mengelola lowongan kerja, mencari dan memfilter job, menambahkan job baru, serta melihat kandidat berdasarkan pipeline rekrutmen.

### Struktur Kode

Kode dibuat modular dengan memisahkan komponen, halaman, dan data. Struktur ini membuat project lebih rapi, mudah dibaca, dan mudah dikembangkan ke backend di masa depan.

### UI/UX

Tampilan menggunakan gaya modern SaaS dashboard dengan sidebar, statistic card, job table, modal form, dan candidate pipeline. Layout dibuat responsive agar nyaman digunakan di desktop maupun mobile.

### Penggunaan AI Tools

AI tools digunakan untuk membantu menyusun PRD, membuat urutan pengerjaan, memberi referensi kode, memperbaiki UI, debugging, dan membuat dokumentasi project.
