import React, { useEffect, useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { services } from "../constants";
import './about.css'

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


const About = () => {
  // State for handling modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal
  const toggleModal = () => {
    setIsModalOpen((prev) => {
      console.log("Toggling modal state:", !prev);
      return !prev;
    });
  };
  // Disable body scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <>
       <div className='mt-20 mb-12 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Meet Buttons</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] sm:text-base max-w-3xl leading-[30px]'
      >
        Hover on each button to see the effect. Check out the Tech Stack used in this website below.
      </motion.p>

      {/* Buttons */}
      <div className="mt-8 flex flex-wrap justify-center space-x-4 gap-y-4">
        {/* Button 1 */}
        <motion.button
          className="button-59"
          whileHover={{ scale: 1.1 }}
          onClick={toggleModal}
        >
          <span class="text">Button 1</span><span>Hi</span>
        </motion.button>

        {/* Button 2 */}
        <motion.button
          className="button-58"
          whileHover={{ rotate: 6 }}
          onClick={toggleModal}
        >
          <span class="text">Button 2</span><span>Hi</span>
        </motion.button>

        {/* Button 3 */}
        <motion.button
          className="button-57"
          whileHover={{ skewX: 6 }}
          onClick={toggleModal}
        >
          <span class="text">Button 3</span><span>Hi</span>
        </motion.button>

        {/* Button 4 */}
        <motion.button
          className="button-56"
          whileHover={{ x: 4 }}
          onClick={toggleModal}
        >
           <span class="text">Button 4</span><span>Hi</span>
        </motion.button>
      </div>

      {isModalOpen && (
  <div
    className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-40"
    onClick={toggleModal} // Closes modal when backdrop is clicked
  >
    <div
      className="bg-white p-6 rounded-lg shadow-lg z-9999"
      onClick={(e) => e.stopPropagation()} // Prevent event propagation to backdrop
    >
      <h2 className="text-xl text-black font-bold">Pop-up Modal</h2>
      <p className="mt-4 text-black">This is the content of the pop-up modal.</p>
      <button
        onClick={toggleModal} // Closes modal when the button is clicked
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
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
