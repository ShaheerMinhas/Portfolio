import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import PhotoCard  from "../components/PhotoCard.jsx";


const Data = [
  {
    name: "Shaheer Minhhas",
    position: "Finance Head",
    imageUrl: "pictures/shaheer.jpg",
    linkedin: "https://www.linkedin.com/in/shaheer-minhas-1b1b3a1b2/",
    github: "",
    twitter: "",
    insta: ""
  },
  {
    name: "Zain Asher",
    position: "Marketting Manager",
    imageUrl: "pictures/zain.jpeg",
    linkedin: "https://www.linkedin.com/in/shaheer-minhas-1b1b3a1b2/",
    github: "",
    twitter: "",
    insta: ""
  },
  {
    name: "Romisha Maria",
    position: "Social Media Handler",
    imageUrl: "pictures/romesa.jpeg",
    linkedin: "https://www.linkedin.com/in/shaheer-minhas-1b1b3a1b2/",
    github: "",
    twitter: "",
    insta: ""
  },
  {
    name: "Ahsan Naveed",

    position: "Designer",
    imageUrl: "pictures/ahsan2.JPG",
    linkedin: "https://www.linkedin.com/in/shaheer-minhas-1b1b3a1b2/",
    github: "",
    twitter: "",
    insta: ""
  },
  {
    name: "Abbas Rizvi",
    position: "HR",
    imageUrl: "pictures/abbas.jpeg",
    linkedin: "https://www.linkedin.com/in/shaheer-minhas-1b1b3a1b2/",
    github: "",
    twitter: "",
    insta: ""
  }
]

const Experience = () => {
  return (
    <>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>MEET OUR TEAM</p>
          <h2 className={styles.sectionHeadText}>TEAM</h2>
        </motion.div>
        <div className="flex flex-wrap border-box h-auto justify-center items-center container">
          {
            Data.map((member, index) => (
              <PhotoCard key={index} {...member} />
              
            ))
          }
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
