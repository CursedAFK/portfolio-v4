import Loading from '@/components/Loading/Loading'
import MovingTexts from '@/components/MovingTexts/MovingTexts'
import PageHead from '@/components/PageHead/PageHead'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import Link from 'next/link'
import styles from '../../styles/about.module.scss'

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
            I&apos;m a Front-End Developer located in Nigeria, specializing in
            creating intuitive and dynamic user experiences. With a strong
            passion for UI effects, animations, and the constant pursuit of
            enhancing user interactions, I&apos;m continually expanding my
            skills and knowledge in areas such as React Native, Node.js,
            Express, and database technologies.
          </p>
          <p>
            I am a well-organized individual with a strong problem-solving
            ability and a keen attention to detail. In addition to my
            professional pursuits, I am a fan of Cristiano Ronaldo, enjoy
            watching TV series, and have a passion for Anime.
          </p>
          <p>
            I&apos;m deeply interested in the entire frontend spectrum and
            thrive on collaborating with positive individuals to work on
            ambitious projects. I find immense joy and satisfaction in pushing
            the boundaries of what is possible in frontend development, and
            I&apos;m always eager to take on new challenges that allow me to
            unleash my creativity and problem-solving skills.
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
