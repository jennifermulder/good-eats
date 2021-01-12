import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from '../components/Cart';

const Home = () => {
  return (
    <div className="container">
      <h2>About Me:</h2>
      Insert image here, maybe use 
      This is the area where the bio will go.
      Put the bio on the left, 3 receipies on the right. Use a scroll??
      
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
