import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import LoginPage from './AuthPage/Login'
import CartPage from './Cart/CartPage'
import OrdersPage from './OrdersPage/Orderspage'
import PaymentPage from './PaymentPage/PaymentPage'
import ResultsPage from './ResultsPage/ResultsPage'
import ProductDetailPage from './ProductDetail/ProductDetailPage'
import Signin from './AuthPage/Signin'
import Login from './AuthPage/Login'
import SignUp from './AuthPage/Signup'
import { useStateValue } from '../Utility/StateProvider'
import { auth } from '../Utility/firebase/firebase'


function Routing () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/account" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/category/:categoryName" element={<ResultsPage />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default Routing