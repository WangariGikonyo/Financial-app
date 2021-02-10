import React from 'react';
import finance from '../assets/finance.png'

export default function LandingPage() {
    return (
       <section className="home">
           <div className="container" id="container_home">
               <div className="row">
                   <div className="col-md-6 col-sm-12 ">
                   <h1 className="display-3 mb-4" id="heading_top">Managing Your <br /> Finance Easier</h1><p>APP has features to view and manage<br />our finances, such as transfer, and statistics.</p>
                   </div>
                   <div className="col-md-6 col-sm-12 second-col">
                   <img src={finance} className="img-fluid" style={{maxHeight:530, minWidth:100}} />
                  
                   </div>
               </div>

               
  
        </div>

       </section>
    )
}
