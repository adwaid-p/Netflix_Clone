import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import LoginNavBar from '../Components/NavBar/LoginNavBar'
// import { auth } from './config/firebase'
// import { createUserWithEmailAndPassword } from 'firebase/auth'
import FAQ from '../Components/FAQ';
import next from '../Images/next.png'

function Login() {
  // const [showPassword, setShowPassword] = useState(false)
  // const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const navigate = useNavigate();
  // const signIn = async (event) => {
  //   event.preventDefault();
  //   try {
  //     await createUserWithEmailAndPassword(auth, email, password);
  //     navigate('/home');
  //   } catch (error) {
  //     console.error("Error signing in: ", error);
  //   }
  // };
  // console.log(password)
  // console.log(email)
  return (
    <>
      <LoginNavBar />
      <div className="background">
        <div className="card">
          <h1>Unlimited movies, TV shows and more</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
          <form action="">
            {
              // showPassword ? <div className="input_btn">
              //   <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" required placeholder='Password' />
              //   <button onClick={signIn}>Watch</button>
              // </div> : 
              // // navigate('/login_2')
              //  <div className="input_btn">
              //   <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" required placeholder='Email address' />
              //   <button onClick={() => setShowPassword(true)}>Get Started <img src={next} alt="" /></button>
              // </div>
              <div className="input_btn">
                 <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" required placeholder='Email address' />
                 <button onClick={() => navigate('./login_2',{state:{email:email}})}>Get Started <img src={next} alt="" /></button>
              </div>
            }
          </form>



          {/* <div className="input_btn">
            <input type="email" required placeholder='Email address' />
            <button onClick={()=>setShowPassword(true)}>Get Started</button>
          </div>
          {showPassword && <>
          <div className="input_btn">
            <input type="password" required placeholder='Password' />
            <button>Watch</button>
          </div>
          </>} */}
        </div>
      </div>
      <div className="cnt2">
        <div className="cnt">
          <h1>Enjoy on your TV</h1>
          <h2>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>
        </div>
        <div className="image">
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
          {/* <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"></video> */}
          <video className='cnt1_video' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" autoPlay loop muted></video>
        </div>
      </div>

      <div className="cnt3">
        <div className="image">
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
          {/* <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"></video> */}
          {/* <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" autoPlay loop muted></video> */}
          <div className="sbox">
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" />
            <div className="heading">
              <h3>Stranger Things</h3>
              <h4>Downloading...</h4>
            </div>
            <div className="gif">
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt="" />
            </div>
          </div>
        </div>
        <div className="cnt">
          <h1>Download your shows to watch offline</h1>
          <h2>Save your favourites easily and always have something to watch.</h2>
        </div>
      </div>

      <div className="cnt2">
        <div className="cnt">
          <h1>Watch everywhere</h1>
          <h2>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>
        </div>
        <div className="image">
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt="" />
          {/* <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"></video> */}
          <video className='cnt2_video' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" autoPlay loop muted></video>
        </div>
      </div>

      <div className="cnt3">
        <div className="image">
          <img src="https://occ-0-2164-64.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" alt="" />
          {/* <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"></video> */}
          {/* <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" autoPlay loop muted></video> */}
        </div>
        <div className="cnt">
          <h1>Create profiles for kids</h1>
          <h2>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h2>
        </div>
      </div>

      <div className="cnt4">
        <h1>Frequently Asked Questions</h1>
        <FAQ summary="What is Netflix?" details="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"/>

        <FAQ summary="How much does Netflix cost?" details="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts." />

        <FAQ summary="Where can I watch?" details="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."/>
        <FAQ summary="How do I cancel?" details="Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime." />
        <FAQ summary="What can I watch on Netflix?" details="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want." />
        <FAQ summary="Is Netflix good for kids?" details="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."/>
      </div>
    </>

  )
}

export default Login