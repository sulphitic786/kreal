import React from 'react';

const Contact = () => {
  return (
    <div className='container-fluid'>
        <h3 className="text-center heading">Contact Us</h3>
        <div className="row contact">
        <div className="col-md-8 col-10 mx-auto">
          <form action="" className="form1">
            <div className="col-md-6 d-inline-block"><input type="text" name="" placeholder='Full Name' className='form-control bg-black w-75 text-light' id="" /></div>
            <div className="col-md-6 d-inline-block justify-content-end"><input type="text" name="" placeholder='Email' className='form-control bg-black w-75 text-light' id="" /></div>
            <textarea name="" placeholder='Message' rows={3} className='form-control d-inline-block text-light my-5 bg-black' id="" ></textarea>
            <button type="submit" className='btn btn-dark sendBtn'>Send</button>
          </form>
         </div>
        </div>
    </div>
  )
}

export default Contact;