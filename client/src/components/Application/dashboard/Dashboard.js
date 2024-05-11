import React from 'react'
import '../dashboard/dashboard.css'
export default function Dashboard() {
  return (
    
          <main className='row'>
            <section className='widget-box box-1 col-33'>
            <i className="widget-icons fa fa-address-card" aria-hidden="true"></i>

                <div className='widget-content'>
                <b>122.00/-</b>  
                  <p>Active Customer</p>
                 
                </div>
            </section>
            <section className='widget-box box-2 col-33'>
            <i className="widget-icons fa fa-address-card" aria-hidden="true"></i>

                <div className='widget-content'>
                    <b>250.00/-</b>  
                  <p>Total Customer</p>
                 
                </div>
            </section>
            <section className='widget-box box-3 col-33'>
            <i className="widget-icons fa fa-address-card" aria-hidden="true"></i>

                <div className='widget-content'>
                    <b>15000.00/-</b>  
                  <p>Total Sales</p>
                 
                </div>
            </section>
            <section className='widget-box box-4 col-33'>
            <i className="widget-icons fa fa-address-card" aria-hidden="true"></i>

                <div className='widget-content'>
                    <b>150.00/-</b>  
                  <p>Total Customer</p>
                 
                </div>
            </section>
          </main>
   
  )
}
