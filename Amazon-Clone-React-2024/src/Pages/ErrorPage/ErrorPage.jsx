import React from 'react'
import { Link } from 'react-router-dom'
import Includes from '../../Includes/Includes'
import './Style/ErrorPage.css'

function ErrorPage() {
  return (
    <Includes>
      <div className="error-page-main-container">
        <div>
          <h1>SORRY</h1>
          <h2>We couldn't find that page</h2>
          <h3>
            Try searching or go to <Link to="/"> Amazon's home page</Link>
          </h3>
        </div>

        <div>
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/error/196._TTD_.jpg"
            alt=""
          />
        </div>
      </div>
    </Includes>
  );
}

export default ErrorPage