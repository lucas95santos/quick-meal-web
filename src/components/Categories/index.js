import React from 'react';
// styles
import './styles.css';

const Categories = ({ items, onCategorySelect, selectedCategory }) => {
  return (
    <div className="categories">
      {(items || []).map(item => (
        <div
          className="categories__item"
          key={item.id}
          onClick={onCategorySelect && (() => onCategorySelect(item.id))}
        >
          <div className={`categories__item__image ${selectedCategory === item.id && 'item-active'}`}>
            <img src={item.picture} alt={item.name} />
          </div>
          <p className={`${selectedCategory === item.id && 'text-active'}`}>{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Categories;
