import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './SidebarLink.module.scss'

interface Props {
	title: string
	href: string
	closeModal: () => void
}

const SidebarLink = ({ title, href, closeModal }: Props) => {
	const pathname = usePathname()

	return (
		<Link
			href={href}
			onClick={closeModal}
			className={styles.container}
		>
			<li className={`${pathname === href && styles.active}`}>{title}</li>
		</Link>
	)
}

export default SidebarLink
