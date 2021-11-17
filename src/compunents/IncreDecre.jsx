import React, { useState } from 'react'

const IncreDecre = (() => {
    const [num, setNum] = useState(0);

    const Decre=(() =>{
       
        
       if(num == 0){
        alert('Number Reached to Least!')
        setNum(0)
       }else{
        setNum(num - 1)
       }
       
    })

    const Incre=(() =>{
        setNum(num + 1);
        // num ==10 ?alert('Number Reached to Least!'):
     })
    
    


    return (
        <>
            <div className="container text-center app-main">
            <div className="col-md-6 offset-md-4 offset-sm-3 text-center">
            <div className="card mt-5 shadow-lg" style={{width: '18rem'}}>
            <div className="card-body bg-dark rounded">
            <h5 className="card-title fw-bold text-light title">Increment and Decrement</h5><hr className="text-light" />
                <h1 className="card-text text-light"> {num} </h1>
                <div className="row mx-auto my-5">
                    <div className="col-5">
                        <button onClick={Decre} className="btn btn-outline-danger text-bg-danger">Decrease</button>
                    </div>
                    <div className="col-5 mx-auto">
                        <button onClick={Incre} className="btn btn-outline-success text-bg-danger">Increase</button>
                    </div>
                </div>
            </div>
            </div>
                </div>
                </div>
        </>
    )
});

export default IncreDecre;
