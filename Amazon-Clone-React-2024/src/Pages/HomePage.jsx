import React from "react";
import Header from "../Components/Header/Header";
import Banner from "../Components/BannerCaroursel/Banner";
import CatagoryProductFeed from "../Components/CatagoryProductFeed/CatagoryFeed";
import ProductsFeed from "../Components/Products/ProductsFeed";

function HomePage() {
  return (
    <>
      <Header />
      <Banner />
      <CatagoryProductFeed />
      <ProductsFeed />
    </>
  );
}

export default HomePage;
