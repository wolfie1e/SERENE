import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import "./MyOrders.css";
import { toast } from "react-toastify";

const MyOrders = ({ token, url }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
const fetchOrders = async () => {
  setLoading(true);
  toast.info("Refreshing your orders...", { autoClose: 1000 });

  try {
    const res = await axios.get(`${url}/api/order/userorders`, {
      headers: { token },
    });

    if (res.data.success) {
      setOrders(res.data.data);
      toast.success("Orders refreshed!", { autoClose: 1200 });
    } else {
      toast.warn("Could not refresh orders.");
    }
  } catch (err) {
    console.error("Failed to fetch orders", err);
    toast.error("Something went wrong.");
  } finally {
    setLoading(false);
  }
};


  const handleCancel = async (orderId) => {
    try {
      const res = await axios.post(
        `${url}/api/order/cancel`,
        { orderId },
        {
          headers: { token },
        }
      );

      if (res.data.success) {
        toast.success("Order cancelled");
        fetchOrders();
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.error(err);
      toast.error("Error cancelling order");
    }
  };

  useEffect(() => {
    if (token) fetchOrders();
  }, [token]);

  if (loading) return <Loader />;

  return (
    <div className="myorders">
      <div className="myorders-header">
        <h2>My Orders</h2>
        <button
          className="refresh-btn"
          onClick={fetchOrders}
          title="Refresh Orders"
        >
          <i className="fas fa-sync-alt"></i>
        </button>
      </div>

      {orders.length === 0 ? (
        <p className="empty-msg">No orders found.</p>
      ) : (
        <div className="myorders-container">
          {orders.map((order, i) => (
            <div key={i} className="order-card">
              <div className="order-icon">
                <i className="fa-solid fa-box"></i>
              </div>
              <div className="order-content">
                <div className="order-items">
                  <strong>Items: </strong>
                  {order.items.map((item, idx) => (
                    <span key={idx}>
                      {item.name} x {item.quantity}
                      {idx < order.items.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </div>
                <div className="order-details">
                  <div className="order-timeline-wrapper">
                    {order.status === "Product Packaging" && (
                      <button
                        className="cancel-order-btn"
                        onClick={() => handleCancel(order._id)}
                      >
                        Cancel Order
                      </button>
                    )}

                    <div className="order-timeline">
                      <div
                        className={`step ${
                          ["Product Packaging", "Out for delivery", "Delivered"].includes(
                            order.status
                          )
                            ? "active"
                            : ""
                        }`}
                      >
                        <i className="fas fa-box"></i>
                        <span>Packaging</span>
                      </div>
                      <div
                        className={`step ${
                          ["Out for delivery", "Delivered"].includes(order.status)
                            ? "active"
                            : ""
                        }`}
                      >
                        <i className="fas fa-truck"></i>
                        <span>Out for Delivery</span>
                      </div>
                      <div
                        className={`step ${
                          order.status === "Delivered" ? "active" : ""
                        }`}
                      >
                        <i className="fas fa-check-circle"></i>
                        <span>Delivered</span>
                      </div>
                    </div>
                  </div>

                  <p>
                    {" "}
                    <b>Total:</b> ₹{order.amount}
                  </p>
                  <p>
                    {" "}
                    <strong>Total Items: </strong>
                    {order.items.length}
                  </p>
                  <p
                    className={`status status-${order.status
                      .replace(/\s/g, "")
                      .toLowerCase()}`}
                  >
                    <strong>Status: </strong>
                    <b>{order.status}</b>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;
