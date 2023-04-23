import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import * as THREE from 'three'
import styles from './StarsBg.module.scss'

const Scene = () => {
	const starsRef = useRef<THREE.Points | null>(null)

	useFrame(() => {
		addEventListener('mousemove', e => {
			if (!starsRef.current) return

			starsRef.current.rotation.y = (e.clientX / innerWidth) * 0.75
			starsRef.current.rotation.x = (e.clientY / innerHeight) * 0.75
		})
	})

	return (
		<>
			<OrbitControls
				autoRotate
				autoRotateSpeed={0.5}
			/>

			<Stars
				ref={starsRef}
				radius={100}
				depth={50}
				count={5000}
				factor={4}
				saturation={0}
				fade
				speed={1}
			/>
		</>
	)
}

const StarsBg = () => {
	return (
		<div className={styles.container}>
			<Suspense fallback={null}>
				<Canvas>
					<Scene />
				</Canvas>
			</Suspense>
		</div>
	)
}

export default StarsBg
