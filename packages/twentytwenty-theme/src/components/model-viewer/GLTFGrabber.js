const isClient = typeof window !== "undefined";

import { connect, styled } from 'frontity'
import React, { useState, useEffect, useRef, Suspense } from 'react'
import { Canvas, useFrame,  render, events, useLoader, useRender  } from '@react-three/fiber'
import { ContactShadows, Environment, useFBX, useGLTF, useAnimations, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Loading from "../loading";

let groundPosition
let model
let modelState = 0

const LoadModel = ({ data1, data2 }) => {
  const ref = useRef()
  console.log("loading Project Model " + data1.guid)
  console.log("Project Model Height" + data2)
  model = useLoader(GLTFLoader, data1.guid);

  // Here's the animation part
      // *************************
      let mixer
      if (model.animations.length) {
          mixer = new THREE.AnimationMixer(model.scene);
          model.animations.forEach(clip => {
              const action = mixer.clipAction(clip)
              action.play();
          });
      }

      useFrame((state, delta) => {
          mixer?.update(delta)
      })
      // *************************

      model.scene.traverse(child => {
          if (child.isMesh) {
              child.castShadow = true
              child.receiveShadow = true
              child.material.side = THREE.FrontSide
          }
      })


  return (
    <primitive ref={ref} object={model.scene} rotation={[0,-0.3,0]} scale={data2/30} />
  )
}

const MakeGrid = () => {
  const grid = new THREE.GridHelper( 500, 100, 0x000000, 0xffffff );
  grid.material.opacity = 0.01;
	grid.material.depthWrite = false;
	grid.material.transparent = true;
  return (
    <gridHelper args={[5, 50, 0]} position={[0, groundPosition-0.01, 0]} rotation={[0,-0.3,0]} />
  )
}

const GLTFGrabber =({ data1, data2, data3 }) => {
  groundPosition = 0 - (data3/10);
  /*TODO ADD LOADING */
  return (
    <div>
    <ModelViewerSection>
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, groundPosition/2 , data2/3], fov: 30 }}>
        <ambientLight intensity={0.3} />
        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
        {isClient ? (<Suspense fallback={null}>
          <LoadModel data1={data1} data2={data2}/>
          <Environment preset="city" />
          <ContactShadows rotation-x={Math.PI / 2} position={[0, groundPosition, 0]} opacity={1} width={10} height={10} blur={1.2} far={3} />
          <MakeGrid/>
        </Suspense>) : (<>
<LoadModel data1={data1} data2={data2}/>
          <Environment preset="city" />
          <ContactShadows rotation-x={Math.PI / 2} position={[0, groundPosition, 0]} opacity={1} width={10} height={10} blur={1.2} far={3} />
          <MakeGrid/>
        </>)}
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
