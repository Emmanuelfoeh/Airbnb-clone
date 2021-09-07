import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  footer: {
    borderTop: "1px solid lightgray",
    padding: "20px",
    backgroundColor: " #f7f7f7",
    textAlign: "center",

    "& p": {
      padding: " 5px",
      fontZize: "14px",
    },
  },
}));
