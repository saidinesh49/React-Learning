import { useState, useEffect } from 'react'

function useCurrencyInfo(currency){
  const [data, setData]=useState({});
  let tpcurrency="";
  tpcurrency=currency.toUpperCase();
  useEffect(()=>{
  fetch(`https://api.exchangerate-api.com/v4/latest/${tpcurrency}`)
  .then((res)=>{res})
  .then(setData(res[6]))
  .catch((e)=>{console.log(e)})
  },[currency])
  console.log(data);
  return data;
}

export default useCurrencyInfo;