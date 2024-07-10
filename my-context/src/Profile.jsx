import React, { useContext } from 'react'
import UserContext from './components/UserContext'
import './index.css'
function Profile() {
  const {user}=useContext(UserContext)
  
  if(!user){return <div className='flex flex-col items-center bg-yellow-600 text-slate-950 dark:bg-slate-950 dark:text-yellow-700'>Please Provide Info</div>}
  if(user.username && !user.points) {return <div className='flex flex-col bg-yellow-600 text-slate-950 dark:bg-slate-950 dark:text-yellow-700'>Welcome {user.username}<br/>No points</div>}
  if(user.username && user.points) {return <div className='flex flex-col  bg-yellow-600 text-slate-950 dark:bg-slate-950 dark:text-yellow-700'>Welcome {user.username}<br/>You have {user.points} Points</div>}
  return <div className='flex flex-col items-center bg-yellow-600 text-slate-950 dark:bg-slate-950 dark:text-yellow-700'>Please Provide Info</div>
}

export default Profile
