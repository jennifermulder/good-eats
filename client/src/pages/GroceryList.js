import React from "react";
import './style.css';

const GroceryList = () => {
  return (
    <>
    <div className="container bg-text">
      <p> These are some of the ingredients that I most commonly use during my experiments </p>
        <h2>Grocery List:</h2>
        <h3>Protein</h3>
        <li>Turkey</li> 
        <li>🐔  Chicken (wings!)</li>
        <li>Shrimppp</li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <h3>Veggies</h3>
        <li>Spinach</li>
        <li>Cauliflower</li>
        <li>Brocolli</li>
        <li>Bell Peppers (All colors!)</li>
        <li></li>
        <li></li>
    </div>
    </>
  );
};

export default GroceryList;
