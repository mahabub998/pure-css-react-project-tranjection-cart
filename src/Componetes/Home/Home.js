import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import Priching from '../Priching/Priching';
import {homeObjOne,homeObjTwo,homeObjThree,homeObjFour} from './data';

const Home = () => {
    return (
        <>
          <HeroSection {...homeObjOne} />  
          <HeroSection {...homeObjThree} /> 
          <HeroSection {...homeObjTwo} /> 
          <Priching></Priching>
          <HeroSection {...homeObjFour} /> 
        </>
    );
};

export default Home;