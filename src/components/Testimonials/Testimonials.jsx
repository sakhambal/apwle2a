import * as MarqueeModule from "react-fast-marquee";
import { testimonials } from "../../assets/data";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {


  console.log(MarqueeModule);
  console.log(TestimonialCard);
  console.log(testimonials);

  return (
    <div className="h-fit pt-32 mx-4 ">
      <h2 className="h2-text mb-8">Our Clients Words...</h2>
    <div className="overflow-hidden h-auto space-y-8">
      <div className="w-max flex gap-8 justify-center items-center animate-marquee hover:[animation-play-state:paused] transition-all ease-in-out">
        {[...testimonials, ...testimonials].map((item, index) => (
          <TestimonialCard
            key={`${item.id}-${index}`}
            name={item.name}
            company={item.company}
            review={item.review}
            designation={item.designation}
            className="shrink-0"
          />
        ))}
        
      </div>
      <div className="w-max flex gap-8 justify-center items-center animate-marquee-reverse hover:[animation-play-state:paused] transition-all ease-in-out">
        {[...testimonials, ...testimonials].map((item, index) => (
          <TestimonialCard
            key={`${item.id}-${index}`}
            name={item.name}
            company={item.company}
            review={item.review}
            designation={item.designation}
            className="shrink-0"
          />
        ))}
        
      </div>
    </div>
    </div>
  );
};

export default Testimonials;
