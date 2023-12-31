import React from 'react';
import Typewriter from 'typewriter-effect';
import './Home.css'
import Social from './Social/Social';
import transition from "../../transition"

const Home = () => {

  return (
    
    <>

    <div className='mainContainer title' >
        <h1 className='nameStyle'> Maxime Guillemin </h1>
      <div  style={{ flexDirection: 'row' }}>
        <Typewriter
          options={{
            loop: true,
            autoStart: true,
            strings:"Développeur web",
          }}
        />
      </div>
      <Social />
    </div>
    </>
  );
};

export default transition(Home);
