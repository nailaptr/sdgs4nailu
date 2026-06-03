// src/components/Dashboard/SDGsGoalsSection.jsx
// =====================================================
// SDGs GOALS SECTION — Grid 17 logo SDGs dengan accordion
// Layout: Desktop 6 kolom, Tablet 3 kolom, Mobile 2 kolom
// Fitur: klik card → accordion deskripsi terbuka di bawah
//        hanya satu accordion aktif dalam satu waktu
// =====================================================

import { useState } from "react";
import sdgsGoals from "../../data/sdgsGoals";

const SDGsGoalsSection = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="bg-white py-16 md:py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* ── TITLE ── */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12 md:mb-14">
          17 Tujuan SDGs
        </h2>

        {/* ── GRID ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-6">
          {sdgsGoals.map((goal) => (
            <div key={goal.id}>

              {/* CARD */}
              <div
                onClick={() => toggleAccordion(goal.id)}
                className="
                  bg-white
                  rounded-xl
                  overflow-hidden
                  shadow-md
                  hover:shadow-2xl
                  transition-all
                  duration-300
                  cursor-pointer
                  hover:-translate-y-1
                "
              >
                <img
                  src={goal.image}
                  alt={goal.title || `SDGs ${goal.id}`}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-300
                    hover:scale-105
                  "
                />
              </div>

              {/* ACCORDION PANEL */}
              <div
                className={`
                  overflow-hidden
                  transition-all
                  duration-300
                  ${
                    activeId === goal.id
                      ? "max-h-40 opacity-100 mt-3"
                      : "max-h-0 opacity-0"
                  }
                `}
              >
                <div className="bg-gray-100 rounded-xl p-4 shadow-inner">
                  <h3 className="font-bold text-base md:text-lg text-gray-900">
                    {goal.title || `SDGs ${goal.id}`}
                  </h3>
                  <p className="text-gray-700 text-sm mt-2 leading-relaxed">
                    {goal.description ||
                      "Silakan isi deskripsi SDGs secara manual."}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SDGsGoalsSection;
