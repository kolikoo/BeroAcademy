import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom"; // <--- ეს დაამატე

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      {" "}
      {/* <--- აი აქ ჩასვი ეს */}
      <App />
    </BrowserRouter>{" "}
    {/* <--- და აქ დახურე */}
  </React.StrictMode>
);
