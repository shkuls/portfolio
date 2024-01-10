import SkillCards from "../components/SkillCards" 

import { SkillsArray } from "../assets/skillArray"

export default function Skills() {
  return (
    <div className='bg-[#0095FF] p-10' id="skills">
      <h1 className="m-auto w-80 font-bold text-5xl text-center">Skills</h1>
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
