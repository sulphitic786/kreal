import React from 'react';


const Error= () => {

    return(
       <>
       <div className="container " style={{"maxWidth":"450px"}}>
           <div className="row col-md-12 my-5 py-5">
               <h4 className="text-danger text-center mt-5">Opps! Page not found!</h4>
               <p className="text-danger text-center">Go to the vlid or type the correct path.</p>
           </div>
       </div>
       </>
    );
    };

    export default Error;