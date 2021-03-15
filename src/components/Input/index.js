import React, { useState } from 'react';
// styles
import './styles.css';

const Input = (props) => {
  const { className, icon: Icon, ...rest } = props;
  const [focused, setFocused] = useState(false);

  return (
    <div className={`input-container ${className} ${focused && 'input-shadow'}`}>
      <div className="input-icon">
        {Icon && <Icon />}
      </div>
      <input
        {...rest}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
}

export default Input;
