import React from 'react'
import { useParams } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'

function Users() {
  const {userid}=useParams()
  const data=useLoaderData()
  return (
    <>
      <div>
        User:{userid}
        <br/>
        Chess Rating: {data.chess_rapid.last.rating}
      </div>
    </>
  )
}

export default Users

export const chessPlayerInfo = async ({params})=>{
    const url = `https://api.chess.com/pub/player/${params.userid}/stats`;
    const response=await fetch(url);
    const data=await response.json();
    const blitzRating = data.chess_blitz ? data.chess_blitz.last.rating : 'No blitz rating available';
    const rapidRating = data.chess_rapid ? data.chess_rapid.last.rating : 'No rapid rating available';
    const bulletRating = data.chess_bullet ? data.chess_bullet.last.rating : 'No bullet rating available';
    
    console.log('Blitz Rating:', blitzRating);
    console.log('Rapid Rating:', rapidRating);
    console.log('Bullet Rating:', bulletRating);
    return data
}