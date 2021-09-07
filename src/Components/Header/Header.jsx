import {
  AppBar,
  Avatar,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { KeyboardArrowDownRounded, LanguageRounded } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import { Link } from "react-router-dom";

import useStyles from "./Style";
const Header = () => {
  const classes = useStyles();
  return (
    <AppBar color="white" className={classes.header}>
      <Toolbar className={classes.header_container}>
        <div className={classes.logo}>
          <Link to="/">
            <img
              className={classes.image}
              src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
              alt="logo"
            />
          </Link>
        </div>

        <div className={classes.header_search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>

        <div className={classes.header_right}>
          <Typography>Become a host</Typography>
          <IconButton>
            <LanguageRounded />
          </IconButton>
          <IconButton>
            <KeyboardArrowDownRounded />
          </IconButton>
          <Avatar alt="Profile pic" src="/static/images/avatar/1.jpg" />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
