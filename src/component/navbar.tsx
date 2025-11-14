import logo from "./assets/logo.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1117) {
        setIsBlurred(true);
      } else {
        setIsBlurred(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`container bg-[#08242a56] fixed top-0 left-1/2 -translate-x-1/2 z-50 
            ${isBlurred ? "backdrop-blur-sm" : ""}`}
    >
      <div className="flex justify-between items-center h-[5.3rem] xl:ml-[135px] lg:ml-[40px] md:ml-[33px] ">
        <img src={logo} alt="Logo" className="xl:w-[3.8rem] h-[4.21rem]" />

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-3xl focus:outline-none"
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul
          className="hidden md:flex gap-[2.69rem] xl:text-lg font-bold mr-8"
          style={{ fontFamily: "merriweather" }}
        >
          <li>
            <Link to="/" className="text-white hover:text-[#FFC60A]">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-[#FFC60A]">
              ABOUT US
            </Link>
          </li>
          <li>
            <Link to="/packages" className="text-white hover:text-[#FFC60A]">
              PACKAGES
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-[#FFC60A]">
              CONTACT US
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Animated Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 12 }}
            className="md:hidden bg-[#08242a8f] backdrop-blur-sm w-full h-[50vh] absolute left-0 top-0 py-5 z-40"
          >
            {/* Close Icon */}
            <div className="flex justify-end px-5 pb-3">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white text-3xl focus:outline-none"
              >
                ✖
              </button>
            </div>

            <ul
              className="flex flex-col items-center gap-8 text-lg font-bold"
              style={{ fontFamily: "merriweather" }}
            >
              <li>
                <Link
                  onClick={() => setIsOpen(false)}
                  to="/"
                  className="text-white hover:text-[#FFC60A]"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setIsOpen(false)}
                  to="/about"
                  className="text-white hover:text-[#FFC60A]"
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setIsOpen(false)}
                  to="/packages"
                  className="text-white hover:text-[#FFC60A]"
                >
                  PACKAGES
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setIsOpen(false)}
                  to="/contact"
                  className="text-white hover:text-[#FFC60A]"
                >
                  CONTACT US
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
