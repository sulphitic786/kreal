import React from 'react';
import {add, sub, mul, div} from './Challange 5';

// function add(a, b){
//     let add = a+b;
//     return add;
// }

// function sub(a, b){
//     let sub = a-b;
//     return sub;
// }

// function mul(a, b){
//     let mul = a*b;
//     return mul;
// }

// function div(a, b){
//     let div = a/b;
//     div = div.toFixed(2);
//     return div;
// }

function Calc(){
    return(
        <ol>
        <li>Sum of the two num is: <b style={{color:'green'}}>{add(34, 7)} </b></li>
        <li>Subtraction of the two num is: <b style={{color:'red'}}>{sub(34, 8)} </b></li>
        <li>Multiplication of the two num is: <b style={{color:'puple'}}>{mul(3, 7)} </b></li>
        <li>Devision of the two num is: <b style={{color:'blue'}}>{div(34, 7)} </b></li>
    </ol>
    
    );
};

export default Calc;