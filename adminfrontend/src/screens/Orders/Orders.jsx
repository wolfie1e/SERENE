import React, { useEffect, useState } from 'react';
import './Orders.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    toast.info("Refreshing orders...");
    try {
      const res = await axios.get(`${url}/api/order/list`);
      if (res.data.success) {
        setOrders(res.data.data);
        toast.success("Orders refreshed");
      } else {
        toast.error("Failed to fetch orders.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error fetching orders.");
    }
  };

  const handleStatusChange = async (orderId, status) => {
    try {
      const res = await axios.post(`${url}/api/order/status`, { orderId, status });
      if (res.data.success) {
        toast.success("Order status updated.");
        fetchAllOrders();
      } else {
        toast.error("Status update failed.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error updating status.");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="admin-orders">
      <div className="orders-header">
        <h2>All Orders</h2>
        <button className="refresh-btn" onClick={fetchAllOrders} title="Refresh Orders">
          <i className="fas fa-sync-alt"></i>
        </button>
      </div>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="orders-container">
          {orders.map((order, i) => (
            <div key={order._id} className="order-card">
              <i className="fas fa-box-open parcel-icon"></i>

              <div className="order-info">
                <div className="order-products">
                  <strong>Items: </strong>
                  {order.items.map((item, idx) => (
                    <span key={idx}>
                      {item.name} x {item.quantity}
                      {idx < order.items.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </div>

                <div className="order-user">
                  <strong>Customer:</strong> {order.address.first_name} {order.address.last_name}
                  <br />
                  <strong>Phone:</strong> {order.address.phone}
                </div>

                <div className="order-address">
                  <strong>Address:</strong>
                  <p>{order.address.street}</p>
                  <p>{order.address.city}, {order.address.state}, {order.address.country} - {order.address.zip_code}</p>
                </div>

                <div className="order-summary">
                  <p><strong>Total:</strong> ₹{order.amount}</p>
                  <p><strong>Items Count:</strong> {order.items.length}</p>
                  <label>
                    <strong>Status: </strong>
                    <select
                      value={order.status}
                      onChange={(e) => handleStatusChange(order._id, e.target.value)}
                      className={`status-select status-${order.status.replace(/\s/g, '').toLowerCase()}`}
                    >
                      <option value="Product Packaging">Product Packaging</option>
                      <option value="Out for delivery">Out for delivery</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
