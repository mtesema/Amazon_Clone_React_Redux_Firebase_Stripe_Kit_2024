import React, { useEffect, useState } from "react";
import ProductsFeedProps from "./ProductsFeedProps";
import ProductRequests from "../../Requests/ProductsRequest";
import axios from "axios";
import Loading from "../../Components/Loading/Loading";
import './Style/ProductsFeed.css'

function ProductsFeed() {
  // Create a variable to load data from the requested api
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState([true])

  const getProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(ProductRequests);
    //   console.log(response);
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  //  useEffect with empty dependency array ensures this runs only once

  useEffect(() => {
    
    getProducts();
  }, []);

  console.log("list of products:" , products);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <section>
          <hr className="divider" />
          <div className="product_feed_main_container">
            {products?.map((product) => (
              <ProductsFeedProps key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default ProductsFeed;
