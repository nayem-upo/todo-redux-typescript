import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TTodo = {
    id: string;
    task: string;
    description: string;
    isCompleted?: boolean;
}

type TInitialState = {
    todos: TTodo[]
}

const initialState: TInitialState = {
    todos: []
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TTodo>) => {
            state.todos.push({ ...action.payload, isCompleted: false });
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        toggleCompleteTodo: (state, action: PayloadAction<TTodo>) => {
            const updatedTodos = state.todos.map(todo =>
                todo.id === action.payload.id ? { ...todo, isCompleted: !todo.isCompleted } : todo
            );

            state.todos = [...updatedTodos.filter(todo => !todo.isCompleted), ...updatedTodos.filter(todo => todo.isCompleted)];
        },
    },
});


export const { addTodo, removeTodo, toggleCompleteTodo } = todoSlice.actions;

export default todoSlice.reducer;