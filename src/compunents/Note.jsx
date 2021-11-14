import React from 'react';

const Note = (props) =>{
    const deleteNote =() =>{
        props.deleteItem(props.id);
    };
    return <>
           <div className="container">            
           <div className="row mt-5">
             <div className="col-md-3 col-sm-6 shadow-lg rounded py-3 ">
                     <h3 className="text-danger text-center fw-bold text-capitalize">{props.title}</h3>
                     <p className="text fst-italic"> {props.content} </p>
                     <div className="text-center pt-2">
                     <button className="btn btn-outline-danger shadow" onClick={deleteNote} >Delete Note</button>
                     </div>
             </div>
            </div>
          </div>

         
    </>
};

export default Note; 