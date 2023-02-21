import { makeStyles } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles({
  selectbutton: {
    color: "white",
    border: "1px solid gold",
    borderRadius: 5,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: "Montserrat",
    cursor: "pointer",
    //   backgroundColor: selected ? "gold" : "",
    //   color: selected ? "black" : "",
    //   fontWeight: selected ? 700 : 500,
    "&:hover": {
      backgroundColor: "gold",
      color: "black",
    },
    width: "22%",
    //   margin: 5,
  },
});
//
const SelectButton = ({ children, onClick }) => {
  const classes = useStyles();

  //   const classes = useStyles();

  return (
    <span className={classes.selectbutton} onClick={onClick}>
      {children}
    </span>
  );
};

export default SelectButton;
