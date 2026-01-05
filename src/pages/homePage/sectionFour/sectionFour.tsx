import type React from "react";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import sectionFourBackground from "../../../images/unnamed.jpg";
import beroAcademylogo from "../../../images/beros logo .png";

const SERVICE_ID = "service_2ra7qqd";
const TEMPLATE_ID = "template_hti73jc";
const PUBLIC_KEY = "MnvWvmKgnKhjE1zMM";

interface SectionFourProps {
  selectedCourse?: string;
}

const SectionFour: React.FC<SectionFourProps> = ({ selectedCourse }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    course: "",
  });

  useEffect(() => {
    if (selectedCourse) {
      setFormData((prev) => ({ ...prev, course: selectedCourse }));
    }
  }, [selectedCourse]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    setStatusMessage(null);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        setIsSending(false);
        setStatusMessage("success");
        alert("თქვენი განაცხადი წარმატებით გაიგზავნა!");
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          course: "",
        });
      },
      (error) => {
        console.log(error.text);
        setIsSending(false);
        setStatusMessage("error");
        alert("შეცდომა გაგზავნისას. გთხოვთ სცადოთ თავიდან.");
      }
    );
  };

  return (
    <section className="w-full flex flex-col md:flex-row overflow-hidden bg-white text-white">
      {/* ================= LEFT SIDE (REGISTRATION FORM) ================= */}
      <div className="relative w-full md:w-1/2 bg-[#1C1F25] p-8 md:p-12 lg:p-16 flex flex-col justify-center overflow-hidden">
        {/* ... (მარცხენა მხარე იგივე რჩება) ... */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <svg
          className="absolute bottom-0 left-0 text-[#CAE3DE] w-full h-32 pointer-events-none"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>

        <div className="relative z-10 max-w-lg w-full mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
            {selectedCourse
              ? `დარეგისტრირდი ${selectedCourse}-ზე`
              : "შეავსე განაცხადი"}
          </h2>
          <p className="text-white mb-8">
            დატოვე შენი მონაცემები და ჩვენ დაგიკავშირდებით დეტალების
            განსახილველად.
          </p>

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col gap-4"
          >
            <div className="flex gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="სახელი"
                required
                className="w-1/2 px-4 py-3 rounded-lg border-none outline-none focus:ring-2 focus:ring-black/20 text-gray-900 placeholder-gray-700 shadow-sm bg-[#4FFFB0]"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="გვარი"
                required
                className="w-1/2 px-4 py-3 rounded-lg border-none outline-none focus:ring-2 focus:ring-black/20 text-gray-900 placeholder-gray-700 shadow-sm bg-[#4FFFB0]"
              />
            </div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="ტელეფონის ნომერი"
              required
              className="w-full px-4 py-3 rounded-lg border-none outline-none focus:ring-2 focus:ring-black/20 text-gray-900 placeholder-gray-700 shadow-sm bg-[#4FFFB0]"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ელ-ფოსტა"
              required
              className="w-full px-4 py-3 rounded-lg border-none outline-none focus:ring-2 focus:ring-black/20 text-gray-900 placeholder-gray-700 shadow-sm bg-[#4FFFB0]"
            />
            <div className="relative">
              <label className="text-xs font-bold ml-1 mb-1 block text-white">
                არჩეული კურსი
              </label>
              <input
                type="text"
                name="course"
                value={formData.course}
                readOnly
                placeholder="აირჩიეთ კურსი ზევით"
                className="w-full px-4 py-3 rounded-lg bg-[#4FFFB0]/80 border-none outline-none text-black font-bold shadow-sm cursor-not-allowed placeholder-gray-700"
              />
            </div>
            <button
              type="submit"
              disabled={isSending}
              className={`mt-4 px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 w-full shadow-lg ${
                isSending
                  ? "bg-gray-700 cursor-wait text-gray-300"
                  : "bg-[#CAE3DE] hover:bg-[#4FFFB0] hover:scale-105 text-black hover:text-black"
              }`}
            >
              {isSending ? "იგზავნება..." : "გაგზავნა"}
            </button>
            {statusMessage === "success" && (
              <p className="text-sm text-[#4FFFB0] font-bold text-center mt-2">
                წარმატებით გაიგზავნა! ✅
              </p>
            )}
            {statusMessage === "error" && (
              <p className="text-sm text-red-500 font-bold text-center mt-2">
                შეცდომა! სცადეთ თავიდან ❌
              </p>
            )}
          </form>
        </div>
      </div>

      {/* ================= RIGHT SIDE (BACKGROUND IMAGE + LOGO) ================= */}
      <div
        // "w-11" შევცვალე "w-full"-ით, რომ მობილურზე ნორმალურად გამოჩნდეს
        className="relative w-full md:w-1/2 min-h-[500px] md:min-h-auto bg-[#1C1F25] p-10 md:p-16 lg:p-24 flex flex-col justify-center items-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${sectionFourBackground})`,
        }}
      >
        {/* მუქი ფენა (Overlay) */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        {/* --- ლოგო --- */}
        <img
          src={beroAcademylogo}
          alt="Bero Academy Logo"
          className="relative z-20 object-contain drop-shadow-[0_0_10px_rgba(79,255,176,0.5)]" // ოდნავი ნათებაც დავამატე
          style={{ width: "400px", height: "200px" }}
        />
      </div>
    </section>
  );
};

export default SectionFour;
