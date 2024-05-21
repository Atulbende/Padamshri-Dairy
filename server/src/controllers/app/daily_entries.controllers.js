import executeQuery from "../../database/query.js";
import { _async } from "../../utils/_async.js";
import { APIResponse } from "../../utils/_response.js";
const getGridDailyEntries=_async(async(req,res)=>{
  
    const newDate=req?.body?.saleDate;
    console.log('PP:',req)
    const result=await executeQuery('select * from get_grid_daily_entry_vw where (`date`<?) ',[newDate]) || [];
    return  res.send(new APIResponse(200,"Daily Entry Grid",{dailyEntryGrid:result}))
});

export {getGridDailyEntries}