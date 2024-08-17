import React, { useEffect, useState } from 'react'
import { redirect, useLocation, useNavigate } from 'react-router-dom';
import './Sign.css'
import './SearchResults.css'
import NavBar from '../Components/NavBar/NavBar';
import axios from 'axios';
import { API_KEY, baseUrl, imageUrl } from '../constants/constants';
// import SearchBox from './SearchBox';

function SearchResults() {
  const [Movie, setMovie] = useState([])
  const [Tv, setTv] = useState([])
  const [category, setCategory] = useState(true)
  const location = useLocation();
  const navigate = useNavigate();
  const searchTerm = location.state?.searchTerm;

  // console.log(location.pathname)

  useEffect(() => {
    if (!searchTerm) {
      // If searchTerm is not available, redirect to a safe page, e.g., the home page
      navigate(location.pathname);
      return;
    }
    axios.get(`${baseUrl}/search/movie?api_key=${API_KEY}&query=${searchTerm}&language=en-US`).then((movie_data) => {
      // axios.get(`${baseUrl}/search/multi?api_key=${API_KEY}&query=${searchTerm}&language=en-US`).then((response) => {
      // console.log(movie_data.data.results[0].title);
      setMovie(movie_data.data.results || [])
    })
    axios.get(`${baseUrl}/search/tv?api_key=${API_KEY}&query=${searchTerm}&language=en-US`).then((tv_info) => {
      setTv(tv_info.data.results || [])
    })
  }, [searchTerm, navigate])

  // console.log(searchTerm)

  // Use searchTerm to fetch search results
  return (
    <>
      <NavBar />
      <div className='search_contaniner'>
        <button className='sort' onClick={() => {
          setCategory(true)
        }}>Movies</button>
        <button className='sort' onClick={() => {
          setCategory(false)
        }}>Series</button>
        {/* <h1 >{info.title}</h1> */}
        {
          category ?
            <div className="Resulte_box">
              <h1 className='name'>Movie</h1>
              {
                Movie.length!=0 ? <div className="search_row">
                  {
                    Movie.map((data, id) => {
                      return (
                        data.poster_path ?
                          <div className="row_card" key={data.id} onClick={() => {
                            // console.log(data.id)
                            // axios.get(`https://api.themoviedb.org/3/tv/${76479}?api_key={API_KEY}&language=en-US`).then((res)=>{
                            //   console.log(res.data)
                            // })
                            // console.log(data.id)
                            navigate('../result', { state: { id: data.id, ctgry:"movie" } })
                          }}>
                            <img src={`${imageUrl + data.poster_path}`} alt="" />
                            <h1>{data ? data.name || data.title : ""}</h1>
                          </div>
                          : null
                      );
                    })
                  }
                </div> : 
                <h1 className='status'>Not Found!</h1>
              }

            </div> :
            <div className="Resulte_box">
              <h1 className='name'>Series</h1>
              {
                Tv.length!=0?<div className="search_row">
                  {
                    Tv.map((data, id) => {
                      return (
                        data.poster_path ?
                          <div className="row_card" key={data.id} onClick={() => {
                            // console.log(data.id)
                            // axios.get(`https://api.themoviedb.org/3/tv/${76479}?api_key={API_KEY}&language=en-US`).then((res)=>{
                            //   console.log(res.data)
                            // })
                            // console.log(data.id)
                            navigate('../result',{state:{id:data.id,ctgry:"tv"}})
                          }}>
                            <img src={`${imageUrl + data.poster_path}`} alt="" />
                            <h1>{data ? data.name || data.title : ""}</h1>
                          </div>
                          : null
                      );
                    })
                  }
                </div>:
                <h1 className='status'>Not Found</h1>
              }

            </div>
        }
        {/* <div className="line"></div> */}



      </div>
    </>

  );
}



// function Search() {
//   return (
//     <div>Search</div>
//   )
// }

export default SearchResults