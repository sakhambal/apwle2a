import ServiceCard from "./ServiceCard";
import { services } from "../../assets/data";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="flex items-center mx-4 mt-8 h-[125vh] justify-start bg-primary max-lg:h-[140vh] max-lg:mt-0 max-sm:h-[180vh]">
      <div className="flex w-full h-fit max-w-400 max-lg:flex-col">
        <div className="mb-4 w-1/3 h-full max-lg:w-full">
          <h1 className="h2-text">
            Financial Solutions for Growing Businesses
          </h1>
          <p className="my-4">
            From tax planning to business advisory, we help you stay compliant,
            reduce risks, and make smarter financial decisions.
          </p>
          <Link
            to={"/services"}
            className="justify-center items-center px-4 py-2 my-4 w-36 font-semibold rounded-md text-tertiary bg-accent"
          >
            Explore our Services
          </Link>
        </div>
        <div className="flex flex-wrap justify-center items-center w-2/3 h-full max-lg:w-full bg-primary">
          <div className="grid grid-cols-3 gap-2 py-2 h-full max-lg:grid-cols-2">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
