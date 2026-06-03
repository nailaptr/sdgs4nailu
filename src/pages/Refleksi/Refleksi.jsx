// src/pages/Refleksi/Refleksi.jsx
// =====================================================
// HALAMAN REFLEKSI
// Gambar hero: /img/hero/refleksi.jpg
// =====================================================

import React from "react";
import HeroSection from "../../components/Hero/HeroSection";
import ContentSection from "../../components/Content/ContentSection";
import Footer from "../../components/Footer/Footer";

export default function Refleksi() {
  return (
    <div className="page-wrapper flex flex-col min-h-screen">

      {/* ── HERO SECTION ── */}
      <HeroSection
        imagePath="/img/hero/refleksi.jpg"
        tagline="Refleksi"
        description="Memetik pelajaran dari setiap tahap perjalanan untuk terus berkembang dalam mewujudkan pendidikan berkualitas bagi semua."
        contentId="content-refleksi"
      />

      {/* ── CONTENT SECTION ── */}
      {/*
        Tambahkan konten Refleksi di dalam <ContentSection>
      */}
      <ContentSection id="content-refleksi" />

      {/* ── FOOTER ── */}
      <Footer />

    </div>
  );
}
