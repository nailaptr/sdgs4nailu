// src/components/Hero/HeroSection.jsx
// =====================================================
// HERO SECTION — Full screen, responsive
// Props:
//   imagePath  : path gambar background (dari /public)
//   tagline    : teks besar (h1)
//   description: teks deskripsi (h4)
//   contentId  : id elemen content section (untuk scroll anchor)
// =====================================================

import React from "react";

export default function HeroSection({
  imagePath,
  tagline,
  description,
  contentId = "content-section",
}) {
  const handleScroll = (e) => {
    e.preventDefault();
    const target = document.getElementById(contentId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section">

      {/* Background image */}
      <div
        className="hero-bg"
        style={{
          backgroundImage: imagePath ? `url(${imagePath})` : "none",
          backgroundColor: imagePath ? undefined : "#1a3a5c",
        }}
      />

      {/* Overlay gelap */}
      <div className="hero-overlay" />

      {/* Konten teks */}
      <div className="hero-content">
        {/* Tagline — H1 */}
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 drop-shadow-lg">
          {tagline}
        </h1>

        {/* Deskripsi — H4 */}
        <h4 className="text-blue-100 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mb-2 drop-shadow">
          {description}
        </h4>

        {/* CTA Scroll */}
        <a
          href={`#${contentId}`}
          onClick={handleScroll}
          className="scroll-link"
        >
          Lihat Selengkapnya
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
