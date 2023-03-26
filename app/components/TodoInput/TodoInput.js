/** Libraries */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

/** Components */
import Button from '../Button/Button';
import Input from '../Input/Input';

/** Stylesheets */
import './TodoInput.scss';

const TodoInput = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onSubmit) {
      onSubmit({ inputValue });
      setInputValue('');
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  return (
    <form onSubmit={handleSubmit} className="formHolder">
      <Input
        type="text"
        placeholder="New Todo"
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />
      <Button text="Add" type="submit" />
    </form>
  );
};

TodoInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default TodoInput;
