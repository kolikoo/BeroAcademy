import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { coursesData } from "../../../Data/coursesData";

interface SecondSectionProps {
  onCourseSelect: (courseName: string) => void;
}

// 1. განახლებული აიქონების ფუნქცია
const getIcon = (tag: string) => {
  const className = "w-7 h-7 text-gray-800";
  switch (tag) {
    case "Python":
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.2}
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
          strokeWidth={2.2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
          />
        </svg>
      );
    default:
      // "საფონდო ბირჟისთვის" - ზრდადი გრაფიკის აიქონი
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
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
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsActive(false);
      }}
      onClick={() => !card.isDisabled && setIsActive(true)}
      className={`group relative bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 ease-out h-full flex flex-col ${
        !card.isDisabled
          ? `cursor-pointer hover:-translate-y-2 ${card.borderColor} ${card.shadowColor}`
          : "cursor-not-allowed"
      }`}
    >
      {/* Overlay ღილაკებით */}
      <div
        className={`absolute inset-0 z-30 bg-white/95 backdrop-blur-[2px] flex flex-col items-center justify-center gap-4 transition-all duration-300 ${
          isActive
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect(card.tag);
          }}
          className="w-48 py-3 rounded-full bg-[#4FFFB0] text-[#0F1115] font-bold shadow-lg hover:scale-105 transition-all"
        >
          რეგისტრაცია
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/course/${card.tag}`);
          }}
          className="w-48 py-3 rounded-full bg-white border-2 border-gray-900 text-gray-900 font-bold hover:scale-105 transition-all"
        >
          დეტალები
        </button>
      </div>

      {/* ნათების ეფექტი */}
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
          <div className="p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm">
            {getIcon(card.tag)}
          </div>
          <span
            className={`text-xs font-bold px-3 py-1 rounded-full ${card.tagBg}`}
          >
            {card.tag}
          </span>
        </div>

        <h3 className="text-[22px] font-extrabold text-gray-900 mb-4 leading-tight">
          {card.title || "კურსი"}
        </h3>

        {/* საინფორმაციო ბლოკი - გაერთიანებული და კომპაქტური */}
        <div className="flex flex-col space-y-1.5 text-[15px] text-gray-800 mb-auto">
          <p className="flex items-center gap-1.5">
            <span className="font-normal text-gray-500">ხანგრძლივობა:</span>
            <span className="font-bold">{card.hours}</span>
          </p>
          <p className="flex items-center gap-1.5">
            <span className="font-normal text-gray-500">ლექტორი:</span>
            <span className="font-bold">{card.lectore}</span>
          </p>
          {card.schedule && (
            <p className="flex items-center gap-1.5">
              <span className="font-normal text-gray-500">შეხვედრები:</span>
              <span className="font-bold">{card.schedule}</span>
            </p>
          )}
          {card.time && (
            <p className="flex items-center gap-1.5">
              <span className="font-normal text-gray-500">დრო:</span>
              <span className="font-bold text-gray-900">{card.time}</span>
            </p>
          )}

          {/* ფასის ბლოკი - მხოლოდ აქტიურ კურსებზე */}
          {!card.isDisabled && card.price && (
            <div className="pt-3 mt-3 border-t border-gray-100">
              <span className="text-[17px] font-bold text-gray-900 uppercase tracking-wider block mb-1">
                ღირებულება
              </span>
              <div className="flex items-center gap-3">
                {card.oldPrice && (
                  <span className="text-red-500 line-through font-bold text-lg decoration-2">
                    {card.oldPrice}
                  </span>
                )}
                <span className="text-green-600 font-black text-2xl">
                  {card.price}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* ლოკაცია */}
        {/* ლოკაცია - განახლებული კოდი */}
        {card.location && (
          <a
            href={card.mapLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            onClick={(e) => e.stopPropagation()} // რომ ქარდის ქლიქმა არ იმუშაოს აქ
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
            {card.location}
          </a>
        )}
      </div>

      {card.isDisabled && (
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] flex items-center justify-center z-20">
          <div className="bg-gray-900 text-white px-5 py-2 rounded-xl shadow-xl font-bold text-sm">
            რეგისტრაცია მალე დაიწყება
          </div>
        </div>
      )}
    </div>
  );
};

const SecondSection: React.FC<SecondSectionProps> = ({ onCourseSelect }) => {
  return (
    <section className="bg-gray-50 py-20 md:py-32 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-16 tracking-tight">
          კურსები
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((card) => (
            <SingleCard key={card.id} card={card} onSelect={onCourseSelect} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
