import RemeberigTitle from "/public/title-remebering.svg";
import stylex from "@stylexjs/stylex";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/src/ScrollTrigger";

const styles = stylex.create({
  container: {
    width: "100%",
    display: "grid",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: "8rem",
  },
  containerText: {
    maxWidth: "750px",
    display: "flex",
    gap: "1rem",
    flexDirection: "column",
    alignItems: "center",
  },
  titleImage: {
    width: "75%",
    marginBottom: "0.5rem",
  },
  text: {
    fontSize: "1rem",
    lineHeight: "1.75rem",
    padding: "0",
    letterSpacing: "2px",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    fontWeight: "500",
  },
});

export default function InMemory() {
  const container = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: "#inMemory",
        once: true,
        onEnter: () => {
          gsap.fromTo(
            "#inMemory",
            { opacity: 0 },
            { duration: 2.5, opacity: 1 }
          );
        },
      });
    },
    { scope: container }
  );

  return (
    <>
      <div
        ref={container}
        className="inMemory"
        {...stylex.props(styles.container)}
      >
        <div id="inMemory" {...stylex.props(styles.containerText)}>
          <img
            {...stylex.props(styles.titleImage)}
            src={RemeberigTitle}
            alt="Remembering Tim Bergling"
          />
          <p {...stylex.props(styles.text)}>
            Tim created music that brought people together with timeless
            memories from all over the world.
          </p>
          <p {...stylex.props(styles.text)}>
            This space was created for you to share your memories and let the
            world know what Avicii meant to you.
          </p>
          <p {...stylex.props(styles.text)}>
            His music and your memories are forever.
          </p>
        </div>
      </div>
    </>
  );
}
