import logo from "../../../public/logo.svg";

export default function Header() {
  return (
    <header>
      <nav className="flex justify-around">
        <div>
          <img src={logo} alt="Link to home and logo of Avicii.com" />
        </div>
        <menu className="flex">
          <li>Tim Bergling Foundation</li>
          <li>Avicii Experience</li>
          <li>Join the Community</li>
          <li>Shop</li>
        </menu>
        <menu className="flex">
          <li>
            <a href="">Spotify</a>
          </li>
          <li>
            <a href="">Youtube</a>
          </li>
          <li>
            <a href="">Apple Music</a>
          </li>
        </menu>
      </nav>
    </header>
  );
}
