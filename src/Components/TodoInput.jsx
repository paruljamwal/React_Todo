import React, { useState } from 'react'
import "./Todo.css"
import {BsPlusLg} from 'react-icons/bs'
const TodoInput = ({onClick}) => {
  
  const [title,setTitle]=useState("")

  const handelinput=(e)=>{
    setTitle(e.target.value)
    console.log(e.target.value);
  }

 

  return (
    <div>
      <input onFocus='none' className='inpubox' value={title}  placeholder='+ Add a-todo...' onChange={handelinput}  />
      <button className='plus' disabled={!title} onClick={()=>onClick(title)}><BsPlusLg/></button>
     
    </div>
  )
}

export default TodoInput