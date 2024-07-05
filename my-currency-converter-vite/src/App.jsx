import { useState } from 'react';
import './App.css';
import './index.css';
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
    <div className="flex items-center justify-center min-h-screen bg-gray-300">
      <div
        className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full bg-cover bg-center"
        style={{
          backgroundImage: `url('https://tse3.mm.bing.net/th?id=OIP.gOC5rnSgGtqWkCw1Ugr-GgHaFc&pid=Api&P=0&h=180')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="flex flex-col font-semibold p-4 rounded-lg bg-white bg-opacity-80">
          <InputBox
            label={"From"}
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => {
              setFrom(currency);
            }}
            onAmountChange={(amount) => {
              if (amount < 0) return;
              setAmount(amount);
            }}
            selectCurrency={from}
          />
        </div>
        <div className="relative mt-4 flex justify-center">
          <button className="bg-violet-600 py-2 px-4 text-white font-bold rounded-md hover:bg-violet-800" onClick={swap}>
            Swap
          </button>
        </div>
        <div className="flex flex-col font-semibold p-4 rounded-lg bg-white bg-opacity-80 mt-4">
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
        <button onClick={convert} className="w-full mt-4 bg-indigo-600 transition-colors text-white py-2 rounded hover:bg-indigo-800">
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </div>
    </div>
  );
}

export default App;
