import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import SignupPage from '../Pages/AuthPage/Signup'
import CartPage from '../Pages/Cart/Cart'
import OrdersPage from '../Pages/OrdersPage/Orderspage'
import PaymentPage from '../Pages/PaymentPage/PaymentPage'
import ResultsPage from './ResultsPage/ResultsPage'


function Routing () {


  return (
    <Router>
        <Routes> 
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/catagory/:catagoryName" element={<ResultsPage />} />
            <Route path="*" element={<HomePage />} />
        </Routes>

    </Router>
  )
}

export default Routing