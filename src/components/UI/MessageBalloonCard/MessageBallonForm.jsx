import * as HoverCard from "@radix-ui/react-hover-card";
import Select from "react-select";
import stylex from "@stylexjs/stylex";
import { stylesInput } from "./stylesSelect";
import { options } from "./options";
import SvgArrow from "./SvgArrow";
import { styles } from "./style";

export default function MessageBallonForm() {
  return (
    <HoverCard.Root openDelay={100} closeDelay={400}>
      <HoverCard.Trigger asChild={true}>
        <a href="#">Join The Community</a>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content sideOffset={35} {...stylex.props(styles.cardStyles)}>
          <SvgArrow />
          <form>
            <Select
              {...stylex.props(styles.selectInput)}
              styles={stylesInput}
              placeholder="Select Country"
              options={options}
            />
            <div {...stylex.props(styles.ballonCard)}>
              <input
                {...stylex.props(styles.ballonInputEmail)}
                type="email"
                placeholder="E-mail"
              />
              <button {...stylex.props(styles.ballonButton)} type="submit">
                Send
              </button>
            </div>
            <div {...stylex.props(styles.ballonPolitics)}>
              <label className="container">
                I accept the{" "}
                <a className="underline" href="">
                  privacy policy.
                </a>
                <input type="checkbox" name="" id="" />
                <span className="checkmark"></span>
              </label>
            </div>
          </form>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}
