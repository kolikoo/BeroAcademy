export interface Course {
  id: number;
  tag: string;
  hours: string;
  title: string; // <--- ეს დავამატეთ (titleKey-ს ნაცვლად ან პარალელურად)
  subtitle?: string; // <--- ესეც დავამატეთ
  description: string; // <--- descKey-ს ნაცვლად
  fullDescription: React.ReactNode; // <--- ესეც დავამატეთ, რადგან JSX-ს აბრუნებ
  borderColor: string;
  shadowColor: string;
  circleColor: string;
  tagBg: string;
  isDisabled: boolean;
  features?: string[]; // <--- ეს SecondSection-ისთვის
  image?: string; // <--- ესეც SecondSection-ისთვის
  price?: string; // <--- ესეც
  bonus?: string; // <--- ესეც
  startDate?: string;
  schedule?: string;
  location?: string;
  descKey?: string;
  mapLink?: string;
  lectore?: string;
  oldPrice?: string;
  time?:string;
}

export const coursesData: Course[] = [
  {
    id: 1,
    tag: "საფონდო ბირჟაზე ინვესტიცია",
    tagBg: "bg-green-100 text-green-700",
    hours: "8 ლექცია",

    // სათაური და ქვესათაური ცალკე (ჰედერის ნაწილისთვის)
    title: "ინვესტიცია საფონდო ბირჟაზე",
    subtitle: "გამოიმუშავე ფული, მაშინ როცა გძინავს",
    lectore: "გიორგი ბერუაშვილი",
    startDate: "2 მარტი",
    schedule: "ორშაბათი/ხუთშაბათი",
    location: "Stamba • D Block",
    mapLink: "https://maps.app.goo.gl/hG5Z2k4x6x1Xy5y56",

    description:
      "ისწავლე საუკეთესო საინვესტიციო კომპანიების მოძიება და საკუთარი კაპიტალის გაზრდა.",

    // აქ არის „ვორდის“ სტილში დალაგებული ტექსტი
    fullDescription: `კურსის მიზანია კურსდამთავრებულებმა შეძლოთ საუკეთესო საინვესტიციო კომპანიების მოძიება და საკუთარი კაპიტალის გაზრდა.
    
ამ მიზნის მისაღწევად თქვენ გაივლით ერთთვიან ინტენსიურ თეორიულ და პრაქტიკულ ტრენინგებს ინვესტიციების შესახებ. კურსის განმავლობაში თქვენ შეძლებთ:

• გლობალური შესაძლებლობების აღმოჩენას: ისწავლით, როგორ მოიძიოთ საინტერესო კომპანიები მსოფლიო მასშტაბით.
• შეფასებას: გამოთვალოთ კომპანიის აქციის რეალური ღირებულება.
• ფინანსურ ანალიზს: სწორად წაიკითხოთ და გააანალიზოთ კომპანიების ფინანსური ანგარიშგებები.
• პრაქტიკულ ვაჭრობას: გაიაროთ რეგისტრაცია საფონდო ბირჟაზე და განახორციელოთ პირველი ინვესტიცია.
• შემოსავლის გენერირებას: რეალურ ქეისებზე დაყრდნობით ნახოთ, როგორ მუშავდება ფული აქციებით.

პრაქტიკული პროექტი:
სწავლების დასკვნითი ეტაპი ეთმობა მიღებული ცოდნის პრაქტიკაში რეალიზებას. სტუდენტები ამზადებენ ინდივიდუალურ პროექტებს და სფეროს პროფესიონალებთან ერთად აანალიზებენ რეალურ კომპანიებს. ჯგუფი ერთობლივად იღებს გადაწყვეტილებას - წარმოადგენს თუ არა განხილული კომპანია კარგ საინვესტიციო შესაძლებლობას.

Life-time მხარდაჭერა და „საინვესტიციო საბჭო“:
კურსის დასრულება მხოლოდ დასაწყისია. თქვენ ხდებით დახურული საკომუნიკაციო ჩატის წევრი, რომელიც „საინვესტიციო საბჭოს“ პრინციპით მუშაობს. თქვენ გექნებათ სამუდამო წვდომა აღნიშნულ პლატფორმაზე, სადაც შეძლებთ:

• გქონდეთ კომუნიკაცია ლექტორთან, დაუსვათ შეკითხვები და მიიღოთ პასუხები.
• კურსელებთან ერთად განიხილოთ სხვადასხვა საინვესტიციო შესაძლებლობა.
• ლექტორთან და კურსელებთან ერთად განიხილოთ ბაზრის ტენდენციები, ერთად გაანალიზოთ კონკრეტული კომპანიის აქციები და მიიღოთ რეკომენდაციები.

კურსდამთავრებულებს გადმოგეცემათ ორენოვანი სერთიფიკატი!`,

    descKey: "investment_desc",
    borderColor: "hover:border-[#00CC87]",
    shadowColor: "hover:shadow-[8px_8px_0px_#00CC87]",
    circleColor: "bg-[#00CC87]",
    isDisabled: false,
    time: "19:00",
    image:
      "https://images.unsplash.com/photo-1611974765270-ca1258634369?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    price: "499 ₾",
    oldPrice: "625 ₾",
    features: [
      "გლობალური ბაზრები",
      "აქციების შეფასება",
      "ფინანსური ანალიზი",
      "პრაქტიკული ვაჭრობა",
    ],
    bonus: "Life-time მხარდაჭერა",
  },
  {
    id: 2,
    tag: "სოციალური მედია ბიზნესისთვის",
    hours: "~200 hours",
    title: "სოციალური მედია ბიზნესისთვის",
    description: "თანამედროვე ვებ ინტერფეისები",
    fullDescription: "სოციალური მედია ბიზნესისთვის...",
    borderColor: "hover:border-[#61DAFB]",
    shadowColor: "hover:shadow-[8px_8px_0px_#61DAFB]",
    circleColor: "bg-[#61DAFB]",
    tagBg: "bg-blue-100 text-blue-700",
    isDisabled: true,
    image: "https://via.placeholder.com/300",
    price: "499 ₾",
    oldPrice: "625 ₾",
    features: ["Components", "Hooks", "Redux"],
    bonus: "პორტფოლიო",
  },
  {
    id: 3,
    tag: "ემოციური ინტელექტი",
    hours: "~35 hours",
    title: "ემოციური ინტელექტი",

    description: "თანამედროვე ვებ ინტერფეისები",
    fullDescription: "ემოციური ინტელექტი",
    borderColor: "hover:border-[#61DAFB]",
    shadowColor: "hover:shadow-[8px_8px_0px_#61DAFB]",
    circleColor: "bg-[#61DAFB]",
    tagBg: "bg-blue-100 text-blue-700",
    isDisabled: true,
    image: "https://via.placeholder.com/300",
    price: "600 ₾",
    features: ["Components", "Hooks", "Redux"],
    bonus: "პორტფოლიო",
  },
  {
    id: 4,
    tag: "ხელოვნური ინტელექტი ბიზნესისთვის",
    hours: "~35 hours",
    title: "ხელოვნური ინტელექტი ბიზნესისთვის",
    description: "ხელოვნური ინტელექტი ბიზნესისთვის",
    fullDescription: "ხელოვნური ინტელექტი ბიზნესისთვის...",
    borderColor: "hover:border-[#61DAFB]",
    shadowColor: "hover:shadow-[8px_8px_0px_#61DAFB]",
    circleColor: "bg-[#61DAFB]",
    tagBg: "bg-blue-100 text-blue-700",
    isDisabled: true,
    image: "https://via.placeholder.com/300",
    price: "600 ₾",
    features: ["Components", "Hooks", "Redux"],
    bonus: "პორტფოლიო",
  },
  {
    id: 5,
    tag: "როგორ შევქმნათ სტარტაპი",
    hours: "~153 hours",
    title: "როგორ შევქმნათ სტარტაპი",
    description: "თანამედროვე ვებ ინტერფეისები",
    fullDescription: "როგორ შევქმნათ სტარტაპი...",
    borderColor: "hover:border-[#61DAFB]",
    shadowColor: "hover:shadow-[8px_8px_0px_#61DAFB]",
    circleColor: "bg-[#61DAFB]",
    tagBg: "bg-blue-100 text-blue-700",
    isDisabled: true,
    image: "https://via.placeholder.com/300",
    price: "600 ₾",
    features: ["Components", "Hooks", "Redux"],
    bonus: "პორტფოლიო",
  },
  {
    id: 6,
    tag: "გაყიდვების ხელოვნება",
    hours: "~245 hours",
    title: "გაყიდვების ხელოვნება",
    description: "გაყიდვების ხელოვნება",
    fullDescription: "გაყიდვების ხელოვნება...",
    borderColor: "hover:border-[#61DAFB]",
    shadowColor: "hover:shadow-[8px_8px_0px_#61DAFB]",
    circleColor: "bg-[#61DAFB]",
    tagBg: "bg-blue-100 text-blue-700",
    isDisabled: true,
    image: "https://via.placeholder.com/300",
    price: "600 ₾",
    features: ["Components", "Hooks", "Redux"],
    bonus: "პორტფოლიო",
  },
  // ... სხვა კურსები
];
