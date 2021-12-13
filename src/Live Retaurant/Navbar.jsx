import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import Clock from 'react-digital-clock';

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const changeBackground =() =>{
        if(window.scrollY >= 50)
        {
            setNav(true);
        }
        else
        {
            setNav(false);
        }
    }
        window.addEventListener('scroll',changeBackground);

 
    return (
        <>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand fw-bold shadow" href="#">SulphitiCo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <NavLink exact className="nav-link" aria-current="page" to="/">Header</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" aria-current="page" to="/state wise">Product</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" aria-current="page" to="/Calculator">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" aria-current="page" to="/Todo">Contact</NavLink>
        </li>
      </ul>

      <span className=""><Clock /></span>
    </div>
  </div>
  </nav>
        </>
    )
}

export default Navbar;
