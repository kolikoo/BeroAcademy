import type React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom"; // დავამატეთ ნავიგაციისთვის

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  // --- ნავიგაციის ფუნქცია (იგივე რაც ჰედერს აქვს) ---
  const handleNavigation = (sectionId: string) => {
    // 1. თუ მთავარ გვერდზე ვართ
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
    // 2. თუ სხვა გვერდზე ვართ, გადავიდეს მთავარზე და თან გააყოლოს ინფორმაცია სად დასქროლოს
    else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/beroacademy/",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61584561268471",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/bero-academy",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@beroacademy",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-[#0F1115] text-white py-16 w-full font-sans border-t border-white/5">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 text-center">
          {/* --- სვეტი 1: აკადემია --- */}
          <div className="flex flex-col items-center gap-6">
            <h3 className="font-bold text-xl text-[#4FFFB0]">Bero Academy</h3>
            <p className="text-[#afb1b3] text-sm leading-relaxed max-w-xs">
              ისწავლე ინვესტირება და მომავლის პროფესიები პროფესიონალებისგან.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/5 text-[#afb1b3] hover:text-[#4FFFB0] hover:bg-[#4FFFB0]/10 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* --- სვეტი 2: ნავიგაცია --- */}
          <div className="flex flex-col items-center gap-4">
            <h3 className="font-bold text-base tracking-wide text-white mb-2">
              {t("footer.navigation") || "ნავიგაცია"}
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <button
                  onClick={() => handleNavigation("top")}
                  className="text-[#afb1b3] text-sm hover:text-[#4FFFB0] transition-colors bg-transparent border-none cursor-pointer"
                >
                  მთავარი
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("aboutSection")}
                  className="text-[#afb1b3] text-sm hover:text-[#4FFFB0] transition-colors bg-transparent border-none cursor-pointer"
                >
                  ჩვენ შესახებ
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("coursesSection")}
                  className="text-[#afb1b3] text-sm hover:text-[#4FFFB0] transition-colors bg-transparent border-none cursor-pointer"
                >
                  კურსები
                </button>
              </li>
            </ul>
          </div>

          {/* --- სვეტი 3: კონტაქტი --- */}
          <div className="flex flex-col items-center gap-4">
            <h3 className="font-bold text-base tracking-wide text-white mb-2">
              კონტაქტი
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-3 text-[#afb1b3] text-sm justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-4 h-4 text-[#4FFFB0]"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                544 04 08 00
              </li>
              <li className="flex items-center gap-3 text-[#afb1b3] text-sm justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-4 h-4 text-[#4FFFB0]"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                info@beroacademy.ge
              </li>
            </ul>
          </div>
        </div>

        {/* ქვედა ზოლი */}
        <div className="mt-16 pt-8 border-t border-white/5 text-center text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Bero Academy. ყველა უფლება დაცულია.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
