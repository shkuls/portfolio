import { useEffect } from "react";
import Topbar from "../components/Topbar"
import Spline from '@splinetool/react-spline';
import { TypeAnimation } from 'react-type-animation';

export default function Intro() {
    useEffect(()=>{
        window.scrollTo(0, 0);
    } , [])

  return (
  <>

    <Topbar/>
    <div className="bg-[#FF5760] flex flex-col sm:flex-row pl-10" id="home">
        <div className="m-auto min-w-80 w-[100vw] flex-col ml-10 font-poppins tracking-wider">
            <p className="font-semibold text-2xl mb-">
                Hi there!
            </p>
            <TypeAnimation
                sequence={[
                "I'm Shlok",
                1000,
                "I'm a Developer",
                1000
                
                ]}
                speed={50}
                repeat={Infinity}
                style={{ fontSize: '50px' , fontWeight : '900' , fontFamily : 'Poppins'}}
            />
            
            
            {/* <p className="text-8xl font-bold tracking-widest" id="target">
                I'm Shlok.
            </p> */}
            <p className="text-3xl w-5/6">
                I make applications for the web.
            </p>


        </div>
        
        <Spline className="" scene="https://prod.spline.design/DCNLvIodaiM-1hq9/scene.splinecode" />


    </div>
</>
  )
}
