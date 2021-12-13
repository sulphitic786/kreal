import React from 'react'

const LastBottom = () => {
    return (
        <>
            <div className="row">
                    <div className="col-md-5 pl-4 shadow last12">
                        <div className="row pt-4"><h5 className="heading">Last 12 Month Sales</h5></div>

                        <div className="row">
                        <h5 className="headingtext"> January <span className="float-end">£ 0.00</span></h5>
                        </div>
                    
                        <div className="row">
                        <h5 className="headingtext"> February <span className="float-end">£ 0.00</span></h5>
                        </div>

                        <div className="row">
                        <h5 className="headingtext"> March <span className="float-end">£ 0.00</span></h5>
                        </div>

                        <div className="row">
                        <h5 className="headingtext"> April <span className="float-end">£ 0.00</span></h5>
                        </div>

                        <div className="row">
                        <h5 className="headingtext"> May <span className="float-end">£ 0.00</span></h5>
                        </div>

                        <div className="row">
                        <h5 className="headingtext"> June <span className="float-end">£ 0.00</span></h5>
                        </div>

                        <div className="row">
                        <h5 className="headingtext"> July <span className="float-end">£ 0.00</span></h5>
                        </div>

                        <div className="row">
                        <h5 className="headingtext"> August <span className="float-end">£ 0.00</span></h5>
                        </div>

                        <div className="row">
                        <h5 className="headingtext"> September <span className="float-end">£ 0.00</span></h5>
                        </div>

                        <div className="row">
                        <h5 className="headingtext"> October <span className="float-end">£ 0.00</span></h5>
                        </div>

                        <div className="row">
                        <h5 className="headingtext"> November <span className="float-end">£ 0.00</span></h5>
                        </div>

                        <div className="row">
                        <h5 className="headingtext pb-4"> December <span className="float-end">£ 0.00</span></h5>
                        </div>

                    </div>
                    

                    {/* -----Top 6 Foem ---- */}

                    <div className="col-md-7 ">
                     <div className="row shadow mx-1 pl-3 rounded-5 top6">
                        <div className="row"><h5 className="heading pt-4">Top 6</h5></div>
                        <div className="row ml-1"> 
                         <table>
                             <tr className="theading"><th className="w-75 ">Sr No.</th> <th className="w-75 text-center">Item</th></tr>
                             <tr><td> 1 </td> <td className="text-center"> UC101 </td></tr>
                             <tr><td> 2 </td> <td className="text-center"> UC102 </td></tr>
                             <tr><td> 3 </td> <td className="text-center"> UC103 </td></tr>
                             <tr><td> 4 </td> <td className="text-center"> UC104 </td></tr>
                             <tr><td> 5 </td> <td className="text-center"> UC105 </td></tr>
                             <tr><td> 6 </td> <td className="text-center"> UC106 </td></tr>
                         </table>
                        </div>
                    </div>

                     {/* -----Bottom6 Form ---- */}

                     <div className="row shadow mx-1 bottum6">
                        <div className="row mt-2"><h5 className="heading pt-4">Buttom 6</h5></div>
                        <div className="row ml-1"> 
                         <table>
                             <tr className="theading"><th className="w-75 ">Sr No.</th> <th className="w-75 text-center">Item</th></tr>
                             <tr><td> 1 </td> <td className="text-center"> UC101 </td></tr>
                             <tr><td> 2 </td> <td className="text-center"> UC102 </td></tr>
                             <tr><td> 3 </td> <td className="text-center"> UC103 </td></tr>
                             <tr><td> 4 </td> <td className="text-center"> UC104 </td></tr>
                             <tr><td> 5 </td> <td className="text-center"> UC105 </td></tr>
                             <tr><td> 6 </td> <td className="text-center"> UC106 </td></tr>
                         </table>
                        </div>
                    </div>
                    </div>
                    </div>
        </>
    )
}

export default LastBottom;
