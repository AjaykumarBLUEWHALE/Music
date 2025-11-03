import React from 'react'
import Footer from '../components/Footer'
import { picture } from '../data/Data'
import Label from '../components/Label'
const Archive = () => {
  return (
    <>
       <Label title="ARCHIVE" />
<div className="w-screen sm:w-screen land-gallery sm:-ml-21 -ml-8 mx-0 "> 
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
        <div className=' sm:ml-0 ml-[-40px]'>
      <Footer />
    </div>
    </>
 
  )
}

export default Archive;
