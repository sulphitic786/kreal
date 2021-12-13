import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';


const RestuList = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        const Response = await fetch('http://localhost:3001/restaurant');
        const result = await Response.json();
        console.log(result);
        setData(result);
    };


    useEffect(() => {
        getData();
    }, []);





    return (
        <>
            <section className="container vh-100">
                <div className="row row-cols-8 mx-auto my-5">
                  <h2 cl assName="text-center">Restaurant List</h2>
                </div>
                <div className="row">
                    <div className="col-md-10 mx-auto">
                    <table className="table table-striped table-hover overflow-scroll">
                              <thead className="bg-dark text-light">
                                <tr>
                                  <th className="text-bold">Restu Id</th>
                                  <th className="text-bold">Name</th>
                                  <th className="text-bold">Location</th>
                                  <th className="text-bold">Rating</th>
                                  <th className="text-bold">Email</th>
                                  <th className="text-bold">Operation</th>
                                </tr>
                              </thead>
                            {
                            data.map((myData, key) => {
                                key += 1;
                                return(
                                <tbody className="text-start text-capitalize">
                                 <tr>
                                    <td className="ml-3 fw-bold"> {key} </td>
                                    <td> {myData.name} </td>
                                    <td> {myData.address} </td>
                                    <td> {myData.rating} </td>
                                    <td className="text-lowercase"> {myData.email} </td>
                                    <td className=""  style={{"textDecorationStyle":"none", "fontWeight":"bold"}}> <NavLink to={"update/"+myData.id} > Update </NavLink> </td> 
                                
                                </tr>  
                                </tbody>
                                        )
                                })
                            }
                      </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RestuList;
