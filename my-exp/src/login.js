import React, { useState }  from 'react';

function Login() {
  const [eye, setEye] = useState(true);
  const [password, setPassword] = useState('');

  return (
    <>
      <input 
        type={eye?'password':'type'} 
        value={password} 
        onChange={(e) => {setPassword(e.target.value);}}
        placeholder="Password"
      />
      <button onClick={()=>setEye(!eye)}> Eye </button>
    </>
  );
}

export default Login;