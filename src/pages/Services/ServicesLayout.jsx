import { Outlet, Link } from "react-router-dom";
import ServiceNav from "./ServiceNav";
import { services } from "../../assets/services";

const ServicesLayout = () => {
  return (
    <>
      <div className="sticky top-20 z-50">
        <ServiceNav />
      </div>
      <div className="flex sticky justify-center items-center mx-4 mt-20 mb-8 h-auto max-lg:mt-22">
        <div className="flex sticky gap-4 justify-center items-start w-full h-auto max-w-400 max-lg:justify-start max-lg:gap-0">
          <div className="overflow-hidden sticky top-20 w-1/3 h-full rounded-lg max-lg:w-0">
            <div className="flex flex-col justify-start items-start space-y-2 w-full h-full max-lg:hidden">
              {services.map((service) => (
                <Link
                  className="flex justify-center items-center py-2 w-full rounded-md border hover:bg-tertiary hover:text-primary active:bg-accent"
                  key={service.id}
                  to={service.slug}
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex overflow-hidden sticky justify-center items-center w-2/3 h-full max-lg:w-full max-lg:justify-start">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesLayout;
