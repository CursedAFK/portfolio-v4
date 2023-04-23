import { Text, OrbitControls, TrackballControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useRef, useMemo, useState } from 'react'
import * as THREE from 'three'

const wordsArr = [
	'React',
	'Material UI',
	'Tailwind CSS',
	'Typescript',
	'Next.js',
	'Chakra UI',
	'Three.js',
	'React Three Fiber',
	'React Spring',
	'React Query',
	'Typescript',
	'React Router',
	'Framer Motion',
	'Zustand',
	'Redux Toolkit',
	'Firebase',
	'HTML',
	'CSS',
	'JavaScript',
	'GraphQL',
	'REST',
	'npm',
	'SASS',
	'Git'
]

const Word = ({
	position,
	children
}: {
	position: THREE.Vector3
	children: string
}) => {
	const textRef = useRef<THREE.Mesh | null>(null)

	useFrame(({ camera }) => {
		if (!textRef.current) return
		textRef.current.quaternion.copy(camera.quaternion)
	})

	return (
		<Text
			font='/fonts/Saira-SemiBold.ttf'
			fontSize={1.4}
			letterSpacing={-0.05}
			color={'#08fdd8'}
			ref={textRef}
			position={position}
		>
			{children}
		</Text>
	)
}

const Scene = () => {
	const [isClicked, setIsClicked] = useState(false)

	const words = useMemo(() => {
		let wordsArrPos = 0
		const count = 8
		const radius = 20
		const temp: [THREE.Vector3, string][] = []
		const spherical = new THREE.Spherical()
		const phiSpan = Math.PI / (count + 1)
		const thetaSpan = (Math.PI * 2) / count
		for (let i = 1; i < count + 1; i++) {
			for (let j = 0; j < count; j++) {
				temp.push([
					new THREE.Vector3().setFromSpherical(
						spherical.set(radius, phiSpan * i, thetaSpan * j)
					),
					wordsArr[wordsArrPos]
				])
				wordsArrPos = wordsArr.length > wordsArrPos ? wordsArrPos + 1 : 0
			}
		}
		return temp
	}, [])

	return (
		<>
			<OrbitControls
				enabled={!isClicked}
				autoRotate
				reverseOrbit
				autoRotateSpeed={8}
			/>

			<TrackballControls enabled={isClicked} />

			<group
				onPointerDown={() => setIsClicked(true)}
				onPointerUp={() => setIsClicked(false)}
			>
				{words.map(([pos, word], index) => (
					<Word
						key={index}
						position={pos as THREE.Vector3}
					>
						{word as string}
					</Word>
				))}
			</group>
		</>
	)
}

const MovingTexts = () => {
	return (
		<Suspense fallback={null}>
			<Canvas camera={{ position: [0, 0, 35], fov: 70 }}>
				<Scene />
			</Canvas>
		</Suspense>
	)
}

export default MovingTexts
