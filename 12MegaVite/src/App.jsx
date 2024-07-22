import React, { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoader]=useState(true)
  const [pageis, setPage]=useState("")
  const dispatch=useDispatch()

  useEffect(()=>{
    setLoader(true)
    authService.getCurrentUser()
      .then((userData)=>{ 
        if(userData){
          dispatch(login({userData}));
          setPage('Home-Page');
         }
        else{
          dispatch(logout());
          setPage('Login-Page');
         }
        })
      .catch((error)=>{ 
        setPage("Login-Page");
        console.log(error); 
        })
      .finally(()=>{
        setLoader(false);
        })
  },[])


  return loading?<div className='flex flex-row justify-center h-screen items-center bg-black text-green-600'>Loading...</div>:
    <div className='bg-gray-600 flex flex-col items-center justify-center h-screen'>
    <Header />
    <p className='text-black'>{pageis}</p>
    <Outlet />
    <Footer />
    </div>;
}

export default App
