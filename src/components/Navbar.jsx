import React from 'react'
import {useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import Label from './Label';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}, [isOpen]);

  return (
    <div>
<div class="header uppercase  flex space-x-2 p-2 mt-[-30px] sm:ml-8 sm:mr-[-40px] mr-[-30px]">
  <div class="w-[50%] noshow mob-show bg-transparent flex items-center justify-start text-[11px] text-white">
    <span className='bg-black h-3 w-2 m-2 '></span>
    BORN IN BRADFORD</div>
  <div class="w-[50%] bg-transparent mob-show noshow flex items-center justify-start text-[11px] text-white">
     <span className='bg-black h-3 w-2 m-2 '></span>
    MADE GLOBAL BY YOU</div>
  <div class="w-full h-15 head  bg-black flex items-center justify-between px-4 text-[11px] text-white rounded-2xl">
<Link to="/">    <div className="nav-item flicker ">
      <img src="/images/logo.png" 
    alt="logo"  className='h-18 w-18 invert'/> </div></Link>
   <div class="nav-item flex flex-col noshow">
  <span><Link to="/index">INDEX</Link></span>
  <span><Link to="/events">EVENTS</Link></span>
</div>
<div class="nav-item flex flex-col noshow">
  <span><Link to="/password">apparel</Link></span>
  <span><Link to="/about">ABOUT</Link></span>
</div>
<div class="nav-item flex flex-col noshow">
  <span><Link to="/archive">archive</Link></span>
  <span><Link to="/residents">residents</Link></span>
</div>
<div class="nav-item flex flex-col noshow">
  <span><Link to="/">label</Link></span>
  <span><Link to="/XXL">xxl</Link></span>
</div>

    <div className="nav-item noshow">   <a href="https://www.instagram.com/zayn/?hl=en" target='blank'>
       <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="white"
      aria-hidden="true"
   className=''
      role="img"
    >
      <title>Instagram</title>
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2A3 3 0 0 0 4 7v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7z"/>
      <path d="M12 7.25A4.75 4.75 0 1 1 7.25 12 4.756 4.756 0 0 1 12 7.25zm0 2A2.75 2.75 0 1 0 14.75 12 2.754 2.754 0 0 0 12 9.25z"/>
      <circle cx="17.5" cy="6.5" r="0.75"/>
    </svg></a></div>
    <div className='show'>

<button class="menu__icon"   onClick={() => setIsOpen(true)}>
  <span></span>
  <span></span>
</button>
    </div>
      <div
        className={`fixed inset-0  bg-black/50 zIndex: 99 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)} // Close sidebar when clicking outside
      ></div>

      {/* Sidebar itself */}
      <div
        className={`fixed top-0 z-[99999] overflow-hidden left-0 h-full w-full bg-black transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        
      >
        {/* Close button */}
    <div className='grid grid-rows-2 '>
     <a href="/"> <div className='absolute top-4 left-4 '>
       <img src="/images/logo.png" 
    alt="logo"  className='h-18 w-18 invert'/>
      </div></a>
      <div>    <button
          className="absolute top-8 right-4 text-white text-2xl font-bold"
          onClick={() => setIsOpen(false)}
        >
          ×
        </button></div>
    </div>

        {/* Sidebar content */}
        <div className="p-6 " style={{ fontFamily: "'Lomo Copy', sans-serif" }}>
     
          <ul className="opacity-50 space-y-4 text-lg relative top-40">
        <a href="/index">     <div class="nav-item flex flex-row justify-between">
  <span>INDEX</span>
  <span>01</span>
</div></a>
      <a href="/events">    <div class="nav-item flex flex-row justify-between">
  <span>EVENTS</span>
  <span>02</span>
</div></a>
     <a href="/password">  <div class="nav-item flex flex-row justify-between">
  <span>APPAREL</span>
  <span>03</span>
</div></a>
          <a href="/about">   <div class="nav-item flex flex-row justify-between">
  <span>ABOUT</span>
  <span>04</span>
</div> </a>
<a href="/archive"><div class="nav-item flex flex-row justify-between">
  <span>ARCHIVE</span>
  <span>05</span>
</div> </a>
<a href="/residents"><div class="nav-item flex flex-row justify-between">
  <span>RESIDENTS</span>
  <span>06</span>
</div></a><a href="/">
 <div class="nav-item flex flex-row justify-between">
  <span>LABEL</span>
  <span>07</span>
</div> </a>
<a href="/XXL">
  <div class="nav-item flex flex-row justify-between">
  <span>XXL</span>
  <span>08</span>
</div></a>

<a href="/play">
   <div class="nav-item flex flex-row justify-between">
  <span>&#60;PLAY/&#62;</span>
  <span>09</span>
</div>
</a>
          </ul>
        </div>
     
      <div className='grid  grid-cols-2 text-center  bottom-0 absolute justify-between w-full p-0'>
        <p className='text-[10px] opacity-50 mb-4 cursor-pointer'><a href="/privacy">PRIVACY POLICY</a></p>
<p className='text-[10px] opacity-50 mb-4'>ZAYN 2025 </p>
      </div>
      </div>
    </div>
</div>
<div className='  '>

</div>
    </div>
  )
}

export default Navbar