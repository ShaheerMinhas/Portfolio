


import React from "react";
import Carousel, { autoplayPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import TeamInfo from "./TeamInfo";
import PhotoCard from "../components/PhotoCard";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { motion } from "framer-motion"; // Make sure to import this if not already imported

// Rest of the imports remain the same

const Data = [
  {

    name: "Shaheer Minhas",

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

    position: "Designer",

    imageUrl: "pictures/romesa.jpeg",
    linkedin: "https://www.linkedin.com/in/romisha-2326801a4/",
    github: "",
    desc: "Meet Romesa She's a talented coder and a valuable member of our new software company  ",

    insta: ""
  },
  {
    name: "Ahsan Naveed",

    position: "Technical Head",

    imageUrl: "pictures/ahsan2.JPG",
    linkedin: "https://www.linkedin.com/in/ahsan-n-805a5a230/",
    github: "",
    desc: " Meet Ahsan- our brilliant coder extraordinaire! Say hello to the tech genius behind our innovative solutions! ",
    insta: ""
  },
  {
    name: "Abbas Rizvi",

    position: "Social Media Manager",

    imageUrl: "pictures/abbas.jpg",

    linkedin: "https://www.linkedin.com/company/rubix-code/about/",

    github: "",
    desc: " Meet Abbas! Our brilliant coder and tech enthusiast Stay tuned for some groundbreaking innovations! ",
    insta: ""
  }
];

const Experience = () => {
  return (

   
    <>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>MEET OUR TEAM</p>
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
            resolve: autoplayPlugin,
            options: {
              interval: 2000,
              numberOfSlides: 1, // Show only one slide at a time on mobile
            },
          },
        ]}
        animationSpeed={1000}
        slidesPerPage={1} // Added to ensure one slide per page on mobile
        breakpoints={{
          // Adjust these breakpoints based on your design and requirements
          600: {
            // Up to 600px screen width (mobile)
            slidesPerPage: 1,
            arrows: false, // Hide arrows on mobile
          },
          1024: {
            // Up to 1024px screen width (tablet)
            slidesPerPage: 3, // Show three slides on tablets
            arrows: true,
          },
        }}
      >
        {Data.map((member, index) => (
          <div key={index} className="mb-6 md:flex md:flex-row items-center">
            <PhotoCard {...member} className="md:mr-4" />
            <TeamInfo name={member.name} position={member.position} desc={member.desc} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
