import React, { useContext , useEffect } from 'react'
import { Typography , Button } from '@mui/material'
import {GoogleAuthProvider, signInWithPopup, getAuth} from 'firebase/auth'
import { AuthContext } from '../context/authProvider'
// import { useNavigate } from 'react-router-dom'
 
const Login = () => {
  const auth = getAuth()

  // const navigate = useNavigate()

  const { user } = useContext(AuthContext)
 
  // const handleLoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
  //   const res = await signInWithPopup(auth, provider)
  //   console.log({res}, ['from Login.js']);
  // }

  const handleLoginWithGoogle = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // // The signed-in user info.
      // const user = result.user;
      // // IdP data available using getAdditionalUserInfo(result)
      // // ...
      console.log(result.user)
    }).catch((error) => {
      // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // // The email of the user's account used.
      // const email = error.customData.email;
      // // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

  // useEffect(() => {
  //   if (user?.uid) {
  //     navigate('/')
  //   }
  // }, [user, navigate])

  return (
   <>
   <Typography variant='h5' sx={{mb: '10px'}}>Welcome to MINARE</Typography>
    <Button variant='outlined' onClick={handleLoginWithGoogle}>Register with Google</Button>
   </>
  )
}

export default Login