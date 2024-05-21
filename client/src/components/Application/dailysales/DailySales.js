import React, { useEffect, useState } from 'react'
import Grid from '../../common/dataTable/Grid'
import { useDailyEnteisMutation } from '../../../rtk/app/daily_entry/mq_daily_entry';
import { root } from '../../../services/root/root';
export default function DailySales() {
   const [dailyenteis,{data,isLoading,isSuccess}]= useDailyEnteisMutation();
   const [saleDate,setSaleDate]=useState(new Date().toISOString().slice(0, 10).replace('T', ' '));
   useEffect(()=>{
         dailyenteis({saleDate});
    console.log('data:',saleDate);
   },[])
   const DeliverySave=()=>{
    const SelectedData=root.grid.getSelectedData();
    console.log("SelectedData:",SelectedData)
   }
    const columns=[
        { title : 'Pid',data:'Pid',render:(data,_)=>{
            return  '<p class="dark" >'+  data.toString() +'0000000' +'</p>'}, 'visible' : true}, 
        { title : 'Customer Name',data:'CustomerName', 'visible' : true  },
        { title : 'Mobile No',data:'MobileNo' , 'visible' : true },
         { title : 'MilkType',data:'MilkType', 'visible' : true },
        { title : 'Qty',data:'Qty', 'visible' : true },
        { title : 'Rate',data:'Rate', 'visible' : true },
        { title : 'Balance',data:'Balance', 'visible' : true },
        { title : 'Delivery Boy',data:'DeliveryBy', 'visible' : true },
        { title : 'Timing',data:'Timing', 'visible' : true },
          ];
      // Grid Configuration;
      const actions=[{"title":'Delivery',"icon":'',"className":'btn-1',"action":DeliverySave}];
    //   const redirectTo='/customer';
    //   const activity='com_delete';
    //   const tableName='customers'
  return (
    <>
    {!isLoading && !!isSuccess && <Grid data={data?.data?.dailyEntryGrid}  columns={columns} actions={actions} ></Grid>}
    </>
  )
}
