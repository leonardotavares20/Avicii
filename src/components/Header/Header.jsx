import logo from "../../../public/logo.svg";
import MenuSocials from "./MenuSocials/MenuSocials";
import MenuLinks from "./MenuLinks/MenuLinks";
import { useState, useEffect } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const isScrolled = window.scrollY > 30;
      setScrolled(isScrolled);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.header
        animate={{
          height: scrolled ? 60 : 150,
          backgroundColor: scrolled ? "#000000" : "#0000001a",
        }}
        className="w-full text-center z-10 flex justify-center fixed top-0 h-48"
      >
        <nav className="w-11/12 grid grid-cols-navbar justify-around items-center">
          <div className=" h-8 flex items-center">
            <img src={logo} alt="Link to home and logo of Avicii.com" />
          </div>
          <MenuLinks />
          <MenuSocials />
        </nav>
      </motion.header>
      <div className="h-header"></div>
    </>
  );
}
