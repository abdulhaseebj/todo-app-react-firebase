import React, { useState } from 'react'
import userContext from './UserContext'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebaseconfig/Firebaseconfig';

const UserContextProvider = ({ children }) => {
    const [isUser, setIsUser] = useState(false)
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          setIsUser(true)
          return
        } 
      });
    return (
        <userContext.Provider value={{ isUser, setIsUser }}>
            {children}
        </userContext.Provider>
    )
}

export default UserContextProvider