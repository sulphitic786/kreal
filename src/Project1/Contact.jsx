import React, { useState } from 'react';


const Contact = (()=> {
   const [data, setData]=useState({
       fullName: "",
       phone: "",
       email: "",
       message: "",
    });
       const InputEvent =(event) => {
           const {name, value } =event.target;

           setData ((preVal) => {
               return{
                   ...preVal,
                   [name]:value,
               }
           });
       };


       const formSubmit =(e) =>{
           e.preventDefault();
           alert(
               `My Name: ${data.fullName} ---> My Phone No: ${data.phone} ---> My Email: ${data.email} ---> My Message: ${data.message}`
               );
       };

    return(
        <>
                <section>
            <div className="container-fluid">
            <div className="my-5">
            <h2 className="text-center"> Contact Us</h2>
            </div>
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit} action="">
                    
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                        <input type="text" class="form-control" id="" 
                        name="fullName"
                        value={data.fullName}
                        onChange={InputEvent}
                        placeholder="Enter Your Name" />
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                        <input type="text" class="form-control" id="" 
                        name="phone"
                        value={data.phone}
                        onChange={InputEvent}
                        placeholder="Enter Your Phone No" />
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="" 
                        name="email"
                        value={data.email}
                        onChange={InputEvent}
                        placeholder="Enter Your Email" />
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                        <textarea class="form-control" id="" rows="3" 
                        name="message"
                        value={data.messsage}
                        onChange={InputEvent}
                        placeholder="Write Your Message"></textarea>
                    </div>
                    <div className="col-md-12 pb-4">
                        <button className="btn btn-outline-primary px-3" type="submit">Submit</button>
                    </div>
                    </form>
                    </div>
                </div>
            </div>
        </section>


        </>
    )
});

export default Contact;