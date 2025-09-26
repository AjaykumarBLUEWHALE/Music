import React from 'react'
import Footer from '../components/Footer'
import Label from '../components/Label'

const NavIndex = () => {
  const info=[
    {id:1, title:"Launch", desc:"We started with a simple mission, to contribute to the manchester techno scene, with the aim to increase access to techno music in our home town"
  },
  {id:2, title:"Growth", desc:"After a break during covid, we came back with some of the biggest line ups manchester had ever seen and a renewed focus on our mission."},
  {id:3, title:"Today", desc:" we now host global events at clubs, in warehouses and at festivals. Working with the most talented artists in the industry to bring you line-ups on a global scale."},
  ]
  const modal =[
    {
      src:"https://cdn.prod.website-files.com/67058cdc24b90dd798e2fa3e/67058cdc24b90dd798e2fd15_TTAPPARELIMG-002-p-1600.webp",
      title:"Purple Mesh",
      id:"drop 013",
      price:"rs.2300"
    },
      {
      src:"https://cdn.prod.website-files.com/67058cdc24b90dd798e2fa3e/67058cdc24b90dd798e2fcf1_TTAPPARELIMG-001-p-1600.webp",
       title:"Track top",
      id:"drop 014",
      price:"rs.2800"
    }
    ,  {
      src:"https://cdn.prod.website-files.com/67058cdc24b90dd798e2fa3e/67058cdc24b90dd798e2fcf0_TTAPPARELIMG-003.webp",
       title:"Pouch bag",
      id:"drop 015",
      price:"rs.2450"
    },
    {
      src:"https://cdn.prod.website-files.com/67058cdc24b90dd798e2fa3e/67058cdc24b90dd798e2fc8f_TTAPPARELIMG-004.webp",
       title:"crop lesh top",
      id:"drop 016",
      price:"rs.3400"
    }
  ]
  return (
    <div>
    
      <Label title="INDEX" />
        <div className='text-white -z-9 uppercase '>
        <div className='flex flex-col  items-center justify-center text-center mt-20 mb-20 space-y-6'>
            <article className='sm:text-[33.88px] text-start uppercase'>Teletech was <span className='flicker'>founded in Manchester, UK</span>. From our home town we have grown a reputation as one of the wildest and most respected techno events across the globe.</article>
        </div>
        <div className='sm:flex  gap-4 sm:px-20 text-start mb-20'>
             <div className='sm:flex gap-4 sm:px-20 text-start mb-20'>
        {info.map((item) => (
          <div key={item.id} className="grid-items mb-4">
            <h1>{item.title}</h1>
            <p className='opacity-50 mt-4 sm:text-[15px] text-[10px]' >{item.desc}</p>
          </div>
        ))}
      </div>
           
        </div>
        <div className='text-start apparel text-3xl sm:px-20 px-4 sm:mb-20 sm:flex' style={{fontFamily:" 'Lomo Copy', sans-serif"}}>
     <h1 className=' mr-8 '>     Apparel</h1>

<div className='opacity-50 sm:text-2xl text-[20px] sm:mt-0 mt-6 mb-4'><h2><span className='sm:ml-100 ml-30  '>Dress to 
  sweat. Dress for high adrenaline.</span> <span className='flicker'>Dress for the drop.</span> Dress to move. Dress to rave.</h2></div>
        </div>
      <div className='sm:flex mt-[100px] mb-[100px]'>
          <div className='text-start text-white w-80  m-auto'>
<h1 className=' sm:text-[15px] text-[10px]'>Unique Apparel</h1>
<p className=' text-[10px] opacity-50'>Over the last year we’ve expanded our clothing line to include high quality, completely unique items. Get notified of new drops every month.

</p>
        </div>
        <div><button className='btn-1 sm:mr-[40px] ml-[-150px] mt-4 opacity-50 hover:opacity-100'>
  <span> NOTIFY ME
  </span>
</button></div>
      </div>
 
        <div className="sm:flex gap-0 px-10 mb-[100px]">
  {modal.map((item, index) => (
    <div
      key={index}
      className="group relative  w-[360px] sm:ml-0 ml-[-72px]  h-full overflow-hidden "
    >
      <img
        src={item.src}
        alt=""
        className={`
          w-full h-full  object-cover transition-transform duration-500
          group-hover:scale-90   
          hover:scale-110      
          ${index === 0 ? "group-hover:translate-x-[-10px]" : ""}
          ${index === 1 ? "group-hover:translate-x-[-10px]" : ""}
           ${index === 2 ? "group-hover:translate-x-[-10px]" : ""}
            ${index === 3 ? "group-hover:translate-x-[-10px]" : ""}
        `}
      
      />
          {/* Overlay caption */}
      <div className="absolute  bottom-2 left-4 w-full bg-transparent text-black text-sm  text-start py-1  ">
      <h1>  {item.title}</h1>
       <h2>  {item.id}</h2>
          <h3>{item.social1} {item.social2}</h3>
      </div>
    </div>
  ))}
</div>

    </div>
    <div className='sm:ml-0 ml-[-20px]'>
      <Footer />
    </div>
    </div>
  )
}

export default NavIndex