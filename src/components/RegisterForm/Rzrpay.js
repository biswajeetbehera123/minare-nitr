import React, { useEffect, useState, useContext } from "react";
import { loadScript } from "../../utils";
import { Button, Checkbox, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { NavigateNext, NextPlanOutlined } from "@mui/icons-material";
import { UserContext } from './UserContext'

import {accomodationRegistration , normalRegistration} from '../../firebase/db'
import { AuthContext } from "../../context/authProvider";
import { useNavigate } from "react-router-dom";


const Rzrpay = () => {
  const [orderCreationId, setOrderCreationId] = useState("");
  const [accommodation, setAccommodation] = useState(false); // State to track accommodation selection

  const userData = useContext(UserContext);
  const {user}= useContext(AuthContext)

  const navigate = useNavigate();

  useEffect(() => {
    const loadRazorpayScript = async () => {
      await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    };
    loadRazorpayScript();
  }, []);

  const displayRazorpay = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/register",
        { method: "POST" },
        { headers: { "Content-Type": "application/json" } },
        { body: JSON.stringify({ orderCreationId, accommodation }) } // Pass accommodation state to backend
      );
      const data = await res.json();
      // console.log(data);
      const options = {
        key: "rzp_test_jrLdOWZ8X6G3F8",
        amount: (accommodation ? 1000 : 500).toString(), // Adjust amount based on accommodation selection
        currency: "INR",
        name: "Minare-NITR",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: data.id,
        handler: async (response) => {
          // send the userdata to firebase
          // console.log(userData)
          
          if(accommodation){
            await accomodationRegistration(userData[0].user)
          }
          else{
            await normalRegistration(userData[0].user)
          }

          navigate('/') ;
          // console.log("payment successful!")
        },
        prefill: {
          name: "user.displayName",
          email: "user.email",
        },
        notes: {
          address: "Thank you for your support!",
        },
        theme: {
          color: "#3399cc",
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (err) {
      console.log(err);
    }
  };

  // const handleAccommodationChange = (event) => {
  //   setAccommodation(event.target.checked);
  // };

  // const [accommodation, setAccommodation] = useState(false); // State to track accommodation selection

  const handleAccommodationChange = (event) => {
    setAccommodation(event.target.value === "yes");

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
          Accommodation (₹1000)
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
          No Accommodation (₹500)
        </label>
      </Typography>
      <br />
      <Box sx={{margin:'4px'}}>
        <Button contained onClick={displayRazorpay}>
          <NavigateNext />
          Pay the registration fees
        </Button>
      </Box>
    </div>
  );
};

export default Rzrpay;
