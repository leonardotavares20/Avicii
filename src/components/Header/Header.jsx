import logo from "../../../public/logo.svg";
import MenuSocials from "./MenuSocials/MenuSocials";
import MenuLinks from "./MenuLinks/MenuLinks";

export default function Header() {
  return (
    <header className="w-full flex justify-center">
      <nav className="w-11/12 grid grid-cols-navbar justify-around items-center h-36">
        <div className=" h-8 flex items-center">
          <img src={logo} alt="Link to home and logo of Avicii.com" />
        </div>
        <MenuLinks />
        <MenuSocials />
      </nav>
    </header>
  );
}
