// src/components/Header/Header.jsx
// =====================================================
// HEADER — Fixed position, navy dark background
// Berisi: logo SDGs, judul web, nav links ke 6 halaman
// =====================================================

import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// Daftar navigasi — sesuaikan path jika berubah
const NAV_ITEMS = [
  { label: "Dashboard",               path: "/" },
  { label: "Empati & Penelitian",     path: "/empati-penelitian" },
  { label: "Ide",                     path: "/ide" },
  { label: "Pembuatan Prototipe",     path: "/pembuatan-prototipe" },
  { label: "Pengujian & Peninjauan",  path: "/pengujian-peninjauan" },
  { label: "Refleksi",                path: "/refleksi" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 w-full"
      style={{ backgroundColor: "#0f2744" }}
    >
      <div className="max-w-screen-xl mx-auto px-4 h-[72px] flex items-center justify-between gap-4">

        {/* ── Logo + Judul ── */}
        <NavLink to="/" className="flex items-center gap-3 shrink-0 no-underline">
          {/*
            Ganti src di bawah dengan path logo SDGs kamu:
            Letakkan file logo di: public/img/logo-sdgs.png
          */}
          <img
            src="/img/logo-sdgs.png"
            alt="Logo SDGs"
            className="h-10 w-10 object-contain"
            onError={(e) => {
              // Fallback jika gambar belum ada
              e.target.style.display = "none";
            }}
          />
          <div className="leading-tight">
            <p className="text-xs text-blue-300 font-semibold tracking-widest uppercase">
              SDGs 4
            </p>
            <p className="text-white font-bold text-sm leading-none">
              Pendidikan Berkualitas
            </p>
          </div>
        </NavLink>

        {/* ── Nav Desktop ── */}
        <nav className="hidden md:flex items-center gap-1 flex-wrap justify-end">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* ── Hamburger Mobile ── */}
        <button
          className="md:hidden text-white p-2 rounded focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* ── Mobile Dropdown Menu ── */}
      {menuOpen && (
        <nav
          className="md:hidden flex flex-col gap-1 px-4 pb-4"
          style={{ backgroundColor: "#0f2744" }}
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `nav-link block ${isActive ? "active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
