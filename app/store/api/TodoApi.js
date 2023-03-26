/** Dependencies */
import TodoService from 'Services/TodoService';

/** Libraries */
import { createAsyncThunk } from '@reduxjs/toolkit';

class TodoApi {
  static getTodos = createAsyncThunk('todos/todos', async () => {
    const response = await TodoService?.getTodos();
    return response?.data;
  });

  static createTodo = createAsyncThunk('todos/todo', async (payload) => {
    const response = await TodoService?.createTodo(payload);
    return response?.data;
  });

  static deleteTodo = createAsyncThunk('todos/deleteTodo', async (payload) => {
    const response = await TodoService?.deleteTodo(payload);
    return response?.data;
  });

  static updateTodo = createAsyncThunk('todos/updateTodo', async (payload) => {
    const response = await TodoService?.updateTodo(payload);
    return response?.data;
  });
}

export const { getTodos, createTodo, deleteTodo, updateTodo } = TodoApi;
