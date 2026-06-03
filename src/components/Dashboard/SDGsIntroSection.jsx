// src/components/Dashboard/SDGsIntroSection.jsx
// =====================================================
// SDGs INTRO SECTION — Penjelasan singkat tentang SDGs
// Layout: Desktop → gambar kiri, teks kanan
//         Mobile  → gambar atas, teks bawah
// =====================================================

import React from "react";

const SDGsIntroSection = ({ id }) => {
  return (
    <section id={id} className="bg-gray-100 py-16 md:py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">

        {/* ── LEFT: IMAGE ── */}
        <div className="flex justify-center">
          <img
            src="/img/content/dashboard/section-1.png"
            alt="Logo SDGs"
            className="
              w-full
              max-w-md
              object-contain
              rounded-2xl
              transition-all
              duration-300
              hover:scale-105
            "
          />
        </div>

        {/* ── RIGHT: CONTENT ── */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Apa itu SDGs?
          </h2>

          <p className="text-gray-700 text-justify leading-relaxed text-base md:text-lg">
            Sustainable Development Goals (SDGs) atau Tujuan Pembangunan
            Berkelanjutan merupakan agenda pembangunan global yang ditetapkan
            oleh United Nations pada tahun 2015 dan disepakati oleh 193 negara
            di dunia. SDGs hadir sebagai kelanjutan dari program Millennium
            Development Goals (MDGs) yang berlangsung pada tahun 2000–2015.
            Agenda ini memiliki 17 tujuan utama yang dirancang untuk
            menciptakan kehidupan yang lebih sejahtera, adil, dan berkelanjutan
            hingga tahun 2030. Tujuan-tujuan tersebut mencakup berbagai aspek
            penting, seperti pengentasan kemiskinan, peningkatan kualitas
            pendidikan, kesehatan, kesetaraan gender, perlindungan lingkungan,
            hingga pembangunan ekonomi yang inklusif. Melalui SDGs, seluruh
            negara berkomitmen untuk bekerja sama dalam menyelesaikan berbagai
            tantangan global demi meningkatkan kualitas hidup masyarakat di
            seluruh dunia.
          </p>
        </div>

      </div>
    </section>
  );
};

export default SDGsIntroSection;
