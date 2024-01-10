import { Link } from "react-router-dom";

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
        title : "About" , 
        link : '#about'
    },
    
]

export default function Topbar() {
  return (
    <div className=" h-20 flex justify-evenly   backdrop-blur-sm sticky top-0">

        {items.map((item , index)=>
            <a key={index} href={item.link} className="text-[#ffffff] m-auto text-2xl font-bold">{item.title}</a>
        )}
      
    </div>
  )
}
