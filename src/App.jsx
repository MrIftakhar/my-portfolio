import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from './assets/components/Hero'
import About from './assets/components/About'
import Skills from './assets/components/Skills'
import Projects from './assets/components/Projects'
import Contact from './assets/components/Contact'
import Footer from './assets/components/Footer'

function App() {
  useEffect(()=>{
    AOS.init({
      duration:1000,
    })
  },[])
  return (
    <div className=' bg-gray-950 min-h-screen'>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}
export default App