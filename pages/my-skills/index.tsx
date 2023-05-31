import Loading from '@/components/Loading/Loading'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import styles from '../../styles/my-skills.module.scss'
import PageHead from '@/components/PageHead/PageHead'
import Link from 'next/link'

const skills = [
	{
		id: 1,
		title: 'HTML',
		proficiency: 98,
		mood: '#0074D9'
	},
	{
		id: 2,
		title: 'CSS',
		proficiency: 90,
		mood: '#00FF00'
	},
	{
		id: 3,
		title: 'Javascript',
		proficiency: 85,
		mood: '#FFFF00'
	},
	{
		id: 4,
		title: 'React Js',
		proficiency: 80,
		mood: '#61DAFB'
	},
	{
		id: 5,
		title: 'Next Js',
		proficiency: 75,
		mood: '#3B1F5E'
	},
	{
		id: 6,
		title: 'Three Js',
		proficiency: 50,
		mood: '#ADD8E6'
	},
	{
		id: 7,
		title: 'React Native',
		proficiency: 35,
		mood: '#7952B3'
	}
]

const experiences = [
	{
		id: 1,
		jobTitle: 'React Js Developer',
		company: 'Cecure Inteligence',
		duration: 'AUGUST 2022 - NOVEMBER 2022',
		description:
			'Developed and maintained multiple client-side web applications using React, and worked collaboratively with designers and back-end developers to deliver responsive and accessible web pages for optimal user experience.'
	},
	{
		id: 2,
		jobTitle: 'Next Js Developer',
		company: 'Robber Farms',
		duration: 'JANUARY 2023 - Present',
		description:
			'Lead Frontend Developer for a music NFT web 3 web app, utilizing Next.js to deliver an immersive user experience with optimal SEO. Working with a talented team, we bring our vision to life through high-quality, responsive web pages for music lovers and NFT enthusiasts.'
	}
]

const MySkills: NextPage = () => {
	return (
		<>
			<Loading pageHeadProp='Skills & Experience | Front End Developer' />

			<motion.div
				className={styles.container}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 3 }}
			>
				<PageHead pageTitle='Skills & Experience | Front End Developer' />

				<section>
					<h2>Skills & Experience</h2>
					<p>
						From my experience as a software engineer, I have worked remotely
						for agencies, collaborated with startups, and partnered with skilled
						individuals to develop web solutions for both enterprise and
						consumer applications.
					</p>
					<p>
						My specialty lies in front-end development, where I have built a
						range of web applications from small to medium web apps using modern
						front-end frameworks such as React Js, Next Js, and Tailwind CSS. I
						have also gained expertise in developing responsive layouts,
						optimizing web pages for performance and accessibility, and
						collaborating with designers and back-end developers to deliver
						cohesive and user-friendly experiences.
					</p>
					<p>
						Additionally, I have experience with version control tools such as
						Git and GitHub and deployment platforms such as Netlify, Vercel and
						Firebase.
					</p>
					<p>
						Visit my{' '}
						<Link
							href='https://www.linkedin.com/in/abdulramon-lasisi-9b853b1b9/'
							target='_blank'
						>
							LinkedIn
						</Link>{' '}
						profile for more details or just{' '}
						<Link href='/contact'>contact</Link> me.
					</p>
				</section>

				<section>
					<ul>
						{skills.map(skill => (
							<li key={skill.id}>
								<p>{skill.title}</p>
								<div>
									<motion.div
										style={{
											backgroundColor: skill.mood
										}}
										initial={{
											width: 0
										}}
										animate={{
											width: skill.proficiency + '%'
										}}
										transition={{
											delay: 3.5 + skill.id * 0.2,
											duration: 1,
											ease: 'easeOut'
										}}
									/>
								</div>
							</li>
						))}
					</ul>
					<footer>
						{experiences.map(experience => (
							<article key={experience.id}>
								<h4>{experience.jobTitle}</h4>
								<h5>{experience.company}</h5>
								<h6>{experience.duration}</h6>
								<p>{experience.description}</p>
							</article>
						))}
					</footer>
				</section>
			</motion.div>
		</>
	)
}

export default MySkills
