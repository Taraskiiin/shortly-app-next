import React from 'react';

const list = [
	{
		id: '1',
		link: 'https://frontendmentor.io',
		shortLink: 'https://rel.ink/k4IKyk',
	},
	{
		id: '1',
		link: 'https://twitter.com/frontendmentor',
		shortLink: 'https://rel.ink/gxOXp9',
	},
	{
		id: '1',
		link: 'https://linkedin.com/frontend-mentor',
		shortLink: 'https://rel.ink/gob3X9',
	},
];

export default function Shorten() {
	const chackIfEven = (number: number) => (number % 2 === 0 ? true : false);

	return (
		<section id='shorten' className='relative bg-gray-100'>
			<div className='max-w-4xl mx-auto p-6 space-y-6'>
				<form
					id='link-form'
					className='relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3'
				>
					<input
						type='text'
						className='flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none'
						placeholder='Shorten a link here'
						id='link-input'
					/>
					<button className='px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2'>
						Shorten It!
					</button>
					<div
						id='err-msg'
						className='absolute left-7 bottom-3 text-red text-sm italic'
					></div>
				</form>

				{list.map((el, index) => {
					const isEven = chackIfEven(index + 1);
					return (
						<div
							key={el.id}
							className='flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row'
						>
							<p className='font-bold text-center text-veryDarkViolet md:text-left'>
								{el.link}
							</p>

							<div className='flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0'>
								<div className='font-bold text-cyan'>{el.shortLink}</div>
								<button
									className={`p-2 px-8 text-white  rounded-lg hover:opacity-70 focus:outline-none ${
										isEven ? 'bg-darkViolet' : 'bg-cyan'
									}`}
								>
									Copy
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
