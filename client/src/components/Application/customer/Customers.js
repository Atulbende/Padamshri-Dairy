import React from 'react'
import { useCustomersQuery } from '../../../rtk/app/customer/mq_customer'
import Grid from '../../common/dataTable/Grid';
import { useNavigate } from 'react-router-dom';
export default function Customers() {
    const {data,isLoading} = useCustomersQuery();
    const Navigate=useNavigate()
    const redirectToNew=()=> Navigate('/customer',{state:{ Pid: -1}});
    // const Inword=()=>{
    //   const SelectedData=root.grid.getSelectedData();
    // }
    const columns=[
      { title : 'Pid',data:'Pid',render:(data,_)=>{
        return  '<p class="link-primary" >'+  data.toString() +'0000000' +'</p>'}, 'visible' : true}, 
      { title : 'Customer Name',data:'CustomerName', 'visible' : true  },
      { title : 'Mobile No',data:'MobileNo' , 'visible' : true },
      { title : 'FullAddress',data:'FullAddress', 'visible' : true  },
      { title : 'MilkType',data:'MilkType', 'visible' : true },
      { title : 'Qty',data:'Qty', 'visible' : true },
      { title : 'Rate',data:'Rate', 'visible' : true },
      { title : 'Balance',data:'Balance', 'visible' : true },
      { title : 'Delivery By',data:'DeliveryBy', 'visible' : true },
      { title : 'Timing',data:'Timing', 'visible' : true },
      { title : 'Last Payment Date',data:'LastPaymentDate', 'visible' : true },
      { title : 'Status',data:'Status', 'visible' : true }
      ];
    // Grid Configuration;
    const actions=[{"title":'New',"icon":'fa fa-plus',"className":'btn-1',"action":redirectToNew}];
    const redirectTo='/customer';
    const activity='com_delete';
    const tableName='customers'
  return (
   <>
       {!isLoading && <Grid actions={actions}   redirectTo={redirectTo} columns={columns} data={data?.data?.customersGrid} activity={activity} tableName={tableName}></Grid>}
   </>
  )
}
