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
import Loader from '../Components/Loader/Loader'

function Result() {
    const [data, setData] = useState([])
    const [seasons, setSeasons] = useState([])
    const [showEpisode, setShowEpisode] = useState(false)
    const [loader, setLoader] = useState(true);
    const location = useLocation()
    // const {id}=location.state;
    const id = location.state?.id;
    const ctgry = location.state?.ctgry
    // console.log('ctgry'+ctgry)
    useEffect(() => {
        try {
            axios.get(`${baseUrl}/${ctgry}/${id}?api_key=${API_KEY}&language=en-US`).then((response) => {
                // console.log(response.data)
                setData(response.data)
            })
        } catch (error) {
            console.log('error')
        } finally {
            setLoader(false)
        }

    }, [])

    useEffect(() => {
        axios.get(`${baseUrl}/tv/${id}?api_key=${API_KEY}&language=en-US`)
            .then((response2) => {
                // setSeasons(response2.data.seasons || []);
                // console.log(response2.data)
                const filteredSeasons = response2.data.seasons.filter(season => season.season_number > 0);
                setSeasons(filteredSeasons);
            })
            .catch((error) => {
                console.error('Error fetching seasons:', error);
            });
    }, [id]);

    //   console.log(data.original_name)
    return (
        <>


            <NavBar />
            {loader && <Loader/>
            }
            <div className='banner Result_banner' style={{ backgroundImage: `url(${imageUrl + data.backdrop_path})` }}>
                {/* <div className='banner'  style={{
    background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.808), rgba(0, 0, 0, 0.37) 50%, rgba(0, 0, 0, 0.359) 0%, rgba(0, 0, 0, 0.808)), url(${imageUrl + data.backdrop_path})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition:'center'
  }}> */}
                <div className="content">
                    <h1 className='title'>{data ? data.name || data.title : ""}</h1>
                    <h1 className="description"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/330px-IMDB_Logo_2016.svg.png" alt="" />{data ? data.vote_average : ""}/10
                        {/* <img src={star} alt="" /> */}
                    </h1>
                    {/* <h1 className='description'>
                {data.release_date.slice(0,4)} | {data.adult?"A":"U/A 13+"}
            </h1> */}
                    <div className="banner_buttons">
                        <button className="button play"><img src={play} alt="" />Play</button>
                        <button className="button add"><img src={add} alt="" /> My List</button>
                    </div>
                    <h1 className='description'>{data ? data.overview : ""}</h1>
                </div>
                <div className="fade_bottom"></div>
                {<div>
                    {/* ctgry=="tv"?<h1>Yes</h1>:<h1>No</h1> */}
                    {/* {
                data.seasons && data.seasons.map((obj)=>{
                    return (
                        // console.log(obj.original_name)
                        // console.log(obj.name)
                        <Episods Sname={obj.name}/>
                    )
                })
                <Episods Sname={data.original_name}/>
                <Episods/>
            } */}
                    {seasons.map((season) => (
                        <div className='episode_container' key={season.id}>
                            {/* <button onClick={()=>{
                                setShowEpisode(true)
                            }}>{season.name}</button> */}
                            <h1 className='seasone_title'>{season.name}</h1>
                            <Episods className='episode_box' tvId={id} seasonNumber={season.season_number} />
                            {/* <div className="line"></div> */}
                        </div>
                    ))}

                </div>
                }

            </div>
        </>
    )

}

export default Result