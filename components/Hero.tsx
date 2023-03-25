import React, { useState } from 'react';
import Link from 'next/link';

const navList = [
	{ id: '1', name: 'Features', link: '#' },
	{ id: '2', name: 'Pricing', link: '#' },
	{ id: '3', name: 'Resources', link: '#' },
];

export default function Hero() {
	const [openModal, setOpenModal] = useState<boolean>(false);

	const handleToggle = () => {
		openModal ? setOpenModal(false) : setOpenModal(true);
	};

	return (
		<>
			<nav className='relative container mx-auto p-6'>
				<div className='flex items-center justify-between'>
					<div className='flex items-center space-x-20'>
						<img src='/assets/logo.svg' alt='' />
						<div className='hidden space-x-8 font-bold lg:flex'>
							{navList.map((el) => (
								<Link
									key={el.id}
									href={el.link}
									className='text-grayishViolet hover:text-veryDarkViolet'
								>
									{el.name}
								</Link>
							))}
						</div>
					</div>
					<div className='hidden items-center space-x-6 font-bold text-grayishViolet lg:flex'>
						<div className='hover:text-veryDarkViolet'>Login</div>
						<Link
							href='#'
							className='px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70'
						>
							Sign Up
						</Link>
					</div>
					<button
						id='menu-btn'
						className={`block hamburger lg:hidden focus:outline-none ${
							openModal && 'open'
						}`}
						type='button'
						onClick={handleToggle}
					>
						<span className='hamburger-top'></span>
						<span className='hamburger-middle'></span>
						<span className='hamburger-bottom'></span>
					</button>
				</div>
				<div
					id='menu'
					className={`absolute  p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100 ${
						openModal ? 'block' : 'hidden'
					}`}
				>
					<div className='flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm'>
						{navList.map((el) => (
							<Link key={el.id} href={el.link} className='w-full text-center'>
								{el.name}
							</Link>
						))}
						<Link
							href='#'
							className='w-full pt-6 border-t border-gray-400 text-center'
						>
							Login
						</Link>
						<Link
							href='#'
							className='w-full py-3 text-center rounded-full bg-cyan'
						>
							Sign Up
						</Link>
					</div>
				</div>
			</nav>
			<section id='hero'>
				<div className='container flex flex-col-reverse mx-auto p-6 lg:flex-row'>
					<div className='flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52'>
						<h1 className='text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left'>
							More than just shorter links
						</h1>
						<p className='text-2xl text-center text-gray-400 lg:max-w-md lg:text-left'>
							{`Build your brand's recognition and get detailed insights on how
							your links are performing.`}
						</p>
						<div className='mx-auto lg:mx-0'>
							<Link
								href='#'
								className='py-5 px-10 text-2xl font-bold text-white bg-cyan rounded-full lg:py-4 hover:opacity-70'
							>
								Get Started
							</Link>
						</div>
					</div>
					<div className='mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2'>
						<img src='/assets/illustration-working.svg' alt='' />
					</div>
				</div>
			</section>
		</>
	);
}
