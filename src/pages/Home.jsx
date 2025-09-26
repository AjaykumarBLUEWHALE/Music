import React from 'react'
import Navbar from '../components/Navbar'
import Waves from '../components/Hero'
import Intro from '../components/Intro'
import ZaynDiscography from '../components/Audio'
import ThreeDCarouselPlayer from '../components/h'
import Footer from '../components/Footer'
import Preloader from '../components/Preloader'
import Label from '../components/Label'

const Home = () => {
      const items = Array.from({ length: 15 }, (_, i) => ({
  image: `/assets/img/${i + 1}.jpg`,
  audio: `/assets/audio/${i + 1}.mp3`,
  title: `Song ${i + 1}`,
  artist: `Artist ${i + 1}`,
}));
     
  return (
    <div>
      <Preloader/>
  
   <Label title="LABEL" />
   
   <Intro />
 

<ThreeDCarouselPlayer items={items} />


<ZaynDiscography/>
<Footer/>
  
   
    </div>
  )
}

export default Home
