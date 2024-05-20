import React from "react";
import "./Style/CatagoryProductFeed.css"


function CatagoryFeedProbs({ data }) {
  // console.log(data);
  const { title, imgLink } = data;
  return (
    <div className="catagory">
      <a href="">
        <span className="text-black">
          <h2>{title}</h2>
        </span>
        <img src={imgLink} alt="" />
        <p>Shop now</p>
      </a>
    </div>
  );
}

export default CatagoryFeedProbs;
