import React, { useState } from 'react';
import { InputStyles } from './Input.Styles';

export default function Input({
  className,
  label,
  type,
  placeholder,
  icon,
  value,
  onChange,
}) {
  const [inputValue, setInputValue] = useState(value || '');
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <InputStyles className={className}>
      <label>{label}</label>
      <div className={`inputContainer ${isFocused ? 'focused' : ''}`}>
        <span>
          <img src={icon} alt='icon' />
        </span>
        <input
          type={type}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleInputChange}
          value={inputValue}
        />
      </div>
    </InputStyles>
  );
}
