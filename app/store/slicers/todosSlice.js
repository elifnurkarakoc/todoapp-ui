import { createSlice } from '@reduxjs/toolkit';

import { getTodos, createTodo, deleteTodo, updateTodo } from '../api/TodoApi';

const initialState = {
  todos: [],
  todosLoading: false,
  todosFailure: null,
  todo: {},
  todoLoading: false,
  todoFailure: null,
  deleteTodo: {},
  deleteTodoLoading: false,
  deleteTodoFailure: null,
  updateTodo: {},
  updateTodoLoading: false,
  updateTodoFailure: null,
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  extraReducers: {
    [getTodos.fulfilled]: (state, action) => {
      state.todos = action?.payload?.todos;
      state.todosLoading = false;
    },
    [getTodos.pending]: (state, action) => {
      state.todosLoading = action?.isLoading;
    },
    [getTodos.rejected]: (state, action) => {
      state.todosFailure = action?.error;
      state.todosLoading = false;
    },
    [createTodo.fulfilled]: (state, action) => {
      state.todos = action?.payload?.todos;
      state.todoLoading = false;
    },
    [createTodo.pending]: (state, action) => {
      state.todoLoading = action?.isLoading;
    },
    [createTodo.rejected]: (state, action) => {
      state.todoFailure = action?.error;
      state.todoLoading = false;
    },
    [deleteTodo.fulfilled]: (state, action) => {
      state.todos = action?.payload?.todos;
      state.deleteTodoLoading = false;
    },
    [deleteTodo.pending]: (state, action) => {
      state.deleteTodoLoading = action?.isLoading;
    },
    [deleteTodo.rejected]: (state, action) => {
      state.deleteTodoFailure = action?.error;
      state.deleteTodoLoading = false;
    },
    [updateTodo.fulfilled]: (state, action) => {
      state.todos = action?.payload?.todos;
      state.updateTodoLoading = false;
    },
    [updateTodo.pending]: (state, action) => {
      state.updateTodoLoading = action?.isLoading;
    },
    [updateTodo.rejected]: (state, action) => {
      state.updateTodoFailure = action?.error;
      state.updateTodoLoading = false;
    },
  },
});

export default todosSlice.reducer;
