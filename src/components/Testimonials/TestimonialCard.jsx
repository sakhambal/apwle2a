const TestimonialCard = ({ name, company, review, designation }) => {
  return (
    <div className="p-4 mr-4 w-96 rounded-lg border shrink-0 hover:bg-accent
     hover:text-tertiary transition-all ease-in-out">
      <p className="italic text-secondary max-lg:text-sm">"{review}"</p>
      <div className="mt-2 flex items-baseline gap-2">
        <h2 className="text-lg max-lg:text-sm font-semibold">{name}</h2>( 
        <p className="text-sm max-lg:text-xs font-semibold text-tertiary">{company},</p>
        <p className="text-sm max-lg:text-xs font-semibold text-tertiary">{designation}</p>)
      </div>
    </div>
  );
};

export default TestimonialCard;
