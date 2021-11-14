import React from 'react';
import Footer from './Footer';
import home from "./img/home.jpg";
import sofa from "./img/sofa.jpg";
import chair from "./img/chair.jpg";
import beauty from "./img/beauty.png";
import sunglasses from "./img/sunglasses.png";
import jackets from "./img/jackets.png";
import shoe from "./img/shoe.png";
import other from "./img/other.jpg";
import wave from "./img/wave.jpg";
import light from "./img/light.png";
import kitchen from "./img/kitchen.png";
import headphones from "./img/headphones.png";

const Main = () => {
    return (
        <>
            <div className="container">
               <div className="row col-md-12 px-2">
                   <img src={home} alt="" />
               </div>

               <div className="row my-5">
                   <div className="col-md-6 left-item">
                        <img src={sofa} alt="" width="300px" />
                        <div className="text">
                        <h3 className="pt-5 text-center">New collection <br /> available now</h3>
                        <button className="btn btn-outline-primary">View All</button>
                        </div>
                   </div>
                   <div className="col-md-6 d-flux right-item">
                        <img src={chair} alt="" width="300px" />
                        <div className="text2">
                        <h3>Redifining the <br /> modern desigh</h3>
                        <button className="btn btn-outline-primary">Check All</button>
                        </div>
                   </div>
               </div>

               {/* ---------Main Category ---------- */}

               <section className="row text-center main-cat">
                   <div className="col-md-2 offset-md-1 mx-3">
                     <img src={beauty} alt="" width="250px" height="300px" />
                     <h3>Beauty</h3>
                   </div>
                   <div className="col-md-2 mx-4">
                     <img src={sunglasses} alt="" width="250px" height="300px" />
                     <h3> Sunglasses </h3>
                   </div>
                   <div className="col-md-2 mx-3">
                     <img src={jackets} alt="" width="250px" height="300px" />
                     <h3>Jackets</h3>
                   </div>
                   <div className="col-md-2 mx-4">
                     <img src={shoe} alt="" width="250px" height="300px" />
                     <h3>Shoe</h3>
                   </div>
               </section>
{/* ------------ Carousel Section ----------- */}
               <section className="row">
                   <div className="col-md text-center mt-3 d-flux sub-cat">
                       <img src={other} alt="" width="300px" height="400px" className="img-fluid" />
                       <img className="img2 img-fluid" src={light} alt="First slide" />
                       <img className="img2 img-fluid mx-2" src={kitchen} alt="Second slide" />
                       <img className="img2 img-fluid" src={headphones} alt="Third slide" />
                   </div>
               </section>
{/* ------------ Vedio Section ------------- */}
               <section className="row text-center mt-4 vedio-sec">
                <div className="embed-responsive embed-responsive-21by9 " height="400px">
                <iframe className="embed-responsive-item w-75 h-100" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                </div>
               </section>

{/* ---------- Footer ---------- */}
               <section className="row wave">
                   <img src={wave} alt="" width="90%" className="img-fluid" />
                   <Footer />
               </section>
               </div>

        </>
    )
}

export default Main;
