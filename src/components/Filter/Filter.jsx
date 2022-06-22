import PropTypes from 'prop-types';
import React from 'react';
import s from './Filter.module.css';

const Filter = ({ inputValue, onChange }) => (
  <label className={s.label}>
    Find contacts by name
    <input
      className={s.input}
      type="text"
      name="filter"
      value={inputValue}
      onChange={onChange}
    />
  </label>
);

Filter.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
