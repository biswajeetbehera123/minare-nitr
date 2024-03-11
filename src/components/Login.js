import React, { useContext , useEffect } from 'react'
import { Typography , Button } from '@mui/material'
import {GoogleAuthProvider, signInWithPopup, getAuth} from 'firebase/auth'
import { AuthContext } from '../context/authProvider'
// import { useNavigate } from 'react-router-dom'
 
const Login = () => {
  const auth = getAuth()

  // const navigate = useNavigate()

  const { user } = useContext(AuthContext)
 
  const handleLoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    const res = await signInWithPopup(auth, provider)
    console.log({res}, ['from Login.js']);
  }

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