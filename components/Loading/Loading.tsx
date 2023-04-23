import { useEffect, useState } from 'react'
import PageHead from '../PageHead/PageHead'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './Loading.module.scss'

interface Props {
	pageHeadProp?: string
}

const Loading = ({ pageHeadProp }: Props) => {
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => setIsLoading(false), 3000)
		return () => clearTimeout(timer)
	}, [])

	return (
		<AnimatePresence>
			{isLoading ? (
				<motion.div
					className={styles.container}
					initial={{ x: '-100vw', opacity: 0.5 }}
					animate={{ x: 0, opacity: 1 }}
					exit={{ x: '100vw', opacity: 0.5 }}
					transition={{ duration: 1 }}
				>
					<PageHead pageTitle={pageHeadProp} />

					<h1>A</h1>
					<h2>Abdulramon</h2>
					<p>Abdulramon is thinking</p>
					<div className={styles.subContainer}>
						<motion.div
							className={styles.progress}
							animate={{ width: '100%' }}
							transition={{ duration: 2, delay: 1 }}
						/>
					</div>
				</motion.div>
			) : (
				''
			)}
		</AnimatePresence>
	)
}

export default Loading
