import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./mainComponents/footer/footer";
import Header from "./mainComponents/header/header";
import HomePage from "./pages/homePage/homePage";
import CourseDetails from "./pages/CourseDetailsPage/courseDetailPage";
// დარწმუნდი რომ ეს მისამართი სწორია (სადაც შექმენი წინა ნაბიჯში CourseDetails.tsx)


function App() {
  return (
    <>
      {/* ჰედერი ყველგან ჩანს */}
      <Header />

      {/* Routes განსაზღვრავს რომელი გვერდი გამოჩნდეს */}
      <Routes>
        {/* მთავარი გვერდი */}
        <Route path="/" element={<HomePage />} />

        {/* კურსის დეტალები (დინამიური ლინკი) */}
        <Route path="/course/:courseTag" element={<CourseDetails />} />
      </Routes>

      {/* ფუტერი ყველგან ჩანს */}
      <Footer />
    </>
  );
}

export default App;
