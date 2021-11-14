import React from 'react';
import logo from "./img/logo.jpg";

const Navbar = () => {
    return (
        <>
        <div className="container-lg">
         <div className="row">
         <nav className="navbar navbar-expand-lg navbar-light bg-white">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse fw-bold" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link active text-uppercase" href="#"> Account <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active text-uppercase" href="#">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active text-uppercase" href="#">Seller</a>
                    </li>
                    </ul>

                    <ul className="navbar-nav ml-auto curruncy">
                    <li className="nav-item active text-uppercase"> Currency:
                    <select class="custom-select border-0" id="inputGroup"> 
                        <option selected>USA</option>
                        <option value="1">PK</option>
                        <option value="2">UK</option>
                        <option value="3">IN</option>
                    </select> </li>
                    <li className="nav-item active text-uppercase"> Country:
                    <select class="custom-select border-0" id="inputGroup"> 
                        <option selected>Pakistan</option>
                        <option value="1">USA</option>
                        <option value="2">England</option>
                        <option value="3">India</option>
                    </select> </li>
                    <li className="nav-item active text-uppercase"> Language:
                    <select class="custom-select border-0" id="inputGroup"> 
                        <option selected>English</option>
                        <option value="1">Urdu</option>
                        <option value="2">Spanish</option>
                        <option value="3">Chineis</option>
                    </select> </li>
                    </ul>
                 <br />
                    
                </div>
                </nav>
         </div>
           <div className="row">
               <div className="col-md-7 d-flex inp-u">
               <div className="">
                    <form className="my-4">
                    <input className="form-control d-md-none d-lg-block inp" type="search" placeholder="Type Your Search Here" aria-label="Search" />
                    </form>
                    </div>

                    <div className="img">
                        <img src={logo} className="img-fluid ig" width="200px" height="70px" alt="Logo Image" />
                    </div>
                    <nav class="navbar navbar-expand-lg navbar-light text-black fw-bold nav2">
                            <ul class="navbar-nav navbar2">
                            <li class="nav-item  ">
                                <a class="nav-link text-uppercase" href="#"> Wholesale <span class="sr-only"></span></a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link text-uppercase" href="#">Retail</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link text-uppercase" href="#">Culture</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link text-uppercase" href="#">Brands</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link text-uppercase" href="#">Autos</a>
                            </li>
                            </ul>
                    </nav>
                    
               </div>
           </div>
        </div>
        </>
    )
}

export default Navbar;
