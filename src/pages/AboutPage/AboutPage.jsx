import Office from "../../assets/About(b).png";
import AboutFounder from "./AboutFounder";

const AboutPage = () => {
  return (
    <div className="flex flex-col justify-between items-center mx-4 mt-20 h-auto">
      <div className="flex gap-4 justify-center items-center w-full h-auto max-lg:justify-start max-lg:flex-col max-w-8xl">
        <div className="overflow-hidden w-1/2 h-full rounded-2xl max-lg:h-1/2 max-lg:w-full bg-prime-1 max-md:h-48">
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
        </div>
      </div>
      <AboutFounder />
    </div>
  );
};

export default AboutPage;

// | Year      | Milestone                                                                                              |
// | --------- | ------------------------------------------------------------------------------------------------------ |
// | **2013**  | Firm established with a vision to provide reliable financial advisory services.                        |
// | **2017**  | Expanded client portfolio across multiple industries and business sectors.                             |
// | **2021**  | Introduced comprehensive GST, audit, and compliance solutions for growing businesses.                  |
// | **Today** | Trusted by businesses and professionals for taxation, accounting, advisory, and regulatory compliance. |

// //

// Our Core Values
// Integrity

// We uphold the highest ethical standards and ensure complete transparency in every engagement.

// Accuracy

// Every financial decision deserves precision. We pay attention to the smallest details so our clients can move forward with confidence.

// Client First

// Every business is unique. We provide practical solutions tailored to each client's objectives rather than one-size-fits-all advice.

// Long-Term Partnership

// We believe in growing alongside our clients by providing consistent guidance at every stage of their business journey.

// //
// Mission

// To empower businesses and individuals with reliable financial guidance, transparent advisory, and practical solutions that foster sustainable growth.

// //
// Vision

// To become a trusted financial partner for businesses by delivering professional excellence, embracing innovation, and building lasting client relationships.

// //


