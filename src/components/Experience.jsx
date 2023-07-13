import { Environment, OrbitControls, useTexture } from "@react-three/drei";

export const Experience = () => {

  const map = useTexture(
    "textures/anime_water_world.jpg"
  );
  
  return (
    <>
      <ambientLight intensity={0.5} />
      <Environment preset="sunset" />
      <OrbitControls />
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={map} />
      </mesh>
    </>
  );
};
