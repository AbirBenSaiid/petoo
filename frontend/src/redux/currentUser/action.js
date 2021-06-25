import {
  USER_EDITED,
  CURRENT_USER,
  VIDE_ERRORS,
  FAIL_APP,
  GET_MY_PETS,
  GET_ASSIGNED_PETS,
  GET_MY_APPOINTMENTS,
  FAIL_PET,
} from "../actionTypes";

import axios from "axios";

export const videErrors = () => {
  return {
    type: VIDE_ERRORS,
  };
};

export const current = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    let result = await axios.get(
      `${process.env.PUBLIC_URL}/api/dashboard/default/current`,
      config
    );
    // console.log(result.data.userLogged);
    dispatch({ type: CURRENT_USER, payload: result.data }); //{msg , user}
  } catch (error) {
    localStorage.removeItem("token");
    window.location.href = `${process.env.PUBLIC_URL}/login`;
  }
};

//get current user appointments
export const getMyAppointments = (idUser) => async (dispatch) => {
  try {
    const s = { idUser: idUser };
    let result = await axios.post(
      `${process.env.PUBLIC_URL}/api/appointment/getMyAppointments`,
      s
    );
    dispatch({ type: GET_MY_APPOINTMENTS, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_APP, payload: error.response.data.errors });
  }
};

//get current owner pets
export const getMyPets = (idUser) => async (dispatch) => {
  try {
    const s = { idUser: idUser };
    let result = await axios.post(
      `${process.env.PUBLIC_URL}/api/pet/getYourPets`,
      s
    );
    dispatch({ type: GET_MY_PETS, payload: result.data });
  } catch (errors) {
    /*     dispatch({ type: FAIL_PET, payload: errors.response.data.errors });
     */
  }
};
//get assigned pet from appointment to Vet
export const getAssignedPets = (idUser) => async (dispatch) => {
  try {
    let result = await axios.post(
      `${process.env.PUBLIC_URL}/api/pet/assignedPets`,
      { idVet: idUser }
    );
    dispatch({ type: GET_ASSIGNED_PETS, payload: result.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: FAIL_PET, payload: error.response.data.errors });
  }
};

//modif profile
export const userEdit = (user, history) => async (dispatch) => {
  try {
    let result = await axios.post(`${process.env.PUBLIC_URL}/api/editUser`, {
      user,
    });
    dispatch({ type: USER_EDITED, payload: result.data });
    history.push(`${process.env.PUBLIC_URL}/dashboard`);
  } catch (error) {
    dispatch({ type: FAIL_APP, payload: "error happened" });
  }
};
