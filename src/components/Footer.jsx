import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
        
        <h1 className='text-white'>
            
            <div className='grid cursor-pointer sm:grid-cols-4 grid-cols-1 gap-4 p-4  text-start text-[10px] sm:text-[12px]'>
                <div className=' uppercase w-49'>
                    <h1 className='text-[20px]'>NAVIGTION</h1>
                 <div className='grid grid-cols-2 opacity-75 '>
                    <ul>
                <Link to="/index">  <li>INDEX</li></Link>
                 <Link to="/events">
                   <li>events</li></Link>
                  <Link to="/password">
                   <li>APPAREL</li></Link>
                   <Link to="/about">  <li>ABOUT</li></Link>
                

                 </ul>
                 
                   <ul className='land-mob'>
                        <Link to="/archive">        <li>ARCHIVE</li></Link>
                     <Link to="/">   <li className='opacity-100 '><strong>LABEL</strong></li></Link>
                      <Link to="/residents">     <li>RESIDENTS</li></Link>
                       <Link to="/XXL">  <li>XXL</li></Link>
            
                
              
                 </ul></div>
                </div>
                <div> <h1 className='text-[20px] '>NETWORK</h1>
                <ul className='opacity-75 '><li><a href="https://www.instagram.com/zayn/?hl=en" target='blank'>INSTAGRAM</a></li>
                   <li><a href="https://x.com/zaynmalik?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target='blank'>Twitter</a></li>
                   <li><a href="https://open.spotify.com/artist/5ZsFI1h6hIdQRw2ti0hz81" target='blank'>SPOTIFY</a></li>
                   <li><a href="https://www.youtube.com/channel/UC3PdiRW5dUA4V70ueeR1eHA" target='blank'>YOUTUBE</a></li></ul>
                </div>
                <div className='text-[20px]'><h1 className='text-[20px]'> Zayn 2025 &copy;</h1>

                    <p className='text-[10px] opacity-75 '>THE PREMIERE TECHNO EVENTS AND APPAREL BRAND. BORN IN BRADFORD. MADE GLOBAL BY YOU.</p>
                </div>
                <div className='m-auto 0'><img src="/images/logo.png" 
    alt="logo"  className='h-18 w-18 invert flicker'/></div>
            </div>
            <div className='grid sm:grid-cols-4  grid-cols-2 text-center mt-6  bottom-0 relative'>
<p className='text-[10px] opacity-75 mb-4 cursor-pointer'>MADE BY AJAY KUMAR</p>
<Link to="/tos"><p className='text-[10px] opacity-75 mb-4 cursor-pointer'>TERMS & CONDITIONS</p></Link>
<Link to="/privacy"><p className='text-[10px] opacity-75 mb-4 cursor-pointer'>PRIVACY POLICY</p></Link>
<p className='text-[10px] opacity-75 mb-4'>2025 ZAYN <br/> ALL RIGHTS RESERVED</p>
            </div>
        </h1>
    </div>
  )
}

export default Footer