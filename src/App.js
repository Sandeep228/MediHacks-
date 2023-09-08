import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import MentalHealthForm from "./Pages/MentalHealthForm";
import Chatbot from "./Pages/Chatbot";
import Recommendation from "./Pages/Recommendation";
import Home from "./Pages/Home";
import DoctorsNearYou from "./Pages/DoctorsNearYou";
import Joke from "./Pages/Joke";
import Contact from "./Pages/Contact";
import AboutUs from "./Pages/About";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mentalHealthCheckup" element={<MentalHealthForm />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/home" element={<Home />} /> 
          {/* <Route path="/games" element={<Games />} /> */}
          <Route path="/hearAjoke" element={<Joke />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/recommendation" element={<Recommendation />} />
          <Route path="/doctorsNearYou" element={<DoctorsNearYou />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
