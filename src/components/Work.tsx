import React from 'react'
import moon from "../assets/moon.png";

function Work() {
  const [activeHeader, setActiveHeader] = React.useState(1);

  const handleHeaderClick = (headerNum:number) => {
    setActiveHeader(headerNum);
  };
  return (
    <div className='work' id="work">
      <div className='projects'>
      <h1
        className={`work-h1-1 ${activeHeader === 1 ? 'active' : ''}`}
        onClick={() => handleHeaderClick(1)}
      >
        Dectinary
      </h1>
      <h1
        className={`work-h1-2 ${activeHeader === 2 ? 'active' : ''}`}
        onClick={() => handleHeaderClick(2)}
      >
        game
      </h1>
      <h1
        className={`work-h1-3 ${activeHeader === 3 ? 'active' : ''}`}
        onClick={() => handleHeaderClick(3)}
      >
        urlShorter
      </h1>
      <h1
        className={`work-h1-4 ${activeHeader === 4 ? 'active' : ''}`}
        onClick={() => handleHeaderClick(4)}
      >
        project3
      </h1>

      </div>
      <div className='photos'> 
          <img src={moon} alt="" />
      </div>
    </div>
  )
}

export default Work