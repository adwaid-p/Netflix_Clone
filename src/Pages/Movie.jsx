import axios from 'axios'
import { API_KEY, baseUrl, imageUrl } from '../constants/constants'
import React, { useEffect, useState } from 'react'
import '../Components/Banner/Banner.css'
import './TvShows.css'
import NavBar from '../Components/NavBar/NavBar'
import MovieRow from './MovieRow'

function Movie() {
  const [shows, setShows] = useState(null);
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data);
      setShows(response.data.results[3])
    })
  },[])
  return (<>
      <NavBar/>
      <div className='banner'
      style={{backgroundImage:`url(${shows? imageUrl+shows.backdrop_path: " "})`}}
    >
      {/* <h1>Hi</h1> */}
    {/* <div className="fade_bottom"></div> */}
    <MovieRow/>
    </div>
  </>

  )
}

export default Movie