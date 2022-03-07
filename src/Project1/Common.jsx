import React from 'react';
import { NavLink } from 'react-router-dom';



const Common = ((props)=> {
    return(
        <>
        <section className="d-flux align-items-center">
            <div className="container-fluid">
                <div className="row mt-md-5 ">
                    <div className="col-10 mx-auto mt-md-5">
                      <div className="row">
                        <div className="col-md-6 mt-3 pt-3 pt-lg-0 order-2 order-lg-1 d-flux justify-content-center flex-column">
                            <h2 className="pt-lg-5">{props.name} <br /><strong className="text-sulpite">SulphiticCo</strong></h2>
                            <h4 className="my-3"> We are the team of talented developer making websites </h4>
                            <div className="mt-3">
                                <NavLink to={props.visit} className="btn btn-outline-primary get-start"> {props.btname} </NavLink>
                            </div>
                        </div>

                        <div className="col-md-6 mt-3 pt-5 pt-lg-0 order-1 order-lg-2 herder-img">
                        <img src={props.imgscr} alt="Image" className="img-fluid img-animated p-5" />
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
});

export default Common;