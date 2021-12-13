import React from 'react'
import Asset16 from './icons/Asset16.png';
import Asset3 from './icons/Asset3.png';
import Asset2 from './icons/Asset2.png';
import Asset4 from './icons/Asset2.png';
import Asset5 from './icons/Asset5.png';
import Asset6 from './icons/Asset6.png';
import Asset7 from './icons/Asset7.png';
import Asset8 from './icons/Asset8.png';
import Asset9 from './icons/Asset9.png';
import Asset10 from './icons/Asset10.png';

const Nav = () => {
    return (
        <>

            <nav class="navbar navbar-expand-lg navbar-light bg-dark w-100 mt-5">
      
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav bg-light mx-auto">
          <li class="nav-item text-center bg-light">
              <a class="nav-link" href="#"> <img src={Asset16} alt="" style={{height:'30px',}} /> <p className="d"> My Customers </p></a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="#"> <img src={Asset3} style={{height:'30px',}} alt="" /> <p className="d" > MyUneek </p></a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="#"> <img src={Asset2} alt="" style={{height:'30px',}} /> <p className="d"> MyUneek Link </p></a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="#"> <img src={Asset4} alt="" style={{height:'30px',}} /> <p className="d"> New Company </p></a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="#"> <img src={Asset5} alt="" /> <p className="d"> New Contact </p></a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="#"> <img src={Asset6} alt="" /> <p className="d"> New Interaction </p></a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="#"> <img src={Asset7} alt="" style={{height:'30px',}} /> <p className="d"> Convert To Customer </p></a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="#"> <img src={Asset8} alt="" /> <p className="d"> Update Columns </p></a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="#"> <img src={Asset9} alt="" /> <p className="d"> View Company </p></a>
    </li>
    <li class="nav-item">
          <a class="nav-link" href="#"> <img src={Asset10} alt="" /> <p className="d"> View Contacts </p></a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="#"> <img src={Asset7} alt="" style={{height:'32px', }} /> <p className="d"> View Interactions </p></a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="#"> <img src={Asset2} alt="" style={{height:'30px',}} /> <p className="d"> View Analysis </p></a>
          </li>
  </ul>
</div>
</nav>

        </>
    )
}

export default Nav;
