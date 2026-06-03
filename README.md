# 📁 Blueprint Struktur Project
## SDGs 4 – Pendidikan Berkualitas
**Oleh:** Naila Putri Fatihah (1313623058)

---

## 🗂️ Struktur Folder Lengkap

```
sdgs4-web/
│
├── public/                         ← File statis (langsung diakses browser)
│   ├── index.html                  ← Entry HTML utama
│   └── img/                        ← Semua aset gambar
│       ├── logo-sdgs.png           ← Logo SDGs untuk header
│       ├── hero/                   ← Gambar hero tiap halaman (full screen)
│       │   ├── dashboard.jpg
│       │   ├── empati-penelitian.jpg
│       │   ├── ide.jpg
│       │   ├── pembuatan-prototipe.jpg
│       │   ├── pengujian-peninjauan.jpg
│       │   └── refleksi.jpg
│       └── content/                ← Gambar untuk isi konten tiap halaman
│           ├── dashboard/          ← Gambar konten halaman Dashboard
│           ├── empati-penelitian/  ← Gambar konten halaman Empati & Penelitian
│           ├── ide/                ← Gambar konten halaman Ide
│           ├── pembuatan-prototipe/
│           ├── pengujian-peninjauan/
│           └── refleksi/
│
├── src/                            ← Source code React
│   │
│   ├── index.js                    ← Entry point React (render <App />)
│   ├── App.jsx                     ← Router utama, render semua halaman
│   │
│   ├── styles/
│   │   └── global.css              ← Global CSS: Tailwind + custom styles
│   │
│   ├── components/                 ← Komponen yang dipakai ulang di semua halaman
│   │   ├── Header/
│   │   │   └── Header.jsx          ← Header fixed (logo, judul, nav)
│   │   ├── Footer/
│   │   │   └── Footer.jsx          ← Footer (copyright)
│   │   ├── Hero/
│   │   │   └── HeroSection.jsx     ← Hero full screen (image + teks + CTA)
│   │   └── Content/
│   │       └── ContentSection.jsx  ← Placeholder konten (siap diisi)
│   │
│   └── pages/                      ← Halaman-halaman utama
│       ├── Dashboard/
│       │   └── Dashboard.jsx       ← Halaman utama / home
│       ├── EmpatiPenelitian/
│       │   └── EmpatiPenelitian.jsx
│       ├── Ide/
│       │   └── Ide.jsx
│       ├── PembuatanPrototipe/
│       │   └── PembuatanPrototipe.jsx
│       ├── PengujianPeninjauan/
│       │   └── PengujianPeninjauan.jsx
│       └── Refleksi/
│           └── Refleksi.jsx
│
├── package.json                    ← Dependencies React, Tailwind
├── tailwind.config.js              ← Konfigurasi Tailwind (warna, font)
└── postcss.config.js               ← PostCSS untuk Tailwind
```

---

## 🎨 Anatomi Tiap Halaman

Setiap halaman memiliki **4 section** yang sama:

```
┌─────────────────────────────────┐
│  HEADER (fixed, z-50)           │  ← Selalu tampil di atas
│  Navy dark #0f2744              │
├─────────────────────────────────┤
│  HERO SECTION (100vh)           │  ← Gambar full screen
│  + overlay gelap                │
│  + Tagline (H1)                 │
│  + Description (H4)             │
│  + Link "Lihat Selengkapnya"    │
├─────────────────────────────────┤
│  CONTENT SECTION                │  ← Placeholder kosong
│  (siap diisi konten)            │     ← TAMBAHKAN DATA DI SINI
├─────────────────────────────────┤
│  FOOTER                         │  ← Copyright
│  Navy dark #0f2744              │
└─────────────────────────────────┘
```

---

## 🛣️ Routing (URL tiap halaman)

| Halaman               | URL Path                  |
|-----------------------|---------------------------|
| Dashboard (Utama)     | `/`                       |
| Empati & Penelitian   | `/empati-penelitian`      |
| Ide                   | `/ide`                    |
| Pembuatan Prototipe   | `/pembuatan-prototipe`    |
| Pengujian & Peninjauan| `/pengujian-peninjauan`   |
| Refleksi              | `/refleksi`               |

---

## 🖼️ Panduan Gambar

### Hero Images (`public/img/hero/`)
- Format: `.jpg` atau `.webp` (disarankan)
- Ukuran ideal: **1920×1080px** atau lebih besar
- Gambar akan di-crop otomatis `cover` di tengah
- Overlay gelap sudah diterapkan otomatis

| File                                 | Digunakan di           |
|--------------------------------------|------------------------|
| `hero/dashboard.jpg`                 | Dashboard              |
| `hero/empati-penelitian.jpg`         | Empati & Penelitian    |
| `hero/ide.jpg`                       | Ide                    |
| `hero/pembuatan-prototipe.jpg`       | Pembuatan Prototipe    |
| `hero/pengujian-peninjauan.jpg`      | Pengujian & Peninjauan |
| `hero/refleksi.jpg`                  | Refleksi               |

### Content Images (`public/img/content/`)
- Letakkan di subfolder sesuai nama halaman
- Akses via: `/img/content/dashboard/nama-gambar.jpg`

---

## ✏️ Cara Mengisi Konten

Buka file halaman yang diinginkan, lalu isi `<ContentSection>` dengan konten:

```jsx
// Sebelum (kosong):
<ContentSection id="content-dashboard" />

// Sesudah (diisi):
<ContentSection id="content-dashboard">
  <h2 className="text-2xl font-bold mb-4">Judul Konten</h2>
  <p className="text-gray-700 leading-relaxed">
    Isi paragraf kamu di sini...
  </p>
  <img src="/img/content/dashboard/foto1.jpg" alt="..." />
</ContentSection>
```

---

## 🚀 Cara Menjalankan

```bash
# 1. Install dependencies
npm install

# 2. Jalankan di local
npm start
# → Buka http://localhost:3000

# 3. Build untuk production
npm run build
```

---

## 🎨 Warna Utama

| Nama        | Hex       | Digunakan di              |
|-------------|-----------|---------------------------|
| Navy Dark   | `#0f2744` | Header, Footer background |
| Navy        | `#1a3a5c` | Hero overlay              |
| Navy Light  | `#2a5082` | Aksen                     |
| Putih       | `#ffffff` | Background halaman        |
