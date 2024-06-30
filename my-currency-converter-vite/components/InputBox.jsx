import React, {useId} from 'react'

function InputBox(
    label,
    amount,
    selectCurrency="usd",
    onCurrencyChange,
    onAmountChange,
    amountdisabled=false,
    currencydisabled=false,
    currencyOptions=[],
    className=""
) {
   const amountInputId=useId()

  return (
    <div className={`flex bg-gray-300 text-black px-1 text-sm rounded-lg 
      ${className}`}>
      <div className='w-1/2'>
        <label 
        htmlFor={amountInputId}
        className='text-black/40 mb-2 inline-block'>
            {label}
        </label>
        <input 
        id={amountInputId} 
        className='outline-none w-full 
        bg-transparent py-1.5'
        type='number'
        placeholder="Amount"
        value={amount}
        disabled={amountdisabled}
        onChange={(e)=>{onAmountChange && onAmountChange(Number(e.target.value))}}
        />
      </div>
      <div className='w-1/2 flex flex-wrap 
      justify-end text-right'>
        <p className='text-black/40 mb-2 
        w-full'>Currency Type</p>
        <select 
        className='rounded-lg px-1 py1 
        bg-gray-100 cursor-pointer 
        outline-none'
        value={selectCurrency}
        onChange={(e)=>{onCurrencyChange && onCurrencyChange(e.target.value)}}
        disabled={currencydisabled}
        >

           {currencyOptions.map((currency)=>{
            <option key={currency} value={currency}>
                {currency}
            </option>
           })}

        </select>
      </div>
    </div>
  )
}

export default InputBox
