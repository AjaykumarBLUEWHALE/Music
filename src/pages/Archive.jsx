import React from 'react'
import Footer from '../components/Footer'
import { picture } from '../data/Data'
import Label from '../components/Label'
const Archive = () => {
  return (
    <>
       <Label title="ARCHIVE" />
       <div className=' sm:w-[98.95vw]   land-gallery w-[110vw] ml-[-68px] sm:ml-[90]'>
      <div className="gallery">
      {picture.map((item) => (
        <img
          key={item.id}
          src={item.img}
          alt={`Image ${item.id}`}
          className="gallery-image w-full  object-cover"
        />
      ))}
    </div>  
    <div className='sm:ml-0 ml-[50px]'>
      <Footer />
    </div>
    </div>
    </>
 
  )
}

export default Archive;
