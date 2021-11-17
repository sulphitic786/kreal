import React, { useState, useEffect } from 'react';
import { FmdGood } from '@material-ui/icons';


const TempHome = () => {

    const [city, setcity] = useState('Sialkot');
    const [search, setSearch] = useState('Lahore');

    // useEffect(() => {
    //     const fetchApi = async ()=>{
    //         const url=`http://openweathermap.org/data/2.5/weather?g=${search}&appid=b14425a6554d189a2d7dc18a8e7d7263`
    //         const response = await fetch(url);
    //         const resJson = await response.json();
    //         setcity(resJson);
    //     };

    //     fetchApi(); 
        
    // }, [search]);

    return (
        <>
            <section className="container-fluid">
              <div className="row my-5">
                  <div className="col-md-10 offset-1">
                       <div className="card col-md-2 pt-3 shadow-lg mx-auto card1">
                           <h2 className="text-center p-3">Live Weather Tracker</h2>
                           <input type="search" 
                           className="form-control fw-bold text-capitalize rounded-3 w-75 mx-auto "
                           onChange={(event)=>{ setSearch(event.target.value) }}
                            />
                  <div className="info text-center">
                      <h2 className="font text-capitalize"> {search} </h2>
                      <h2 className="text-dark">25<sup>o</sup>Cel</h2>
                      <h6 className="temMax">Min : 15.25Cel | Max : 35.35Cel</h6>
                  </div>
                       </div>
                  
                  </div>
                  
              </div>
            </section>
        </>
    )
}

export default TempHome;
