/** Libraries */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/** Stylesheets */
import './Checkbox.scss';

const Checkbox = ({ label, value, onChange }) => {
  return (
    <label className="labelHolder">
      <input
        className={'checkboxHolder'}
        type="checkbox"
        checked={value}
        onChange={onChange}
      />
      <span className={cx(value && 'checkedLabel')}>{label}</span>
    </label>
  );
};

Checkbox.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
