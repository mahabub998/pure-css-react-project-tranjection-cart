import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import { homeObjOne, homeObjThree } from '../Home/data';

const SingUp = () => {
    return (
        <>
          <HeroSection {...homeObjOne} />
          <HeroSection{...homeObjThree} /> 
        </>
    );
};

export default SingUp;