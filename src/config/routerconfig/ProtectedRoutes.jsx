import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebaseconfig/Firebaseconfig';
import { CircularProgress, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function ProtectedRoutes({ component }) {
    // navigate
    const navigate = useNavigate()

    // state
    const [isUser, setIsUser] = useState(false)
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate('/login')
                return
            }
            setIsUser(true)
        })


    }, [])

    return (
        isUser ?
        component : <Typography variant="h1" color="initial"> <CircularProgress sx={{ color: 'white' }} size={20} /></Typography>
    )
}

export default ProtectedRoutes