import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import beroAcademyLogo from "../../images/beros logo .png";

const Header = () => {
  const { i18n } = useTranslation();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname === "/") {
      if (sectionId === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
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
      url("YOUR_IMAGE_PATH_HERE")`,
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
          <div className="w-px h-8 bg-gray-700/50"></div>
          <button
            onClick={() => handleNavigation("sectionFour")}
            className="px-7 py-2.5 rounded-full bg-[#4FFFB0] text-[#0F1115] text-sm font-bold hover:bg-[#3debb3] hover:shadow-[0_0_20px_rgba(79,255,176,0.4)] transition-all duration-300 active:scale-95 cursor-pointer"
          >
            დაგვიკავშირდით
          </button>
        </div>

        {/* --- MOBILE HAMBURGER BUTTON (In Header) --- */}
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
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#0F1115]/95 backdrop-blur-md z-[60] flex flex-col pt-24 px-6 md:hidden animate-in fade-in slide-in-from-top-10 duration-300">
          {/* 👇 აი ეს არის შენი ახალი გამოსასვლელი ღილაკი */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 text-gray-400 hover:text-[#4FFFB0] transition-colors rounded-full border border-transparent hover:border-white/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {/* 👆 ღილაკის დასასრული */}

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
