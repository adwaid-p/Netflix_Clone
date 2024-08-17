import React,{useEffect, useState} from 'react'
import {API_KEY,imageUrl} from '../../constants/constants'
import axios from '../../axios'
import './Banner.css'
import star from '../../Images/star.png'
import play from '../../Images/play.png'
import add from '../../Images/add.png'

function Banner() {
  const [movie, setMovie] = useState()
useEffect(() => {
  axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
    // console.log(response.data.results[0]);
    setMovie(response.data.results[Math.floor(Math.random() * 20)])
  })
}, [])


  return (
    <div 
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
    className='banner'>
        <div className="content">
            <h1 className='title'>{movie ? movie.name || movie.title: ""}</h1>
            <h1 className="description"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/330px-IMDB_Logo_2016.svg.png" alt="" />{movie?movie.vote_average.toFixed(2):""}/10 <img src={star} alt="" /></h1>
            <div className="banner_buttons">
                <button className="button play"><img src={play} alt="" />Play</button>
                <button className="button add"><img src={add} alt="" /> My List</button>
            </div>
            <h1 className='description'>{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner