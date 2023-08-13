import React from 'react';

const TeamInfo = ({ name, position, desc }) => {
	return (
		<div className='flex flex-col justify-center ml-4'>
			<h3 className='text-lg  mb-1'>{name}</h3>
			<p className='text-md font-semibold'>{position}</p>
			<p className='text-sm text-gray-600 line-clamp-3 text-justify'>{desc}</p>
		</div>
	);
};

export default TeamInfo;
