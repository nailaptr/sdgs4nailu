// src/components/Content/ContentSection.jsx
// =====================================================
// CONTENT SECTION — Placeholder kosong
// Siap diisi konten sesuai kebutuhan tiap halaman
//
// Props:
//   id       : id untuk anchor scroll dari hero (default: "content-section")
//   children : isi konten halaman (opsional, jika sudah ada)
// =====================================================

import React from "react";

export default function ContentSection({ id = "content-section", children }) {
  return (
    <section id={id} className="content-section">

      {children ? (
        // Jika sudah ada konten, tampilkan
        <div>{children}</div>
      ) : (
        // Jika belum ada konten, tampilkan placeholder
        <div className="content-placeholder">
          <svg className="w-12 h-12 text-slate-300 mb-2" fill="none"
            stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586
                 a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p className="font-semibold text-slate-400">Konten Belum Tersedia</p>
          <p className="text-sm text-slate-300 mt-1">
            Isi bagian ini dengan data dan informasi yang ingin ditampilkan.
          </p>
        </div>
      )}

    </section>
  );
}
