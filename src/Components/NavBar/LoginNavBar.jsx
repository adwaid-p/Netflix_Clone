import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'

function LoginNavBar() {
  return (
    <div className='navbar'>
      <div className="box">
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
        {/* <nav>
          <Link className='Link' to={"/home"}>Home</Link>
          <Link className='Link' to={"/tvshows"}>TV Shows</Link>
          <Link className='Link' to={"/movie"}>Movies</Link>
          <Link className='Link' to={"/home"}>Latest</Link>
        <Link className='Link' to={"/home"}>My List</Link>
        </nav> */}
      </div>
      <div className="box_2">
        {/* <a href="">Search</a>
        <img className='avatar' src="https://letstryai.com/wp-content/uploads/2023/08/midjourney-prompt-for-avatars-male.jpg" alt="" /> */}
        <Link className='Link' to={"/sign"}>
            <button className='signin_btn'>Sign In</button>
        </Link>
      </div>
    </div>
  )
}

export default LoginNavBar