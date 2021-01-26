import React, { useState } from 'react';
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

function Nav() {

  function showNavigation() {

  // const [anchorEl, setAnchorEl] = useState(false);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">
              Your Saved Cook Book
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/ingredients">
              My Favorite Ingredients
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <>
        <Button aria-controls="simple-menu" aria-haspopup="true">
        Open Menu
      </Button>
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
        </>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="shopping bag">🍳  </span>
          -Kinda Keto
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
