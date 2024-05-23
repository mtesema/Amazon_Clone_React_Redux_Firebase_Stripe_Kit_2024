import React, { useContext } from "react";
import "./Style/ResultsPage.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import {formatPrice} from '../../Utility/formatCurrency '
import { StateContext } from "../../Utility/StateProvider";


function ProductsResultsProps({ data }) {

   

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  };

  const [state, dispatch] = useContext(StateContext)
  console.log(state)


  const addToCartHandlet = () =>{
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: data.id,
        title: data.title,
        image: data.image,
        price: data.price,
        rating: data.rating,
        description: data.description
      },
    });
  }



  
  const { title, name, image, description, rating, price,id } = data;

  return (
    <div className="category_result_container">
      <Link to={`/products/${id}`} className="product_link">
        <div className="product_item">
          <div className="image_container">
            <img src={image} alt="Product Image" />
          </div>
          <div className="info_container">
            <h3>{truncateText(description, 200)}</h3>
            <Rating
              className="rating_stars"
              value={rating.rate}
              precision={0.1}
              size="small"
            />

            <small>2K+ bought in past month</small>
            <div className="product_feed_pricing">{formatPrice(price)}</div>
            <div className="product_Coupon">
              <small>Save 10%</small>
              <p>with coupon</p>
            </div>
          </div>
        </div>
      </Link>
      {/* add to cart button */}
      <button className="info_container_button" onClick={addToCartHandlet}>
        <small>Add to cart</small>
      </button>
    </div>
  );
}

export default ProductsResultsProps;
