/* eslint-disable @next/next/no-img-element */
import React from 'react';

const featuresList = [
	{
		id: '1',
		img: 'assets/icon-brand-recognition.svg',
		name: 'Brand Recognition',
		desc: `Boost your brand recognition with each click. Generic links don't
        mean a thing. Branded links help instil confidence in your content.`,
	},
	{
		id: '2',
		img: 'assets/icon-detailed-records.svg',
		name: 'Detailed records',
		desc: `Gain insights into who is clicking your links. Knowing when and
        where people engage with your content helps inform better decisions.`,
	},
	{
		id: '3',
		img: 'assets/icon-fully-customizable.svg',
		name: 'Fully customizable',
		desc: `Improve brand awareness and content discoverability through customizable
		links, supercharging audience engagement.`,
	},
];

export default function Feature() {
	return (
		<section id='features' className='pb-32 bg-gray-100'>
			<div className='relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7'>
				<div className='hidden absolute top-24 w-10/12 left-16 h-3 bg-cyan md:block' />
				<div className='absolute w-2 left-1/2 h-full -ml-1 bg-cyan md:hidden' />
				{featuresList.map((el, index) => (
					<div
						key={el.id}
						className={`relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3 ${
							'md:mt-' + 8 * index
						}`}
					>
						<div className='absolute -ml-10 left-1/2 -top-10 md:left-16'>
							<div className='flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet'>
								<img src={el.img} alt={el.name} />
							</div>
						</div>
						<h5 className='pt-6 text-xl font-bold text-center capitalize md:text-left'>
							{el.name}
						</h5>
						<p className='text-center text-gray-400 md:text-left'>{el.desc}</p>
					</div>
				))}
			</div>
		</section>
	);
}
