import ProjectCard from "../ProjectCard"
import { ProjectArray } from "../../assets/Projects/ProjectArray"
import { Project } from "../../assets/Projects/ProjectArray"
export default function Projects() {
  return (
        <div className='bg-[#5AB8EB]' id="projects">
            <h1 className="mx-auto w-80 font-bold text-5xl text-center tracking-widest transition-all  hover:text-neutral-50">PROJECTS</h1>
            <div className="flex flex-row flex-wrap justify-evenly">
            {
              ProjectArray.map((project :Project , index : number) =>
              <ProjectCard key={index} {...project}/>
              )
            }
            
            

            </div>
            

            
      
    </div>
  )
}
