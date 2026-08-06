// import { useEffect, useRef, useState } from "react";
import * as MarqueeModule from "react-fast-marquee";
import { testimonials } from "../../assets/data";
import TestimonialCard from "./TestimonialCard";
// import { motion, useAnimationFrame, useMotionValue } from "motion/react";

const Testimonials = () => {
  // const [contentWidth, setContentWidth] = useState(0);
  // const speed = 0.1;

  // useEffect(() => {
  //     if(!marqueeRef.current)return;

  //     setContentWidth(marqueeRef.current.scrollWidth / 2)
  // }, [])

  // const marqueeRef = useRef(null)
  // const x = useMotionValue(0);

  // useAnimationFrame((t, delta) => {
  //     let next = x.get() - delta * speed;

  //     if(next <= -contentWidth / 2){
  //         next = 0
  //     }

  //     x.set(next)
  // })

  console.log(MarqueeModule);
  console.log(TestimonialCard);
  console.log(testimonials);

  return (
    <div className="h-fit pt-32 mx-4 ">
      <h2 className="h2-text mb-8">Our Clients Words...</h2>
    <div className="overflow-hidden h-[60vh] space-y-8">
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
