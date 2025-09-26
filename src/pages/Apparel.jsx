import React from 'react'

const Apparel = () => {
  return (
    <div>
          <style>
        {`
        
        .appear{
  display: none;
}


        `}
      </style>
   <div className='sm:w-[99vw] log w-88 sm:ml-[-69px] ml-[-28px] overflow-hidden'>
      <div className='flex justify-center '><img src="/images/logo.png" 
    alt="logo"  className='h-18 w-18 invert '/></div>
    <div className=' log-text bg-[url(https://shop.teletech.events/cdn/shop/files/TT-MAR2025.webp?v=1743069028&width=1500)] w-[99vw] h-[64vh] sm:h-[screen] p-5'>
<div className='text-white '  style={{ fontFamily: '"ProtoMono-Regular", monospace, Helvetica, Arial, sans-serif' ,color:"white" ,fontSize:"11px" }} > <h1 className='text-3xl'>     01D 13H 00M 56S</h1>

<h2 className='text-1xl'>NEXT DROP COMING SOON</h2>
<h2 className='text-1xl'>GET UPDATES BEFORE ANYONE ELSE</h2></div>
<form action="">
 <div className='grid grid-rows-4 justify-center '>
   <input type="text" className='bg-white mb-3 sm:w-[30vw] h-[38px]  rounded px-3' placeholder="First name" />
   <input type="text" className='bg-white mb-3 sm:w-[30vw] h-[38px]  rounded px-3' placeholder="Email" />
   <div className='flex justify-center gap-3 mb-2 '>
      <div className='sm:w-[10vw] h-[38px] bg-white rounded'>
        <select name="ff" id="ff" className='sm:w-[10vw] h-[38px] text-center'>
          <option value="">&#127470;&#127475;</option>
          <option value="">&#127482;&#127480;</option>
          <option value="">&#127464;&#127475;</option>
          <option value="">&#127471;&#127477;</option>
                    <option value="">&#127472;&#127479;</option>
          <option value="">&#127464;&#127462;</option>
          <option value="">&#127467;&#127479;</option>
          <option value="">&#127465;&#127466;</option>
        </select>
      </div>
   <input type="text" className='bg-white mb-3 h-[38px] rounded sm:w-[19vw] px-3' placeholder="Phone" />
   </div>
     <button type="submit" className='bg-black text-white'>Submit</button>
 </div>
     <p className='sm:text-[10px] mt-4 text-[8px] text-white uppercase m-auto  sm:w-[40vw]'>By signing up, you agree to receive marketing messages at the phone number or email provided. Msg and data rates may apply. View our Privacy Policy for more info. SMS messaging ToS / Privacy Policy.</p>
</form>
    </div>
  <div  style={{ fontFamily: '"ProtoMono-Regular", monospace, Helvetica, Arial, sans-serif' ,color:"white" ,fontSize:"11px" }} >

  <div className="flex flex-col log-lock items-center space-y-0 p-2">
  {/* Top row: image + h1 */}
  <div className="flex items-center space-x-2">
    <img
      src="/images/lock.png"
      alt="logo"
      className="h-4 w-4 invert" 
    />
    <h1 className='text-[11px] font-bold hover:un' style={{ fontFamily: '"ProtoMono-Regular", monospace, Helvetica, Arial, sans-serif' }}>
      Password Protected
    </h1>
  </div>

  {/* Bottom row: h2 */}
  <h2 className='text-[11px]' >
    &copy; 2025 // TELETECH
  </h2>
</div>

  

</div>

   </div>
    </div>
  )
}

export default Apparel
