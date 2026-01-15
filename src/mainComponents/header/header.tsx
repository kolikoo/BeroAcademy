import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom"; // დავამატეთ Hook-ები
import beroAcademyLogo from "../../images/beros logo .png";

const Header = () => {
  const {  i18n } = useTranslation();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ნავიგაციისთვის საჭირო Hook-ები
  const navigate = useNavigate();
  const location = useLocation();

  // --- უნივერსალური ნავიგაციის ფუნქცია ---
  const handleNavigation = (sectionId: string) => {
    setIsMobileMenuOpen(false); // მენიუს დახურვა მობილურზე

    // 1. თუ უკვე მთავარ გვერდზე ვართ
    if (location.pathname === "/") {
      if (sectionId === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    // 2. თუ სხვა გვერდზე ვართ (მაგ: დეტალურზე)
    else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsLangOpen(false);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      style={{
        backgroundImage: `
      linear-gradient(
        to right, 
        rgba(15, 17, 21, 0.98),
        rgba(15, 17, 21, 0.7),
        rgba(79, 255, 176, 0.85)
      ),
      url("YOUR_IMAGE_PATH_HERE")`, // ჩასვი შენი სურათის მისამართი
      }}
      className="bg-[#0F1115] text-white w-full border-b border-white/10 sticky top-0 z-50 transition-all duration-300 bg-cover bg-center bg-no-repeat"
    >
      <div className="bg-[#0F1115]/30 w-full h-full absolute inset-0 -z-10 backdrop-blur-[2px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 md:h-28 flex items-center justify-between relative z-10">
        {/* --- LOGO --- */}
        <button
          onClick={() => handleNavigation("top")}
          className="flex items-center gap-3 sm:gap-4 cursor-pointer select-none group bg-transparent border-none p-0"
        >
          <div className="w-[300px] h-20 rounded-lg flex items-center justify-center transition-all">
            <img
              src={beroAcademyLogo}
              alt="beros logo"
              className="object-contain h-full w-full drop-shadow-[0_0_8px_rgba(79,255,176,0.3)]"
            />
          </div>
        </button>

        {/* --- DESKTOP NAVIGATION --- */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-base font-medium text-gray-400">
          <button
            onClick={() => handleNavigation("top")}
            className="hover:text-[#4FFFB0] transition-colors duration-300 bg-transparent border-none cursor-pointer hover:shadow-[0_20px_20px_-10px_rgba(79,255,176,0.2)]"
          >
            მთავარი
          </button>

          <button
            onClick={() => handleNavigation("aboutSection")}
            className="hover:text-[#4FFFB0] transition-colors duration-300 bg-transparent border-none cursor-pointer"
          >
            ჩვენ შესახებ
          </button>

          <button
            onClick={() => handleNavigation("coursesSection")}
            className="hover:text-[#4FFFB0] transition-colors duration-300 bg-transparent border-none cursor-pointer"
          >
            კურსები
          </button>
        </nav>

        {/* --- RIGHT SIDE ACTIONS (Desktop) --- */}
        <div className="hidden md:flex items-center gap-5">
          {/* Language Switcher */}
          {/* <div className="relative">
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
              <div className="absolute right-0 mt-4 w-36 d bg-[#0F1115] border border-gray-700/50 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.5)] py-2 z-50 overflow-hidden">
                <button
                  onClick={() => changeLanguage("ka")}
                  className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-800 transition-colors flex items-center gap-3 ${
                    i18n.language === "ka"
                      ? "text-[#4FFFB0] bg-[#4FFFB0]/10"
                      : "text-gray-300"
                  }`}
                >
                  <span>🇬🇪</span> ქართული
                </button>
                <button
                  onClick={() => changeLanguage("en")}
                  className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-800 transition-colors flex items-center gap-3 ${
                    i18n.language === "en"
                      ? "text-[#4FFFB0] bg-[#4FFFB0]/10"
                      : "text-gray-300"
                  }`}
                >
                  <span>🇺🇸</span> English
                </button>
              </div>
            )}
          </div> */}

          <div className="w-px h-8 bg-gray-700/50"></div>

          {/* Contact Button */}
          <button
            onClick={() => handleNavigation("sectionFour")}
            className="px-7 py-2.5 rounded-full bg-[#4FFFB0] text-[#0F1115] text-sm font-bold hover:bg-[#3debb3] hover:shadow-[0_0_20px_rgba(79,255,176,0.4)] transition-all duration-300 active:scale-95 cursor-pointer"
          >
            დაგვიკავშირდით
          </button>
        </div>

        {/* --- MOBILE HAMBURGER BUTTON --- */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={() => changeLanguage(i18n.language === "en" ? "ka" : "en")}
            className="text-gray-300 font-bold text-sm"
          >
            {i18n.language === "en" ? "ENG" : "GEO"}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-300 hover:text-[#4FFFB0] transition-colors"
          >
            {isMobileMenuOpen ? (
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
        <div className="fixed inset-0 bg-[#0F1115]/95 backdrop-blur-sm z-40 flex flex-col pt-24 px-6 md:hidden animate-in fade-in slide-in-from-top-10 duration-300">
          <nav className="flex flex-col gap-6 text-xl font-medium text-gray-300">
            <button
              className="text-left border-b border-gray-800 pb-4 hover:text-[#4FFFB0]"
              onClick={() => handleNavigation("aboutSection")}
            >
              ჩვენ შესახებ
            </button>
            <button
              className="text-left border-b border-gray-800 pb-4 hover:text-[#4FFFB0]"
              onClick={() => handleNavigation("coursesSection")}
            >
             კურსები
            </button>
          </nav>

          <div className="mt-8 flex flex-col gap-4">
            <button
              onClick={() => handleNavigation("sectionFour")}
              className="px-7 py-2.5 rounded-full bg-[#4FFFB0] text-[#0F1115] text-sm font-bold hover:bg-[#3debb3] hover:shadow-[0_0_20px_rgba(79,255,176,0.4)] transition-all duration-300 active:scale-95"
            >
              დაგვიკავშირდით
            </button>
          </div>
        </div>
      )}
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
