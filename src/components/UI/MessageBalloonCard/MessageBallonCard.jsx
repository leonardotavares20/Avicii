import * as HoverCard from "@radix-ui/react-hover-card";
import "./animation.css";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function MessageBallonCard() {
  return (
    <HoverCard.Root openDelay={100} closeDelay={100}>
      <HoverCard.Trigger asChild>
        <a href="#">Join The Community</a>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          sideOffset={32}
          className="bg-black p-4 border animation-fadeIn duration-200 border-modal w-96 h-28 relative HoverCardContent
"
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
          <Select
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
              option: (baseStyles) => ({
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
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}
