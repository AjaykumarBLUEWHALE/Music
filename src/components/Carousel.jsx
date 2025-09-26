import React from 'react'
const card =[
    {
    id:"1",
src:"https://pbs.twimg.com/media/G1jzdFRWQAA7cDN?format=jpg&name=large",
title1:"Teletech Bristol",
date:"26,jan",
place:"Las Vegas, NV $190",
  },
   {
    id:"2",
src:"https://i.pinimg.com/736x/eb/7d/a6/eb7da64bd1a23d7101fe402813eb370e.jpg",

title1:"Stairway to the Sky Tour",
date:"24,jan",
place:"New York City, NY, USA,$150",
  },
   {
    id:"3",
src:"https://pbs.twimg.com/media/GXu4GkNX0AAQIMu.jpg:large",

title1:"Stairway to the Sky Tour",
date:"24,nov",
place:"Edinburgh, UK – O2 Academy,$200",
  },
  
]
const button =[
  {
    btn:"uk"
  },
    {
    btn:"australia"
  },
    {
    btn:"belgium"
  },
    {
    btn:"denmark"
  },
    {
    btn:"france"
  },{
    btn:"germany"
  },
  {
    btn:"ireland"
  },
  {
    btn:"neitherlands"
  },
  {
    btn:"poland"
  },
]
const Carousel = () => {
  return (
   <>
<div className='overflow-hidden'>
  
<div className="text-white  text-left m-5">
  <h1 className="mb-2 text-2xl" style={{fontFamily:" 'Lomo Copy', sans-serif"}}>UP NEXT</h1>
 {
  button.map((item)=>(
     <button className="px-3 uppercase py-1 hover:opacity-100 m-1 bg-black text-white border-2 opacity-50 rounded">{item.btn}</button>
  ))
 }
 
</div>


   <div className='sm:flex  poster sm:ml-0 ml-[-32px]'>
    {card.map((item)=>(
       <div
       key={item.id}
    className="card  uppercase bg-black text-white w-[22rem] sm:w-[33rem]"
   
  >
    <img
      src={item.src}
      className="h-[25rem] w-full object-fill"
      alt="card1"
    />

    <div className="card-body space-y-3">
      {/* Title Row */}
      <div className="flex justify-between items-center">
        <h5 className="card-title truncate ">{item.title1}</h5>
        <h5 className="card-title">
              <span className='bg-white h-3 w-4 m-2 '></span>
         {item.date}</h5>
      </div>

      {/* Location + Tickets */}
      <div className="flex justify-between  text-[10px] opacity-50">
        <p className="card-text w-8">
         {item.place}
        </p>
        <button className="btn-1 opacity-50 hover:opacity-100 px-3 py-1 ">
          <span>TICKETS</span>
        </button>
      </div>
    </div>
  </div>
    ))}

</div>

</div>
   </>
  )
}

export default Carousel
