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
        <li>Eggs</li>
        <h3>Veggies</h3>
        <li>Spinach</li>
        <li>Cauliflower</li>
        <li>Brocolli</li>
        <li>Cucumbers</li>
        <li>Zuchinni</li>
        <li>Bell Peppers (All colors!)</li>
        <li>Butter Lettuce</li>
        <li>Spinach</li>
        <li>Kale</li>
        <li>Cilantro</li>
        <li>Basil</li>
        <h3>Sauces/Condiments, etc.</h3>
        <li>Sriratcha</li>
        <li>Teriyaki</li>
        <li>Coconut Aminos</li>
        <li>Honey (Definitely not Keto)</li>
        <li>Peanut Butter</li>
        <li>Parmesean Cheese</li>
        <li>Pasta/Pizza Sauce</li>
        <h3>Cheese (Fam sized)</h3>
        <li>Mozarella</li>
        <li>Mild Cheddar</li>
    </div>
    </>
  );
};

export default GroceryList;
