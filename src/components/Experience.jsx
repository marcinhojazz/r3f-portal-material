import { Environment, OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three"

export const Experience = ({ activeTexture }) => {
  const map = useTexture([
    "textures/anime_water_world.jpg",
    "textures/anime_world_of_fire_and_lava.jpg",
    "textures/anime_magic_forest_stars.jpg"
  ]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <Environment preset="sunset" />
      <OrbitControls />
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[5, 32, 32]} />
        <meshStandardMaterial map={map[activeTexture]} side={THREE.BackSide} />
      </mesh>
    </>
  );
};
