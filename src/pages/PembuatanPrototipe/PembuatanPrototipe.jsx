// src/pages/PembuatanPrototipe/PembuatanPrototipe.jsx
// =====================================================
// HALAMAN PEMBUATAN PROTOTIPE
// Gambar hero: /img/hero/pembuatan-prototipe.jpg
// =====================================================

import React from "react";
import HeroSection from "../../components/Hero/HeroSection";
import ContentSection from "../../components/Content/ContentSection";
import Footer from "../../components/Footer/Footer";

export default function PembuatanPrototipe() {
  return (
    <div className="page-wrapper flex flex-col min-h-screen">

      {/* ── HERO SECTION ── */}
      <HeroSection
        imagePath="/img/hero/pembuatan-prototipe.jpg"
        tagline="Pembuatan Prototipe"
        description="Mewujudkan ide-ide terbaik menjadi solusi nyata melalui proses perancangan dan pembuatan prototipe yang terstruktur."
        contentId="content-prototipe"
      />

      {/* ── CONTENT SECTION ── */}
      {/*
        Tambahkan konten Pembuatan Prototipe di dalam <ContentSection>
      */}
      <ContentSection id="content-prototipe" />

      {/* ── FOOTER ── */}
      <Footer />

    </div>
  );
}
