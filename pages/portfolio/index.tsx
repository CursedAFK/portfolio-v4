import { NextPage } from 'next'
import styles from '../../styles/portfolio.module.scss'
import Loading from '@/components/Loading/Loading'
import { motion } from 'framer-motion'
import PageHead from '@/components/PageHead/PageHead'

const Portfolio: NextPage = () => {
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
			</motion.div>
		</>
	)
}

export default Portfolio
