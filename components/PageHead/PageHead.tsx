import Head from 'next/head'

interface Props {
	pageTitle?: string
}

const PageHead = ({ pageTitle = 'AL | Front End Developer' }: Props) => {
	return (
		<Head>
			<title>{pageTitle}</title>
			<meta
				content='width=device-width, initial-scale=1'
				name='viewport'
			/>
			<meta
				name='description'
				content='As a frontend developer, I specialize in creating responsive and user-friendly websites using HTML, CSS, and JavaScript. Browse my portfolio to see my latest projects and learn more about my skills and experience. Contact me to discuss your web development needs today.'
			/>
			<meta
				name='robots'
				content='index, follow'
			/>
			<link
				rel='icon'
				href='/logo.png'
			/>
		</Head>
	)
}

export default PageHead
