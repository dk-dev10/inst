import { api } from "../../api";
import { getAuthorizeduserSuccess, getUserFailed, getUserStarted, getUserSucces } from "../actionCreators/users";

export const getUser = (id) => {
  return async (dispatch) => {
    try {
     dispatch(getUserStarted())
      const response = await api.users.getUser(id);

      dispatch(getUserSucces(response.data))

    } catch (error) {
      dispatch(getUserFailed)
    }
  }
}

export const getAuthorizedUser = (id) => {
  return async (dispatch) => {
    try {
     dispatch(getUserStarted())
      const response = await api.users.getUser(1);

      dispatch(getAuthorizeduserSuccess(response.data))

    } catch (error) {
      dispatch(getUserFailed)
    }
  }
}