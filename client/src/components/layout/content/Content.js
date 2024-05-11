import React from 'react'
import './content.scss'
import ActionBar from '../actionbar/ActionBar'
import {Dialog,DialogHeader,DialogBody,DialogFooter} from '../../common/dialog/Dialog'
import TextFields from '../../common/text-field/TextFields' 
import Button from '../../common/button/Button';
import {  Outlet } from 'react-router-dom'
export default function Content() {
  return (
    <>
   
      <Outlet/>
    </>

  )
}
