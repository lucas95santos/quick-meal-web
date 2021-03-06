import React, { memo } from 'react';
// icons
import { FiMinimize2 } from 'react-icons/fi';
// styles
import './styles.css';

const Card = memo((props) => {
  const {
    collapsed,
    icon: Icon,
    onCollapsedClick,
    className,
    hovered,
    children,
    ...rest
  } = props;

  return (
    <div
      className={!collapsed ? `card ${className} ${hovered && 'card-shadow'}` : 'card--invisible'}
      {...rest}
    >
      {!collapsed && children}
      {onCollapsedClick && (
        <div
          className={`card-collapse ${collapsed && 'card-collapse--invisible'}`}
          onClick={onCollapsedClick && (() => onCollapsedClick(!collapsed))}
        >
          {!collapsed ? <FiMinimize2 /> : <Icon />}
        </div>
      )}
    </div>
  );
});

export default Card;
