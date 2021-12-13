import React, { useState, useEffect} from 'react';



const RestuCreate = () => {

        const [user, setUser] = useState({
               name: '',
               address: '',
               rating: '',
               email: '',
    
           });
        

        //  const  create = (() => {
        //        fetch('http://localhost:3000/restaurant', {
        //            method:"post",
        //            headers:{
        //                 'Content-Type':'application.json'
        //            }, 
        //            body: JSON.stringify(this.state)
        //         }).then((result) => {
        //             result.json().then((resp) =>{
        //                 console.log(resp)
        //             })
        //         })
        //        });
           



       const  inputEvent =(event) => {
            const value= (event.target.value);
            const name= (event.target.name);

            setUser({...user, [name]: value});
            console.log(user);
       }


    const formSubmit = async (value) => {
        value.preventDefault();

        const {name, address, rating, email} = user;

        const resp = await fetch("http://localhost:3001/restaurant", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
               name,
               address,
               rating,
               email,
        }),

    }
        );
        if(resp){
            setUser({
                name: '',
               address: '',
               rating: '',
               email: '',
            })
            alert(`Data Submitted Successfully as Under!
    -->Name: ${user.name}
    -->Address: ${user.address}
    -->Rating: ${user.rating}
    -->Email: ${user.email}`)
        }
    
      };




    return (
        <>
        <section className="container">
            <div className="row">
              <div>
                <h3 className="text-center text-success pt-5">Add New Restaurant</h3>
              </div>
            </div>
        <form className="m-4 py-5 border mx-auto shadow-lg col-9">
          <div class="row g-4 ">
            <div class="col-5 offset-1">
              <label for="inputEmail4" className="py-2" >Restaurant Name</label>
              <input type="text" name="name" value={user.name} onChange={inputEvent} class="form-control" placeholder="Enter Restaurant Name" />
            </div>
            <div class="col-5">
            <label for="inputEmail4" className="py-2" >Restaurant Address</label>
              <input type="text" name="address" value={user.address} onChange={inputEvent} class="form-control" placeholder="Enter Address" />
            </div>
            <div class="col-5 offset-1">
            <label for="inputEmail4" className="py-2" >Restaurant Rating</label>
              <input type="number" name="rating" value={user.rating} onChange={inputEvent} min="0" max="5" step="0.1" class="form-control" placeholder="Enter Rating from (0-5)" />
            </div>
            <div class="col-5">
            <label for="inputEmail4" className="py-2" >Official Email</label>
              <input type="text" name="email" value={user.email} onChange={inputEvent} class="form-control" placeholder="Enter Email" />
            </div>
            <div class="col-5 mx-auto mt-5">
              <input type="submit" onChange={inputEvent} onClick={formSubmit} class="form-control btn btn-outline-success shadow fw-bold" value="Add Restaurant"  />
            </div>
          </div>
        </form>
        </section>
        </>
    )
};

export default RestuCreate;



