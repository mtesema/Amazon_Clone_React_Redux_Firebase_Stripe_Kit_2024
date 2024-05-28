import React from 'react'

import ReactDOM from 'react-dom/client'
import App from './App'
import { StateProvider } from './Utility/StateProvider'
import reducer, { initialState } from "./Utility/Reducer.jsx";
import './index.css'

// Load environment variables
// const { VITE_STRIPE_PUBLIC_KEY } = import.meta.env;


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);

// console.log("Stripe Public Key:", VITE_STRIPE_PUBLIC_KEY);
