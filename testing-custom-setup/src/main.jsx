import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Videos from './pages/Videos.jsx';
import Tweets from './pages/Tweets.jsx';
import { Channel } from './pages/Channel.jsx';
import { PageNotFound } from './utils/PageNotFound.jsx';
import { ComingSoon } from './utils/ComingSoon.jsx';
import AllContextProvider from './context/AllContextProvider.jsx';
import { UserContextProvider } from './context/UserContext.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import Home from './pages/Home.jsx';
import AuthLayout from './components/AuthLayout.jsx';
import SignUp from './pages/Signup.jsx';


const router=createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
        {
         path: "/",
         element: <Home/>
        },
        {
          path: '/login',
          element: <AuthLayout>
                      <Login/>
                   </AuthLayout>
        },

        {
          path: '/register',
          element: <SignUp/>
        },

        {
           path: '/videos',
           element: <Videos/>
        },

        {
           path: '/tweets',
           element: <Tweets/>,
        },

        {
           path: '/favorites',
           element: <ComingSoon/>, // TODO 
        },

        {
           path: '/achievements',
           element: <ComingSoon/>, // TODO
        },

        {
          path: '/settings',
          element: <ComingSoon/>,
        },

        {
           path: '/following',
           element: <ComingSoon/>, // TODO
        },

        {
           path: '/c/:username',
           element: <Channel/>,
        },

        {
           path: '/404NotFound',
           element: <PageNotFound/>,
        }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ThemeProvider>
      <UserContextProvider>
        <RouterProvider router={router}/>
      </UserContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
);