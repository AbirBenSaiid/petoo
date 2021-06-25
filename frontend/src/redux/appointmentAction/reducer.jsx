const {
  ADD_APP,
  FAIL_APP,
  LOAD_APP,
  VIDE_ERRORS_MSGS,
  EDIT_BY_OWNER,
  EDIT_BY_VET,
  ACCEPT_BY_OWNER,
  ACCEPT_BY_VET,
} = require("../actionTypes");

const initialState = {
  load: false,
  appointment: {},
  errors: [],
  msg: "",
  confirmed: false,
};

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_APP:
      return {
        ...state,
        appointment: payload.newAppointment,
        load: false,
        msg: payload.msg,
        confirmed:
          payload.newAppointment.confirmedByVet &&
          payload.newAppointment.confirmedByOwner,
      };
    case FAIL_APP:
      return { ...state, errors: payload, load: false };
    case LOAD_APP:
      return { ...state, load: true };
    case VIDE_ERRORS_MSGS:
      return { ...state, load: false, msg: "", errors: [], appointment: {} };

    case EDIT_BY_OWNER:
      if (typeof payload.msg === "string") {
        return {
          ...state,
          confirmed:
            payload.foundAppointment.confirmedByVet &&
            payload.foundAppointment.confirmedByOwner,
          appointment: payload.foundAppointment,
          msg: payload.msg,
          load: false,
        };
      } else {
        return { ...state, load: false, errors: payload };
      }
    case EDIT_BY_VET:
      if (typeof payload.msg === "string") {
        return {
          ...state,
          confirmed:
            payload.foundAppointment.confirmedByVet &&
            payload.foundAppointment.confirmedByOwner,
          appointment: payload.foundAppointment,
          msg: payload.msg,
          load: false,
        };
      } else {
        return { ...state, load: false, errors: payload };
      }
    case ACCEPT_BY_VET:
      if (typeof payload.msg === "string") {
        return {
          ...state,
          confirmed:
            payload.foundApp.confirmedByVet &&
            payload.foundApp.confirmedByOwner,
          appointment: payload.foundApp,
          msg: payload.msg,
          load: false,
        };
      } else {
        return { ...state, load: false, errors: payload };
      }
    case ACCEPT_BY_OWNER:
      if (typeof payload.msg === "string") {
        return {
          ...state,
          confirmed:
            payload.foundApp.confirmedByVet &&
            payload.foundApp.confirmedByOwner,
          appointment: payload.foundApp,
          msg: payload.msg,
          load: false,
        };
      } else {
        return { ...state, load: false, errors: payload };
      }
    default:
      return state;
  }
};
export default appReducer;
