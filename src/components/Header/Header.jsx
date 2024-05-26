import logo from "../../../public/logo.svg";
import MenuSocials from "./MenuSocials/MenuSocials";
import MenuLinks from "./MenuLinks/MenuLinks";
import { useRef } from "react";
import stylex from "@stylexjs/stylex";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const styles = stylex.create({
  header: {
    width: "100%",
    textAlign: "center",
    zIndex: "10",
    display: "flex",
    justifyContent: "center",
    position: "fixed",
    top: "0",
    height: "150px",
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
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  gapHeader: {
    height: "190px",
    width: "100%",
  },
});

export default function Header() {
  const container = useRef();

  useGSAP(
    () => {
      function handleScroll() {
        const isScrolled = window.scrollY > 30;
        gsap.to(container.current, {
          height: isScrolled ? 60 : 150,
          background: isScrolled ? "black" : "#00000011",
        });
      }

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    },
    { scope: container }
  );

  return (
    <>
      <header {...stylex.props(styles.header)} ref={container}>
        <nav {...stylex.props(styles.nav)}>
          <div {...stylex.props(styles.logoContainer)}>
            <img src={logo} alt="Link to home and logo of Avicii.com" />
          </div>
          <MenuLinks />
          <MenuSocials />
        </nav>
      </header>
      <div {...stylex.props(styles.gapHeader)}></div>
    </>
  );
}
