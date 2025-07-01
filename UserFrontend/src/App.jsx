import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart'; 
import Ing from './components/Ing';     
import Abt from './components/Abt';     
import { Route, Routes } from 'react-router-dom';
import LoginPopup from './components/LoginPopup/LoginPopup'; 
import Footer from './components/Footer/Footer';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Verify from './pages/Verify/Verify'; 
import MyOrders from './pages/MyOrders/MyOrders';
import ScrollToTop from './components/ScrollToTop';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [prod_list, setProdList] = useState([]);

  const url = "https://serenebackend.onrender.com/";

  const addToCart = async (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));

    if (token) {
      try {
        await axios.post(`${url}/api/cart/add`, { itemId }, { headers: { token } });
      } catch (err) {
        console.error("Error adding to cart:", err.response?.data?.message || err.message);
      }
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] > 1 ? prev[itemId] - 1 : 0,
    }));

    if (token) {
      try {
        await axios.delete(`${url}/api/cart/remove?itemId=${itemId}`, { headers: { token } });
      } catch (err) {
        console.error("Error removing from cart:", err.response?.data?.message || err.message);
      }
    }
  };

  const loadCartData = async () => {
    try {
      const res = await axios.post(`${url}/api/cart/get`, {}, { headers: { token } });
      setCartItems(res.data.cartData);
    } catch (err) {
      console.log("Failed to load cart data", err);
    }
  };

  const fetchProdList = async () => {
    try {
      const res = await axios.get(`${url}/api/prod/list`);
      setProdList(res.data.data);
    } catch (err) {
      console.log("Failed to fetch products", err);
    }
  };

  useEffect(() => {
    async function loadData() {
      await fetchProdList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData();
      }
    }
    loadData();
  }, []);

  const getTotalCartAmount = () => {
    let total = 0;
    for (const id in cartItems) {
      if (cartItems[id] > 0) {
        const info = prod_list.find(prod => prod._id === id);
        if (info) total += info.price * cartItems[id];
      }
    }
    return total;
  };

  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((sum, itemCount) => sum + itemCount, 0);
  };

  return (
    <>
      <ToastContainer />
      {showLogin && (
        <LoginPopup setShowLogin={setShowLogin} url={url} setToken={setToken} />
      )}
      <div className="app">
        <Navbar
          setShowLogin={setShowLogin}
          totalCartItems={getTotalCartItems()}
          token={token}
          setToken={setToken}
        />

        {/* 👇 Ensures scroll-to-top on every route change */}
        <ScrollToTop />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                cartItems={cartItems}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                prod_list={prod_list}
                token={token}
                url={url}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                prod_list={prod_list}
                url={url}
                token={token}
              />
            }
          />
          <Route
            path="/orders"
            element={
              <PlaceOrder
                cartItems={cartItems}
                token={token}
                prod_list={prod_list}
                url={url}
                getTotalCartAmount={getTotalCartAmount}
              />
            }
          />
          <Route path="/verify" element={<Verify url={url} />} />
          <Route path="/myorders" element={<MyOrders token={token} url={url} />} />
          <Route path="/ing" element={<Ing />} />
          <Route path="/abt" element={<Abt />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
};

export default App;
