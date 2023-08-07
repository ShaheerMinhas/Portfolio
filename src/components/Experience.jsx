import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import PhotoCard from "../components/PhotoCard.jsx";

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
    position: "Social Manager",
    imageUrl: "pictures/romesa.jpeg",
    linkedin: "https://www.linkedin.com/in/romisha-2326801a4/",
    github: "",

    insta: ""
  },
  {
    name: "Ahsan Naveed",
    position: "Designer",
    imageUrl: "pictures/ahsan2.jpg",
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
  // Settings for the carousel
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show three team members at a time
    slidesToScroll: 3, // Scroll three team members at a time
  };

  return (
    <>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>MEET OUR TEAM</p>
          <h2 className={styles.sectionHeadText}>TEAM</h2>
        </motion.div>
        <div className="flex flex-wrap border-box h-auto justify-center items-center container">
          <Slider {...carouselSettings}>
            {Data.map((member, index) => (
              <PhotoCard key={index} {...member} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
