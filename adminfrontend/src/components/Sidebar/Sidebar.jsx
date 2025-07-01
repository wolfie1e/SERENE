import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink to="/add" className="sidebar-link">Add Items</NavLink>
      <NavLink to="/list" className="sidebar-link">List Items</NavLink>
      <NavLink to="/orders" className="sidebar-link">Orders</NavLink>
    </div>
  );
};

export default Sidebar;
