import react from 'react';
import reactDom from 'react-dom';

function Card(props){
    return(
    <>
        <div className="cards">
        <div className="card">
        <img src={props.imgsrc} alt="Image" className="Card Image" />
        <div>
            <span className="Card Category"> {props.sName} </span>
            <h3 Card Title> {props.title} </h3>
            <a href={props.link} target="blank" ></a>
            <button> Watch Now </button>
        </div>
    </div>
  </div>
    </>
    );
  }

//   export default Card;


function Props1(props){
    return(
        <>
        <h2> Name: {props.name} </h2>
        <h3>Class: {props.class}</h3>
        <h3>University: {props.university}</h3>
        <h3>City: {props.city}</h3>
        <h3>Contact No: {props.contact}</h3>
        <hr />

        </>
    );
}


export default Props1;
