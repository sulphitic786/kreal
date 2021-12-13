import React from 'react'

const QasnAnsForm = () => {
    return (
        <>
           <aside className="col-md-12 my-3 px-5 shadow">          {/*---- Question & Answers -----*/}
                <div className="row py-4"><h5 className="heading ">Question & Answers</h5></div>
                <form>
                <div class="form-row">
                    <div class="col-md">
                    <label for="inputEmail4">How Did They Hear Of Us?</label>
                    <select class="form-control" id="exampleFormControlSelect2">
                            <option value="1" selected>Choose... </option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div class="col-md">
                    <label for="inputEmail4">No. Of Employees?</label>
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
                    <div class="col-md">
                    <label for="inputEmail4">Company Turnover</label>
                    <select class="form-control" id="exampleFormControlSelect2">
                            <option value="1" selected>Choose... </option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div class="col-md">
                    <label for="inputEmail4">Business Type</label>
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
                    <div class="col-md">
                    <label for="inputEmail4">Main Products</label>
                    <input type="text" class="form-control" />
                    </div>
                    <div class="col-md">
                    <label for="inputEmail4">Main Brands</label>
                    <input type="text" class="form-control" />
                    </div>
                </div>

                <div class="form-row">
                    <div class="col-md">
                    <label for="inputEmail4">Main Suppliers</label>
                    <input type="text" class="form-control" />
                    </div>
                    <div class="col-md">
                    <label for="inputEmail4">Monthy Spend On Our Type Of Clothings</label>
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
                    <div class="col-md">
                    <label for="inputEmail4">How Long have the been in the business for?</label>
                    <select class="form-control" id="exampleFormControlSelect2">
                            <option value="1" selected>Choose... </option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </div>

                <div class="form-group pb-5">
                    <label for="exampleFormControlTextarea1">Company Information</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                    </form>
                </aside> 
        </>
    )
}

export default QasnAnsForm
