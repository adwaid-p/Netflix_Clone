import React, { useEffect, useState } from 'react'
// import './Login.css'
import '../Components/Banner/Banner.css'
import NavBar from '../Components/NavBar/NavBar'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { API_KEY, baseUrl, imageUrl } from '../constants/constants'
import star from '../Images/star.png'
import play from '../Images/play.png'
import add from '../Images/add.png'
import Episods from '../Components/Results/Episods'

function Face() {
    const [data, setData] = useState([])
    // const [seasons, setSeasons] = useState([])
    const location = useLocation()
    // const {id}=location.state;
    const name = location.state?.name;
    const overview = location.state?.overview
    const image = location.state?.image
    const rating = location.state?.rating
    // console.log('ctgry'+ctgry)
    // useEffect(() => {
    //     axios.get(`${baseUrl}/${ctgry}/${id}?api_key=${API_KEY}&language=en-US`).then((response) => {
    //         console.log(response.data)
    //         setData(response.data)
    //     })
    // }, [])
    //   console.log(data.original_name)
    return (
        <>


            <NavBar />
            <div className='banner episode_banner' style={{ backgroundImage: `url(${imageUrl + image})` }}>
                <div className="content">
                    <h1 className='title'>{name ? name: ""}</h1>
                    <h1 className="description"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/330px-IMDB_Logo_2016.svg.png" alt="" />{rating ? rating : ""}/10
                        {/* <img src={star} alt="" /> */}
                    </h1>
                    <div className="banner_buttons">
                        <button className="button play"><img src={play} alt="" />Play</button>
                        <button className="button add"><img src={add} alt="" /> My List</button>
                    </div>
                    <h1 className='description'>{overview ? overview : ""}</h1>
                </div>
                <div className="fade_bottom"></div>
            </div>
        </>
    )
}

export default Face