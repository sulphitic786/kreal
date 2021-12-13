import React, { useState, useEffect } from 'react';
// import { FmdGood } from '@materal-ui/icons';


const TempHome = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState('Lahore');

    useEffect(() => {
        const fetchApi = async ()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9e30dbbd3e14ed3eb489bb03b9caf99b`;
            const response = await fetch(url);
            const resJson = await response.json();
            console.log(resJson.main);
            setCity(resJson.main);
        };

        fetchApi(); 
        
    }, [search]);

    return (
        <>
            <section className="container-fluid">
              <div className="row my-5">
                  <div className="col-md-10 offset-md-1">
                       <div className="card col-md-2 pt-3 shadow-lg mx-auto card1">
                           <h2 className="text-center p-3">Live Weather Tracker</h2>
                           <input type="search" 
                        //    value="search"
                           className="form-control fw-bold text-capitalize rounded-3 w-75 mx-auto "
                           onChange={ (event) => { setSearch(event.target.value) } }
                            />
                  {
                      !city ? (
                          <p className="text-danger text-center">No Data Found!</p>
                      ) : (
                        <div className="info text-center">
                      <h2 className="font text-capitalize"> {search} </h2>
                      <h2 className="text-dark"> {city.temp} <sup>o</sup>Cel</h2>
                      <h6 className="temMax">Min : {city.temp_min}Cel | Max : {city.temp_max}Cel</h6>
                      </div>
                      )
                  }
                       </div>
                  
                  </div>
                  
              </div>
            </section>
        </>
    )
}

export default TempHome;
