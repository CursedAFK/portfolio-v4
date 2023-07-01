import Loading from '@/components/Loading/Loading'
import PageHead from '@/components/PageHead/PageHead'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import Link from 'next/link'
import styles from '../../styles/my-skills.module.scss'

const skills = [
  {
    id: 1,
    title: 'HTML, CSS & Javascript',
    proficiency: 98,
    mood: '#F16529'
  },
  {
    id: 2,
    title: 'React Js & Next Js',
    proficiency: 90,
    mood: '#61DAFB'
  },
  {
    id: 3,
    title: 'Three Js & Framer Motion',
    proficiency: 70,
    mood: '#FF8700'
  },
  {
    id: 4,
    title: 'React Native & Expo Go',
    proficiency: 50,
    mood: '#0E9CA9'
  },
  {
    id: 5,
    title: 'APIs & Databases',
    proficiency: 40,
    mood: '#3A5998'
  },
  {
    id: 6,
    title: 'SEO & Performance Optimizations',
    proficiency: 80,
    mood: '#45B8AC'
  }
]

const experiences = [
  {
    id: 1,
    jobTitle: 'Next Js Developer',
    company: 'Robber Farms',
    duration: 'JANUARY 2023 - Present',
    description:
      'Lead Frontend Developer for a music NFT web 3 web app, utilizing Next.js to deliver an immersive user experience with optimal SEO. Working with a talented team, we bring our vision to life through high-quality, responsive web pages for music lovers and NFT enthusiasts.'
  },
  {
    id: 2,
    jobTitle: 'React Js Developer',
    company: 'Cecure Inteligence',
    duration: 'AUGUST 2022 - NOVEMBER 2022',
    description:
      'Developed and maintained multiple client-side web applications using React, and worked collaboratively with designers and back-end developers to deliver responsive and accessible web pages for optimal user experience.'
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
            With my experience as a software engineer, I have gained extensive
            expertise in remote work, collaborating with startups, agencies, and
            skilled professionals to develop innovative web solutions for a wide
            range of enterprise and consumer applications.
          </p>
          <p>
            As a skilled front-end developer, I specialize in building web
            applications using modern front-end frameworks such as React Js,
            Next Js, and Tailwind CSS. With my recently acquired skills and
            knowledge in technologies like React Native, Node.js, Express, and
            various database systems, I have expanded my capabilities to create
            dynamic and engaging user interfaces across multiple platforms. I am
            experienced in developing responsive layouts, optimizing web pages
            for performance and accessibility, and collaborating effectively
            with designers and back-end developers to deliver seamless and
            user-friendly experiences.
          </p>
          <p>
            In addition to my front-end development expertise, I possess
            hands-on experience with essential version control tools like Git
            and GitHub. Furthermore, I am proficient in deploying web
            applications using platforms like Netlify, Vercel, and Firebase,
            enabling efficient and seamless deployment processes for optimized
            user experiences.
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
