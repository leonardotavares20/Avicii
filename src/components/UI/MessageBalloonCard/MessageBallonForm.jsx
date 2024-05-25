import * as HoverCard from "@radix-ui/react-hover-card";
import Select from "react-select";

const options = [
  { value: "brasil", label: "Brazil" },
  { value: "strawberry", label: "EUA" },
  { value: "vanilla", label: "Spain" },
];

export default function MessageBallonForm() {
  return (
    <HoverCard.Root openDelay={100} closeDelay={200}>
      <HoverCard.Trigger asChild={true}>
        <a href="#">Join The Community</a>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          sideOffset={35}
          className="bg-black p-4 border animation-fadeIn duration-200 border-modal w-96 relative"
        >
          <svg
            width="25"
            height="19"
            viewBox="0 0 25 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="hidden absolute left-1/2 bottom-full lg:block"
          >
            <path
              d="M12.4999 0L24.1913 18.5884H0.808594L12.4999 0Z"
              fill="black"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.4999 0L0.808594 18.5884H24.1913L12.4999 0ZM12.4999 1.87826L2.61891 17.5884H22.381L12.4999 1.87826Z"
              fill="#434343"
            ></path>
          </svg>
          <form>
            <Select
              className="z-30"
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? "#ffffff" : "#434343",
                  color: "white",
                  height: "55px",
                  backgroundColor: "#161616",
                  borderRadius: state.isFocused ? "2px" : "0px",
                  borderWidth: "1px",
                }),
                menu: (baseStyles) => ({
                  ...baseStyles,
                  backgroundColor: "#181818",
                  border: "1px solid #434343",
                  borderRadius: "2px",
                  padding: "0px",
                }),
                option: () => ({
                  padding: "0px 10px",
                  backgroundColor: "#181818",
                  ":hover": {
                    backgroundColor: "#626262",
                  },
                }),
                singleValue: (baseStyles) => ({
                  ...baseStyles,
                  color: "white",
                  fontFamily: "Lato",
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                  paddingLeft: "5px",
                }),
                placeholder: (baseStyles) => ({
                  ...baseStyles,
                  color: "white",
                  fontFamily: "Lato",
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                  paddingLeft: "5px",
                }),
                dropdownIndicator: (baseStyles) => ({
                  ...baseStyles,
                  width: "50px",
                  display: "flex",
                  justifyContent: "center",
                }),
                indicatorsContainer: (baseStyles) => ({}),
              }}
              placeholder="Select Country"
              options={options}
            />
            <div className="grid mt-2 h-12 grid-cols-ballonCard bg-black">
              <input
                className="border-input border border- bg-input placeholder-white z-20 placeholder: px-4 placeholder: tracking-normal placeholder:uppercase"
                type="email"
                placeholder="E-mail"
              />
              <button
                className="w-full tracking-normal z-10 font-bold border-2 border-input"
                type="submit"
              >
                Send
              </button>
            </div>
            <div className="w-full grid items-center pt-2 gap-1 relative container">
              <label class="container">
                I accept the{" "}
                <a className="underline" href="">
                  privacy policy.
                </a>
                <input type="checkbox" name="" id="" />
                <span class="checkmark"></span>
              </label>
            </div>
          </form>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}
