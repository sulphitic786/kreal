import React from 'react';
import dropdwn from './icons/dropdwn.png'

const BasicInfo = () => {
    return (
        <>
            <article className="col-md-12 shadow my-3 rounded-3 basci-info">
                    <div className="row"><h5 className="heading pt-3 ">Basic Information</h5></div>
                    <form className="px-4">
                    <div class="form-row">
                        <div class="col">
                        <label for="inputEmail4">Customer No.</label>
                        <input type="text" class="form-control" />
                        </div>
                        <div class="col">
                        <label for="inputEmail4">VAT No.</label>
                        <input type="text" class="form-control" />
                        </div>
                    </div>
                        <div className="form-group">
                            <label for="inputAddress">Company Name</label>
                            <input type="text" className="form-control" id="inputAddress" />
                        </div>
                        <div class="form-row">
                        <div class="col">
                        <label for="inputEmail4">Balance LCY</label>
                        <input type="text" class="form-control" />
                        </div>
                        <div class="col">
                        <label for="inputEmail4">Balance Duel (LCY)</label>
                        <input type="text" class="form-control" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col">
                        <label for="inputEmail4">Credit Limit</label>
                        <input type="text" class="form-control" />
                        </div>
                        <div class="col">
                        
                        <label for="inputEmail2">Saleperson Code</label>
                        <div className="div">
                        <select class="form-control" id="exampleFormControlSelect2"><img src={dropdwn} width="8px" height="8px" alt="" /> 
                            <option value="1" selected>Choose... </option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col">
                        <label for="inputEmail4">Currency</label>
                        <input type="text" class="form-control" />
                        </div>
                        <div class="col">
                        <label for="inputEmail4">Language Code</label>
                        <input type="text" class="form-control" />
                        </div>
                    </div>
                    
                        <div className="form-group">
                            <label for="inputAddress">Customer Status</label>
                            <select class="form-control" id="exampleFormControlSelect2"><img src={dropdwn} width="8px" height="8px" alt="" /> 
                            <option value="1" selected>Choose... </option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        </div>

                        <div class="form-row mb-5">
                        <div className="col-12">
                            <p className="justify-content-between">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                                dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
                                lobortis nisl ut aliquip ex e</p>
                        </div>
                        </div>

                        </form>
                    </article> 
        </>
    )
}

export default BasicInfo;
