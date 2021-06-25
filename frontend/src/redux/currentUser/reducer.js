import {
  USER_EDITED,
  CURRENT_USER,
  VIDE_ERRORS,
  GET_MY_PETS,
  FAIL_PET,
  GET_MY_APPOINTMENTS,
  GET_ASSIGNED_PETS,
} from "../actionTypes";

//Initale States
const initialState = {
  user: {},
  errors: [],
  isAuth: false,
  load: false,
  msg: "",
  myPets: [],
  myAssignedPets: [],
  myAppointments: [],
};

//current user reducer
const currentUser = (state = initialState, { type, payload }) => {
  switch (type) {
    case CURRENT_USER:
      return {
        ...state,
        user: payload.userLogged,
        isAuth: true,
        msg: payload.msg,
        load: false,
      };
    case USER_EDITED:
      return {
        ...state,
        load: false,
        user: payload.foundUser,
        msg: payload.msg,
      };
    case GET_MY_APPOINTMENTS:
      return {
        ...state,
        myAppointments: payload.arrayOfAppointments.reverse(),
        msg: payload.msg,
        load: false,
      };
    case VIDE_ERRORS:
      return { ...state, errors: [], msg: "", load: false };
    case GET_MY_PETS:
      return { ...state, myPets: payload.arr, msg: payload.msg };
    case GET_ASSIGNED_PETS:
      return {
        ...state,
        myAssignedPets: payload.arr,
        msg: payload.msg,
      };

    case FAIL_PET:
      return { ...state, errors: payload.errors };
    default:
      return state;
  }
};

export default currentUser;
