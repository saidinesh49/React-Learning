import { useState } from 'react';
import './App.css';
import { InputBox } from '../components/Index';
import useCurrencyInfo from '../Hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('INR');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    if (currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    } else {
      setConvertedAmount(0);
    }
  };

  return (
    <>
      <div
        className='w-full justify-center flex flex-wrap items-center bg-cover bg-no-repeat'
        style={{
          backgroundImage: `url('https://tse3.mm.bing.net/th?id=OIP.gOC5rnSgGtqWkCw1Ugr-GgHaFc&pid=Api&P=0&h=180')`,
        }}
      >
        <InputBox
          label={"From"}
          amount={amount}
          currencyOptions={options}
          onCurrencyChange={(currency) => {
            setFrom(currency);
          }}
          onAmountChange={(amount) => {
            setAmount(amount);
          }}
          selectCurrency={from}
        />
      </div>
      <div className='relative w-full h-0.5'>
        <button type='button' className='outline-none bg-blue-400 p-1' onClick={swap}>
          Swap
        </button>
      </div>
      <div>
        <InputBox
          label={"To"}
          amount={convertedAmount}
          currencyOptions={options}
          onCurrencyChange={(currency) => {
            setTo(currency);
          }}
          selectCurrency={to}
          amountDisabled
        />
      </div>
      <button type='submit' onClick={convert}>
        Convert {from.toUpperCase()} to {to.toUpperCase()}
      </button>
    </>
  );
}

export default App;
