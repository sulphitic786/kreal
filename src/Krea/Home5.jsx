import React from 'react';
import {Route, Switch, Redirect, Link, NavLink} from "react-router-dom";
import Homepage from './Homepage';
import Navbar from '../Krea/Navbar';
import Services from './Services';
import Reference from './Reference';
import Works from './Works';
import Contact from './Contact';
import Style from './Style.css';
import Footer from './Footer';

const Home5 = () => {
  document.title=("KReal");
  return (
    <>
    <div className="container-fluid main-container">
    <Navbar />
    <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/works" component={Works} />
        <Route exact path="/reference" component={Reference} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
    </Switch>
    <Footer />
    </div>
    </>
  )
}

export default Home5;