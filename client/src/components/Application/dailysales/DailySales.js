import React, { useEffect, useState } from 'react'
import Grid from '../../common/dataTable/Grid'
import { useDailyEnteisMutation,useDailyEntryDeleteMutation } from '../../../rtk/app/daily_entry/mq_daily_entry';
import { root } from '../../../services/root/root';
import DateTimePickerField from '../../common/datetimepicker/DateTimePicker';
import ConfirmationDialog from '../../common/confirmation-dialog/ConfirmationDialog';
export default function DailySales() {
   const [dailyenteis,{data,isLoading,isSuccess,isFetching}]= useDailyEnteisMutation();
   const [dailyEntryDelete,{isSuccess:isSuccessResponse}]=useDailyEntryDeleteMutation();
   const [isConfimation,setIsConfirmation]=useState(false);
  //  const [deliveryDate,setDeliveryDate]=useState(new Date());
   const [formData,setFormData]=useState({deliveryDate:new Date,data:[]});
   useEffect(()=>{
    dailyenteis({"saleDate":formData?.deliveryDate});
   },[formData?.deliveryDate,isSuccessResponse]);
   const DeliveryHandle=()=>{
      dailyEntryDelete(formData).then((res)=>{
            if(res?.data?.data?.result?.id==1){
                  setIsConfirmation(false);
            }
          });
    }
   const DeliveryDelete=()=>{
      const SelectedData=root.grid.getSelectedData('dailyenteis');
      if(SelectedData.length>0)
        {
          setIsConfirmation(true);
          setFormData((pre)=>({...pre,data:SelectedData}));
        }
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
      const actions=[{"title":'Undo',"icon":"fa fa-undo","className":'btn-1',"action":DeliveryDelete}];
      const activity='com_delete';
      const tableName='daily_entry';
  return (
    <>
      {
      !isLoading && !!isSuccess && 
        <>
          <DateTimePickerField onChangeEvent={setFormData} val={formData?.deliveryDate} label='Delivery Date' id='deliveryDate' col='col-33'></DateTimePickerField>
          <Grid  id='dailyenteis' isReset={isFetching}  data={{data:data?.data?.dailyEntryGrid,columns:columns}} actions={actions} activity={activity} tableName={tableName}></Grid>
        </>
      }
      {formData?.data.length>0 && isConfimation &&(
      <ConfirmationDialog
          title={'Create Delivery'}
          message={`Are you sure to Save Delivery`}
          confirmYes={DeliveryHandle}
          confirmNo={setIsConfirmation}
      />
      )}
    </>
  )
}
