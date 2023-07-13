import { useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  const [activeTexture, setActiveTexture] = useState(0);

  const handleButtonClick = (index) => {
    setActiveTexture(index);
  }

  return (
    <>
      <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <Experience activeTexture={activeTexture} />
      </Canvas>
      <div id='group-buttons'>
        <button onClick={() => handleButtonClick(0)}>Ambiente 1</button>
        <button onClick={() => handleButtonClick(1)}>Ambiente 2</button>
        <button onClick={() => handleButtonClick(2)}>Ambiente 3</button>
      </div>
    </>
  );
}

export default App;
