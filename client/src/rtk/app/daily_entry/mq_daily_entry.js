import { apiSlice } from "../../apiSlice";
import { app } from "../../../services/api/endPoints";
const mq_daily_entry=apiSlice.injectEndpoints({
    endpoints:(build)=>({
        dailyEnteis:build.mutation({
            query:(data)=>({
                url:app.dailysale.app_gridDailyEntries,
                method:'POST',
                data:data
            })
        }),
        dailyEntrySave:build.mutation({
            query:(data)=>({
                url:app.dailysale.app_dailyEntriesSave,
                method:'POST',
                data:data
            }),
            invalidatesTags:['customers']
        }),
        dailyEntryDelete:build.mutation({
            query:(data)=>({
                url:app.dailysale.app_dailyEntriesDelete,
                method:'POST',
                data:data
            }),
            invalidatesTags:['customers']
        })
           
    })
})
export const {useDailyEnteisMutation,useDailyEntrySaveMutation,useDailyEntryDeleteMutation}=mq_daily_entry;