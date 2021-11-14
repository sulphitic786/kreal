 import React from 'react';
 
 
 
 //---------------- Slot Machine Lec No 28 --------------

  const SlotM = (props) => {
    // let x = '😄';
    // let y = '😄' ;
    // let z = '😄';

    // let x = props.x;
    // let y = props.y;
    // let z = props.z;

    let {x, y, z} = props;
    if(x===y && y===z)
    {
      return(
        <>
        <div className="slot">
        <h1> {x} {y} {z} </h1>
        <h3>This is Matching</h3>
        <hr />
        </div>
        </>
      );
    }
    else{
      return(
        <>
        <div className="slot">
        <h1> {x} {y} {z} </h1>
        <h3>This is Not Matching</h3>
        <hr />
        </div>
        </>
      );
    }
  }


  const SlotMachine = () => {
    return(
    <>
    <div className ="main">
    <h2 className="slotH"> 🎰 Welcome to Slot Machine 🎰 </h2>
    <SlotM x='🍓' y='🍓' z='🍓' />
    <SlotM x='😄' y='🙈' z='✈️' />
    <SlotM x='😄' y='😄' z='😄'/>
    <SlotM x='⭐' y='🍓' z='😂'/>
    </div>
    </>
    );
  };


  export default SlotMachine;