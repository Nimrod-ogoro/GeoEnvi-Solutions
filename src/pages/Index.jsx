import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Sectors from '../components/Sectors'
import Services from '../components/services'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Projects from '../components/Projects'

const Index = () => {
  return (
    <div className='Home'>
    <Hero/>
    <About/>
    <Sectors/>
    <Projects/>
    {/*<Services/>*/}
    <Contact/>
    <Footer/>
    </div>
  )
}

export default Index
