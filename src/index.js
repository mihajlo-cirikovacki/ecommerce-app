import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ProductsContextProvider } from './store/product-context';

import './index.css';
import App from './App';


ReactDOM.render( 
  <ProductsContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductsContextProvider>,
  document.getElementById('root')
);



