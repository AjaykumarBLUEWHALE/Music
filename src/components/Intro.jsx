import React from 'react'

const Intro = () => {
  return (
    <div className='text-white -z-9 uppercase'>
        <div className='flex flex-col  items-center justify-center text-center mt-20 mb-20 space-y-6'>
            <article className='sm:text-[33.88px] text-start uppercase'>As part of our commitment to the scene, in early 2023 we started 
                <span className='flicker'> releasing <br/> music we love,</span> brought to you by our favourite artists.</article>
        </div>
        <div className='sm:flex  gap-4 sm:px-20 text-start mb-20'>
            <div className="grid-items mb-2 ">
                <h1>Platform
</h1> <p className='opacity-75 '>We believe in providing a platform for the artists we love and use our imprint to release the best music
     from both established artists and newcomers.</p>
            </div>
            <div className="grid-items"> <h1>Variety
</h1> <p className='opacity-75 '>In line with the collective tastes of our team, we believe in delivering a broad variety of music through our imprint, ranging from balearic to dark.</p></div>
            <div className="grid-items"> <h1>Energy
</h1> <p className='opacity-75 '>We believe that dance floor energy comes in many styles and our aim is to cover this range of energy through our releases by a diverse set of artists.</p></div>
        </div>
    </div>
  )
}

export default Intro