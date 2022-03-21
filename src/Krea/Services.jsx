import React from 'react';
import g3 from './images/g3.jpg';
import g4 from './images/g4.jpg';
import g5 from './images/g5.jpg';

const Services = () => {
  return (
    <>
    <div className="service">
     <h2 className="text-center heading">Services</h2>
     <div className="row">

      <div className="col-md-4">
      <div class="card">
        <img src={g3} class="card-img-top img img-fluid rounded w-75" alt="..." />
        <div class="card-body">
        <h5 class="card-title">Consultancy</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget elementum nisi. Curabitur cursus, dolor ac tempus pulvinar, risus risus elementum eros, vehicula ultricies quam arcu at augue. Donec lacinia erat nec tincidunt dignissim. Etiam egestas euismod ipsum, vitae commodo neque lacinia ac</p>
        </div>
      </div>
      </div>

      <div className="col-md-4">
      <div class="card">
        <img src={g4} class="card-img-top img img-fluid rounded w-75" alt="..." />
        <div class="card-body">
        <h5 class="card-title">Mentorshi</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget elementum nisi. Curabitur cursus, dolor ac tempus pulvinar, risus risus elementum eros, vehicula ultricies quam arcu at augue. Donec lacinia erat nec tincidunt dignissim. Etiam egestas euismod ipsum, vitae commodo neque lacinia ac</p>
        </div>
      </div>
      </div>

      <div className="col-md-4">
      <div class="card me-lg-3">
        <img src={g5} class="card-img-top img img-fluid rounded w-75" alt="..." />
        <div class="card-body">
        <h5 class="card-title">Incubator</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget elementum nisi. Curabitur cursus, dolor ac tempus pulvinar, risus risus elementum eros, vehicula ultricies quam arcu at augue. Donec lacinia erat nec tincidunt dignissim. Etiam egestas euismod ipsum, vitae commodo neque lacinia ac</p>
        </div>
      </div>
      </div>

     </div>
     <button className='btn btn-primary'>Get in Touch</button>
     </div>
    </>
  )
}

export default Services;