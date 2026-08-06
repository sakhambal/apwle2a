import { TEAM } from "../../assets/team";

const Teams = () => {
  return (
    <div>
      <section className="py-16 mx-4 max-w-8xl sm:py-22">
        <div className="mb-14 text-left">
          <h2 className="h1-text text-tertiary tracking-[-0.01em]">
            Our Team
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m) => (
            <div
              key={m.id}
              className="border border-[#E4E0D5] rounded-lg p-4 bg-secondary hover:border-accent hover:-translate-y-0.75 transition-all duration-200"
            >
              <div className="flex gap-4 justify-start items-baseline mb-4">
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
              <p className="font-['IBM_Plex_Mono',monospace] text-[11px] text-primary/60 mb-3">
                {m.creds}
              </p>
              <p className="text-[13px] text-primary leading-relaxed">
                {m.focus}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Teams;
