import React, { useState } from 'react';
import Note from './Note';


const GoogleKeep = (props) =>{
    const [expand, setExpand]= useState(false);

    const [note, setNote] = useState({title: '', content: '',});
    
    const InputEvent = (event) =>{
        
        // const value = event.target.value;
        // const value = event.target.name;

        const {name, value} = event.target;

        setNote((preData) => {
            return{
                ...preData,
                [name]: value,
            }
        });
    };

    const eddEvent = () => {
        props.passNote(note);
        setNote({title: '', content: '',});

    };
 
    const expandIt = () =>{
        setExpand(true);
    };
    const normal = () =>{
        setExpand(false);
    };

    return(
     <>
        <div className="container">
        <h2 className="text-center text-success pt-5">Sulphitic Notes Keeper</h2>
         <div className="row mt-4">
             <div className="col-md-4 offset-md-4 shadow-lg py-3" onClick={expandIt} onDoubleClick={normal}>
                 {/* {expand? null:<h5 className="text-success text-center">📑 Click to write the new note 📑</h5>} */}
                  { expand?  <input type="text" autoComplete="off" name="title" onChange={InputEvent} value={note.title} className="form-control" placeholder="Title" /> :null}
                  <textarea name="content" onChange={InputEvent} value={note.content} className="form-control mt-2" id="" cols="10" rows="4" placeholder="Write a note here..."></textarea>
                     <div className="text-center pt-2">
                     { expand?  <button onClick={eddEvent} className="btn btn-outline-success shadow">Add Note</button> :null}
                     </div>
                 
             </div>
         </div>
        </div>
     </>
    )};

export default GoogleKeep;
