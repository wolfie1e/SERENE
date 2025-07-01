import React from 'react';
import './Cart.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = ({ cartItems, addToCart, removeFromCart, prod_list, url, token }) => {
  const navigate = useNavigate();

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

  const isEmpty = Object.values(cartItems).every((count) => count <= 0);

  const handleCheckoutClick = () => {
    if (!token) {
      toast.warning("Please log in to place an order");
    } else if (isEmpty) {
      toast.warning("Add products to your cart before placing an order");
    } else {
      navigate("/orders");
    }
  };

  return (
    <div className='crt'>
      <div className='crt-items'>
        <div className="crt-head">
          <p>Product</p>
          <p>Name</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
        <br /><br />
        {isEmpty ? (
          <p className="crt-msg">Your cart is empty. Start adding some awesome products!</p>
        ) : (
          prod_list.map(item => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={item._id} className="crt-row">
                  <img src={`${url}/image/` + item.image} alt={item.name} className="iii"/>
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <div className="crt-ctrl">
                    <img onClick={() => removeFromCart(item._id)} src={assets.minus} alt="-" />
                    <p>{cartItems[item._id]}</p>
                    <img onClick={() => addToCart(item._id)} src={assets.add} alt="+" />
                  </div>
                  <p>₹{item.price * cartItems[item._id]}</p>
                  <img
                    onClick={() => {
                      for (let i = 0; i < cartItems[item._id]; i++) {
                        removeFromCart(item._id);
                      }
                    }}
                    src={assets.cross}
                    alt="x"
                    className="crt-rm"
                  />
                </div>
              );
            }
            return null;
          })
        )}
      </div>

      <div className="crt-btm">
        <div className="crt-tot">
          <h2>Cart Totals</h2>
          <div>
            <div className="crt-row-sm">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="crt-row-sm">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount() === 0 ? 0 : 40}</p>
            </div>
            <hr />
            <div className="crt-row-sm">
              <b>Total</b>
              <b>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 40}</b>
            </div>
          </div>
          <button onClick={handleCheckoutClick} className="crt-btn">PROCEED TO CHECKOUT</button>
        </div>

        <div className="crt-msg-box">
          <h3>A Message from the Future (and Your Cart) :D</h3>
          <p>
            Wow, you've picked some truly great stuff! This cart is super happy about going home with you.
            It's time to make these goodies officially yours. Proceed with confidence!
          </p>
          <img src={assets.smile} alt=":)" className="crt-ico" />
        </div>
      </div>
    </div>
  );
};

export default Cart;
