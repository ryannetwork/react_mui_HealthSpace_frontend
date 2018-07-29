import React from "react";
import {Redirect} from "react-router";
//import ReactDOM from "react-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import OneClinicMaster from "components/oneClinicMaster.jsx";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

function readOneClinicMaster(props){
  const { classes } = props;
  if(typeof props.location.state == "undefined"){
  return (
    <Redirect push to="/dashboard"/>
  );}
  else{
    return (
      <OneClinicMaster id={props}/>
    );
  }
}

export default withStyles(styles)(readOneClinicMaster);
