import BannerImage from "/public/banner-tim2.jpg";
import TitleMemoryBoard from "/public/title-memory-board.svg";
import NameAvici from "/public/avicii.svg";
import { motion, animate, delay } from "framer-motion";
import { useEffect } from "react";
import * as stylex from "@stylexjs/stylex";
import { useGSAP } from "@gsap/react";

const styles = stylex.create({
  section: {
    width: "100%",
    position: "relative",
    bottom: "2rem",
    height: "1050px",
  },
  containerImages: {
    display: "grid",
    height: "100%",
    width: "100%",
    justifyItems: "center",
  },
  containerTexts: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "50%",
    alignItems: "center",
    width: "50%",
  },
});

const images = stylex.create({
  bannerImage: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    position: "relative",
    bottom: "12rem",
  },
});

export default function BannerMain() {
  useGSAP(() => {}, {});
  return (
    <>
      <section {...stylex.props(styles.section)}>
        <div {...stylex.props(styles.containerImages)}>
          <motion.img
            {...stylex.props(images.bannerImage)}
            initial={{ opacity: 0 }}
            id="banner"
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 2.3 }}
            src={BannerImage}
            alt="Avicii"
          />
          <div {...stylex.props(styles.containerTexts)}>
            <motion.img
              id="title"
              initial={{ opacity: 0 }}
              className="w-5/6"
              src={TitleMemoryBoard}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 2.3 }}
              alt="The Avicii memory board"
            />
            <motion.div
              initial={{ opacity: 0 }}
              className="flex flex-col items-center"
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 2.3 }}
              id="dataMemory"
            >
              <p className="uppercase text-xl inLoving">In Loving Memory</p>
              <p className="text-min mt-1 tracking-wide dataMemory">
                1989.09.08 – 2018.04.20
              </p>
            </motion.div>
            <motion.img
              id="nameAvicii"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9, duration: 2.3 }}
              className="mt-10"
              src={NameAvici}
              alt="Avicii"
            />
          </div>
        </div>
      </section>
    </>
  );
}
