import Office from "../../assets/About(b).png";

const AboutUs = () => {
  return (
    <div className="flex justify-center items-center pb-4 mx-4 my-8 h-auto max-lg:h-auto max-lg:pb-0">
      <div className="flex gap-4 justify-center items-center w-full h-full  max-lg:justify-start max-lg:flex-col max-w-8xl">
        <div className="overflow-hidden w-1/2 h-full rounded-2xl max-lg:h-1/2 max-lg:w-full">
          <img className="object-cover" src={Office} alt="" />
        </div>
        <div className="flex flex-col justify-between items-end w-1/2 h-full max-lg:justify-center max-lg:h-1/2 max-lg:w-full">
          <div>
            <h2 className="mb-4 text-right text-pretty h2-text max-lg:text-left">
              Building Financial Confidence Since Year 2013
            </h2>
            <p className="text-lg font-semibold text-right text-pretty max-lg:text-justify max-lg:mb-4 max-lg:text-sm">
              For over a decade, Aryan Powale Associates LLP has been helping
              businesses, entrepreneurs, and professionals navigate taxation,
              compliance, accounting, and financial planning with confidence. We
              believe that financial advisory is more than filing returns or
              maintaining books. Building long-term relationships, minimizing
              risks, and enabling informed business decisions. Our team combines
              technical expertise with a practical understanding of business
              challenges to deliver solutions that create measurable value.
              Whether you're a startup, an SME, or an established enterprise,
              our goal is to simplify financial management so you can focus on
              growing your business and building relationships.
            </p>
          </div>

          <button className="w-56 h-10 font-semibold rounded-md max-lg:w-full max-sm:text-xs max-md:text-sm bg-accent text-tertiary">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
