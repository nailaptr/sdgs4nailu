// src/App.jsx
// =====================================================
// APP ROOT — React Router setup
// Semua 6 halaman didefinisikan di sini
// Header di-render satu kali (fixed) untuk semua halaman
// =====================================================

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import global styles
import "./styles/global.css";

// Import Header (fixed, muncul di semua halaman)
import Header from "./components/Header/Header";

// Import semua halaman
import Dashboard         from "./pages/Dashboard/Dashboard";
import EmpatiPenelitian  from "./pages/EmpatiPenelitian/EmpatiPenelitian";
import Ide               from "./pages/Ide/Ide";
import PembuatanPrototipe from "./pages/PembuatanPrototipe/PembuatanPrototipe";
import PengujianPeninjauan from "./pages/PengujianPeninjauan/PengujianPeninjauan";
import Refleksi          from "./pages/Refleksi/Refleksi";

export default function App() {
  return (
    <Router>
      {/* Header fixed — muncul di semua halaman */}
      <Header />

      {/* Route definitions */}
      <Routes>
        <Route path="/"                     element={<Dashboard />} />
        <Route path="/empati-penelitian"    element={<EmpatiPenelitian />} />
        <Route path="/ide"                  element={<Ide />} />
        <Route path="/pembuatan-prototipe"  element={<PembuatanPrototipe />} />
        <Route path="/pengujian-peninjauan" element={<PengujianPeninjauan />} />
        <Route path="/refleksi"             element={<Refleksi />} />
      </Routes>
    </Router>
  );
}
