import { FaSpotify, FaYoutube, FaApple } from "react-icons/fa";
import stylex from "@stylexjs/stylex";

const styles = stylex.create({
  menuSocials: {
    display: "flex",
    justifyContent: "flex-end",
    height: "100%",
    alignItems: "center",
    width: "100%",
  },
  containerSocials: {
    width: "100px",
    display: "flex",
    justifyContent: "space-between",
  },
});

export default function MenuSocials() {
  const size = 19;
  return (
    <>
      <menu {...stylex.props(styles.menuSocials)}>
        <div {...stylex.props(styles.containerSocials)}>
          <li>
            <a href="">
              <FaSpotify size={size} />
            </a>
          </li>
          <li>
            <a href="">
              <FaYoutube size={size} />
            </a>
          </li>
          <li>
            <a href="">
              <FaApple size={size} />
            </a>
          </li>
        </div>
      </menu>
    </>
  );
}
