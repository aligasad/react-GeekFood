import React from 'react'
import './Styles.css';
import CardSection from './CardSection'

function HeroSection() {
  return (
    <>
      <div id="hero">
        <div className="page1">
          <div className="opacity"></div>
          <div className="content">
            <h1>Let us find your <br /> <span>Forever Food.</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quis cupiditate maxime atque.</p>
            <div className="btn">
              <button className='btn1'>Search Now</button>
              <button className='btn2'>Know more</button>
            </div>
          </div>
        </div>
        <div className="page2">
          <div className="left">
            <img src="https://assets.architecturaldesigns.com/plan_assets/324991405/large/50148ph_1490881707.jpg" alt="img" />
          </div>
          <div className="right">
            <div className="content">
              <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, Debits.</h2>
              <p>Lorem ipsum dolor sit amet cons ectetur adipisicing elit. Vero volupt atibus quam suscipit ea quas laudantium. Labore recusa ndae nihil laboriosam praesenti porro cupiditate?</p>
              <button>Get in Touch</button>
            </div>
          </div>
        </div>
      </div>
      <CardSection />
    </>
  )
}

export default HeroSection
