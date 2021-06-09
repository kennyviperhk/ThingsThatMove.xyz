import { connect, styled } from 'frontity'
import React, { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame,  render, events, useLoader  } from '@react-three/fiber'
import { ContactShadows, Environment, useFBX, useGLTF, useAnimations, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const LoadModel = ({ data }) => {
  const ref = useRef()
  console.log("loading  " +data.guid)
  const gltf = useLoader(GLTFLoader, data.guid);

  let mixer
  if (gltf.animations.length) {
      mixer = new THREE.AnimationMixer(ref.scene);
      gltf.animations.forEach(clip => {
          const action = mixer.clipAction(clip)
          action.play();
      });
  }

  useFrame((state, delta) => {
      mixer?.update(delta)
  })
  // useFrame((state) => {
  //   const t = state.clock.getElapsedTime()
  //   ref.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20
  //   ref.current.rotation.x = Math.cos(t / 4) / 8
  //   ref.current.rotation.y = Math.sin(t / 4) / 8
  //   ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
  // })
  return (
    <primitive ref={ref} object={gltf.scene} rotation={[0,-0.3,0]} scale={0.07} />
  )
}
const GLTFGrabber = ({ data }) => {
  //const { actions } = useAnimations(animations, group)
  return (
    <div>
    <ModelViewerSection>
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 30 }}>
        <ambientLight intensity={0.3} />
        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
        <Suspense fallback={null}>
          <LoadModel data={data} />
          <Environment preset="city" />
          <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={1} width={10} height={10} blur={1.5} far={0.8} />
        </Suspense>
        <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false} enablePan={false} />
      </Canvas>
      </ModelViewerSection>
    </div>
  )
}

const ModelViewerSection = styled.section`
background: white;
color: black;
position: relative;
margin: 0;
padding: 0;
overflow: hidden;
object-fit: cover;
outline: none;
width: 100vw;
height: 100vh;
display: full;
justify-content: center;
`

export default connect(GLTFGrabber)
