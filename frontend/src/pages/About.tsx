import myPhotoBW from "../assets/IMG_1397 Background Removed (1).png"
// import photoColor from "../assets/IMG_1397 colour Background Removed (1).png"
export default function About() {
  return (
    <div id="about" className="bg-[#FCAF3C]">
     <h1 className="m-auto font-poppins w-80 font-bold text-5xl text-center p-10">About Me</h1>
     <div className="flex">
        <img
        
        src={myPhotoBW} 
        className="h-96 scale-125 ml-7 mb-12 "/>
        {/* <img
        
        src={photoColor} 
        className="h-96 scale-125 ml-7 mb-12 hidden hover:visible"/> */}
        <p className="m-auto font-poppins font-semibold w-1/2 text-xl">
            I am Shlok Kulshreshtha , a sophomore at IIT Roorkee.
            I'm really enthusiastic about the field of technology and am deeply intrested in Software Development , Web Automation , Artificial Intelligence and anything else that involves code.
        </p>

     </div>
    </div>
  )
}
