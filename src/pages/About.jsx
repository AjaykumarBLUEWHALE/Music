import React from 'react'
import Footer from '../components/Footer'
import Label from '../components/Label'
const About = () => {
  return (
  <>
   <Label title="ABOUT" />
 
<div className='text-white -z-9 uppercase'>
  <div className='flex flex-col  items-center justify-center text-center mt-20 mb-20 space-y-6'>
    <article className='sm:text-[33.88px] text-start uppercase'>
      <span className='flicker sm:ml-[400px]'> Zayn Malik rose to fame <br/> as a solo artist,</span> UK. From his early beginnings, he has captivated fans worldwide with unforgettable performances and chart-topping hits.
    </article>
  </div>

  <div className='sm:flex  gap-4 sm:px-20 text-start mb-20'>
    <div className="grid-items mb-2">
      <h1>Debut</h1> 
      <p className='opacity-75'>
        Zayn began his solo career after leaving One Direction, exploring a new sound and style that wowed fans everywhere.
      </p>
    </div>
    <div className="grid-items">
      <h1>Rise</h1> 
      <p className='opacity-75'>
        With hit singles and memorable live performances, Zayn quickly became a major solo act on the global stage.
      </p>
    </div>
    <div className="grid-items">
      <h1>Today</h1> 
      <p className='opacity-75'>
        He continues to headline concerts and residencies worldwide, collaborating with top artists and giving fans incredible live experiences.
      </p>
    </div>
  </div>

  <div className='sm:flex mt-[100px] mb-[100px]'>
    <div className='text-start text-white w-80  m-auto'>
      <h1 className=' sm:text-[15px] text-[10px]'>Authenticity</h1>
      <p className=' text-[10px] opacity-50'>
        Zayn has always stayed true to his artistic vision, ensuring every performance reflects his style and passion for music.
      </p>
    </div>
    <div>
      <button className='btn-1 sm:mr-[40px] ml-[-100px] mt-4 opacity-50 hover:opacity-100'>
        <span> READ VIA MIXMAG </span>
      </button>
    </div>
  </div>
</div>

     <div className='sm:ml-0 ml-[-20px]'>
      <Footer />
    </div>
  </>
  )
}

export default About