

import React from 'react';
import './Abt.css';

const Abt = () => {
  return (
    <div className="abt"> 
      <section className="abt-top"> 
        <div className="abt-cont"> 
          <h1 className="abt-tit">Our Story, Your Serenity.</h1> 
          <p className="abt-sub"> 
            Dedicated to crafting beauty essentials that bring peace to your daily routine.
          </p>
        </div>
      </section>

      <section className="abt-story"> 
        <div className="abt-story-cont"> 
          <h2 className="abt-head">The Heart of Serene</h2> 
          <p>
            Born from a passion for mindful self-care, Serene began with a simple belief: beauty should be a source of calm and joy. We meticulously select the finest
            ingredients, blending nature's purity with scientific innovation to create products that truly nourish and transform. Our journey is about more than
            just haircare; it's about fostering moments of tranquility in a busy world.
          </p>
          <p>
            Every product we create is a testament to our commitment to quality,sustainability, and your well-being. We envision a community whereeveryone feels beautiful, inside and out.
          </p>
        </div>
      </section>


      <section className="abt-vals"> 
        <h2 className="abt-head">What We Stand For</h2> 
        <div className="abt-grid"> 
          <div className="abt-val"> 
            <i className="fas fa-gem icon"></i>
            <h3>Quality</h3>
          </div>
          <div className="abt-val">
            <i className="fas fa-leaf icon"></i>
            <h3>Purity</h3>
          </div>
          <div className="abt-val">
            <i className="fas fa-hands-helping icon"></i>
            <h3>Care</h3>
          </div>
        </div>
      </section>
     
    </div>
  );
};

export default Abt;
