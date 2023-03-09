import Cookies from "js-cookie";
import { GLOBALTYPES } from "../GlobalTypes";
import {
  convertTokenUserEvent,
  loginUserEvent,
} from "../../pages/api/competition/competition";

export const login = (data) => async (dispatch) => {
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });

    const res = await loginUserEvent(data);

    if (res.data.status_code === 204) {
      return dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: res.data.detail },
      });
    }

    Cookies.set("token", res.data.data.access_token);
    dispatch({
      type: GLOBALTYPES.AUTH,
      payload: { user: res.data.data },
    });

    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } });
  } catch (error) {
    if (error.response?.status === 401) {
      return dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: error.response.data.detail },
      });
    }

    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { error: "Xảy ra lỗi! Thử lại sau" },
    });
  }
};

export const convertToken = (token) => async (dispatch) => {
  if (token) {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
    try {
      const res = await convertTokenUserEvent(token);
      dispatch({
        type: GLOBALTYPES.AUTH,
        payload: { user: res.data.data },
      });

      dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } });
    } catch (error) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: error?.response?.data.detail },
      });
    }
  }
};

export const logout = () => (dispatch) => {
  Cookies.remove("token");
  dispatch({
    type: GLOBALTYPES.AUTH,
    payload: null,
  });
};
