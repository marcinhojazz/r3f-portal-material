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
        <button onClick={() => handleButtonClick(0)}>ambient 1</button>
        <button onClick={() => handleButtonClick(1)}>ambient 2</button>
        <button onClick={() => handleButtonClick(2)}>ambient 3</button>
        <a className='link-wpp' href="https://api.whatsapp.com/send/?phone=5521993233208&text&type=phone_number&app_absent=0">
          <span>
            Chat Now!
          </span>
          <svg fill="#ffffff" height="32px" width="32px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60 60" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M30,1.5c-16.542,0-30,12.112-30,27c0,5.205,1.647,10.246,4.768,14.604c-0.591,6.537-2.175,11.39-4.475,13.689 c-0.304,0.304-0.38,0.769-0.188,1.153C0.276,58.289,0.625,58.5,1,58.5c0.046,0,0.093-0.003,0.14-0.01 c0.405-0.057,9.813-1.412,16.617-5.338C21.622,54.711,25.738,55.5,30,55.5c16.542,0,30-12.112,30-27S46.542,1.5,30,1.5z"></path> </g></svg>
        </a>
      </div>
      {!experienceStarted && <StartExperience onStart={startExperience} />}
    </>
  );
}

export default App;
