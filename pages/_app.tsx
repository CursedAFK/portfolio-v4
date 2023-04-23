import { Open_Sans, Saira } from 'next/font/google'
import type { AppProps } from 'next/app'
import '../styles/globals.scss'
import Sidebar from '@/components/Sidebar/Sidebar'
import MouseStalker from '@/components/MouseStalker/MouseStalker'
import StarsBg from '@/components/StarsBg/StarsBg'

const openSans = Open_Sans({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-open-sans'
})

const saira = Saira({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-saira'
})

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<div className={`${openSans.variable} ${saira.variable}`}>
			<Sidebar />
			<Component {...pageProps} />
			<MouseStalker />
			<StarsBg />
		</div>
	)
}

export default App
