const {
  GET_OWNERS,
  GET_VETOS,
  GET_PETS,
  FAIL_POPULATION,
  VIDE_ERRORS,
  GET_BLOGS,
  GET_PRODUCTS
} = require("../actionTypes");

const initialState = {
  msg: "",
  errors: [],
  owners: [],
  vetos: [],
  pets: [],
  blogs: [],
  products:[],
};

const populationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_OWNERS:
      return { ...state, owners: payload.foundAllOwners, msg: payload.msg };
    case GET_VETOS:
      return {
        ...state,
        vetos: payload.foundAllVetos.reverse(),
        msg: payload.msg,
      };
    case GET_PETS:
      return {
        ...state,
        owners: payload.foundAllPets.reverse(),
        msg: payload.msg,
      };
    case GET_BLOGS:
      return {
        ...state,
        blogs: payload.foundAllBlogs.reverse(),
        msg: payload.msg,
      };
      case GET_PRODUCTS:
        return {
          ...state,
          products: payload.foundAllProducts.reverse(),
          msg: payload.msg,
        };
    case FAIL_POPULATION:
      return { ...state, errors: payload };
    case VIDE_ERRORS:
      return { ...state, msg: "", errors: [] };
    default:
      return state;
  }
};

export default populationReducer;
