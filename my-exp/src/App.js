import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './login.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const notify = ()=>toast.success("Registered Successfuly!",{
     position: 'top-center',
     theme: 'dark',
     pauseOnHover: false,
     draggable: true
  });

  const [user1min, setmin1]=useState(10);//1st user
  const [user1sec, setsec1]=useState(0);
  const [user1turn, setTurn]=useState(true);

  const [user2min, setmin2]=useState(10);//2nd user
  const [user2sec, setsec2]=useState(0);

  // const handleContextmenu=(e)=>{
  //   e.preventDefault()
  // }

  useEffect(()=>{
    // document.addEventListener('contextmenu',handleContextmenu);
    const interval=setInterval(()=>{
    if(user1turn){
     setsec1((tpsec)=>{
      if(tpsec===0)
        { if(user1min===0) {alert("User-1 Lost"); window.location.reload(); return 0;}
          setmin1(user1min-1);
          return 59;
        }
      return tpsec-1;
     })
    }
   else{
    setsec2((tpsec)=>{
      if(tpsec===0){
        if(user2min===0) {alert("User-2 Lost"); window.location.reload(); return 0;}
        setmin2(user2min-1);
        return 59;
       }
      return tpsec-1;
    })
   }
  },1000);
   
  return ()=>{clearInterval(interval)}
  })

  return (
    <Router>
      <>
        <header className="nav-header">
          <nav>
           <button onClick={notify}> Submit </button>
           <ToastContainer/>
           <br/>
          <Link to="/Login">Go to login page</Link>
           <br/>
           User1 Timer = {user1min}:{user1sec} &emsp; <button onClick={()=>{setTurn(false)}}> 1st player </button>
           <br/>
           User2 timer = {user2min}:{user2sec} &emsp; <button onClick={()=>{setTurn(true)}}> 2nd player</button>
          </nav>
        </header>

          <Routes>
            <Route path="/Login" Component={Login} />
          </Routes>
      </>
    </Router>
  );
}


export default App;
