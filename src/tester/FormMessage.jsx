import React from 'react'

const FormMessage = () => {
    return (
        <>
             <article className="col-md-12 shadow px-5 mx-0  my-1">  {/*---- Messages -----*/}
                <div className="row"><h5 className="heading py-4">Messages</h5></div>   
                <form>
                
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <div class="form-group py-3">
                        <label for="exampleFormControlTextarea1">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <div class="form-group pb-5">
                        <label for="exampleFormControlTextarea1">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    </form>
                </article>
        </>
    )
}

export default FormMessage;
