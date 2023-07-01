import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import styles from './Sidebar.module.scss'
import SidebarLink from './SidebarLinks/SidebarLink'

const pages = [
  {
    id: 1,
    title: 'About',
    href: '/about'
  },
  {
    id: 2,
    title: 'My Skills',
    href: '/my-skills'
  },
  {
    id: 3,
    title: 'Work',
    href: '/portfolio'
  },
  {
    id: 4,
    title: 'Contact',
    href: '/contact'
  }
]

const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <AnimatePresence>
        <motion.aside
          className={`${styles.container} ${isModalOpen && styles.mobile}`}
        >
          <header>
            <Link href='/' onClick={closeModal}>
              <h1>A</h1>
              <h2>
                Abdul
                <br />
                ramon
              </h2>
            </Link>
            <p>Front End Developer</p>
          </header>

          <IoMdClose onClick={closeModal} />

          <nav>
            <ul>
              {pages.map(page => (
                <SidebarLink key={page.id} {...page} closeModal={closeModal} />
              ))}
            </ul>
          </nav>

          <footer>
            <ul>
              <Link
                href='https://www.linkedin.com/in/abdulramon-lasisi-9b853b1b9/'
                target='_blank'
              >
                <li>
                  <FaLinkedinIn />
                </li>
              </Link>
              <Link href='https://github.com/CursedAFK' target='_blank'>
                <li>
                  <FaGithub />
                </li>
              </Link>
              <Link href='https://twitter.com/Rinn68' target='_blank'>
                <li>
                  <FaTwitter />
                </li>
              </Link>
            </ul>
          </footer>
        </motion.aside>
      </AnimatePresence>

      <motion.aside
        className={styles.subContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        <GiHamburgerMenu onClick={() => setIsModalOpen(true)} />
      </motion.aside>
    </>
  )
}

export default Sidebar
