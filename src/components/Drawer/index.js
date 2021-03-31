import React, { useEffect, useContext, useState, useCallback, memo } from 'react';
// context
import { Context } from '../../contexts/global';
// icons
import { MdClose } from 'react-icons/md';
// styles
import './styles.css';

const Drawer = memo(() => {
  const context = useContext(Context);
  const [animation, setAnimation] = useState('content--in');

  const closeDrawer = useCallback(() => {
    setAnimation('content--out');

    setTimeout(() => {
      context.onCloseDrawer();
      setAnimation('content--in');
    }, 500);
  }, [context]);

  const drawerContentHadClick = useCallback((element, click) => {
    const elementDimensions = element.getBoundingClientRect();

    const horizontal = {
      init: elementDimensions.left,
      end: elementDimensions.left + elementDimensions.width
    }

    const vertical = {
      init: elementDimensions.top,
      end: elementDimensions.top + elementDimensions.height
    }

    const hadClickHorizontal = click.x >= horizontal.init && click.x <= horizontal.end;
    const hadClickVertical = click.y >= vertical.init && click.y <= vertical.end;

    return hadClickHorizontal && hadClickVertical;
  }, []);

  const handleClickOut = useCallback((event) => {
    const drawerContentEl = document.getElementById('drawer__content');

    if (drawerContentEl) {
      if (!drawerContentHadClick(drawerContentEl, event)) {
        closeDrawer();
      }
    }
  }, [closeDrawer, drawerContentHadClick]);

  useEffect(() => {
    document.body.style.overflowY = context.showDrawer ? 'hidden' : 'auto';

    if (context.showDrawer) document.addEventListener('click', handleClickOut, false);

    return () => {
      document.removeEventListener('click', handleClickOut, false);
    }
  }, [context.showDrawer, handleClickOut]);

  return (
    <div className={`drawer ${context.showDrawer ? 'drawer--on' : 'drawer--off'}`}>
      <div className={`drawer__content ${animation}`} id="drawer__content">
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
});

export default Drawer;
