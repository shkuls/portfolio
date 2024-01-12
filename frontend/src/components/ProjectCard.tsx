// @ts-nocheck
import { useState } from "react"
import { motion } from "framer-motion"
import './CardStyle.css'


import { Project } from "../assets/Projects/ProjectArray";

export default function ProjectCard(prop : Project) {

    const [isExpaned, setIsExpaned] = useState(false);

  const animated = {
    layout: "position",
    animate: { opacity: 1 },
    transition: { delay: 0.3 },
    initial: { opacity: 0 },
  };
    
  return (
    <div className="m-10 font-poppins">
        <motion.div
      className={`card`}
      layout
      onClick={() => {
        setIsExpaned(!isExpaned);
      }}

    > 
      <motion.h3 layout="position">{prop.title}</motion.h3>

      <motion.p layout="position">
      {prop.shortDesc}
      </motion.p>

        
              <motion.p layout="position" style={{fontWeight : "500" , color : "gray" , visibility: isExpaned?"hidden":"visible"}}>
      Click to know more!
      </motion.p>
          


       

      {isExpaned && (
        <>

          <motion.img {...animated} src={prop.img} alt="demo image" />

          <motion.p {...animated}>
          {prop.mainDesc}
          </motion.p>

          <motion.div {...animated} className="btn-container flex justify-around flex-wrap">
            <motion.button

                onClick={() => {
                window.location.href = prop.repoLink;
                setIsExpaned(!isExpaned);
              }}
            >
              Github
            </motion.button>
            <motion.button
                onClick={() => {
                  window.location.href = prop.vercelLink;
                setIsExpaned(!isExpaned);
              }}
            >
              View Live
            </motion.button>
            <motion.button
            className="m-5"
                onClick={() => {
                setIsExpaned(!isExpaned);
              }}
            >
              Close
            </motion.button>
          </motion.div>
        </>
      )}
    </motion.div>
    

    </div>
  )
}



