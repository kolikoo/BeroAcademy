// src/components/courseDetails/CourseDetails.tsx
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { coursesData } from "../../Data/coursesData" // დარწმუნდი რომ .tsx-ია ფაილი

const CourseDetails: React.FC = () => {
  const { courseTag } = useParams();
  const navigate = useNavigate();

  const course = coursesData.find((c) => c.tag === courseTag);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!course) {
    return (
      <div className="text-white text-center py-20">კურსი ვერ მოიძებნა</div>
    );
  }

  return (
    <section className="min-h-screen bg-[#0F1115] text-white py-24 px-6 relative overflow-hidden whitespace-pre-wrap">
      <div
        className={`absolute top-0 right-0 w-96 h-96 opacity-10 rounded-full blur-[100px] ${
          course.circleColor || "bg-gray-500"
        }`}
      ></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 text-gray-400 hover:text-[#4FFFB0] flex items-center gap-2 transition-colors font-medium"
        >
          ← უკან დაბრუნება
        </button>

        <span
          className={`px-4 py-1.5 rounded-full text-sm font-bold ${course.tagBg} inline-block mb-6`}
        >
          {course.tag}
        </span>

        <h1 className="text-3xl md:text-5xl font-extrabold mb-2 text-white">
          {course.title}
        </h1>
        {course.subtitle && (
          <p className="text-xl text-gray-400 mb-8 font-medium">
            {course.subtitle}
          </p>
        )}

        <div className="bg-[#1C1F25] p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl">
          <h2 className="text-2xl font-bold text-[#4FFFB0] mb-6">
            კურსის შესახებ
          </h2>

          {/* აქ პირდაპირ ვსვამთ JSX-ს */}
          <div className="text-gray-300 text-lg leading-loose">
            {course.fullDescription}
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-6 items-center justify-between">
            <div>
              <span className="block text-gray-500 text-sm mb-1">
                ხანგრძლივობა
              </span>
              <span className="text-xl font-bold text-white">
                {course.hours}
              </span>
            </div>

            <button
              onClick={() =>
                navigate("/", {
                  state: {
                    scrollToRegistration: true,
                    selectedCourse: course.tag,
                  },
                })
              }
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#4FFFB0] text-[#0F1115] font-bold hover:bg-[#3debb3] hover:shadow-[0_0_20px_rgba(79,255,176,0.4)] transition-all transform active:scale-95"
            >
              დარეგისტრირდი კურსზე
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
