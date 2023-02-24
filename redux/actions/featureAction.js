import { GLOBALTYPES } from "../GlobalTypes";

export const feature = (data) => (dispatch) => {
  dispatch({ type: GLOBALTYPES.FEATURE, payload: data });
};
