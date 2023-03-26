/** Dependencies */
import BaseService from './BaseService';

const baseService = new BaseService({
  baseURL: window?.TODOConfig?.API_URL,
});

class TodoService {
  getTodos = () => {
    return baseService.get('/todos');
  };

  createTodo = (payload) => {
    return baseService.post('/todos', payload);
  };

  deleteTodo = ({ id }) => {
    return baseService.delete(`/todos/${id}`);
  };

  updateTodo = ({ id, payload }) => {
    return baseService.put(`/todos/${id}`, payload);
  };
}

export default new TodoService();
