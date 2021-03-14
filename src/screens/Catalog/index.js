import React from 'react';
// components
import { Categories } from '../../components';
// containers
import { MainContent } from '../../containers';
// styles
import './styles.css';
// mocks
import categories from '../../mocks/categories';

const Catalog = () => {
  return (
    <MainContent
      headerContent={() => <Categories items={categories} />}
    >
      Cardápio
    </MainContent>
  );
}

export default Catalog;
