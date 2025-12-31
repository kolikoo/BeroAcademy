import React, { useState, useRef } from "react";
import FirstBanner from "./firstBanner/firstBanner";
import FirstSection from "./firstSection/firstSection";
import SecondSection from "./secondSection/secondSection";
import SectionFour from "./sectionFour/sectionFour";
import SectionThree from "./sectionThree/sectionThree";

const HomePage: React.FC = () => {
  // 1. ვქმნით მეხსიერებას (State) არჩეული კურსისთვის
  const [selectedCourse, setSelectedCourse] = useState<string>("");

  // 2. ვქმნით მისამართს (Ref), რომ საიტმა იცოდეს სად არის ფორმა
  const formSectionRef = useRef<HTMLDivElement>(null);

  // 3. ფუნქცია, რომელიც გამოიძახება კურსზე დაჭერისას
  const handleCourseSelect = (courseName: string) => {
    setSelectedCourse(courseName); // ინახავს კურსის სახელს

    // ეს ხაზი ჩამოსქროლავს ფორმამდე ს무ზად (smooth)
    formSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <FirstSection />

      {/* SecondSection-ს ვაწვდით ფუნქციას: "როცა რამეს აირჩევენ, ეს ქენი" */}
      <SecondSection onCourseSelect={handleCourseSelect} />

      <FirstBanner />
      <SectionThree />

      {/* ამ დივს ვადებთ რეფერენსს (ნიშნულს), რომ აქ ჩამოსქროლდეს */}
      <div ref={formSectionRef}>
        {/* SectionFour-ს ვაწვდით არჩეულ კურსს */}
        <SectionFour selectedCourse={selectedCourse} />
      </div>
    </>
  );
};

export default HomePage;
