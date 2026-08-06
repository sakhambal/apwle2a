import Contactus from "../components/Hompepage/ContactUs";
import { TEAM } from "../assets/team";

const ContactPage = () => {
  return (
    <div className="space-y-4 mt-20 max-lg:h-auto">
      <>
        <section className="mx-4 my-8 max-w-8xl sm:py-22">
          <div className="mb-4 text-left">
            <h2 className="h2-text text-tertiary tracking-[-0.01em]">
              Our Team
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m) => (
              <div
                key={m.id}
                className="border border-[#E4E0D5] rounded-lg p-4 bg-secondary hover:border-accent hover:-translate-y-0.75 transition-all duration-200"
              >
                <div className="flex gap-4 justify-start items-baseline mb-2">
                  <span className="w-13 h-13 rounded-md bg-accent text-tertiary flex items-center justify-center font-[serif] text-[17px] font-medium shadow-[0_0_0_1px_#E4E0D5]">
                    {m.initials}
                  </span>
                  <h3 className="font-[serif] font-medium text-lg text-primary">
                    {m.name}
                  </h3>
                </div>
                <p className="text-[13px] font-semibold text-accent mb-1">
                  {m.role}
                </p>
                <p className="text-[13px] text-primary leading-relaxed">
                  {m.mail}
                </p>
                <p className="text-[13px] text-primary leading-relaxed">
                  {m.num}
                </p>
              </div>
            ))}
          </div>
        </section>
      </>
      <div className="w-full">
        <Contactus />
      </div>
    </div>
  );
};

export default ContactPage;
