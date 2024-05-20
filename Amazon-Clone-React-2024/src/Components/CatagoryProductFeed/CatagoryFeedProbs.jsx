import React from "react";
import "./Style/CatagoryProductFeed.css"
import {Link} from "react-router-dom"

function CatagoryFeedProbs({ data }) {
  // console.log(data);
  const { title,name, imgLink } = data;

  return (
    <div className="catagory">
      <Link to={`/catagory/${name}`}>
        <span className="text-black">
          <h2>{title}</h2>
        </span>
        <img src={imgLink} alt="" />
        <p>Shop now</p>
      </Link>
    </div>
  );
}

export default CatagoryFeedProbs;
