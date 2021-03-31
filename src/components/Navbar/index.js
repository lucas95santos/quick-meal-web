import React, { useState, useCallback, memo } from 'react';
import { useHistory } from 'react-router-dom';
// styles
import './styles.css';
// images
import logo from '../../assets/images/logo_full.png';

const Navbar = memo(() => {
  const [userIsLogged, setUserIsLogged] = useState(false);
  const history = useHistory();

  const goTo = useCallback((route) => {
    history.push(`/${route}`);
  }, [history]);

  return (
    <nav>
      <div className="nav__container">
        <div className="nav__logo">
          <img
            src={logo}
            alt="logo" border="0"
          />
        </div>
        <ul className="nav__menu">
          <li onClick={() => goTo('')}>Cardápio</li>
          <li onClick={() => goTo('orders')}>Meus pedidos</li>
          <li onClick={() => goTo('profile')} className={!userIsLogged && 'login-type'}>
            {userIsLogged ? 'Minha conta' : 'Entrar'}
          </li>
        </ul>
      </div>
    </nav>
  );
});

export default Navbar;
