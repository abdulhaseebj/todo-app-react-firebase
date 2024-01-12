import React from 'react'
import { useState } from 'react';
import { auth } from '../../config/firebase-config/configs';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const loginAuthentication = (event) => {
        event.preventDefault();
        console.log('Input Value:', email);
        console.log('Input Value:', password);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    };

    return (
        <div className=''>
            <div className='bg-[#F5F5F5] mt-20 p-[30px] rounded-xl'>
                <h2 className=' text-[#333399] text-2xl text-center  font-bold '>LogIn</h2>
                <form onSubmit={loginAuthentication} >
                    <div className='flex justify-center'>
                        <input type="text" placeholder="Enter email" id='email' className="input  border-[#333399]  w-full max-w-xs mt-6" onChange={(e) => setEmail(e.target.value)} value={email} />
                    </div>
                    <div className='flex justify-center'>
                        <input type="password" placeholder="Enter password" id='password' className="input border-[#333399] w-full max-w-xs mt-3" onChange={(e) => setPassword(e.target.value)} value={password} />
                    </div>
                    <div className='flex justify-center'>
                        <button className='bg-[#333399] text-[#ffff] px-6 rounded-md mt-6  py-2 text-xl font-bold' type='submit'>LogIn</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Login