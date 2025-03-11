import React from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import BestSellerSection from './components/BestSeller.jsx'
import SpecialOffers from './components/SpecialOffers.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
const App = () => {
  return (
    <div className='bg-[#FFF5E4] min-h-screen'>
      <Nav />
      <Hero />
      <BestSellerSection />
      <SpecialOffers />
      <About />
      <Contact />
    </div>
  )
}

export default App
