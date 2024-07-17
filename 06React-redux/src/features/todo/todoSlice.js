import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState={
    todos:[{id:1, text:"", completed:false}]
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
      addtodo:(state,action)=>{
        const todo={id: nanoid(), text: action.payload, completed:false}
        state.todos.push(todo)
      },

      removetodo:(state,action)=>{
        state.todos=state.todos.filter((todo)=>todo.id!=action.payload)
      },

      updatetodo:(state,action)=>{
        state.todos = state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
              return {
                  ...todo,
                  text: action.payload.text ?? todo.text,
                  completed: action.payload.completed ?? todo.completed
              };
          }
          return todo; // Return the unchanged todo if the id doesn't match
        });
      },
    }
})

export const {addtodo,removetodo,updatetodo}=todoSlice.actions;

export default todoSlice.reducer;