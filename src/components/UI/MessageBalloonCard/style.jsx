import stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  cardStyles: {
    backgroundColor: "black",
    padding: "1rem",
    transitionDuration: ".2s",
    border: "1px solid #3C3C3C",
    width: "24rem",
    position: "relative",
  },
  selectInput: {
    zIndex: "30",
  },
  ballonCard: {
    display: "grid",
    marginTop: "0.5rem",
    height: "3rem",
    gridTemplateColumns: "2fr 1fr",
    backgroundColor: "black",
  },
  ballonInputEmail: {
    border: "1px solid #3C3C3C",
    padding: "0 1rem",
    backgroundColor: "black",
    "::placeholder": {
      textTransform: "uppercase",
      color: "white",
      letterSpacing: "0px",
    },
  },
  ballonButton: {
    width: "100%",
    letterSpacing: "0px",
    zIndex: "10",
    fontWeight: "700",
    border: "2px solid #3C3C3C",
  },
  ballonPolitics: {
    width: "100%",
    display: "grid",
    paddingLeft: "5px",
    transform: "translateX(7.5px)",
    cursor: "pointer",
    fontSize: "15px",
    color: "#353535",
    alignItems: "center",
    paddingTop: "0.5rem",
    gap: "0.25rem",
    position: "relative",
  },
});
