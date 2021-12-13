import React from 'react'

const AddressLeft = () => {
    return (
        <>
            <article className="col-md-12 shadow my-1 address">
                <div className="row pt-4"><h5 className="heading">Address</h5></div>  {/*----  Address Section ----*/}
                <form className="px-4">
                <div class="form-row">
                    <div class="col">
                    <label for="inputEmail4">Address 1</label>
                    <input type="text" class="form-control" />
                    </div>
                    <div class="col">
                    <label for="inputEmail4">Address 2</label>
                    <input type="text" class="form-control" />
                    </div>
                </div>
                    <div className="form-group">
                        <label for="inputAddress">City</label>
                        <input type="text" className="form-control" id="inputAddress" />
                    </div>
                    <div class="form-row">
                    <div class="col">
                    <label for="inputEmail4">Postal Code</label>
                    <input type="text" class="form-control" />
                    </div>
                    <div class="col">
                    <label for="inputEmail4">Country / Region Code</label>
                    <select class="form-control" id="exampleFormControlSelect2">
                            <option value="1" selected>Choose... </option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col">
                    <label for="inputEmail4">Phone Number</label>
                    <input type="text" class="form-control" />
                    </div>
                    <div class="col">
                    <label for="inputEmail4">Email Address</label>
                    <input type="text" class="form-control" />
                    </div>
                </div>
                <div class="form-row">
                    <div class="col">
                    <label for="inputEmail4">Invoice Email</label>
                    <input type="text" class="form-control" />
                    </div>
                    <div class="col">
                    <label for="inputEmail4">Shipment Email</label>
                    <input type="text" class="form-control" />
                    </div>
                </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label for="inputEmail4">Primary Contact Code</label>
                        <select class="form-control" id="exampleFormControlSelect2"> 
                            <option value="1" selected>Choose... </option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        </div>
                        <div className="form-group col-md-6">
                        <label for="inputPassword4">Contant Name</label>
                        <input type="text" className="form-control" id="inputPassword4" />
                        </div>
                    </div>
                    <div className="form-group ">
                        <label for="inputAddress">VAT Registeration No.</label>
                        <input type="text" className="form-control" id="inputAddress" />
                    </div>

                    <div class="form-row check">
                        <div class="col-10 label">Do Not Confirm Back Orders</div>
                        <div class="col-2">
                        <div class="form-check">
                            <input className="form-check-input float-end" type="checkbox" id="gridCheck1" />
                        </div>
                        </div>
                    </div>

                    <div class="form-row check">
                        <div class="col-10 label">Normal Pricing</div>
                        <div class="col-2">
                        <div class="form-check">
                            <input className="form-check-input float-end" type="checkbox" id="gridCheck1" />
                        </div>
                        </div>
                    </div>

                    <div class="form-row check">
                        <div class="col-10 label">1K Pricing</div>
                        <div class="col-2">
                        <div class="form-check">
                            <input className="form-check-input float-end" type="checkbox" id="gridCheck1" />
                        </div>
                        </div>
                    </div>
    
                    <div class="form-row check">
                        <div class="col-10 label">Carton Pricing</div>
                        <div class="col-2">
                        <div class="form-check">
                            <input className="form-check-input float-end" type="checkbox" id="gridCheck1" />
                        </div>
                        </div>
                    </div>

                    <div class="form-row check">
                        <div class="col-10 label">Pack Pricing</div>
                        <div class="col-2">
                        <div class="form-check">
                            <input className="form-check-input float-end" type="checkbox" id="gridCheck1" />
                        </div>
                        </div>
                    </div>

                    <div class="form-row check">
                        <div class="col-10 label">Special Pricing</div>
                        <div class="col-2">
                        <div class="form-check">
                            <input className="form-check-input float-end" type="checkbox" id="gridCheck1" />
                        </div>
                        </div>
                    </div>

                    <div class="form-row check">
                        <div class="col-10 label">Pricing Comments</div>
                        <div class="col-2">
                        <div class="form-check">
                            <input className="form-check-input float-end" type="checkbox" id="gridCheck1" />
                        </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control disabled textb" id="inputAddress2" style={{width:"492px"}} />
                    </div>

                    <div class="form-row check">
                        <div class="col-10 label">Detailed Order Confirmation</div>
                        <div class="col-2">
                        <div class="form-check">
                            <input className="form-check-input float-end" type="checkbox" id="gridCheck1" />
                        </div>
                        </div>
                    </div>

                    <div class="form-row check">
                        <div class="col-10 label">Detailed Shipment Sheet</div>
                        <div class="col-2">
                        <div class="form-check">
                            <input className="form-check-input float-end" type="checkbox" id="gridCheck1" />
                        </div>
                        </div>
                    </div>

                    <div class="form-row check">
                        <div class="col-10 label">Shipment Charge Per Day</div>
                        <div class="col-2">
                        <div class="form-check">
                            <input className="form-check-input float-end" type="checkbox" id="gridCheck1" />
                        </div>
                        </div>
                    </div>
    
                    <div class="form-row check">
                        <div class="col-10 label">MyUneek Active</div>
                        <div class="col-2">
                        <div class="form-check">
                            <input className="form-check-input float-end" type="checkbox" id="gridCheck1" />
                        </div>
                        </div>
                    </div>

                    <div class="form-row check">
                        <div class="col-10 label">Use Alternative DPD Account</div>
                        <div class="col-2">
                        <div class="form-check">
                            <input className="form-check-input float-end" type="checkbox" id="gridCheck1" />
                        </div>
                        </div>
                    </div>

                    <div class="form-row check">
                        <div class="col-10 label">Do Not Allow PickBST</div>
                        <div class="col-2">
                        <div class="form-check">
                            <input className="form-check-input float-end" type="checkbox" id="gridCheck1" />
                        </div>
                        </div>
                    </div>

                    <div class="form-row d-sm-flex check">
                        <div class="col-10 d-sm-inline label">Do Not Send BO Change E-mail</div>
                        <div class="col-2 ">
                        <div class="form-check d-sm-inline ">
                            <input className="form-check-input float-end" type="checkbox" id="gridCheck1" />
                        </div>
                        </div>
                    </div>

                    <div class="form-row check">
                        <div class="col-10 label">Do Not Merge Shipments</div>
                        <div class="col-2">
                        <div class="form-check">
                            <input className="form-check-input float-end" type="checkbox" id="gridCheck1" />
                        </div>
                        </div>
                    </div> 

                    <div class="form-row check">
                        <div class="col-10 label">Do Not Email</div>
                        <div class="col-2">
                        <div class="form-check">
                            <input className="form-check-input float-end" type="checkbox" id="gridCheck1" />
                        </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-12">
                        <label for="inputEmail4">Primary Contact Code</label>
                        <select class="form-control" id="exampleFormControlSelect2"> 
                            <option value="1" selected>Choose... </option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        </div>
                        
                    </div>
                   

                    <div className="form-group">
                        <label for="inputAddress2">Address 2</label>
                        <select id="inputState" className="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    
                    <div className="form-row">
                    <div className="cols-10 offset-sm-1">
                      <button type="submit" className="btn btn-primary ">Update</button> 
                    </div>
                    </div>

                    </form>
                </article>

                <aside className="col-md-12 my-3 shadow social">   {/*---- Social Media -----*/}
                <div className="row py-4"><h5 className="heading ml-4">Social Media</h5></div>
                <form className="mx-4">
                <div class="form-row">
                    <div class="col">
                    <label for="inputEmail4">Website</label>
                    <input type="text" class="form-control" />
                    </div>
                    <div class="col">
                    <label for="inputEmail4">Twitter</label>
                    <input type="text" class="form-control" />
                    </div>
                </div>
                
                    <div class="form-row">
                    <div class="col">
                    <label for="inputEmail4">Instagram</label>
                    <input type="text" class="form-control" />
                    </div>
                    <div class="col">
                    <label for="inputEmail4">Facebook</label>
                    <input type="text" class="form-control" />
                    </div>
                </div>
                <div class="form-row pb-5">
                    <div class="col">
                    <label for="inputEmail4">Youtube</label>
                    <input type="text" class="form-control" />
                    </div>
                    <div class="col">
                    <label for="inputEmail4">Linkedin</label>
                    <input type="text" class="form-control" />
                    </div>
                </div>

                    </form>
                </aside>

                <aside className="col-md-12 shadow ">          {/*---- Account Details -----*/}
                <div className="row py-4"><h5 className="heading pl-5">Account Details</h5></div>
                <form className="mx-4">
                <div class="form-row">
                    <div class="col">
                    <label for="inputEmail4">Release Order Until Date</label>
                    <input type="text" class="form-control" />
                    </div>
                    <div class="col">
                    <label for="inputEmail4">Credit Band</label>
                    <input type="text" class="form-control" />
                    </div>
                </div>
                
                    <div class="form-row">
                    <div class="col">
                    <label for="inputEmail4">HSBC Account Number</label>
                    <input type="text" class="form-control" />
                    </div>
                    <div class="col">
                    <label for="inputEmail4">Order Priority</label>
                    <input type="text" class="form-control" />
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="col">
                    <label for="inputEmail4">Sales Target For Year</label>
                    <input type="text" class="form-control" />
                    </div>
                    <div class="col">
                    <label for="inputEmail4">HSBC Account Opening Date</label>
                    <select class="form-control" id="exampleFormControlSelect2">
                            <option value="1" selected>Choose... </option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </div>

                <div class="form-row">
                    <div class="col">
                    <label for="inputEmail4">Registeration No.</label>
                    <input type="text" class="form-control" />
                    </div>
                    <div class="col">
                    <label for="inputEmail4">Courier Notification Mobile Number</label>
                    <input type="text" class="form-control" />
                    </div>
                </div>
                <div class="form-row">
                    <div class="col">
                    <label for="inputEmail4">Blocked</label>
                    <input type="text" class="form-control" />
                    </div>
                    <div class="col">
                    <label for="inputEmail4">Courier Notification Email</label>
                    <input type="text" class="form-control" />
                    </div>
                </div>

                <div class="form-row">
                    <div class="col">
                    <label for="inputEmail4">Daily Order Cutoff Time</label>
                    <select class="form-control" id="exampleFormControlSelect2">
                            <option value="1" selected>Choose... </option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div class="col">
                    <label for="inputEmail4">Responsibilty Centre</label>
                    <input type="text" class="form-control" />
                    </div>
                </div>
                <div class="form-row">
                    <div class="col">
                    <label for="inputEmail4">Service Zone Code</label>
                    <input type="text" class="form-control" />
                    </div>
                    <div class="col">
                    <label for="inputEmail4">Document Sending Profile</label>
                    <input type="text" class="form-control" />
                    </div>
                </div>

                <div class="form-row">
                    <div class="col">
                    <label for="inputEmail4">Language Code</label>
                    <input type="text" class="form-control" />
                    </div>
                    <div class="col">
                    <label for="inputEmail4">Last Date Modified</label>
                    <input type="text" class="form-control" />
                    </div>
                </div>

                <div class="form-row pb-4">
                    <div class="col-12">
                    <label for="inputEmail4">Last Invoice Date</label>
                    <select class="form-control" id="exampleFormControlSelect2"> 
                            <option value="1" selected>Choose... </option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </div>

                    </form>
                </aside>
        </>
    )
}

export default AddressLeft;
