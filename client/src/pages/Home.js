import React from "react";
import { Button } from '@material-ui/core';
import profileImage from "../assets/meet-the-cook.jpg";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from '../components/Cart';

const Home = () => {
  return (
  <> 
      <div className="container">
        <Cart />
        <CategoryMenu />
        <ProductList />
        
    </div>
    <div className="container">
        <h2>About the Cook: <Button color="primary">Hello World</Button></h2>
        <img src={profileImage} className="my-2" style={{ maxWidth: "65%", width: "50%" }} alt="Jennifer Mulder" />
        <p id="about-me"> Full-Time Accountant, Part Time cook, Fun Time Coder. I love to try new recipies that fit my needs and the ingredients in my fridge/ pantry.
        </p>  
    </div>
  </>
  );
};

export default Home;
