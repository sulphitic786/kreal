import React from 'react';
import Services from './Services';
import Reference from './Reference';
import Works from './Works';
import Contact from './Contact';

const Homepage = () => {
  return (
    <>
     <div className="contain">
         <h6 className="text">Digital Marketing</h6>
         <h5 className="text">Restaurants</h5>
     </div>  
    <Services />
    <Works />
    <Reference />
    <Contact />
    </>
  )
}

export default Homepage;