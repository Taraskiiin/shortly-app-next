import Head from 'next/head';
import { Poppins } from 'next/font/google';

import Hero from '@/components/Hero';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});

export default function Home() {
	return (
		<>
			<Head>
				<title>Shortly</title>
			</Head>
			<main className={poppins.className}>
				<Hero />
			</main>
		</>
	);
}
