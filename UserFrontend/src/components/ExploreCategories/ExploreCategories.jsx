
import React from 'react';
import './ExploreCategories.css';
import { category_list } from '../../assets/assets';

const ExploreCategories = ({ category, setCategory }) => {
    return (
        <div className='explore-p'>
            <h1>Explore our SERENE products</h1>
            <p className='explore-p-text'>Choose from the varities of our products as your hair and your heart desries.</p>
            <div className="explore-p-list">
                {category_list.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(category => category === item.category_name ? "All" : item.category_name)} key={index} className='explore-p-list-item'>
                            <img src={item.category_image} className={category === item.category_name ? "active" : ""} alt={item.category_name} />
                            <p>{item.category_name}</p>
                        </div>
                    );
                })}
            </div>
            <hr />
        </div>
    );
};

export default ExploreCategories;