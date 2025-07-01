import React, { useEffect, useState } from "react";
import "./PlaceOrder.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PlaceOrder = ({ cartItems, token, prod_list, url, getTotalCartAmount }) => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    street: "",
    zip_code: "",
    country: "",
    phone: "",
    city: "",
    state: ""
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    let orderItems = prod_list
      .filter(item => cartItems[item._id] > 0)
      .map(item => ({ ...item, quantity: cartItems[item._id] }));

    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 40,
    };

    try {
      const response = await axios.post(`${url}/api/order/place`, orderData, {
        headers: { token }
      });
      const { session_url } = response.data;
      window.location.replace(session_url);
    } catch (err) {
      console.error(err);
    }
  };

useEffect(() => {
  if (!token) {
    toast.warning("Please login to place your order");
    navigate("/cart");
  } else if (getTotalCartAmount() === 0) {
    toast.warning("Your cart is empty");
    navigate("/cart");
  }
}, [token, getTotalCartAmount, navigate]);


  return (
    <form onSubmit={onSubmitHandler} className="place-order">
      <div className="place-order-left">
        <button
            type="button"
            onClick={() => navigate("/cart")}
            className="back-to-cart-btn">
            ← Back to Cart
        </button>

        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input required name="first_name" value={data.first_name} onChange={onChangeHandler} type="text" placeholder="First Name" />
          <input required name="last_name" value={data.last_name} onChange={onChangeHandler} type="text" placeholder="Last Name" />
        </div>
        <input required name="email" value={data.email} onChange={onChangeHandler} type="email" placeholder="Email address" />
        <input required name="street" value={data.street} onChange={onChangeHandler} type="text" placeholder="Street" />
        <div className="multi-fields">
          <input required name="city" value={data.city} onChange={onChangeHandler} type="text" placeholder="City" />
          <input required name="state" value={data.state} onChange={onChangeHandler} type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input required name="zip_code" value={data.zip_code} onChange={onChangeHandler} type="text" placeholder="Zip Code" />
          <input required name="country" value={data.country} onChange={onChangeHandler} type="text" placeholder="Country" />
        </div>
        <input required name="phone" value={data.phone} onChange={onChangeHandler} type="text" placeholder="Phone" />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount() === 0 ? 0 : 40}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 40}</b>
            </div>
          </div>

          <button type="submit">Proceed to Payment</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
