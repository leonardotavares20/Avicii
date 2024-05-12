import WorldMap from "/public/worldmap.jpeg";
import { motion } from "framer-motion";
import * as stylex from "@stylexjs/stylex";
import { ScrollTrigger } from "gsap/src/ScrollTrigger";

const ShareMemoriesStyles = stylex.create({
  text: {
    color: "#ffc875",
    fontSize: "20px",
  },
});

export default function ShareMemories() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0, duration: 2.3 }}
      className="w-full h-full"
    >
      <img src={WorldMap} alt="" />
      <p {...stylex.props(ShareMemoriesStyles.text)}>
        Hello, Stylex with Vite!
      </p>
    </motion.div>
  );
}
