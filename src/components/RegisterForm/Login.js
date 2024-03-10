import React, { useContext, useEffect } from "react";
import { Typography, Button, Box, InputLabel } from "@mui/material";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { Google } from "@mui/icons-material";
import { AuthContext } from "../../context/authProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const auth = getAuth();

  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const handleLoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const res = await signInWithPopup(auth, provider);
      // if (res.user) {
      //   navigate("/");
      // }
    } catch (error) {
      if (error.code === "auth/cancelled-popup-request") {
        console.log("Popup authentication was cancelled by the user.");
        // Handle cancellation gracefully, e.g., show a message to the user
      } else {
        console.error("Error signing in with Google:", error);
        // Handle other authentication errors
      }
    }
  };
  

  // useEffect(() => {
  //   if (user?.uid) {
  //     navigate('/')
  //   }
  // }, [user, navigate])

  return (
    <Box sx={{ margin: "2rem", color: "black" }}>
        <Button variant="outlined" onClick={handleLoginWithGoogle}>
          <Google />
          <Typography sx={{ padding: "5px" }}>Register with Google</Typography>
        </Button>
    </Box>
  );
};

export default Login;
