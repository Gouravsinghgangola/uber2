import React,  {StrictMode } from "react"; // Import React here!
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./context/UserContext.jsx";
// import CaptainContext from "./context/CaptainContext.js";
import CaptainContext from "./context/CaptainContext.jsx"

createRoot(document.getElementById("root")).render(
 <StrictMode> 
  <CaptainContext>
    <UserContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContext>
  </CaptainContext>
  </StrictMode>
);