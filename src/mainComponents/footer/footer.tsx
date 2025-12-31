import type React from "react";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  // მონაცემების სტრუქტურა მარტივი რენდერისთვის
  const footerColumns = [
    {
      title: t("footer.ai_title"),
      links: [
        t("footer.ai_links.jb_ai"),
        t("footer.ai_links.assistant"),
  
      ],
    },
    {
      title: t("footer.tools_title"),
      links: [
        t("footer.tools_links.all"),
        t("footer.tools_links.ides"),
      ],
    },
    {
      title: t("footer.solutions_title"),
      links: [
        t("footer.solutions_links.business"),
        t("footer.solutions_links.data"),

      ],
    },
    {
      title: t("footer.initiatives_title"),
      links: [
        t("footer.initiatives_links.kotlin"),
        t("footer.initiatives_links.opensource"),

      ],
    },
    {
      title: t("footer.education_title"),
      links: [
        t("footer.education_links.students"),
        t("footer.education_links.teachers"),

      ],
    },
    {
      title: t("footer.store_title"),
      links: [
        t("footer.store_links.pricing"),
        t("footer.store_links.all_pack"),

      ],
    },
  ];

  return (
    <footer className="bg-[#191919] text-white py-16 w-full font-sans">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* ძირითადი ბადე (Grid) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12">
          {footerColumns.map((col, index) => (
            <div key={index} className="flex flex-col gap-4">
              {/* სვეტის სათაური */}
              <h3 className="font-bold text-base tracking-wide text-white mb-2">
                {col.title}
              </h3>

              {/* ლინკების სია */}
              <ul className="flex flex-col gap-3">
                {col.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-[#afb1b3] text-sm hover:text-white hover:underline transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ქვედა ხაზი / Copyright (სურვილისამებრ) */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2000–2025 BeroAcademy s.r.o.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300">
              Privacy & Security
            </a>
            <a href="#" className="hover:text-gray-300">
              Terms of Use
            </a>
            <a href="#" className="hover:text-gray-300">
              Trademarks
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
