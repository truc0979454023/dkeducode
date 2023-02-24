import { GLOBALTYPES } from "../GlobalTypes";

const initialState = {};

const featureReducer = (state = initialState, action) => {
  switch (action.type) {
    case GLOBALTYPES.FEATURE:
      return action.payload;
    default:
      return state;
  }
};

export default featureReducer;
