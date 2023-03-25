/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

const socialMediaList = [
	{ id: '1', url: '#', img: 'assets/icon-facebook.svg' },
	{ id: '2', url: '#', img: 'assets/icon-twitter.svg' },
	{ id: '3', url: '#', img: 'assets/icon-pinterest.svg' },
	{ id: '4', url: '#', img: 'assets/icon-instagram.svg' },
];

const footerLinks = [
	{
		id: '1',
		category: 'Features',
		links: [
			{ name: 'Link Shortening', url: '#' },
			{ name: 'Branded Links', url: '#' },
			{ name: 'Analytics', url: '#' },
		],
	},
	{
		id: '2',
		category: 'Resources',
		links: [
			{ name: 'Blog', url: '#' },
			{ name: 'Developers', url: '#' },
			{ name: 'Support', url: '#' },
		],
	},
	{
		id: '3',
		category: 'Company',
		links: [
			{ name: 'About', url: '#' },
			{ name: 'Our Team', url: '#' },
			{ name: 'Careers', url: '#' },
			{ name: 'Contact', url: '#' },
		],
	},
];

export default function Footer() {
	return (
		<footer className='py-16 bg-veryDarkViolet'>
			<div className='container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start'>
				<img src='assets/logo.svg' alt='' />
				<div className='flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0'>
					{footerLinks.map((el) => (
						<div
							key={el.id}
							className='flex flex-col items-center w-full md:items-start'
						>
							<div className='mb-5 font-bold text-white capitalize'>
								{el.category}
							</div>
							<div className='flex flex-col items-center space-y-3 md:items-start'>
								{el.links.map((el) => (
									<Link
										key={el.name}
										href={el.url}
										className='capitalize text-grayishViolet hover:text-cyan'
									>
										{el.name}
									</Link>
								))}
							</div>
						</div>
					))}
				</div>
				<div className='flex space-x-6'>
					{socialMediaList.map((el) => (
						<Link key={el.id} href={el.url}>
							<img src={el.img} alt='' className='ficon' />
						</Link>
					))}
				</div>
			</div>
		</footer>
	);
}
