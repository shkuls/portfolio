import { useState } from "react";
import menu from "../assets/burger-menu-svgrepo-com.svg"


const items : Array<{
    title : string ;
    link : string ;
}> = [
    {
        title : "Home" , 
        link : '#home'
    } ,
    {
        title : "Skills" , 
        link : '#skills'
    },
    {
        title : "Projects" , 
        link : '#projects'
    },
    {
        title : "Contact" , 
        link : '#contact'
    },
    
]

export default function Topbar() {
    const [open  , setOpen] = useState(false)
  return (<>
    <div className=" mb-10 h-20 justify-around backdrop-blur-xl sticky top-0 font-poppins z-10 sm:flex hidden">

        {items.map((item , index)=>
            <a key={index} href={item.link} className=" text-[#010101] m-auto text-2xl text-center font-bold hover: tracking-widest hover:text-3xl  transition-all">{item.title}</a>
        )}
      
    </div>
    <div className="mb-10 h-20  justify-around bg-[#5580E9] sticky top-0 font-poppins z-10 sm:hidden">
            <img onClick={()=>setOpen(!open)} src={menu} className={`h-16 mx-5 ${open?"":""}`} />

            <div className={`flex flex-col w-full bg-[#5580E9] transiton-all duration-300 ${open?"h-0":"h-60"}`}>
                
        {items.map((item , index)=>
            <a key={index} onClick={()=>setOpen(!open)} href={item.link} className={`text-[#010101]  m-auto  text-center font-semibold hover: {tracking-widest}  ${open?"text-[0px]":"text-3xl"} transition-all`}>{item.title}</a>
        )}
            </div>
      
    </div>
  
  
  
  </>
  )
}
