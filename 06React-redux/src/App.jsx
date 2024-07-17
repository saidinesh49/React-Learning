import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import { addtodo } from './features/todo/todoSlice'
import Todoitem from './components/Todoitem'

function App() {
  const [work,setwork]=useState('')
  const dispatch=useDispatch()
  const handleAddtodo=()=>{
    dispatch(addtodo(work))
    setwork('')
  }

  return (
    <div className='h-screen bg-gray-700'>
      <p className='flex flex-col items-center font-semibold text-yellow-300 text-lg'>This is using redux</p>
     <div className='flex flex-col items-center bg-gray-700 space-y-5 mt-10 text-lg'>
      <div className='flex flex-row justify-center'>
          <input 
          type='text' 
          value={work || ''}
          placeholder='Enter your work'
          onChange={(e)=>{setwork(e.target.value)}} 
          className='focus:outline-0 rounded-l'
          />
          <button onClick={()=>{if(work!='') handleAddtodo(work)}} className='bg-green-600 text-slate-950 px-3 rounded-r'>Add</button>
      </div>
    <Todoitem/>
    </div>
  </div>
  )
}

export default App
