import React, { useState } from 'react'
import './Sign.css'
// import '../Components/NavBar/NavBar.css'
// import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './config/firebase';
import { Link, useNavigate } from 'react-router-dom'
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Loader from '../Components/Loader/Loader';


function Sign() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loader, setLoader] = useState(false);
    const navigate=useNavigate()
    const signUp= async (event)=>{
        event.preventDefault()
        setLoader(true)
        try{
            await createUserWithEmailAndPassword(auth,email,password)
            navigate('./home')
        } catch(error){
            if(error.code === 'auth/email-already-in-use'){
                try{
                    await signInWithEmailAndPassword(auth,email,password);
                    navigate('../home')
                }  catch (signInError) {
                    console.error('Sign-in error:', signInError);
                  }
                  finally{
                    setLoader(false)
                  }
                }
            }
    }

    return (
        <>
        {loader && <Loader/>}
            <nav>
                <img className='logo_img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
            </nav>
            <div className="sign_content">
                <div className="sign_card">
                    <h1>Sign In</h1>
                    <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email' />
                    <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Password' />
                    <div className="btn">
                            <button onClick={signUp} className='signin_btn'>Sign in</button>
                    </div>
                        <Link className='Link' to={"/"}><p> Don't have any account?</p></Link>
                </div>
            </div>
        </>

    )
}

export default Sign