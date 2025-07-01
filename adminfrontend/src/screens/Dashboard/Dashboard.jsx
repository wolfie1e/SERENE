import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Welcome to Serene Admin 💆‍♀️</h2>
      <p className="dashboard-subtitle">Run your dreamy haircare world with ease & joy 🌸</p>

      <div className="cards">
        <div className="card">
          <div className="card-icon pink">
            <i className="fas fa-star"></i>
          </div>
          <div className="card-content">
            <h3>Featured Product</h3>
            <p>Argon Hair Mask</p>
          </div>
        </div>

        <div className="card">
          <div className="card-icon purple">
            <i className="fas fa-heart"></i>
          </div>
          <div className="card-content">
            <h3>Most Loved</h3>
            <p>Leave-In Hair Oil</p>
          </div>
        </div>

        <div className="card">
          <div className="card-icon peach">
            <i className="fas fa-smile-beam"></i>
          </div>
          <div className="card-content">
            <h3>Mood of the Day</h3>
            <p>"Good hair = Good mood" 💕</p>
          </div>
        </div>

        <div className="card">
          <div className="card-icon mint">
            <i className="fas fa-truck"></i>
          </div>
          <div className="card-content">
            <h3>Speedy Shipments</h3>
            <p>Just in a day!</p>
          </div>
        </div>

        <div className="card">
          <div className="card-icon yellow">
            <i className="fas fa-comment-dots"></i>
          </div>
          <div className="card-content">
            <h3>Customer Notes</h3>
            <p>"This shampoo saved my life!"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
