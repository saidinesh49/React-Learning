import { useState } from 'react'
import './App.css'
import { InputBox } from '../components/Index'
import useCurrencyInfo from '../Hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount]=useState(0)
  const [from, setFrom]=useState("usd");
  const [to, setTo]=useState("inr");
  const [convertedAmount, setConvertedAmount]=useState(0)

  const currencyInfo=useCurrencyInfo(from)

  const options=Object.keys(currencyInfo)

  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convertAmount=()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }

  return (
    <>
     <InputBox 
     label={label}
     amount={amount}
     onCurrencyChange={onCurrencyChange}
     onAmountChange={onAmountChange}
     currencyOptions={currencyOptions}
     />
    </>
  )
}

export default App
