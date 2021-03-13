import React from 'react';
// icons
import { FiMinimize2 } from 'react-icons/fi';
// styles
import './styles.css';

const Card = (props) => {
  const {
    collapsed,
    icon: Icon,
    onCollapsedClick,
    className,
    children
  } = props;

  return (
    <div className={!collapsed ? `card ${className}` : 'card--invisible'}>
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
}

export default Card;
