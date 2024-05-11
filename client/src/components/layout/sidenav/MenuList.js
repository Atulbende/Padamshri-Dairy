import Keyword from '../../Application/Keyword/Keyword';
import Roles from '../../Application/administration/Roles';
import Role from '../../Application/administration/Role';
import Dashboard from '../../Application/dashboard/Dashboard';
import Customers from '../../Application/customer/Customers';
import Customer from '../../Application/customer/Customer';

export const  Menu=[ 
    {title:'Dashboard',icon:'fa fa-tachometer',link:'/dashboard',component:<Dashboard/>,access:[1,2]},
    {title:'Customer',icon:'fa fa-user',link:'/customers',component:<Customers/>,access:[7,8]},
    {title:'Administration',icon:'fa fa-address-card', access:[3,4,5,6],
        subMenu:[
                {title:'User Role',  link:'/roles',   component:<Roles/>, access:[5,6]},
                {title:'Keyword',    link:'/Keyword', component:<Keyword/>,access:[3,4]}
        ]},
]

export const  Routers=[ 
    {title:'Dashboard',link:'/dashboard',component:<Dashboard/>,access:[1,2]},
    {title:'Keyword', link:'/Keyword', component:<Keyword/>,access:[3,4]},
    {title:'User Role', link:'/roles',   component:<Roles/>, access:[5,6]},
    {title:'User Role', link:'/role',   component:<Role/>, access:[5,6]},
    {title:'Customer',link:'/customers',component:<Customers/>,access:[7,8]},
    {title:'Customer',link:'/customer',component:<Customer/>,access:[7,8]},
]

export const GerRouter =(roles)=>{
   const Routes= Routers.filter((routes,index)=>routes.access.some((id,index)=>roles.includes(id)));
   return Routes;
}
