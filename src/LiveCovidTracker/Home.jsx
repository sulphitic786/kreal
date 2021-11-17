import React, { useEffect } from 'react';

const Home = () => {

    let newTime = new Date().toLocaleTimeString();

    // const getCovidData = async () => {
    //   const res = await fetch('https://data.covid19india.org/data.json');
    //   const actualData = await res.json();
    //   console.log(actualData.statewise[0])
    // }
    
    // useEffect(() => {
    //         getCovidData();
    // }, []);
    

    return (
        <>
            <section className="container-fluid">
                <div className="row">
                  <h2 className="text-danger text-center fw-bold pt-5">Pakistan COVID-19 Dashbord</h2>
                </div>
                <div className="row mx-auto m-5">
                    <div className="col-md-10 mx-auto d-inline-flex m-3">

                        <div className="card bg-primary mx-2 p-3 w-25">
                            <h4 className="text-light"> Country </h4>
                            <h3 className="text-light">Pakistan</h3>
                        </div>
                        <div className="card bg-success mx-2 p-3 w-25">
                            <h4 className="text-light"> <sub>Total</sub> Recoverd </h4>
                            <h3 className="text-light">205074</h3>
                        </div>
                        <div className="card bg-info mx-2 p-3 w-25">
                            <h4 className="text-light"> <sub>Total</sub> Confirmed </h4>
                            <h3 className="text-light">66501</h3>
                        </div>
                    </div>

                    <div className="col-md-10 mx-auto m-3 d-flex">

                        <div className="card bg-danger mx-2 p-3 w-25">
                            <h4 className="text-light"> <sub>Total</sub> Deaths </h4>
                            <h3 className="text-light">45431</h3>
                        </div>
                        <div className="card bg-warning mx-2 p-3 w-25">
                            <h4 className="text-light"> <sub>Total</sub> Active </h4>
                            <h3 className="text-light">75376</h3>
                        </div>
                        <div className="card bg-secondary mx-2 p-3 w-25">
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
