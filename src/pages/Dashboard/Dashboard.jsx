// src/pages/Dashboard/Dashboard.jsx
// =====================================================
// HALAMAN DASHBOARD (Utama)
// Gambar hero: /img/hero/dashboard.jpg
// =====================================================

import React from "react";
import HeroSection from "../../components/Hero/HeroSection";
import Footer from "../../components/Footer/Footer";

// Import komponen Dashboard
import SDGsIntroSection from "../../components/Dashboard/SDGsIntroSection";
import SDGsGoalsSection from "../../components/Dashboard/SDGsGoalsSection";

export default function Dashboard() {
  return (
    <div className="page-wrapper flex flex-col min-h-screen">

      {/* ── HEADER (fixed, di-render di App.jsx) ── */}

      {/* ── HERO SECTION ── */}
      <HeroSection
        imagePath="/img/hero/dashboard.jpg"
        tagline="Transformasi Pendidikan Indonesia Melalui Data dan Aksi Nyata."
        description="Memantau perkembangan SDG 4 secara transparan untuk memastikan standar kualitas pendidikan yang berkelanjutan."
        contentId="content-dashboard"
      />

      {/* ── SDGs INTRO SECTION ── */}
      <SDGsIntroSection id="content-dashboard" />

      {/* ── SDGs GOALS SECTION ── */}
      <SDGsGoalsSection />

      {/* ── FOOTER ── */}
      <Footer />

    </div>
  );
}
