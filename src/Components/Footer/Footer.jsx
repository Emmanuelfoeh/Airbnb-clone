import React from "react";

import useStyles from "./Style";
const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <p>© 2020 Airbnb clone! No rights reserved - emmanuelfoeh!</p>
      <p>Privacy · Terms · Sitemap · Company Details</p>
    </div>
  );
};

export default Footer;
