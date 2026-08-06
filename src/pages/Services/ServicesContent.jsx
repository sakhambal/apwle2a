import { useParams } from "react-router-dom";
import { services } from "../../assets/services";



const ServicesContent = () => {
  const { serviceSlug } = useParams();

  const service = services.find((item) => item.slug === serviceSlug);

  

  return (
    <div className="flex flex-col gap-4 justify-start items-start p-4 w-full h-full rounded-lg border">
      <h2 className="h1-text">{service.title}</h2>
      <div className="h-0.5 w-full bg-tertiary/40"></div>
      <ul className="px-6 font-semibold list-disc text-gray-700">
        {service.benefits.map((benefits, index) => (
          <li key={index}>{benefits}</li>
        ))}
        
        </ul>
      <div className="h-0.5 w-full bg-tertiary/40"></div>
      <p className="service-content-text">{service.description.intro}</p>
      <p className="service-content-text">{service.description.body1}</p>
      <p className="service-content-text">{service.description.body2}</p>
    </div>
  );
};

export default ServicesContent;
