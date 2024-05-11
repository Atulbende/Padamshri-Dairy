import { apiSlice } from "../../apiSlice";
import {app} from '../../../services/api/endPoints'
const mq_keyword=apiSlice.injectEndpoints({
    endpoints:(build)=>({
            keywords:build.query({
                query:({data})=>({
                    url:app.getkeywords,
                    method:'POST',
                    data:data
                })
            })
    })
    // endpoints:(build)=>({
    //     userLogin:build.mutation({
    //         query:({data})=>({
    //             url:user.user_login,
    //             method:'POST',
    //             data:data
    //         })
    //     }),
    //     UserSingup:build.mutation({
    //         query:({data})=>({
    //             url:user.user_singup,
    //             method:'POST',
    //             data:data
    //         })
    //     })
    // })
})

export  const {useKeywordsQuery}=mq_keyword;
