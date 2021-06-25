import { ADD_PRODUCT, FAIL_PRODUCT, LOAD_PRODUCT, VIDE_ERRORS_MSG_ } from "../actionTypes";
import axios from "axios";

//ADD Pet
export const addProduct = (product, history, shopID) => async (dispatch) => {
    dispatch({ type: LOAD_PRODUCT });
    try {
    let result = await axios.post(`${process.env.PUBLIC_URL}/api/product/create`, {
        product,
        shopID, 
    } );
    dispatch({ type: ADD_PRODUCT, payload: result.data });
    
    } catch (error) {
        console.log(error.response)
    dispatch({ type: FAIL_PRODUCT, payload: error.response.data.errors });
    }
};

export const videErrors = () => {
  return {
    type: VIDE_ERRORS_MSG_,
  };
};
