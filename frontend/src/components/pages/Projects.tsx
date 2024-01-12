import ProjectCard from "../components/ProjectCard.tsx"
import { ProjectArray } from "../assets/Projects/ProjectArray.js"

import React from "react"


export default function Projects() {
  return (
        <div className='bg-[#5AB8EB]' id="projects">
            <h1 className="mx-auto w-80 font-bold text-5xl text-center tracking-widest transition-all  hover:text-neutral-50">PROJECTS</h1>
            <div className="flex flex-row flex-wrap justify-evenly">
            {
              ProjectArray.map((project , index)=>
              <ProjectCard key={index} {...project}/>
              )
            }
            
            

            </div>
            

            
      
    </div>
  )
}
