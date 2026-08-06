import AboutUs from "../components/Hompepage/AboutUs";
import CTA from "../components/Hompepage/CTA";
import Hero from "../components/Hompepage/Hero";
import Services from "../components/Hompepage/Services";
import Teams from "../components/Hompepage/Team";
import Testimonials from "../components/Testimonials/Testimonials";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Testimonials />
      <Services />
      <Teams />
      <AboutUs/>
      <CTA />
    </div>
  );
};

export default Homepage;
