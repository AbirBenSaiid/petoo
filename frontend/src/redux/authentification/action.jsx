import {
  LOGOUT_USER,
  FAIL_USER,
  LOAD_USER,
  LOGIN_USER,
  REGISTER_USER,
  RESET_USER,
  RESET_PASSWORD,
  VALIDATE_OTP,
  VIDE_ERRORS,
} from "../actionTypes";

import axios from "axios";

export const login = (user) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    let result = await axios.post(`${process.env.PUBLIC_URL}/api/login`, user);
    // console.log(result.data);
    // console.log(`${process.env.PUBLIC_URL}`);
    dispatch({ type: LOGIN_USER, payload: result.data }); // payload : {msg,token,user}
    window.location.href = `${process.env.PUBLIC_URL}/dashboard/`; //Nice Samuuu
  } catch (error) {
    console.log(error.response.data.errors);
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};

export const register = (user, history) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    let result = await axios.post(
      `${process.env.PUBLIC_URL}/api/register`,
      user
    );
    dispatch({ type: REGISTER_USER, payload: result.data.msg }); // payload : {msg}
    history.push(`${process.env.PUBLIC_URL}/login`);
  } catch (error) {
    // console.log(error.response.data);
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};

export const registerVet = (vet, history) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    let result = await axios.post(
      `${process.env.PUBLIC_URL}/api/vet/register`,
      vet
    );
    dispatch({ type: REGISTER_USER, payload: result.data.msg }); 
    history.push(`${process.env.PUBLIC_URL}/login`);
  } catch (error) {
    // console.log(error.response.data);
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};
export const resetUserReducer = (dispatch) =>{
  dispatch ({ type: RESET_USER})
}

export const registerShop = (shop, history) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    let result = await axios.post(
      `${process.env.PUBLIC_URL}/api/shop/register`,
      shop
    );
    dispatch({ type: REGISTER_USER, payload: result.data.msg }); 
    // history.push(`${process.env.PUBLIC_URL}/dashboard/`);
  } catch (error) {
      console.log(error.response.data);
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};

// logout
export const logout = (history) => {
  window.location.href = `${process.env.PUBLIC_URL}/login`;
  return {
    type: LOGOUT_USER,
  };
};

export const videErrors = () => {
  return {
    type: VIDE_ERRORS,
  };
};

//reset password
export const resetPassword = (email) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    let result = await axios.post(
      `${process.env.PUBLIC_URL}/api/forgetPwd/otp`,
      { email }
    );
    console.log(result.data);
    dispatch({ type: RESET_PASSWORD, payload: result.data }); //{msg, email}
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data.error });
  }
};
export const validOTP = (email, otp, password, history) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    let result = await axios.post(`${process.env.PUBLIC_URL}/api/forgetPwd`, {
      email,
      otp,
      password,
      history,
    });
    console.log(result.data);
    dispatch({ type: VALIDATE_OTP, payload: result.data }); //{msg}
    history.push(`${process.env.PUBLIC_URL}/login`);
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
    console.log("Error redux reset pass: ", error.response.data.errors);
  }
};
