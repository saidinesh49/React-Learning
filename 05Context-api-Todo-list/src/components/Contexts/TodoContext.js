import { createContext, useContext } from "react";


const TodoContext=createContext({
    Todolist:[],
    setTodolist:()=>{},
})


export const TodoConProvider=TodoContext.Provider;

export default function useTodo(){
    return useContext(TodoContext)
}