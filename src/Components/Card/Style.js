import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  card: {
    margin: "0.7rem",
    borderRadius: "0.7rem",
    overflow: "hidden",
    boxShadow: " 0px 6px 18px -9px rgba(0, 0, 0, 0.75)",
    transition: "transform 100ms ease-in",
    cursor: "pointer",

    "&:hover": {
      transform: "scale(1.07)",
    },

    "& img": {
      objectFit: "fill",
      minWidth: " 18.75rem",
      minHeight: " 12.5rem",
      width: "100%",
    },
  },

  card__info: {
    marginTop: " -0.5rem",
    borderRadius: " 0.625rem",
    padding: "1.25rem",
    paddingTop: "1.25rem",
    border: "1",

    "& h2": {
      fontSize: "1.1rem",
      fontWeight: "600",
    },

    "& h4": {
      fontSize: "0.9rem",
      fontWeight: "300",
      marginTop: "0.6rem",
      marginBottom: "0.6rem",
    },
  },
}));
