/** Libraries */
import React from 'react';
import PropTypes from 'prop-types';

/** Components */
import TodoItem from 'Components/TodoItem/TodoItem';

/** Stylesheets */
import './TodoList.scss';

const TodoList = ({ todos, onChange, onDeleteClick }) => {
  return (
    <ul className="todoListholder">
      {todos?.map(todo => (
        <TodoItem
          key={todo?.name}
          todo={todo}
          onChange={onChange}
          onDeleteClick={onDeleteClick}
        />
      ))}
      {todos?.length === 0 && <p className="notExistHolder">Not exist</p>}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onChange: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default TodoList;
