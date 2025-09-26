import React from 'react'
import Label from '../components/Label'
import Footer from '../components/Footer'
const Xxl = () => {
  const zaynEvents = [
  {
    date: "Nov 23, 2024",
    title: "Stairway to the Sky Tour – Leeds",
    location: "O2 Academy Leeds, UK",
    about: "Kickoff of Zayn's first solo tour, featuring tracks from 'Room Under the Stairs' and older albums."
  },
  {
    date: "Nov 24, 2024",
    title: "Stairway to the Sky Tour – Manchester",
    location: "O2 Apollo Manchester, UK",
    about: "Second show of the tour, continuing the celebration of Zayn's solo music."
  },
  {
    date: "Nov 26, 2024",
    title: "Stairway to the Sky Tour – London",
    location: "Eventim Apollo, London, UK",
    about: "Zayn's performance in London, showcasing his latest album and fan favorites."
  },
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
];

function EventsList({ items }) {
  return (
    <ul className="w-full divide-y divide-zinc-800/50">
      {items.map((item, idx) => (
        <li key={idx} className="w-full py-2">
          <div className="grid sm:grid-cols-4 grid-cols-1 gap-4 w-full text-start text-gray-400">
            <span className="truncate text-white font-bold">{item.date}</span>
            <span className="truncate">{item.title}</span>
            <span className="truncate">{item.location}</span>
            <span className="truncate">{item.about}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
  return (
  <>  <Label title="XXL" />
 <div className='text-white -z-9 uppercase'>
  <div className='flex flex-col  items-center justify-center text-center mt-20 mb-20 space-y-6'>
    <article className='sm:text-[33.88px] text-start uppercase'>
      <span className='ml-[100px]'>Zayn is redefining pop concerts</span>, delivering unforgettable performances, chart-topping hits, and world tours that connect with fans across the globe.
    </article>
  </div>

  <div className='sm:flex  gap-4 sm:px-20 text-start mb-20'>
    <div className="grid-items mb-2">
      <h1>Launch</h1> 
      <p className='opacity-75'>
        Zayn began his solo career in 2015 after leaving One Direction, immediately establishing himself with critically acclaimed hits and his first major solo tour.
      </p>
    </div>
    <div className="grid-items">
      <h1>Growth</h1> 
      <p className='opacity-75'>
        Over the years, Zayn expanded his tours internationally, performing in arenas and festivals worldwide while consistently delivering highly energetic shows.
      </p>
    </div>
    <div className="grid-items">
      <h1>Future</h1> 
      <p className='opacity-75'>
        With new music releases and upcoming tours, Zayn continues to captivate audiences globally, bringing his signature style and unforgettable performances to every stage.
      </p>
    </div>
  </div>

  <div className='flex justify-center'>
    <img className='sm:w-[20vw]' src="https://i.pinimg.com/236x/45/b5/50/45b5504a7e300662adba7fc1f5bc762b.jpg" alt="Zayn concert" />
  </div>

  <div className='sm:flex mt-[100px] mb-[100px]'>
    <div className='text-start text-white w-80  m-auto'>
      <h1 className=' sm:text-[15px] text-[10px]'>Performances</h1>
      <p className=' text-[10px] opacity-50'>
        Zayn delivers unforgettable live performances, blending his powerful vocals with high-energy stage productions to create memorable experiences for fans.
      </p>
    </div>
    <div className='text-start text-white w-80  m-auto'>
      <h1 className=' sm:text-[15px] text-[10px]'>Tours</h1>
      <p className=' text-[10px] opacity-50'>
        From intimate venues to global arenas, Zayn’s tours bring fans closer to his music and showcase his evolution as one of today’s leading pop artists.
      </p>
    </div>
  </div>
</div>

  <div className="sm:w-full w-screen mb-[100px] mx-auto sm:ml-[10px] ml-[-40px] p-6 text-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold mb-6 text-start">PREVIOUS  Events</h1>
      <EventsList items={zaynEvents} />

    </div>
   <div className='sm:ml-0 ml-[-20px]'>
      <Footer />
    </div>
  </>
  )
}

export default Xxl
