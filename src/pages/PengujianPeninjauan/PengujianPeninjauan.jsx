// src/pages/PengujianPeninjauan/PengujianPeninjauan.jsx
// =====================================================
// HALAMAN PENGUJIAN & PENINJAUAN
// Gambar hero: /img/hero/pengujian-peninjauan.jpg
// =====================================================

import React from "react";
import HeroSection from "../../components/Hero/HeroSection";
import ContentSection from "../../components/Content/ContentSection";
import Footer from "../../components/Footer/Footer";

export default function PengujianPeninjauan() {
  return (
    <div className="page-wrapper flex flex-col min-h-screen">

      {/* ── HERO SECTION ── */}
      <HeroSection
        imagePath="/img/hero/pengujian-peninjauan.jpg"
        tagline="Pengujian & Peninjauan"
        description="Mengevaluasi solusi yang telah dibuat secara kritis dan sistematis untuk memastikan dampak positif bagi pendidikan Indonesia."
        contentId="content-pengujian"
      />

      {/* ── CONTENT SECTION ── */}
      {/*
        Tambahkan konten Pengujian & Peninjauan di dalam <ContentSection>
      */}
      <ContentSection id="content-pengujian" />

      {/* ── FOOTER ── */}
      <Footer />

    </div>
  );
}
