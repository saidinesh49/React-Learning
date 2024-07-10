import React, { useEffect } from 'react'
import '../styling.css'
function Profile() {
  useEffect(() => {
    const handleOnlineStatusChange = () => {
      if (!navigator.onLine) {
        console.log('Offline');
      } else {
        console.log('Online');
      }
    };
  
    // Initial log of current status
    handleOnlineStatusChange();
  
    // Event listeners for online/offline changes
    window.addEventListener('online', handleOnlineStatusChange);
    window.addEventListener('offline', handleOnlineStatusChange);
  
    // Cleanup
    return () => {
      window.removeEventListener('online', handleOnlineStatusChange);
      window.removeEventListener('offline', handleOnlineStatusChange);
    };
  }, []);
  
  return (
    <div className='flex flex-col bg-zinc-900 text-amber-500 mt-16 justify-stretch'
     style={{minHeight:'calc(100vh - 8rem)'}} 
     >
     <a>This is Profile page</a>
     <img src='https://tse3.mm.bing.net/th?id=OIP.FC0e4XVtq4_ZVUcWoinSRwHaEo&pid=Api&P=0&h=180'/>
     <img src='https://tse3.mm.bing.net/th?id=OIP.FC0e4XVtq4_ZVUcWoinSRwHaEo&pid=Api&P=0&h=180'/>
     <img src='https://tse3.mm.bing.net/th?id=OIP.FC0e4XVtq4_ZVUcWoinSRwHaEo&pid=Api&P=0&h=180'/>
     <img src='https://tse3.mm.bing.net/th?id=OIP.FC0e4XVtq4_ZVUcWoinSRwHaEo&pid=Api&P=0&h=180'/>
     <img src='https://tse3.mm.bing.net/th?id=OIP.FC0e4XVtq4_ZVUcWoinSRwHaEo&pid=Api&P=0&h=180'/>
     <img src='https://tse3.mm.bing.net/th?id=OIP.FC0e4XVtq4_ZVUcWoinSRwHaEo&pid=Api&P=0&h=180'/>
     <img src='https://tse3.mm.bing.net/th?id=OIP.FC0e4XVtq4_ZVUcWoinSRwHaEo&pid=Api&P=0&h=180'/>
     <img src='https://tse3.mm.bing.net/th?id=OIP.FC0e4XVtq4_ZVUcWoinSRwHaEo&pid=Api&P=0&h=180'/>
     <img src='https://tse3.mm.bing.net/th?id=OIP.FC0e4XVtq4_ZVUcWoinSRwHaEo&pid=Api&P=0&h=180'/>
     <img src='https://tse3.mm.bing.net/th?id=OIP.FC0e4XVtq4_ZVUcWoinSRwHaEo&pid=Api&P=0&h=180'/>
    </div>
  )
}

export default Profile
