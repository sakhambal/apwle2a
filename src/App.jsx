import { Navigate, Route, Routes } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage";
import ServicesLayout from "./pages/Services/ServicesLayout";
import ServicesContent from "./pages/Services/ServicesContent";

const App = () => {
  return (
    <div>
      <ReactLenis
        root
        options={{
          lerp: 0.06,
          wheelMultiplier: 0.7,
          touchMultiplier: 1,
          smoothWheel: true,
        }}
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesLayout />}>
          <Route index element={<Navigate to="tax-planning" replace />} />
          <Route path=":serviceSlug" element={<ServicesContent />} />
        </Route>

        <Route path="/contactus" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
