import React from 'react'

const Label = ({ title }) => {
  return (
 <>

   <div className="flex mob-label flex-row justify-between text-white absolute bottom-0 left-0 right-0 px-4 mb-2 -z-10">
    
        <div className="nav-item flex flex-col">
          <span
            className="sm:text-[48px] sm:mt-0 mt-7 text-[32px] font-bold cursor-pointer"
            style={{ fontFamily: "'Lomo Copy', sans-serif" }}
          >
            {title}
          </span>
          <span className="flex items-center gap-1 sm:text-[12px] text-[10px] ">
            <img src="/images/arrow.png" alt="arrow" className="h-5 w-5 invert" />
            SCROLL
          </span>
        </div>
        <div className="bottom-items sm:text-[12px] text-[10px] mt-18">2025 &copy;</div>
      </div>
 </>
  )
}

export default Label