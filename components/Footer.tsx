/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function Footer() {
	return (
		<footer className='py-16 bg-veryDarkViolet'>
			<div className='container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start'>
				<img src='assets/logo.svg' alt='' />
				<div className='flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0'>
					<div className='flex flex-col items-center w-full md:items-start'>
						<div className='mb-5 font-bold text-white capitalize'>Features</div>
						<div className='flex flex-col items-center space-y-3 md:items-start'>
							<a
								href='#'
								className='capitalize text-grayishViolet hover:text-cyan'
							>
								Link shortening
							</a>
							<a
								href='#'
								className='capitalize text-grayishViolet hover:text-cyan'
							>
								Branded links
							</a>
							<a
								href='#'
								className='capitalize text-grayishViolet hover:text-cyan'
							>
								Analytics
							</a>
						</div>
					</div>
					<div className='flex flex-col items-center w-full md:items-start'>
						<div className='mb-5 font-bold text-white capitalize'>
							Resources
						</div>
						<div className='flex flex-col items-center space-y-3 md:items-start'>
							<a
								href='#'
								className='capitalize text-grayishViolet hover:text-cyan'
							>
								Blog
							</a>
							<a
								href='#'
								className='capitalize text-grayishViolet hover:text-cyan'
							>
								Developers
							</a>
							<a
								href='#'
								className='capitalize text-grayishViolet hover:text-cyan'
							>
								Support
							</a>
						</div>
					</div>
					<div className='flex flex-col items-center w-full md:items-start'>
						<div className='mb-5 font-bold text-white capitalize'>Company</div>
						<div className='flex flex-col items-center space-y-3 md:items-start'>
							<a
								href='#'
								className='capitalize text-grayishViolet hover:text-cyan'
							>
								About
							</a>
							<a
								href='#'
								className='capitalize text-grayishViolet hover:text-cyan'
							>
								Our Team
							</a>
							<a
								href='#'
								className='capitalize text-grayishViolet hover:text-cyan'
							>
								Careers
							</a>
							<a
								href='#'
								className='capitalize text-grayishViolet hover:text-cyan'
							>
								Contact
							</a>
						</div>
					</div>
				</div>
				<div className='flex space-x-6'>
					<a href='#'>
						<img src='assets/icon-facebook.svg' alt='' className='ficon' />
					</a>
					<a href='#'>
						<img src='assets/icon-twitter.svg' alt='' className='ficon' />
					</a>
					<a href='#'>
						<img src='assets/icon-pinterest.svg' alt='' className='ficon' />
					</a>
					<a href='#'>
						<img src='assets/icon-instagram.svg' alt='' className='ficon' />
					</a>
				</div>
			</div>
		</footer>
	);
}
