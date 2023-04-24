import { NextPage } from 'next'
import styles from '../../styles/portfolio.module.scss'
import Loading from '@/components/Loading/Loading'
import { motion } from 'framer-motion'
import PageHead from '@/components/PageHead/PageHead'
import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
	{
		id: 1,
		title: 'Trackstack',
		imgPath: '/images/trackstack.jpg',
		extLinks: {
			github: 'https://github.com/CursedAFK/track-stack-frontend',
			liveSite: 'https://trackstack.xyz'
		}
	},
	{
		id: 2,
		title: 'Sava',
		imgPath: '/images/sava.jpg',
		extLinks: {
			github: 'https://github.com/timmbach/test-sava-app/tree/lasisi',
			liveSite: 'https://d2dtyshm98cenl.cloudfront.net/'
		}
	},
	{
		id: 3,
		title: 'Car Showroom',
		imgPath: '/images/car-show.jpg',
		extLinks: {
			github: 'https://github.com/CursedAFK/car-showroom',
			liveSite: 'https://carshow-room.netlify.app/'
		}
	},
	{
		id: 4,
		title: 'Cubicules',
		imgPath: '/images/cubes.jpg',
		extLinks: {
			github: 'https://github.com/CursedAFK/three-box',
			liveSite: 'https://cubicles-32b8d5.netlify.app/'
		}
	},
	{
		id: 5,
		title: 'Planets',
		imgPath: '/images/planets.jpg',
		extLinks: {
			github: 'https://github.com/CursedAFK/three-solar-system',
			liveSite: 'https://planets-eco.netlify.app/'
		}
	},
	{
		id: 6,
		title: 'Css Pro Site',
		imgPath: '/images/css-pro.jpg',
		extLinks: {
			github: '',
			liveSite: 'https://planets-eco.netlify.app/'
		}
	},
	{
		id: 7,
		title: 'Country App',
		imgPath: '/images/country.jpg',
		extLinks: {
			github: 'https://github.com/CursedAFK/country-app',
			liveSite: 'https://country-app-lasisi.netlify.app/'
		}
	},
	{
		id: 8,
		title: 'Todo App',
		imgPath: '/images/todo.jpg',
		extLinks: {
			github:
				'https://github.com/CursedAFK/cil-internship-cohort-04/tree/005/Abdulramon%20Lasisi/Module%202/Week%204/Task_1_JavaScript_TODO_App',
			liveSite: 'https://lasisi-working-api.netlify.app/'
		}
	}
]

const Portfolio: NextPage = () => {
	const [cards, setCards] = useState(projects)

	const shuffle = useCallback((array: typeof cards) => {
		const newArray = [...array]
		for (let i = newArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1))
			;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
		}
		return newArray
	}, [])

	useEffect(() => {
		const interval = setInterval(() => {
			const shuffledCards = shuffle(cards)
			setCards(shuffledCards)
		}, 7500)

		return () => clearInterval(interval)
	}, [cards, shuffle])

	return (
		<>
			<Loading pageHeadProp='Portfolio | Front End Developer' />

			<motion.div
				className={styles.container}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 3 }}
			>
				<PageHead pageTitle='Portfolio | Front End Developer' />

				<main>
					{cards.map(card => (
						<motion.figure
							key={card.id}
							layoutId={card.title}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{
								duration: 1,
								opacity: {
									delay: 3.5 + card.id * 0.2,
									duration: 2,
									ease: 'easeOut'
								}
							}}
						>
							<Image
								src={card.imgPath}
								alt={card.title}
								fill
							/>
							<div className={styles.overlay} />
							<motion.figcaption>
								<div>
									<Link
										href={card.extLinks.liveSite}
										target='_blank'
									>
										View Site
									</Link>
									<Link
										href={card.extLinks.github}
										target='_blank'
									>
										View Source
									</Link>
									<div className={styles.divider} />
								</div>
							</motion.figcaption>
						</motion.figure>
					))}
				</main>
			</motion.div>
		</>
	)
}

export default Portfolio
