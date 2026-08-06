const ServiceCard = ({ title, description, icon: Icon, features }) => {
  return (
    <>
      <div className="overflow-hidden p-2 w-full h-full rounded-md border transition-all duration-300 ease-in-out border-tertiary bg-primary hover:scale-95">
        <div className="flex gap-4 justify-start items-center w-full h-16 border-b text-tertiary max-lg:gap-2">
          <Icon />
          <h2 className="text-lg font-bold capitalize h-fit w-fit max-lg:text-md">
            {title}
          </h2>
        </div> 
        <p className="my-2 text-sm font-semibold text-pretty text-tertiary/60 max-lg:text-xs">
          {description}
        </p>
        <ul className="px-4 space-y-1 text-sm font-semibold list-disc text-tertiary max-lg:hidden">
          {features.map((feature, index) => (
            <li className="" key={index}>
              {feature}
            </li>
          ))}
        </ul>
        <button className="mt-2 w-full h-12 font-semibold rounded-md bg-tertiary/40 text-tertiary max-lg:text-sm">
            Learn More
        </button>
      </div>
    </>
  );
};

export default ServiceCard;
