import React from 'react';
import BasicInfo from './BasicInfo';
import LastBottom from './LastBottom';
import AddressLeft from './AddressLeft';
import FormMessage from './FormMessage';
import QasnAnsForm from './QasnAnsForm';
import ChartMonthlySales from './ChartMonthlySales';
import ChartSalesByProdduct from './ChartSalesByProdduct';


const TForm = () => {
    return (
        <>
            <section className="container-fluid mt-3">
             <div className="row mx-1">           {/*----  left Section ----*/}
                <article className="col-lg-6">          
                   <BasicInfo />                  {/*----  left Section for Basic Information ----*/}
                </article>

                <article className="col-lg-6 col"> 
                    <LastBottom />                {/*----  1st Section from Last 12 - Bottom6 ----*/}
                </article>
             </div>
             <section className="row mx-1 mb-5">  {/*----  2nd Section ----*/}
              <div className="col-lg-6">  
                   <AddressLeft />                {/*----  2nd Section from AddressForm - end ----*/}
              </div>

              <div className="col-md-6 right">
               <FormMessage />

                <div className="col-md-12">       {/*----  Charts  -----*/}
                <div className="row g-3">
                <aside className="col-md-6 px-4 gx-3 shadow"> {/*---- Sales by Product -----*/}
                <div className="row"><h6 className="heading py-4">Sales by Product</h6></div>
                <form>
                <div class="form-row text-center mb-4">
                    <div class="col position-relative chartText">
                    <p className="d-inline d2017"> 2017 </p>
                    <p className="d-inline px-2 d2018" > 2018 </p>
                    <p className="d-inline d2019"> 2019 </p>
                    <p className="d-inline px-2 d2020"> 2020 </p>
                    <p className="d-inline d2021"> 2021 </p>
                    </div>
                </div>
                    <div className="form-row">
                     <div className="col rowDetail">
                      <h6 className="text">- 0.001K <span className="chartrow" ></span></h6>
                      <h6 className="text">- 0.0005K<span className="chartrow" ></span></h6>
                      <h6 className="text pl-2">  0K<span className="chartrow" ></span></h6>
                      <h6 className="text">- 0.0005K <span className="chartrow" ></span></h6>
                      <h6 className="text pb-3">- 0.001K<span className="chartrow" ></span></h6>
                     </div>
                    </div>

                    </form>
                </aside>
                <aside className="col-md-6 gx-3 px-4 shadow"> {/*---- Yearly Sales -----*/}
                <div className="row"><h6 className="heading py-4">Yearly Sales</h6></div>
                <form>
                <div class="form-row text-center mb-4">
                    <div class="col chartText">
                    <p className="d-inline d2017"> 2017 </p>
                    </div>
                </div>
                    <div className="form-row">
                     <div className="col rowDetail">
                     <h6 className="text">- 0.001K<span className="chartrow" ></span></h6>
                      <h6 className="text">- 0.0005K<span className="chartrow" ></span></h6>
                      <h6 className="text pl-2">  0K<span className="chartrow" ></span></h6>
                      <h6 className="text">- 0.0005K<span className="chartrow" ></span></h6>
                      <h6 className="text pb-3">- 0.001K<span className="chartrow" ></span></h6>
                     </div>
                    </div>

                    </form>
                </aside>

                <aside className="col-md-6 shadow"> {/*---- Monthly Sales -----*/}
                <div className="row"><h6 className="heading py-4">Monthly Sales</h6></div>
                <div class="form-row text-center mb-4">
                    <div class="col chartText">
                    <p className="d-inline d2017"> 2017 </p>
                    <p className="d-inline px-2 d2018" > 2018 </p>
                    <p className="d-inline d2019"> 2019 </p>
                    <p className="d-inline px-2 d2020"> 2020 </p>
                    <p className="d-inline d2021"> 2021 </p>
                    </div>
                </div>
                <ChartMonthlySales />
                </aside>
                <aside className="col-md-6 gx-3 shadow"> {/*---- Sales by Category -----*/}
                <div className="row"><h6 className="heading py-4">Sales by Category</h6></div>
                <div class="form-row text-center mb-4">
                    <div class="col chartText">
                    <p className="d-inline d2017"> 2017 </p>
                    <p className="d-inline px-2 d2018" > 2018 </p>
                    <p className="d-inline d2019"> 2019 </p>
                    <p className="d-inline px-2 d2020"> 2020 </p>
                    <p className="d-inline d2021"> 2021 </p>
                    </div>
                </div>
                <ChartSalesByProdduct />
                
                </aside>

                </div>
                </div>
                 <QasnAnsForm />                  {/*---- Question & Answers -----*/}
              </div>
            </section>

            </section>
        </>
    )
}

export default TForm
