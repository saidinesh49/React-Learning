import React, { useState } from 'react';
import { Search, Bell, Menu } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import ProfileDropdown from './ProfileDropdown';
import { useUserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa'
import { PageNotFound } from '../utils/PageNotFound';

export default function Header({ onMenuClick }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const {userData}=useUserContext();
  const navigate=useNavigate();

  const handleClickProfileIcon=()=>{
    try {
      console.log("Icon clicked",userData);
      if(!userData?.username){
        navigate('/login');
      }
      setIsProfileOpen(!isProfileOpen);
    } catch (error) {
      console.log("Error: inside handleProfileIcon",error);
    }
  }

  return (
    <header className="fixed top-0 right-0 left-0 h-16 bg-white/80 dark:bg-surface-900/80 backdrop-blur-md z-50 px-2 sm:px-4 flex items-center justify-between border-b border-surface-200 dark:border-surface-700">
      <div className="flex items-center gap-2">
        <button
          onClick={onMenuClick}
          className="p-2 hover:bg-surface-100 dark:hover:bg-surface-800 rounded-full transition-colors"
        >
          <Menu className="w-6 h-6 text-surface-600 dark:text-surface-300" />
        </button>
      </div>
      
      <div className="flex-1 max-w-2xl mx-2 sm:mx-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 pl-10 bg-surface-50 dark:bg-surface-800 rounded-full border border-surface-200 dark:border-surface-700 focus:outline-none focus:border-primary-300 dark:focus:border-primary-500 focus:ring-2 focus:ring-primary-100 dark:focus:ring-primary-500/20 transition-all"
          />
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-surface-400 dark:text-surface-500" />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <ThemeToggle />
        <button className="p-2 hover:bg-surface-100 dark:hover:bg-surface-800 rounded-full relative transition-colors">
          <Bell className="w-6 h-6 text-surface-600 dark:text-surface-300" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-primary-500 rounded-full"></span>
        </button>
        <div className="relative">
          {userData?.username?
            (<button
              onClick={() => {handleClickProfileIcon();}}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-medium hover:shadow-lg hover:ring-2 ring-primary-200 dark:ring-primary-500/20 transition-all"
            >
            {userData?.avatar ? (
            <img
              src={userData.avatar} // Assuming avatar is a URL to the image
              alt="User Avatar"
              className="w-full h-full object-cover rounded-full"
            />
            ) : (
            userData?.fullName ? userData.fullName[0] : "."
          )}
        </button>):
            (<button
            onClick={handleClickProfileIcon} // You can adjust this based on your need, maybe show a login modal or redirect
            className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-white font-medium hover:shadow-lg hover:ring-2 ring-primary-200 dark:ring-primary-500/20 transition-all"
            >
            <FaUser className="text-white text-xl" /> {/* Default user icon */}
           </button>)
          }
          {userData?.username?
          <ProfileDropdown 
            isOpen={isProfileOpen} 
            onClose={() => setIsProfileOpen(false)} 
          />:null
          }
        </div>
      </div>
    </header>
  );
}