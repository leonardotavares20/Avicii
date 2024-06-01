import WorldMap from "/public/worldmap.jpeg";
import * as stylex from "@stylexjs/stylex";
import { ScrollTrigger } from "gsap/src/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const styles = stylex.create({
  container: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "1057px",
  },
  containerImage: {
    position: "absolute",
    width: "99vw",
    height: "100%",
    zIndex: "-1",
  },
  button: {
    background: "black",
    fontWeight: "600",
    fontSize: "1.12rem",
    border: "2px solid #303436",
    letterSpacing: "2px",
    height: "72px",
    overflow: "hidden",
    width: "415px",
  },
  image: {
    transformOrigin: "center",
  },
});

export default function ShareMemories() {
  const container = useRef();
  gsap.registerPlugin(ScrollTrigger);

  const { contextSafe } = useGSAP({ scope: container });

  const handleOpenForm = contextSafe(() => {
    gsap.to(".image", {
      // scaleY: 0,
      duration: 0.2,
      // ease: "power2.inOut",
      opacity: 0,
    });
    gsap.to("#buttonOpenForm", { height: 0, duration: 0.2, border: 0 });
  });

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: ".image",
        once: true,
        onEnter: () => {
          gsap.fromTo(".image", { opacity: 0 }, { duration: 3, opacity: 1 });
          gsap.fromTo(
            "#buttonOpenForm",
            { opacity: 0, y: 50 },
            { duration: 2.5, opacity: 1, y: 0 }
          );
        },
      });
    },
    { scope: container }
  );
  return (
    <div ref={container} {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.container)}>
        <div id="containerImage" {...stylex.props(styles.containerImage)}>
          <img
            {...stylex.props(styles.image)}
            className="image"
            src={WorldMap}
            alt=""
          />
        </div>
        <button
          onClick={handleOpenForm}
          id="buttonOpenForm"
          {...stylex.props(styles.button)}
        >
          Share your memories of Avicii
        </button>
      </div>
    </div>
  );
}
