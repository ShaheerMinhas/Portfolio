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
const Data = [
  {
    name: "Shaheer Minhhas",

    position: "Financial Manager",

    imageUrl: "pictures/shaheer.jpg",
    linkedin: "https://www.linkedin.com/in/shaheer-minhas-86a108231/",
    github: "https://github.com/ShaheerMinhas",
   
    insta: ""
  },
  {
    name: "Zain Asher",

    position: "Marketing Manager",
    imageUrl: "pictures/zain1.jpg",
    linkedin: "https://www.linkedin.com/in/zain-asher-3960321b2/",
    github: "",
    insta: ""
  },
  {
    name: "Romisha Maria",

    position: "Social Media Handler",

    imageUrl: "pictures/romesa.jpeg",
    linkedin: "https://www.linkedin.com/in/romisha-2326801a4/",
    github: "",
  
    insta: ""
  },
  {
    name: "Ahsan Naveed",

    position: "Designer",
    imageUrl: "pictures/ahsan2.JPG",
    linkedin: "https://www.linkedin.com/in/ahsan-n-805a5a230/",
    github: "",
   
    insta: ""
  },
  {
    name: "Abbas Rizvi",
    position: "HR",

    imageUrl: "pictures/abbas.jpg",

    linkedin: "https://www.linkedin.com/company/rubix-code/about/",

    github: "",
   
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
          <p className={styles.sectionSubText}>MEET OUR</p>
          <h2 className={styles.sectionSubText}>TEAM</h2>
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
              <PhotoCard key={index} {...member} />
              
            ))
          }
      
        </Carousel>
      </div>
    </>
  );
             
};

export default SectionWrapper(Experience, "work");
