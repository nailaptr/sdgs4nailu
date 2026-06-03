// src/components/Footer/Footer.jsx
// =====================================================
// FOOTER — Navy dark background, teks copyright
// =====================================================

import React from "react";

export default function Footer() {
  return (
    <footer
      className="w-full py-5 px-4 text-center"
      style={{ backgroundColor: "#0f2744" }}
    >
      <p className="text-blue-200 text-sm">
        © 2026 Project Web SDGs 4 - Pendidikan Berkualitas &nbsp;|&nbsp;
        <span className="text-blue-300 font-semibold">
          1313623058 – Naila Putri Fatihah
        </span>
      </p>
    </footer>
  );
}
