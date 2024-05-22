import React, { useState, useEffect } from "react";
import Includes from "../../Includes/Includes";
import { useParams } from "react-router-dom";
import APIBaseURL from "../../Requests/APIBaseURL";
import ProductsResultsProps from "./ProductsResultsProps";
import Loading from '../../Components/Loading/Loading'

function ResultsPage() {
  const { categoryName } = useParams(); // This should match the URL parameter in your route
  const [categoryData, setCategoryData] = useState(null);
  const [isLoading, setLoading] = useState([false])

  useEffect(() => {
    async function getCategory() {
      setLoading(true);
      try {
        const response = await APIBaseURL.get(`/category/${categoryName}`);
        setCategoryData(response.data); // Store the category data in state
        // console.log(response.data); // Log the category data
        setLoading(false);
      } catch (error) {
        console.error("Error fetching category data:", error);
        setLoading(false);

      }
    }

    if (categoryName) {
      getCategory();
    }
  }, [categoryName]);

  console.log(categoryData);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <Includes>
          <div className="catagory_result_main_container">
            <h1>
              {categoryData ? `${categoryData.length} results for ` : "Loading"}
              {categoryData && (
                <span style={{ color: "red" }}>{`"${categoryName}"`}</span>
              )}
            </h1>
            <div>
              {categoryData &&
                categoryData.map((item) => (
                  <div key={item.id}>
                    <ProductsResultsProps key={item.id} data={item} />
                  </div>
                ))}
            </div>
          </div>
        </Includes>
      )}
    </div>
  );
}

export default ResultsPage;
