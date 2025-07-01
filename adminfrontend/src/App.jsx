import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Add from './screens/Add/Add';
import List from './screens/List/List';
import Orders from './screens/Orders/Orders';
import Dashboard from './screens/Dashboard/Dashboard';
import { ToastContainer, toast } from 'react-toastify';

const url='https://serenebackend.onrender.com/';

const App = () => {
  return (
    <div className="app">
      <ToastContainer/>
      <Navbar />
      <div className="app-content">
        <Sidebar />
        <div className="page-content">
          <Routes>
            <Route path='/' element={<Dashboard url={url} />} />
            <Route path="/add" element={<Add url={url}/>} />
            <Route path="/list" element={<List url={url}/>} />
            <Route path="/orders" element={<Orders url={url}/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
