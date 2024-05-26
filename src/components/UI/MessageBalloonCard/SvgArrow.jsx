// SvgArrow.js
import stylex from "@stylexjs/stylex";

const styles = stylex.create({
  svgArrow: {
    position: "absolute",
    left: "50%",
    bottom: "100%",
  },
});

const SvgArrow = () => (
  <svg
    width="25"
    height="19"
    viewBox="0 0 25 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...stylex.props(styles.svgArrow)}
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
);

export default SvgArrow;
