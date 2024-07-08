import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Profile from './components/Profile/Profile.jsx'
import Chess from './components/Chess/Chess.jsx'
import Home from './components/Home/Home.jsx'
import Users, { chessPlayerInfo } from './components/Users/Users.jsx'
import NotFound from './components/NotFound.jsx'


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
       <Route path="" element={<Home/>} />
       <Route path="chess" element={<Chess/>} />
       <Route path="profile" element={<Profile/>} />
       <Route 
       loader={chessPlayerInfo} 
       path="view/:userid" 
       element={<Users/>} 
       />
       <Route path='*' element={<NotFound/>} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
