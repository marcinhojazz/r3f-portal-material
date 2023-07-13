import { useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function StartExperience({ onStart }) {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
    }}>
      <div className='box-start'>
        <p className='text-start'>MINDFULNESS IMMERSIVE XPERIENCE WEB</p>
        <button className='button-start' onClick={onStart}>Start Experience</button>
        <p className='text-by'>Demo By Alkimera XR</p>
      </div>
    </div>
  );
}

function App() {
  const [activeTexture, setActiveTexture] = useState(0);
  const [experienceStarted, setExperienceStarted] = useState(false);

  const handleButtonClick = (index) => {
    setActiveTexture(index);
  }

  const startExperience = () => {
    setExperienceStarted(true);
  }

  return (
    <>
      <Canvas shadows camera={{ fov: 75, position: [0, 0, 5] }} >
        <color attach="background" args={["#ececec"]} />
        <Experience activeTexture={activeTexture} />
      </Canvas>
      <div id='group-buttons'>
        <button onClick={() => handleButtonClick(0)}>Ambiente 1</button>
        <button onClick={() => handleButtonClick(1)}>Ambiente 2</button>
        <button onClick={() => handleButtonClick(2)}>Ambiente 3</button>
      </div>
      {!experienceStarted && <StartExperience onStart={startExperience} />}
    </>
  );
}

export default App;
