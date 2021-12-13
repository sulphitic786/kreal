import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiPokemon = () => {

        const [num, setNum] = useState();
        const [name, setName] = useState();
        const [moves, setMoves] = useState();
          
          
          useEffect(() => {
                async function  getData() {
                    const res = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
                    console.log(res);
                    setName(res.data.name);
                    setMoves(res.data.moves.length);
                };
                    getData();
          });
 
    return (
        <div>
            <section className="container-fluid vh-100">
                <div className="row">
                  <h2 className="text-danger text-center fw-bold pt-5"> API Pokemon Dashbord</h2>
                </div>

                <div className="row col-md-8 mx-auto">
                 <div className="input-group mb-3">
                  <input type="text" className="form-control text-light fw-bold bg-dark Readonly" value="Select the Favroite Pokemon Chracter" aria-label="Recipient's username" />
                  <select className="btn-outline-success text-center" name="" id="" value={num} onChange={ (event) => { setNum(event.target.value) }} >
                      <option value="1">1st Chracter</option>
                      <option value="2">2nd Chracter</option>
                      <option value="3">3rd Chracter</option>
                      <option value="4">4th Chracter</option>
                      <option value="5">5th Chracter</option>
                      <option value="6">6th Chracter</option>
                      <option value="7">7th Chracter</option>
                      <option value="8">8th Chracter</option>
                  </select>
                </div>
                </div>

                <div className="row mx-auto m-5">
                    <div className="col-md-9 col-sm-8 mx-auto d-inline-flex m-3">

                        <div className="card bg-primary mx-auto p-3 text-center w-50">
                         <h4 className="text-light"> <sub>i am</sub> {name} </h4>
                        </div>
                        <div className="card bg-success mx-3 p-3 text-center w-50">
                            <h4 className="text-light"> <sub>Total Moves</sub> {moves} </h4>
                        </div>
                        <div className="card bg-secondary mx-auto p-3 text-center w-50">
                            <h4 className="text-light"> <sub>Id No</sub> {num} </h4>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ApiPokemon;
