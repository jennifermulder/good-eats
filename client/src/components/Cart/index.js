import React, { useEffect } from 'react';
// import styled from "styled-components";
// import keyframes from "styled-components";
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import './style.css';
import { useLazyQuery } from '@apollo/react-hooks';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import { idbPromise } from "../../utils/helpers";
import { QUERY_CHECKOUT } from '../../utils/queries';
import { Button } from '@material-ui/core';

// const rotate = keyframes`
//   from {
//     transform: rotate(0deg);
//   }

//   to {
//     transform: rotate(360deg);
//   }
// `;

// const Rotate = styled.div`
//   display: inline-block;
//   animation: ${rotate} 2s linear infinite;
//   padding: 2rem 1rem;
//   font-size: 1.2rem;
// `;

const Cart = () => {

  //use useStoreContext cutom Hook to establish a state variable and the dispatch function to update the state.
  //dispatch will call the toggle cart action
  const [state, dispatch] = useStoreContext();
  // to be able to query on Click, data variable contains checkout session, only after the query is called with the getCheckout() function
  //data holds returned data from useLazyQuery
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      //return array of itmes from indexedDB
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    };
    //check if there is anything in the cart
    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  

  console.log(state)
  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }


  if (!state.cartOpen) {
    return (
      <div className="cart-closed" onClick={toggleCart}>
        {/* <Rotate> */}
        <span
          role="img"
          aria-label="book">📖 </span>
          {/* </Rotate> */}
      </div>
    );
  }
  //user clicks checkout, loops over the items saved in state.cart, adds Ids to new productIds array
  function submitCheckout() {
    const productIds = [];
  
    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds }
    });
  }

  //toggle on cartOpen value when [close] text is clicked
  return (
    <div className="cart">
      <div className="close" onClick={toggleCart}>[X]</div>
      <h2>Recipies to Save</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map(item => (
            <CartItem key={item._id} item={item} />
          ))}
          <div className="flex-row space-between">
            {/* <strong>Total: ${calculateTotal()}</strong> */}
            {
              Auth.loggedIn() ?
                <Button onClick={submitCheckout}>
                  Checkout
            </Button>
                :
                <span>(log in to save to Cook Book )</span>
            }
          </div>
        </div>
      ) : (
          <h3>
            <span role="img" aria-label="shocked">
              😱
      </span>
      You haven't added anything to your cook book yet!
          </h3>
        )}
    </div>
  );
};

export default Cart;