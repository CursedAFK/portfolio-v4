import { Open_Sans } from 'next/font/google'
import type { AppProps } from 'next/app'
import '../styles/globals.scss'
import Sidebar from '@/components/Sidebar/Sidebar'
import MouseStalker from '@/components/MouseStalker/MouseStalker'

const openSans = Open_Sans({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-open-sans'
})

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<div className={`${openSans.variable}`}>
			<Sidebar />
			<Component {...pageProps} />
			<MouseStalker />
		</div>
	)
}

export default App
