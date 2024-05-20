import axios from 'axios';

const CatagoryAPIBaseURL = axios.create({
  baseURL: 'https://fakestoreapi.com/products',
});

export default CatagoryAPIBaseURL;



// https://fakestoreapi.com/products/category/${category}
// https://fakestoreapi.com/products/category/jewelery
// https://fakestoreapi.com/products/category/electronics

