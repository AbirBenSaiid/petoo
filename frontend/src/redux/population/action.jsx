import axios from "axios";
const {
  GET_OWNERS,
  GET_VETOS,
  GET_PETS,
  FAIL_POPULATION,
  VIDE_ERRORS,
  GET_BLOGS,
  GET_PRODUCTS
} = require("../actionTypes");

export const videErrors = () => {
  return {
    type: VIDE_ERRORS,
  };
};
// get All Owners
export const getOwners = () => async (dispatch) => {
  try {
    let result = await axios.get(`${process.env.PUBLIC_URL}/api/getAllOwners`);
    dispatch({ type: GET_OWNERS, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_POPULATION, payload: error.response.data.errors });
  }
};
// get All Vetos
export const getVets = () => async (dispatch) => {
  try {
    let result = await axios.get(
      `${process.env.PUBLIC_URL}/api/vet/getAllVets`
    );
    dispatch({ type: GET_VETOS, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_POPULATION, payload: error.response.data.errors });
  }
};
// get All Pets
export const getPets = () => async (dispatch) => {
  try {
    let result = await axios.get(
      `${process.env.PUBLIC_URL}/api/pet/getAllPets`
    );
    dispatch({ type: GET_PETS, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_POPULATION, payload: error.response.data.errors });
  }
};


// get All Blogs
export const getBlogs = () => async (dispatch) => {
  try {
    let result = await axios.get(
      `${process.env.PUBLIC_URL}/api/blog/getAllBlogs`
    );
    dispatch({ type: GET_BLOGS, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_POPULATION, payload: error.response.data.errors });
  }
};


// get All Products
export const getProducts = () => async (dispatch) => {
  try {
    let result = await axios.get(
      `${process.env.PUBLIC_URL}/api/product/allProducts`
    );
    dispatch({ type: GET_PRODUCTS, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_POPULATION, payload: error.response.data.errors });
  }
};