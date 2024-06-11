import React, { useEffect, useState } from 'react'
import '../dashboard/dashboard.css'
import { useGetDashboardMutation } from '../../../rtk/app/dashboard/mq_dashboard'
import DateTimePickerField from '../../common/datetimepicker/DateTimePicker';
import Button from '../../common/button/Button';
import socket from '../../../services/socket.js'; // Import the socket instance

export default function Dashboard() {
  const initState={
    fromDate:new Date(),
    toDate:new Date()
  }
  const [dashboardData,setDashboardData]=useState([])
  const [messages, setMessages] = useState([]);

  const [getDashboard,{data,isLoading}]=useGetDashboardMutation();
  const [formData,setFormData]=useState(initState);
  useEffect(()=>{
    getDashboard(formData)
    socket.on('message', (message) => {
      console.log('message:',message)
      setDashboardData(message[0])
    });

    // Cleanup on unmount
    return () => {
      socket.off('message');
    };
  
  },[])
useEffect(()=>{
  setDashboardData(dashboardData)
},[data])
  const search=()=>{
    getDashboard(formData);
  }
  return (
    <>
        <div className='row'>
          <DateTimePickerField onChangeEvent={setFormData} val={formData?.fromDate} label='From Date' id='fromDate' col='col-33'></DateTimePickerField>
        <DateTimePickerField onChangeEvent={setFormData} val={formData?.toDate} label='To Date' id='toDate' col='col-33'></DateTimePickerField>
        <Button icon={'fa fa-search'} title={'Search'} action={search}></Button>
        </div>
        <main className='row'>
            <section className='widget-box box-1 col-33'>
            <i className="widget-icons fa fa-address-card" aria-hidden="true"></i>

                <div className='widget-content'>
                <b>{dashboardData?.Active_Customers}</b>  
                  <p>Active Customer{messages}</p>
                 
                </div>
            </section>
            <section className='widget-box box-2 col-33'>
            <i className="widget-icons fa fa-address-card" aria-hidden="true"></i>

                <div className='widget-content'>
                <b>{dashboardData?.Total_Sale}/-</b>  
                  <p>Total Sale</p>
                 
                </div>
            </section>
            <section className='widget-box box-3 col-33'>
            <i className="widget-icons fa fa-address-card" aria-hidden="true"></i>

                <div className='widget-content'>
                <b>{dashboardData?.Balance}/-</b>  
                  <p>Balance</p>
                 
                </div>
            </section>
            <section className='widget-box box-4 col-33'>
            <i className="widget-icons fa fa-address-card" aria-hidden="true"></i>

                <div className='widget-content'>
                    <b>{dashboardData?.DeActive_Customers}/-</b>  
                  <p>DeActive Customers</p>
                 
                </div>
            </section>
          </main>
          </>
  )
}
