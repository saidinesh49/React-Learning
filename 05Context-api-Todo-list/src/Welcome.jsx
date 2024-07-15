import React from 'react'
import useTodo from './components/Contexts/TodoContext'

function Welcome() {
  const {Todolist}=useTodo()

  if(Todolist.length===0) return (<div className='text-red-500'>List is empty</div>)
  else return (
    <div className='flex flex-col items-center text-green-500 mb-0'>
      Welcome! 
      <ul>
      {Todolist.map((item,ind)=>(<li key={ind}> {item.work} </li>))}
      </ul>
    </div>
  )
}

export default Welcome
