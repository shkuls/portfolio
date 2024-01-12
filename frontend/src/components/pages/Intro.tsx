import myPhotoBW from "../assets/IMG_1397 Background Removed (1).png"
import { useEffect } from "react";
import Topbar from "../Topbar";
import { TypeAnimation } from 'react-type-animation';

export default function Intro() {
    useEffect(()=>{
        window.scrollTo(0, 0);
    } , [])

  return (
  <>

    <Topbar/>
    <div className="bg-[#5580E9] flex flex-col sm:flex-row pl-10" id="home">
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
            <p className="text-xl w-4/6 mt-10 ">
            I am Shlok Kulshreshtha , a sophomore at IIT Roorkee. I'm really enthusiastic about the field of technology and am deeply intrested in Software Development , Web Automation , Artificial Intelligence and anything else that involves code.
            </p>


        </div>
        <img
        
        src={myPhotoBW} 
        className="h-80 scale-125  z-0"/>


    </div>
</>
  )
}
