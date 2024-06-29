import React from 'react'
import './App.css'
import './index.css'
import Card from './Card';

function App() {
  function addcard(){
    return (
      <Card/>
    );
  }
  return (
    <>
    <div className="bg-amber-400 text-slate-950 font-semibold cursor-pointer hover:font-bold hover:bg-lime-500 hover:drop-shadow-[0_3px_5px_white] rounded">
      <h1 className="py-3 px-10 text-2xl">Hello, Tailwind CSS with Vite !</h1>
    </div>
    <button onClick={addcard} className='m-5'>click me!</button>
    </>
  );
}

export default App;