import Head from 'next/head'

interface Props {
	pageTitle?: string
}

const PageHead = ({ pageTitle = 'AL | Front End Developer' }: Props) => {
	return (
		<Head>
			<title>{pageTitle}</title>
			<meta content='width=device-width, initial-scale=1' name='viewport' />
			<meta
				name='description'
				content='As a frontend developer, I specialize in creating responsive and user-friendly websites using HTML, CSS, and JavaScript. Browse my portfolio to see my latest projects and learn more about my skills and experience. Contact me to discuss your web development needs today.'
			/>
			<meta name='robots' content='index, follow' />
			<link rel='icon' href='/logo.png' />
			<meta property='og:title' content={pageTitle} />
			<meta
				property='og:description'
				content='As a frontend developer, I specialize in creating responsive and user-friendly websites using HTML, CSS, and JavaScript. Browse my portfolio to see my latest projects and learn more about my skills and experience. Contact me to discuss your web development needs today.'
			/>
			<meta
				property='og:image'
				content='https://portfolio-v4-red.vercel.app/images/screenshot.jpg'
			/>
			<meta property='og:url' content='https://portfolio-v4-red.vercel.app/' />
			<meta name='twitter:title' content={pageTitle} />
			<meta
				name='twitter:description'
				content='As a frontend developer, I specialize in creating responsive and user-friendly websites using HTML, CSS, and JavaScript. Browse my portfolio to see my latest projects and learn more about my skills and experience. Contact me to discuss your web development needs today.'
			/>
			<meta
				name='twitter:image'
				content='https://portfolio-v4-red.vercel.app/images/screenshot.jpg'
			/>
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:site' content='@Rinn68' />
		</Head>
	)
}

export default PageHead
