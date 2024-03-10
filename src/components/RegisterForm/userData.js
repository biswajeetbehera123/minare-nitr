import React, { useContext, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AuthContext } from "../../context/authProvider";
import { UserContext } from "./UserContext";

const defaultTheme = createTheme();

const UserData = ({submit , onSubmitUserData}) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [branchOfStudy, setBranchOfStudy] = useState("");
  const [graduationYear, setGraduationYear] = useState("");

  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation here
    if (!name || !phoneNumber || !collegeName || !branchOfStudy || !graduationYear) {
      // console.log("Please fill in all fields");
      window.alert("Please fill in all fields")
      return;
    }

    // Update the context state with the entered values
    userData.user = {
      fullname: name,
      email: user.email,
      phone: phoneNumber,
      collegeName: collegeName,
      branchOfStudy: branchOfStudy,
      yearOfGraduation: graduationYear,
    };
    setUserData(userData);
    // onSubmitUserData(userData);
    submit();
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1 }}>
              {user.photoURL ? (
                <img src={user.photoURL} alt="avatar" />
              ) : (
                <LockOutlinedIcon />
              )}
            </Avatar>
            <Typography color={"black"} variant="h5">
              {user.displayName}
            </Typography>
          </Box>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3, padding: 2 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="firstName"
                  label="Full Name"
                  autoFocus
                  defaultValue={user.displayName}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="phoneNumber"
                  label="Phone Number"
                  name="phoneNumber"
                  type="tel"
                  inputProps={{ pattern: "[0-9]{10}", maxLength: 10 }}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="collegeName"
                  label="College Name"
                  name="collegeName"
                  value={collegeName}
                  onChange={(e) => setCollegeName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="branchOfStudy"
                  label="Branch of Study"
                  name="branchOfStudy"
                  value={branchOfStudy}
                  onChange={(e) => setBranchOfStudy(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="graduationYear"
                  label="Year of Graduation"
                  name="graduationYear"
                  type="number"
                  inputProps={{ min: 2022, max: 2030 }}
                  value={graduationYear}
                  onChange={(e) => setGraduationYear(e.target.value)}
                />
              </Grid>
            </Grid>
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit to continue
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default UserData;
