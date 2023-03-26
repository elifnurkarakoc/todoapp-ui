/** Libraries */
import React from 'react';
import PropTypes from 'prop-types';

/** Components */
import Checkbox from '../Checkbox/Checkbox';
import DeleteIcon from '../svg/DeleteIcon';

/** Stylesheets */
import './TodoItem.scss';

const TodoItem = ({ todo, onChange, onDeleteClick }) => {
  const handleChange = () => {
    if (onChange) {
      onChange({ ...todo, completed: !todo?.completed });
    }
  };

  const handleClick = () => {
    if (onDeleteClick) {
      onDeleteClick({ id: todo?.id });
    }
  };

  return (
    <li className="todoItemHolder">
      <Checkbox
        label={todo?.name}
        value={todo?.completed}
        onChange={handleChange}
      />
      <div onClick={handleClick} className="deleteIconHolder">
        <DeleteIcon />
      </div>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape().isRequired,
  onChange: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default TodoItem;
