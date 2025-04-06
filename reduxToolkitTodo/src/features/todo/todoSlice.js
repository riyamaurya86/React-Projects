//2.creating Slices(reducers)
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id:1, text: "Hello Riya"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{                      //reducers contains properties aur functions
         addTodo:(state, action) => {    //properties has function n this func always has state and action
            const todo ={
                id:nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
         },
         removeTodo:(state, action)=>{
            state.todos= state.todos.filter((todo)=> todo.id !== action.payload)
         },
    }
})

//3.Two parts me export hota h reducer 1)individual 2)all
export const {addTodo, removeTodo}= todoSlice.actions

//3.2)Export all reducers for store to update values
export default todoSlice.reducer