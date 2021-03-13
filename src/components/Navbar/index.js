import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// styles
import './styles.css';

const Navbar = () => {
  const [userIsLogged, setUserIsLogged] = useState(false);
  const history = useHistory();

  const goTo = (route) => {
    history.push(`/${route}`);
  }

  return (
    <nav>
      <div className="nav__container">
        <div className="nav__logo">
          <img
            src="https://fontmeme.com/permalink/210313/e413a3891aff219a5ef900ac46fb1818.png"
            alt="fonte-de-guerra-nas-estrelas" border="0"
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
}

export default Navbar;
