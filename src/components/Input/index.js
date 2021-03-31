import React, { memo, useState } from 'react';
// styles
import './styles.css';

const Input = memo((props) => {
  const { className, icon: Icon, value, onTextChange, ...rest } = props;
  const [focused, setFocused] = useState(false);

  return (
    <div className={`input-container ${className} ${focused && 'input-shadow'}`}>
      <div className="input-icon">
        {Icon && <Icon />}
      </div>
      <input
        {...rest}
        value={value}
        onChange={onTextChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
});

export default Input;
