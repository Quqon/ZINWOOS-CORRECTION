import React from 'react';
import './ProductImage.scss';

const ProductImage = props => {
  const { detail, detail_image, name, price, tags_name } = props;

  return (
    <div className="ProductImage">
      <div className="thumb">
        <img src={detail_image} alt={name} className="model" />
      </div>
      <div className="product-name">{name}</div>
      <div className="shirts-info"> {detail}</div>
      <div className="price">
        {parseInt(price)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        원
      </div>
      <div>
        <div className="option">{tags_name}</div>
        <div className="option2">{tags_name}</div>
      </div>
    </div>
  );
};

export default ProductImage;
