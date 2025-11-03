import React from 'react'
import Footer from '../components/Footer'
import { picture } from '../data/Data'
import Label from '../components/Label'
const Archive = () => {
  return (
    <>
       <Label title="ARCHIVE" />
<div className="w-full sm:w-[98vw] land-gallery mx-auto overflow-x-hidden"> 
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
  
    </div>
      <div className='sm:ml-0 ml-[50px]'>
      <Footer />
    </div>
    </>
 
  )
}

export default Archive;
