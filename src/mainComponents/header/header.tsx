import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ენის შეცვლა
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsLangOpen(false);
  };

  // როცა მობილურ მენიუს ვხსნით, სქროლი გავთიშოთ
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-[#1e1e1e] text-white w-full border-b border-gray-800 sticky top-0 z-50 transition-all duration-300">
      {/* R E S P O N S I V E   H E I G H T:
         h-20 (80px) მობილურზე, h-28 (112px) დესკტოპზე (md-დან ზევით)
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 md:h-28 flex items-center justify-between">
        {/* --- LOGO --- */}
        <div className="flex items-center gap-3 sm:gap-4 cursor-pointer select-none group z-50">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all">
            <span className="font-bold text-white text-xl md:text-2xl font-mono">
              B
            </span>
          </div>
          <span className="text-xl md:text-2xl font-bold tracking-wide">
            Bero<span className="font-light text-gray-300">Academy</span>
          </span>
        </div>

        {/* --- DESKTOP NAVIGATION (Hidden on Mobile) --- */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-base font-medium text-gray-400">
          <a href="#" className="hover:text-white transition-colors py-2">
            {t("header.scholars")}
          </a>
          <a href="#" className="hover:text-white transition-colors py-2">
            {t("header.teams")}
          </a>
          <a href="#" className="hover:text-white transition-colors py-2">
            {t("header.educators")}
          </a>
        </nav>

        {/* --- RIGHT SIDE ACTIONS (Desktop) --- */}
        <div className="hidden md:flex items-center gap-5">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md hover:bg-white/5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S13.636 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.636 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              <span>{i18n.language === "en" ? "ENG" : "GEO"}</span>
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-4 w-36 bg-[#1e1e1e] border border-gray-700 rounded-lg shadow-xl py-2 z-50">
                <button
                  onClick={() => changeLanguage("ka")}
                  className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-800 transition-colors flex items-center gap-3 ${
                    i18n.language === "ka"
                      ? "text-blue-400 bg-white/5"
                      : "text-gray-300"
                  }`}
                >
                  <span className="text-lg">🇬🇪</span> ქართული
                </button>
                <button
                  onClick={() => changeLanguage("en")}
                  className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-800 transition-colors flex items-center gap-3 ${
                    i18n.language === "en"
                      ? "text-blue-400 bg-white/5"
                      : "text-gray-300"
                  }`}
                >
                  <span className="text-lg">🇺🇸</span> English
                </button>
              </div>
            )}
          </div>

          <div className="w-px h-8 bg-gray-700"></div>
          <button className="px-6 py-2.5 rounded-full border border-gray-600 text-sm font-medium text-gray-300 hover:text-white hover:border-white hover:bg-white/5 transition-all duration-300">
            {t("header.students")}
          </button>
          <button className="px-7 py-2.5 rounded-full bg-[#635BFF] text-white text-sm font-bold hover:bg-[#534adb] hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 active:scale-95">
            {t("header.courses")}
          </button>
        </div>

        {/* --- MOBILE HAMBURGER BUTTON --- */}
        <div className="flex md:hidden items-center gap-4">
          {/* ენის შეცვლა მობილურზეც გამოვაჩინოთ რომ მოსახერხებელი იყოს */}
          <button
            onClick={() => changeLanguage(i18n.language === "en" ? "ka" : "en")}
            className="text-gray-300 font-bold text-sm"
          >
            {i18n.language === "en" ? "ENG" : "GEO"}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-300 hover:text-white focus:outline-none z-50"
          >
            {isMobileMenuOpen ? (
              // X Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#1e1e1e] z-40 flex flex-col pt-24 px-6 md:hidden animate-in fade-in slide-in-from-top-10 duration-300">
          <nav className="flex flex-col gap-6 text-xl font-medium text-gray-300">
            <a
              href="#"
              className="border-b border-gray-800 pb-4 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("header.scholars")}
            </a>
            <a
              href="#"
              className="border-b border-gray-800 pb-4 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("header.teams")}
            </a>
            <a
              href="#"
              className="border-b border-gray-800 pb-4 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("header.educators")}
            </a>
          </nav>

          <div className="mt-8 flex flex-col gap-4">
            <button className="w-full py-4 rounded-xl border border-gray-600 text-lg font-medium text-white hover:bg-white/5">
              {t("header.students")}
            </button>
            <button className="w-full py-4 rounded-xl bg-[#635BFF] text-white text-lg font-bold shadow-lg shadow-indigo-500/30">
              {t("header.courses")}
            </button>
          </div>
        </div>
      )}

      {/* ენის მოსანიშნი (დესკტოპზე) ფონზე დაჭერისას რომ დაიხუროს */}
      {isLangOpen && (
        <div
          className="fixed inset-0 z-40 bg-transparent"
          onClick={() => setIsLangOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
