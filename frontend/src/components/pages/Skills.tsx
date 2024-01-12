import SkillCards from "../components/SkillCards.tsx" 

import { SkillsArray } from "../assets/skillArray"
import React from "react"

export default function Skills() {
  return (
    <div className='bg-[#84CDEB] p-10 font-poppins' id="skills">
      <h1 className="m-auto w-80 font-bold text-5xl text-center tracking-wider hover:tracking-[1rem] hover:text-6xl transition-all">SKILLS</h1>
      <div className="flex flex-wrap m-auto w-5/6 justify-around">


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
