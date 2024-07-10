import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'
import NotFound from '../NotFound'

function Users() {
  const {userid}=useParams()
  const data=useLoaderData()
  const [error, setError]=useState(null)
  
  useEffect(()=>{
    if(data.error){
      setError(data.error);
    }
  },[data])

  if(error){return <NotFound/>;}

  return (
    <div className='bg-zinc-900 text-white mt-16'
     style={{minHeight:'calc(100vh - 8rem)'}} 
     >
      <div>
        User:{userid}
        <br/>
        Chess Rating: {data.chess_rapid?.last?.rating || 'No Rating'}
      </div>
    </div>
  )
}

export default Users

export const chessPlayerInfo = async ({params})=>{
    const firebaseapi='apikey001';
    const url = `https://api.chess.com/pub/player/${params.userid}/stats`;
    try{
    const response=await fetch(url);
    if(!response.ok){
      throw new Error('404 Page Error');
    }
    const data=await response.json();
    const blitzRating = data.chess_blitz ? data.chess_blitz.last.rating : 'No blitz rating available';
    const rapidRating = data.chess_rapid ? data.chess_rapid.last.rating : 'No rapid rating available';
    const bulletRating = data.chess_bullet ? data.chess_bullet.last.rating : 'No bullet rating available';
    
    console.log('Blitz Rating:', blitzRating);
    console.log('Rapid Rating:', rapidRating);
    console.log('Bullet Rating:', bulletRating);
    return data
    }
    catch(error){
      return {error:error.message};
    }
}