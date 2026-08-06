import { services } from "../../assets/services";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const ServiceNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickedOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickedOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickedOutside);
    };
  }, []);
  return (
    <>
      <button
        className="[@media(min-width:1000px)]:hidden transition 
        rounded-md bg-tertiary delay-400 mx-4"
        aria-label="Toggle Menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <ChevronLeft size={32} color="#efefef" />
        ) : (
          <ChevronRight size={32} color="#efefef" />
        )}
      </button>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -40,
            }}
            className="fixed z-50 flex-col px-4 w-full max-w-5xl rounded-md top-30 max-lg:flex lg:hidden"
          >
            {" "}
            <div className="flex flex-col justify-center items-center space-y-2 w-full h-full rounded-md bg-primary">
              {services.map((service) => (
                <Link
                  onClick={() => setMenuOpen(false)}
                  className="flex justify-center items-center py-2 w-full rounded-md border hover:bg-tertiary hover:text-primary active:bg-accent"
                  key={service.id}
                  to={service.slug}
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ServiceNav;
