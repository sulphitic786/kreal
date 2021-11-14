import React from 'react';
import { DeleteForever } from '@material-ui/icons';


const TodoList = (props) => {
    
    return(
    <>
     <li className="list-unstyled fw-bold shadow w-75 m-1 list"><span className="btn del" onClick={() => {props.onSelect(props.id)}}><DeleteForever /> </span> {props.text} </li>
     
    </>
    )};

export default TodoList;