import { Environment, OrbitControls, useTexture } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three"

export const Experience = ({ activeTexture }) => {
  const map = useTexture([
    "textures/anime_water_world.jpg",
    "textures/anime_world_of_fire_and_lava.jpg",
    "textures/anime_magic_forest_stars.jpg"
  ]);

  const meshRef = useRef(); // Cria uma referência


  return (
    <>
      <ambientLight intensity={0.10} />
      <Environment preset="sunset" />
      <OrbitControls
        enablePan={true}
      />
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[10, 64, 64]} />
        <meshStandardMaterial map={map[activeTexture]} side={THREE.BackSide} />
      </mesh>
    </>
  );
};
