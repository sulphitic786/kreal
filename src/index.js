import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
//------------ Imported Compunents -------------
// import App, {like} from './App.jsx';
// import Challange from './compunents/Challange 5.jsx';
// import {add, sub, mul, div} from './compunents/Challange 5';
// import Calc from './Calc.jsx';

// import "./index.css";



//-----------------Task 1st---------------
// ReactDOM.render(
//   <div>
  
//   <p>This is my first program in React Js.</p>
//   <ol>
//     <li>
//       This the frist item of the list.
//     </li>
//     <li>
//       This the 5th item of the list and my lucky no is {Math.random(1,200)}
//     </li>
//   </ol>
//   </div>
//   ,document.getElementById('root')
// );

//-----------------Task 2nd------------------
// const name = 'Waseem Qasim';
// const cdate = new Date().toDateString();
// const ctime = new Date().toLocaleTimeString();
// ReactDOM.render(
//   <>
//     <h1> My Name is: {name} </h1>
//     <p>Current Date is = {cdate} </p>
//     <p>Current Time is = {ctime} </p>
//   </>
//   ,document.getElementById("root")
// );

//-----------------To add the pictures------------------
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/200/299";
// const img3 = "https://picsum.photos/200/301";

// ReactDOM.render(
//   <>
//   <h3 className="heading" >My Name is: Waseem Qasim </h3>
//   <a href="www.google.com">
//   <img src={img1} alt="Capture" />
//   </a>
//   <img src={img2} alt="Capture" className="img2" />
//   <img src={img3} alt="Capture" />
// </>
// ,document.getElementById("root")
// );

//---------------- Project 1 Lec 19---------------------------
// ---------To say good morning or afternoon or night as accord to the given time.


// ReactDOM.render( 
// <> 
// <App /> 
// <h4> Note: {like()} </h4>
// </>
// ,document.getElementById("root"));


//------------------ Challange 5 Calculator -----------------------

//  ReactDOM.render(
//     <>
//     <Calc />
//         </>
//      ,document.getElementById('root')
//  );

 //--------------------Props - App Part 1 -------------------
// import Card from './Card lec 22';
// import Sdata from './Sdata';
// import reactDom from 'react-dom';
 
//  ReactDOM.render(
    // <>
    //    <h2 style={{color:'red'}} > List of Top Five Netflix Series </h2>
    // <Card 
    //    imgsrc={Sdata[0].imgsrc}
    //    title={Sdata[0].title}
    //    Sname={Sdata[0].Sname}
    //    link={Sdata[0].link}
    //     />
    // <Card 
    //    imgsrc={Sdata[1].imgsrc}
    //    title={Sdata[1].title}
    //    Sname={Sdata[1].Sname}
    //    link={Sdata[1].link}
    //     />
    // <Card 
    //    imgsrc={Sdata[2].imgsrc}
    //    title={Sdata[2].title}
    //    Sname={Sdata[2].Sname}
    //    link={Sdata[2].link}
    //     />
    // </>

    //----------------- With Fat Arrow Function -----------

// import Card from './Card lec 22';
// import Sdata from './Sdata';
// import reactDom from 'react-dom';
 
//  ReactDOM.render(
//     <>
//         <h2 style={{color:'red'}} > List of Top Five Netflix Series </h2>
//         {Sdata.map((val) => {
//                 return(
//         <Card 
//        imgsrc={val.imgsrc}
//        title={val.title}
//        Sname={val.Sname}
//        link={val.link}
//         />
//                 )
//             }
//          ) };
//     </>


// ,document.getElementById("root")
// );
 //--------------------Props - Practice of Self Detail -------------------
    // import Props1 from './Card lec 22.jsx';
 
    // ReactDOM.render(
    //     <>
    //     <Props1 name="Waseem" class="MSc" university="UAF" city="Skp" contact="0324-4929494" />

    //     <Props1 name="Qasim" class="BSc" university="PU" city="Lahore" contact="03xx-xxxxxxx" />

    //     <Props1 name="Sajid Ali" class="FSc" university="PC" city="Faisalabad" contact="03xx-xxxxxxx" />

    //     <Props1 name="Sajid Ali" class="FSc" university="PC" city="Faisalabad" contact="03xx-xxxxxxx" />

        
    //     </>
    // ,document.getElementById("root")
    // );


//------------------ Slot Machine Lec 28  -- Refrence App --------------------------
//     import SlotMachine from './compunents/SlotMachine';

//  ReactDOM.render(
//     <SlotMachine />

// ,document.getElementById("root")
// );


//---------------- Hooks lec 30 ---------------------------
// import AddCal from './App';

// ReactDOM.render(
//     <AddCal />
// ,document.getElementById('root')
// );

//----------------- Hooks Current Clock Lec 31 ------------------------

// import Clock from './App';

// ReactDOM.render(
//     <Clock time="Time is-->"/>
// ,document.getElementById('root')
// );


//----------------- Digital Clock lec 32-------------------------
// import DClock from './App';

// ReactDOM.render(
//     <DClock />
// ,document.getElementById('root')
// );

//----------------- Events lec 33-------------------------

// //----------------- Forms lec 34-------------------------
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Form from './App';

// ReactDOM.render(
//     <Form />
// ,document.getElementById('root')
// );


//----------------- Forms lec 35-------------------------
// import Form1 from './App';

// ReactDOM.render(
//     <Form1 />
// ,document.getElementById('root')
// );

// // //----------------- Bootstarp-------------------------
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter } from 'react-router-dom';
// import Bootstrap from './App';


// ReactDOM.render(
//     <>
     
//      <BrowserRouter>
//         <Bootstrap />
        
//      </BrowserRouter>
//     </>
// ,document.getElementById('root') Restaurant
// );


// //----------------- Restaurant-------------------------

// import { BrowserRouter } from 'react-router-dom';
// import Restaurant from './App';


// ReactDOM.render(
//     <>
     
//      <BrowserRouter>
//         <Restaurant />
        
//      </BrowserRouter>
//     </>
// ,document.getElementById('root') 
// );




//----------------- Lec 53 Use Effect Hooks -------------------------
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import UseEffectHook from './App';

// ReactDOM.render(
//     <>
//      <UseEffectHook />
    
//     </>
// ,document.getElementById('root')
// );


//----------------- Project1-------------------------
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import { BrowserRouter } from 'react-router-dom';
// import Project1 from './App';

// ReactDOM.render(
//     <>
     
//      <BrowserRouter>
//         <Project1 />
        
//      </BrowserRouter>
//     </>
// ,document.getElementById('root')
// );

//----------------- Increment and Decrement -------------------------
// import App from './App';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.render(
//     <App />
// ,document.getElementById('root')
// );



//--------------- App  -------------
// import App from './App';
// // import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// // import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';

// ReactDOM.render(
//     <App />
// ,document.getElementById('root')
// );


// //-----------------54 Restaurant-------------------------
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';

import App5 from './App';


ReactDOM.render(
    <>
     <App5 />
    </>
    
,document.getElementById('root') 
);

    