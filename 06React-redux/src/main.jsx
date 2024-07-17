import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/Store.js'
import Todoitem from './components/Todoitem.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <div className='h-screen bg-gray-700'>
    <App />
    </div>
  </Provider>,
)
