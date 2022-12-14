
import useSpline from '@splinetool/r3f-spline'
import { PerspectiveCamera } from '@react-three/drei'

export default function Scene({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/vet5E3euViWsihji/scene.splinecode')
  return (
    <>
      <color attach="background" args={['#7b00a6']} />
      <group {...props} dispose={null}>
        <mesh
          name="Torus 3"
          geometry={nodes['Torus 3'].geometry}
          material={materials.J}
          castShadow
          receiveShadow
          position={[102.39, -373.7, -30.26]}
          rotation={[0.12, 0, -1.33]}
          scale={1}
        />
        <mesh
          name="Torus 5"
          geometry={nodes['Torus 5'].geometry}
          material={materials.J}
          castShadow
          receiveShadow
          position={[416.53, -486.14, 8.65]}
          rotation={[-0.33, -0.11, -1.35]}
          scale={1}
        />
        <mesh
          name="Torus 4"
          geometry={nodes['Torus 4'].geometry}
          material={materials['Torus 4 Material']}
          castShadow
          receiveShadow
          position={[258.39, -549.98, -5.98]}
          rotation={[-1.18, -0.24, -1.51]}
          scale={1}
        />
        <mesh
          name="Torus 2"
          geometry={nodes['Torus 2'].geometry}
          material={materials['Torus 2 Material']}
          castShadow
          receiveShadow
          position={[275.69, -345.66, 15.73]}
          rotation={[0.12, 0, -1.33]}
          scale={1}
        />
        <mesh
          name="Merged Geometry 4"
          geometry={nodes['Merged Geometry 4'].geometry}
          material={materials.Red}
          castShadow
          receiveShadow
          position={[287.04, -531.74, 16.27]}
          rotation={[3, 0.41, 1.09]}
          scale={1}
        />
        <mesh
          name="Merged Geometry"
          geometry={nodes['Merged Geometry'].geometry}
          material={materials.Red}
          castShadow
          receiveShadow
          position={[293.04, -385.68, 11.31]}
          rotation={[0.66, -0.8, 1.64]}
          scale={1}
        />
        <mesh
          name="Torus"
          geometry={nodes.Torus.geometry}
          material={materials['Torus Material']}
          castShadow
          receiveShadow
          position={[275.69, -345.66, 15.73]}
          rotation={[0.12, 0, -1.33]}
          scale={1}
        />
        <mesh
          name="Merged Geometry 3"
          geometry={nodes['Merged Geometry 3'].geometry}
          material={materials['Merged Geometry 3 Material']}
          receiveShadow
          position={[97.75, -438.05, 106.7]}
          rotation={[0, 0, 0.99]}
          scale={1}
        />
        <mesh
          name="Merged Geometry1"
          geometry={nodes['Merged Geometry1'].geometry}
          material={materials['Merged Geometry1 Material']}
          receiveShadow
          position={[183.03, -364.94, 42.23]}
          rotation={[0, 0, 0.99]}
          scale={1}
        />
        <mesh
          name="Sphere 2"
          geometry={nodes['Sphere 2'].geometry}
          material={materials['Sphere 2 Material']}
          castShadow
          receiveShadow
          position={[140.39, -236.47, -2337.91]}
          rotation={[0.03, -0.09, 0]}
          scale={1}
        />
        <mesh
          name="Sphere 9"
          geometry={nodes['Sphere 9'].geometry}
          material={materials.Accent}
          castShadow
          receiveShadow
          position={[227.82, -543.25, 30.06]}
          rotation={[0.03, -0.09, 0]}
          scale={1}
        />
        <mesh
          name="Sphere 3"
          geometry={nodes['Sphere 3'].geometry}
          material={materials.Accent}
          castShadow
          receiveShadow
          position={[363.82, -321.25, -2.94]}
          rotation={[0.03, -0.09, 0]}
          scale={1}
        />
        <mesh
          name="Sphere 11"
          geometry={nodes['Sphere 11'].geometry}
          material={materials['Untitled Material']}
          castShadow
          receiveShadow
          position={[400.37, -459.38, -49.88]}
          rotation={[0.26, -0.09, 0.02]}
          scale={[-0.47, 0.47, 0.47]}
        />
        <mesh
          name="Sphere 5"
          geometry={nodes['Sphere 5'].geometry}
          material={materials['Untitled Material']}
          castShadow
          receiveShadow
          position={[51.24, -482.16, -80.29]}
          rotation={[0.26, -0.09, 0.02]}
          scale={[-0.47, 0.47, 0.47]}
        />
        <mesh
          name="Sphere 7"
          geometry={nodes['Sphere 7'].geometry}
          material={materials['Untitled Material']}
          castShadow
          receiveShadow
          position={[354.13, -462.96, -51.75]}
          rotation={[0.03, -0.09, -2.04]}
          scale={1}
        />
        <mesh
          name="Sphere 10"
          geometry={nodes['Sphere 10'].geometry}
          material={materials.Accent}
          castShadow
          receiveShadow
          position={[186.29, -414.69, 60.76]}
          rotation={[0.45, -0.08, 0.04]}
          scale={1}
        />
        <mesh
          name="Sphere 6"
          geometry={nodes['Sphere 6'].geometry}
          material={materials.Accent}
          castShadow
          receiveShadow
          position={[75.88, -279.91, 94.07]}
          rotation={[0.03, -0.09, 0]}
          scale={1}
        />
        <mesh
          name="Sphere 8"
          geometry={nodes['Sphere 8'].geometry}
          material={materials.Accent}
          castShadow
          receiveShadow
          position={[346.97, -442.61, 29.66]}
          rotation={[0.03, -0.09, 0]}
          scale={0.8}
        />
        <mesh
          name="Sphere 4"
          geometry={nodes['Sphere 4'].geometry}
          material={materials['Shaddow base']}
          castShadow
          receiveShadow
          position={[217.17, -434.15, 91.8]}
          rotation={[0.03, -0.09, 0]}
          scale={1.32}
        />
        <mesh
          name="Sphere"
          geometry={nodes.Sphere.geometry}
          material={materials['Untitled Material']}
          castShadow
          receiveShadow
          position={[196.81, -298.02, -111.88]}
          rotation={[-3.11, 0.09, 0]}
          scale={0.79}
        />
        <directionalLight
          name="Directional Light"
          castShadow
          intensity={0.7}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-159.1655}
          shadow-camera-right={159.1655}
          shadow-camera-top={159.1655}
          shadow-camera-bottom={-159.1655}
          color="#fee5e5"
          position={[225.33, -619.08, 1723.67]}
          rotation={[0, 0, -Math.PI]}
          scale={[-1, 0.36, 1]}
        />
        <PerspectiveCamera
          name="1"
          makeDefault={true}
          zoom={1.51}
          far={100000}
          near={-100000}
          position={[371.87, -285.19, 975]}
          rotation={[-0.08, 0.15, 0.01]}
        />
        <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
      </group>
    </>
  )
}
