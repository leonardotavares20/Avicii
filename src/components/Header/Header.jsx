import logo from "../../../public/logo.svg";
import MenuSocials from "./MenuSocials/MenuSocials";
import MenuLinks from "./MenuLinks/MenuLinks";
import { useState, useEffect } from "react";
import gsap from "gsap";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    gsap.to(".header", {
      height: scrolled ? 60 : 100,
      duration: 0.3,
      delay: 0.1,
    });
  }, [scrolled]);

  return (
    <header className="w-full flex justify-center fixed top-0 header h-36">
      <nav className="w-11/12 grid grid-cols-navbar justify-around items-center">
        <div className=" h-8 flex items-center">
          <img src={logo} alt="Link to home and logo of Avicii.com" />
        </div>
        <MenuLinks />
        <MenuSocials />
      </nav>
    </header>
  );
}
