import React, { useEffect, useState, useContext } from "react";
import { loadScript } from "../../utils";
import { Button, Checkbox, Typography, TextField } from "@mui/material";
import { Box } from "@mui/material";
import { NavigateNext, NextPlanOutlined } from "@mui/icons-material";
import { UserContext } from './UserContext'

import {accomodationRegistration , normalRegistration} from '../../firebase/db'
import { AuthContext } from "../../context/authProvider";
import { useNavigate } from "react-router-dom";

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


const Rzrpay = () => {
  const [orderCreationId, setOrderCreationId] = useState("");
  const [accommodation, setAccommodation] = useState(false); // State to track accommodation selection
  const [transactionId, setTransactionId] = useState("");

  const [open, setOpen] = React.useState(false);

  const userData = useContext(UserContext);
  const {user}= useContext(AuthContext)

  const navigate = useNavigate();

  const handleSubmit = async () => {

    if (!transactionId) {
      window.alert("Please enter the transaction ID");
      return;
    }

    userData[0].user.transactionId = transactionId;

    console.log(userData[0].user)
    
    if(accommodation){
      await accomodationRegistration(userData[0].user)
    }
    else{
      await normalRegistration(userData[0].user)
    }
    setOpen(true);
    navigate('/') ;
  };

  const handleAccommodationChange = (event) => {
    setAccommodation(event.target.value === "yes");

  };

  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div style={{ margin: "4px" }}>
      <Typography style={{ color: "black" }}>
        <label>
          <input
            type="radio"
            name="accommodation"
            value="yes"
            checked={accommodation}
            onChange={handleAccommodationChange}
          />
          With Mess Facility (₹1000)
        </label>
      </Typography>
      <br />
      <Typography style={{ color: "black" }}>
        <label>
          <input
            type="radio"
            name="accommodation"
            value="no"
            checked={!accommodation}
            onChange={handleAccommodationChange}
          />
          No Mess Facility (₹600)
        </label>
      </Typography>
      <br />
      <Box>
       <Typography style={{ color: "black" }}>
       • Pay the respective registration fees to complete the registration process.
      </Typography>
      <Typography style={{ color: "black" }}>
      • The payment should be done to the Bank account with the details mentioned below.
      </Typography>
      <Typography style={{ color: "black" }}>
      • After the payment, enter the transaction ID and click on <i><b>SUBMIT</b></i> to complete the registration process.
      </Typography>
      </Box>
    <Box sx={{display:'flex', flexDirection: 'column', justifyContent:'center' , margin: '2rem'}}>
      <Typography style={{ color: "black" }}>
       <u> <b>Bank Account Details:</b></u>
      </Typography>
      <Typography style={{ color: "black" }}>
        <b>Account Number:</b> 10138951149
      </Typography>
      <Typography style={{ color: "black" }}>
        <b>IFSC Code:</b> SBIN0002109
      </Typography>
      <Typography style={{ color: "black" }}>
        <b>Account Name:</b>  MS MINING ENGG SOCIETY
      </Typography>
      </Box>
      <Box sx={{margin:'4px', display: 'flex', alignItems: 'center'}}>
      <TextField id="outlined-basic" label="Transaction ID" value={transactionId} variant="outlined" sx={{margin: '4px'}} onChange={(e) => setTransactionId(e.target.value)} />
        <Button variant="contained" onClick={handleSubmit}>
          <NavigateNext />
         SUBMIT
        </Button>
      </Box>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          This is a success Alert inside a Snackbar!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Rzrpay;
