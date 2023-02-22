import React from 'react'
import NavBar from './sections/navbar/NavBar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Services from './sections/services/Services';
import Portfolio from './sections/portfolio/Portfolio';
import Testimonials from './sections/testimonials/Testimonials';
import FAQS from './sections/faqs/FAQS';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
function App() {
  return (
    <div>App
    <NavBar/>
    <Header/>
    <About/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <FAQS/>
    <Contact/>
    <Footer/> 

</div>
  )
}

export default App