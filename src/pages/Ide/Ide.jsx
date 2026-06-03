// src/pages/Ide/Ide.jsx
// =====================================================
// HALAMAN IDE
// Gambar hero: /img/hero/ide.jpg
// =====================================================

import React from "react";
import HeroSection from "../../components/Hero/HeroSection";
import ContentSection from "../../components/Content/ContentSection";
import Footer from "../../components/Footer/Footer";

export default function Ide() {
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
      {/*
        Tambahkan konten halaman Ide di dalam <ContentSection>
      */}
      <ContentSection id="content-ide" />

      {/* ── FOOTER ── */}
      <Footer />

    </div>
  );
}
