import React from 'react';
import { NavLink } from 'react-router-dom';
import CardData from './CardData';



const Card = ((props)=> {
    return(
        <>

            <div className="col-md-4 col-10 mx-auto gy-4">
                <div className="card">
                    <img src={props.imgscr} className="card-img-top" alt={props.imgscr} />
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text"> {props.pera} </p>
                            <NavLink to={props.link} className="btn btn-primary">Go somewhere</NavLink>
                        </div>
                </div>
            </div>

        </>
    )
});

export default Card;