import React, { useState } from 'react';
import GoogleKeep from './GoogleKeep';
import Note from './Note';

const AppNote = () =>{
    const [addItem, setAddItem] = useState([]);

    const addNote= (note) =>{
        // alert ("I am Clicked!");
        setAddItem((preData) =>{
            return[...preData, note]
        });
    };

    const onDelete=(id) =>{
        setAddItem((oldData) => 
            oldData.filter((currData, index) => {
                return index !==id;
            })
    )
    };

    return(
        <>
        <GoogleKeep passNote={addNote} />
        {addItem.map((val, index) =>{
            return(
                <Note 
                    key={index}
                    id={index}
                    title={val.title}
                    content={val.content}
                    deleteItem={onDelete}
                />
            );
        })};
        
        </>
    )
};

export default AppNote;
