import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './List.css';
import { FaSearch } from 'react-icons/fa'; 

const List = ({ url }) => {
  const [prodList, setProdList] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/prod/list`);
      setProdList(response.data.data);
      setOriginalList(response.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

 
  const handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    setSearchTerm(keyword);
    const filtered = originalList.filter((item) =>
      item.name.toLowerCase().includes(keyword) ||
      item.category.toLowerCase().includes(keyword)
    );
    setProdList(filtered);
  };

  const highlightMatch = (text) => {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  };


  const removeProd = async (id) => {
    try {
      const response = await axios.delete(`${url}/api/prod/remove?id=${id}`);
      alert(response.data.message);
      fetchList(); // Refresh after deletion
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="prod-list">
      <h2 className="prod-title">All Haircare Products</h2>

      <div className="searchbar-container-admin">
        <input
          type="text"
          className="prod-search"
          placeholder="Search by name or category..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <FaSearch className="search-icon-admin" />
      </div>

      <div className="prod-table">
        <div className="prod-header">
          <p>Image</p>
          <p>Name</p>
          <p>Category</p>
          <p>Price</p>
          <p>Action</p>
        </div>

        {prodList.length > 0 ? (
          prodList.map((item, index) => (
            <div key={index} className="prod-row">
              <img src={`${url}/image/${item.image}`} alt="" className="prod-img" />
              <p dangerouslySetInnerHTML={{ __html: highlightMatch(item.name) }} />
              <p dangerouslySetInnerHTML={{ __html: highlightMatch(item.category) }} />
              <p>₹{item.price}</p>
              <p className="prod-del" onClick={() => removeProd(item._id)}>✖</p>
            </div>
          ))
        ) : (
          <p className="prod-noresults">No matching products found.</p>
        )}
      </div>
    </div>
  );
};

export default List;
