import logo from "../../../public/logo.svg";
import MenuSocials from "./MenuSocials/MenuSocials";
import MenuLinks from "./MenuLinks/MenuLinks";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import stylex from "@stylexjs/stylex";

const styles = stylex.create({
  header: {
    width: "100%",
    textAlign: "center",
    zIndex: "10",
    display: "flex",
    justifyContent: "center",
    position: "sticky",
    top: "0",
    height: "12rem",
    marginBottom: "2.5rem",
  },
  nav: {
    width: "93%",
    display: "grid",
    gridTemplateColumns: "1fr 4.5fr 1.2fr",
    alignItems: "center",
    fontWeight: "600",
    fontStretch: "extra-expanded",
    MozOsxFontSmoothing: "grayscale",
    WebkitFontSmoothing: "antialiased",
    textRendering: "optimizeSpeed",
  },
});

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
        {...stylex.props(styles.header)}
        animate={{
          height: scrolled ? 60 : 150,
          backgroundColor: scrolled ? "#000000" : "#0000000",
        }}
      >
        <nav {...stylex.props(styles.nav)}>
          <div className="flex items-center">
            <img src={logo} alt="Link to home and logo of Avicii.com" />
          </div>
          <MenuLinks />
          <MenuSocials />
        </nav>
      </motion.header>
    </>
  );
}
