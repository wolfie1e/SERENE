import React, { useState } from 'react';
import './Add.css';
import axios from 'axios';
import {toast} from 'react-toastify'

const Add = ({url}) => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Shea Moisture',
  });

  const [image, setImage] = useState(null);
  const [dragging, setDragging] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      setImage(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('description', form.description);
    formData.append('price', Number(form.price));
    formData.append('category', form.category);
    formData.append('image', image);

    const response=await axios.post(`${url}/api/prod/add`,formData)
    toast(response.data.message)

    // For now, simulate sending
    console.log('FormData prepared for backend:');
    for (let pair of formData.entries()) {
      console.log(pair[0] + ':', pair[1]);
    }

    alert('Product added (backend-ready)!');

    // Reset form
    setForm({ name: '', description: '', price: '', category: 'Shea Moisture' });
    setImage(null);
  };

  return (
    <div className="add-page">
      <h2>Add Haircare Product</h2>

      <form className="add-form" onSubmit={handleSubmit}>
        <label>Product Image:</label>
        <div
          className={`drag-drop-box ${dragging ? 'dragging' : ''}`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => document.getElementById('fileInput').click()}
        >
          {image ? (
            <img src={URL.createObjectURL(image)} alt="Preview" />
          ) : (
            <p>Drag & drop image here or click to browse</p>
          )}
        </div>
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={(e) => setImage(e.target.files[0])}
          required
        />

        <label>Product Name:</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleInputChange}
          required
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleInputChange}
          rows="3"
          required
        />

        <label>Price (₹):</label>
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleInputChange}
          required
        />

        <label>Category:</label>
        <select
          name="category"
          value={form.category}
          onChange={handleInputChange}
        >
          <option>Shea Moisture</option>
          <option>Keratin Care</option>
          <option>Shampoo</option>
          <option>Hair Masks</option>
          <option>Hair Oils</option>
        </select>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default Add;
