import Link from 'next/link'
import styles from './Sidebar.module.scss'
import SidebarLink from './SidebarLinks/SidebarLink'
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

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
    href: '/work'
  },
  {
    id: 4,
    title: 'Contact',
    href: '/contact'
  }
]

const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <AnimatePresence>
        <motion.aside
          className={`${styles.container} ${isModalOpen && styles.mobile}`}
        >
          <header>
            <Link href='/'>
              <h1>A</h1>
              <h2>
                Abdul
                <br />
                ramon
              </h2>
            </Link>
            <p>Front End Developer</p>
          </header>

          <IoMdClose onClick={() => setIsModalOpen(false)} />

          <nav>
            <ul>
              {pages.map(page => (
                <SidebarLink key={page.id} {...page} />
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
              <Link href='https://twitter.com/AbdulRLass' target='_blank'>
                <li>
                  <FaTwitter />
                </li>
              </Link>
            </ul>
          </footer>
        </motion.aside>
      </AnimatePresence>

      <aside className={styles.subContainer}>
        <GiHamburgerMenu onClick={() => setIsModalOpen(true)} />
      </aside>
    </>
  )
}

export default Sidebar
