import type React from "react";


const FirstBanner: React.FC = () => {
  

  const scrollToCourses = () => {
    const section = document.getElementById("aboutSection");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-12 px-4 md:px-6 flex justify-center">
      {/* მთავარი კონტეინერი */}
      <div className="relative w-full max-w-7xl bg-[#0F1115] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between p-8 md:p-10 min-h-[160px] border border-white/5">
        {/* === BACKGROUND SHAPES (მარჯვნივ მწვანე ფორმა) === */}
        <div className="absolute top-0 right-0 h-full w-1/2 md:w-1/3 pointer-events-none opacity-90">
          <svg
            viewBox="0 0 400 160"
            preserveAspectRatio="none"
            className="w-full h-full text-[#4FFFB0] fill-current"
          >
            <path d="M400,0 L400,160 L0,160 C30,160 50,160 80,160 C80,130 80,120 120,120 C150,120 160,120 160,80 C160,50 160,40 220,40 C260,40 280,40 280,0 L400,0 Z" />
          </svg>
          <div className="absolute inset-0 bg-[#4FFFB0] blur-[80px] opacity-20"></div>
        </div>

        {/* === LEFT CONTENT (Icon + Text) === */}
        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
          <div className="flex-shrink-0">
            <div className="p-3 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#4FFFB0] drop-shadow-[0_0_8px_rgba(79,255,176,0.5)]"
              >
                <path
                  d="M12.89 3.56c-1.46-1.95-4.32-1.95-5.78 0l-.63.84c-1.37 1.83-.87 4.45 1.1 5.64l.97.58c.27.16.42.47.38.78-.18 1.43-.88 2.74-2.01 3.73l-1.04.91c-.81.71-.78 1.97.06 2.65l1.62 1.3c.73.58 1.81.44 2.37-.32l1.24-1.65c.56-.75 1.7-.75 2.26 0l1.24 1.65c.56.75 1.64.9 2.37.32l1.62-1.3c.84-.67.87-1.94.06-2.65l-1.04-.91c-1.13-.99-1.83-2.3-2.01-3.73-.04-.31.11-.62.38-.78l.97-.58c1.97-1.18 2.47-3.81 1.1-5.64l-.63-.84z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              საფონდო ბირჟის სრული კურსი
            </h2>
            <p className="text-gray-400 text-sm md:text-base font-medium max-w-xl">
              ისწავლე ინვესტირირება და ვაჭრობა პროფესიონალებისგან
            </p>
          </div>
        </div>

        {/* === RIGHT CONTENT (Button) === */}
        <div className="relative z-10 mt-6 md:mt-0">
          <button
            onClick={scrollToCourses}
            className="bg-black text-white px-10 py-3 rounded-full font-bold hover:bg-[#4FFFB0] hover:text-black hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95"
          >
            ჩვენ შესახებ
          </button>
        </div>
      </div>
    </section>
  );
};

export default FirstBanner;
