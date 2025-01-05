import React, { useEffect, useState, useRef } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { services } from "../constants";
import "./about.css";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, isVisible }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeInOut",
      }}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 650,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const observerRefs = useRef([]);

  useEffect(() => {
    observerRefs.current = [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index, 10);
          if (entry.isIntersecting) {
            setVisibleIndexes((prev) => [...new Set([...prev, index])]);
          } else {
            setVisibleIndexes((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".service-card");
    elements.forEach((el, i) => {
      observerRefs.current[i] = observer;
      observer.observe(el);
    });

    return () => {
      observerRefs.current.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="mt-20 mb-12 flex flex-wrap gap-10 justify-center"
      >
        {Array(5)
          .fill(services)
          .flat()
          .map((service, index) => (
            <div
              key={service.title + index}
              data-index={index}
              className="service-card"
            >
              <ServiceCard
                index={index}
                title={service.title}
                icon={service.icon}
                isVisible={visibleIndexes.includes(index)}
              />
            </div>
          ))}
      </motion.div>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Meet Buttons</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] sm:text-base max-w-3xl leading-[30px]"
      >
        Hover on each button to see the effect. Check out the Tech Stack used in
        this website below.
      </motion.p>

      <div className="mt-8 flex flex-wrap justify-center space-x-4 gap-y-4">
        <motion.button
          className="button-59"
          whileHover={{ scale: 1.1 }}
          onClick={toggleModal}
        >
          <span className="text">Button 1</span>
          <span>Hi</span>
        </motion.button>
        <motion.button
          className="button-58"
          whileHover={{ rotate: 6 }}
          onClick={toggleModal}
        >
          <span className="text">Button 2</span>
          <span>Hi</span>
        </motion.button>
        <motion.button
          className="button-57"
          whileHover={{ skewX: 6 }}
          onClick={toggleModal}
        >
          <span className="text">Button 3</span>
          <span>Hi</span>
        </motion.button>
        <motion.button
          className="button-56"
          whileHover={{ x: 4 }}
          onClick={toggleModal}
        >
          <span className="text">Button 4</span>
          <span>Hi</span>
        </motion.button>
      </div>

      {isModalOpen && (
        <div
        className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-40 "
        onClick={toggleModal} // Close modal when backdrop is clicked
      >
        <div
          className="popup bg-white p-8 rounded-lg shadow-lg z-9999 w-[90%] sm:w-[600px]"
          onClick={(e) => e.stopPropagation()} // Prevent event propagation to backdrop
        >
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            Choose Your Action
          </h2>
          <h2 className="text font-bold text-black mb-6 text-center">
            Buttons with New Colours everytime
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: 9 }).map((_, idx) => (
              <motion.button
                key={idx}
                className="popup-button p-4 rounded-lg shadow-md text-white font-semibold text-lg relative overflow-hidden"
                whileHover={{
                  scale: 1.1,
                  rotate: Math.random() * 4 - 2, // Slight random rotation on hover
                }}
                style={{
                  background: `linear-gradient(135deg, #${(
                    (Math.random()+2) * 0xffffff 
                  )
                    .toString(16)
                    .slice(0, 6)}, #${(Math.random() * 0xffffff)
                    .toString(16)
                    .slice(0, 6)})`,
                }}
              >
                Button {idx + 1}
                <span
                  className="absolute inset-0 rounded-lg"
                  style={{
                    boxShadow: `0 4px 15px rgba(0, 0, 0, 0.25)`,
                  }}
                ></span>
              </motion.button>
            ))}
          </div>
          <button
            onClick={toggleModal} // Closes modal
            className="mt-6 px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold text-lg shadow-md transition-all duration-300 w-full"
          >
            Close
          </button>
        </div>
      </div>
      
      )}
    </>
  );
};

export default SectionWrapper(About, "about");
