import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className="w-full bg-[#0F1115] text-white py-16 md:py-24 px-6 md:px-12 relative overflow-hidden">
      {/* უკანა ფონის დეკორაცია (სურვილისამებრ) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#4FFFB0] opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* სათაური */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#4FFFB0] mb-8 md:mb-12 border-l-4 border-[#4FFFB0] pl-6">
          ჩვენ შესახებ
        </h2>

        {/* ტექსტები */}
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-medium text-justify md:text-left">
          <p>
            ბეროს აკადემია შეიქმნა ერთადერთი მიზნით - იყოს საუკეთესო გზამკვლევი
            იმ ადამიანებისთვის, ვისაც ფინანსური სტაბილურობის მიღწევა სურს. ეს კი
            მხოლოდ იმ განათლებით, ტრენინგებითა და მასტერკლასებით არის
            შესაძლებელი, რომელსაც პრაქტიკაში გამოვიყენებთ.
          </p>

          <p>
            ფინანსური თავისუფლება ფუფუნება არ არის - ეს არის არჩევანი იცხოვრო
            შენი წესებით და გამოიყენო დრო ისე, როგორც თავად გსურს. ამის მიღწევა
            ყველა ადამიანს შეუძლია, როდესაც თვითგანვითარების სწორ კურსს ირჩევს.
          </p>

          <p className="border-l-2 border-gray-700 pl-4 py-2 italic text-white/90">
            სწორედ ამას ემსახურება ბეროს აკადემია. ეს არის სივრცე, სადაც
            ადამიანები იღებენ ცოდნასა და პრაქტიკულ უნარებს სპეციალურად შექმნილი
            კურსების მეშვეობით და ერთიანდებიან ჩვენი სლოგანის გარშემო -{" "}
            <span className="text-[#4FFFB0] not-italic font-bold">
              Master Skills to Unlock Freedom.
            </span>
          </p>

          <p>
            მთავარია გვესმოდეს, რომ დასაწყებად საუკეთესო დრო ათი წლის წინ იყო,
            მეორე საუკეთესო დრო კი სწორედ დღეს არის - დღეს, როდესაც სწორი კურსის
            არჩევით შეგიძლია პირველი ნაბიჯის გადადგმა ფინანსური თავისუფლებისკენ.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
