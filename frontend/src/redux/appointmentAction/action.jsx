import axios from "axios";
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

//ADD Appointment by Owner
export const addAppointmentByOwner =
  (vetID, petID, ownerID, appointment, history) => async (dispatch) => {
    dispatch({ type: LOAD_APP });
    try {
      console.log(vetID, petID, ownerID, appointment);
      const result = await axios.post(
        `${process.env.PUBLIC_URL}/api/appointment/createByOwner`,
        {
          appointment,
          vetID,
          petID,
          ownerID,
        }
      );
      dispatch({ type: ADD_APP, payload: result.data });
    } catch (error) {
      dispatch({ type: FAIL_APP, payload: error.response.data.errors });
    }
  };

export const videErrors = () => {
  return {
    type: VIDE_ERRORS_MSGS,
  };
};

//ADD appointment by Vet
export const addAppointmentByVet =
  (vetID, petID, ownerID, appointment, history) => async (dispatch) => {
    dispatch({ type: LOAD_APP });
    try {
      let result = await axios.post(
        `${process.env.PUBLIC_URL}/api/appointment/createByVet`,
        {
          appointment,
          vetID,
          petID,
          ownerID,
        }
      );
      dispatch({ type: ADD_APP, payload: result.data });
    } catch (error) {
      dispatch({ type: FAIL_APP, payload: error.response.data.errors });
    }
  };

//Edit appointment by Vet
export const editAppointmentByVet =
  (vetID, newDateOfAppointment, ownerID, appointmentID, history) =>
  async (dispatch) => {
    dispatch({ type: LOAD_APP });
    try {
      let result = await axios.post(
        `${process.env.PUBLIC_URL}/api/appointment/editByVet`,
        {
          appointmentID,
          vetID,
          newDateOfAppointment,
          ownerID,
        }
      );
      dispatch({ type: EDIT_BY_VET, payload: result.data });
    } catch (error) {
      dispatch({ type: FAIL_APP, payload: error.response.data.errors });
    }
  };

//Edit appointment by Owner
export const editAppointmentByOwner =
  (vetID, newDateOfAppointment, ownerID, appointmentID, history) =>
  async (dispatch) => {
    dispatch({ type: LOAD_APP });
    try {
      let result = await axios.post(
        `${process.env.PUBLIC_URL}/api/appointment/editByOwner`,
        {
          appointmentID,
          vetID,
          newDateOfAppointment,
          ownerID,
        }
      );
      dispatch({ type: EDIT_BY_OWNER, payload: result.data });
    } catch (error) {
      dispatch({ type: FAIL_APP, payload: error.response.data.errors });
    }
  };

//Edit appointment by Owner
export const acceptAppointmentByOwner =
  (vetID, petID, ownerID, appointmentID, history) => async (dispatch) => {
    dispatch({ type: LOAD_APP });
    try {
      let result = await axios.post(
        `${process.env.PUBLIC_URL}/api/appointment/AcceptbyOwner`,
        {
          appointmentID,
          vetID,
          petID,
          ownerID,
        }
      );
      dispatch({ type: ACCEPT_BY_OWNER, payload: result.data });
    } catch (error) {
      dispatch({ type: FAIL_APP, payload: error.response.data.errors });
    }
  };

//Edit appointment by Owner
export const acceptAppointmentByVet =
  (vetID, petID, ownerID, appointmentID, history) => async (dispatch) => {
    dispatch({ type: LOAD_APP });
    try {
      let result = await axios.post(
        `${process.env.PUBLIC_URL}/api/appointment/AcceptbyVet`,
        {
          appointmentID,
          vetID,
          petID,
          ownerID,
        }
      );
      dispatch({ type: ACCEPT_BY_VET, payload: result.data });
    } catch (error) {
      dispatch({ type: FAIL_APP, payload: error.response.data.errors });
    }
  };
