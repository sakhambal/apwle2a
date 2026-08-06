import { useState, useRef, useEffect } from "react";
import logo from "../../public/Logo(maroon).svg"
import { Menu, PhoneCall, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

const nav_links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickedOutside = (event) => {
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target)
      ){
        setMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickedOutside)

    return() => {
      document.removeEventListener("mousedown", handleClickedOutside)
    }


  }, [])


  return (
    <div>
      <header className="flex fixed top-2 justify-center items-center w-full h-16 z-100">
        <div className="flex justify-between items-center pr-3 pl-4 mx-4 w-full h-14 rounded-lg shadow-xl max-w-400 bg-tertiary text-primary">
          <Link to="/" className="flex gap-2 items-center shrink-0">
            {logo && (
              <img
                src={logo}
                alt="ca aryan powale logo"
                className="block w-auto h-5.5"
              />
            )}
            <span className="font-serif text-2xl font-medium text-primary">
              CA Aryan Powale
            </span>
          </Link>
          <nav className="hidden [@media(min-width:1000px)]:flex w-fit gap-2 items-center justify-between">
            {nav_links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-2 py-1 rounded-md transition-colors text-primary hover:bg-secondary hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Link
            to={"/contactus"}
            className="hidden [@media(min-width:1000px)]:flex px-2 py-1 gap-2 font-semibold w-36 justify-center items-center rounded-md bg-primary text-tertiary hover:bg-accent hover:text-primary transition-colors"
          >
            Contact Us
            <PhoneCall size={16} strokeWidth={2.25} />
          </Link>
          <button
            className="[@media(min-width:1000px)]:hidden transition delay-400"
            aria-label="Toggle Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X size={32} color="#efefef" />
            ) : (
              <Menu size={32} color="#efefef" />
            )}
          </button>
        </div>
      </header>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
          ref={menuRef}
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            className="
      fixed z-100 [@media(min-width:1000px)]:hidden 
       top-20 w-screen rounded-2xl overflow-hidden max-w-5xl px-4"
          >
            <div className="w-full items-center rounded-2xl flex flex-col
             p-4 bg-tertiary text-primary 
            space-y-6">
            {nav_links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setMenuOpen(false)}
                className="text-primary w-full
                text-center hover:text-accent transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to={"/contactus"}
              className="flex justify-center items-center py-1 
              w-full font-semibold rounded-md transition-colors bg-primary
               text-tertiary hover:bg-accent hover:text-primary"
            >
              Contact Us
            </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
