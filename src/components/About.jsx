import React, { useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

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
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Meet Buttons</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       Hover On Each Button To See The Effect . Check out the Tech Stack used in this website below.   </motion.p>

      {/* Buttons */}
      <div className="mt-8 flex space-x-4">
        {/* Button 1 */}
        <motion.button
          className="p-4 bg-blue-500 text-white rounded-lg transition-all duration-300 transform hover:scale-110"
          whileHover={{ scale: 1.1 }}
          onClick={toggleModal}
        >
          Button 1
        </motion.button>

        {/* Button 2 */}
        <motion.button
          className="p-4 bg-green-500 text-white rounded-lg transition-all duration-300 transform hover:rotate-6"
          whileHover={{ rotate: 6 }}
          onClick={toggleModal}
        >
          Button 2
        </motion.button>

        {/* Button 3 */}
        <motion.button
          className="p-4 bg-red-500 text-white rounded-lg transition-all duration-300 transform hover:skew-x-6"
          whileHover={{ skewX: 6 }}
          onClick={toggleModal}
        >
          Button 3
        </motion.button>

        {/* Button 4 */}
        <motion.button
          className="p-4 bg-yellow-500 text-white rounded-lg transition-all duration-300 transform hover:translate-x-4"
          whileHover={{ x: 4 }}
          onClick={toggleModal}
        >
          Button 4
        </motion.button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold">Pop-up Modal</h2>
            <p className="mt-4">This is the content of the pop-up modal.</p>
            <button
              onClick={toggleModal}
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
