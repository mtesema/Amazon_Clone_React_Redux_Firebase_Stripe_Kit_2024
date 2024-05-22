import React from "react";
import CatagoryFeedProbs from "./CategoryFeedProbs";
import { catagoryFeed } from "./Categories";
import "./Style/CategoryProductFeed.css";

import { useState } from "react";
import { useEffect } from "react";

function CategoryProductFeed() {
  const [isLoading, setLoading] = useState(false);
  const [categoryData, setCategoryData] = useState(null);

  useEffect(() => {
    async function getCategory() {
      setLoading(true);
      try {
        // Simulating API call with catagoryFeed data
        setCategoryData(catagoryFeed); // Store the category data in state
        setLoading(false);
      } catch (error) {
        console.error("Error fetching category data:", error);
        setLoading(false);
      }
    }

    getCategory();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <section className="catagory_container">
          {catagoryFeed.map((category, index) => (
            <CatagoryFeedProbs key={index} data={category} />
          ))}
        </section>
      )}
    </div>
  );
}

export default CategoryProductFeed;
