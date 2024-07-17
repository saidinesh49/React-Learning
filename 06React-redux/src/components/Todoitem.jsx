import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removetodo, updatetodo } from '../features/todo/todoSlice';

function Todoitem() {
    const todos = useSelector(state => state.todo.todos);
    const dispatch = useDispatch();
    const inputRefs = useRef([]);

    // Function to handle inline editing of todo text
    const handleInputBox = (index) => {
        if (inputRefs.current[index]) {
            const readOnly = inputRefs.current[index].hasAttribute('readOnly');
            if (readOnly) {
                inputRefs.current[index].removeAttribute('readOnly');
                inputRefs.current[index].focus();
            } else {
                inputRefs.current[index].setAttribute('readOnly', true);
                inputRefs.current[index].blur();
            }
        }
    };

    // Function to handle toggling of completion status
    const handleCheckbox = (todo) => {
        dispatch(updatetodo({
            id: todo.id,
            completed: !todo.completed,
        }));
    };

    return (
        <>
            {todos.map((todo) => {
               if(todo.text=='') return;
               return (
                <div key={todo.id} className='flex flex-row bg-yellow-400 pl-2 rounded' style={{ background: todo.completed ? "green" : ""}}>
                    <input 
                        type='checkbox' 
                        onChange={() => handleCheckbox(todo)}
                        checked={todo.completed===true}
                    />
                    <input 
                        className='bg-yellow-400' 
                        type='text' 
                        value={todo.text} 
                        onChange={(e) => dispatch(updatetodo({ id: todo.id, text: e.target.value }))} // Update todo text on change
                        ref={el => inputRefs.current[todo.id] = el} // Store the ref for each input
                        style={{ background: todo.completed ? "green" : "", textDecoration: todo.completed ? "line-through" : "" }}
                        readOnly
                    />
                    <button onClick={() => handleInputBox(todo.id)} className='bg-violet-600 px-2 text-yellow-300'>Edit</button>
                    <button onClick={() => dispatch(removetodo(todo.id))} className='bg-red-700 px-2 text-white'>Delete</button>
                </div>
            )})}
        </>
    );
}

export default Todoitem;
