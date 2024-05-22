import axios from 'axios';

const APIBaseURL = axios.create({
  baseURL: "https://fakestoreapi.com/products",
});

export default APIBaseURL;



// https://fakestoreapi.com/products/category/${category}
// https://fakestoreapi.com/products/category/jewelery
// https://fakestoreapi.com/products/category/electronics

