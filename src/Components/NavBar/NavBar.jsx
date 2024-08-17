import React, { useState } from 'react'
import "./NavBar.css"
import { Link, useNavigate } from 'react-router-dom'
import Logout from './Logout'
import search from '../../Images/search.png'


function NavBar() {
  const [show, setShow] = useState(false)
  const [showInput, setShowInput] = useState(false)
  const [input, setInput] = useState("")
  // console.log("the input :"+showInput)
  const navigate=useNavigate()
  let Search=(e)=>{
    // setShowInput(false)
    // navigate('./movie')
    e.preventDefault();
  navigate('/search', { state: { searchTerm: input } });
  }
  return (
    <div className='navbar'>
      <div className="box">
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
        <nav>
          <Link className='Link' to={"/home"}>Home</Link>
          <Link className='Link' to={"/tvshows"}>TV Shows</Link>
          <Link className='Link' to={"/movie"}>Movies</Link>
          {/* <Link className='Link' to={"/home"}>Latest</Link> */}
          <Link className='Link' to={"/login_2"}>My List</Link>
        </nav>
        {/* <a href="#">Home</a>
        <a href="#">TV Shows</a>
        <a href="#">Movies</a>
        <a href="#">Latest</a>
        <a href="#">My List</a> */}
      </div>
      <div className="box_2">
        <Link onClick={()=>setShowInput(true)} className='Link'>
          {showInput?<><input onChange={(e)=>setInput(e.target.value)} className='search' type="text" placeholder='Search' /><img onClick={Search} src={search} alt="" /></>:"Search"}
          </Link>
        <img onClick={()=>show?setShow(false):setShow(true)} className='avatar' src="https://letstryai.com/wp-content/uploads/2023/08/midjourney-prompt-for-avatars-male.jpg" alt="" />
       {show?<Logout/>:null}
      </div>
    </div>
  )
}

export default NavBar