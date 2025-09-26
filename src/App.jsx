import React from 'react'
import './App.css'
import Home from './pages/Home'
import Waves from './components/Hero'
import Navbar from './components/Navbar'
import About from './pages/About'
import Events from './pages/Events'
import Apparel from './pages/Apparel'
import Archive from './pages/Archive'
import Residents from './pages/Residents'
import Xxl from './pages/Xxl'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavIndex from './pages/NavIndex'
import Play from './pages/Play'
import Privacy from './pages/Privacy'
import Term from'./pages/Term'
const App = () => {
 
  return (
    <div>
<Router>
    <section className="relative appear  h-screen ml-[-33px] sm:ml-[-84px]">
        <Navbar />

        {/* Background waves (absolute, filling section) */}
        <div className="absolute inset-0 -z-10  w-full h-full">
          <Waves
            lineColor="#fff"
            backgroundColor="rgba(255, 255, 255, 0.2)"
            waveSpeedX={0.02}
            waveSpeedY={0.01}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={120}
            xGap={12}
            yGap={36}
          />
        </div>

     
      </section>
      
      <Routes>
           <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
            <Route path="/index" element={<NavIndex />} />
          <Route path="/password" element={<Apparel/>} />
          <Route path="/archive" element={<Archive />} />  
          <Route path="residents" element={<Residents />} />
          <Route path="/XXL" element={<Xxl />} />
            <Route path="/play" element={<Play />} />
             <Route path="/privacy" element={<Privacy />} />
             <Route path="/tos" element={<Term/>} />
      </Routes>
</Router>
  
    </div>
  )
}

export default App