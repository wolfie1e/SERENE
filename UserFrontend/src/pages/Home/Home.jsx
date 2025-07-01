import React, { useState, useEffect } from 'react';
import ExploreCategories from '../../components/ExploreCategories/ExploreCategories';
import ProdDisplay from '../../components/ProdDisplay/ProdDisplay';
import Header from '../../components/Header/Header';
import './Home.css'; 
import { FaSearch } from 'react-icons/fa';

const Home = ({ cartItems, addToCart, removeFromCart, prod_list, token, url }) => {
  const [category, setCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredList, setFilteredList] = useState(prod_list || []);

  useEffect(() => {
   
    let result = prod_list;

    if (category !== "All") {
      result = result.filter(item => item.category === category);
    }

    if (searchTerm.trim()) {
      result = result.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredList(result);
  }, [searchTerm, category, prod_list]);

  return (
    <div>
      <Header />
      
     
      <ExploreCategories category={category} setCategory={setCategory} />
       <div className="home-searchbar-container">
        <input
          type="text"
          className="home-searchbar"
          placeholder="Search haircare products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaSearch className="home-search-icon" />
      </div>

      
      <ProdDisplay
        category={category}
        cartItems={cartItems}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        prod_list={filteredList}
        token={token}
        url={url}
      />
    </div>
  );
};

export default Home;
