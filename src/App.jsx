import React from 'react'
import NavBar from './sections/navbar/NavBar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Services from './sections/services/Services';
import Portfolio from './sections/portfolio/Portfolio';
import Testimonials from './sections/testimonials/Testimonials';
import Education from './sections/education/Education';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
function App() {
  return (
  
    <main>
    <NavBar/>
    <Header/>
    <About/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <Education/>
    <Contact/>
    <Footer/> 
    </main>

  )
}

export default App