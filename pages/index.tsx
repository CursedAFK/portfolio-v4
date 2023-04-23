import PageHead from '@/components/PageHead/PageHead'
import { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/home.module.scss'
import Loading from '@/components/Loading/Loading'
import { motion } from 'framer-motion'

const Home: NextPage = () => {
	return (
		<>
			<Loading />

			<motion.div
				className={styles.container}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 3 }}
			>
				<PageHead />

				<h1>
					Hi,
					<br />
					I&apos;m <span>A</span>bdulramon.
				</h1>
				<p>Front End Developer / Next Js Expert</p>
				<Link href='/contact'>
					<button>
						<span className={styles.bg} />
						<span className={styles.dot} />
						Contact me!
					</button>
				</Link>
			</motion.div>
		</>
	)
}

export default Home
