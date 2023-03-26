/** Libraries */
import React, { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/** Components */
import Layout from 'Components/Layout/Layout';

/** Store */
import { getTodos, createTodo } from 'Store/api';

/** Stylesheets */
import './Dashboard.scss';
import { deleteTodo, updateTodo } from 'App/store/api';

/** Components */
const TodoList = lazy(() => import('Components/TodoList/TodoList'));
const TodoInput = lazy(() => import('Components/TodoInput/TodoInput'));

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  const { todos } = useSelector((state) => state?.todos);

  const handleSubmit = ({ inputValue }) => {
    if (inputValue?.trim().length > 0) {
      dispatch(createTodo({ name: inputValue }));
    }
  };

  const handleChange = ({ completed, id }) => {
    dispatch(updateTodo({ id, payload: { completed } }));
  };

  const handleDeleteClick = ({ id }) => {
    dispatch(deleteTodo({ id }));
  };

  return (
    <Layout>
      <Suspense fallback={<div />}>
        <TodoInput onSubmit={handleSubmit} />
      </Suspense>
      <Suspense fallback={<div />}>
        <TodoList
          todos={todos}
          onChange={handleChange}
          onDeleteClick={handleDeleteClick}
        />
      </Suspense>
    </Layout>
  );
};

export default Dashboard;
