import type React from "react";
import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";

interface SecondSectionProps {
  onCourseSelect: (courseName: string) => void;
}

const SingleCard = ({
  card,
  t,
  onSelect,
}: {
  card: any;
  t: any;
  onSelect: (name: string) => void;
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => !card.isDisabled && onSelect(card.tag)}
      className={`
        group relative bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 overflow-hidden
        transition-all duration-300 ease-out h-full flex flex-col
        ${
          !card.isDisabled
            ? `cursor-pointer hover:-translate-y-2 ${card.borderColor} ${card.shadowColor}`
            : "cursor-not-allowed"
        }
      `}
    >
      {/* ნათება (მხოლოდ დესკტოპზე რომ არ შეუშალოს ხელი მობილურს, თუმცა ხელს არ უშლის) */}
      {!card.isDisabled && (
        <div
          className={`
            pointer-events-none absolute rounded-full 
            transition-opacity duration-300
            ${isHovered ? "opacity-100" : "opacity-0"} 
            ${card.circleColor}
            blur-[40px] w-32 h-32
          `}
          style={{
            transform: `translate(${position.x - 64}px, ${position.y - 64}px)`,
            top: 0,
            left: 0,
            zIndex: 0,
          }}
        />
      )}

      <div
        className={`relative z-10 flex flex-col h-full ${
          card.isDisabled ? "opacity-40 grayscale-[0.5]" : ""
        }`}
      >
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 bg-white/80 backdrop-blur-sm rounded-lg group-hover:shadow-sm transition-colors border border-gray-100">
            {card.icon}
          </div>
          <span
            className={`text-xs font-bold px-3 py-1 rounded-full h-fit ${card.tagBg}`}
          >
            {card.tag}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">კურსი</h3>
        <p className="text-sm text-gray-500 font-medium mb-4">{card.hours}</p>

        {/* აღწერა იკავებს დარჩენილ ადგილს */}
        <p className="text-gray-600 text-sm leading-relaxed flex-grow">
          {t(`secondSection.${card.descKey}`)}
        </p>
      </div>

      {card.isDisabled && (
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px] flex items-center justify-center rounded-2xl z-20 select-none">
          <div className="bg-gray-900/90 text-white px-4 py-2 rounded-lg shadow-lg transform text-center mx-4">
            <span className="text-xs sm:text-sm font-bold tracking-wide">
              რეგისტრაცია მალე დაიწყება
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

const SecondSection: React.FC<SecondSectionProps> = ({ onCourseSelect }) => {
  const { t } = useTranslation();

  const cards = [
    // 1. Python
    {
      id: 1,
      tag: "Python",
      hours: "~29 hours",
      titleKey: "card1_title",
      descKey: "card1_desc",
      borderColor: "hover:border-[#00CC87]",
      shadowColor: "hover:shadow-[8px_8px_0px_#00CC87]",
      circleColor: "bg-[#00CC87]",
      tagBg: "bg-green-100 text-green-700",
      isDisabled: false,
      icon: (
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    // 2. React
    {
      id: 2,
      tag: "React",
      hours: "~35 hours",
      titleKey: "card2_title",
      descKey: "card2_desc",
      borderColor: "hover:border-[#61DAFB]",
      shadowColor: "hover:shadow-[8px_8px_0px_#61DAFB]",
      circleColor: "bg-[#61DAFB]",
      tagBg: "bg-blue-100 text-blue-700",
      isDisabled: false,
      icon: (
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
          />
        </svg>
      ),
    },
    // 3. Java
    {
      id: 3,
      tag: "Java",
      hours: "~40 hours",
      titleKey: "card3_title",
      descKey: "card3_desc",
      tagBg: "bg-orange-100 text-orange-700",
      isDisabled: true,
      icon: (
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
    },
    // 4. C#
    {
      id: 4,
      tag: "C#",
      hours: "~30 hours",
      titleKey: "card4_title",
      descKey: "card4_desc",
      tagBg: "bg-purple-100 text-purple-700",
      isDisabled: true,
      icon: (
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    // 5. DevOps
    {
      id: 5,
      tag: "DevOps",
      hours: "~25 hours",
      titleKey: "card5_title",
      descKey: "card5_desc",
      tagBg: "bg-gray-200 text-gray-700",
      isDisabled: true,
      icon: (
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
    },
    // 6. Design
    {
      id: 6,
      tag: "Design",
      hours: "~15 hours",
      titleKey: "card6_title",
      descKey: "card6_desc",
      tagBg: "bg-pink-100 text-pink-700",
      isDisabled: true,
      icon: (
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-gray-50 py-16 sm:py-20 md:py-32 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            კურსები
            <br />
            <span className="text-gray-500 font-normal block mt-2 text-xl sm:text-2xl">
              {t("secondSection.subtitle")}
            </span>
          </h2>
        </div>

        {/* Responsive Grid:
           - 1 სვეტი მობილურზე (default)
           - 2 სვეტი დიდ ტელეფონებზე და პლანშეტებზე (sm)
           - 3 სვეტი ლეპტოპებზე (lg)
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card) => (
            <SingleCard
              key={card.id}
              card={card}
              t={t}
              onSelect={onCourseSelect}
            />
          ))}
        </div>

        <div className="mt-12 text-center sm:text-left">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-gray-600 font-semibold hover:text-black transition-colors group text-lg"
          >
            {t("secondSection.view_all")}
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
