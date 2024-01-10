import './App.css'
import About from './pages/About'
import Intro from './pages/Intro'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import waveTrans from "./assets/stacked-waves-haikei (1).svg"
import peakTrans from "./assets/stacked-peaks-haikei (1).svg"


function App() {

  return (
    <div className='bg-[#FF5760]'>
      <Intro/>
      <img src={waveTrans} className='w-full'/>
      <Skills/>
      <img src={peakTrans} className='w-full'/>
      <Projects/>
      <About/>
    </div>
  )
}

export default App
