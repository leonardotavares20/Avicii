import logo from "../../../public/logo.svg";
import { FaSpotify, FaYoutube, FaApple } from "react-icons/fa";

export default function Header() {
  return (
    <header className="w-full flex justify-center">
      <nav className="w-11/12 grid grid-cols-navbar justify-around items-center h-36">
        <div className="h-8 flex items-center">
          <img src={logo} alt="Link to home and logo of Avicii.com" />
        </div>
        <menu className="flex text-sm h-8 font-semibold tracking-normal gap-x-14 items-center">
          <li>Tim Bergling Foundation</li>
          <li>Avicii Experience</li>
          <li>Join the Community</li>
          <li>Shop</li>
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
