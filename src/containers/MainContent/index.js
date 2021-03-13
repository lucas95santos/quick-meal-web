import React, { useState } from 'react';
// icons
import { RiShoppingCartLine } from 'react-icons/ri';
// styles
import './styles.css';

const MainContent = ({ children }) => {
  const [cartCollapsed, setCartCollapsed] = useState(false);

  return (
    <div className="main-content">
      <header>
        <div className="header__background" />
        <div className="header__container">
          <div className="card header__info">
            Header Content
          </div>
          <div className={`${!cartCollapsed ? 'card header__cart' : 'card--invisible'}`}>
            <div
              className={`card-collapse ${cartCollapsed && 'card-collapse--invisible'}`}
              onClick={() => setCartCollapsed(!cartCollapsed)}
            >
              <RiShoppingCartLine />
            </div>
          </div>
        </div>
      </header>
      <main className={!cartCollapsed ? 'container-sm' : 'container'}>
        {children}
      </main>
    </div>
  );
}

export default MainContent;
