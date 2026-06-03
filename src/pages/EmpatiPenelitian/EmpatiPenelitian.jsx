// src/pages/EmpatiPenelitian/EmpatiPenelitian.jsx
// =====================================================
// HALAMAN EMPATI & PENELITIAN
// Gambar hero: /img/hero/empati-penelitian.jpg
// =====================================================

import React from "react";
import Header from "../../components/Header/Header";
import HeroSection from "../../components/Hero/HeroSection";
import ContentSection from "../../components/Content/ContentSection";
import Footer from "../../components/Footer/Footer";

export default function EmpatiPenelitian() {
  return (
    <div className="page-wrapper flex flex-col min-h-screen">

      {/* ── HERO SECTION ── */}
      <HeroSection
        imagePath="/img/hero/empati-penelitian.jpg"
        tagline="Empati & Penelitian"
        description="Memahami kebutuhan nyata para pemangku kepentingan pendidikan melalui pendekatan riset yang mendalam dan berbasis data."
        contentId="content-empati"
      />

      {/* ── CONTENT SECTION ── */}
      {/*
        Tambahkan konten Empati & Penelitian di dalam <ContentSection>
      */}
      <ContentSection id="content-empati" />

      {/* ── FOOTER ── */}
      <Footer />

    </div>
  );
}
