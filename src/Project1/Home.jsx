import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../img/web2.jpg";
import Common from './Common';



const Home = (()=> {
    return(
        <>
       <Common 
           name="Grow your businuss with "
           imgscr={web}
           visit="/services"
           btname="Get Started"
       />
        </>
    )
});

export default Home; 