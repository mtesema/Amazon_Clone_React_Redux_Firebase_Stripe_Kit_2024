import React from "react";

import Banner from "../Components/BannerCaroursel/Banner";
import CatagoryProductFeed from "../Components/CategoryProductFeed/CatagoryFeed";
import ProductsFeed from "../Components/Products/ProductsFeed";
import Includes from "../Includes/Includes";

function HomePage() {
  return (
    <Includes>
   
      <Banner />
      <CatagoryProductFeed />
      <ProductsFeed />
      
      
    </Includes>

  );
}

export default HomePage;
