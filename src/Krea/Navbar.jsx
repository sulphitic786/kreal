import React from 'react';
import {Route, Switch, Redirect, Link, NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
   <div className="container-fluid">
     <a className="navbar-brand fw-bold KREA" href="#">SulphitiCo</a>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
       <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item">
            <NavLink exact className="nav-link" aria-current="page" to="/">Home</NavLink>
            </li>
        <li className="nav-item">
           <NavLink exact className="nav-link" aria-current="page" to="/services">Services</NavLink>
         </li>
         <li className="nav-item">
           <NavLink exact className="nav-link" aria-current="page" to="/works">Works</NavLink>
         </li>
         <li className="nav-item">
           <NavLink exact className="nav-link" aria-current="page" to="/reference">Reference</NavLink>
         </li>
         <li className="nav-item">
           <NavLink exact className="nav-link" aria-current="page" to="/contact">Contact</NavLink>
         </li>
       </ul>
     </div>
   </div>
   </nav>
     
    </>
  )
}

export default Navbar;