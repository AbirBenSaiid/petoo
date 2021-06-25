import { ADD_BLOG, FAIL_BLOG, LOAD_BLOG, VIDE_ERRORS_ } from "../actionTypes";
import axios from "axios";

//ADD Blog
export const addBlog = (blog, history, userID) => async (dispatch) => {
  dispatch({ type: LOAD_BLOG });
  try {
    let result = await axios.post(`${process.env.PUBLIC_URL}/api/blog/create`, {
      blog,
      userID, 
    });
    dispatch({ type: ADD_BLOG, payload: result.data });
   
  } catch (errors) {
    dispatch({ type: FAIL_BLOG, payload: errors.response.data });
  }
};

export const videErrors = () => {
  return {
    type: VIDE_ERRORS_,
  };
};
