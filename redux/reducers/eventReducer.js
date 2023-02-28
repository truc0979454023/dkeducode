import { GLOBALTYPES } from "../GlobalTypes";

const initialState = {};

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case GLOBALTYPES.EVENT:
      return action.payload;
    default:
      return state;
  }
};

export default eventReducer;
