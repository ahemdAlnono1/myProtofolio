import React from 'react'

function Who() {
  return (
    <div className='who' id="about">
      <div className="about-cup">
        <div className='cup'>
          <div className='top'></div>
          <div>
          <span style={{ "--i": 0 } as React.CSSProperties}>hello</span>
          <span style={{ "--i": 1 } as React.CSSProperties}>i am</span>
          <span style={{ "--i": 2 } as React.CSSProperties}>ahmed</span>
          <span style={{ "--i": 3 } as React.CSSProperties}>fullstack developer</span>
          </div>
        </div>
      </div>
      <div className="home-left">
        <h1>Think out side the square space</h1>
        <h4>Who I am</h4>
        <p>
          iam creative fullStack developer
        </p>
        <button><a href="#work">sea my work</a></button>
      </div>
    </div>
  )
}

export default Who