import React, { useEffect, useState } from 'react'
import { API_KEY, imageUrl } from '../constants/constants'
import axios from 'axios'
import '../Components/Banner/Banner.css'
import './TvShows.css'
import TvShowsRow from './TvShowsRow'
// import RowPost from '../Components/RowPost/RowPost'
import {show } from '../urls'
import NavBar from '../Components/NavBar/NavBar'

function TvShows(props) {
    const [shows, setShows] = useState(null);
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}&language=en-US`).
            then((response) => {
                // console.log(response.data)
                // setShows(response.data.results[0])
                // setShows(response.data.results[0])
                props.bimage?setShows(props.bimage):setShows(response.data.results[0])
            })
    }, [props.bimage])
    console.log(props)
    props.bimage?console.log("yes"):console.log("no")
    return (
        <div
            style={{ backgroundImage: `url(${shows ? imageUrl + shows.backdrop_path : " "})` }}
            className="banner">
                <NavBar/>
            <div className="tvContent">
                <h1 className="tvTitle">{shows ? shows.name || shows.title : ""}</h1>
                <div className="banner_buttons">
                    <button className="button play">Play</button>
                    <button className="button">My List</button>
                </div>
                <h1 className="tvDescription">{shows ? shows.overview || shows.overview : ""}</h1>
            </div>
            <div className="fade_bottom"></div>
            <div className="row">
                {/* <div className="posters">
                    {
                        shows.map((obj) => (
                        <div>
                            <img src={`${imageUrl + obj.poster_path}`} alt="" className="poster" />
                        </div>)

                        )
                    }
                </div> */}
                {/* <RowPost url={show} title="Action" className={"showRow"}/> */}
                {/* <TvShowsRow/> */}
            </div>
        </div>
    )
}

export default TvShows