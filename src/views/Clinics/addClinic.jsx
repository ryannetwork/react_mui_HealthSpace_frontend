import React from "react";
//import ReactDOM from "react-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import ClinicForm from "components/Forms/ClinicForm/ClinicForm.jsx";


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

function addClinic(props){
   const { classes } = props;
   return (
     <ClinicForm id={props}/>
   );
}

export default withStyles(styles)(addClinic);
