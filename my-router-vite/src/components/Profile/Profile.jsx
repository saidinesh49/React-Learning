import React, { useEffect, useState, useRef, useCallback } from 'react';
import ContentLoader from 'react-content-loader'
import '../styling.css';

function Profile() {
  const [isOnline,setOnline]=useState(true)
  const [items, setItems] = useState(Array.from({ length: 0}));
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true); // To check if there are more items to load
  const observer = useRef();

  const loadMoreItems = useCallback(() => {
    if(!isOnline || !navigator.onLine) return;
    if (isLoading) return; // Avoid multiple loads

    setIsLoading(true);
    console.log('Adding items :',isOnline);
    setTimeout(() => { // Simulating an API call
      setItems(prevItems => [
        ...prevItems,
        ...Array.from({ length: 1 }), // Add more items
      ]);
      setIsLoading(false);
      console.log("Number of items loaded on profile: ",items.length);
    }, 1000);
  }, [isLoading,isOnline]);

  const lastItemRef = useCallback(node => {
    if (isLoading) return; // Avoid observing if already loading

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        console.log("entered lasItem and laodmore called :",isOnline)
        loadMoreItems();
      }
    });

    if (node) observer.current.observe(node);
  }, [isLoading, loadMoreItems, hasMore, isOnline]);

  useEffect(() => {
    // Handle online/offline status
    const handleOnlineStatusChange = () => {
      if (!navigator.onLine) {
        setOnline(false)
        console.log('Offline');
      } else {
        setOnline(true)
        console.log('Online');
      }
    };

    handleOnlineStatusChange();
    window.addEventListener('online', handleOnlineStatusChange);
    window.addEventListener('offline', handleOnlineStatusChange);

    return () => {
      window.removeEventListener('online', handleOnlineStatusChange);
      window.removeEventListener('offline', handleOnlineStatusChange);
    };
  }, []);

  return (
    <div
      className='flex flex-col items-center bg-zinc-900 text-amber-500 mt-16 justify-stretch'
      style={{ minHeight: 'calc(100vh - 8rem)' }}
    >
      <div>This is Profile page</div>
      <ul>
        {items.length===0?(loadMoreItems()):(items.map((_, index) => (
          <li
            key={index}
            ref={index === items.length - 1 ? lastItemRef : null}
          >
            <div>
              <p className='text-white font-bold'>{index+1}</p>
              <img
                src='https://tse3.mm.bing.net/th?id=OIP.FC0e4XVtq4_ZVUcWoinSRwHaEo&pid=Api&P=0&h=180'
                alt='Profile' 
                className='min-w-full rounded-md'
              />
            </div>
          </li>
        )))}
      </ul>
      {(isLoading || !isOnline) && (  <ContentLoader 
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#919191"
    foregroundColor="#c9c5c5"
    className='mb-8 rounded'
  >
    <rect x="20" y="60" rx="2" ry="2" width="400" height="400" />

  </ContentLoader>
)}
    </div>
  );
}

export default Profile;
