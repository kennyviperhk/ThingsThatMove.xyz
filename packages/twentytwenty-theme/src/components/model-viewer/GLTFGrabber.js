import { connect, styled } from "frontity";
import React, { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, useAnimations, OrbitControls } from '@react-three/drei'
//import { ReactComponent as Logo } from './model.glb';
/*
let props
const group = useRef()
console.log(data.guid)
//const { nodes, materials, animations } = useGLTF(data.guid)
//const { actions } = useAnimations(animations, group)
return (
  <Canvas>

    <ambientLight intensity={0.5} />
    <Suspense fallback={null}>
  <group ref={group} {...props} dispose={null}>
    <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={[0.025, 0.025, 0.025]} position={[0, -2, 0]}>
      <primitive object={nodes.mixamorigHips} />
      <skinnedMesh geometry={nodes.Alpha_Joints.geometry} material={materials.Alpha_Joints_MAT} skeleton={nodes.Alpha_Joints.skeleton} />
      <skinnedMesh geometry={nodes.Alpha_Surface.geometry} material={materials.Alpha_Body_MAT} skeleton={nodes.Alpha_Surface.skeleton} />
    </group>
  </group>
  </Suspense>
  <OrbitControls enablePan={false} enableZoom={false} />

</Canvas>
);

*/

const LoadModel = ({ data }) => {
  let props
  // const group = useRef()
  // console.log(data.guid)
  // const { nodes, materials, animations } = useGLTF();
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })
      return (
  // <group ref={group} {...props} dispose={null}>
  //   <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={[0.025, 0.025, 0.025]} position={[0, -2, 0]}>
  //     <primitive object={nodes.mixamorigHips} />
  //     <skinnedMesh geometry={nodes.Alpha_Joints.geometry} material={materials.Alpha_Joints_MAT} skeleton={nodes.Alpha_Joints.skeleton} />
  //     <skinnedMesh geometry={nodes.Alpha_Surface.geometry} material={materials.Alpha_Body_MAT} skeleton={nodes.Alpha_Surface.skeleton} />
  //   </group>
  // </group>
  <mesh
    {...props}
    ref={mesh}
    scale={active ? 1.5 : 1}
    onClick={(e) => setActive(!active)}
    onPointerOver={(e) => setHover(true)}
    onPointerOut={(e) => setHover(false)}>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
  </mesh>
)
};
const GLTFGrabber = ({ data }) => {


  //const { actions } = useAnimations(animations, group)
  return (
    <div>
    <Canvas>
    <ambientLight intensity={0.5} />
    <Suspense fallback={null}>
      <LoadModel data={data} />
      </Suspense>
      <OrbitControls enablePan={false} enableZoom={true} />
    </Canvas>
  </div>
  );
};

export default connect(GLTFGrabber);
