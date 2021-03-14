import React, { useState } from 'react';
// components
import { Navbar, Card } from '../../components';
// icons
import { RiShoppingCartLine } from 'react-icons/ri';
// styles
import './styles.css';

const MainContent = ({ children, headerContent: HeaderContent }) => {
  const [cartCollapsed, setCartCollapsed] = useState(false);

  return (
    <div className="main-content">
      <header>
        <div className="header__background" />
        <Navbar />
        <div className="header__container">
          <Card className="header__content">
            <HeaderContent />
          </Card>
          <Card
            icon={RiShoppingCartLine}
            className="header__cart"
            collapsed={cartCollapsed}
            onCollapsedClick={setCartCollapsed}
          >
            <div className="empty-cart">
              <RiShoppingCartLine />
              <p>Não há itens no carrinho</p>
            </div>
          </Card>
        </div>
      </header>
      <main className={!cartCollapsed ? 'container-sm' : 'container'}>
        {children}
      </main>
    </div>
  );
}

export default MainContent;
