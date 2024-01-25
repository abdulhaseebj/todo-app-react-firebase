import React, { useContext, useRef, useState } from 'react'
import { TextField, Button, Box, CircularProgress, Typography } from '@mui/material'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebaseconfig/Firebaseconfig';
import userContext from '../../usercontext/UserContext';


function Login() {
  // usestate
  const [loading, setLoding] = useState(false)

  //  useNavigate
  const navigate = useNavigate()

  // useContext
  const { isUser, setIsUser } = useContext(userContext)

  // form value
  const email = useRef()
  const password = useRef()

  function signIn(e) {
    e.preventDefault()

    const userEmail = email.current.value;
    const userPassword = password.current.value;

    setLoding(!loading)
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setIsUser(true)
        navigate('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });

  }
  return (
    <Box sx={{ height: '80vh' }} className='d-flex justify-content-center align-item-center'>
      <form onSubmit={signIn} className='d-flex justify-content-center flex-column w-25 gap-5'>
        <TextField type='email' label="Email" variant="standard" inputRef={email} required />
        <TextField type='password' label="Password" variant="standard" inputRef={password} required />
        <Button type='submit' variant="contained">{loading ? <CircularProgress sx={{ color: 'white' }} size={20} /> : 'LogIn'}</Button>
      </form>
    </Box>
  )
}

export default Login