const {
    ADD_PRODUCT, FAIL_PRODUCT, LOAD_PRODUCT, VIDE_ERRORS_MSG_ 
  } = require("../actionTypes");
  
  const initialState = {
    load: false,
    product: {},
    errors: [],
    msg: "",
    products: [],
  };
  
  const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case ADD_PRODUCT:
        if (typeof payload.msg === "string") {
          return {
            ...state,
            product: payload.newProduct,
            load: false,
            msg: payload.msg,
            products: state.products.push(payload.newProduct),
          };
        }
        else {
          return { ...state, errors: payload, load: false }
        }
      
      case FAIL_PRODUCT:
        return { ...state, errors: payload, load: false };
  
      case LOAD_PRODUCT:
        return { ...state, load: true };
  
      case  VIDE_ERRORS_MSG_ :
        return { ...state, load: false, msg: "", errors: [] };
  
      default:
        return state;
    }
  };
  export default productReducer;
  