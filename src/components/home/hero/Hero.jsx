import React from "react"
import { useHistory } from "react-router-dom"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  const history = useHistory();

  const handleBookSession = () => {
    history.push('/book-session'); // Change the route to the form route
  };

  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading title='Find the Right Path For You With the Best Counselors' />
            <div className='button'>
              <button className='primary-btn' onClick={handleBookSession}>
                BOOK FREE SESSION <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
