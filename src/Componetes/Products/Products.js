import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import {  homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../Home/data';
import Priching from '../Priching/Priching';

const Products = () => {
    return (
        <div>
          <Priching /> 
          <HeroSection{...homeObjTwo} />
          <HeroSection {...homeObjTwo} />
        </div>
    );
};

export default Products;