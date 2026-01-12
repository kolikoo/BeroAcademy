import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AboutUs from "../AboutPage/aboutUs";
import FirstSection from "./firstSection/firstSection";
import SecondSection from "./secondSection/secondSection";
import SectionFour from "./sectionFour/sectionFour";
import SectionThree from "./sectionThree/sectionThree";
import FirstBanner from "./firstBanner/firstBanner";

const HomePage: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const formSectionRef = useRef<HTMLDivElement>(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // 1. თუ რეგისტრაციისთვის მოვდივართ (CourseDetails-იდან)
    if (location.state?.scrollToRegistration) {
      if (location.state.selectedCourse) {
        setSelectedCourse(location.state.selectedCourse);
      }
      setTimeout(() => {
        formSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }

    // 2. თუ Header-იდან მოვდივართ კონკრეტულ სექციაზე
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;

      if (sectionId === "top") {
        window.scrollTo(0, 0);
      } else {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }

    // ვასუფთავებთ state-ს, თუ რამე ეწერა, რომ რეფრეშზე არ გაიმეოროს
    if (
      location.state &&
      (location.state.scrollTo || location.state.scrollToRegistration)
    ) {
      navigate("/", { replace: true, state: {} });
    }
  }, [location, navigate]);

  const handleCourseSelect = (courseName: string) => {
    setSelectedCourse(courseName);
    formSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <FirstSection />

      {/* ID-ები აუცილებელია რომ Header-მა იპოვოს */}
      <div id="coursesSection" className="scroll-mt-28">
        <SecondSection onCourseSelect={handleCourseSelect} />
      </div>

      <div id="aboutSection" className="scroll-mt-32">
        <AboutUs />
      </div>

      <FirstBanner />
      <SectionThree />

      <div id="sectionFour" ref={formSectionRef} className="scroll-mt-32">
        <SectionFour selectedCourse={selectedCourse} />
      </div>
    </>
  );
};

export default HomePage;
