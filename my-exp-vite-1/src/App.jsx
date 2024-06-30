import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import './App.css'
import './index.css'
import Card from './Card';

const Usercontext=createContext();

function App() {
  const [length, setlength]=useState(8);
  const [numberAllowed, setNumber]=useState(false);
  const [charAllowed, setChar]=useState(false);

  const [password, setPassword]=useState("");
  
  const [copy, setCopy]=useState("Copy");

  const passRef=useRef(null);
  const CopyToClipboard=()=>{
    passRef.current?.select()
    // passRef.current?.setSelectionRange(0,Math.min(length,20));
    setCopy((prev)=>"✔ copied");
    window.navigator.clipboard.writeText(password);
  }
  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed)
       {str+='1234567890';}
    if(charAllowed)
       {str+='-/&*%@$_^';}
    for(let i=1;i<=length;i++) 
      {
       let index=Math.floor(Math.random() * str.length + 1);
       pass+=str.charAt(index);
      }
    setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword])

  useEffect(()=>{
    setCopy((prev)=>"Copy")
    passwordGenerator()
  },[length,numberAllowed,charAllowed,setlength,passwordGenerator])

  return (
    <div className='ml-20 mb-96'>
     <div className='shadow-md ml-96
     rounded-lg px-8 py-8 bg-gray-800 text-orange-500 justify-center'>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg
        overflow-hidden mb-4'>
            <input
            type='text'
            value={password}
            className='outline-none bg-white w-full mt-6 py-1 px-3 rounded-md'
            placeholder='Generated password'
            readOnly
            ref={passRef}
            />
            <button onClick={CopyToClipboard}
            className='outline-none bg-blue-400 text-white mt-6 py-1
             px-3 shrink-0'>
             {copy}
            </button>
        </div>
        <div className='flex text-5m gap-x-5'>
          <div className='flex items-center gap-x-1'>
            <input
            type='range'
            min={6}
            max={100}
            value={length} 
            className='cursor-pointer'
            onChange={(e)=>{setlength(e.target.value)}}
            />
            <lable>Length: {length} </lable>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
            type='checkbox'
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={()=>{
              setNumber((prev)=>!prev)
            }}
            />
            <label>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
            type='checkbox'
            defaultChecked={charAllowed}
            id="charInput"
            onChange={()=>{
              setChar((prev)=>!prev)
            }}
            />
            <label>Special Char</label>
          </div>
        </div>
     </div>
    </div>
  );
}

export default App;