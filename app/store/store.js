import { configureStore } from '@reduxjs/toolkit';
import todoReducer from 'Store/slicers/todosSlice';

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});
