import React from 'react';
import g1 from './images/g1.jpg';
import g2 from './images/g2.jpg';
import g3 from './images/g3.jpg';
import g4 from './images/g4.jpg';
import g22 from './images/g22.jpg';

const Works = () => {
  return (
    <>
    <div className="works">
    <h3 className="text-center heading">Works</h3>
    {/* <!-- Gallery --> */}
<div class="row">
  <div class="col-lg-4 col-md-12 mb-4 ps-md-4 mb-lg-0">
    <img
      src={g1}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />

    <img
      src={g2}
      class="w-100 shadow-1-strong rounded mb-md-4 img img-fluid"
      alt="Wintry Mountain Landscape"
    />
    
  </div>

  <div class="col-lg-4 mb-md-4 mb-lg-0">
    <img
      src={g22}
      class="w-100 shadow-1-strong rounded mb-md-4"
      alt="Mountains in the Clouds"
    />

    <img
      src={g4}
      class="w-100 shadow-1-strong rounded mb-md-4"
      alt="Boat on Calm Water"
    />
    
    
  </div>

  <div class="col-lg-4 mb-4 pe-md-4 mb-lg-0">
    <img
      src={g2}
      class="w-100 shadow-1-strong rounded mb-md-4"
      alt="Waves at Sea"
    />

    <img
      src={g3}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"
    />
  </div>
</div>
     </div>
    </>
  )
}

export default Works;