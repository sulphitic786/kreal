// import React from 'react';
import {Route, Switch, Link,Redirect, NavLink} from "react-router-dom";
import RestuHome1 from './RestuHome1';
import RestuCreate from './RestuCreate';
import RestuDetail from './RestuDetail';
import RestuList from './RestuList';
import RestuSearch from './RestuSearch';
import RestuUpdate from './RestuUpdate';
import Contact from '../Project1/Contact';
import RestuHome from '../Live Retaurant/RestuHome';






const Navbar = () => {
  return(
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
          <NavLink exact className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" aria-current="page" to="/list">List</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" aria-current="page" to="/create">Create</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" aria-current="page" to="/search">Search</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" to="/detail">Details</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/update/id">Update</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
        </li>
      </ul>
    </div>
  </div>
  </nav>


    <Switch>
     <Route exact path="/" component={RestuHome} />
     <Route exact path="/list" component={RestuList} />
     <Route exact path="/create" component={RestuCreate} />
     <Route exact path="/search" component={RestuSearch} />
     <Route exact path="detail" component={RestuDetail} />
     <Route exact path="/update/id" render={props=>(RestuUpdate(...props))} component={RestuUpdate} />
     <Route exact path="/contact" component={Contact} />
     {/* <Route component={RestuHome1} /> */}
    </Switch>

      </> 
  );
}; 

export default Navbar;