import React from "react";
import CatagoryFeedProbs from "./CatagoryFeedProbs";
import { catagoryFeed } from "./Catagories";
import './Style/CatagoryProductFeed.css'
function CatagoryProductFeed() {
  return (
    <section className="catagory_container">
      {catagoryFeed.map((category, index) => (
        <CatagoryFeedProbs key={index} data={category} />
      ))}
    </section>
  );
}

export default CatagoryProductFeed;
