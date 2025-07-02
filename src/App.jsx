import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import HeroSection from './components/HeroSection/HeroSection.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Project from './components/Projects/Project.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {

  return (
    <>
      <div className="home">
        <Navbar />
        <HeroSection />
      </div>
      <AboutUs/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
