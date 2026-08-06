import Founder from "../../assets/CA Aryan Powle.png";
import Scrambledig from "../../components/Scrambledig";

const AboutFounder = () => {
  return (
    <div className="flex gap-4 justify-center items-start w-full h-auto my-4 max-lg:flex-col max-lg:gap-8">
      <div className="overflow-hidden order-2 space-y-4 w-1/2 h-auto rounded-lg max-lg:w-full">
        <img className="rounded-lg" src={Founder} alt="" />
      </div>
      <div className="flex order-1 flex-col justify-between items-start  w-1/2 h-auto max-lg:justify-center max-lg:w-full">
        <h2 className="h2-text mb-8">Who Is Aryan Powale?</h2>
        <p className="text-pretty text-lg">
          <span className="font-bold">Aryan Jitendra Powale</span> founded the
          firm with a vision to simplify financial management for businesses
          through trusted advisory, transparent practices, and practical
          solutions. With years of experience across taxation, compliance, and
          financial planning, he continues to help organizations build stronger
          financial foundations while fostering long-term client relationships.
        </p>

          <button className="w-full h-10 font-semibold mt-6 rounded-md border bg-tertiary text-primary">
            Learn More
          </button>

        <div className="flex w-full h-auto gap-2  mt-4">
          <div className="flex gap-2 justify-center items-center p-4 flex-col w-1/3 h-32  rounded-lg bg-tertiary text-primary">
            <Scrambledig
              value={12}
              suffix="+"
              className=" h2-text text-primary font-semibold"
            />
            <p className="text-center">Years of Experience </p>
          </div>
          <div className="flex gap-2 justify-center items-center p-4 flex-col w-1/3 h-32  rounded-lg bg-tertiary text-primary">
            <Scrambledig
              value={436}
              suffix="+"
              className=" h2-text text-primary font-semibold"
            />
            <p className="text-center">Successful Engagements </p>
          </div>
          <div className="flex gap-2 justify-center items-center p-4 flex-col w-1/3 h-32  rounded-lg bg-tertiary text-primary">
            <Scrambledig
              value={98}
              suffix="+"
              className=" h2-text text-primary font-semibold"
            />
            <p className="text-center">Businesses Advised</p>
          </div>
          <div className="flex gap-2 justify-center items-center p-4 flex-col w-1/3 h-32  rounded-lg bg-tertiary text-primary">
            <Scrambledig
              value={98}
              suffix="%"
              className=" h2-text text-primary font-semibold"
            />
            <p className="text-center">Client Retention</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFounder;
