import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './components/Error';
import ProductList from './components/ProductList';
import ProductPage from './components/ProductPage';
import MyCart from './components/cart/MyCart';
import { CartProvider } from './components/cart/cart';
import Signin from './components/Sign/Signin';
import { SignProvider } from './components/Sign/Sign';
import { GoogleOAuthProvider } from '@react-oauth/google';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="332134779462-i35fs5uhnnm8slu2lqqg76kvdq8qrg20.apps.googleusercontent.com">
  
  <React.StrictMode>
   <CartProvider >
    <BrowserRouter>
    <SignProvider>
    <Routes>
    <Route path='/' >
    <Route index element={<Signin/>} />
    <Route path="/Home" element={<App/>}/>
    <Route path='/Home/product' element={<ProductList/>}/>
    <Route path='cart' element={<MyCart/>}/>
    <Route path='/Home/Product/:product' element={<ProductPage/>}/>
    <Route path='*' element={<Error/>}/>
    </Route>
    </Routes>
    </SignProvider>
    </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
