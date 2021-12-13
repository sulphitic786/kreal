import React, { useState } from 'react';
import '../Calculator/CalcuStyle.css';
import { Home } from '@material-ui/icons';


const CalcuHome = () => {

       const [result, setResult] = useState("");
       const [resultNow, setResultNow] = useState("");
       

       const getValue = (e) =>{
           
        setResult(result.concat(e.target.value));
       }

       const clearValue = ()=> {
        setResult("");
       }

       const delValue = () =>{
           setResult(result.slice(0,-1));
       }

       const getResult = () =>{
           try{
            setResultNow(eval(result).toString());
            setResult("");
              }
           catch(error)
             {
               setResult("Error");
               
             }
       }

    return (
        <>
    <div className="main">
     <div className="display"><input type="text" className="shadow form-control shadow-lg text-end" placeholder="0" value={result} /> {/*<h3 className="text-right shadow shadow-lg" placeholder="0" onClick="getValue"> {result} </h3> */}
        <p id="history"><i className="fa fa-history" aria-hidden="true"></i>Result</p>
        <h2 id="result">{ resultNow }</h2>
    </div>
    <div className="buttons"> <button onClick={clearValue} id="clear">C</button> <button onClick={delValue} id="delete_single_num"><i className="text-danger" aria-hidden="true">Del</i></button> <button onClick={getValue} value="/" id="Normal_btn">/</button> <button onClick={getValue} value="*" id="Normal_btn">*</button> </div>
    <div className="buttons"> <button onClick={getValue} value="7" id="Normal_btn">7</button> <button onClick={getValue} value="8" id="Normal_btn">8</button> <button onClick={getValue} value="9" id="Normal_btn">9</button> <button onClick={getValue} value="-" id="Normal_btn">-</button> </div>
    <div className="buttons"> <button onClick={getValue} value="4" id="Normal_btn">4</button> <button onClick={getValue} value="5" id="Normal_btn">5</button> <button onClick={getValue} value="6" id="Normal_btn">6</button> <button onClick={getValue} value="+" id="Normal_btn">+</button> </div>
    <div className="buttons"> <button onClick={getValue} value="1" id="Normal_btn">1</button> <button onClick={getValue} value="5" id="Normal_btn">2</button> <button onClick={getValue} value="3" id="Normal_btn">3</button> <button onClick={getValue} value="." id="Normal_btn">.</button> </div>
    <div className="buttons"> <button onClick={getValue} value="0" id="Normal_btn">0</button> <button onClick={getValue} value="00" id="Normal_btn">00</button> <button onClick={getResult} value="=" id="equalTo">=</button> </div>
</div>
        </>
    )
}

export default CalcuHome
