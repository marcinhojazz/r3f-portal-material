import { Environment, OrbitControls, useTexture } from "@react-three/drei";

export const Experience = () => {

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
      <mesh position={[1.5, 0, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial map={map[0]} />
      </mesh>
      <mesh position={[-1.5, 0, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial map={map[1]} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial map={map[2]} />
      </mesh>
      
    </>
  );
};
