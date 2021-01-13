import React from "react";
import profileImage from "../assets/Face 2.JPG";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from '../components/Cart';

const Home = () => {
  return (
  <> <div className="container">
        <h2>About the Cook:</h2>
        <img src={profileImage} className="my-2" style={{ maxWidth: "65%", width: "50%" }} alt="Jennifer Mulder" />
        <p id="about-me"> I am a Full-Stack Web developer looking to contribute to software functionality in a creative workspace. As a recent recipient of a certificate in full stack development from the University of California, Berkeley, I have obtained newly practiced skills including: Javascript, NodeJS, and MySQL. With a collective 6 years of experience in both public and industry accounting, I have the necessary capabilities to be an effective contributing team member to any project. In public accounting, I gained the ability to effectively communicate with all management levels on the client side, as well as my team. I am a courageous communicator when it comes to presenting/ suggesting more efficient ways to perform processes as I am self-motivated to always find a better solution. When working on my recent group project to build a full stack application utilizing express and sequelize to build an interactive blog site, I played a leadership role in assessing the skills of those that I was working with and assigning the best fit to each role, while also maintaining organization and adherence to acceptance criteria. I am excited to utilize my skills in an efficient, fast-paced workplace that is equally driven to come up with the next best thing.
        </p>  
    </div>
      <div className="container">
        <CategoryMenu />
        <ProductList />
        <Cart />
    </div>
  </>
  );
};

export default Home;
