import axios from 'axios'
import { API_KEY, baseUrl, imageUrl } from '../constants/constants'
import React, { useEffect, useState } from 'react'
import TvShows from './TvShows'

function TvShowsRow() {
    const [rowShow, setRowShow] = useState([])
    const [send, setSend] = useState(null)
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}&language=en-US`).then(
            (response)=>{
                // console.log(response.data.results)
                setRowShow(response.data.results)
            }
        )
    }, [])
    
  return (
    <div className='container'>
            <TvShows bimage={send} />
      <div className="showRow">{
        rowShow.map((obj)=>(
            <div>
                {/* <img className='showPoster' src={`${imageUrl+obj.backdrop_path}`} alt="" /> */}
                <img className='showPoster' onClick={
                    ()=>{
                        setSend(obj)
                    }
                } src={`${imageUrl+obj.poster_path}`} alt="" />
            </div>
        ))
    }
    </div>
    </div>


  )
}

export default TvShowsRow