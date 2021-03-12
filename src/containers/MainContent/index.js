import React from 'react';
// styles
import './styles.css';

const MainContent = ({ children }) => {
  return (
    <div className="main-content">
      <header>
        <div className="header__background" />
        <div className="header__container">
          <div className="card header__info">
            Header Content
          </div>
          <div className="card header__cart">
            Cart
          </div>
        </div>
      </header>
      <main className="container-sm">
        {children}
      </main>
    </div>
  );
}

export default MainContent;
