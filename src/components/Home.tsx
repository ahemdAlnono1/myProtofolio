import React from 'react'
import Navbar from './Navbar'
import Image1 from "../assets/Image1.webp"

function Home() {
  return (
    <div className='home'>
      <Navbar/>
    <div id="home">
      <div className="home-left">
        <h1>Think. Make. Solve.</h1>
        <h4>What I Do</h4>
        <p>I enjoy creating websites using javascript
           and make awsome design with my experince
        </p>
        <button><a href="#about">Learn more</a></button>
      </div>
      <div className="home-right">
        <img src={Image1} alt="" />
      </div>
    </div>
    </div>
  )
}

export default Home