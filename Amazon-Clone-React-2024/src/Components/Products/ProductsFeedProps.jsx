import React from "react";
import Rating from "@mui/material/Rating";

import "./Style/ProducstsFeed.css";

function ProductsFeedProps({ product }) {
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  };


    // Function to split the price into whole number and decimal parts
    const formatPrice = (price) => {
      const [wholeNumber, decimalPart] = price.toString().split(".");
      return (
        <span>
          <sup className="price_superscript">$</sup>
          {wholeNumber}
          <sup className="price_superscript">{decimalPart}</sup>
        </span>
      );
    };

  return (
    <div className="Product_Feed_Container">
      <a href="">
        <img src={product.image} alt={product.title} />
      </a>
      <div>
        <h3>{truncateText(product.title, 25)}</h3>
        <div className="Product_rating">
          {/* rating */}
          <p>{product.rating.rate}</p>
          <Rating className="rating_stars" value={product.rating.rate} precision={0.1} size="small" />

          {/* number of reviews */}
          <small>{product.rating.count}</small>

          {/* price */}
        </div>
        <div className="product_feed_pricing">
        {formatPrice(product.price)}
        </div>
        {/* add to cart button */}
        <button className="product_feed_button">
          <small>Add to cart</small>
        </button>
      </div>
    </div>
  );
}

export default ProductsFeedProps;
