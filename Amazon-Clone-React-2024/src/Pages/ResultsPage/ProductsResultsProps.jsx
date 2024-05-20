import React from "react";
import "./Style/ResultsPage.css"
import {Link} from "react-router-dom"


function ProductsResultsProps({ data }) {
  // console.log(data);
  const { title,name, image } = data;

  return (
    <div className="catagory_result">
      <Link to={`#`}>
        <span className="text-black">
          <h2>{title}</h2>
        </span>
        <img src={image} alt="" />
        <p>Shop now</p>
      </Link>
    </div>
  );
}

export default ProductsResultsProps;
