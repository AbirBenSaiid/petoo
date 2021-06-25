const {
  ADD_PET,
  FAIL_PET,
  LOAD_PET,
  VIDE_ERRORS_MSG,
} = require("../actionTypes");

const initialState = {
  load: false,
  pet: {},
  errors: [],
  msg: "",
  pets: [],
};

const petReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PET:
      if (typeof payload.msg === "string") {
        return {
          ...state,
          pet: payload.newPet,
          load: false,
          msg: payload.msg,
          pets: state.pets.push(payload.newPet),
        };
      }
      break
    
    // } else {
    //   return { ...state, load: false, errors: payload.errors };
    // }

    /* case FAIL_PET:
      return { ...state, errors: payload.errors, load: false }; */ // Fama mochkla houni quelque part 
// eslint-disable-next-line
    case FAIL_PET:
      return { ...state, errors: payload.errors, load: false };

    case LOAD_PET:
      return { ...state, load: true };

    case VIDE_ERRORS_MSG:
      return { ...state, load: false, msg: "", errors: [] };

    default:
      return state;
  }
};
export default petReducer;
