import React from 'react';
// styles
import './styles.css';

const Categories = ({ items }) => {
  console.log(items);

  return (
    <div className="categories">
      {(items || []).map(item => (
        <div className="categories__item" key={item.id}>
          <div className="categories__item__image">
            <img src={item.picture} alt={item.name} />
          </div>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Categories;
