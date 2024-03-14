import React, { Fragment, useContext, useEffect } from "react";
import { styled } from "@mui/system";

//GENERAL
import { Box, Typography, Snackbar, SnackbarContent, Button } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

//STEPPER
import { Stepper, Step, StepLabel, StepContent } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles'
//CONTEXT
import { UserContext } from "./UserContext";
import Login from "./Login";
import Rzrpay from "./Rzrpay";
import UserData from "./userData";
import { AuthContext } from "../../context/authProvider";

const theme = createTheme({
  palette: {
    // Ensure other colors are adjusted as needed
    primary: {
      main: '#007bff',
    },
    components: {
      MuiStepLabel: {
        color: '#fff',
      },
      MuiStepIcon: {
        color: '#007bff',
      },
    },
  },
});

const FormContainer = styled('div')(({ theme }) => ({
  padding: 0,
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(8, 12),
  },
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4, 6),
  },
}));

const CenterText = styled('div')({
  textAlign: "center",
});

const ContentContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(3, 0, 3, 5),
}));

const ButtonsContainer = styled('div')(({ theme }) => ({
  margin: theme.spacing(2, 0),
}));

const ButtonStyled = styled(Button)({
  marginRight: '8px',
});

const ErrorSnackbarContent = styled(SnackbarContent)(({ theme }) => ({
  backgroundColor: theme.palette.error.black,
}));

const IconStyled = styled(ErrorIcon)({
  marginRight: '8px',
});

const MessageSpan = styled('span')({
  display: "flex",
  alignItems: "center",
});

const steps = ["Google Authentication", "Applicant details", "Payment"];

//MAIN COMPONENT
const RegisterForm = () => {
  const [completed, setCompleted] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const [errors] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [state, setState] = useContext(UserContext);
  const [submit, setSubmit] = React.useState(false);

  const { user } = useContext(AuthContext);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const isStepOptional = (step) => {
    return step === 1;
  };
  const handleCloseSnackbar = () => {
    setOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeStep < steps.length - 1) handleNext();
    else {
      setCompleted(true);
    }
  };
    

  useEffect(() => {
    if (submit) {
      handleNext();
    }
  }, [submit]);

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <Login/>;
      case 1:
        return <UserData submit={handleNext}  />;
      case 2:
        return <Rzrpay />;
      default:
        return "Unknown step";
    }
  };

  const handleError = (e) => {
    errors[e.target.name] = e.target.validationMessage;
    setState({ ...state, errors: { ...errors } });
    setOpen(true);
  };

  React.useEffect(() => {
    if (user && user.email) {
      setActiveStep(1); // Directly switch to step 1 if user is present
    }
  }, [user]);

  const handleChange = (e) => {
    //PASSWORD MATCHING
    if (
      e.target.name === "confirmPassword" &&
      e.target.value !== state.user.password
    ) {
      e.target.setCustomValidity("Passwords are not matching");
    } else {
      e.target.setCustomValidity("");
    }
    if (e.target.name === "password") {
      const confirm = e.target.form.querySelector(
        "input[name='confirmPassword']"
      );
      // WHEN WE CHANGE PASSWORD, WE WANT TO VALIDATE CONFIRM PASSWORD AS WELL
      if (e.target.value === state.user.confirmPassword) {
        delete errors[confirm.name];
        confirm.setCustomValidity("");
      } else {
        confirm.setCustomValidity("Passwords are not matching");
        errors[confirm.name] = confirm.validationMessage;
      }
    }
    if (e.target.validity.valid) {
      //OTHER ELEMENTS
      delete errors[e.target.name];
    } else {
      errors[e.target.name] = e.target.validationMessage;
    }
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setState({
      ...state,
      user: { ...state.user, [e.target.name]: value },
      errors: { ...errors },
    });
  };

  return (
    <ThemeProvider theme={theme}>
    <Fragment>
      {!completed && (
        <Box
          sx={{
            marginTop: '210px',
            border: '2px solid black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            height: 'auto',
          bgcolor: 'background.paper',}}
          as={FormContainer}
        >
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => {
              const labelProps = {};
              if (isStepOptional(index)) {
                labelProps.optional = (
                  <Typography variant="caption" sx={{ color: 'black' }}></Typography>
                );
              }

              return (
                <Step key={index}>
                  <StepLabel {...labelProps} sx={{ color: 'black' }}>{label}</StepLabel>
                  <StepContent>
                    <div className={ContentContainer}>
                    
                      <div className={CenterText} sx={{ color: 'black' }}>
                        {getStepContent(activeStep)}
                      </div>
                      <div className={ButtonsContainer}>
                        <ButtonStyled
                          disabled={activeStep === 0}
                          variant="contained"
                          onClick={handleBack}
                        >
                          Back
                        </ButtonStyled>
                        {/* {activeStep < steps.length - 1 && (
                          <ButtonStyled
                            type="submit"
                            variant="contained"
                            color="primary"
                          >
                            Next
                          </ButtonStyled>
                        )} */}
                       
                      </div>
                    </div>
                  </StepContent>
                </Step>
              );
            })}
          </Stepper>
        </Box>
      )}
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        resumeHideDuration={3000}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        open={open}
      >
        <ErrorSnackbarContent
          message={
            <MessageSpan>
              <IconStyled />
              {"Please correct the data"}
            </MessageSpan>
          }
        />
      </Snackbar>
    </Fragment>
    </ThemeProvider>
  )};

export default RegisterForm;
