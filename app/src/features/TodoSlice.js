import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name : "todo",
    initialState : {
        todos: [
            { id: 1, name: "todo1" },
            { id: 2, name: "todo2" }
        ],
    },
    reducers: {
        addTodo: (state, action) => {
            // const todo = {id: Date.now(), name: action.payload } 
            // above todo can also be directly pushed in state i.e state.todos.push(todo)

            state.todos.push({id: Date.now(), name: action.payload})
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        }
}})

export const {addTodo, deleteTodo} = TodoSlice.actions

export default TodoSlice.reducer