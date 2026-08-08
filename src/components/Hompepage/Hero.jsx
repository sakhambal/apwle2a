import hero from "../../assets/Main.jpg";
import Scrambledig from "../Scrambledig";

const Hero = () => {
  return (
    <div className="h-auto max-h-220 w-full bg-primary flex mt-20 justify-center ">
      <div className=" max-w-400 w-full h-auto max-h-220 mx-4  gap-4 flex max-md:flex-col-reverse max-md:items-center ">
        <div className="flex flex-col gap-4 w-1/2 rounded-2xl h-auto max-h-220 max-md:w-full">
          {/**left side */}
          <div className="overflow-hidden h-2/3 rounded-lg border max-md:h-48 max-lg:h-76">
            <img src={hero} className="object-cover" alt="" />
          </div>
          <div className="flex gap-2 items-center h-1/3 rounded-2xl max-md:h-28">
          <div className="flex justify-center items-center flex-col w-1/3 h-full px-2 rounded-lg bg-tertiary text-primary">
            <Scrambledig value={42} suffix="+" className="mb-2  max-lg:text-3xl h2-text text-accent normal-case font-semibold"/>
            <p className="font-semibold text-center max-lg:text-xs">Clients Managed</p>
          </div>
          <div className="flex justify-center items-center flex-col w-1/3 h-full px-2 rounded-lg bg-tertiary text-primary">
            <Scrambledig value={12} suffix=" yrs" className="mb-2 max-lg:text-3xl  h2-text text-accent normal-case font-semibold"/>
            <p className="font-semibold text-center max-lg:text-xs">Serving in the Industry</p>
          </div>
          <div className="flex justify-center items-center flex-col w-1/3 h-full px-2 rounded-lg bg-tertiary text-primary">
            <Scrambledig value={412} suffix="cr+" className="mb-2 max-lg:text-3xl  h2-text text-accent normal-case font-semibold"/>
            <p className="font-semibold text-center max-lg:text-xs">Asset Managed till now</p>
          </div>
          </div>
        </div>
        {/**right side */}
        <div className="overflow-hidden w-1/2  h-auto max-h-220 max-md:w-full ">
          <div className="flex flex-col justify-between max-lg:mb-8 items-center px-2 h-full text-right max-md:p-0">
            <h1 className="h1-text">
              Turning Financial Complexity <br /> into Business Opportunties
            </h1>
            <div>
              <p className="mb-8 text-lg font-semibold text-tertiary max-lg:text-sm max-md:text-sm max-md:text-left max-md:mb-4">
                Whether you're a startup, entrepreneur, or established business,
                we provide end-to-end accounting, taxation, ensure regulatory
                compliance, optimize tax efficiency, and support sustainable
                business growth.
              </p>
              <div className="flex gap-4 w-full max-md:text-sm max-lg:flex-col max-sm:text-xs max-sm:gap-2">
                <button className="w-full h-10 font-semibold rounded-md border bg-tertiary text-primary">
                  Schedule Consultation
                </button>
                <button className="w-full h-10 font-semibold rounded-md border">
                  Our Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
