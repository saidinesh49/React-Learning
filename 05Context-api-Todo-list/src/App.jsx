import { useEffect, useRef, useState } from 'react'
import './App.css'
import { HiArchiveBoxXMark } from "react-icons/hi2";
import { FaEdit } from "react-icons/fa";
import { TodoConProvider } from './components/Contexts/TodoContext'
import Welcome from './Welcome';

function App() {
  const [work, setwork]=useState('')
  const [Todolist,setTodolist]=useState([])
  const refs=useRef([])

  useEffect(() => {
    const handleKeyPress = (event, index) => {
      if (event.key === 'Enter' && work) {
        addItem();
      }
    };

    // Adding event listeners for Enter key press
    document.addEventListener('keyup', handleKeyPress);

    return () => {
      // Clean up event listener
      document.removeEventListener('keyup', handleKeyPress);
    };
  }, [work]); // Dependency on Todolist to reattach listener when Todolist changes

  
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
    <div className='flex flex-col items-center space-y-3 bg-black h-screen'>
     <TodoConProvider value={{Todolist, setTodolist}}>
      <div className='flex flex-row items-center space-x-0 mt-8'>
      <input 
      type='text' 
      value={work || ''}
      placeholder='Enter the work' 
      onChange={(e)=>{setwork(e.target.value)}}
      className='w-1rem outline-none bg-gray-500 px-8 rounded-l'
      id='inputid'
      />
       <button onClick={addItem} className='bg-violet-600 h-full px-3 transition-transform rounded-r hover:bg-violet-700'>Add</button>
      </div>
      {Todolist.map((item,index)=>(
        <div key={index} className='flex flex-row space-x-4 items-baseline bg-yellow-500 px-4 rounded-sm' style={{background:item.done?"#8BC34A":"#FFEB3B"}}>
        <input type='checkbox' onChange={()=>{itemdone(index)}} checked={item.done} className='cursor-pointer'/>
        <input type='text' value={item.work} className='bg-yellow-500' style={{textDecoration:item.done?"line-through":"none",background:item.done?"#8BC34A":"#FFEB3B"}} onChange={(e)=>updateItem(index,e.target.value)} readOnly id="index" ref={(e)=>(refs.current[index]=e)}/>
        <FaEdit onClick={()=>enableindex(index)} className='cursor-pointer'/>
        <HiArchiveBoxXMark onClick={()=>removeitem(index)} className='cursor-pointer'/>
        </div>
      ))}
      <Welcome/>
     </TodoConProvider>
    </div>
  )
}

export default App
