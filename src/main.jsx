import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { ProductProvider } from './contexts/ProductContext.jsx';
import { SidebarProvider } from './contexts/SidebarContext.jsx'; // Asegúrate de que sea 'SidebarProvider', no 'SidebarContext'
import CartProvider from './contexts/CartContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <SidebarProvider>
    <CartProvider> 
      <ProductProvider>
        <App />
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);
