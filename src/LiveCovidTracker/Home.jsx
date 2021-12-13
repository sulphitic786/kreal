import React, { useEffect, useState } from 'react';

const Home = () => {
    const [data, setData] = useState([]);
    let newTime = new Date().toLocaleTimeString();

    const getCovidData = async () => {
      const res = await fetch('http://api.covid19api.com/summary');
      const actualData = await res.json();
      console.log(actualData.Countries[129])
      setData(actualData.Countries[129])
    }
    
    
    useEffect(() => {
            getCovidData();
    }, []);

// ------------By Using Then Method -----------

    // fetch('http://api.covid19api.com/summary')
    // .then((response)=>{
    //     return response.json();
    // })
    // .then((data)=>{
    //     const myData = data.Countries[129];
    //     console.log(data.Countries[129])
    //     console.log(`Country Name: ${myData.Country},
    //     Country Code: ${myData.CountryCode},
    //     Total Confirmed Cases: ${myData.TotalConfirmed},
    //     Total Confirmed Deathes: ${myData.TotalDeaths},
    //     Total Recoverd: ${myData.TotalRecovered},`)
    // })
    

    return (
        <>
            <section className="container-fluid">
                <div className="row">
                  <h2 className="text-danger text-center fw-bold pt-5">Pakistan COVID-19 Dashbord</h2>
                </div>
                <div className="row mx-auto m-5">
                    <div className="col-md-9 col-sm-8 mx-auto d-inline-flex m-3">

                        <div className="card bg-primary mx-auto p-3 text-center w-50">
                            <h4 className="text-light"> Country </h4>
                            <h3 className="text-light"> {data.Country} </h3>
                        </div>
                        <div className="card bg-success mx-3 p-3 text-center w-50">
                            <h4 className="text-light"> <sub>Total</sub> Recoverd </h4>
                            <h3 className="text-light">{data.TotalRecovered}</h3>
                        </div>
                        <div className="card bg-info mx-auto p-3 text-center w-50">
                            <h4 className="text-light"> <sub>Total</sub> Confirmed </h4>
                            <h3 className="text-light"> {data.TotalConfirmed} </h3>
                        </div>
                    </div>

                    <div className="col-md-9 mx-auto m-3 d-inline-flex">

                        <div className="card bg-danger align-items-center mx-auto p-3 w-50">
                            <h4 className="text-light"> <sub>Total</sub> Deaths </h4>
                            <h3 className="text-light">{data.TotalDeaths}</h3>
                        </div>
                        <div className="card bg-warning mx-3 p-3 text-center w-50">
                            <h4 className="text-light"> <sub>Total</sub> Active </h4>
                            <h3 className="text-light"> {data.TotalConfirmed} </h3>
                        </div>
                        <div className="card bg-secondary mx-auto text-center p-3 w-50">
                            <h4 className="text-light"> <sub>Last</sub> Updates </h4>
                            <h3 className="text-light"> {newTime} </h3>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home;
