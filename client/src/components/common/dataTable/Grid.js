import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/js/dataTables.dataTables'
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import "jquery-ui-dist/jquery-ui";
import '../dataTable/grid.css'
import ActionBar from '../../layout/actionbar/ActionBar';
import { useNavigate } from 'react-router-dom';
import { root } from '../../../services/root/root';
export default function Grid({redirectTo,data,columns,actions,activity,tableName}) {
  const Navigate=useNavigate()
  const [ids,setIds]=useState([]);
  const [Refresh, setRefresh] = useState(true);
  useEffect(() => {
    if(Refresh){
      root.grid.resetGrid();
      setIds([]);
      root.grid.init(data,columns,Navigate,redirectTo,setIds);
      setRefresh(false);
    }
    return ()=>setRefresh(false);
  }, [Refresh,data]);

  return (
    <>        
        <ActionBar ids={ids} setIds={setIds} setRefresh={setRefresh} type='Grid' actionsButton={actions} activity={activity} tableName={tableName}/>
        <div className='tile-body table-responsive '>
            <table className='table dataTable stripe' id='sampleTable'> </table>
       </div>
  </>

  )
}
