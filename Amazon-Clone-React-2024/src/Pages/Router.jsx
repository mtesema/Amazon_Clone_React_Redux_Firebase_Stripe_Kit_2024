import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import SignupPage from './AuthPage/Signup'
import CartPage from './Cart/CartPage'
import OrdersPage from './OrdersPage/Orderspage'
import PaymentPage from './PaymentPage/PaymentPage'
import ResultsPage from './ResultsPage/ResultsPage'
import ProductDetailPage from './ProductDetail/ProductDetailPage'


function Routing () {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/category/:categoryName" element={<ResultsPage />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default Routing