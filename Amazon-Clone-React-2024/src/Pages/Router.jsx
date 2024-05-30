import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import LoginPage from './AuthPage/Login'
import CartPage from './Cart/CartPage'
import OrdersPage from './OrdersPage/Orderspage'
import ResultsPage from './ResultsPage/ResultsPage'
import ProductDetailPage from './ProductDetail/ProductDetailPage'
import Signin from './AuthPage/Signin'
import Login from './AuthPage/Login'
import SignUp from './AuthPage/Signup'
import ErrorPage from './ErrorPage/ErrorPage'
import SuccessPage from './SuccessPage/SuccessPage'


function Routing () {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/account" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/category/:categoryName" element={<ResultsPage />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
      </Routes>
    </Router>
  );
}

export default Routing