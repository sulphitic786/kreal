// import { Home } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
//import Heading from './Heading';

/*function App(){
    let curDate = new Date();
curDate = curDate.getHours();
let greeting = "";
const cssStyle = {};

if(curDate >= 1 && curDate < 11)
{
  greeting = "Good Morning";
  cssStyle.color = "green";
}else if(curDate >= 11 && curDate < 19 )
{
  greeting = "Good Afternoon";
  cssStyle.color = "orange";
} else{
  greeting = "Good Evening";
  cssStyle.color = "blue";
}
return(
  <> 
  <div className="sir" >
  <h1> <Heading /> <span style={cssStyle}> {greeting} </span></h1>
  </div>
  </>
);
}
function like(){
  var name = 'Please Like and Share it with your all friends!';
  return name;
};

export {App, like};*/


 //---------------- Slot Machine Lec No 28 --------------
//  const App = () => {
//    return
//    <>
//      <h1> Welcome to Slot Machine  </h1>
//    </>
//  };





  //---------------- Slot Machine Lec No 28 --------------

  // const SlotM = (props) => {
  //   // let x = '😄';
  //   // let y = '😄' ;
  //   // let z = '😄';

  //   // let x = props.x;
  //   // let y = props.y;
  //   // let z = props.z;

  //   let {x, y, z} = props;
  //   if(x===y && y===z)
  //   {
  //     return(
  //       <>
  //       <div className="slot">
  //       <h1> {x} {y} {z} </h1>
  //       <h3>This is Matching</h3>
  //       <hr />
  //       </div>
  //       </>
  //     );
  //   }
  //   else{
  //     return(
  //       <>
  //       <div className="slot">
  //       <h1> {x} {y} {z} </h1>
  //       <h3>This is Not Matching</h3>
  //       <hr />
  //       </div>
  //       </>
  //     );
  //   }
  // }


  // const App = () => {
  //   return(
  //   <>
  //   <div className ="main">
  //   <h2 className="slotH"> 🎰 Welcome to Slot Machine 🎰 </h2>
  //   <SlotM x='🍓' y='🍓' z='🍓' />
  //   <SlotM x='😄' y='🙈' z='✈️' />
  //   <SlotM x='😄' y='😄' z='😄'/>
  //   <SlotM x='⭐' y='🍓' z='😂'/>
  //   </div>
  //   </>
  //   );
  // };


  // export default App;




  //------------------ Hooks lec No 30 -------------------------
  // import React, { useState } from 'react';
  


  // const AddCal = () => {
  //   const state = useState();
  //   const [count, setCount] = useState(1);

  // const IncNum = () => {
    
  //   setCount(count + 1);
 
  //   };
  //   return(
  //     <div style={{textAlign:'center'}}>
  //     <h1> {count} </h1>
  //     <button onClick={IncNum}> Click Me </button>
  //     </div>
  //   );
  // };

  // export default AddCal;


  //--------------------- Hooks Current Time Lec 31-------------
//  import React,{ useState } from 'react';

// const Clock = (props) => {
//   let newTime = new Date().toLocaleTimeString();
//   const [ctime, settime] = useState(newTime);

//   const updateTime = () =>{
//     let newTime = new Date().toLocaleTimeString();
//     settime(newTime);
//   }

//   return(
//         <div style={{textAlign:'center'}}>
//         <h1> {props.time} {ctime} </h1>
//         <button onClick={updateTime}> Get Time </button>
//         </div>
//   );
// };


// export default Clock;


//----------------- Digital Clock lec 32-------------------------

// import React,{ useState } from 'react';

// const DClock = () => {
//   let newTime = new Date().toLocaleTimeString();
//   const [ctime, settime] = useState(newTime);

//   const updateTime = () =>{
//     let newTime = new Date().toLocaleTimeString();
//     settime(newTime);
    
//   };
//   setInterval(updateTime,1000);
//   return(
//         <div style={{textAlign:'center'}}>
//         <h1>  {ctime} </h1>
//         <button onClick={updateTime}> Get Time </button>
//         </div>
//   );
// };


// export default DClock;


//----------------- Events lec 33-------------------------

//----------------- Forms lec 34-------------------------
//  import React, { useState } from 'react';
//  import AddIcon from '@material-ui/icons/Add';
//  import DeleteIcon from '@material-ui/icons/Delete';
 
  
//  const Form = () => {
//   const [name, setName] = useState("");


//   const inputEvent = (event) => {
//     setName(event.target.value);
//   };
  
//   return(
//         <div style={{textAlign:'center'}}>
        
//         <h1> Hello:{name} </h1>
//         <input type="text" 
//               placeholder="Enter Your First Name" 
//               onChange={inputEvent} 
//               value={name} /><br/>
//         <button className="btn btn-success"> Show Data <AddIcon /> </button>   
             
//         </div>
//   );
// };

// export default Form;

//----------------- Forms lec 35-------------------------
// import React, { useState } from 'react';


// const Form1 = () => {
//   const [name, setName] = useState("");

//   const inputEvent = (event) => {
//     setName(event.target.value);
//   };

//   const [lastName, setLastName] = useState();
//   const inputEvent2 = (event) => {
//     setLastName(event.target.value);
//   };

//   const [lastNameNew, setLastNameNew] = useState('');
//   const [fullName, setFullName] = useState();
//   const onSubmit = () => {
//     setFullName(name);
//     setLastNameNew(lastName);
//   };

  
//   return(
//         <div style={{textAlign:'center'}}>
//         <form onSubmit={onSubmit}>
//         <h1> Hello:{fullName} {lastNameNew}  </h1>
//         <input type="text" 
//               placeholder="Enter Your First Name" 
//               onChange={inputEvent} 
//               value={name} /><br/>
//         <input type="text" 
//               placeholder="Enter Your Last Name" 
//               onChange={inputEvent2} 
//               value={lastName} /><br/>
//         <button type="submit"> Show Data 👍 </button>   
//         </form>      
//         </div>
//   );
// };

// export default Form1;





// //----------------- Login Form lec 35-------------------------
// // import React from 'react';
// import {Route, Switch, Link,Redirect, NavLink} from "react-router-dom";
// import Clock from 'react-digital-clock';
// import index from './index.css'
// import Todo from './compunents/Todo';
// import Todo2 from './compunents/Todo2';
// import SlotMachine from './compunents/SlotMachine';
// import Error from './compunents/Error';
// import AppNote from './compunents/AppNote';
// import Contact from "./Project1/Contact";
// import Footer from './Project1/Footer';
// import Home from './LiveCovidTracker/Home';
// import StateWise from './LiveCovidTracker/StateWise';
// import TempHome from './Temprature/TempHome';
// import style from './Temprature/style.css';
// import IncreDecre from './compunents/IncreDecre';
// import Form from './compunents/Form';
// import CalcuHome from './Calculator/CalcuHome';
// import ApiPokemon from './compunents/ApiPokemon';




// const Bootstarp = () => {
//   return(
//   <>
//   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//   <div className="container-fluid">
//     <a className="navbar-brand fw-bold shadow" href="#">SulphitiCo</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
//       <li className="nav-item">
//           <NavLink exact className="nav-link" aria-current="page" to="/">Home</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink exact className="nav-link" aria-current="page" to="/state wise">State Wise</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink exact className="nav-link" aria-current="page" to="/Calculator">Calculator</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink exact className="nav-link" aria-current="page" to="/Todo">Todo</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink exact className="nav-link" to="/notes">Notes</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link" to="/temprature">Temprature</NavLink>
//         </li>

//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             More
//           </a>
//           <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
//             <li><NavLink className="dropdown-item text-secondary" to="/IncreDecre">Incre & Decre</NavLink></li>
//             <li><NavLink className="dropdown-item text-secondary" to="/todo2">Todo 2nd</NavLink></li>
//             <li><NavLink className="dropdown-item text-secondary" to="/form">Form</NavLink></li>
//             <li><NavLink className="dropdown-item text-secondary" to="api pokemon">Pokemon</NavLink></li>
//           </ul>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
//         </li>
//       </ul>
//       <form className="d-flex">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//         <button className="btn btn-outline-success text-light" type="submit"> Search </button>
//       </form>
//       <span className=""><Clock /></span>
//     </div>
//   </div>
//   </nav>
//     <Switch>
//      <Route exact path="/" component={Home} />
//      <Route exact path="/state wise" component={StateWise} />
//      <Route exact path="/Calculator" component={CalcuHome} />
//      <Route exact path="/todo" component={Todo} />
//      <Route exact path="/todo2" component={Todo2} />
//      <Route exact path="/notes" component={AppNote} />
//      <Route exact path="/temprature" component={TempHome} />
//      <Route exact path="/contact" component={Contact} />
//      <Route exact path="/IncreDecre" component={IncreDecre} />
//      <Route exact path="/form" component={Form} />
//      <Route exact path="/api pokemon" component={ApiPokemon} />
//      <Route component={Home} />

//     </Switch>
//     <Footer />
//       </> 
//   );
// }; 

// export default Bootstarp;


//----------------- Restaurant -------------------------
// import React from 'react';
// import {Route, Switch, Link,Redirect, NavLink} from "react-router-dom";
// import Navbar from './Live Retaurant/Navbar';
// import RestuHome from './Live Retaurant/RestuHome';
// import { css } from "@emotion/react";
// import Footer from './Project1/Footer';
// import PropagateLoader from 'react-spinners/PropagateLoader';





// const Restaurant = () => {

//     const [loading, setLoading] = useState(false);

//       const override = css`
//       display: block;
//       margin: 300px 700px;
//       border-color: red;
//     `;

//     useEffect(() => {
//       setLoading(true);
//       setTimeout(()=>{
//         setLoading(false)
//       }, 5000);
//     }, []);


//   return(
//   <>
    
//     {
//       loading ? <PropagateLoader color={"green"} loading={loading} css={override} size={50} />
//       :
//       <>
//       <Navbar />
//       <RestuHome />
//       <Footer />
//     </>
//     }
    
    
//       </> 
//   );
// }; 

// export default Restaurant;


//-------------------------- Lec 53 Use Effect Hook ----------------
// import React, { useState } from 'react';
// import { useEffect } from 'react';

// const UseEffectHook = () => {
//   const [num, setNum] = useState(0);

//   const updateNum = () => {

//         setNum(num + 1);
//   };

//   return (
//       <button className="text-danger" onClick={updateNum}>Click Me {num} </button>
//   );
// };

//------------Ese Effect -------------
// const UseEffectHook = () => {
//   const [num, setNum] = useState(0);

//       useEffect(() => {
//           alert ("You Clicked!");
//       }, [num]);
      

//   return (
//       <button className="text-danger" onClick={() => {setNum(num + 1)}}>Click Me {num} </button>
//   );
// };


//   export default UseEffectHook;








//----------------- Project1-------------------------

// import {Route, Switch, Redirect, Link, NavLink} from "react-router-dom";
// import Navbar from "./Project1/Navbar";
// import Home from "./Project1/Home";
// import About from "./Project1/About";
// import Services from "./Project1/Services";
// import Contact from "./Project1/Contact";
// import "./Project1/style.css";
// import Footer from './Project1/Footer';



//      const Project1 =(() =>{
//       return (
//         <>
//         <Navbar />
//       <Switch>
//       <Route exact path="/" component={Home} />
//        <Route exact path="/services" component={Services} />
//        <Route exact path="/about" component={About} />
//        <Route exact path="/contact" component={Contact} />
//        <Redirect to="/" />
//       </Switch>
//         <Footer />
//         </> 
//       )
//      });


// export default Project1;

//--------------- Increment and Decrement -------------
// import IncreDecre from './compunents/IncreDecre';


// const App = () => {
//   return (
//     <>
//       <IncreDecre />
//     </>
//   )
// }

// export default App;

//--------------- Project Pizza -------------
// import IncreDecre from './compunents/IncreDecre';


// const App = () => {
//   return (
//     <>
//       <IncreDecre />
//     </>
//   )
// }

// export default App;

//--------------- Project Covid Data -------------
// import Home from './LiveCovidTracker/Home';


// const App = () => {
//   return (
//     <>
//       <Home />
//     </>
//   )
// }

// export default App;

// //--------------- Project Temprature -------------
// import "./Temprature/style.css"
// import TempHome from './Temprature/TempHome';

// const App = () => {
//   return (
//     <>
//       <TempHome />
//     </>
//   )
// }

// export default App;

//--------------- Project Covid Data -------------
// import Home from "./LandingPage/Home";
// import "./LandingPage/Style.css"


// const App = () => {
//   return (
//     <>
//       <Home />
//     </>
//   )
// }

// export default App;

//--------------- Project Temprature -------------
// import Form from './compunents/Form';

// const App = () => {
//   return (
//     <>
//       <Form />
//     </>
//   )
// }

// export default App;


// ----------------- 54 Restaurant -----------------
// import Navbar from './Restaurant/Navbar';
// import Footer from './Project1/Footer';



// const Restu1 = () => {
//   return (
//     <>
//       <Navbar />
//       <Footer />
//     </>
//   )
// }

// export default Restu1;



// ------------------ Tester ---------
import './tester/StyleTester.css';
import Nav from './tester/Nav';
import TForm from './tester/TForm';

const App5 = () => {

  

return (
	<>
  <Nav />
  <TForm />
  </>
);
}

export default App5;

