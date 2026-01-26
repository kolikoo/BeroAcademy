import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { coursesData } from "../../../Data/coursesData";

interface SecondSectionProps {
  onCourseSelect: (courseName: string) => void;
}

const SingleCard = ({
  card,
  onSelect,
}: {
  card: any;
  onSelect: (name: string) => void;
}) => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  // ფერები სურათიდან
  const darkGreen = "#013026";
  const lightBg = "#E8EEF1";
  const priceRed = "#FF3B30";

  // ფუნქცია, რომელიც კლიკზე ხსნის ან ხურავს ქარდს
  const handleCardClick = () => {
    if (!card.isDisabled) {
      setIsActive(!isActive); // Toggle: თუ ჩართულია გამორთავს, თუ გამორთულია ჩართავს
    }
  };

  return (
    <div
      onClick={handleCardClick}
      // წაშლილია onMouseEnter და onMouseLeave
      className={`group relative overflow-hidden rounded-[20px] transition-all duration-300 h-full flex flex-col shadow-lg
        ${
          !card.isDisabled
            ? "cursor-pointer" // hover ეფექტები (აწევა) დავტოვე ვიზუალიზაციისთვის, ფუნქციონალი მხოლოდ კლიკზეა
            : "cursor-not-allowed grayscale-[0.8] opacity-70"
        }
        ${
          isActive
            ? "-translate-y-2 shadow-2xl"
            : "hover:-translate-y-2 hover:shadow-2xl"
        } 
      `}
      // ზემოთ კლასებში დავამატე ლოგიკა: თუ isActive არის, მაშინაც აიწიოს მაღლა
      style={{ backgroundColor: lightBg }}
    >
      {/* --- Overlay ღილაკებით --- */}
      <div
        className={`absolute inset-0 z-40 bg-black/60 backdrop-blur-[3px] flex flex-col items-center justify-center gap-4 transition-all duration-300 ${
          isActive
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <button
          onClick={(e) => {
            e.stopPropagation(); // ეს აუცილებელია, რომ ღილაკზე დაჭერამ ქარდი არ დახუროს
            onSelect(card.tag);
          }}
          className="w-48 py-3 rounded-full bg-[#4FFFB0] text-[#0F1115] font-bold shadow-lg hover:scale-105 transition-transform"
        >
          რეგისტრაცია
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation(); // ეს აუცილებელია, რომ ღილაკზე დაჭერამ ქარდი არ დახუროს
            navigate(`/course/${card.tag}`);
          }}
          className="w-48 py-3 rounded-full bg-white border-2 border-transparent text-gray-900 font-bold hover:scale-105 transition-transform"
        >
          დეტალები
        </button>
      </div>

      {/* --- Card Content --- */}
      <div className="relative z-10 flex flex-col h-full p-0">
        {/* Header Section */}
        <div className="pt-8 px-6 pb-2">
          <h3
            className="text-[26px] font-black leading-tight mb-2"
            style={{ color: darkGreen }}
          >
            {card.title || "კურსის სახელი"}
          </h3>
          <p className="text-gray-600 text-sm font-medium">
            გამოიმუშავე ფული - მაშინ როცა გძინავს
          </p>
        </div>

        {/* Schedule Badge */}
        {card.schedule && (
          <div
            className="mt-6 py-2 px-6 rounded-r-full self-start text-white text-sm font-bold shadow-md w-max max-w-[90%]"
            style={{ backgroundColor: darkGreen }}
          >
            {card.schedule}
          </div>
        )}

        {/* Info Text Block */}
        <div className="px-6 mt-6 space-y-2 text-[#2c3e3a]">
          <p className="text-[15px]">
            <span className="font-bold opacity-70">ხანგრძლივობა</span> –{" "}
            <span className="font-bold">{card.hours}</span>
          </p>
          <p className="text-[15px]">
            <span className="font-bold opacity-70">დასაწყისი:</span>{" "}
            <span className="font-bold">2 მარტი</span>
          </p>
        </div>

        {/* Bottom Section: Price & Lecturer Image */}
        <div className="mt-auto relative h-[180px]">
          {/* დიდი მწვანე წრე */}
          <div
            className="absolute -right-12 bottom-[-40px] w-64 h-64 rounded-full border-[10px] border-[#dce3e6]"
            style={{ backgroundColor: darkGreen }}
          ></div>

          {/* ლექტორის ფოტო */}
          {card.image ? (
            <img
              src={card.image}
              alt={card.lectore}
              className="absolute right-2 bottom-2 w-40 h-40 object-cover object-top z-20 rounded-full border-2 border-white shadow-md"
            />
          ) : (
            <div className="absolute right-4 bottom-2 w-32 h-32 bg-gray-400 rounded-full border-4 border-white opacity-50 z-20 overflow-hidden flex items-center justify-center">
              <span className="text-white text-xs text-center">
                {card.lectore}
              </span>
            </div>
          )}

          {/* Price Box */}
          {!card.isDisabled && card.price && (
            <div
              className="absolute left-6 bottom-16 z-30 px-5 py-3 rounded-2xl shadow-xl flex flex-col justify-center min-w-[140px]"
              style={{ backgroundColor: darkGreen }}
            >
              <span className="text-white text-xs font-bold mb-1 opacity-90 text-center">
                ღირებულება:
              </span>
              <div className="flex items-center justify-center gap-3">
                {card.oldPrice && (
                  <span
                    className="font-bold text-lg line-through decoration-2"
                    style={{ color: priceRed }}
                  >
                    {card.oldPrice}
                  </span>
                )}
                <span className="text-white font-black text-2xl tracking-wide">
                  {card.price}
                </span>
              </div>
            </div>
          )}

          {/* Location */}
          {card.location && (
            <div className="absolute left-6 bottom-6 z-30 flex items-center gap-2 text-[#2c3e3a] font-bold text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>{card.location}</span>
            </div>
          )}
        </div>
      </div>

      {/* "მალე დაიწყება" ოვერლეი */}
      {card.isDisabled && (
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] flex items-center justify-center z-50">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {coursesData.map((card) => (
            <SingleCard key={card.id} card={card} onSelect={onCourseSelect} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
