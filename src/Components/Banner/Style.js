import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  banner: {
    // backgroundImage: `url(${Background})`
    backgroundImage:
      "url(" +
      "https://media.cntraveler.com/photos/5db1d0dd11c1e500092e7133/master/pass/airbnb-ski-aspen-28328347.jpg" +
      ")",
    backgroundPosition: "center center",
    height: "60vh",
    position: "relative",
    marginBottom: "1rem",
  },

  banner_search: {
    display: "flex",
    flexDirection: "column",
  },

  banner_searchButton: {
    backgroundColor: "white",
    fontWeight: "900 ",
    color: "#ff7779 !important",
  },

  banner_info: {
    backgroundColor: "black",
    color: "white",
    paddingTop: "15vh",
    paddingLeft: "50px",
    paddingRight: "50px",
    paddingBottom: "40px",
    width: "300px",
    position: "absolute",

    "& h5": {
      marginTop: "10px",
    },
  },

  infoButton: {
    backgroundColor: "#ff7779",
    color: "white",
    marginTop: "20px",
    fontWeight: "600",

    "&:hover": {
      backgroundColor: "white",
      color: "#ff7779",
    },
  },
}));
