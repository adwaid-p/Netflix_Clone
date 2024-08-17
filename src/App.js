// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import LoginNavBar from './Components/NavBar/LoginNavBar';
// import Banner from './Components/Banner/Banner';
// import RowPost from './Components/RowPost/RowPost';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
// import {originals,action,comedy,romance,horror,documentaries} from './urls'
import Home from './Pages/Home';
import Login from './Pages/Login';
// import TvShows from './Pages/TvShows';
import TvShowsRow from './Pages/TvShowsRow';
import Movie from './Pages/Movie';
import Sign from './Pages/Sign';
import SearchResults from './Pages/SearchResults';
import Result from './Pages/Result';
import Face from './Components/Face';
import Login_2 from './Pages/Login_2';

function App() {
  return (
    <div className="App">
      <Router>
      {/* <LoginNavBar/>  */}
      {/* <NavBar/> */}
        <Routes> 

        <Route element={<Home/>} path='/home'/>
        <Route element={<Login/>} path='/'/>
        <Route element={<TvShowsRow/>} path='/tvshows'/>
        <Route element={<Movie/>} path='/movie'/>
        <Route element={<Sign/>} path='/sign'/>
        <Route element={<SearchResults/>} path='/search'/>
        <Route element={<Result/>} path='/result'/>
        <Route element={<Face/>} path='/episode'/>
        <Route element={<Login_2/>} path='/login_2'/>
        </Routes>
        {/* <Home/> */}
      </Router>
    </div>
  );
}

export default App;
