
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
    <div className=" h-20 flex justify-evenly  backdrop-blur-xl sticky top-0 font-poppins ">

        {items.map((item , index)=>
            <a key={index} href={item.link} className="text-[#ffffff] m-auto text-2xl font-bold hover:text-blue-600 tracking-widest hover:text-4xl transition-all">{item.title}</a>
        )}
      
    </div>
  )
}
