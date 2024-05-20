import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "react-currency-format";
import "./Style/ProducstsFeed.css";

function ProductsFeedProps({ product }) {
  return (
    <div className="Product_Feed_Container">
      <a href="">
        <img src={product.image} alt={product.title} />
      </a>
      <div>
        <h3>{product.title}</h3>
        <div className="Product_rating">
          {/* rating */}
          <Rating value={product.rating.rate} precision={0.1} />

          {/* number of reviews */}
          <small>{product.rating.count}</small>

          {/* price */}
        </div>
        <div className="product_feed_pricing">
          <CurrencyFormat
            value={product.price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
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
