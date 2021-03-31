import React, { useEffect, useState, useContext, useCallback, memo } from 'react';
import CatalogApi from '../../api/CatalogApi';
// context
import { Context } from '../../contexts/global';
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

const Catalog = memo(() => {
  const context = useContext(Context);

  const [catalog, setCatalog] = useState([]);
  const [displayedCatalog, setDisplayedCatalog] = useState([]);
  const [selectedCatalog, setSelectedCatalog] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [inputSearchValue, setInputSearchValue] = useState('');

  useEffect(() => {
    setCatalog(CatalogApi.mountCatalog(categories, products));
    setDisplayedCatalog(CatalogApi.mountCatalog(categories, products));
  }, []);

  const onCategorySelect = useCallback((categoryId) => {
    const selected = catalog.filter(category => category.id === categoryId);
    setSelectedCatalog(selected);
    setDisplayedCatalog(selected);
    setSelectedCategory(categoryId);
    setInputSearchValue('');
  }, [catalog]);

  const onShowCatalog = useCallback(() => {
    setDisplayedCatalog(catalog);
    setSelectedCategory('');
    setInputSearchValue('');
  }, [catalog]);

  const searchTerm = useCallback((term) => {
    let results = [];
    const searchArray = selectedCategory !== '' ? selectedCatalog : catalog;

    searchArray.forEach(category => {
      const products = category.products.filter(product =>
        product.name.toLowerCase().includes(term.toLowerCase()) ||
        product.description.toLowerCase().includes(term.toLowerCase())
      );

      if (products.length > 0) {
        results.push(
          {
            ...category,
            products
          }
        )
      }
    });

    setTimeout(() => {
      if (term === '') {
        setDisplayedCatalog(searchArray);
      } else {
        setDisplayedCatalog(results);
      }
    }, 1000);
  }, [catalog, selectedCatalog, selectedCategory]);

  const onSearch = useCallback((event) => {
    setInputSearchValue(event.target.value);
    searchTerm(event.target.value);
  }, [searchTerm]);

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
        <div className="catalog__top">
          <Input
            icon={MdSearch}
            value={inputSearchValue}
            onTextChange={(event) => onSearch(event)}
          />
          {displayedCatalog.length < catalog.length && (
            <button
              className="show-catalog"
              onClick={onShowCatalog}
            >
              Mostrar todas
            </button>
          )}
        </div>
        {displayedCatalog.map(category => (
          <div className="catalog__categories" key={category.id}>
            <h2>{category.name}</h2>
            <div className="catalog__products">
              {category.products.map(product => (
                <Card
                  className="catalog__product"
                  hovered
                  key={product.id}
                  onClick={() => context.onShowDrawer(() => <p>{product.name}</p>)}
                >
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
});

export default Catalog;
