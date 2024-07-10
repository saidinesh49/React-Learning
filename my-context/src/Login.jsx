import React, { useContext, useEffect, useState } from 'react'
import UserContext from './components/UserContext'

function Login() {
  const [username,setusername]=useState('')
  const [points,setpoints]=useState(Number(0))
  const {setUser}=useContext(UserContext)

//   const handleSubmit=(e)=>{
//     e.preventDefault()
//     setUser({username,points})
//     }
   useEffect(()=>{
    setUser({username,points})
   },[username,points])
  
  return (
    <div className='flex flex-col h-auto bg-yellow-700 items-center text-slate-950 dark:bg-stone-950'>
     <input 
      type='text' 
      value={username}
      onChange={(e)=>{setusername(e.target.value)}}
      placeholder='Enter Username'
     />
     <input 
      type='number' 
      value={points || 0}
      min={0}
      onChange={(e)=>{setpoints(Number(e.target.value))}}
     />
     {/* <button onClick={handleSubmit} className='bg-violet-700 text-slate-950'>Submit</button>   */}
    </div>
  )
}

export default Login
