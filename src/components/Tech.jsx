import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import  { useEffect, useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants";
import './about.css'


const Tech = () => {
  return (
    <>
        <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Tech Stack</h2>
      </motion.div>
    
    <div className='flex flex-row flex-wrap justify-center gap-10 mt-16'>
      
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
