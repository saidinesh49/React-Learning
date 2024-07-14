import { useEffect, useRef, useState } from 'react'
import './App.css'
import { TodoConProvider } from './components/Contexts/TodoContext'

function App() {
  const [work, setwork]=useState('')
  const [Todolist,setTodolist]=useState([])
  const refs=useRef([])
  
  function itemdone(index){
    const newlist=[...Todolist]
    newlist[index]={...newlist[index],done: !newlist[index].done}
    setTodolist(newlist)
  }

  function addItem(){
    if(work){
      setTodolist([...Todolist,{work,done:false}])
      setwork("")
    }
    else{
      alert("Work Can't be empty")
    }
  }

  
  function enableindex(index){
    if(refs.current[index])
     {const readval=refs.current[index].hasAttribute("readonly")
      console.log("realval is: ",readval)
      if(readval)
      refs.current[index].removeAttribute("readonly")
      else
       refs.current[index].setAttribute("readonly",true)
      refs.current[index].focus();
     }
    }
  
  function removeitem(index){
    const newlist=Todolist.filter((_,ind)=>ind!==index)
    setTodolist(newlist)
  }
  function updateItem(index,val){
    const newlist=[...Todolist]
    newlist[index]={...newlist[index],work:val}
    setTodolist(newlist)
  }

  return (
    <div className='flex flex-col justify-center items-center'>
     <TodoConProvider value={{Todolist, setTodolist}}>
      <input 
      type='text' 
      value={work || ''}
      placeholder='Enter the work' 
      onChange={(e)=>{setwork(e.target.value)}}
      className='w-1rem outline-none bg-gray-500 rounded-sm'
      />
       <button onClick={addItem} className='bg-violet-700'>Add</button>

      {Todolist.map((item,index)=>(
        <div key={index}>
        <input type='checkbox' onChange={()=>{itemdone(index)}} checked={item.done}/>
        <input type='text' value={item.work} style={{textDecoration:item.done?"line-through":"none"}} onChange={(e)=>updateItem(index,e.target.value)} readOnly id="index" ref={(e)=>(refs.current[index]=e)}/>
        <button onClick={()=>enableindex(index)}>edit</button>
        <button onClick={()=>removeitem(index)}>remove</button>
        </div>
      ))}

     </TodoConProvider>
    </div>
  )
}

export default App
