import React from 'react';
import './Ing.css';
import { assets } from '../assets/assets';
const Ing = () => {
  return (
    <div className="ing-container">

      <section className="ing-hero">
        <div className="ing-hero-content">
          <h1 className="ing-title">Discover Our Pure Ingredients</h1>
          <p className="ing-subtitle">
            We carefully select natural and effective ingredients for healthy, beautiful hair.
          </p>
        </div>
      </section>

      
      <section className="ing-intro">
        <h2 className="ing-heading">Our Philosophy: Clean & Effective</h2>
        <p>
          At SERENE, we believe that what you put on your hair is just as important as what you put in your body.
          That's why we're committed to using high-quality, sustainably sourced ingredients that deliver real results without compromise.
        </p>
      </section>

  
      <section className="ing-key">
        <h2 className="ing-heading">Key Ingredients We Love</h2>
        <div className="ing-grid">
          <div className="ing-card">
            <img src={assets.coco} alt="Coconut Oil" className="ing-img" />
            <h3 className="ing-name">Coconut Oil</h3>
            <p className="ing-desc">
              Known for its deep moisturizing properties, coconut oil helps to
              nourish hair from root to tip, promoting shine and strength.
            </p>
          </div>

          <div className="ing-card">
            <img src={assets.argon} alt="Argan Oil" className="ing-img" />
            <h3 className="ing-name">Argan Oil</h3>
            <p className="ing-desc">
              Rich in antioxidants and Vitamin E, argan oil combats frizz,
              softens hair, and protects against damage.
            </p>
          </div>

          <div className="ing-card">
            <img src={assets.shea} alt="Shea Butter" className="ing-img" />
            <h3 className="ing-name">Shea Butter</h3>
            <p className="ing-desc">
              A powerful emollient, shea butter provides intense hydration,
              sealing in moisture and improving hair elasticity.
            </p>
          </div>

          <div className="ing-card">
            <img src={assets.keratin} alt="Keratin" className="ing-img" />
            <h3 className="ing-name">Keratin</h3>
            <p className="ing-desc">
              The primary protein of hair, keratin helps rebuild damaged strands,
              reducing breakage and restoring smoothness.
            </p>
          </div>

        </div>
      </section>

  
      <section className="ing-avoid">
        <h2 className="ing-heading">What We Avoid</h2>
        <p>
          We are committed to formulating our products without harsh chemicals like
          sulfates, parabens, and phthalates, ensuring a gentle touch for your hair and scalp.
        </p>
        <p>
          Our dedication to transparency means you can trust the ingredients in every bottle.
        </p>
        <button className="ing-more-btn">Learn More About Our Standards</button>
      </section>

    </div>
  );
};

export default Ing;
