import { MapPin, Mail, PhoneCall } from "lucide-react";
import logo from "/Logo(light).svg";

const Footer = () => {
  return (
    <footer className="relative bg-tertiary text-primary/80 px-5 sm:px-8 pt-16 overflow-hidden">
      <div className="max-w-295 px-10 pt-10 bg-tertiary w-full mx-auto relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-8 pb-12">
        <div>
          <div className="flex items-center gap-2.5">
            {logo && (
              <img
                src={logo}
                alt="CA India logo"
                className="h-6 w-auto block "
              />
            )}
            <span className="font-serif font-medium text-3xl text-primary">
              Aryan Powale
            </span>
          </div>
          <p className="text-[13px] leading-relaxed mt-3.5 max-w-65">
            Expert financial solutions and chartered accounting services for
            businesses and individuals.
          </p>
          <p className="flex items-center gap-2 text-[13px] font-bold leading-relaxed mt-3.5 max-w-65">
            <Mail size={14} /> ca@powaleAryan.com
          </p>
          <p className="flex items-center gap-2 text-[13px] font-bold leading-relaxed mt-3.5 max-w-65">
            <PhoneCall size={14} strokeWidth={2}/> +11 223 344 556
          </p>
          <p className="flex items-center gap-2 text-[13px] font-bold leading-relaxed mt-3.5 max-w-65">
            <MapPin size={14} /> 48, JSS Road, Mumbai
          </p>
        </div>

        <div >
          <h4 className="font-sans  text-md font-bold tracking-[0.08em] uppercase text-primary mb-4">
            Services
          </h4>
          <ul className="flex flex-col font-semibold gap-2.5 text-[13px]">
            <li>Tax Planning &amp; Preparation</li>
            <li>Financial Statement Auditing</li>
            <li>Business Advisory Services</li>
            <li>Financial Planning</li>
            <li>Risk Management</li>
            <li>Payroll &amp; HR Compliance</li>
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-md font-bold tracking-[0.08em] uppercase text-primary mb-4">
            Industries
          </h4>
          <ul className="flex font-semibold flex-col gap-2.5 text-[13px]">
            <li>Technology</li>
            <li>Construction</li>
            <li>Healthcare</li>
            <li>Manufacturing</li>
            <li>Professional Services</li>
            <li>Retail &amp; Real Estate</li>
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-md font-bold tracking-[0.08em] uppercase text-primary mb-4">
            Connect
          </h4>
          <ul className="flex flex-col gap-2.5 text-[13px]">
            <li>
              <a
                href="#"
                className="flex items-center gap-2 font-semibold hover:text-white transition-colors"
              >
                LinkedIn Profile
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2  font-semibold hover:text-white transition-colors"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="px-10 w-full bg-tertiary relative z-10 border-t border-white/10 py-5.5 max-w-295 mx-auto flex flex-col sm:flex-row justify-between gap-5 text-xs text-white/40">
        <p>
          &copy; 2026 Aryan Powale, Chartered Accountants. All rights reserved.
        </p>
        <p className="max-w-160 sm:text-right">
          Licensed Chartered Accountant &bull; Member of Institute of Chartered
          Accountants &bull; Professional Indemnity Insurance Coverage &bull;
          All client information treated with strict confidentiality
        </p>
      </div>
    </footer>
  );
};

export default Footer;
