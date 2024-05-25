import MessageBallonForm from "../../UI/MessageBalloonCard/MessageBallonForm";
import stylex from "@stylexjs/stylex";

const styles = stylex.create({
  menu: {
    display: "flex",
    justifyContent: "center",
    height: "100%",
    letterSpacing: "2.5px",
    alignItems: "center",
    gap: "3rem",
    fontSize: "14.2px",
  },
});

export default function MenuLinks() {
  return (
    <>
      <menu {...stylex.props(styles.menu)}>
        <li>
          <a
            className="text-white  transition duration-400 ease-in-out hover:text-gray-400"
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
          <div className="text-white transition duration-400 ease-in-out hover:text-gray-400">
            <MessageBallonForm />
          </div>
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
    </>
  );
}
