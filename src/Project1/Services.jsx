import React from 'react';
import Card from './Card';
import CardData from './CardData';
import img1 from '../img/CHICKEN PAKORA.jpg';



const Services = (()=> {
    return(
        <>
        <div className="my-5">
        <h2 className="text-center">Our Services</h2>
        </div>
        <section>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                     <div className="row">
                         {
                             CardData.map((val, ind) => {
                                 return <Card key={ind}
                                        imgscr={val.imgscr}
                                        title={val.title}
                                        pera={val.pera}
                                        link={val.link}
                                    />
                             })
                         }

                     </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
});

export default Services;