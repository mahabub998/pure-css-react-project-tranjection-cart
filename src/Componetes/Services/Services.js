import React from 'react';
import HeroSection from '../HeroSection/HeroSection'
import Priching from '../Priching/Priching';
import { homeObjOne,homeObjThree,  } from './data';
const Services = () => {
    return (
        <>
        <Priching />
        <HeroSection {...homeObjOne} />
        <HeroSection {...homeObjThree} />
      </>
    );
  }
  
export default Services;