import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  searchPage__info: {
    padding: "20px",

    "& p": {
      fontZize: "14px",
      marginBottom: "10px",
    },

    "& h1": {
      marginBottom: "30px",
    },
    "& button": {
      borderRadius: "30px",
      textTransform: "inherit",
      margin: "5px",
    },
  },
}));
