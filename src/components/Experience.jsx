import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { styles } from '../styles';

import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import PhotoCard from '../components/PhotoCard.jsx';
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import TeamInfo from './TeamInfo';
const Data = [
	{
		name: 'Shaheer Minhas',

		position: 'Developer	',

		imageUrl: 'pictures/shaheer.jpg',
		linkedin: 'https://www.linkedin.com/in/shaheer-minhas-86a108231/',
		github: 'https://github.com/ShaheerMinhas',
		desc: 'Meet Shaheer, the coding virtuoso of our dream team! Say hello to the tech whisperer behind the scenes!',
		insta: '',
	},
	{
		name: 'Samra Zafar',

		position: 'Developer and Outreach Manager',

		imageUrl: 'https://res.cloudinary.com/dzfoiqap7/image/upload/v1739777991/cqqfidsmafznljmqud8t.jpg',
		linkedin: 'https://www.linkedin.com/in/samrazafar-sz/',
		github: 'https://github.com/SamraZafar-SZ/ ',
		desc: "Meet Samra Zafar. She's a talented coder and a valuable member of our new software company",

		insta: '',
	},
	{
		name: 'Ahsan Naveed',

		position: 'Developer',

		imageUrl: 'pictures/ahsan2.JPG',
		linkedin: 'https://www.linkedin.com/in/ahsan-n-805a5a230/',
		github: '',
		desc: ' Meet Ahsan- our brilliant coder extraordinaire! Say hello to the tech genius behind our innovative solutions! ',
		insta: '',
	},
	
	
];

const Experience = () => {
	return (
		<>
			<div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
				<div>
					<motion.div variants={textVariant()}>
						<p className={styles.sectionSubText}>MEET OUR TEAM</p>
						<h2 className={styles.sectionHeadText}>TEAM</h2>
					</motion.div>
				</div>
				<Carousel
					plugins={[
						'infinite',
						'arrows',
						// {
						// 	resolve: autoplayPlugin,
						// 	options: {
						// 		interval: 2000,
						// 		numberOfSlides: 3,
						// 	},
						// },
					]}
					animationSpeed={1000}
					slidesPerPage={1} // Added to ensure one slide per page on mobile
					breakpoints={{
						// Adjust these breakpoints based on your design and requirements
						600: {
							// Up to 600px screen width (mobile)
							// slidesPerPage: 1,
							arrows: false, // Hide arrows on mobile
						},
						1024: {
							// Up to 1024px screen width (tablet)
							slidesPerPage: 3, // Show three slides on tablets
							arrows: true,
						},
					}}>
					{Data.map((member, index) => (
						<div key={index} className='mb-4 flex flex-col md:flex md:flex-row items-center'>
							<PhotoCard {...member} className='md:mr-4' />
							<TeamInfo name={member.name} position={member.position} desc={member.desc} />
						</div>
					))}
				</Carousel>
			</div>
		</>
	);
};

export default SectionWrapper(Experience, 'work');
