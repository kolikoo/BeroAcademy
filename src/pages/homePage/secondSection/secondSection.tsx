import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { coursesData } from "../../../Data/coursesData"; // დარწმუნდი რომ მისამართი სწორია

interface SecondSectionProps {
  onCourseSelect: (courseName: string) => void;
}

const getIcon = (tag: string) => {
  const className = "w-6 h-6 text-gray-700";
  switch (tag) {
    case "Python":
      return (
        <svg
          className={className}
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
      );
    case "React":
      return (
        <svg
          className={className}
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
      );
    case "Java":
      return (
        <svg
          className={className}
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
      );
    default:
      // "საფონდო ბირჟაზე ინვესტიცია" და სხვა დანარჩენებისთვის
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      );
  }
};

const SingleCard = ({
  card,
  
  onSelect,
}: {
  card: any;
  t: any;
  onSelect: (name: string) => void;
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });
  };

  const handleCardClick = () => {
    if (!card.isDisabled) setIsActive(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsActive(false);
  };

  const handleRegistrationClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelect(card.tag);
  };

  const handleDetailsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/course/${card.tag}`);
  };

  const handleLocationClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // ხელს უშლის ქარდის კლიკის გააქტიურებას
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
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
      {/* --- Overlay ღილაკებით --- */}
      <div
        className={`
          absolute inset-0 z-30 bg-white/95 backdrop-blur-[2px] 
          flex flex-col items-center justify-center gap-4
          transition-all duration-300 ease-in-out
          ${
            isActive
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }
      `}
      >
        <button
          onClick={handleRegistrationClick}
          className="w-48 py-3 rounded-full bg-[#4FFFB0] text-[#0F1115] font-bold shadow-lg hover:bg-[#3debb3] hover:scale-105 transition-all"
        >
          რეგისტრაცია
        </button>
        <button
          onClick={handleDetailsClick}
          className="w-48 py-3 rounded-full bg-white border-2 border-gray-900 text-gray-900 font-bold hover:bg-gray-50 hover:scale-105 transition-all"
        >
          კურსის დეტალები
        </button>
      </div>

      {/* ნათება */}
      {!card.isDisabled && (
        <div
          className={`pointer-events-none absolute rounded-full transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          } ${card.circleColor} blur-[40px] w-32 h-32`}
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
            {getIcon(card.tag)}
          </div>
          <span
            className={`text-xs font-bold px-3 py-1 rounded-full h-fit text-center max-w-[50%] leading-4 ${card.tagBg}`}
          >
            {card.tag}
          </span>
        </div>

        {/* აქ დინამიური სათაური */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {card.title || "კურსი"}
        </h3>

        <p className="text-sm text-black  font-semibold mb-2">
          ხანგრძლივობა:
          <span className="font-normal text-gray-500">{card.hours}</span>
        </p>

        {/* --- ახალი ბლოკი: თარიღი, დრო, ლოკაცია --- */}
        {card.startDate && (
          <div className="mb-4 text-sm text-gray-700 space-y-1  p-3 ">
            <p className="font-semibold text-gray-900">
              დაწყება: <span className="font-normal">{card.startDate}</span>
            </p>
            {card.schedule && <p>{card.schedule}</p>}

            {/* ლოკაცია და ლინკი */}
            {card.location && (
              <div className="mt-2 pt-2 border-t border-gray-200">
                {card.mapLink ? (
                  <a
                    href={card.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLocationClick}
                    className="group/loc inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-blue-600 transition-colors uppercase tracking-wide"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-gray-400 group-hover/loc:text-blue-500 transition-colors"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {card.location}
                  </a>
                ) : (
                  <span className="text-xs text-gray-500 uppercase tracking-wide">
                    {card.location}
                  </span>
                )}
              </div>
            )}
          </div>
        )}
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

  return (
    <section className="bg-gray-50 py-16 sm:py-20 md:py-32 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            კურსები
            <br />
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {coursesData.map((card) => (
            <SingleCard
              key={card.id}
              card={card}
              t={t}
              onSelect={onCourseSelect}
            />
          ))}
        </div>

        <div className="mt-12 text-center sm:text-left">
          {/* ლინკები თუ გინდა აქ ჩასვი */}
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
