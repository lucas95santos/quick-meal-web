import React, { useEffect, useState } from 'react';
import CatalogApi from '../../api/CatalogApi';
// mocks
import { categories, products } from '../../mocks';
// components
import { Categories, Card, Input } from '../../components';
// containers
import { MainContent } from '../../containers';
// icons
import { MdSearch } from 'react-icons/md'
// styles
import './styles.css';

const Catalog = () => {
  const [catalog, setCatalog] = useState([]);
  const [displayedCatalog, setDisplayedCatalog] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    setCatalog(CatalogApi.mountCatalog(categories, products));
    setDisplayedCatalog(CatalogApi.mountCatalog(categories, products));
  }, []);

  const onCategorySelect = (categoryId) => {
    setDisplayedCatalog(catalog.filter(category => category.id === categoryId));
    setSelectedCategory(categoryId);
  }

  const onShowCatalog = () => {
    setDisplayedCatalog(catalog);
    setSelectedCategory('');
  }

  return (
    <MainContent
      headerContent={() => (
          <Categories
            items={categories}
            onCategorySelect={onCategorySelect}
            selectedCategory={selectedCategory}
          />
        )
      }
    >
      <div className="catalog">
        {displayedCatalog.length > 1 && <Input icon={MdSearch} />}
        {displayedCatalog.length === 1 && (
          <button
            className="show-catalog"
            onClick={onShowCatalog}
          >
            Mostrar todas
          </button>
        )}
        {displayedCatalog.map(category => (
          <div className="catalog__categories">
            <h2>{category.name}</h2>
            <div className="catalog__products">
              {category.products.map(product => (
                <Card className="catalog__product">
                  <h3>{product.name}</h3>
                  <span>{CatalogApi.formatPrice(product.price)}</span>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </MainContent>
  );
}

export default Catalog;
