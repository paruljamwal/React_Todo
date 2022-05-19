import React, { useState } from 'react'
import './Todo.css'
import {FcApproval} from 'react-icons/fc'
import {FcRating} from 'react-icons/fc'
import {FcFullTrash} from 'react-icons/fc';
import {FiStar} from 'react-icons/fi'
const TodoList = ({title,status,id , handelToggle , handeldelete}) => {

  
  return (
  <>
   <div className='lists'>
    <div className='star'><FiStar size='30px'/></div>  
   <div id={status? "striked" : null} className='list'> {title}</div>
   <button className='toggle' onClick={()=>handelToggle(id)}>{status ? < FcApproval size='lg' /> :  <FcRating size='lg'/>}</button>
   <div><button className='trash' onClick={()=>handeldelete(id)}><FcFullTrash size='30px' /></button></div>
   </div>
  </>
  )
}

export default TodoList