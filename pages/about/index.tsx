import { NextPage } from 'next'
import styles from '../../styles/about.module.scss'
import Loading from '@/components/Loading/Loading'
import PageHead from '@/components/PageHead/PageHead'
import Link from 'next/link'
import { motion } from 'framer-motion'
import MovingTexts from '@/components/MovingTexts/MovingTexts'

const About: NextPage = () => {
	return (
		<>
			<Loading pageHeadProp='My, Myself & I | AL' />

			<motion.div
				className={styles.container}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 3 }}
			>
				<PageHead pageTitle='My, Myself & I | AL' />

				<section>
					<h2>My, Myself & I</h2>
					<p>
						I’m a Front-End Developer located in Nigeria. I have a serious
						passion for UI effects, animations and creating intuitive, dynamic
						user experiences.
					</p>
					<p>
						Well-organised person, problem solver, with high attention to
						detail. Fan of CR7, TV series and Anime.
					</p>
					<p>
						Interested in the entire frontend spectrum and working on ambitious
						projects with positive people.
					</p>
					<Link href='/contact'>Let’s make something special.</Link>
				</section>

				<section>
					<MovingTexts />
				</section>
			</motion.div>
		</>
	)
}

export default About
