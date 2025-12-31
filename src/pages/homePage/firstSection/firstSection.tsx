import type React from "react";
import { useTranslation } from "react-i18next";
// ფოტოს იმპორტი (შეცვალე თუ სხვგან გაქვს)
import bgImage from "../../../images/firstSectionCover.jpg";

const FirstSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full overflow-hidden min-h-[600px] flex items-center">
      {/* ================= BACKGROUND IMAGE ================= */}
      <img
        src={bgImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* მუქი ფენა (Overlay) - რეკომენდებულია მობილურზე ტექსტის კითხვისთვის */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* ================= MAIN CONTENT ================= */}
      {/* flex-col და items-center მობილურისთვის, md:items-start დესკტოპისთვის */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-32 lg:py-44 flex flex-col items-center md:items-start text-center md:text-left">
        {/* 1. ლოგო + სათაური */}
        <div className="flex items-center gap-3 mb-6 animate-fade-in-up">
          <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center shadow-xl shadow-white/10">
            <span className="font-bold text-black text-xl font-mono">B</span>
          </div>
          <span className="text-2xl md:text-3xl font-bold tracking-wide text-white">
            Bero<span className="font-light text-gray-300">Academy</span>
          </span>
        </div>

        {/* 2. მთავარი დიდი სათაური (H1) */}
        {/* ზომები: მობილურზე 4xl, პლანშეტზე 6xl, დიდზე 7xl */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.0rem] font-extrabold text-white leading-tight max-w-4xl drop-shadow-lg">
          ისწავლე
          {/* br მობილურზე არ გვინდა, დესკტოპზე კი */}
          <br className="hidden md:block" />{" "}
          <span className="block mt-2">მომავლის პროფესია</span>
        </h1>

        {/* 3. ქვესათაური */}
        <p className="mt-6 md:mt-8 text-lg md:text-2xl text-gray-200 max-w-2xl font-medium leading-relaxed drop-shadow-md">
          {t("firstSection.description")}
        </p>

        {/* 4. ღილაკი */}
        <div className="mt-8 md:mt-12 w-full md:w-auto">
          <button className="w-full md:w-auto px-8 py-4 rounded-full bg-[#635BFF] text-white text-lg font-bold hover:bg-[#534adb] hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 active:scale-95 border border-transparent hover:border-white/20">
            {t("firstSection.button")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
