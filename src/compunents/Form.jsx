import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = () => {
    const [fullName, setFullName] = useState({
           fname: '',
           lname: '',
           qaul: '',
           email: '',

       });

       
     const  inputEvent =(event) => {
            const value= (event.target.value);
            const name= (event.target.name);
            
            //    const {name, value} = event.target;


            setFullName ((preValue) => {
                return {
                    ...preValue,
                    [name]:value,
                };
            });
            
       };
// https://pokeapi.co/api/v2/pokemon/1
    
      const formSubmit = (value) => {
        value.preventDefault();
        alert(`Data Submitted Successfully as Under!
    -->Name: ${fullName.fname} ${fullName.lname}
    -->Qualification: ${fullName.qaul}
    -->Email: ${fullName.email}`)
      };

    return (
        <>
           <section className="container">
               <div className="row my-5">
                   <div className="col-md-8 offset-md-2 mx-auto">
                   <h2 className="text-center fw-bold my-3">Registeration Form</h2>
                    <form onSubmit={formSubmit}>

                    <div className="form-group">
                        <label for="exampleInputEmail1">First Name</label>
                        <input type="text" required className="form-control text-capitalize" autoComplete="off" id="exampleInputEma" ariadescribedby="emailHelp1"
                         placeholder="Enter First Name"
                         name="fname"
                         onChange={inputEvent}
                         value={fullName.fname}
                         />
                        </div>
                    <div className="form-group my-3">
                        <label for="exampleInputEmail1">Last Name</label>
                        <input type="text" className="form-control" autoComplete="off" id="exampleInputEmai" ariadescribedby="emailHelp2"
                         placeholder="Enter Last Name"
                         name="lname"
                         onChange={inputEvent}
                         value={fullName.lname}
                          />
                        </div>
                    <div className="form-group my-3">
                        <label for="exampleInputPassword1">Qaulification</label>
                        <input type="text" className="form-control" autoComplete="off" id="exampleInputPassword1"
                         placeholder="Enter Your Qualification"
                         name="qaul"
                         onChange={inputEvent}
                         value={fullName.qaul}
                         />
                        </div>
                    <div className="form-group my-3">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" required className="form-control" autoComplete="off" id="exampleInputEmail" ariadescribedby="emailHelp3"
                         placeholder="Enter Your Email"
                         name="email"
                         onChange={inputEvent}
                         value={fullName.email}
                         />
                        </div>
                        <button type="submit" className="btn btn-outline-success mt-3">Submit</button>
                    </form>
                   </div>
               </div>
               <div className="row">
                   <div className="col-md-6 mx-auto text-center">
                        <h3 className="text-success text-capitalize">Full Name: {fullName.fname} {fullName.lname} </h3>
                        <h4 className="text-secondary text-capitalize">Qaulification: {fullName.qaul} </h4>
                        <h5 className="text-success">Email: {fullName.email} </h5>
                   </div>
               </div>
           </section> 
        </>
    )
}

export default Form;
