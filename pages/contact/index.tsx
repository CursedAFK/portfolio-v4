import Loading from '@/components/Loading/Loading'
import PageHead from '@/components/PageHead/PageHead'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import styles from '../../styles/contact.module.scss'
import { useForm } from '@formspree/react'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Image from 'next/image'

const Contact: NextPage = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	})

	const [state, handleSubmit] = useForm(
		process.env.NEXT_PUBLIC_FORMSPREE_API_KEY!
	)

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) =>
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})

	useEffect(() => {
		if (state.succeeded) {
			setFormData({
				name: '',
				email: '',
				message: ''
			})
			toast('Message sent!')
		}
		if (state.errors.length > 0) {
			setFormData({
				name: '',
				email: '',
				message: ''
			})
			toast('Something went wrong!')
		}
	}, [state.succeeded, state.errors])

	return (
		<>
			<Loading pageHeadProp='Contact | Front End Developer' />

			<motion.div
				className={styles.container}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 3 }}
			>
				<PageHead pageTitle='Contact | Front End Developer' />

				<ToastContainer
					position='top-right'
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme='dark'
				/>

				<section className={styles.form}>
					<h2>Contact me</h2>
					<p>
						I’m interested in any opportunities – especially ambitious or large
						projects. However, if you have other request or question, don’t
						hesitate to use the form.
					</p>
					<form onSubmit={handleSubmit}>
						<div>
							<motion.input
								initial={{ opacity: 0, y: '20vh' }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 3.5, duration: 1 }}
								type='text'
								name='name'
								id='name'
								placeholder='Name'
								value={formData.name}
								onChange={handleChange}
								style={{
									borderBottomColor: !formData.name ? 'red' : '#08fdd8'
								}}
							/>
							<motion.input
								initial={{ opacity: 0, y: '20vh' }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 3.75, duration: 1 }}
								type='email'
								name='email'
								id='email'
								placeholder='Email'
								value={formData.email}
								onChange={handleChange}
								style={{
									borderBottomColor: !formData.email ? 'red' : '#08fdd8'
								}}
							/>
						</div>
						<motion.textarea
							initial={{ opacity: 0, y: '20vh' }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 4, duration: 1 }}
							name='message'
							id='message'
							placeholder='Message'
							value={formData.message}
							onChange={handleChange}
							style={{
								borderBottomColor: !formData.message ? 'red' : '#08fdd8'
							}}
						/>
						<motion.div
							initial={{ opacity: 0, y: '20vh' }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 4.25, duration: 1 }}
						>
							<button
								type='submit'
								disabled={state.submitting}
							>
								<span className={styles.bg} />
								<span className={styles.dot} />
								Send message!
							</button>
						</motion.div>
					</form>
				</section>

				<motion.section
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 3.5, duration: 1 }}
				>
					<Image
						src='/images/map.jpg'
						alt='map'
						fill
						priority
						quality={100}
					/>
				</motion.section>
			</motion.div>
		</>
	)
}

export default Contact
