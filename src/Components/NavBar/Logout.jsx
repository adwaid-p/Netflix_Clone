import React from 'react'
import {auth} from '../../Pages/config/firebase'
import { signOut } from 'firebase/auth'
import './Logout.css'
import { Navigate, useNavigate } from 'react-router-dom'
import logout from '../../Images/logout.png'

function Logout() {
    const navigate=useNavigate();
    // console.log(props.loginfo)
  return (
    <div className="logout">
        {/* <p>+</p> */}
        <button onClick={()=>{
          signOut(auth)
          console.log(auth.currentUser)
          navigate('/')
        }} ><img className='log_out' src={logout} alt="" />  Log out</button>
        {/* <button onClick={()=>{
          console.log(auth.currentUser)
        }}>check</button> */}
    </div>
  )
}

export default Logout