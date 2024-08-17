import React, { useState } from 'react'
import './Login_2.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { auth } from './config/firebase'
import { db } from './config/firebase'
import { collection,addDoc } from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import Loader from '../Components/Loader/Loader'

function Login_2() {
    const location = useLocation()
    const navigate = useNavigate()
    const [password, setPassword] = useState("")
    const [loader, setLoader] = useState(false)
    const email = location.state?.email;

    const userDataBase=collection(db,'users') 

    const signIn = async (event) => {
        event.preventDefault();
        setLoader(true)
        try {
            const userData = await createUserWithEmailAndPassword(auth, email, password);
            console.log(userData.user)
            await addDoc(userDataBase,{
                email: userData.user.email
            }
            )
            // console.log('current user:',auth.currentUser.email)
            navigate('../home');
        } catch (error) {
            console.error("Error signing in: ", error);
        } finally {
            setLoader(false)
        }
    };
    // console.log(password)
    // console.log(email)

    return (<>
    {loader && <Loader/>}
    {/* <Loader/> */}
        <div className='Login2_container'>
            <nav className='Login2_nav'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
                <button onClick={() => navigate('../sign')}>Sign In</button>
            </nav>
            <div className="Login2_content">
                <div className="Login2_card">
                    <h1>Welcome back!<br />
                        Joining Netflix is easy.</h1>
                    <p>Enter your password and you'll be watching in no time.</p>
                    <div className="Email_box">
                        <p>Email</p>
                        <div className="email">{email}</div>
                    </div>
                    <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" className="input" placeholder='Enter your password' />
                    {/* <Link className='fgp' to={"/"}><p>Forgot your password?</p></Link> */}
                    <button className='btn_next' onClick={signIn}>Next</button>
                </div>
            </div>
        </div>
    </>

    )
}

export default Login_2