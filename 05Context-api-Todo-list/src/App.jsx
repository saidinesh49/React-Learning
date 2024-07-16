import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { TodoConProvider } from './components/Contexts/TodoContext';
import Welcome from './Welcome';
import TodoItem from './components/TodoItem';

function App() {
  const [work, setWork] = useState('');
  const [Todolist, setTodolist] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter' && work.trim() !== '') {
        addItem();
      }
    };

    document.addEventListener('keyup', handleKeyPress);

    return () => {
      document.removeEventListener('keyup', handleKeyPress);
    };
  }, [work]);

  const addItem = () => {
    if (work.trim() !== '') {
      const newItem = {
        index: Todolist.length > 0 ? Todolist[Todolist.length - 1].index + 1 : 1, // Incremental index logic
        work: work,
        done: false
      };
      setTodolist([...Todolist, newItem]);
      setWork('');
      inputRef.current.focus();
    }
  };

  function removeitem(index){
    const newlist=Todolist.filter((item)=>item.index!==index)
    setTodolist(newlist)
  }

  return (
    <div className='flex flex-col items-center space-y-3 bg-black h-screen'>
      <TodoConProvider value={{ Todolist, setTodolist }}>
        <div className='flex flex-row items-center space-x-0 mt-8'>
          <input
            type='text'
            value={work}
            placeholder='Enter the work'
            onChange={(e) => setWork(e.target.value)}
            className='w-1rem outline-none bg-gray-500 px-8 rounded-l'
            ref={inputRef}
          />
          <button onClick={addItem} className='bg-violet-600 h-full px-3 transition-transform rounded-r hover:bg-violet-700'>Add</button>
        </div>
        {Todolist.map((todo) => (
          <TodoItem key={todo.index} todo={todo} removeitem={removeitem}/>
        ))}
        <Welcome />
      </TodoConProvider>
    </div>
  );
}

export default App;
