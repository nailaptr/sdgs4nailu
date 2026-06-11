// src/pages/Ide/Ide.jsx
// =====================================================
// HALAMAN IDE
// Gambar hero: /img/hero/ide.jpg
// =====================================================

import React, { useState } from "react";
import HeroSection from "../../components/Hero/HeroSection";
import ContentSection from "../../components/Content/ContentSection";
import Footer from "../../components/Footer/Footer";

// Komponen Modal untuk menampilkan PDF
const PdfModal = ({ isOpen, onClose, title, pdfUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-5xl h-[85vh] flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-slate-200">
          <h3 className="text-xl font-bold text-navy font-heading">{title}</h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 transition-colors p-1"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 bg-slate-100 p-2">
          {pdfUrl ? (
            <iframe
              src={pdfUrl}
              className="w-full h-full rounded border-0"
              title={title}
            >
              Browser Anda tidak mendukung iframe PDF.
            </iframe>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-slate-500 bg-white rounded border border-slate-200">
              <svg className="w-16 h-16 mb-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="font-semibold text-lg">File PDF belum tersedia</p>
              <p className="text-sm mt-2 text-slate-400">File PDF akan diinput manual pada bagian ini nanti.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Ide() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activePdf, setActivePdf] = useState({ title: '', url: '' });

  const openPdf = (title, url) => {
    setActivePdf({ title, url });
    setModalOpen(true);
  };

  return (
    <div className="page-wrapper flex flex-col min-h-screen">

      {/* ── HERO SECTION ── */}
      <HeroSection
        imagePath="/img/hero/ide.jpg"
        tagline="Ide"
        description="Menggali gagasan inovatif untuk menjawab tantangan pendidikan berkualitas yang inklusif dan merata di Indonesia."
        contentId="content-ide"
      />

      {/* ── CONTENT SECTION ── */}
      <ContentSection id="content-ide">
        <div className="max-w-3xl mx-auto py-8">

          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-10 text-center font-heading">
            Gagasan dan Solusi Inovatif
          </h2>

          <div className="mt-4">
            {/* Mindmap Solusi Card */}
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
              <h3 className="text-2xl font-semibold text-navy mb-4 font-heading">
                Mindmap Solusi
              </h3>
              <p className="text-slate-600 mb-8 max-w-lg font-body">
                Jelajahi pemetaan ide dan berbagai alternatif solusi yang kami kembangkan melalui metode Mindmap.
              </p>
              <button
                onClick={() => openPdf("Mindmap Solusi", "/pdf/Ide/Mindmap SDGs 4.png")}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy hover:bg-navy-dark text-white font-semibold rounded-lg transition-colors duration-200 shadow-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Lihat File PDF
              </button>
            </div>
          </div>

        </div>
      </ContentSection>

      {/* ── FOOTER ── */}
      <Footer />

      {/* ── PDF MODAL ── */}
      <PdfModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={activePdf.title}
        pdfUrl={activePdf.url}
      />

    </div>
  );
}
