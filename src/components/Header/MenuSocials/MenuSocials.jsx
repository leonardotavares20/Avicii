import { FaSpotify, FaYoutube, FaApple } from "react-icons/fa";

export default function MenuSocials() {
  return (
    <>
      <menu className="flex h-8 justify-end items-center">
        <div className="w-3/6 flex justify-evenly">
          <li>
            <a href="">
              <FaSpotify size={21} />
            </a>
          </li>
          <li>
            <a href="">
              <FaYoutube size={21} />
            </a>
          </li>
          <li>
            <a href="">
              <FaApple size={21} />
            </a>
          </li>
        </div>
      </menu>
    </>
  );
}
