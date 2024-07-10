import './App.css'
import UserContextProvider from './components/UserContextProvider'
import Profile from './Profile'
import Login from './Login'
import { useState } from 'react'

function App() {
  const [theme,setTheme]=useState('light')
  const themeChange=()=>{
    document.querySelector('html').classList.remove('light','dark')
    setTheme(theme==="light"?"dark":"light")
    document.querySelector('html').classList.add(theme)
  }
  return (
    <div className='bg-yellow-700 h-screen dark:bg-slate-950'>
    <UserContextProvider>
    <Profile/>
    <Login/>
    <button onClick={themeChange} className='bg-violet-700'>Theme</button>
    </UserContextProvider>
    </div>
  )
}

export default App
