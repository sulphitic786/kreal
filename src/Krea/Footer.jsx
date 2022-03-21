import React from 'react';
import { HomeWorkTwoTone } from '@mui/icons-material';
const Footer = () => {
  return (
    <>
        <div className="container-fluid footer">
         <div className="row ">
          <div className="col-md-8 mx-auto text-light">
           <div className="row">
           <div className="col-md-3 col-6 kreal">KREAL</div>
           <div className="col-md-3 col-6 John_Street"><p className=""> John Street, <br /> Doe Building 11/8 <br />  EDIRNE/TURKEY</p></div>
           <div className="col-md-3 col-6 info_envato"><p className="">info@envato.com <br />  900 800 70 60 </p></div>
            <div className="col-md-3 col-6 social"> <a href="" className="text-light"><span className="fab fa-facebook-f p-2"></span></a> <a href="" className="text-light"><span className="fab fa-twitter"></span></a> <a href="" className="text-light"><span className="fab fa-linkedin-in p-2"></span></a> <a href="" className="text-light"><span className="fab fa-google-plus-g"></span></a> 
             <p className="text-right rights">All rights reserved</p>
            </div>
           </div>
          </div>
         </div>
        </div>
    </>
  )
}

export default Footer;