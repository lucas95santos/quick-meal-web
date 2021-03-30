import React, { useEffect, useContext, useState } from 'react';
// context
import { Context } from '../../contexts/global';
// icons
import { MdClose } from 'react-icons/md';
// styles
import './styles.css';

const Drawer = () => {
  const context = useContext(Context);
  const [animation, setAnimation] = useState('content--in');

  useEffect(() => {
    document.body.style.overflowY = context.showDrawer ? 'hidden' : 'auto';
  }, [context.showDrawer]);

  const closeDrawer = () => {
    setAnimation('content--out');

    setTimeout(() => {
      context.onCloseDrawer();
      setAnimation('content--in');
    }, 500);
  }

  return (
    <div className={`drawer ${context.showDrawer ? 'drawer--on' : 'drawer--off'}`}>
      <div className={`drawer__content ${animation}`}>
        <div
          className="drawer__content__close-button"
          onClick={closeDrawer}
        >
          <MdClose />
        </div>
        {context.drawerContent}
      </div>
    </div>
  );
}

export default Drawer;