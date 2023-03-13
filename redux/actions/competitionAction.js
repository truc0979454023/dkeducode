import { GLOBALTYPES } from "../GlobalTypes";

export const setCompetitionID = (data) => (dispatch) => {
  dispatch({ type: GLOBALTYPES.SET_COMPETITION_ID, payload: data });
};

export const setExamID = (data) => (dispatch) => {
  dispatch({ type: GLOBALTYPES.SET_EXAM_ID, payload: data });
};

export const setIsTryAgain = (data) => (dispatch) => {
  localStorage.setItem("isTryAgain", true);
  dispatch({ type: GLOBALTYPES.TRY_AGAIN, payload: data });
};
