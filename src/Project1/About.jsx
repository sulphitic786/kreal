import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../img/web.png";
import Common from './Common';



const About = (()=> {
    return(
        <>
       <Common 
           name="Welcome to About page "
           imgscr={web}
           visit="/contact"
           btname="Contact Us"
       />
        </>
    )
});

export default About; 