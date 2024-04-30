import ImageBanner from "/public/banner-tim2.jpg";
import TitleMemoryBoard from "/public/title-memory-board.svg";
import NameAvici from "/public/avicii.svg";
import { motion, animate, delay } from "framer-motion";
import { useEffect } from "react";

export default function BannerMain() {
  useEffect(() => {
    const sequenceImageOne = [
      // ["img#banner", { opacity: 1 }, { duration: 2.3 }],
      // ["img#title", { opacity: 1 }, { duration: 0.5 }],
      // ["div#dataMemory", { opacity: 1 }, { duration: 0.5 }],
      // ["img#nameAvicii", { opacity: 1 }, { duration: 0.5 }],
    ];

    animate(sequenceImageOne);
  }, []);

  return (
    <>
      <section className="w-full relative bottom-8 h-bannerContainer">
        <div className="grid h-full justify-items-center w-full">
          <motion.img
            initial={{ opacity: 0 }}
            id="banner"
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 2.3 }}
            className="h-full w-banner object-cover relative bottom-48"
            src={ImageBanner}
            alt="Avicii"
          />
          <div className="flex flex-col absolute top-2/4 items-center w-1/2">
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
