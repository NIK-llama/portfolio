'use client';

import { useGLTF, Float, Center, PresentationControls } from '@react-three/drei';

export default function HouseModel() {
  const { scene } = useGLTF('/models/forest_house.glb');

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
      <PresentationControls
        global={false}
        cursor={true}
        rotation={[0.1, 1.5, 0]}
        polar={[0, 0]} 
        azimuth={[-Math.PI / 1.5, Math.PI / 1.5]}
      >
        <group dispose={null}>
          <Center>
            <primitive object={scene} scale={35} position={[0, 0.5, 0]} />
          </Center>
        </group>
      </PresentationControls>
    </Float>
  );
}


useGLTF.preload('/models/forest_house.glb');
