import type React from "react";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser"; 


const SERVICE_ID = "service_2ra7qqd"; 
const TEMPLATE_ID = "template_hti73jc"; 
const PUBLIC_KEY = "MnvWvmKgnKhjE1zMM"; 

interface SectionFourProps {
  selectedCourse?: string;
}

const SectionFour: React.FC<SectionFourProps> = ({ selectedCourse }) => {
  const { t } = useTranslation();

  // რეფერენსი ფორმისთვის (რომ emailjs-მა წაიკითხოს ველები)
  const formRef = useRef<HTMLFormElement>(null);

  // სტატუსები ღილაკისთვის
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  // ფორმის ველები (ვიზუალისთვის და ვალიდაციისთვის)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    course: "",
  });

  // კურსის ავტომატური ჩაწერა
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

    // EmailJS-ის ფუნქცია
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        setIsSending(false);
        setStatusMessage("success");
        alert("თქვენი განაცხადი წარმატებით გაიგზავნა!");

        // ფორმის გასუფთავება
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
    <section className="w-full flex flex-col md:flex-row overflow-hidden bg-white">
      {/* ================= LEFT SIDE (REGISTRATION FORM) ================= */}
      <div className="relative w-full md:w-1/2 bg-[#CAE3DE] p-8 md:p-12 lg:p-16 flex flex-col justify-center overflow-hidden">
        {/* ფონი */}
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#191919] mb-6 leading-tight">
            {selectedCourse
              ? `დარეგისტრირდი ${selectedCourse}-ზე`
              : "შეავსე განაცხადი"}
          </h2>
          <p className="text-[#191919]/80 mb-8">
            დატოვე შენი მონაცემები და ჩვენ დაგიკავშირდებით დეტალების
            განსახილველად.
          </p>

          {/* ⚠️ ფორმას დაემატა ref={formRef} და onSubmit={sendEmail} 
             ასევე input-ებს აუცილებლად უნდა ჰქონდეთ name ატრიბუტი!
          */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col gap-4"
          >
            <div className="flex gap-4">
              <input
                type="text"
                name="firstName" // ეს სახელი უნდა ეწეროს EmailJS-ის თემფლეითში {{firstName}}
                value={formData.firstName}
                onChange={handleChange}
                placeholder="სახელი"
                required
                className="w-1/2 px-4 py-3 rounded-lg border-none outline-none focus:ring-2 focus:ring-black/20 text-gray-800 placeholder-gray-500 shadow-sm"
              />
              <input
                type="text"
                name="lastName" // {{lastName}}
                value={formData.lastName}
                onChange={handleChange}
                placeholder="გვარი"
                required
                className="w-1/2 px-4 py-3 rounded-lg border-none outline-none focus:ring-2 focus:ring-black/20 text-gray-800 placeholder-gray-500 shadow-sm"
              />
            </div>

            <input
              type="tel"
              name="phone" // {{phone}}
              value={formData.phone}
              onChange={handleChange}
              placeholder="ტელეფონის ნომერი"
              required
              className="w-full px-4 py-3 rounded-lg border-none outline-none focus:ring-2 focus:ring-black/20 text-gray-800 placeholder-gray-500 shadow-sm"
            />

            <input
              type="email"
              name="email" // {{email}}
              value={formData.email}
              onChange={handleChange}
              placeholder="ელ-ფოსტა"
              required
              className="w-full px-4 py-3 rounded-lg border-none outline-none focus:ring-2 focus:ring-black/20 text-gray-800 placeholder-gray-500 shadow-sm"
            />

            <div className="relative">
              <label className="text-xs font-bold ml-1 mb-1 block text-[#191919]/60">
                არჩეული კურსი
              </label>
              <input
                type="text"
                name="course" // {{course}}
                value={formData.course}
                readOnly
                placeholder="აირჩიეთ კურსი ზევით"
                className="w-full px-4 py-3 rounded-lg bg-white/50 border-none outline-none text-gray-800 font-bold shadow-sm cursor-not-allowed"
              />
            </div>

            {/* ღილაკი იცვლება სტატუსის მიხედვით */}
            <button
              type="submit"
              disabled={isSending}
              className={`mt-4 px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 w-full shadow-lg ${
                isSending
                  ? "bg-gray-700 cursor-wait"
                  : "bg-[#191919] hover:bg-black hover:scale-105 text-white"
              }`}
            >
              {isSending ? "იგზავნება..." : "გაგზავნა"}
            </button>

            {statusMessage === "success" && (
              <p className="text-sm text-green-900 font-bold text-center mt-2">
                წარმატებით გაიგზავნა! ✅
              </p>
            )}
            {statusMessage === "error" && (
              <p className="text-sm text-red-700 font-bold text-center mt-2">
                შეცდომა! სცადეთ თავიდან ❌
              </p>
            )}
          </form>
        </div>
      </div>

      {/* ================= RIGHT SIDE (FOLLOW US) ================= */}
      <div className="relative w-full md:w-1/2 bg-[#6B57FF] p-10 md:p-16 lg:p-24 flex flex-col justify-center overflow-hidden">
        {/* ... აქ ჩასვი შენი ძველი სოციალური აიქონების კოდი ... */}
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            {t("sectionFour.follow_title")}
          </h2>
          {/* Social Icons Grid (იგივე რჩება) */}
          <div className="grid grid-cols-2 gap-y-6 gap-x-12">{/* ... */}</div>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
