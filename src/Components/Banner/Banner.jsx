import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import DateSearch from "../DateSearch/DateSearch";

import useStyles from "./Style";
const Banner = () => {
  const [showSearch, setShowSearch] = useState(false);
  const history = useHistory();
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <div className={classes.banner_search}>
        {showSearch && <DateSearch />}

        <Button
          onClick={() => setShowSearch(!showSearch)}
          className={classes.banner_searchButton}
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className={classes.banner_info}>
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Button
          onClick={() => history.push("/search")}
          className={classes.infoButton}
          variant="outlined"
        >
          Explore Nearby
        </Button>
      </div>
    </div>
  );
};

export default Banner;
