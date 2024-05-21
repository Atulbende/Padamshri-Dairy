import executeQuery from "../../database/query.js";
import { _async } from "../../utils/_async.js";
import { APIResponse } from "../../utils/_response.js";
import { com_message } from "../../utils/index.js";
const getGridDailyEntries=_async(async(req,res)=>{
    const newDate=formatDate(req?.body?.saleDate);
    const result=await executeQuery('select * from get_grid_daily_entry_vw where `date`=? ',[newDate]) || [];
    console.log("result:",result);
    return  res.send(new APIResponse(200,"Daily Entry Grid",{dailyEntryGrid:result}))
});
function formatDate(isoDateString) {
    return isoDateString.split('T')[0];
  }
const DailyEntriesSave=_async(async(req,res)=>{
    const { deliveryDate, data } = req.body;
    // const result = await  executeQuery('call SP_CustomerSave(?,@Per_Result);',[JSON.stringify(formData)]);
    const result = await executeQuery('call SP_DeliverySave(?,?,@Per_Result);',[formatDate(deliveryDate),JSON.stringify(data)]);
    const _msg =com_message(result[0].Per_Result);
      return res.send(new APIResponse(200,"done",{result:_msg}));
});
const DailyEntriesDelete=_async(async(req,res)=>{
    const { deliveryDate, data } = req.body;
    console.log('OPO:',deliveryDate,data);
    // const result = await  executeQuery('call SP_CustomerSave(?,@Per_Result);',[JSON.stringify(formData)]);
    const result = await executeQuery('call SP_DeliveryDelete(?,?,@Per_Result);',[formatDate(deliveryDate),JSON.stringify(data)]);
    const _msg =com_message(result[0].Per_Result);
      return res.send(new APIResponse(200,"done",{result:_msg}));
});

export {getGridDailyEntries,DailyEntriesSave,DailyEntriesDelete}