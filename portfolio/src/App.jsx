import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import HeroSection from './components/HeroSection/HeroSection.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Project from './components/Projects/Project.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
import BackgroundParticles from './components/BackgroundParticles.jsx'

function App() {

  return (
    <>
      <BackgroundParticles />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutUs />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
