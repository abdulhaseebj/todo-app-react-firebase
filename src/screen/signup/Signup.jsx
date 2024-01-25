import React from 'react'
import { TextField, Button, Box, CircularProgress, Typography } from '@mui/material'
import { useState, useRef } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../config/firebaseconfig/Firebaseconfig';
import { useNavigate } from 'react-router-dom';
function Signup() {
  // usestate
  const [loading, setLoding] = useState(false)

  //  useNavigate
  const navigate = useNavigate()

  // form value
  const email = useRef()
  const password = useRef()

  function signUp(e) {
    e.preventDefault()
    const userEmail = email.current.value;
    const userPassword = password.current.value;
    setLoding(!loading)
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate('/login')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });

  }
  return (
    <Box sx={{ height: '80vh' }} className='d-flex justify-content-center align-item-center'>
      <form onSubmit={signUp} className='d-flex justify-content-center flex-column w-25 gap-5'>
        <TextField type='email' label="Email" variant="standard" inputRef={email} required />
        <TextField type='password' label="Password" variant="standard" inputRef={password} required />
        <Button type='submit' variant="contained">{loading ? <CircularProgress sx={{ color: 'white' }} size={20} /> : 'SignUp'}</Button>
      </form>
    </Box>
  )
}

export default Signup