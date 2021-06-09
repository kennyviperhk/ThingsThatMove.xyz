import { connect, styled } from 'frontity'
import React, { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame,  render, events  } from '@react-three/fiber'
import { ContactShadows, Environment, useFBX, useGLTF, useAnimations, OrbitControls } from '@react-three/drei'

const LoadModel = ({ data }) => {
  let props
  const group = useRef()
  console.log("loading  " +data.guid)
  const { nodes, materials, animations } = useGLTF(data.guid)

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01} position={[0, 0, 0]}>
        <primitive object={nodes.mixamorigHips} />
        <skinnedMesh geometry={nodes.Alpha_Joints.geometry} material={materials.Alpha_Joints_MAT} skeleton={nodes.Alpha_Joints.skeleton} />
        <skinnedMesh geometry={nodes.Alpha_Surface.geometry} material={materials.Alpha_Body_MAT} skeleton={nodes.Alpha_Surface.skeleton} />
      </group>
    </group>
  )
}
const GLTFGrabber = ({ data }) => {
  //const { actions } = useAnimations(animations, group)
  return (
    <div>
    <ModelViewerSection>
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.1} />
        <spotLight intensity={0.1} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
        <Suspense fallback={null}>
          <LoadModel data={data} />
          <Environment preset="city" />
          <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={1.5} far={0.8} />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} />
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
