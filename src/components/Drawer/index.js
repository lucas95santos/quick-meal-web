import React, { useEffect, useContext } from 'react';
// styles
import './styles.css';
// context
import { Context } from '../../contexts/global';

const Drawer = () => {
  const context = useContext(Context);

  useEffect(() => {
    document.body.style.overflowY = context.showDrawer ? 'hidden' : 'auto';
  }, [context.showDrawer]);

  return (
    <div className={`drawer ${context.showDrawer && 'drawer--visible'}`}>
      <div className="drawer__content">
        <p>content</p>
      </div>
    </div>
  );
}

export default Drawer;
