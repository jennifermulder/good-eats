import React from "react";
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import { idbPromise, pluralize } from "../../utils/helpers"

import { useStoreContext } from '../../utils/GlobalState';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';

function ProductItem(item) {
  const {
    image,
    name,
    _id,
    description,
    cooktime,
    ingredients,
    method,
    instructions,
    price,
    quantity
  } = item;

  const [state, dispatch] = useStoreContext();
  // destructure cart from state so that it can be used
  const { cart } = state;

  const addToCart = () => {
    // find the cart item with the matching id
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);

    // if there was a match, call UPDATE with a new purchase quantity
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  };

  return (
    <div className="card px-1 py-1">
      <Link to={`/products/${_id}`}>
        <img
          alt={name}
          src={`/images/${image}`}
        />
        <p>{name}</p>
      </Link>
      <div>
        {/* <div> Cook Time:{quantity} {pluralize("minute", quantity)} </div> */}
        <div> Cook Time:{cooktime} {pluralize("minute", cooktime)} </div>
        {/* <span>{description}</span> */}
      </div>
      <Button variant="contained" color="primary" onClick={addToCart}>Add to Cook Book 📖 </Button>
    </div>
  );
}

export default ProductItem;
