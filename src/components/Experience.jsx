import React,{Component} from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styles } from "../styles";

import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import PhotoCard  from "../components/PhotoCard.jsx";
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import TeamInfo from "./TeamInfo";
const Data = [
  {
    name: "Shaheer Minhhas",
    position: "Financial Manager",
    imageUrl: "pictures/shaheer.jpg",
    linkedin: "https://www.linkedin.com/in/shaheer-minhas-86a108231/",
    github: "https://github.com/ShaheerMinhas",
    desc: "Meet Shaheer, the coding virtuoso of our dream team! Say hello to the tech whisperer behind the scenes!",
    insta: ""
  },
  {
    name: "Zain Asher",
    position: "Marketing Manager",
    imageUrl: "pictures/zain1.jpg",
    linkedin: "https://www.linkedin.com/in/zain-asher-3960321b2/",
    github: "",
    insta: "",
    desc: "Meet Zain, the big mind behind our new software innovations Stay tuned for more exciting updates"
  },
  {
    name: "Romisha Maria",
    position: "Social Manager",
    imageUrl: "pictures/romesa.jpeg",
    linkedin: "https://www.linkedin.com/in/romisha-2326801a4/",
    github: "",
    desc: "Meet Romesa She's a talented coder and a valuable member of our new software company  ",
  
    insta: ""
  },
  {
    name: "Ahsan Naveed",
    position: "Designer",
    imageUrl: "pictures/ahsan2.JPG",
    linkedin: "https://www.linkedin.com/in/ahsan-n-805a5a230/",
    github: "",
    desc: " Meet Ahsan- our brilliant coder extraordinaire! Say hello to the tech genius behind our innovative solutions! ",
    insta: ""
  },
  {
    name: "Abbas Rizvi",
    position: "HR",
    imageUrl: "pictures/abbas.jpg",
    linkedin: "https://www.linkedin.com/company/rubix-code/about/",
    github: "",
    desc: " Meet Abbas! Our brilliant coder and tech enthusiast Stay tuned for some groundbreaking innovations! ",
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
        <Carousel
          plugins={[
            'infinite',
            'arrows',
            {
              
              resolve:  autoplayPlugin,
              options: {
                interval: 2000, 
                numberOfSlides: 3
              }
            },
            
          ]}
          animationSpeed={1000}
        >
        
          {
            Data.map((member, index) => (
              <div key="index" className="flex  ml-2">
                {/* Apply ml-4 (margin left 1rem) to PhotoCard */}
                <PhotoCard key={index} {...member} className="ml-10"/>
                <TeamInfo name={member.name} position ={member.position} desc={member.desc}/>
              </div>
              
              
            ))
          }
      
        </Carousel>
      </div>
    </>
  );
             
};

export default SectionWrapper(Experience, "work");
