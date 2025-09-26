import React from "react";
import Footer from "../components/Footer";
import Label from "../components/Label";
import Carousel from "../components/Carousel";
const zaynEvents = [

  {
    date: "Jan 21, 2025",
    title: "Stairway to the Sky Tour – Washington, D.C.",
    location: "The Anthem, Washington, D.C., USA",
    about: "U.S. leg of the tour begins, featuring support from LAPD."
  },
  {
    date: "Jan 22, 2025",
    title: "Stairway to the Sky Tour – New York City",
    location: "Hammerstein Ballroom, NYC, USA",
    about: "Zayn brings his solo tour to New York City, performing hits and new tracks."
  },
  {
    date: "Jan 24, 2025",
    title: "Stairway to the Sky Tour – New York City (Rescheduled)",
    location: "Hammerstein Ballroom, NYC, USA",
    about: "Rescheduled show in NYC, featuring a mix of Zayn's solo work and One Direction hits."
  },
  {
    date: "Jan 25, 2025",
    title: "Stairway to the Sky Tour – Los Angeles",
    location: "Hollywood Palladium, Los Angeles, USA",
    about: "Zayn performs in Los Angeles, showcasing his musical evolution."
  },
  {
    date: "Jan 28, 2025",
    title: "Stairway to the Sky Tour – Las Vegas",
    location: "The Chelsea, The Cosmopolitan, Las Vegas, USA",
    about: "Las Vegas show featuring a blend of Zayn's solo tracks and fan favorites."
  },
  {
    date: "Jan 30, 2025",
    title: "Stairway to the Sky Tour – San Francisco",
    location: "Bill Graham Civic Auditorium, San Francisco, USA",
    about: "San Francisco performance, highlighting Zayn's musical journey."
  },
];


function EventsList({ items }) {
  return (
    <ul className="w-full divide-y divide-zinc-800/50">
      {items.map((item, idx) => (
        <li key={idx} className="w-full py-2">
          <div className="grid sm:grid-cols-4 grid-cols-1 gap-4 w-full text-start opacity-50">
            <span className="truncate text-white font-bold">{item.date}</span>
            <span className="truncate  sm:text-[12px] text-[10px]">{item.title}</span>
            <span className="truncate  sm:text-[12px] text-[10px] ">{item.location}</span>
            <span className="truncate  sm:text-[12px] text-[10px]">{item.about}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function Events() {
  return (
   <>
    <Label title="EVENTS" />
   <Carousel/>
  <div className='sm:flex mt-[100px] mb-[100px]'>
  <div className='text-start text-white w-80  m-auto'>
    <h1 className=' sm:text-[15px] text-[10px]'>Live Energy</h1>
    <p className=' text-[10px] opacity-50'>
      Zayn’s concerts bring unmatched passion, connecting fans through music that
      lives beyond the stage.
    </p>
  </div>

  <div className='text-start text-white w-80  m-auto'>
    <h1 className=' sm:text-[15px] text-[10px]'>Memorable Nights</h1>
    <p className=' text-[10px] opacity-50'>
      From intimate venues to grand arenas, every performance becomes a shared
      memory of sound and emotion.
    </p>
  </div>
</div>

         <div className='text-start text-white apparel text-3xl sm:px-20 px-4 sm:mb-20 sm:flex' style={{fontFamily:" 'Lomo Copy', sans-serif"}}>
  <h1 className=' mr-8 '>     Concerts</h1>

  <div className='opacity-50 sm:text-2xl text-[20px] sm:mt-0 mt-6 mb-4'>
    <h2>
      <span className='sm:ml-100 ml-30'>Feel the vibe. Celebrate every tour.</span> 
      <span className='flicker'>Zayn live.</span> From London to Vegas, the music connects us all.
    </h2>
  </div>
</div>

    <div className=" uppercase w-full mx-auto  p-6 text-white shadow-lg rounded-2xl">
      <h1 className="sm:text-2xl text-xl font-bold mb-6 text-start">RECENT Events</h1>
      <EventsList items={zaynEvents} />
  <div className='sm:ml-0 ml-[-40px]'>
      <Footer />
    </div>
    </div>
 
   </>
  );
}
