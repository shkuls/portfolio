import SkillCards from "../components/SkillCards" 

import { SkillsArray } from "../assets/skillArray"

export default function Skills() {
  return (
    <div className='bg-[#84CDEB] py-20 font-poppins' id="skills">
      <h1 className=" m-auto w-80 font-bold text-5xl text-center tracking-wider sm:hover:tracking-[1rem] sm:hover:text-6xl  transition-all">SKILLS</h1>
      <div className="sm:justify-around grid m-auto grid-cols-3 w-[90vw]">


      {
        SkillsArray.map((skill , index)=>{

        return(
      
      <SkillCards key={index} title={skill.title} img={skill.img}/>
        )

        }

        )
      }
      </div>

    </div>
  )
}
