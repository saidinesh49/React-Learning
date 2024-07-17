import React, { useEffect, useRef, useState } from 'react'
import { HiArchiveBoxXMark } from "react-icons/hi2";
import { FaEdit } from "react-icons/fa";

function TodoItem({todo,removeitem}) {
  const ref=useRef(null)
  const [Todolist,setTodolist]=useState([])

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter' && todo.work.trim()!='') {
      if(!ref.current) return;
      const readval = ref.current.hasAttribute("readonly");
      if(!readval){
        ref.current.setAttribute("readonly", true);
        ref.current.blur();
      }
      }
    };

    // Adding event listeners for Enter key press
    document.addEventListener('keyup', handleKeyPress);

    return () => {
      // Clean up event listener
      document.removeEventListener('keyup', handleKeyPress);
    };
  },[todo.work]); // Dependency on Todolist to reattach listener when Todolist changes

  
  function itemDone(index){
    const newlist=[...Todolist]
    todo.done=!todo.done
    newlist[index]={todo}
    setTodolist(newlist)
  }


  
  function enableindex() {
    if (ref.current) {
      const readval = ref.current.hasAttribute("readonly");
      console.log("realval is: ", readval);
      if (readval) {
        ref.current.removeAttribute("readonly");
        ref.current.focus();
      } else {
        ref.current.setAttribute("readonly", true);
        ref.current.blur();
      }
    }
  }
  

  function updateItem(index,val){
    const newlist=[...Todolist]
    todo.work=val
    newlist[index]={todo}
    setTodolist(newlist)
  }




  return (
    <div key={todo.index} className='flex flex-row space-x-4 items-baseline bg-yellow-500 px-4 rounded-sm' style={{background:todo.done?"#8BC34A":"#FFEB3B"}}>
    <input type='checkbox' onChange={()=>{itemDone(todo.index)}} checked={todo.done} className='cursor-pointer'/>
    <input type='text' value={todo.work} className='bg-yellow-500' style={{textDecoration:todo.done?"line-through":"none",background:todo.done?"#8BC34A":"#FFEB3B"}} onChange={(e)=>updateItem(todo.index,e.target.value)} readOnly ref={ref}/>
    <FaEdit onClick={()=>{enableindex(todo.index)}} className='cursor-pointer'/>
    <HiArchiveBoxXMark onClick={()=>{removeitem(todo.index)}} className='cursor-pointer'/>
    </div>
  )
}

export default TodoItem
