const {
  MARK_READ_NOTIF,
  FAIL_NOTIF,
  CHECK_ALL_NOTIFS,
  GET_ALL_NOTIFS,
} = require("../actionTypes");

const initialState = {
  isRead: false,
  msg: "",
  creationDate: "",
  errors: [],
  allNotifArray: [],
};

const notifReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_NOTIFS:
      return {
        ...state,
        allNotifArray: payload.arr.reverse(),
        msg: payload.msg,
      };
    case CHECK_ALL_NOTIFS:
      return {
        ...state,
        msg: payload.msg,
      };
    case MARK_READ_NOTIF:
      return {
        ...state,
        isRead: payload.foundNotif.isRead,
        msg: payload.msg,
        creationDate: payload.foundNotif.creationDate,
      };
    case FAIL_NOTIF:
      return { ...state, errors: payload };
    default:
      return state;
  }
};

export default notifReducer;
