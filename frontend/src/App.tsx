import './App.css'
import About from './pages/About'
import Intro from './pages/Intro'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import waveTrans from "./assets/stacked-waves-haikei (3).svg"
import peakTrans from "./assets/stacked-peaks-haikei (1).svg"
import waveTrans2 from "./assets/stacked-waves-haikei (2).svg"
import Footer from './pages/Footer'


function App() {

  return (
    <div className='bg-[#FF4A53]'>
      <Intro/>
      <img src={waveTrans} className='w-full'/>
      <Skills/>
      <img src={peakTrans} className='w-full'/>
      <Projects/>
      <img src={waveTrans2} className='w-full'/>
      
      <About/>
      <Footer/>
    </div>
  )
}

export default App
