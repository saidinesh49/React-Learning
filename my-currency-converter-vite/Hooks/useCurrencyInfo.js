import { useState, useEffect } from 'react'

function useCurrencyInfo(currency){
  const [data, setData]=useState({});
  const tpcurrency=currency.toUpperCase();
  useEffect(()=>{
  fetch(`https://api.exchangerate-api.com/v4/latest/${tpcurrency}`)
  .then((res)=>{res.json()})
  .then(setData(res[6]))
  .catch((e)=>{console.log(e)})
  },[currency])
  console.log(data);
  return data;
}

export default useCurrencyInfo;