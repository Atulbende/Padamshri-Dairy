import {useRef,React} from 'react'
import TextFields from '../../common/text-field/TextFields'
import ActionBar from '../../layout/actionbar/ActionBar'
import Dialog from '../../common/dialog/Dialog';
import Checkbox from '../../common/checkbox/Checkbox';
import SelectFields from '../../common/select-field/SelectFields'
import Grid from '../../common/dataTable/Grid';
export default function Keyword() {
  const BtnRef=useRef()
  const BtnRef1=useRef()
  return (

    <>
          <ActionBar BtnSaveFn={BtnRef} btnUpdate={BtnRef1}/>
          <div  className='content-form '>
            <Grid></Grid>
        {/* <DataGrid></DataGrid> */}
              {/* <TextFields label={'Customer Name'} col={'col-'}/>
              <TextFields label={'Mobile No'}   col={'col-33'}/>
              <TextFields label={'Invioce No'}   col={'col-33'}/>
              <Checkbox col={'col-15'} text={"Yes"}></Checkbox>
              <SelectFields col={'col-50'}></SelectFields> */}
             
          </div>
         
          </>
  )
} 
