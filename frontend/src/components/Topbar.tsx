
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
  return (
    <div className=" mb-10 h-20 flex justify-around backdrop-blur-xl sticky top-0 font-poppins z-10">

        {items.map((item , index)=>
            <a key={index} href={item.link} className=" text-[#010101] m-auto text-2xl text-center font-bold hover: tracking-widest hover:text-3xl  transition-all">{item.title}</a>
        )}
      
    </div>
  )
}
