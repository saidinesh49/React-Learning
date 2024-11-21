import React, { useEffect, useState } from 'react';
// import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
// import { ThemeProvider } from './context/ThemeContext';

// // Pages
// import Home from './pages/Home';
// import Videos from './pages/Videos';
// import Tweets from './pages/Tweets';
// import { Channel } from './pages/Channel';
// import { PageNotFound } from './utils/PageNotFound';
// import { ComingSoon } from './utils/ComingSoon';
// import Login from './pages/Login';
// import { UserContextProvider } from './context/UserContext';
import { getCurrentUser } from './services/authService';
import { Outlet, useNavigate } from 'react-router-dom';
import {BookLoader} from 'react-awesome-loaders';
import { useUserContext } from './context/UserContext';
// const paths=[
//    "/settings", 
//    "/achievements",
//    "/favorites",
//    "/following",
// ];

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const {addUserData}=useUserContext();
  const navigate=useNavigate();

  useEffect(()=>async ()=>{
    setIsLoading(true);
    await getCurrentUser(addUserData)
      .then((res)=>{
        if(!res?.username){
          navigate('/login');
        }
      })
      .catch((err)=>{
        console.log("Error: ",err);
      })
      .finally(()=>{
        setIsLoading(false);
      });
  },[]);

  return isLoading?
        <><BookLoader
        background={"linear-gradient(135deg, #6066FA, #4645F6)"}
        desktopSize={"100px"}
        mobileSize={"80px"}
        textColor={"#4645F6"}/>
        </>:(
        <div className="min-h-screen bg-surface-50 dark:bg-surface-900 transition-colors">
          <Sidebar isOpen={isSidebarOpen} />
          <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
          
          <main className={`pt-24 pb-8 transition-all duration-300 px-4 sm:px-6 lg:px-8
            ${isSidebarOpen ? 'sm:ml-64' : 'sm:ml-20'}`}
          >
            <div className="max-w-7xl mx-auto">
              <Outlet/>
            </div>
          </main>
        </div>
  );
}

export default App;