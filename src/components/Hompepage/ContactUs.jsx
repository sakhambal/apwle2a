import Form from "../Form";
import Map from "../Map";

const Contactus = () => {
  return (
    <div className="flex justify-center items-center mx-4 mt-8 h-[125vh] bg-primary max-lg:h-[160vh] max-sm:h-[200vh] max-lg:mt-0">
      <div className="flex w-full h-fit max-lg:flex-col max-lg:gap-2">
        <div className="pr-8 w-1/2 h-full max-lg:w-full max-lg:pr-0">
          <h2 className="mb-8 h2-text">Contact Us</h2>
          <Form />
        </div>
        <div className="w-1/2 h-f  max-lg:w-full max-lg:h-[80vh]">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Contactus;
