import { createContext, useContext } from "react";


const TodoContext=createContext({
    Todolist:[
        {
         index:1,
         work:"some work",
         done:false
        }
    ],
    setTodolist:()=>{},
})


export const TodoConProvider=TodoContext.Provider;

export default function useTodo(){
    return useContext(TodoContext)
}