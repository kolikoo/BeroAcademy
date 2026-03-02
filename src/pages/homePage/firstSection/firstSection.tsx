import React from "react";
import bgImage from "../../../images/firstSectionCover.jpg";
import beroLogo from "../../../images/beros logo .png";

const FirstSection: React.FC = () => {
  // ფუნქცია ჩამოსასქროლად
  const scrollToCourses = () => {
    const section = document.getElementById("coursesSection");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full overflow-hidden min-h-[600px] flex items-center">
      {/* ================= BACKGROUND IMAGE ================= */}
      <img
        src={bgImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-2 py-16 md:py-32 lg:py-44 flex flex-col items-center md:items-start text-center md:text-left">
        {/* 1. ლოგო */}
        <div className="flex items-start justify-start md:justify-start animate-fade-in-up mb-6">
          <div className="w-64 h-auto sm:w-80 md:w-[400px] -ml-[100px]">
            <img
              className="object-contain w-full h-full drop-shadow-[0_0_15px_rgba(79,255,176,0.4)]"
              src={beroLogo}
              alt="Bero Logo"
            />
          </div>
        </div>

        {/* 2. მთავარი დიდი სათაური (H1) */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.0rem] font-extrabold  text-white leading-tight max-w-4xl drop-shadow-lg">
          გზა ფინანსური თავისუფლებისკენ
          <br className="hidden md:block" />{" "}
        </h1>

        {/* 4. ღილაკი */}
        <div className="mt-8 md:mt-12 w-full md:w-auto">
          <button
            onClick={scrollToCourses}
            className="w-full md:w-auto px-10 py-4 rounded-full transition-all duration-300 bg-[#4FFFB0] text-black text-lg font-bold hover:bg-[#534adb] hover:text-white hover:shadow-lg hover:shadow-indigo-500/30 active:scale-95 border border-transparent hover:border-white/20"
          >
            კურსები
          </button>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
