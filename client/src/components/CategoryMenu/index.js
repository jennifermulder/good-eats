import React, { useEffect } from 'react';
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../../utils/actions';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_CATEGORIES } from "../../utils/queries";
import { useStoreContext } from "../../utils/GlobalState";
import { idbPromise } from '../../utils/helpers';
import { Button } from '@material-ui/core';
import './style.css';

function CategoryMenu() {
  // const { data: categoryData } = useQuery(QUERY_CATEGORIES);
  // const categories = categoryData?.categories || [];

  // immediately call, retrieve current state from global state object, .dispatch() method to update state
  const [state, dispatch] = useStoreContext();
  //only need categories array out of global state, destructure to use in JSX
  const { categories } = state;
  //query category data and store into global state object
  //destrcuture loading variable; indicates waiting
  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

    //*** check if the useQuery() Hook's loading return value exists - pull from IndexedDB if not 
  useEffect(() => {
    // if categoryData exists or has changed from the response of useQuery, then run dispatch()
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories
      });
      //save to idb store
      categoryData.categories.forEach(category => {
        idbPromise('categories', 'put', category);
      });
    }
    else if (!loading) {
      idbPromise('categories', 'get').then(categories => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = id => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id
    });
  };

  return (
    <>
    <br></br>
    <h2>Categories:</h2>
    <div className="categories flex-container">
      
      {categories.map(item => (
        <Button variant="contained" color="secondary" className="categoryitem"
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </Button>
      ))}
    </div>
    <br></br>
    <br></br>
    </>
  );
}

export default CategoryMenu;

