import React from 'react';
import paypal from "./img/paypal.png";
import master from "./img/master.png";
import meastro from "./img/meastro.png";
import visa from "./img/visa.png";
import leapord from "./img/leapord.png";
import RoyalMail from "./img/RoyalMail.png";
import dhl from "./img/dhl.png";
import ups from "./img/ups.jpg";
import twiter from "./img/twiter.png";
import fb from "./img/fb.png";
import linked from "./img/linked.png";
import insta from "./img/insta.jpg";



const Footer = () => {
    return (
        <>
            <footer className="row footer">
                <div className="col-md-4 offset-md-1 info">
                    <h3>Information</h3>
                        <a href="" className="text-decoration-none">About Us</a>
                        <a href="" className="text-decoration-none">Delivery Information</a>
                        <a href="" className="text-decoration-none">Terms and Condiotions</a>
                        <a href="" className="text-decoration-none">Return Policy</a>
                    <br />
                    <span className="d-flex">
                        <a href=""><img className="img-fluid" src={paypal} alt="" /></a>
                        <a href=""><img className="img-fluid" src={visa} alt="" /></a> 
                        <a href=""><img className="img-fluid" height="30px" src={master} alt="" /></a>
                        <a href=""><img className="img-fluid" src={meastro} alt="" /></a>
                    </span>
                </div>

                <div className="col-md-3 help">
                    <h3>Help</h3>
                        <a href="" className="text-decoration-none">Faq</a>
                        <a href="" className="text-decoration-none">Privacy Policy</a>
                        <a href="" className="text-decoration-none">Feedback</a>
                        <br /><br />
                    <span className="d-flex">
                        <a href=""><img className="img-fluid" src={leapord} alt="" /></a>
                        <a href=""><img className="img-fluid" src={dhl} alt="" /></a> 
                        <a href=""><img className="img-fluid" src={RoyalMail} alt="" /></a>
                        <a href=""><img className="img-fluid" src={ups} alt="" /></a>
                    </span>
                </div>

                <div className="col-md-3 account">
                    <h3>Account</h3>
                        <a href="" className="text-decoration-none">My Account</a>
                        <a href="" className="text-decoration-none">Report a Problem</a>
                        <a href="" className="text-decoration-none">Track Order</a>
                    <br /><br />
                    <span className="d-flex">
                        <a href=""><img className="img-fluid" src={twiter} alt="" /></a>
                        <a href=""><img className="img-fluid" src={fb} alt="" /></a> 
                        <a href=""><img className="img-fluid" src={linked} alt="" /></a>
                        <a href=""><img className="img-fluid" src={insta} alt="" /></a>
                    </span>
                </div>
                <div className="col-md-12 border-1 shadow-lg text-center my-4 disclaimer"><h2 className="py-2 text-uppercase fw-bold">D i s c l a i m e r</h2></div>
                <p>© 2021 FIMBAY.COM</p>
            </footer>
        </>
    )
}

export default Footer;
