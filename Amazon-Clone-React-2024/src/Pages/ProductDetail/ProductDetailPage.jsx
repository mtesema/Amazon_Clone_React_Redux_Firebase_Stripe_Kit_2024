import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Includes from "../../Includes/Includes";
import APIBaseURL from "../../Requests/APIBaseURL";
import "./Style/ProductDetailPage.css";
import Rating from "@mui/material/Rating";
import Loading from "../../Components/Loading/Loading"
import { StateContext } from "../../Utility/StateProvider";
import {formatPrice} from '../../Utility/formatCurrency '

function ProductDetailPage() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { productId } = useParams(); // This should match the URL parameter in your route

  useEffect(() => {
    async function getProduct() {
      setLoading(true);
      try {
        const response = await APIBaseURL.get(`/${productId}`);
        setLoading(false);
        setProduct(response.data); // Store the product data in state

      } catch (error) {
        setLoading(false);
        console.error("Error fetching product data:", error);
      }
    }

    if (productId) {
      getProduct();
    }
  }, [productId]); // Add productId to the dependency array
  console.log(product);


   const { id, title, image, description, rating, price } = product;
  
   const [state, dispatch] = useContext(StateContext);
   console.log(state);

   const addToCartHandlet = () => {
     dispatch({
       type: "ADD_TO_BASKET",
       item: {
         id,
        title,
         image,
         price,
         rating,
       },
     });
   };



  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Includes>
          <div className="product-detail-container">
            <hr />
            <div className="image-container">
              <img src={image} alt={title} />
            </div>
            <div className="info-container">
              <div className="product-detail-title">{title}</div>
              <div className="product-detail-description">{description}</div>
              <div className="product-price">${price}</div>
              <div className="Product_rating">
                {rating && (
                  <Rating value={rating.rate} precision={0.1} size="small" />
                )}
                {/* number of reviews */}
                <small>{rating && rating.count}</small>
              </div>

              <small>2K+ bought in past month</small>
              <div className="product_feed_pricing">
                {price && formatPrice(price)}
              </div>
              <div className="product_Coupon">
                <small>Save 10%</small>
                <p>with coupon</p>
              </div>
              {/* add to cart button */}

              <div className="product-detail-checkout">
                <button className="add-to-cart" onClick={addToCartHandlet}>
                  Add to Cart
                </button>
                <button className="buy-now">Buy Now</button>
              </div>
            </div>
          </div>
        </Includes>
      )}
    </div>
  );
}

export default ProductDetailPage;
