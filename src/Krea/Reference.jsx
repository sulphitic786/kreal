import React from 'react';
import Forma from './images/Forma.png';
import Forma2 from './images/Forma2.png';
import Forma3 from './images/Forma3.png';
import l1 from './images/l1.PNG'
import l3a from './images/l3a.PNG';
import l3 from './images/l3.PNG';
import l4 from './images/l4.PNG';
import l5 from './images/l5.PNG';
import l6 from './images/l6.PNG';
import g3 from './images/g3.jpg';
import g4 from './images/g4.jpg';
import g5 from './images/g5.jpg';


const Reference = () => {
  return (
    <>
    <div className="reference">
     <h3 className="text-center heading">Reference</h3>
     <div className="col-10 mx-auto">
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel"> 
        <div class="carousel-inner"> 

        <div class="carousel-item active"> <img src={g3} class="d-block rounded shadow w-25" alt="..." /> 
        <div class="carousel-caption d-block"> 
         <h5 className='caro-heading'>Jhon Doe</h5> 
         <p className='caro-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget elementum nisi. Curabitur cursus, dolor ac tempus pulvinar, risus risus elementum eros, vehicula ultricies quam arcu at augue. Donec lacinia erat nec tincidunt dignissim. Etiam egestas euismod ipsum, vitae commodo neque lacinia ac
.</p>
        </div>
        </div>

        <div class="carousel-item"> <img src={g4} class="d-block rounded shadow w-25" alt="..." /> 
        <div class="carousel-caption d-block"> 
         <h5 className='caro-heading'>3rd slide label</h5> 
         <p className='caro-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget elementum nisi. Curabitur cursus, dolor ac tempus pulvinar, risus risus elementum eros, vehicula ultricies quam arcu at augue. Donec lacinia erat nec tincidunt dignissim. Etiam egestas euismod ipsum, vitae commodo neque lacinia ac
.</p>
        </div>
        </div>

        <div class="carousel-item"><img src={g5} class="d-block rounded shadow w-25" alt="..." />
        <div class="carousel-caption d-block"> 
         <h5 className='caro-heading'>Second slide label</h5> 
         <p className='caro-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget elementum nisi. Curabitur cursus, dolor ac tempus pulvinar, risus risus elementum eros, vehicula ultricies quam arcu at augue. Donec lacinia erat nec tincidunt dignissim. Etiam egestas euismod ipsum, vitae commodo neque lacinia ac
.</p>
        </div>
        </div>

     </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev"> 
            <span class="carousel-control-prev-icon" aria-hidden="true"></span> 
            <span class="visually-hidden text-danger">Previous</span> 
            </button>
            <button class="carousel-control-next text-danger" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next"> 
            <span class="carousel-control-next-icon" aria-hidden="true"></span> 
            <span class="visually-hidden ">Next</span> </button>

     </div>
     </div>
     <div className="col-sm-12 mx-auto text-center logo">
         <a href="" className="mx-5"><img src={l1} alt="" className="img img-fluid" /></a>
         <a href="" className="mx-5"><img src={l3} alt="" className="img img-fluid" /></a>
         <a href="" className="mx-5"><img src={l3a} alt="" className="img img-fluid" /></a>
         <a href="" className="mx-5"><img src={l4} alt="" className="img img-fluid" /></a>
         <a href="" className="mx-5"><img src={l5} alt="" className="img img-fluid" /></a>
         <a href="" className="mx-5"><img src={l6} alt="" className="img img-fluid" /></a>
     </div>
     </div>
    </>
  )
}

export default Reference;