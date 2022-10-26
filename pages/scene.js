import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Scene from '../src/Scene'

export default function App() {
    return (
        <Canvas shadows flat linear>
            <Scene />
            <OrbitControls />
        </Canvas>
    )
}
