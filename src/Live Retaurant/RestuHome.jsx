import React from 'react';
import AlohaBurger from "../Live Retaurant/AlohaBurger.jpg";

const RestuHome = () => {
    return (
        <>
            <section className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-6 text-center pt-5 mt-5 align-items-center">
                        <p className="text-uppercase fw-bold">it's great time for a food taste of burger</p>
                        <h1 className="fw-bold text-uppercase fw-bolder"><span className="text-danger">Burger</span> for week</h1>
                        <h6 className="text-">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
                        <button className="btn btn-danger px-4 fw-bold">Order</button>
                    </div>
                    <div className="col-md-6 p-5 text-center text-md-left">
                        <img src={AlohaBurger} alt="" className="img img-fluid rounded w-75" />
                    </div>
                </div>

                <div className="row text-center my-5">
                        <h1 className="fw-bold text-uppercase fw-bolder mt-5"> Choose & Enjoy </h1>
                        <h6 className="text-">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
                </div>
                <article className="row offset-2"> 
                    <div className="col-md-3 text-center shadow-lg border rounded-2 py-3">
                        <img src={AlohaBurger} alt="" className="img img-fluid rounded w-100" />
                        <h5 className="fw-bold my-5"> Luger Burger </h5>
                        <button className="btn btn-danger"> Order Now </button>   
                    </div>
                    <div className="col-md-3 text-center shadow-lg border rounded-2 mx-3 py-3">
                        <img src={AlohaBurger} alt="" className="img img-fluid rounded w-100" />
                        <h5 className="fw-bold my-5"> Luger Burger </h5>
                        <button className="btn btn-danger"> Order Now </button>
                    </div>
                    <div className="col-md-3 text-center shadow-lg border rounded-2 py-3">
                        <img src={AlohaBurger} alt="" className="img img-fluid rounded w-100" />
                        <h5 className="fw-bold my-5"> Luger Burger </h5>
                        <button className="btn btn-danger"> Order Now </button>
                    </div>
                </article>

                <section> 
                <div className="row m-5 p-5 mb-0">
                    <div className="col-md-6 text-center mt-5">
                        <h1 className="fw-bold text-uppercase fw-bolder"> Upcoming Event </h1>
                        <h6 className="text-left px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit ipsum dolor sit amet consectetur adipisicing elit ipsum dolor sit amet consectetur adipisicing elit ipsum dolor sit amet consectetur adipisicing elit.</h6>
                        <button className="btn btn-danger my-3 fw-bold">Read More</button>
                    </div>
                    <div className="col-md-6 text-center text-md-left">
                        <img src={AlohaBurger} alt="" className="img img-fluid rounded w-75" />
                    </div>
                </div>
                </section>
                <section>
                <section>
                    <div className="row text-center mb-5 fw-bolder font">
                    <h1 className="fw-bold text-uppercase fw-bolder fst-italic mt-5"> Book Your Table </h1>
                    <div className="row col-5 gy-2 mx-auto">
                     <form action="" className="shadow-lg py-3">
                     <input type="text" className="form-control border-danger border-0 border-bottom" placeholder="Enter Your Full Name" />
                     <input type="text" className="form-control border-danger border-0 border-bottom my-3" placeholder="Enter Your Email" />
                     <input type="text" className="form-control border-danger border-0 border-bottom" placeholder="Phone No" />
                     <textarea name="" placeholder="Right Your Message" className="form-control border-danger border-0 border-bottom my-3" id="" cols="30" rows="5"></textarea>
                     <input type="button" className="form-control btn- btn-outline-danger fw-bold" value="Place Order" placeholder="Phone No" />
                     </form>
                    </div>
                    </div>
                </section>
                </section> 
                
            </section>
        </>
    )
}

export default RestuHome;
