import React from 'react'
import Footer from '../components/Footer'
import Label from '../components/Label'

const Residents = () => {
    const modal =[
    {
      src:"https://cdn.prod.website-files.com/67058cdc24b90dd798e2fa3e/67058cdc24b90dd798e2fd14_TT24-Residents-CS.webp",
      title:"Charlie",
      id:"london",
      social1:"in",
      social2:"x"
    },
      {
      src:"https://cdn.prod.website-files.com/67058cdc24b90dd798e2fa3e/67058cdc24b90dd798e2fd13_TT-RES-_0000_TT24-Residents-_0001_Layer%201%20copy-min.jpg",
       title:"Track top",
      id:"germany",
       social1:"in",
      social2:"x"
    }
    ,  {
      src:"https://cdn.prod.website-files.com/67058cdc24b90dd798e2fa3e/67058cdc24b90dd798e2fd12_TT-RES-_0001_TT24-Residents-_0000_cloudy-residency-edited-4%20copy%202-min.jpg",
       title:"Pouch bag",
           id:"germany",
    social1:"in",
      social2:"x"
    },
   
  ]
  return (
 <> 
       <Label title="RESIDENTS" />
   <div className='text-white -z-9 uppercase'>
        <div className='flex flex-col  items-center justify-center text-center mt-20 mb-20 space-y-6'>

          <article className='sm:text-[33.88px] text-start uppercase'>
         <span className='ml-[100px]'>Our residents are the heartbeat</span> of Teletech, featuring regularly at our events and <span className='flicker'>playing a pivotal role</span> in showcasing our brand across the globe.
          </article>

        </div>
        <div className='sm:flex  gap-4 sm:px-20 text-start mb-20'>
            <div className="grid-items mb-2 ">
                <h1>impact
</h1> <p className='opacity-75  sm:text-[12px] text-[10px] '>Our residents leave a lasting mark wherever they go, driving forward the underground music scene with powerful and unique performances.

</p>
            </div>
            <div className="grid-items"> <h1>community
</h1> <p className='opacity-75 sm:text-[12px] text-[10px] '>our residents are more than performers, they are the core of a global community, creating unforgettable shared experiences that transcend borders and cultures.

</p></div>
            <div className="grid-items"> <h1>authenticity
</h1> <p className='opacity-75  sm:text-[12px] text-[10px]'>Staying true to their roots, our residents remain uncompromising in their sound and consistently deliver something unique to our community.

</p>
</div>
        </div>
             <div className='flex justify-center'>
        <img className='sm:w-[60vw] ' src="https://i.pinimg.com/originals/08/8f/79/088f795d8257d493581532122475a0f0.gif" alt="concert" />
      </div>
          <div className='sm:flex mt-[100px] mb-[100px]'>
          <div className='text-start text-white w-80  m-auto'>
<h1 className=' sm:text-[15px] text-[10px]'>flying</h1>
<p className=' text-[10px] opacity-50'>Our residents are the artists which we trust to deliver time and time again. Bringing the heat and flying the Teletech flag at our events.

</p>
        </div>
         <div className='text-start text-white w-80  m-auto'>
<h1 className=' sm:text-[15px] text-[10px]'>selectors</h1>
<p className=' text-[10px] opacity-50'>Our residents form the core of our sound. These skilled track selectors shape our sound and identity on the dance floor, providing relentless energy.

</p>
        </div>
     
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
 </>
  )
}

export default Residents
