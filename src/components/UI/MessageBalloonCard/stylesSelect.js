export const stylesInput = {
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
  indicatorsContainer: () => ({}),
};
