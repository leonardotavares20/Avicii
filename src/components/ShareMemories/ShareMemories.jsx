import WorldMap from "/public/worldmap.jpeg";
import * as stylex from "@stylexjs/stylex";
import { ScrollTrigger } from "gsap/src/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const styles = stylex.create({
  container: {},
});

export default function ShareMemories() {
  const container = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: ".image",
        once: true,
        onEnter: () => {
          gsap.fromTo(
            ".image",
            { y: 50, opacity: 0 },
            { y: 0, duration: 3, opacity: 1 }
          );
        },
      });
    },
    { scope: container }
  );
  return (
    <div ref={container} {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.container)}>
        <img className="image" src={WorldMap} alt="" />
      </div>
    </div>
  );
}
