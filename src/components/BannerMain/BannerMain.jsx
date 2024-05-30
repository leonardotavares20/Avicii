import BannerImage from "/public/banner-tim2.jpg";
import TitleMemoryBoard from "/public/title-memory-board.svg";
import NameAvici from "/public/avicii.svg";
import * as stylex from "@stylexjs/stylex";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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
  useGSAP(() => {
    const timeline = gsap.timeline();

    timeline.fromTo(
      "#banner",
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
      0.5
    );
    timeline.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 2 }, 1);
    timeline.fromTo(
      "#dataMemory",
      { opacity: 0 },
      { opacity: 1, duration: 2 },
      1.5
    );
    timeline.fromTo(
      "#nameAvicii",
      { opacity: 0 },
      { opacity: 1, duration: 2 },
      2
    );
  }, {});
  return (
    <>
      <section {...stylex.props(styles.section)}>
        <div {...stylex.props(styles.containerImages)}>
          <img
            {...stylex.props(images.bannerImage)}
            id="banner"
            src={BannerImage}
            alt="Avicii"
          />
          <div {...stylex.props(styles.containerTexts)}>
            <img
              id="title"
              className="w-5/6"
              src={TitleMemoryBoard}
              alt="The Avicii memory board"
            />
            <div className="flex flex-col items-center" id="dataMemory">
              <p className="uppercase text-xl inLoving">In Loving Memory</p>
              <p className="text-min mt-1 tracking-wide dataMemory">
                1989.09.08 – 2018.04.20
              </p>
            </div>
            <img
              id="nameAvicii"
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
