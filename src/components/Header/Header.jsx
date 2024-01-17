import logo from "../../../public/logo.svg";
import { FaSpotify, FaYoutube, FaApple } from "react-icons/fa";
import * as HoverCard from "@radix-ui/react-hover-card";
import "./animation.css";

const Card = () => (
  <HoverCard.Root openDelay={100} closeDelay={100}>
    <HoverCard.Trigger asChild>
      <a target="_blank" rel="noreferrer noopener">
        Join Community
      </a>
    </HoverCard.Trigger>
    <HoverCard.Portal>
      <HoverCard.Content
        sideOffset={32}
        align="center"
        className="bg-black border animation-fadeIn duration-200 border-modal w-80 h-28 relative HoverCardContent
"
      >
        <svg
          width="25"
          height="19"
          viewBox="0 0 25 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          class="hidden absolute left-1/2 bottom-full lg:block"
        >
          <path
            d="M12.4999 0L24.1913 18.5884H0.808594L12.4999 0Z"
            fill="black"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.4999 0L0.808594 18.5884H24.1913L12.4999 0ZM12.4999 1.87826L2.61891 17.5884H22.381L12.4999 1.87826Z"
            fill="#434343"
          ></path>
        </svg>
        <p className="text-white">Hey</p>
        <select multiple>
          <option value="opcao1">Opção 1</option>
          <option value="opcao2">Opção 2</option>
          <option value="opcao3">Opção 3</option>
        </select>
      </HoverCard.Content>
    </HoverCard.Portal>
  </HoverCard.Root>
);

export default function Header() {
  return (
    <header className="w-full flex justify-center">
      <nav className="w-11/12 grid grid-cols-navbar justify-around items-center h-36">
        <div className="h-8 flex items-center">
          <img src={logo} alt="Link to home and logo of Avicii.com" />
        </div>
        <menu className="flex text-sm h-8 font-semibold tracking-normal gap-x-14 items-center">
          <li>
            <a
              className="text-white transition duration-400 ease-in-out hover:text-gray-400"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tim Bergling Foundation
            </a>
          </li>
          <li>
            <a
              className="text-white transition duration-400 ease-in-out hover:text-gray-400"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              Avicii Experience
            </a>
          </li>
          <li>
            <a
              className="text-white transition duration-400 ease-in-out hover:text-gray-400"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card />
            </a>
          </li>
          <li>
            <a
              className="text-white transition duration-400 ease-in-out hover:text-gray-400"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop
            </a>
          </li>
        </menu>
        <menu className="flex items-center h-8 justify-evenly">
          <li>
            <a href="">
              <FaSpotify size={19} />
            </a>
          </li>
          <li>
            <a href="">
              <FaYoutube size={19} />
            </a>
          </li>
          <li>
            <a href="">
              <FaApple size={19} />
            </a>
          </li>
        </menu>
      </nav>
    </header>
  );
}
