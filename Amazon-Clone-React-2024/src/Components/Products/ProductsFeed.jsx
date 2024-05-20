import React, { useEffect, useState } from "react";
import ProductsFeedProps from "./ProductsFeedProps";
import ProductRequests from "../../Requests/Request";
import axios from "axios";

function ProductsFeed() {
  // Create a variable to load data from the requested api
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get(ProductRequests);
    //   console.log(response);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  //  useEffect with empty dependency array ensures this runs only once

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);

  return (
    <div className="product_feed_main_container">
      {products.map((product) => (
        <ProductsFeedProps key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsFeed;
