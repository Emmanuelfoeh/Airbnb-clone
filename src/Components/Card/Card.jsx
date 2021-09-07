import React from "react";
import useStyles from "./Style";
const Card = ({ src, title, description, price }) => {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <img src={src} alt="" />
      <div className={classes.card__info}>
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  );
};

export default Card;
