const {
  REGISTER_USER,
  LOGIN_USER,
  FAIL_USER,
  LOAD_USER,
  RESET_USER,
  LOGOUT_USER,
  RESET_PASSWORD,
  VALIDATE_OTP,
  VIDE_ERRORS,
} = require("../actionTypes");

// initialstate
const initialState = {
  user: {},
  errors: [],
  isAuth: false,
  load: false,
  msg: "",
};

// pure function=> (state, {type,payload})=>
const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_USER:
      return { ...state, load: true };
    //   payload:{token , msg , user }
    case REGISTER_USER:
      // localStorage.setItem("token", payload.token);
      return {
        ...state,
        load: false,
        isAuth: false,
        msg: payload,
        errors: [],
      };
    //   payload: {token , msg , user}
    case LOGIN_USER:
      localStorage.setItem("token", payload.token);
      return { ...state, user: payload.foundOwner, load: false, isAuth: true };
    case FAIL_USER:
      return { ...state, errors: payload, msg: "", load: false };
    case RESET_USER:
      return {
        ...state,
        user: {},
        errors: [],
        isAuth: false,
        load: false,
        msg: "",
      };
    case LOGOUT_USER:
      localStorage.removeItem("token");
      return { ...state, user: {}, isAuth: false };
    case RESET_PASSWORD: {
      if (typeof payload.msg === "string")
        return {
          ...state,
          msg: payload.msg,
          errors: [],
          isAuth: false,
          load: false,
          user: payload.email,
        };
      else
        return {
          ...state,
          errors: payload.errors,
          msg: "",
          isAuth: false,
          load: false,
        };
    }
    case VALIDATE_OTP:
      if (typeof payload.msg === "string")
        // { msg }
        return {
          ...state,
          // user: payload.user,
          isAuth: false,
          load: false,
          errors: [],
          msg: payload.msg,
        };
      //email , password, OTP
      else {
        return { ...state, errors: payload };
      }
    case VIDE_ERRORS:
      return { ...state, errors: [], msg: "" };
    default:
      return state;
  }
};

export default userReducer;
