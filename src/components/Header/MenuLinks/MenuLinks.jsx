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
  link: {
    color: {
      default: "white",
      ":hover": "#929292",
    },
    transition: "0.2s ease-in-out",
  },
});

export default function MenuLinks() {
  return (
    <>
      <menu {...stylex.props(styles.menu)}>
        <li>
          <a
            {...stylex.props(styles.link)}
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tim Bergling Foundation
          </a>
        </li>
        <li>
          <a
            {...stylex.props(styles.link)}
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
          >
            Avicii Experience
          </a>
        </li>
        <li>
          <div {...stylex.props(styles.link)}>
            <MessageBallonForm />
          </div>
        </li>
        <li>
          <a
            {...stylex.props(styles.link)}
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
