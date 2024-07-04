import { useState, useEffect } from 'react'

function useCurrencyInfo(currency){
  const [data, setData]=useState({});
  useEffect(()=>{
  fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
  .then((res)=>res.json())
  .then((res)=>setData(res.rates))
  .catch((e)=>{console.log(e)})
  },[currency])
  console.log("This is data: ",data);
  return data;
}

export default useCurrencyInfo;