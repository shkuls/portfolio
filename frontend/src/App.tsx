import './App.css'
import About from './pages/About.tsx'
import Intro from './pages/Intro.tsx'
import Projects from './pages/Projects.tsx'
import Skills from './pages/Skills.tsx'
import waveTrans from "./assets/stacked-waves-haikei (4).svg"
import waveTrans2 from "./assets/stacked-waves-haikei (5).svg"
import peakTrans from "./assets/stacked-peaks-haikei (2).svg"
import Footer from './pages/Footer.tsx'
import transFooter from './assets/wave-haikei.svg'


function App() {

  return (
    <div className='bg-[#5580E9]'>
      <Intro/>
      <img src={waveTrans} className='w-full z-10'/>
      <Skills/>
      <img src={waveTrans2} className='w-full'/>
      <Projects/>
     <img src={peakTrans} className='w-full'/>
      
      <About/>
      <img src={transFooter} className='w-full'/>
      <Footer/>
    </div>
  )
}

export default App
