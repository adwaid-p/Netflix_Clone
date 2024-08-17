import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_KEY, baseUrl, imageUrl } from '../../constants/constants'
import '../../Pages/SearchResults.css'
import { useNavigate } from 'react-router-dom';

function Episods({ tvId, seasonNumber }) {
  const [episodes, setEpisodes] = useState([]);
  const navigate=useNavigate()

  useEffect(() => {
    axios.get(`${baseUrl}/tv/${tvId}/season/${seasonNumber}?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        setEpisodes(response.data.episodes || []);
        // console.log(response.data.episodes)
        // console.log(response.data.episodes[0])
      })
      .catch((error) => {
        console.error('Error fetching episodes:', error);
      });
  }, [tvId, seasonNumber]);
  // console.log(episodes[0].id)
  return (
    <div className='episode'>
      {episodes.map((episode) => (
        episode.still_path ? <div className="episode_card">
          <img className='episode_image'
            key={episode.id}
            src={`${imageUrl + episode.still_path}`}
            alt={episode.name} onClick={
              () => {
                navigate('../episode',{state:{name:episode.name,overview:episode.overview, image:episode.still_path, rating:episode.vote_average}})
                // console.log(episode.id)
              }
            }
          />
          <h3 className='episode_name'>{episode.name}</h3>
        </div>: <h2>No data available</h2>
      ))
      }
    </div>
  );

}

export default Episods