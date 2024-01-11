import SkillCards from "../components/SkillCards" 

import { SkillsArray } from "../assets/skillArray"

export default function Skills() {
  return (
    <div className='bg-[#0095FF] p-10 font-poppins' id="skills">
      <h1 className="m-auto w-80 font-bold text-5xl text-center tracking-wider hover:tracking-[1rem] hover:text-6xl transition-all">SKILLS</h1>
      <div className="flex flex-wrap m-auto w-5/6 justify-around">


      {
        SkillsArray.map((skill , index)=>{

        return(
      
      <SkillCards title={skill.title} img={skill.img}/>
        )

        }

        )
      }
      </div>

    </div>
  )
}
