import React, { useEffect, useState } from 'react'
import {imageUrl,API_KEY,baseUrl} from '../../constants/constants'
import Youtube from 'react-youtube'
import axios from 'axios'
import './RowPost.css'
import close_img from '../../Images/close.png'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')
  const [showVideo, setShowVideo] = useState(false);
  useEffect(() => {
    axios.get(props.url).then((response) => {
      // console.log(response.data)
      // console.log(response.data);
      setMovies(response.data.results)
      // console.log(response.data.results)
    })
  }, [])
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const handleMovie=(id)=>{
    axios.get(`${baseUrl}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
        setShowVideo(true);
      }
    })
  }

  const closeModal = () => {
    setShowVideo(false);
    setUrlId('');
  };

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {
          movies.map((obj) => (
            <div key={obj.id}>
              <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? "smallPoster": "poster"} src={`${imageUrl+obj.backdrop_path}`} dis={obj.overview} alt=""/>   
              {/* <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? "smallPoster": "poster" || "showRow"} src={`${imageUrl+obj.poster_path}`} dis={obj.overview} alt=""/>    */}
              <h4 className='movieName'>{obj.name || obj.title}</h4>  
              {/* <p className='discription'>{obj.overview}</p>          */}
            </div>
              )
          )
        }

      </div>
      {showVideo && (
        <div className='modal'>
          <div className='modalContent'>
            <img
              className='close'
              src={close_img}
              alt="close"
              onClick={closeModal}
            />
            {urlId && <Youtube className='video' videoId={urlId.key} opts={opts} />}
          </div>
        </div>
      )}
    </div>
  )
}

export default RowPost