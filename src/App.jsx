import react from "react";
import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import { AppProvider } from "./context";
import PatientAdmission from "./Pages/PateintAdmission/PatientAdmission";
import Signup from "./Pages/Signup/Signup";

function App() {
  return (
    <AppProvider>
     <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Home" element={<Home />}/>
          <Route path="/PatientAdmission" element={<PatientAdmission />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </AppProvider>
  );
}
export default App;
