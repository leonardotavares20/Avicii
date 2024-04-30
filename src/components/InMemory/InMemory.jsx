import { motion } from "framer-motion";
import RemeberigTitle from "/public/title-remebering.svg";

export default function InMemory() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0, duration: 2.3 }}
        className="w-full grid justify-center text-center mb-32"
      >
        <div className="max-w-remembering flex gap-4 flex-col items-center">
          <img
            className="w-3/4 mb-2"
            src={RemeberigTitle}
            alt="Remembering Tim Bergling"
          />
          <p className="text-base px-0 tracking-remembering leading-7 antialiased font-medium">
            Tim created music that brought people together with timeless
            memories from all over the world.
          </p>
          <p className="text-base tracking-remembering leading-7 antialiased font-medium">
            This space was created for you to share your memories and let the
            world know what Avicii meant to you.
          </p>
          <p className="text-base tracking-remembering leading-7 antialiased font-medium">
            His music and your memories are forever.
          </p>
        </div>
      </motion.div>
    </>
  );
}
