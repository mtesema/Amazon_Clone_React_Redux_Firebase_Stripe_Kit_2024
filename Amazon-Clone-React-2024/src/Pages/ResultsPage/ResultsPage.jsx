import React, { useState, useEffect } from 'react';
import Includes from '../../Includes/Includes';
import { useParams } from 'react-router-dom';
import CatagoryAPIBaseURL from '../../Requests/CatagoryAPI';
import ProductsResultsProps from './ProductsResultsProps';

function ResultsPage() {
  const { catagoryName } = useParams(); // This should match the URL parameter in your route
  const [categoryData, setCategoryData] = useState(null);

  useEffect(() => {
    async function getCategory() {
      try {
        const response = await CatagoryAPIBaseURL.get(`/category/${catagoryName}`);
        setCategoryData(response.data); // Store the category data in state
        // console.log(response.data); // Log the category data
      } catch (error) {
        console.error('Error fetching category data:', error);
      }
    }

    if (catagoryName) {
      getCategory();
    }
  }, [catagoryName]);

  console.log(categoryData);

  return (
    <Includes>
      <div>
        <h1>Results for Category: {catagoryName}</h1>
        <div className='catagory_result_main_container'>
          {categoryData && categoryData.map((item) => (
            <div key={item.id}>
              <p>{item.title}</p>
              <ProductsResultsProps key={item.id} data={item} />
            </div>
          ))}
        </div>
      </div>
    </Includes>
  );
}

export default ResultsPage;