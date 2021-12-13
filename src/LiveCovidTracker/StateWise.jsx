import React, { useEffect, useState } from 'react';

const StateWise = () => {
    

    const [data, setData] = useState([]);

    const getData = async () => {
        const response = await fetch('http://localhost:3001/statewise');
        const actualData = await response.json();
        console.log(actualData);
        setData(actualData);
      }
      
      
      useEffect(() => {
              getData();
      }, []);

    return (
        <>
            <section className="container-fluid">
                <div className="row">
                  <h2 className="text-danger text-center fw-bold py-5">Indian COVID-19 State Wise Data</h2>
                  <row className="text">
                      <div className="col-md-10 mx-auto">
                          <table className="table table-striped table-hover">
                              <thead className="bg-dark text-light">
                                  <tr className="">
                                      <th>State</th>
                                      <th>Confirmed</th>
                                      <th>Recovered</th>
                                      <th>Deaths</th>
                                      <th>Active</th>
                                      <th>Updated</th>
                                  </tr>
                              </thead>
                {
                    data.map((myData) => {
                      return(
                        <tbody>
                         <tr className="text-center">
                            <td className="text-capitalize fw-bold text-start "> {myData.state} </td>
                            <td> {myData.active} </td>
                            <td> {myData.confirmed} </td>
                            <td className="death"> {myData.deaths} </td>
                            <td className=""> {myData.recovered} </td>
                            <td> {myData.lastupdatedtime.slice(0, 10)} </td>
                         </tr>
                        </tbody>
                      )
                    })
                }
                            
                          </table>
                      </div>
                  </row>
                </div>

            </section>
        </>
    );
};

export default StateWise;
