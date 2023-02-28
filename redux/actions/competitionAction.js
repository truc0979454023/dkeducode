import { GLOBALTYPES } from "../GlobalTypes";

export const setCompetitionID = (data) => (dispatch) => {
  dispatch({ type: GLOBALTYPES.SET_COMPETITION_ID, payload: data });
};

export const setExamID = (data) => (dispatch) => {
  dispatch({ type: GLOBALTYPES.SET_EXAM_ID, payload: data });
};
